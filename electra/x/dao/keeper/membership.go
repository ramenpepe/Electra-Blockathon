package keeper

import (
	"electra/x/dao/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetMembership set a specific membership in the store from its index
func (k Keeper) SetMembership(ctx sdk.Context, membership types.Membership) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MembershipKeyPrefix))
	b := k.cdc.MustMarshal(&membership)
	store.Set(types.MembershipKey(
		membership.Memberaddress,
	), b)
}

// GetMembership returns a membership from its index
func (k Keeper) GetMembership(
	ctx sdk.Context,
	memberaddress string,

) (val types.Membership, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MembershipKeyPrefix))

	b := store.Get(types.MembershipKey(
		memberaddress,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveMembership removes a membership from the store
func (k Keeper) RemoveMembership(
	ctx sdk.Context,
	memberaddress string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MembershipKeyPrefix))
	store.Delete(types.MembershipKey(
		memberaddress,
	))
}

// GetAllMembership returns all membership
func (k Keeper) GetAllMembership(ctx sdk.Context) (list []types.Membership) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MembershipKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Membership
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
