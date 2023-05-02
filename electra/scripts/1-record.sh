#!/usr/bin/env bash
electrad tx meter record $(date '+%s') 1 1000 0 230 50 958 12  --from alice -y  | grep "raw_log:"
electrad tx meter record $(date '+%s') 1 1450 0 230 50 963 16  --from bob -y  | grep "raw_log:"
electrad query meter list-meterreadings