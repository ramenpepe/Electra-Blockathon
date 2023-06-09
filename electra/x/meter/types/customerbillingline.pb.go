// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: electra/meter/customerbillingline.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Customerbillingline struct {
	CustomerDeviceID string `protobuf:"bytes,1,opt,name=customerDeviceID,proto3" json:"customerDeviceID,omitempty"`
	CycleID          uint64 `protobuf:"varint,2,opt,name=cycleID,proto3" json:"cycleID,omitempty"`
	Lineid           uint64 `protobuf:"varint,3,opt,name=lineid,proto3" json:"lineid,omitempty"`
	Paid             bool   `protobuf:"varint,4,opt,name=paid,proto3" json:"paid,omitempty"`
	ProducerDeviceID string `protobuf:"bytes,5,opt,name=producerDeviceID,proto3" json:"producerDeviceID,omitempty"`
	BillContractID   string `protobuf:"bytes,6,opt,name=billContractID,proto3" json:"billContractID,omitempty"`
	LineWh           uint64 `protobuf:"varint,7,opt,name=lineWh,proto3" json:"lineWh,omitempty"`
	LineWhPrice      uint64 `protobuf:"varint,8,opt,name=lineWhPrice,proto3" json:"lineWhPrice,omitempty"`
	Curency          string `protobuf:"bytes,9,opt,name=curency,proto3" json:"curency,omitempty"`
	LineWhTotalPrice uint64 `protobuf:"varint,10,opt,name=lineWhTotalPrice,proto3" json:"lineWhTotalPrice,omitempty"`
	Phase            uint64 `protobuf:"varint,11,opt,name=phase,proto3" json:"phase,omitempty"`
	ReferencePrice   uint64 `protobuf:"varint,12,opt,name=referencePrice,proto3" json:"referencePrice,omitempty"`
	Savings          uint64 `protobuf:"varint,13,opt,name=savings,proto3" json:"savings,omitempty"`
	Creator          string `protobuf:"bytes,14,opt,name=creator,proto3" json:"creator,omitempty"`
}

func (m *Customerbillingline) Reset()         { *m = Customerbillingline{} }
func (m *Customerbillingline) String() string { return proto.CompactTextString(m) }
func (*Customerbillingline) ProtoMessage()    {}
func (*Customerbillingline) Descriptor() ([]byte, []int) {
	return fileDescriptor_a8447283bffee5e8, []int{0}
}
func (m *Customerbillingline) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Customerbillingline) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Customerbillingline.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Customerbillingline) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Customerbillingline.Merge(m, src)
}
func (m *Customerbillingline) XXX_Size() int {
	return m.Size()
}
func (m *Customerbillingline) XXX_DiscardUnknown() {
	xxx_messageInfo_Customerbillingline.DiscardUnknown(m)
}

var xxx_messageInfo_Customerbillingline proto.InternalMessageInfo

func (m *Customerbillingline) GetCustomerDeviceID() string {
	if m != nil {
		return m.CustomerDeviceID
	}
	return ""
}

func (m *Customerbillingline) GetCycleID() uint64 {
	if m != nil {
		return m.CycleID
	}
	return 0
}

func (m *Customerbillingline) GetLineid() uint64 {
	if m != nil {
		return m.Lineid
	}
	return 0
}

func (m *Customerbillingline) GetPaid() bool {
	if m != nil {
		return m.Paid
	}
	return false
}

func (m *Customerbillingline) GetProducerDeviceID() string {
	if m != nil {
		return m.ProducerDeviceID
	}
	return ""
}

func (m *Customerbillingline) GetBillContractID() string {
	if m != nil {
		return m.BillContractID
	}
	return ""
}

func (m *Customerbillingline) GetLineWh() uint64 {
	if m != nil {
		return m.LineWh
	}
	return 0
}

func (m *Customerbillingline) GetLineWhPrice() uint64 {
	if m != nil {
		return m.LineWhPrice
	}
	return 0
}

func (m *Customerbillingline) GetCurency() string {
	if m != nil {
		return m.Curency
	}
	return ""
}

func (m *Customerbillingline) GetLineWhTotalPrice() uint64 {
	if m != nil {
		return m.LineWhTotalPrice
	}
	return 0
}

func (m *Customerbillingline) GetPhase() uint64 {
	if m != nil {
		return m.Phase
	}
	return 0
}

func (m *Customerbillingline) GetReferencePrice() uint64 {
	if m != nil {
		return m.ReferencePrice
	}
	return 0
}

func (m *Customerbillingline) GetSavings() uint64 {
	if m != nil {
		return m.Savings
	}
	return 0
}

func (m *Customerbillingline) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func init() {
	proto.RegisterType((*Customerbillingline)(nil), "electra.meter.Customerbillingline")
}

func init() {
	proto.RegisterFile("electra/meter/customerbillingline.proto", fileDescriptor_a8447283bffee5e8)
}

var fileDescriptor_a8447283bffee5e8 = []byte{
	// 337 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x64, 0x52, 0xcd, 0x6a, 0x32, 0x31,
	0x14, 0x35, 0x9f, 0xff, 0xf1, 0x53, 0x4a, 0xfa, 0x43, 0x56, 0xc3, 0xd0, 0x45, 0x2b, 0x5d, 0xe8,
	0xa2, 0x6f, 0x50, 0xdd, 0xb8, 0x2b, 0x52, 0x10, 0xba, 0x8b, 0xf1, 0x56, 0x03, 0x71, 0x32, 0x64,
	0xa2, 0xd4, 0xb7, 0xe8, 0x63, 0x75, 0x53, 0x70, 0xd9, 0x65, 0xd1, 0x17, 0x29, 0xb9, 0x99, 0xa1,
	0xe2, 0xec, 0xee, 0x39, 0xf7, 0xcc, 0x39, 0x67, 0xc2, 0xa5, 0xf7, 0xa0, 0x41, 0x3a, 0x2b, 0x86,
	0x6b, 0x70, 0x60, 0x87, 0x72, 0x93, 0x39, 0xb3, 0x06, 0x3b, 0x57, 0x5a, 0xab, 0x64, 0xa9, 0x55,
	0x02, 0x83, 0xd4, 0x1a, 0x67, 0x58, 0x37, 0x17, 0x0e, 0x50, 0x78, 0xfb, 0x55, 0xa5, 0x97, 0xa3,
	0xb2, 0x98, 0x3d, 0xd0, 0x8b, 0xc2, 0x63, 0x0c, 0x5b, 0x25, 0x61, 0x32, 0xe6, 0x24, 0x26, 0xfd,
	0xf6, 0xb4, 0xc4, 0x33, 0x4e, 0x9b, 0x72, 0x27, 0xb5, 0x97, 0xfc, 0x8b, 0x49, 0xbf, 0x36, 0x2d,
	0x20, 0xbb, 0xa1, 0x0d, 0xef, 0xa6, 0x16, 0xbc, 0x8a, 0x8b, 0x1c, 0x31, 0x46, 0x6b, 0xa9, 0x50,
	0x0b, 0x5e, 0x8b, 0x49, 0xbf, 0x35, 0xc5, 0xd9, 0x27, 0xa6, 0xd6, 0x2c, 0x36, 0xf2, 0x24, 0xb1,
	0x1e, 0x12, 0xcf, 0x79, 0x76, 0x47, 0x7b, 0xbe, 0xec, 0xc8, 0x24, 0xce, 0x0a, 0xe9, 0x26, 0x63,
	0xde, 0x40, 0xe5, 0x19, 0x5b, 0xe4, 0xcf, 0x56, 0xbc, 0xf9, 0x97, 0x3f, 0x5b, 0xb1, 0x98, 0x76,
	0xc2, 0xf4, 0x6c, 0x95, 0x04, 0xde, 0xc2, 0xe5, 0x29, 0x85, 0xff, 0xb4, 0xb1, 0x90, 0xc8, 0x1d,
	0x6f, 0xa3, 0x75, 0x01, 0x7d, 0xcf, 0x20, 0x7c, 0x31, 0x4e, 0xe8, 0x60, 0x40, 0xd1, 0xa0, 0xc4,
	0xb3, 0x2b, 0x5a, 0x4f, 0x57, 0x22, 0x03, 0xde, 0x41, 0x41, 0x00, 0xbe, 0xbd, 0x85, 0x37, 0xf0,
	0x76, 0x10, 0xbe, 0xff, 0x8f, 0xeb, 0x33, 0xd6, 0x77, 0xc8, 0xc4, 0x56, 0x25, 0xcb, 0x8c, 0x77,
	0xc3, 0xbb, 0xe6, 0x10, 0xdb, 0x59, 0x10, 0xce, 0x58, 0xde, 0xcb, 0xdb, 0x05, 0xf8, 0x34, 0xfc,
	0x3c, 0x44, 0x64, 0x7f, 0x88, 0xc8, 0xcf, 0x21, 0x22, 0x1f, 0xc7, 0xa8, 0xb2, 0x3f, 0x46, 0x95,
	0xef, 0x63, 0x54, 0x79, 0xbd, 0x2e, 0x2e, 0xe4, 0x3d, 0xbf, 0x11, 0xb7, 0x4b, 0x21, 0x9b, 0x37,
	0xf0, 0x2c, 0x1e, 0x7f, 0x03, 0x00, 0x00, 0xff, 0xff, 0x67, 0x13, 0x9c, 0x4f, 0x41, 0x02, 0x00,
	0x00,
}

func (m *Customerbillingline) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Customerbillingline) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Customerbillingline) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintCustomerbillingline(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x72
	}
	if m.Savings != 0 {
		i = encodeVarintCustomerbillingline(dAtA, i, uint64(m.Savings))
		i--
		dAtA[i] = 0x68
	}
	if m.ReferencePrice != 0 {
		i = encodeVarintCustomerbillingline(dAtA, i, uint64(m.ReferencePrice))
		i--
		dAtA[i] = 0x60
	}
	if m.Phase != 0 {
		i = encodeVarintCustomerbillingline(dAtA, i, uint64(m.Phase))
		i--
		dAtA[i] = 0x58
	}
	if m.LineWhTotalPrice != 0 {
		i = encodeVarintCustomerbillingline(dAtA, i, uint64(m.LineWhTotalPrice))
		i--
		dAtA[i] = 0x50
	}
	if len(m.Curency) > 0 {
		i -= len(m.Curency)
		copy(dAtA[i:], m.Curency)
		i = encodeVarintCustomerbillingline(dAtA, i, uint64(len(m.Curency)))
		i--
		dAtA[i] = 0x4a
	}
	if m.LineWhPrice != 0 {
		i = encodeVarintCustomerbillingline(dAtA, i, uint64(m.LineWhPrice))
		i--
		dAtA[i] = 0x40
	}
	if m.LineWh != 0 {
		i = encodeVarintCustomerbillingline(dAtA, i, uint64(m.LineWh))
		i--
		dAtA[i] = 0x38
	}
	if len(m.BillContractID) > 0 {
		i -= len(m.BillContractID)
		copy(dAtA[i:], m.BillContractID)
		i = encodeVarintCustomerbillingline(dAtA, i, uint64(len(m.BillContractID)))
		i--
		dAtA[i] = 0x32
	}
	if len(m.ProducerDeviceID) > 0 {
		i -= len(m.ProducerDeviceID)
		copy(dAtA[i:], m.ProducerDeviceID)
		i = encodeVarintCustomerbillingline(dAtA, i, uint64(len(m.ProducerDeviceID)))
		i--
		dAtA[i] = 0x2a
	}
	if m.Paid {
		i--
		if m.Paid {
			dAtA[i] = 1
		} else {
			dAtA[i] = 0
		}
		i--
		dAtA[i] = 0x20
	}
	if m.Lineid != 0 {
		i = encodeVarintCustomerbillingline(dAtA, i, uint64(m.Lineid))
		i--
		dAtA[i] = 0x18
	}
	if m.CycleID != 0 {
		i = encodeVarintCustomerbillingline(dAtA, i, uint64(m.CycleID))
		i--
		dAtA[i] = 0x10
	}
	if len(m.CustomerDeviceID) > 0 {
		i -= len(m.CustomerDeviceID)
		copy(dAtA[i:], m.CustomerDeviceID)
		i = encodeVarintCustomerbillingline(dAtA, i, uint64(len(m.CustomerDeviceID)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintCustomerbillingline(dAtA []byte, offset int, v uint64) int {
	offset -= sovCustomerbillingline(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Customerbillingline) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.CustomerDeviceID)
	if l > 0 {
		n += 1 + l + sovCustomerbillingline(uint64(l))
	}
	if m.CycleID != 0 {
		n += 1 + sovCustomerbillingline(uint64(m.CycleID))
	}
	if m.Lineid != 0 {
		n += 1 + sovCustomerbillingline(uint64(m.Lineid))
	}
	if m.Paid {
		n += 2
	}
	l = len(m.ProducerDeviceID)
	if l > 0 {
		n += 1 + l + sovCustomerbillingline(uint64(l))
	}
	l = len(m.BillContractID)
	if l > 0 {
		n += 1 + l + sovCustomerbillingline(uint64(l))
	}
	if m.LineWh != 0 {
		n += 1 + sovCustomerbillingline(uint64(m.LineWh))
	}
	if m.LineWhPrice != 0 {
		n += 1 + sovCustomerbillingline(uint64(m.LineWhPrice))
	}
	l = len(m.Curency)
	if l > 0 {
		n += 1 + l + sovCustomerbillingline(uint64(l))
	}
	if m.LineWhTotalPrice != 0 {
		n += 1 + sovCustomerbillingline(uint64(m.LineWhTotalPrice))
	}
	if m.Phase != 0 {
		n += 1 + sovCustomerbillingline(uint64(m.Phase))
	}
	if m.ReferencePrice != 0 {
		n += 1 + sovCustomerbillingline(uint64(m.ReferencePrice))
	}
	if m.Savings != 0 {
		n += 1 + sovCustomerbillingline(uint64(m.Savings))
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovCustomerbillingline(uint64(l))
	}
	return n
}

func sovCustomerbillingline(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozCustomerbillingline(x uint64) (n int) {
	return sovCustomerbillingline(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Customerbillingline) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCustomerbillingline
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Customerbillingline: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Customerbillingline: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CustomerDeviceID", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCustomerbillingline
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCustomerbillingline
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCustomerbillingline
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.CustomerDeviceID = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field CycleID", wireType)
			}
			m.CycleID = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCustomerbillingline
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.CycleID |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Lineid", wireType)
			}
			m.Lineid = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCustomerbillingline
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Lineid |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Paid", wireType)
			}
			var v int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCustomerbillingline
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				v |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			m.Paid = bool(v != 0)
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ProducerDeviceID", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCustomerbillingline
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCustomerbillingline
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCustomerbillingline
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ProducerDeviceID = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BillContractID", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCustomerbillingline
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCustomerbillingline
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCustomerbillingline
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.BillContractID = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 7:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field LineWh", wireType)
			}
			m.LineWh = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCustomerbillingline
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.LineWh |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 8:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field LineWhPrice", wireType)
			}
			m.LineWhPrice = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCustomerbillingline
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.LineWhPrice |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 9:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Curency", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCustomerbillingline
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCustomerbillingline
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCustomerbillingline
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Curency = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 10:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field LineWhTotalPrice", wireType)
			}
			m.LineWhTotalPrice = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCustomerbillingline
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.LineWhTotalPrice |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 11:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Phase", wireType)
			}
			m.Phase = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCustomerbillingline
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Phase |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 12:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ReferencePrice", wireType)
			}
			m.ReferencePrice = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCustomerbillingline
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.ReferencePrice |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 13:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Savings", wireType)
			}
			m.Savings = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCustomerbillingline
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Savings |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 14:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCustomerbillingline
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCustomerbillingline
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCustomerbillingline
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipCustomerbillingline(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthCustomerbillingline
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipCustomerbillingline(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowCustomerbillingline
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowCustomerbillingline
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowCustomerbillingline
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthCustomerbillingline
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupCustomerbillingline
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthCustomerbillingline
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthCustomerbillingline        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowCustomerbillingline          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupCustomerbillingline = fmt.Errorf("proto: unexpected end of group")
)
