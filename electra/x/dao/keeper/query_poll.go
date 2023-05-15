package keeper

import (
	"context"

	"electra/x/dao/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) PollAll(goCtx context.Context, req *types.QueryAllPollRequest) (*types.QueryAllPollResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var polls []types.Poll
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	pollStore := prefix.NewStore(store, types.KeyPrefix(types.PollKey))

	pageRes, err := query.Paginate(pollStore, req.Pagination, func(key []byte, value []byte) error {
		var poll types.Poll
		if err := k.cdc.Unmarshal(value, &poll); err != nil {
			return err
		}

		polls = append(polls, poll)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPollResponse{Poll: polls, Pagination: pageRes}, nil
}

func (k Keeper) Poll(goCtx context.Context, req *types.QueryGetPollRequest) (*types.QueryGetPollResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	poll, found := k.GetPoll(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetPollResponse{Poll: poll}, nil
}
