package keeper_test

import (
	"strconv"
	"testing"

	keepertest "electra/testutil/keeper"
	"electra/testutil/nullify"
	"electra/x/dao/keeper"
	"electra/x/dao/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNMembership(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Membership {
	items := make([]types.Membership, n)
	for i := range items {
		items[i].Memberaddress = strconv.Itoa(i)

		keeper.SetMembership(ctx, items[i])
	}
	return items
}

func TestMembershipGet(t *testing.T) {
	keeper, ctx := keepertest.DaoKeeper(t)
	items := createNMembership(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetMembership(ctx,
			item.Memberaddress,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestMembershipRemove(t *testing.T) {
	keeper, ctx := keepertest.DaoKeeper(t)
	items := createNMembership(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveMembership(ctx,
			item.Memberaddress,
		)
		_, found := keeper.GetMembership(ctx,
			item.Memberaddress,
		)
		require.False(t, found)
	}
}

func TestMembershipGetAll(t *testing.T) {
	keeper, ctx := keepertest.DaoKeeper(t)
	items := createNMembership(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllMembership(ctx)),
	)
}
