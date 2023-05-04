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

electrad tx meter record $(date '+%s') 1 $factoryIn  $factoryOut 230 50 0 16  --from test1 -y | grep "raw_log:"
sleep 0.2
electrad tx meter record $(date '+%s') 1 $warehouseIn $warehouseOut 230 50 0 16  --from test2 -y | grep "raw_log:"
sleep 0.2
electrad tx meter record $(date '+%s') 1 0 $gridOut 230 50 0 16  --from prod1 -y | grep "raw_log:"
sleep 0.2

while true; do
  electrad tx meter record $(date '+%s') 1 $factoryIn  $factoryOut 230 50 0 16  --from test1 -y | grep "raw_log:" | grep "err"
  sleep 0.2
  electrad tx meter record $(date '+%s') 1 $warehouseIn $warehouseOut 230 50 0 16  --from test2 -y | grep "raw_log:" | grep "err"
  sleep 0.2
  electrad tx meter record $(date '+%s') 1 0 $gridOut 230 50 0 16  --from prod1 -y | grep "raw_log:" | grep "err"
  sleep 0.2
  echo "Press a key to stop the 1-NIGHT Period | with NO SUN"
  read -t 0.2 -n 1 && break
  if [[ $gridOut -le 93 ]]; then
    factoryIn=$((factoryIn + 7))
    gridOut=$((gridOut + 7))
  fi
done
factoryIn=1000222
gridOut=1000000
electrad tx meter record $(date '+%s') 1 $factoryIn  $factoryOut 230 50 0 16  --from test1 -y | grep "raw_log:"
sleep 0.2
electrad tx meter record $(date '+%s') 1 $warehouseIn $warehouseOut 230 50 0 16  --from test2 -y | grep "raw_log:"
sleep 0.2
electrad tx meter record $(date '+%s') 1 0 $gridOut 230 50 0 16  --from prod1 -y | grep "raw_log:"
# sleep 0.2
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
electrad tx meter create-producerbillingline $prod1 $cycle $lineid false $test1 "test2-prod1" 1000 6600 "stTH" 1000 1 --from bob -y | grep "raw_log: 'failed"

while true; do
  echo "Press a key to stop the 2-Morning Period | SUNNY DAY"
  read -t 0.25 -n 1 && break
done

while true; do
  echo "Press a key to stop the 3-Noon Period | SUNNY DAY"
  read -t 0.25 -n 1 && break
done

while true; do
  echo "Press a key to stop the 4-Evening Period | SUNNY DAY"
  read -t 0.25 -n 1 && break
done