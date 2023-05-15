package keeper_test

import (
	"context"
	"testing"

	keepertest "electra/testutil/keeper"
	"electra/x/dao/keeper"
	"electra/x/dao/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.DaoKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
