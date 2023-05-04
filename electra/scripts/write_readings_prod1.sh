#!/bin/bash

kwh=1122222

while true
do
  kwh=$((kwh+13))
  electrad tx meter record $(date '+%s') 1 $kwh 0 230000 50000 958 16 -
-from prod1 -y  | grep "raw_log:"
  sleep 1
done
