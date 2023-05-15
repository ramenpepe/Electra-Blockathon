package types

const (
	// ModuleName defines the module name
	ModuleName = "dao"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey defines the module's message routing key
	RouterKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_dao"

	// Version defines the current version the IBC module supports
	Version = "dao-1"

	// PortID is the default port id that module binds to
	PortID = "dao"
)

var (
	// PortKey defines the key to store the port ID in store
	PortKey = KeyPrefix("dao-port-")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	PollKey      = "Poll/value/"
	PollCountKey = "Poll/count/"
)
