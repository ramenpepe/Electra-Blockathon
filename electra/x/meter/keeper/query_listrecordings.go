package keeper

import (
	"context"
	"encoding/json"
	"fmt"
	"time"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	"github.com/cosmos/cosmos-sdk/types/query"

	"electra/x/meter/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Listrecordings(goCtx context.Context, req *types.QueryListrecordingsRequest) (*types.QueryListrecordingsResponse, error) {
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
	var from uint64 = req.Start
	var to uint64 = req.End
	//var byblock bool = req.Byblock
	var stDebug string = "Electra >> "
	/*
		if byblock == false {
			stDebug = " by timestamp "
		} else {
			stDebug = " by block "
		} */

	store := ctx.KVStore(k.storeKey)
	meterreadingsStore := prefix.NewStore(store, types.KeyPrefix(types.MeterreadingsKeyPrefix))
	stDebug = stDebug + " myDeviceID:" + mydeviceID
	stDebug = stDebug + fmt.Sprintf(" From:  %d | ", uint64(from))
	stDebug = stDebug + fmt.Sprintf(" To:  %d | ", uint64(to))

	pageRes, err := query.Paginate(meterreadingsStore, req.Pagination, func(key []byte, value []byte) error {
		var meterreadings types.Meterreadings
		if err := k.cdc.Unmarshal(value, &meterreadings); err != nil {
			stDebug = stDebug + " Error " + err.Error()
			return err
		}
		//stDebug = stDebug + " mydeviceID:" + meterreadings.DeviceID
		stDebug = stDebug + " DeviceID:" + meterreadings.DeviceID
		stDebug = stDebug + fmt.Sprintf(" Timestamp:  %d | ", meterreadings.Timestamp)
		if (mydeviceID == meterreadings.DeviceID) && (uint64(meterreadings.Timestamp) >= uint64(from)) && (uint64(meterreadings.Timestamp) <= uint64(to)) {
			//if (mydeviceID == meterreadings.DeviceID) && (uint64(meterreadings.Timestamp) >= from) && (uint64(meterreadings.Timestamp) <= to) {
			stDebug = stDebug + fmt.Sprintf(" Timestamp:  %d | ", meterreadings.Timestamp)
			meterreadingss = append(meterreadingss, meterreadings)
			total++
		}
		return nil
	})
	stDebug = stDebug + fmt.Sprintf(" total:  %d | ", total)

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}
	var compteur = 0
	// Convert to array of json string
	var displaylines []string
	for _, line := range meterreadingss {
		compteur++
		json, _ := json.Marshal(line)
		displaylines = append(displaylines, string(json))
	}
	stDebug = stDebug + fmt.Sprint(compteur) + " line"

	elapsed := time.Since(start)
	stDebug = stDebug + fmt.Sprintf("Search took %s", elapsed)
	return &types.QueryListrecordingsResponse{Meterreadings: displaylines, Comments: stDebug, Total: total, Pagination: pageRes}, nil
	//return &types.QueryListrecordingsResponse{}, nil
}
