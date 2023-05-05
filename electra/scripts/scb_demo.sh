#!/bin/bash
timestamp0=$(date +%s)
echo $timestamp0
electrad query meter currentcycle-id | grep "cycleID:"
cycle=$(electrad query meter currentcycle-id | grep "cycleID:" | grep -o '[0-9]\+')
echo $cycle
# Factory is test1
test1="electra12lhecv88myvrmgv92syj782dxjfsnjjg3lzvv7" 
# Warehouse is test2
test2="electra12r6lx69zfef6ht3fk7drm9f5222qk4ur6zjpvz" 
# Gateway to National Grid is prod1
prod1="electra16p7dd9wp76kmxckus64un7udt59kvprfd0tw8v" 

# prod2="electra1rf56um69dum7em0kx9xen794x8gm49vxstkjwy"
# Contracts
contractprod1="prod10000-1c4c-4963-872a-5c0175e612d2" 
contractprod2="prod20000-2222-4963-872a-5c0175e612d2"

# test3="electra19mhfyxz7532gumtyw5zrq00qv23mqtc4plgfzy"
factoryIn=1000000
factoryOut=88888
warehouseIn=1000000
warehouseOut=88888
gridOut=1000000
lineid=10
weather=1 # on variable maxmi : 1 night  2 sun  3 rain   4 cloudy sun 

electrad tx meter record $(date '+%s') 1 $factoryIn  $factoryOut 230 50 0 $weather  --from test1 -y | grep "raw_log:"
sleep 0.1
electrad tx meter record $(date '+%s') 1 $warehouseIn $warehouseOut 230 50 0 $weather   --from test2 -y | grep "raw_log:"
sleep 0.1
electrad tx meter record $(date '+%s') 1 0 $gridOut 230 50 0 $weather   --from prod1 -y | grep "raw_log:"
sleep 0.1

#####################################################################################################

while true; do
  electrad tx meter record $(date '+%s') 1 $factoryIn  $factoryOut 230 50 0 $weather   --from test1 -y | grep "raw_log:" | grep "err"
  sleep 0.2
  electrad tx meter record $(date '+%s') 1 $warehouseIn $warehouseOut 230 50 0 $weather   --from test2 -y | grep "raw_log:" | grep "err"
  sleep 0.2
  electrad tx meter record $(date '+%s') 1 0 $gridOut 230 50 0 $weather   --from prod1 -y | grep "raw_log:" | grep "err"
  echo "Press a key to stop the 1-NIGHT Period | with NO SUN"
  read -t 0.2 -n 1 && break
  if [[ $gridOut -le 93 ]]; then
    factoryIn=$((factoryIn + 7))
    gridOut=$((gridOut + 7))
  fi
done
factoryIn=1000050
factoryOut=88888 # no change
warehouseIn=1000000 #  no change
warehouseOut=88888 # no change
gridOut=1000050

electrad tx meter record $(date '+%s') 1 $factoryIn  $factoryOut 230 50 0 $weather --from test1 -y | grep "raw_log:"
sleep 0.2
electrad tx meter record $(date '+%s') 1 $warehouseIn $warehouseOut 230 50 0 $weather  --from test2 -y | grep "raw_log:"
sleep 0.2
electrad tx meter record $(date '+%s') 1 0 $gridOut 230 50 0 $weather  --from prod1 -y | grep "raw_log:"
# sleep 0.2
echo " ############################################################### "
echo " end of period 1 - Night - now does the billing for this epoch"
timestamp1=$(date +%s)
echo $timestamp1
cycle=$((cycle + 1))   # Increment the cycle
# create-billingcycles [cycle-id] [begin] [end] [whin] [whout] [moneyin] [moneyout] [curency] [valid] [paid]
electrad tx meter create-billingcycles $cycle $timestamp0 $timestamp1 0 0 0 0 "stTH" true true --from bob -y | grep "raw_log: 'failed" 
((lineid++)) # Increment the lineid
# create-customerbillingline [customer-device-id] [cycle-id] [lineid] [paid] [producer-device-id] [bill-contract-id] [line-wh] [line-wh-price] [curency] [line-wh-total-price] [phase] [reference-price] [savings]
electrad tx meter create-customerbillingline $test1 $cycle $lineid false $prod1 "test1-prod1" 1000 6600 "stTH" 1000 1 6 0 --from bob -y | grep "raw_log: 'failed"
electrad tx meter create-producerbillingline $prod1 $cycle $lineid false $test1 "test1-prod1" 1000 6600 "stTH" 1000 1 --from bob -y | grep "raw_log: 'failed"
((lineid++)) # Increment the lineid
electrad tx meter create-customerbillingline $test2 $cycle $lineid false $prod1 "test2-prod1" 1000 6600 "stTH" 1000 1 6 0 --from bob -y | grep "raw_log: 'failed"
electrad tx meter create-producerbillingline $prod1 $cycle $lineid false $test2 "test2-prod1" 1000 6600 "stTH" 1000 1 --from bob -y | grep "raw_log: 'failed"
echo " ############################################################### "
###########################################################################################3
# 2 SUNNY Now
weather=2
while true; do
  electrad tx meter record $(date '+%s') 1 $factoryIn  $factoryOut 230 50 0 $weather   --from test1 -y | grep "raw_log:" | grep "err"
  sleep 0.2
  electrad tx meter record $(date '+%s') 1 $warehouseIn $warehouseOut 230 50 0 $weather   --from test2 -y | grep "raw_log:" | grep "err"
  sleep 0.2
  electrad tx meter record $(date '+%s') 1 0 $gridOut 230 50 0 $weather   --from prod1 -y | grep "raw_log:" | grep "err"
  echo "Press a key to stop the 2-SUNNY MORNING Period | with FULL SUN on the Solar Pannel"
  read -t 0.2 -n 1 && break
  if [[ $gridOut -le 93 ]]; then
    factoryOut=$((factoryOut + 3))
    warehouseIn=$((warehouseIn + 3))
  fi
done
# factory Demand	Production	Balance
#factoryIn=1000222 # No change

factoryOut=88888 # no change
factoryOut=$((factoryOut + 50))  # Factory peroduces
last_factoryIn=$factoryIn
last_factoryOut=$factoryOut
# warehouse Demand	Production	Balance
warehouseIn=1000000 #  no change
warehouseIn=$((warehouseIn + 50)) # Warehouse consumes
last_warehouseIn=$warehouseIn
last_warehouseOut=$warehouseOut
Last_gridOut=$gridOut
# warehouseOut=88888 # No change
# Grif Prod
# gridOut=1000000 # No change
electrad tx meter record $(date '+%s') 1 $factoryIn  $factoryOut 230 50 0 $weather --from test1 -y | grep "raw_log:"
sleep 0.2
electrad tx meter record $(date '+%s') 1 $warehouseIn $warehouseOut 230 50 0 $weather  --from test2 -y | grep "raw_log:"
sleep 0.2
electrad tx meter record $(date '+%s') 1 0 $gridOut 230 50 0 $weather  --from prod1 -y | grep "raw_log:"
echo " ############################################################### "
echo " end of period 2 - SUNNY - now does the billing for this epoch"
timestamp2=$(date +%s)
echo $timestamp2
cycle=$((cycle + 1))   # Increment the cycle
# create-billingcycles [cycle-id] [begin] [end] [whin] [whout] [moneyin] [moneyout] [curency] [valid] [paid]
electrad tx meter create-billingcycles $cycle $timestamp1 $timestamp2 0 0 0 0 "stTH" true true --from bob -y | grep "raw_log: 'failed" 
((lineid++)) # Increment the lineid
# create-customerbillingline [customer-device-id] [cycle-id] [lineid] [paid] [producer-device-id] [bill-contract-id] [line-wh] [line-wh-price] [curency] [line-wh-total-price] [phase] [reference-price] [savings]
electrad tx meter create-customerbillingline $test2 $cycle $lineid false $test1 "test1-prod1" 50 6600 "stTH" 1000 1 6 300 --from bob -y | grep "raw_log: 'failed"
electrad tx meter create-producerbillingline $test1 $cycle $lineid false $test2 "test1-prod1" 50 6600 "stTH" 1000 1 --from bob -y | grep "raw_log: 'failed"
echo " ############################################################### "


###########################################################################################3
# 3 HEAVY  TROPICAL RAIN Now
weather=3
while true; do
  electrad tx meter record $(date '+%s') 1 $factoryIn  $factoryOut 230 50 0 $weather   --from test1 -y | grep "raw_log:" | grep "err"
  sleep 0.2
  electrad tx meter record $(date '+%s') 1 $warehouseIn $warehouseOut 230 50 0 $weather   --from test2 -y | grep "raw_log:" | grep "err"
  sleep 0.2
  electrad tx meter record $(date '+%s') 1 0 $gridOut 230 50 0 $weather   --from prod1 -y | grep "raw_log:" | grep "err"
  echo "Press a key to stop the 3 - HEAVY  TROPICAL RAIN Period | with no Solar "
  read -t 0.2 -n 1 && break
  if [[ $gridOut -le 93 ]]; then
    factoryIn=$((factoryIn + 6))
    warehouseOut=$((warehouseOut + 3))
    gridOut=$((gridOut + 3))
  fi
done
# factory Demand	Production	Balance
factoryIn=$((factoryIn + 100))    # Factory consumes
#factoryOut=$((factoryOut + 50))  # Factory peroduces 0
# warehouse Demand	Production	Balance
# warehouseIn=$((warehouseIn + 50)) # Warehouse consumes 0 thanks to telsa trucks stucks in
warehouseOut=$((warehouseOut + 50)) # Warehouse peroduces
# Grif Prod
gridOut=$((gridOut + 50)) # Grid feeds the Factory
last_factoryIn=$factoryIn
last_factoryOut=$factoryOut
last_warehouseIn=$warehouseIn
last_warehouseOut=$warehouseOut
Last_gridOut=$gridOut
electrad tx meter record $(date '+%s') 1 $factoryIn  $factoryOut 230 50 0 $weather --from test1 -y | grep "raw_log:"
sleep 0.2
electrad tx meter record $(date '+%s') 1 $warehouseIn $warehouseOut 230 50 0 $weather  --from test2 -y | grep "raw_log:"
sleep 0.2
electrad tx meter record $(date '+%s') 1 0 $gridOut 230 50 0 $weather  --from prod1 -y | grep "raw_log:"
echo " ############################################################### "
echo " end of period 3 - HEAVY  TROPICAL RAIN - now does the billing for this epoch"
timestamp3=$(date +%s)
echo $timestamp3
cycle=$((cycle + 1))   # Increment the cycle
# create-billingcycles [cycle-id] [begin] [end] [whin] [whout] [moneyin] [moneyout] [curency] [valid] [paid]
electrad tx meter create-billingcycles $cycle $timestamp2 $timestamp3 0 0 0 0 "stTH" true true --from bob -y | grep "raw_log: 'failed" 
((lineid++)) # Increment the lineid
# create-customerbillingline [customer-device-id] [cycle-id] [lineid] [paid] [producer-device-id] [bill-contract-id] [line-wh] [line-wh-price] [curency] [line-wh-total-price] [phase] [reference-price] [savings]
electrad tx meter create-customerbillingline $test1 $cycle $lineid false $test2 "test1-prod1" 50 6600 "stTH" 1000 1 6 50 --from bob -y | grep "raw_log: 'failed"
electrad tx meter create-producerbillingline $test2 $cycle $lineid false $test1 "test1-prod1" 50 6600 "stTH" 1000 1 --from bob -y | grep "raw_log: 'failed"
electrad tx meter create-customerbillingline $test1 $cycle $lineid false $prod1 "test1-prod1" 50 6600 "stTH" 1000 1 6 0 --from bob -y | grep "raw_log: 'failed"
electrad tx meter create-producerbillingline $prod1 $cycle $lineid false $test1 "test1-prod1" 50 6600 "stTH" 1000 1 --from bob -y | grep "raw_log: 'failed"

echo " ############################################################### "


###########################################################################################3
# 4 HEAVY  TROPICAL RAIN Now
weather=4
while true; do
  electrad tx meter record $(date '+%s') 1 $factoryIn  $factoryOut 230 50 0 $weather   --from test1 -y | grep "raw_log:" | grep "err"
  sleep 0.2
  electrad tx meter record $(date '+%s') 1 $warehouseIn $warehouseOut 230 50 0 $weather   --from test2 -y | grep "raw_log:" | grep "err"
  sleep 0.2
  electrad tx meter record $(date '+%s') 1 0 $gridOut 230 50 0 $weather   --from prod1 -y | grep "raw_log:" | grep "err"
  echo "Press a key to stop the 4-Evening Period | clouddy SUNNY evening Period | with some Solar "
  read -t 0.2 -n 1 && break
  if [[ $gridOut -le 93 ]]; then
    factoryOut=$((factoryIn + 7))
    warehouseIn=$((warehouseOut + 7))
    #gridOut=$((gridOut + 3))
  fi
done
# factory Demand	Production	Balance
#factoryIn=$((factoryIn + 100))    # Factory consumes
factoryOut=$((factoryOut + 100))  # Factory peroduces 0
# warehouse Demand	Production	Balance
warehouseIn=$((warehouseIn + 100)) # Warehouse consumes 0 thanks to telsa trucks stucks in
#warehouseOut=$((warehouseOut + 50)) # Warehouse peroduces
# Grif Prod
last_factoryIn=$factoryIn
last_factoryOut=$factoryOut
last_warehouseIn=$warehouseIn
last_warehouseOut=$warehouseOut
Last_gridOut=$gridOut
electrad tx meter record $(date '+%s') 1 $factoryIn  $factoryOut 230 50 0 $weather --from test1 -y | grep "raw_log:"
sleep 0.2
electrad tx meter record $(date '+%s') 1 $warehouseIn $warehouseOut 230 50 0 $weather  --from test2 -y | grep "raw_log:"
sleep 0.2
electrad tx meter record $(date '+%s') 1 0 $gridOut 230 50 0 $weather  --from prod1 -y | grep "raw_log:"
echo " ############################################################### "
echo " end of period 4-Evening Period | mild SUNNY evening- now does the billing for this epoch"
timestamp3=$(date +%s)
echo $timestamp3
cycle=$((cycle + 1))   # Increment the cycle
# create-billingcycles [cycle-id] [begin] [end] [whin] [whout] [moneyin] [moneyout] [curency] [valid] [paid]
electrad tx meter create-billingcycles $cycle $timestamp2 $timestamp3 0 0 0 0 "stTH" true true --from bob -y | grep "raw_log: 'failed" 
((lineid++)) # Increment the lineid
# create-customerbillingline [customer-device-id] [cycle-id] [lineid] [paid] [producer-device-id] [bill-contract-id] [line-wh] [line-wh-price] [curency] [line-wh-total-price] [phase] [reference-price] [savings]
electrad tx meter create-customerbillingline $test2 $cycle $lineid false $test1 "test1-prod1" 100 6600 "stTH" 1000 1 6 200 --from bob -y | grep "raw_log: 'failed"
electrad tx meter create-producerbillingline $test1 $cycle $lineid false $test2 "test1-prod1" 100 6600 "stTH" 1000 1 --from bob -y | grep "raw_log: 'failed"

echo " ############################################################### "


while true; do
  echo "Press a key to stop the 5-Evening Period |  "
  read -t 0.25 -n 1 && break
done