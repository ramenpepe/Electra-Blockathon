#!/bin/bash

# Set default value for customer name if not provided as command-line argument
CUSTOMER_NAME=${1:-bob}

# Set the maximum power output of the solar panel (in watts)
MAX_POWER=13000

# Initialize the energy generated to 0
ENERGY_GENERATED=0

while true; do
    # Calculate the current time in hours (using 24-hour clock)
    CURRENT_TIME=$(date +%H)

    # Calculate the percentage of maximum power output based on the current time
    if [[ "$CURRENT_TIME" -ge 6 && "$CURRENT_TIME" -lt 18 ]]; then
        # Daytime (6am-6pm)
        PERCENT_POWER=$(echo "scale=2; ($CURRENT_TIME - 6) * 100 / 12" | bc)
    else
        # Nighttime (6pm-6am)
        PERCENT_POWER=$(echo "scale=2; (18 + $CURRENT_TIME) * 100 / 30" | bc)
    fi

    # Calculate the current power output based on the percentage of maximum power output
    CURRENT_POWER=$(echo "scale=2; $MAX_POWER * $PERCENT_POWER / 100" | bc)

    # Calculate the energy generated in milliwatt-hours (mWh) since the last loop iteration
    ENERGY_GENERATED=$(echo "scale=0; $ENERGY_GENERATED + ($CURRENT_POWER * 1000) / 60" | bc)
    #ENERGY_GENERATED=$(echo "scale=0; $ENERGY_GENERATED + ($CURRENT_POWER * $VOLTAGE * $POWER_FACTOR * $MAX_INTENSITY * 1000) / 3600000" | bc)

    # Generate random values for voltage (between 228 and 237 volts), power factor (between 951 and 983), and max intensity (between 28 and 32 amperes)
    VOLTAGE=$(shuf -i 228-237 -n 1)
    POWER_FACTOR=$(shuf -i 951-983 -n 1)
    MAX_INTENSITY=$(shuf -i 28-32 -n 1)

    # Print the current time, power output, and energy generated for the customer
    echo "Hello $CUSTOMER_NAME, it's currently $(date +%H:%M)."
    echo "The current power output of your solar panel is $CURRENT_POWER watts."
    echo "You have generated a total of $ENERGY_GENERATED milliwatt-hours of energy."
    # electrad tx meter record [timestamp] [phase] [mwhin] [mwhout] [mvolt] [mhertz] [mpf] [maxmi]
    electrad tx meter record $(date '+%s') 1 0 $ENERGY_GENERATED $VOLTAGE 50 $POWER_FACTOR $MAX_INTENSITY  --from $CUSTOMER_NAME -y  
    # Wait for 1 minute before looping again
    sleep 60
done

