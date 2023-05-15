package keeper

import (
	"context"

	"electra/x/dao/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) MembershipAll(goCtx context.Context, req *types.QueryAllMembershipRequest) (*types.QueryAllMembershipResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var memberships []types.Membership
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	membershipStore := prefix.NewStore(store, types.KeyPrefix(types.MembershipKeyPrefix))

	pageRes, err := query.Paginate(membershipStore, req.Pagination, func(key []byte, value []byte) error {
		var membership types.Membership
		if err := k.cdc.Unmarshal(value, &membership); err != nil {
			return err
		}

		memberships = append(memberships, membership)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllMembershipResponse{Membership: memberships, Pagination: pageRes}, nil
}

func (k Keeper) Membership(goCtx context.Context, req *types.QueryGetMembershipRequest) (*types.QueryGetMembershipResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(goCtx)

	val, found := k.GetMembership(
		ctx,
		req.Memberaddress,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetMembershipResponse{Membership: val}, nil
}
