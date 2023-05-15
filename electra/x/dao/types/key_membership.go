package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// MembershipKeyPrefix is the prefix to retrieve all Membership
	MembershipKeyPrefix = "Membership/value/"
)

// MembershipKey returns the store key to retrieve a Membership from the index fields
func MembershipKey(
	memberaddress string,
) []byte {
	var key []byte

	memberaddressBytes := []byte(memberaddress)
	key = append(key, memberaddressBytes...)
	key = append(key, []byte("/")...)

	return key
}
