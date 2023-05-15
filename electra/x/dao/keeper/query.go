package keeper

import (
	"electra/x/dao/types"
)

var _ types.QueryServer = Keeper{}
