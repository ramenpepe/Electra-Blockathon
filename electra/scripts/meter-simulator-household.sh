#!/bin/bash

# Define function to generate random number between 1 and 100
function generate_random_number {
  echo $((1 + RANDOM % 100))
}

# Define function to calculate electricity consumption based on time
function calculate_consumption {
  hour=$(date +"%H")
  if (( hour >= 8 && hour <= 12 )); then
    # Morning: 30-50 units
    consumption=$(generate_random_number)
    while (( consumption < 30 || consumption > 50 )); do
      consumption=$(generate_random_number)
    done
  elif (( hour >= 13 && hour <= 14 )) || (( hour >= 18 && hour <= 20 )); then
    # Lunch and Dinner: 200-400 units (oven)
    consumption=$(generate_random_number)
    while (( consumption < 200 || consumption > 400 )); do
      consumption=$(generate_random_number)
    done
  elif (( hour >= 21 || hour <= 7 )); then
    # Night: 10-20 units (lights) + 500-700 units (air condition) + 300-500 units (tesla car)
    consumption=0
    # Lights: 10-20 units (20 lights)
    lights_consumption=$(generate_random_number)
    while (( lights_consumption < 10 || lights_consumption > 20 )); do
      lights_consumption=$(generate_random_number)
    done
    consumption=$((consumption + lights_consumption))
    # Air condition: 500-700 units (5 rooms)
    ac_consumption=$(generate_random_number)
    while (( ac_consumption < 500 || ac_consumption > 700 )); do
      ac_consumption=$(generate_random_number)
    done
    consumption=$((consumption + ac_consumption))
    # Tesla car: 300-500 units (1 charge)
    car_consumption=$(generate_random_number)
    while (( car_consumption < 300 || car_consumption > 500 )); do
      car_consumption=$(generate_random_number)
    done
    consumption=$((consumption + car_consumption))
  else
    # Afternoon: 500-700 units (washing machine)
    consumption=$(generate_random_number)
    while (( consumption < 500 || consumption > 700 )); do
      consumption=$(generate_random_number)
    done
  fi
  echo $consumption
}

# Ask for wattage of appliances in the house
# read -p "Enter the assumed wattage of appliances in the house (in watts): " wattage

# Set default customer name to "bob"
customer=${1:-bob}

# Loop every minute and output the time and electricity consumption in milliwatt hours
while true; do
  timestamp=$(date +"%Y-%m-%d %H:%M:%S")
  echo "$timestamp"
#  consumption=$(calculate_consumption)
 consumption=1000
  if (( hour >= 21 || hour <= 7 )); then
    # Night: include air condition and car consumption in calculation
    consumption_mwh=$((consumption * 60 * 1000 + (ac_consumption + car_consumption) * 60 * 1000))
  else
    consumption_mwh=$((consumption * 60 * 1000))
  fi
  echo "$timestamp, $customer, $consumption_mwh milliwatt hours"
  sleep 60
done
