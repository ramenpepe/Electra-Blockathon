package dao_test

import (
	"testing"

	keepertest "electra/testutil/keeper"
	"electra/testutil/nullify"
	"electra/x/dao"
	"electra/x/dao/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		MembershipList: []types.Membership{
			{
				Memberaddress: "0",
			},
			{
				Memberaddress: "1",
			},
		},
		PollList: []types.Poll{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		PollCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.DaoKeeper(t)
	dao.InitGenesis(ctx, *k, genesisState)
	got := dao.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.PortId, got.PortId)

	require.ElementsMatch(t, genesisState.MembershipList, got.MembershipList)
	require.ElementsMatch(t, genesisState.PollList, got.PollList)
	require.Equal(t, genesisState.PollCount, got.PollCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
