package types

import (
	"fmt"
	host "github.com/cosmos/ibc-go/v6/modules/core/24-host"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		PortId:         PortID,
		MembershipList: []Membership{},
		PollList:       []Poll{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	if err := host.PortIdentifierValidator(gs.PortId); err != nil {
		return err
	}
	// Check for duplicated index in membership
	membershipIndexMap := make(map[string]struct{})

	for _, elem := range gs.MembershipList {
		index := string(MembershipKey(elem.Memberaddress))
		if _, ok := membershipIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for membership")
		}
		membershipIndexMap[index] = struct{}{}
	}
	// Check for duplicated ID in poll
	pollIdMap := make(map[uint64]bool)
	pollCount := gs.GetPollCount()
	for _, elem := range gs.PollList {
		if _, ok := pollIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for poll")
		}
		if elem.Id >= pollCount {
			return fmt.Errorf("poll id should be lower or equal than the last id")
		}
		pollIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
