package keeper

import (
	"context"
	"encoding/json"
	"fmt"
	"time"

	"electra/x/meter/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Listrecordings100(goCtx context.Context, req *types.QueryListrecordings100Request) (*types.QueryListrecordings100Response, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Process the query

	// Performance Management
	start := time.Now()

	var meterreadingss []types.Meterreadings
	var total uint64 = 0
	// Define a variable from request
	var mydeviceID string = req.DeviceID
	var from uint64
	from = uint64(time.Now().Unix()) // Time now
	from -= 110                      // Time now -110  seconds

	var stDebug string = fmt.Sprintf("Electra %d >> ", from)

	store := ctx.KVStore(k.storeKey)
	meterreadingsStore := prefix.NewStore(store, types.KeyPrefix(types.MeterreadingsKeyPrefix))
	// stDebug = stDebug + " myDeviceID:" + mydeviceID
	// stDebug = stDebug + fmt.Sprintf(" From:  %d | ", uint64(from))
	// stDebug = stDebug + fmt.Sprintf(" To:  %d | ", uint64(to))

	iterator := sdk.KVStorePrefixIterator(meterreadingsStore, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var meterreadings types.Meterreadings
		k.cdc.Unmarshal(iterator.Value(), &meterreadings)
		if (mydeviceID == meterreadings.DeviceID) && (uint64(meterreadings.Timestamp) >= uint64(from)) && (total <= 99) {
			//stDebug = stDebug + fmt.Sprintf(" Timestamp:  %d | ", meterreadings.Timestamp)
			meterreadingss = append(meterreadingss, meterreadings)
			total++
		}
	}
	////////////////////////////////////////////////////////////
	/*
		pageRes, err := query.Paginate(meterreadingsStore, req.Pagination, func(key []byte, value []byte) error {
			var meterreadings types.Meterreadings
			if err := k.cdc.Unmarshal(value, &meterreadings); err != nil {
				stDebug = stDebug + " Error " + err.Error()
				return err
			}
			// stDebug = stDebug + " mydeviceID:" + meterreadings.DeviceID
			// stDebug = stDebug + " DeviceID:" + meterreadings.DeviceID
			// stDebug = stDebug + fmt.Sprintf(" Timestamp:  %d | ", meterreadings.Timestamp)
			if (mydeviceID == meterreadings.DeviceID) && (uint64(meterreadings.Timestamp) >= uint64(from)) && (total <= 99) {
				//stDebug = stDebug + fmt.Sprintf(" Timestamp:  %d | ", meterreadings.Timestamp)
				meterreadingss = append(meterreadingss, meterreadings)
				total++
			}
			return nil
		})
	*/

	stDebug = stDebug + fmt.Sprintf(" total:  %d | ", total)

	// Convert to array of json string
	var displaylines []string
	for _, line := range meterreadingss {
		json, _ := json.Marshal(line)
		displaylines = append(displaylines, string(json))
	}

	elapsed := time.Since(start)
	stDebug = stDebug + fmt.Sprintf("Search took %s", elapsed)
	//return &types.QueryListrecordingsResponse{Meterreadings: displaylines, Comments: stDebug, Total: total}, nil

	//return &types.QueryListrecordings100Response{}, nil
	return &types.QueryListrecordings100Response{Meterreadings: displaylines, Comments: stDebug, Total: total}, nil

}
