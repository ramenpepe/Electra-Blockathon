/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "electra.meter";

export interface MsgRecord {
  creator: string;
  timestamp: number;
  phase: number;
  whin: number;
  whout: number;
  mvolt: number;
  mhertz: number;
  mpf: number;
  maxmi: number;
}

export interface MsgRecordResponse {
}

export interface MsgRecord3 {
  creator: string;
  timestamp: number;
  whin1: number;
  whout1: number;
  mvolt1: number;
  mhertz1: number;
  mpf1: number;
  maxmi1: number;
  whin2: number;
  whout2: number;
  mvolt2: number;
  mhertz2: number;
  mpf2: number;
  maxmi2: number;
  whin3: number;
  whout3: number;
  mvolt3: number;
  mhertz3: number;
  mpf3: number;
  maxmi3: number;
}

export interface MsgRecord3Response {
}

export interface MsgCreatePowerPurchaseContract {
  creator: string;
  contractID: string;
  contractDeviceID: string;
  contractName: string;
  contractActive: boolean;
  contractPhase: number;
  contractForAll: boolean;
  contractForAllPrice: number;
  contractForAllCurency: string;
  contractForAllActivePeriod: string;
  contractPreferred: boolean;
  contractPreferredPrice: number;
  contractPreferredActivePeriod: string;
  contractPreferredCurency: string;
  contractStartDate: number;
  contractEndDate: number;
  phase1RemainingWh: number;
  phase2RemainingWh: number;
  phase3RemainingWh: number;
}

export interface MsgCreatePowerPurchaseContractResponse {
}

export interface MsgUpdatePowerPurchaseContract {
  creator: string;
  contractID: string;
  contractDeviceID: string;
  contractName: string;
  contractActive: boolean;
  contractPhase: number;
  contractForAll: boolean;
  contractForAllPrice: number;
  contractForAllCurency: string;
  contractForAllActivePeriod: string;
  contractPreferred: boolean;
  contractPreferredPrice: number;
  contractPreferredActivePeriod: string;
  contractPreferredCurency: string;
  contractStartDate: number;
  contractEndDate: number;
  phase1RemainingWh: number;
  phase2RemainingWh: number;
  phase3RemainingWh: number;
}

export interface MsgUpdatePowerPurchaseContractResponse {
}

export interface MsgDeletePowerPurchaseContract {
  creator: string;
  contractID: string;
  contractDeviceID: string;
}

export interface MsgDeletePowerPurchaseContractResponse {
}

export interface MsgCreatePpaMap {
  creator: string;
  consumerDeviceID: string;
  agreementID: string;
  agreementActive: boolean;
  contractID: string;
  producerDeviceID: string;
  agreementStartDate: number;
  agreementEndDate: number;
  contractPreferredPrice: number;
  contractPreferredCurency: string;
}

export interface MsgCreatePpaMapResponse {
}

export interface MsgUpdatePpaMap {
  creator: string;
  consumerDeviceID: string;
  agreementID: string;
  agreementActive: boolean;
  contractID: string;
  producerDeviceID: string;
  agreementStartDate: number;
  agreementEndDate: number;
  contractPreferredPrice: number;
  contractPreferredCurency: string;
}

export interface MsgUpdatePpaMapResponse {
}

export interface MsgDeletePpaMap {
  creator: string;
  consumerDeviceID: string;
  agreementID: string;
  agreementActive: boolean;
  contractID: string;
}

export interface MsgDeletePpaMapResponse {
}

export interface MsgCreateBillingcycles {
  creator: string;
  cycleID: number;
  begin: number;
  end: number;
  whin: number;
  whout: number;
  moneyin: number;
  moneyout: number;
  curency: string;
  valid: boolean;
  paid: boolean;
}

export interface MsgCreateBillingcyclesResponse {
}

export interface MsgUpdateBillingcycles {
  creator: string;
  cycleID: number;
  begin: number;
  end: number;
  whin: number;
  whout: number;
  moneyin: number;
  moneyout: number;
  curency: string;
  valid: boolean;
  paid: boolean;
}

export interface MsgUpdateBillingcyclesResponse {
}

export interface MsgDeleteBillingcycles {
  creator: string;
  cycleID: number;
}

export interface MsgDeleteBillingcyclesResponse {
}

function createBaseMsgRecord(): MsgRecord {
  return { creator: "", timestamp: 0, phase: 0, whin: 0, whout: 0, mvolt: 0, mhertz: 0, mpf: 0, maxmi: 0 };
}

export const MsgRecord = {
  encode(message: MsgRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint64(message.timestamp);
    }
    if (message.phase !== 0) {
      writer.uint32(24).uint64(message.phase);
    }
    if (message.whin !== 0) {
      writer.uint32(32).uint64(message.whin);
    }
    if (message.whout !== 0) {
      writer.uint32(40).uint64(message.whout);
    }
    if (message.mvolt !== 0) {
      writer.uint32(48).uint64(message.mvolt);
    }
    if (message.mhertz !== 0) {
      writer.uint32(56).uint64(message.mhertz);
    }
    if (message.mpf !== 0) {
      writer.uint32(64).uint64(message.mpf);
    }
    if (message.maxmi !== 0) {
      writer.uint32(72).uint64(message.maxmi);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.timestamp = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.phase = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.whin = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.whout = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.mvolt = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.mhertz = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.mpf = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.maxmi = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRecord {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      phase: isSet(object.phase) ? Number(object.phase) : 0,
      whin: isSet(object.whin) ? Number(object.whin) : 0,
      whout: isSet(object.whout) ? Number(object.whout) : 0,
      mvolt: isSet(object.mvolt) ? Number(object.mvolt) : 0,
      mhertz: isSet(object.mhertz) ? Number(object.mhertz) : 0,
      mpf: isSet(object.mpf) ? Number(object.mpf) : 0,
      maxmi: isSet(object.maxmi) ? Number(object.maxmi) : 0,
    };
  },

  toJSON(message: MsgRecord): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.phase !== undefined && (obj.phase = Math.round(message.phase));
    message.whin !== undefined && (obj.whin = Math.round(message.whin));
    message.whout !== undefined && (obj.whout = Math.round(message.whout));
    message.mvolt !== undefined && (obj.mvolt = Math.round(message.mvolt));
    message.mhertz !== undefined && (obj.mhertz = Math.round(message.mhertz));
    message.mpf !== undefined && (obj.mpf = Math.round(message.mpf));
    message.maxmi !== undefined && (obj.maxmi = Math.round(message.maxmi));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRecord>, I>>(object: I): MsgRecord {
    const message = createBaseMsgRecord();
    message.creator = object.creator ?? "";
    message.timestamp = object.timestamp ?? 0;
    message.phase = object.phase ?? 0;
    message.whin = object.whin ?? 0;
    message.whout = object.whout ?? 0;
    message.mvolt = object.mvolt ?? 0;
    message.mhertz = object.mhertz ?? 0;
    message.mpf = object.mpf ?? 0;
    message.maxmi = object.maxmi ?? 0;
    return message;
  },
};

function createBaseMsgRecordResponse(): MsgRecordResponse {
  return {};
}

export const MsgRecordResponse = {
  encode(_: MsgRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRecordResponse {
    return {};
  },

  toJSON(_: MsgRecordResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRecordResponse>, I>>(_: I): MsgRecordResponse {
    const message = createBaseMsgRecordResponse();
    return message;
  },
};

function createBaseMsgRecord3(): MsgRecord3 {
  return {
    creator: "",
    timestamp: 0,
    whin1: 0,
    whout1: 0,
    mvolt1: 0,
    mhertz1: 0,
    mpf1: 0,
    maxmi1: 0,
    whin2: 0,
    whout2: 0,
    mvolt2: 0,
    mhertz2: 0,
    mpf2: 0,
    maxmi2: 0,
    whin3: 0,
    whout3: 0,
    mvolt3: 0,
    mhertz3: 0,
    mpf3: 0,
    maxmi3: 0,
  };
}

export const MsgRecord3 = {
  encode(message: MsgRecord3, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint64(message.timestamp);
    }
    if (message.whin1 !== 0) {
      writer.uint32(24).uint64(message.whin1);
    }
    if (message.whout1 !== 0) {
      writer.uint32(32).uint64(message.whout1);
    }
    if (message.mvolt1 !== 0) {
      writer.uint32(40).uint64(message.mvolt1);
    }
    if (message.mhertz1 !== 0) {
      writer.uint32(48).uint64(message.mhertz1);
    }
    if (message.mpf1 !== 0) {
      writer.uint32(56).uint64(message.mpf1);
    }
    if (message.maxmi1 !== 0) {
      writer.uint32(64).uint64(message.maxmi1);
    }
    if (message.whin2 !== 0) {
      writer.uint32(72).uint64(message.whin2);
    }
    if (message.whout2 !== 0) {
      writer.uint32(80).uint64(message.whout2);
    }
    if (message.mvolt2 !== 0) {
      writer.uint32(88).uint64(message.mvolt2);
    }
    if (message.mhertz2 !== 0) {
      writer.uint32(96).uint64(message.mhertz2);
    }
    if (message.mpf2 !== 0) {
      writer.uint32(104).uint64(message.mpf2);
    }
    if (message.maxmi2 !== 0) {
      writer.uint32(112).uint64(message.maxmi2);
    }
    if (message.whin3 !== 0) {
      writer.uint32(120).uint64(message.whin3);
    }
    if (message.whout3 !== 0) {
      writer.uint32(128).uint64(message.whout3);
    }
    if (message.mvolt3 !== 0) {
      writer.uint32(136).uint64(message.mvolt3);
    }
    if (message.mhertz3 !== 0) {
      writer.uint32(144).uint64(message.mhertz3);
    }
    if (message.mpf3 !== 0) {
      writer.uint32(152).uint64(message.mpf3);
    }
    if (message.maxmi3 !== 0) {
      writer.uint32(160).uint64(message.maxmi3);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecord3 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecord3();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.timestamp = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.whin1 = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.whout1 = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.mvolt1 = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.mhertz1 = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.mpf1 = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.maxmi1 = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.whin2 = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.whout2 = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.mvolt2 = longToNumber(reader.uint64() as Long);
          break;
        case 12:
          message.mhertz2 = longToNumber(reader.uint64() as Long);
          break;
        case 13:
          message.mpf2 = longToNumber(reader.uint64() as Long);
          break;
        case 14:
          message.maxmi2 = longToNumber(reader.uint64() as Long);
          break;
        case 15:
          message.whin3 = longToNumber(reader.uint64() as Long);
          break;
        case 16:
          message.whout3 = longToNumber(reader.uint64() as Long);
          break;
        case 17:
          message.mvolt3 = longToNumber(reader.uint64() as Long);
          break;
        case 18:
          message.mhertz3 = longToNumber(reader.uint64() as Long);
          break;
        case 19:
          message.mpf3 = longToNumber(reader.uint64() as Long);
          break;
        case 20:
          message.maxmi3 = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRecord3 {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      whin1: isSet(object.whin1) ? Number(object.whin1) : 0,
      whout1: isSet(object.whout1) ? Number(object.whout1) : 0,
      mvolt1: isSet(object.mvolt1) ? Number(object.mvolt1) : 0,
      mhertz1: isSet(object.mhertz1) ? Number(object.mhertz1) : 0,
      mpf1: isSet(object.mpf1) ? Number(object.mpf1) : 0,
      maxmi1: isSet(object.maxmi1) ? Number(object.maxmi1) : 0,
      whin2: isSet(object.whin2) ? Number(object.whin2) : 0,
      whout2: isSet(object.whout2) ? Number(object.whout2) : 0,
      mvolt2: isSet(object.mvolt2) ? Number(object.mvolt2) : 0,
      mhertz2: isSet(object.mhertz2) ? Number(object.mhertz2) : 0,
      mpf2: isSet(object.mpf2) ? Number(object.mpf2) : 0,
      maxmi2: isSet(object.maxmi2) ? Number(object.maxmi2) : 0,
      whin3: isSet(object.whin3) ? Number(object.whin3) : 0,
      whout3: isSet(object.whout3) ? Number(object.whout3) : 0,
      mvolt3: isSet(object.mvolt3) ? Number(object.mvolt3) : 0,
      mhertz3: isSet(object.mhertz3) ? Number(object.mhertz3) : 0,
      mpf3: isSet(object.mpf3) ? Number(object.mpf3) : 0,
      maxmi3: isSet(object.maxmi3) ? Number(object.maxmi3) : 0,
    };
  },

  toJSON(message: MsgRecord3): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.whin1 !== undefined && (obj.whin1 = Math.round(message.whin1));
    message.whout1 !== undefined && (obj.whout1 = Math.round(message.whout1));
    message.mvolt1 !== undefined && (obj.mvolt1 = Math.round(message.mvolt1));
    message.mhertz1 !== undefined && (obj.mhertz1 = Math.round(message.mhertz1));
    message.mpf1 !== undefined && (obj.mpf1 = Math.round(message.mpf1));
    message.maxmi1 !== undefined && (obj.maxmi1 = Math.round(message.maxmi1));
    message.whin2 !== undefined && (obj.whin2 = Math.round(message.whin2));
    message.whout2 !== undefined && (obj.whout2 = Math.round(message.whout2));
    message.mvolt2 !== undefined && (obj.mvolt2 = Math.round(message.mvolt2));
    message.mhertz2 !== undefined && (obj.mhertz2 = Math.round(message.mhertz2));
    message.mpf2 !== undefined && (obj.mpf2 = Math.round(message.mpf2));
    message.maxmi2 !== undefined && (obj.maxmi2 = Math.round(message.maxmi2));
    message.whin3 !== undefined && (obj.whin3 = Math.round(message.whin3));
    message.whout3 !== undefined && (obj.whout3 = Math.round(message.whout3));
    message.mvolt3 !== undefined && (obj.mvolt3 = Math.round(message.mvolt3));
    message.mhertz3 !== undefined && (obj.mhertz3 = Math.round(message.mhertz3));
    message.mpf3 !== undefined && (obj.mpf3 = Math.round(message.mpf3));
    message.maxmi3 !== undefined && (obj.maxmi3 = Math.round(message.maxmi3));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRecord3>, I>>(object: I): MsgRecord3 {
    const message = createBaseMsgRecord3();
    message.creator = object.creator ?? "";
    message.timestamp = object.timestamp ?? 0;
    message.whin1 = object.whin1 ?? 0;
    message.whout1 = object.whout1 ?? 0;
    message.mvolt1 = object.mvolt1 ?? 0;
    message.mhertz1 = object.mhertz1 ?? 0;
    message.mpf1 = object.mpf1 ?? 0;
    message.maxmi1 = object.maxmi1 ?? 0;
    message.whin2 = object.whin2 ?? 0;
    message.whout2 = object.whout2 ?? 0;
    message.mvolt2 = object.mvolt2 ?? 0;
    message.mhertz2 = object.mhertz2 ?? 0;
    message.mpf2 = object.mpf2 ?? 0;
    message.maxmi2 = object.maxmi2 ?? 0;
    message.whin3 = object.whin3 ?? 0;
    message.whout3 = object.whout3 ?? 0;
    message.mvolt3 = object.mvolt3 ?? 0;
    message.mhertz3 = object.mhertz3 ?? 0;
    message.mpf3 = object.mpf3 ?? 0;
    message.maxmi3 = object.maxmi3 ?? 0;
    return message;
  },
};

function createBaseMsgRecord3Response(): MsgRecord3Response {
  return {};
}

export const MsgRecord3Response = {
  encode(_: MsgRecord3Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecord3Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecord3Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRecord3Response {
    return {};
  },

  toJSON(_: MsgRecord3Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRecord3Response>, I>>(_: I): MsgRecord3Response {
    const message = createBaseMsgRecord3Response();
    return message;
  },
};

function createBaseMsgCreatePowerPurchaseContract(): MsgCreatePowerPurchaseContract {
  return {
    creator: "",
    contractID: "",
    contractDeviceID: "",
    contractName: "",
    contractActive: false,
    contractPhase: 0,
    contractForAll: false,
    contractForAllPrice: 0,
    contractForAllCurency: "",
    contractForAllActivePeriod: "",
    contractPreferred: false,
    contractPreferredPrice: 0,
    contractPreferredActivePeriod: "",
    contractPreferredCurency: "",
    contractStartDate: 0,
    contractEndDate: 0,
    phase1RemainingWh: 0,
    phase2RemainingWh: 0,
    phase3RemainingWh: 0,
  };
}

export const MsgCreatePowerPurchaseContract = {
  encode(message: MsgCreatePowerPurchaseContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.contractID !== "") {
      writer.uint32(18).string(message.contractID);
    }
    if (message.contractDeviceID !== "") {
      writer.uint32(26).string(message.contractDeviceID);
    }
    if (message.contractName !== "") {
      writer.uint32(34).string(message.contractName);
    }
    if (message.contractActive === true) {
      writer.uint32(40).bool(message.contractActive);
    }
    if (message.contractPhase !== 0) {
      writer.uint32(48).uint64(message.contractPhase);
    }
    if (message.contractForAll === true) {
      writer.uint32(56).bool(message.contractForAll);
    }
    if (message.contractForAllPrice !== 0) {
      writer.uint32(64).uint64(message.contractForAllPrice);
    }
    if (message.contractForAllCurency !== "") {
      writer.uint32(74).string(message.contractForAllCurency);
    }
    if (message.contractForAllActivePeriod !== "") {
      writer.uint32(82).string(message.contractForAllActivePeriod);
    }
    if (message.contractPreferred === true) {
      writer.uint32(88).bool(message.contractPreferred);
    }
    if (message.contractPreferredPrice !== 0) {
      writer.uint32(96).uint64(message.contractPreferredPrice);
    }
    if (message.contractPreferredActivePeriod !== "") {
      writer.uint32(106).string(message.contractPreferredActivePeriod);
    }
    if (message.contractPreferredCurency !== "") {
      writer.uint32(114).string(message.contractPreferredCurency);
    }
    if (message.contractStartDate !== 0) {
      writer.uint32(120).uint64(message.contractStartDate);
    }
    if (message.contractEndDate !== 0) {
      writer.uint32(128).uint64(message.contractEndDate);
    }
    if (message.phase1RemainingWh !== 0) {
      writer.uint32(136).uint64(message.phase1RemainingWh);
    }
    if (message.phase2RemainingWh !== 0) {
      writer.uint32(144).uint64(message.phase2RemainingWh);
    }
    if (message.phase3RemainingWh !== 0) {
      writer.uint32(152).uint64(message.phase3RemainingWh);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePowerPurchaseContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePowerPurchaseContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.contractID = reader.string();
          break;
        case 3:
          message.contractDeviceID = reader.string();
          break;
        case 4:
          message.contractName = reader.string();
          break;
        case 5:
          message.contractActive = reader.bool();
          break;
        case 6:
          message.contractPhase = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.contractForAll = reader.bool();
          break;
        case 8:
          message.contractForAllPrice = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.contractForAllCurency = reader.string();
          break;
        case 10:
          message.contractForAllActivePeriod = reader.string();
          break;
        case 11:
          message.contractPreferred = reader.bool();
          break;
        case 12:
          message.contractPreferredPrice = longToNumber(reader.uint64() as Long);
          break;
        case 13:
          message.contractPreferredActivePeriod = reader.string();
          break;
        case 14:
          message.contractPreferredCurency = reader.string();
          break;
        case 15:
          message.contractStartDate = longToNumber(reader.uint64() as Long);
          break;
        case 16:
          message.contractEndDate = longToNumber(reader.uint64() as Long);
          break;
        case 17:
          message.phase1RemainingWh = longToNumber(reader.uint64() as Long);
          break;
        case 18:
          message.phase2RemainingWh = longToNumber(reader.uint64() as Long);
          break;
        case 19:
          message.phase3RemainingWh = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePowerPurchaseContract {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      contractID: isSet(object.contractID) ? String(object.contractID) : "",
      contractDeviceID: isSet(object.contractDeviceID) ? String(object.contractDeviceID) : "",
      contractName: isSet(object.contractName) ? String(object.contractName) : "",
      contractActive: isSet(object.contractActive) ? Boolean(object.contractActive) : false,
      contractPhase: isSet(object.contractPhase) ? Number(object.contractPhase) : 0,
      contractForAll: isSet(object.contractForAll) ? Boolean(object.contractForAll) : false,
      contractForAllPrice: isSet(object.contractForAllPrice) ? Number(object.contractForAllPrice) : 0,
      contractForAllCurency: isSet(object.contractForAllCurency) ? String(object.contractForAllCurency) : "",
      contractForAllActivePeriod: isSet(object.contractForAllActivePeriod)
        ? String(object.contractForAllActivePeriod)
        : "",
      contractPreferred: isSet(object.contractPreferred) ? Boolean(object.contractPreferred) : false,
      contractPreferredPrice: isSet(object.contractPreferredPrice) ? Number(object.contractPreferredPrice) : 0,
      contractPreferredActivePeriod: isSet(object.contractPreferredActivePeriod)
        ? String(object.contractPreferredActivePeriod)
        : "",
      contractPreferredCurency: isSet(object.contractPreferredCurency) ? String(object.contractPreferredCurency) : "",
      contractStartDate: isSet(object.contractStartDate) ? Number(object.contractStartDate) : 0,
      contractEndDate: isSet(object.contractEndDate) ? Number(object.contractEndDate) : 0,
      phase1RemainingWh: isSet(object.phase1RemainingWh) ? Number(object.phase1RemainingWh) : 0,
      phase2RemainingWh: isSet(object.phase2RemainingWh) ? Number(object.phase2RemainingWh) : 0,
      phase3RemainingWh: isSet(object.phase3RemainingWh) ? Number(object.phase3RemainingWh) : 0,
    };
  },

  toJSON(message: MsgCreatePowerPurchaseContract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.contractID !== undefined && (obj.contractID = message.contractID);
    message.contractDeviceID !== undefined && (obj.contractDeviceID = message.contractDeviceID);
    message.contractName !== undefined && (obj.contractName = message.contractName);
    message.contractActive !== undefined && (obj.contractActive = message.contractActive);
    message.contractPhase !== undefined && (obj.contractPhase = Math.round(message.contractPhase));
    message.contractForAll !== undefined && (obj.contractForAll = message.contractForAll);
    message.contractForAllPrice !== undefined && (obj.contractForAllPrice = Math.round(message.contractForAllPrice));
    message.contractForAllCurency !== undefined && (obj.contractForAllCurency = message.contractForAllCurency);
    message.contractForAllActivePeriod !== undefined
      && (obj.contractForAllActivePeriod = message.contractForAllActivePeriod);
    message.contractPreferred !== undefined && (obj.contractPreferred = message.contractPreferred);
    message.contractPreferredPrice !== undefined
      && (obj.contractPreferredPrice = Math.round(message.contractPreferredPrice));
    message.contractPreferredActivePeriod !== undefined
      && (obj.contractPreferredActivePeriod = message.contractPreferredActivePeriod);
    message.contractPreferredCurency !== undefined && (obj.contractPreferredCurency = message.contractPreferredCurency);
    message.contractStartDate !== undefined && (obj.contractStartDate = Math.round(message.contractStartDate));
    message.contractEndDate !== undefined && (obj.contractEndDate = Math.round(message.contractEndDate));
    message.phase1RemainingWh !== undefined && (obj.phase1RemainingWh = Math.round(message.phase1RemainingWh));
    message.phase2RemainingWh !== undefined && (obj.phase2RemainingWh = Math.round(message.phase2RemainingWh));
    message.phase3RemainingWh !== undefined && (obj.phase3RemainingWh = Math.round(message.phase3RemainingWh));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePowerPurchaseContract>, I>>(
    object: I,
  ): MsgCreatePowerPurchaseContract {
    const message = createBaseMsgCreatePowerPurchaseContract();
    message.creator = object.creator ?? "";
    message.contractID = object.contractID ?? "";
    message.contractDeviceID = object.contractDeviceID ?? "";
    message.contractName = object.contractName ?? "";
    message.contractActive = object.contractActive ?? false;
    message.contractPhase = object.contractPhase ?? 0;
    message.contractForAll = object.contractForAll ?? false;
    message.contractForAllPrice = object.contractForAllPrice ?? 0;
    message.contractForAllCurency = object.contractForAllCurency ?? "";
    message.contractForAllActivePeriod = object.contractForAllActivePeriod ?? "";
    message.contractPreferred = object.contractPreferred ?? false;
    message.contractPreferredPrice = object.contractPreferredPrice ?? 0;
    message.contractPreferredActivePeriod = object.contractPreferredActivePeriod ?? "";
    message.contractPreferredCurency = object.contractPreferredCurency ?? "";
    message.contractStartDate = object.contractStartDate ?? 0;
    message.contractEndDate = object.contractEndDate ?? 0;
    message.phase1RemainingWh = object.phase1RemainingWh ?? 0;
    message.phase2RemainingWh = object.phase2RemainingWh ?? 0;
    message.phase3RemainingWh = object.phase3RemainingWh ?? 0;
    return message;
  },
};

function createBaseMsgCreatePowerPurchaseContractResponse(): MsgCreatePowerPurchaseContractResponse {
  return {};
}

export const MsgCreatePowerPurchaseContractResponse = {
  encode(_: MsgCreatePowerPurchaseContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePowerPurchaseContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePowerPurchaseContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreatePowerPurchaseContractResponse {
    return {};
  },

  toJSON(_: MsgCreatePowerPurchaseContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePowerPurchaseContractResponse>, I>>(
    _: I,
  ): MsgCreatePowerPurchaseContractResponse {
    const message = createBaseMsgCreatePowerPurchaseContractResponse();
    return message;
  },
};

function createBaseMsgUpdatePowerPurchaseContract(): MsgUpdatePowerPurchaseContract {
  return {
    creator: "",
    contractID: "",
    contractDeviceID: "",
    contractName: "",
    contractActive: false,
    contractPhase: 0,
    contractForAll: false,
    contractForAllPrice: 0,
    contractForAllCurency: "",
    contractForAllActivePeriod: "",
    contractPreferred: false,
    contractPreferredPrice: 0,
    contractPreferredActivePeriod: "",
    contractPreferredCurency: "",
    contractStartDate: 0,
    contractEndDate: 0,
    phase1RemainingWh: 0,
    phase2RemainingWh: 0,
    phase3RemainingWh: 0,
  };
}

export const MsgUpdatePowerPurchaseContract = {
  encode(message: MsgUpdatePowerPurchaseContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.contractID !== "") {
      writer.uint32(18).string(message.contractID);
    }
    if (message.contractDeviceID !== "") {
      writer.uint32(26).string(message.contractDeviceID);
    }
    if (message.contractName !== "") {
      writer.uint32(34).string(message.contractName);
    }
    if (message.contractActive === true) {
      writer.uint32(40).bool(message.contractActive);
    }
    if (message.contractPhase !== 0) {
      writer.uint32(48).uint64(message.contractPhase);
    }
    if (message.contractForAll === true) {
      writer.uint32(56).bool(message.contractForAll);
    }
    if (message.contractForAllPrice !== 0) {
      writer.uint32(64).uint64(message.contractForAllPrice);
    }
    if (message.contractForAllCurency !== "") {
      writer.uint32(74).string(message.contractForAllCurency);
    }
    if (message.contractForAllActivePeriod !== "") {
      writer.uint32(82).string(message.contractForAllActivePeriod);
    }
    if (message.contractPreferred === true) {
      writer.uint32(88).bool(message.contractPreferred);
    }
    if (message.contractPreferredPrice !== 0) {
      writer.uint32(96).uint64(message.contractPreferredPrice);
    }
    if (message.contractPreferredActivePeriod !== "") {
      writer.uint32(106).string(message.contractPreferredActivePeriod);
    }
    if (message.contractPreferredCurency !== "") {
      writer.uint32(114).string(message.contractPreferredCurency);
    }
    if (message.contractStartDate !== 0) {
      writer.uint32(120).uint64(message.contractStartDate);
    }
    if (message.contractEndDate !== 0) {
      writer.uint32(128).uint64(message.contractEndDate);
    }
    if (message.phase1RemainingWh !== 0) {
      writer.uint32(136).uint64(message.phase1RemainingWh);
    }
    if (message.phase2RemainingWh !== 0) {
      writer.uint32(144).uint64(message.phase2RemainingWh);
    }
    if (message.phase3RemainingWh !== 0) {
      writer.uint32(152).uint64(message.phase3RemainingWh);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePowerPurchaseContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePowerPurchaseContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.contractID = reader.string();
          break;
        case 3:
          message.contractDeviceID = reader.string();
          break;
        case 4:
          message.contractName = reader.string();
          break;
        case 5:
          message.contractActive = reader.bool();
          break;
        case 6:
          message.contractPhase = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.contractForAll = reader.bool();
          break;
        case 8:
          message.contractForAllPrice = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.contractForAllCurency = reader.string();
          break;
        case 10:
          message.contractForAllActivePeriod = reader.string();
          break;
        case 11:
          message.contractPreferred = reader.bool();
          break;
        case 12:
          message.contractPreferredPrice = longToNumber(reader.uint64() as Long);
          break;
        case 13:
          message.contractPreferredActivePeriod = reader.string();
          break;
        case 14:
          message.contractPreferredCurency = reader.string();
          break;
        case 15:
          message.contractStartDate = longToNumber(reader.uint64() as Long);
          break;
        case 16:
          message.contractEndDate = longToNumber(reader.uint64() as Long);
          break;
        case 17:
          message.phase1RemainingWh = longToNumber(reader.uint64() as Long);
          break;
        case 18:
          message.phase2RemainingWh = longToNumber(reader.uint64() as Long);
          break;
        case 19:
          message.phase3RemainingWh = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePowerPurchaseContract {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      contractID: isSet(object.contractID) ? String(object.contractID) : "",
      contractDeviceID: isSet(object.contractDeviceID) ? String(object.contractDeviceID) : "",
      contractName: isSet(object.contractName) ? String(object.contractName) : "",
      contractActive: isSet(object.contractActive) ? Boolean(object.contractActive) : false,
      contractPhase: isSet(object.contractPhase) ? Number(object.contractPhase) : 0,
      contractForAll: isSet(object.contractForAll) ? Boolean(object.contractForAll) : false,
      contractForAllPrice: isSet(object.contractForAllPrice) ? Number(object.contractForAllPrice) : 0,
      contractForAllCurency: isSet(object.contractForAllCurency) ? String(object.contractForAllCurency) : "",
      contractForAllActivePeriod: isSet(object.contractForAllActivePeriod)
        ? String(object.contractForAllActivePeriod)
        : "",
      contractPreferred: isSet(object.contractPreferred) ? Boolean(object.contractPreferred) : false,
      contractPreferredPrice: isSet(object.contractPreferredPrice) ? Number(object.contractPreferredPrice) : 0,
      contractPreferredActivePeriod: isSet(object.contractPreferredActivePeriod)
        ? String(object.contractPreferredActivePeriod)
        : "",
      contractPreferredCurency: isSet(object.contractPreferredCurency) ? String(object.contractPreferredCurency) : "",
      contractStartDate: isSet(object.contractStartDate) ? Number(object.contractStartDate) : 0,
      contractEndDate: isSet(object.contractEndDate) ? Number(object.contractEndDate) : 0,
      phase1RemainingWh: isSet(object.phase1RemainingWh) ? Number(object.phase1RemainingWh) : 0,
      phase2RemainingWh: isSet(object.phase2RemainingWh) ? Number(object.phase2RemainingWh) : 0,
      phase3RemainingWh: isSet(object.phase3RemainingWh) ? Number(object.phase3RemainingWh) : 0,
    };
  },

  toJSON(message: MsgUpdatePowerPurchaseContract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.contractID !== undefined && (obj.contractID = message.contractID);
    message.contractDeviceID !== undefined && (obj.contractDeviceID = message.contractDeviceID);
    message.contractName !== undefined && (obj.contractName = message.contractName);
    message.contractActive !== undefined && (obj.contractActive = message.contractActive);
    message.contractPhase !== undefined && (obj.contractPhase = Math.round(message.contractPhase));
    message.contractForAll !== undefined && (obj.contractForAll = message.contractForAll);
    message.contractForAllPrice !== undefined && (obj.contractForAllPrice = Math.round(message.contractForAllPrice));
    message.contractForAllCurency !== undefined && (obj.contractForAllCurency = message.contractForAllCurency);
    message.contractForAllActivePeriod !== undefined
      && (obj.contractForAllActivePeriod = message.contractForAllActivePeriod);
    message.contractPreferred !== undefined && (obj.contractPreferred = message.contractPreferred);
    message.contractPreferredPrice !== undefined
      && (obj.contractPreferredPrice = Math.round(message.contractPreferredPrice));
    message.contractPreferredActivePeriod !== undefined
      && (obj.contractPreferredActivePeriod = message.contractPreferredActivePeriod);
    message.contractPreferredCurency !== undefined && (obj.contractPreferredCurency = message.contractPreferredCurency);
    message.contractStartDate !== undefined && (obj.contractStartDate = Math.round(message.contractStartDate));
    message.contractEndDate !== undefined && (obj.contractEndDate = Math.round(message.contractEndDate));
    message.phase1RemainingWh !== undefined && (obj.phase1RemainingWh = Math.round(message.phase1RemainingWh));
    message.phase2RemainingWh !== undefined && (obj.phase2RemainingWh = Math.round(message.phase2RemainingWh));
    message.phase3RemainingWh !== undefined && (obj.phase3RemainingWh = Math.round(message.phase3RemainingWh));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdatePowerPurchaseContract>, I>>(
    object: I,
  ): MsgUpdatePowerPurchaseContract {
    const message = createBaseMsgUpdatePowerPurchaseContract();
    message.creator = object.creator ?? "";
    message.contractID = object.contractID ?? "";
    message.contractDeviceID = object.contractDeviceID ?? "";
    message.contractName = object.contractName ?? "";
    message.contractActive = object.contractActive ?? false;
    message.contractPhase = object.contractPhase ?? 0;
    message.contractForAll = object.contractForAll ?? false;
    message.contractForAllPrice = object.contractForAllPrice ?? 0;
    message.contractForAllCurency = object.contractForAllCurency ?? "";
    message.contractForAllActivePeriod = object.contractForAllActivePeriod ?? "";
    message.contractPreferred = object.contractPreferred ?? false;
    message.contractPreferredPrice = object.contractPreferredPrice ?? 0;
    message.contractPreferredActivePeriod = object.contractPreferredActivePeriod ?? "";
    message.contractPreferredCurency = object.contractPreferredCurency ?? "";
    message.contractStartDate = object.contractStartDate ?? 0;
    message.contractEndDate = object.contractEndDate ?? 0;
    message.phase1RemainingWh = object.phase1RemainingWh ?? 0;
    message.phase2RemainingWh = object.phase2RemainingWh ?? 0;
    message.phase3RemainingWh = object.phase3RemainingWh ?? 0;
    return message;
  },
};

function createBaseMsgUpdatePowerPurchaseContractResponse(): MsgUpdatePowerPurchaseContractResponse {
  return {};
}

export const MsgUpdatePowerPurchaseContractResponse = {
  encode(_: MsgUpdatePowerPurchaseContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePowerPurchaseContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePowerPurchaseContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdatePowerPurchaseContractResponse {
    return {};
  },

  toJSON(_: MsgUpdatePowerPurchaseContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdatePowerPurchaseContractResponse>, I>>(
    _: I,
  ): MsgUpdatePowerPurchaseContractResponse {
    const message = createBaseMsgUpdatePowerPurchaseContractResponse();
    return message;
  },
};

function createBaseMsgDeletePowerPurchaseContract(): MsgDeletePowerPurchaseContract {
  return { creator: "", contractID: "", contractDeviceID: "" };
}

export const MsgDeletePowerPurchaseContract = {
  encode(message: MsgDeletePowerPurchaseContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.contractID !== "") {
      writer.uint32(18).string(message.contractID);
    }
    if (message.contractDeviceID !== "") {
      writer.uint32(26).string(message.contractDeviceID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeletePowerPurchaseContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePowerPurchaseContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.contractID = reader.string();
          break;
        case 3:
          message.contractDeviceID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeletePowerPurchaseContract {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      contractID: isSet(object.contractID) ? String(object.contractID) : "",
      contractDeviceID: isSet(object.contractDeviceID) ? String(object.contractDeviceID) : "",
    };
  },

  toJSON(message: MsgDeletePowerPurchaseContract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.contractID !== undefined && (obj.contractID = message.contractID);
    message.contractDeviceID !== undefined && (obj.contractDeviceID = message.contractDeviceID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeletePowerPurchaseContract>, I>>(
    object: I,
  ): MsgDeletePowerPurchaseContract {
    const message = createBaseMsgDeletePowerPurchaseContract();
    message.creator = object.creator ?? "";
    message.contractID = object.contractID ?? "";
    message.contractDeviceID = object.contractDeviceID ?? "";
    return message;
  },
};

function createBaseMsgDeletePowerPurchaseContractResponse(): MsgDeletePowerPurchaseContractResponse {
  return {};
}

export const MsgDeletePowerPurchaseContractResponse = {
  encode(_: MsgDeletePowerPurchaseContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeletePowerPurchaseContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePowerPurchaseContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeletePowerPurchaseContractResponse {
    return {};
  },

  toJSON(_: MsgDeletePowerPurchaseContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeletePowerPurchaseContractResponse>, I>>(
    _: I,
  ): MsgDeletePowerPurchaseContractResponse {
    const message = createBaseMsgDeletePowerPurchaseContractResponse();
    return message;
  },
};

function createBaseMsgCreatePpaMap(): MsgCreatePpaMap {
  return {
    creator: "",
    consumerDeviceID: "",
    agreementID: "",
    agreementActive: false,
    contractID: "",
    producerDeviceID: "",
    agreementStartDate: 0,
    agreementEndDate: 0,
    contractPreferredPrice: 0,
    contractPreferredCurency: "",
  };
}

export const MsgCreatePpaMap = {
  encode(message: MsgCreatePpaMap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.consumerDeviceID !== "") {
      writer.uint32(18).string(message.consumerDeviceID);
    }
    if (message.agreementID !== "") {
      writer.uint32(26).string(message.agreementID);
    }
    if (message.agreementActive === true) {
      writer.uint32(32).bool(message.agreementActive);
    }
    if (message.contractID !== "") {
      writer.uint32(42).string(message.contractID);
    }
    if (message.producerDeviceID !== "") {
      writer.uint32(50).string(message.producerDeviceID);
    }
    if (message.agreementStartDate !== 0) {
      writer.uint32(56).uint64(message.agreementStartDate);
    }
    if (message.agreementEndDate !== 0) {
      writer.uint32(64).uint64(message.agreementEndDate);
    }
    if (message.contractPreferredPrice !== 0) {
      writer.uint32(72).uint64(message.contractPreferredPrice);
    }
    if (message.contractPreferredCurency !== "") {
      writer.uint32(82).string(message.contractPreferredCurency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePpaMap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePpaMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.consumerDeviceID = reader.string();
          break;
        case 3:
          message.agreementID = reader.string();
          break;
        case 4:
          message.agreementActive = reader.bool();
          break;
        case 5:
          message.contractID = reader.string();
          break;
        case 6:
          message.producerDeviceID = reader.string();
          break;
        case 7:
          message.agreementStartDate = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.agreementEndDate = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.contractPreferredPrice = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.contractPreferredCurency = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePpaMap {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      consumerDeviceID: isSet(object.consumerDeviceID) ? String(object.consumerDeviceID) : "",
      agreementID: isSet(object.agreementID) ? String(object.agreementID) : "",
      agreementActive: isSet(object.agreementActive) ? Boolean(object.agreementActive) : false,
      contractID: isSet(object.contractID) ? String(object.contractID) : "",
      producerDeviceID: isSet(object.producerDeviceID) ? String(object.producerDeviceID) : "",
      agreementStartDate: isSet(object.agreementStartDate) ? Number(object.agreementStartDate) : 0,
      agreementEndDate: isSet(object.agreementEndDate) ? Number(object.agreementEndDate) : 0,
      contractPreferredPrice: isSet(object.contractPreferredPrice) ? Number(object.contractPreferredPrice) : 0,
      contractPreferredCurency: isSet(object.contractPreferredCurency) ? String(object.contractPreferredCurency) : "",
    };
  },

  toJSON(message: MsgCreatePpaMap): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.consumerDeviceID !== undefined && (obj.consumerDeviceID = message.consumerDeviceID);
    message.agreementID !== undefined && (obj.agreementID = message.agreementID);
    message.agreementActive !== undefined && (obj.agreementActive = message.agreementActive);
    message.contractID !== undefined && (obj.contractID = message.contractID);
    message.producerDeviceID !== undefined && (obj.producerDeviceID = message.producerDeviceID);
    message.agreementStartDate !== undefined && (obj.agreementStartDate = Math.round(message.agreementStartDate));
    message.agreementEndDate !== undefined && (obj.agreementEndDate = Math.round(message.agreementEndDate));
    message.contractPreferredPrice !== undefined
      && (obj.contractPreferredPrice = Math.round(message.contractPreferredPrice));
    message.contractPreferredCurency !== undefined && (obj.contractPreferredCurency = message.contractPreferredCurency);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePpaMap>, I>>(object: I): MsgCreatePpaMap {
    const message = createBaseMsgCreatePpaMap();
    message.creator = object.creator ?? "";
    message.consumerDeviceID = object.consumerDeviceID ?? "";
    message.agreementID = object.agreementID ?? "";
    message.agreementActive = object.agreementActive ?? false;
    message.contractID = object.contractID ?? "";
    message.producerDeviceID = object.producerDeviceID ?? "";
    message.agreementStartDate = object.agreementStartDate ?? 0;
    message.agreementEndDate = object.agreementEndDate ?? 0;
    message.contractPreferredPrice = object.contractPreferredPrice ?? 0;
    message.contractPreferredCurency = object.contractPreferredCurency ?? "";
    return message;
  },
};

function createBaseMsgCreatePpaMapResponse(): MsgCreatePpaMapResponse {
  return {};
}

export const MsgCreatePpaMapResponse = {
  encode(_: MsgCreatePpaMapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePpaMapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePpaMapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreatePpaMapResponse {
    return {};
  },

  toJSON(_: MsgCreatePpaMapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePpaMapResponse>, I>>(_: I): MsgCreatePpaMapResponse {
    const message = createBaseMsgCreatePpaMapResponse();
    return message;
  },
};

function createBaseMsgUpdatePpaMap(): MsgUpdatePpaMap {
  return {
    creator: "",
    consumerDeviceID: "",
    agreementID: "",
    agreementActive: false,
    contractID: "",
    producerDeviceID: "",
    agreementStartDate: 0,
    agreementEndDate: 0,
    contractPreferredPrice: 0,
    contractPreferredCurency: "",
  };
}

export const MsgUpdatePpaMap = {
  encode(message: MsgUpdatePpaMap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.consumerDeviceID !== "") {
      writer.uint32(18).string(message.consumerDeviceID);
    }
    if (message.agreementID !== "") {
      writer.uint32(26).string(message.agreementID);
    }
    if (message.agreementActive === true) {
      writer.uint32(32).bool(message.agreementActive);
    }
    if (message.contractID !== "") {
      writer.uint32(42).string(message.contractID);
    }
    if (message.producerDeviceID !== "") {
      writer.uint32(50).string(message.producerDeviceID);
    }
    if (message.agreementStartDate !== 0) {
      writer.uint32(56).uint64(message.agreementStartDate);
    }
    if (message.agreementEndDate !== 0) {
      writer.uint32(64).uint64(message.agreementEndDate);
    }
    if (message.contractPreferredPrice !== 0) {
      writer.uint32(72).uint64(message.contractPreferredPrice);
    }
    if (message.contractPreferredCurency !== "") {
      writer.uint32(82).string(message.contractPreferredCurency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePpaMap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePpaMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.consumerDeviceID = reader.string();
          break;
        case 3:
          message.agreementID = reader.string();
          break;
        case 4:
          message.agreementActive = reader.bool();
          break;
        case 5:
          message.contractID = reader.string();
          break;
        case 6:
          message.producerDeviceID = reader.string();
          break;
        case 7:
          message.agreementStartDate = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.agreementEndDate = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.contractPreferredPrice = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.contractPreferredCurency = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePpaMap {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      consumerDeviceID: isSet(object.consumerDeviceID) ? String(object.consumerDeviceID) : "",
      agreementID: isSet(object.agreementID) ? String(object.agreementID) : "",
      agreementActive: isSet(object.agreementActive) ? Boolean(object.agreementActive) : false,
      contractID: isSet(object.contractID) ? String(object.contractID) : "",
      producerDeviceID: isSet(object.producerDeviceID) ? String(object.producerDeviceID) : "",
      agreementStartDate: isSet(object.agreementStartDate) ? Number(object.agreementStartDate) : 0,
      agreementEndDate: isSet(object.agreementEndDate) ? Number(object.agreementEndDate) : 0,
      contractPreferredPrice: isSet(object.contractPreferredPrice) ? Number(object.contractPreferredPrice) : 0,
      contractPreferredCurency: isSet(object.contractPreferredCurency) ? String(object.contractPreferredCurency) : "",
    };
  },

  toJSON(message: MsgUpdatePpaMap): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.consumerDeviceID !== undefined && (obj.consumerDeviceID = message.consumerDeviceID);
    message.agreementID !== undefined && (obj.agreementID = message.agreementID);
    message.agreementActive !== undefined && (obj.agreementActive = message.agreementActive);
    message.contractID !== undefined && (obj.contractID = message.contractID);
    message.producerDeviceID !== undefined && (obj.producerDeviceID = message.producerDeviceID);
    message.agreementStartDate !== undefined && (obj.agreementStartDate = Math.round(message.agreementStartDate));
    message.agreementEndDate !== undefined && (obj.agreementEndDate = Math.round(message.agreementEndDate));
    message.contractPreferredPrice !== undefined
      && (obj.contractPreferredPrice = Math.round(message.contractPreferredPrice));
    message.contractPreferredCurency !== undefined && (obj.contractPreferredCurency = message.contractPreferredCurency);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdatePpaMap>, I>>(object: I): MsgUpdatePpaMap {
    const message = createBaseMsgUpdatePpaMap();
    message.creator = object.creator ?? "";
    message.consumerDeviceID = object.consumerDeviceID ?? "";
    message.agreementID = object.agreementID ?? "";
    message.agreementActive = object.agreementActive ?? false;
    message.contractID = object.contractID ?? "";
    message.producerDeviceID = object.producerDeviceID ?? "";
    message.agreementStartDate = object.agreementStartDate ?? 0;
    message.agreementEndDate = object.agreementEndDate ?? 0;
    message.contractPreferredPrice = object.contractPreferredPrice ?? 0;
    message.contractPreferredCurency = object.contractPreferredCurency ?? "";
    return message;
  },
};

function createBaseMsgUpdatePpaMapResponse(): MsgUpdatePpaMapResponse {
  return {};
}

export const MsgUpdatePpaMapResponse = {
  encode(_: MsgUpdatePpaMapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePpaMapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePpaMapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdatePpaMapResponse {
    return {};
  },

  toJSON(_: MsgUpdatePpaMapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdatePpaMapResponse>, I>>(_: I): MsgUpdatePpaMapResponse {
    const message = createBaseMsgUpdatePpaMapResponse();
    return message;
  },
};

function createBaseMsgDeletePpaMap(): MsgDeletePpaMap {
  return { creator: "", consumerDeviceID: "", agreementID: "", agreementActive: false, contractID: "" };
}

export const MsgDeletePpaMap = {
  encode(message: MsgDeletePpaMap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.consumerDeviceID !== "") {
      writer.uint32(18).string(message.consumerDeviceID);
    }
    if (message.agreementID !== "") {
      writer.uint32(26).string(message.agreementID);
    }
    if (message.agreementActive === true) {
      writer.uint32(32).bool(message.agreementActive);
    }
    if (message.contractID !== "") {
      writer.uint32(42).string(message.contractID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeletePpaMap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePpaMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.consumerDeviceID = reader.string();
          break;
        case 3:
          message.agreementID = reader.string();
          break;
        case 4:
          message.agreementActive = reader.bool();
          break;
        case 5:
          message.contractID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeletePpaMap {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      consumerDeviceID: isSet(object.consumerDeviceID) ? String(object.consumerDeviceID) : "",
      agreementID: isSet(object.agreementID) ? String(object.agreementID) : "",
      agreementActive: isSet(object.agreementActive) ? Boolean(object.agreementActive) : false,
      contractID: isSet(object.contractID) ? String(object.contractID) : "",
    };
  },

  toJSON(message: MsgDeletePpaMap): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.consumerDeviceID !== undefined && (obj.consumerDeviceID = message.consumerDeviceID);
    message.agreementID !== undefined && (obj.agreementID = message.agreementID);
    message.agreementActive !== undefined && (obj.agreementActive = message.agreementActive);
    message.contractID !== undefined && (obj.contractID = message.contractID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeletePpaMap>, I>>(object: I): MsgDeletePpaMap {
    const message = createBaseMsgDeletePpaMap();
    message.creator = object.creator ?? "";
    message.consumerDeviceID = object.consumerDeviceID ?? "";
    message.agreementID = object.agreementID ?? "";
    message.agreementActive = object.agreementActive ?? false;
    message.contractID = object.contractID ?? "";
    return message;
  },
};

function createBaseMsgDeletePpaMapResponse(): MsgDeletePpaMapResponse {
  return {};
}

export const MsgDeletePpaMapResponse = {
  encode(_: MsgDeletePpaMapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeletePpaMapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePpaMapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeletePpaMapResponse {
    return {};
  },

  toJSON(_: MsgDeletePpaMapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeletePpaMapResponse>, I>>(_: I): MsgDeletePpaMapResponse {
    const message = createBaseMsgDeletePpaMapResponse();
    return message;
  },
};

function createBaseMsgCreateBillingcycles(): MsgCreateBillingcycles {
  return {
    creator: "",
    cycleID: 0,
    begin: 0,
    end: 0,
    whin: 0,
    whout: 0,
    moneyin: 0,
    moneyout: 0,
    curency: "",
    valid: false,
    paid: false,
  };
}

export const MsgCreateBillingcycles = {
  encode(message: MsgCreateBillingcycles, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cycleID !== 0) {
      writer.uint32(16).uint64(message.cycleID);
    }
    if (message.begin !== 0) {
      writer.uint32(24).uint64(message.begin);
    }
    if (message.end !== 0) {
      writer.uint32(32).uint64(message.end);
    }
    if (message.whin !== 0) {
      writer.uint32(40).uint64(message.whin);
    }
    if (message.whout !== 0) {
      writer.uint32(48).uint64(message.whout);
    }
    if (message.moneyin !== 0) {
      writer.uint32(56).uint64(message.moneyin);
    }
    if (message.moneyout !== 0) {
      writer.uint32(64).uint64(message.moneyout);
    }
    if (message.curency !== "") {
      writer.uint32(74).string(message.curency);
    }
    if (message.valid === true) {
      writer.uint32(80).bool(message.valid);
    }
    if (message.paid === true) {
      writer.uint32(88).bool(message.paid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBillingcycles {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBillingcycles();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cycleID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.begin = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.end = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.whin = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.whout = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.moneyin = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.moneyout = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.curency = reader.string();
          break;
        case 10:
          message.valid = reader.bool();
          break;
        case 11:
          message.paid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBillingcycles {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cycleID: isSet(object.cycleID) ? Number(object.cycleID) : 0,
      begin: isSet(object.begin) ? Number(object.begin) : 0,
      end: isSet(object.end) ? Number(object.end) : 0,
      whin: isSet(object.whin) ? Number(object.whin) : 0,
      whout: isSet(object.whout) ? Number(object.whout) : 0,
      moneyin: isSet(object.moneyin) ? Number(object.moneyin) : 0,
      moneyout: isSet(object.moneyout) ? Number(object.moneyout) : 0,
      curency: isSet(object.curency) ? String(object.curency) : "",
      valid: isSet(object.valid) ? Boolean(object.valid) : false,
      paid: isSet(object.paid) ? Boolean(object.paid) : false,
    };
  },

  toJSON(message: MsgCreateBillingcycles): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cycleID !== undefined && (obj.cycleID = Math.round(message.cycleID));
    message.begin !== undefined && (obj.begin = Math.round(message.begin));
    message.end !== undefined && (obj.end = Math.round(message.end));
    message.whin !== undefined && (obj.whin = Math.round(message.whin));
    message.whout !== undefined && (obj.whout = Math.round(message.whout));
    message.moneyin !== undefined && (obj.moneyin = Math.round(message.moneyin));
    message.moneyout !== undefined && (obj.moneyout = Math.round(message.moneyout));
    message.curency !== undefined && (obj.curency = message.curency);
    message.valid !== undefined && (obj.valid = message.valid);
    message.paid !== undefined && (obj.paid = message.paid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBillingcycles>, I>>(object: I): MsgCreateBillingcycles {
    const message = createBaseMsgCreateBillingcycles();
    message.creator = object.creator ?? "";
    message.cycleID = object.cycleID ?? 0;
    message.begin = object.begin ?? 0;
    message.end = object.end ?? 0;
    message.whin = object.whin ?? 0;
    message.whout = object.whout ?? 0;
    message.moneyin = object.moneyin ?? 0;
    message.moneyout = object.moneyout ?? 0;
    message.curency = object.curency ?? "";
    message.valid = object.valid ?? false;
    message.paid = object.paid ?? false;
    return message;
  },
};

function createBaseMsgCreateBillingcyclesResponse(): MsgCreateBillingcyclesResponse {
  return {};
}

export const MsgCreateBillingcyclesResponse = {
  encode(_: MsgCreateBillingcyclesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBillingcyclesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBillingcyclesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateBillingcyclesResponse {
    return {};
  },

  toJSON(_: MsgCreateBillingcyclesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBillingcyclesResponse>, I>>(_: I): MsgCreateBillingcyclesResponse {
    const message = createBaseMsgCreateBillingcyclesResponse();
    return message;
  },
};

function createBaseMsgUpdateBillingcycles(): MsgUpdateBillingcycles {
  return {
    creator: "",
    cycleID: 0,
    begin: 0,
    end: 0,
    whin: 0,
    whout: 0,
    moneyin: 0,
    moneyout: 0,
    curency: "",
    valid: false,
    paid: false,
  };
}

export const MsgUpdateBillingcycles = {
  encode(message: MsgUpdateBillingcycles, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cycleID !== 0) {
      writer.uint32(16).uint64(message.cycleID);
    }
    if (message.begin !== 0) {
      writer.uint32(24).uint64(message.begin);
    }
    if (message.end !== 0) {
      writer.uint32(32).uint64(message.end);
    }
    if (message.whin !== 0) {
      writer.uint32(40).uint64(message.whin);
    }
    if (message.whout !== 0) {
      writer.uint32(48).uint64(message.whout);
    }
    if (message.moneyin !== 0) {
      writer.uint32(56).uint64(message.moneyin);
    }
    if (message.moneyout !== 0) {
      writer.uint32(64).uint64(message.moneyout);
    }
    if (message.curency !== "") {
      writer.uint32(74).string(message.curency);
    }
    if (message.valid === true) {
      writer.uint32(80).bool(message.valid);
    }
    if (message.paid === true) {
      writer.uint32(88).bool(message.paid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBillingcycles {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBillingcycles();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cycleID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.begin = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.end = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.whin = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.whout = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.moneyin = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.moneyout = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.curency = reader.string();
          break;
        case 10:
          message.valid = reader.bool();
          break;
        case 11:
          message.paid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateBillingcycles {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cycleID: isSet(object.cycleID) ? Number(object.cycleID) : 0,
      begin: isSet(object.begin) ? Number(object.begin) : 0,
      end: isSet(object.end) ? Number(object.end) : 0,
      whin: isSet(object.whin) ? Number(object.whin) : 0,
      whout: isSet(object.whout) ? Number(object.whout) : 0,
      moneyin: isSet(object.moneyin) ? Number(object.moneyin) : 0,
      moneyout: isSet(object.moneyout) ? Number(object.moneyout) : 0,
      curency: isSet(object.curency) ? String(object.curency) : "",
      valid: isSet(object.valid) ? Boolean(object.valid) : false,
      paid: isSet(object.paid) ? Boolean(object.paid) : false,
    };
  },

  toJSON(message: MsgUpdateBillingcycles): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cycleID !== undefined && (obj.cycleID = Math.round(message.cycleID));
    message.begin !== undefined && (obj.begin = Math.round(message.begin));
    message.end !== undefined && (obj.end = Math.round(message.end));
    message.whin !== undefined && (obj.whin = Math.round(message.whin));
    message.whout !== undefined && (obj.whout = Math.round(message.whout));
    message.moneyin !== undefined && (obj.moneyin = Math.round(message.moneyin));
    message.moneyout !== undefined && (obj.moneyout = Math.round(message.moneyout));
    message.curency !== undefined && (obj.curency = message.curency);
    message.valid !== undefined && (obj.valid = message.valid);
    message.paid !== undefined && (obj.paid = message.paid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateBillingcycles>, I>>(object: I): MsgUpdateBillingcycles {
    const message = createBaseMsgUpdateBillingcycles();
    message.creator = object.creator ?? "";
    message.cycleID = object.cycleID ?? 0;
    message.begin = object.begin ?? 0;
    message.end = object.end ?? 0;
    message.whin = object.whin ?? 0;
    message.whout = object.whout ?? 0;
    message.moneyin = object.moneyin ?? 0;
    message.moneyout = object.moneyout ?? 0;
    message.curency = object.curency ?? "";
    message.valid = object.valid ?? false;
    message.paid = object.paid ?? false;
    return message;
  },
};

function createBaseMsgUpdateBillingcyclesResponse(): MsgUpdateBillingcyclesResponse {
  return {};
}

export const MsgUpdateBillingcyclesResponse = {
  encode(_: MsgUpdateBillingcyclesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBillingcyclesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBillingcyclesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateBillingcyclesResponse {
    return {};
  },

  toJSON(_: MsgUpdateBillingcyclesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateBillingcyclesResponse>, I>>(_: I): MsgUpdateBillingcyclesResponse {
    const message = createBaseMsgUpdateBillingcyclesResponse();
    return message;
  },
};

function createBaseMsgDeleteBillingcycles(): MsgDeleteBillingcycles {
  return { creator: "", cycleID: 0 };
}

export const MsgDeleteBillingcycles = {
  encode(message: MsgDeleteBillingcycles, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cycleID !== 0) {
      writer.uint32(16).uint64(message.cycleID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteBillingcycles {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteBillingcycles();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cycleID = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteBillingcycles {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cycleID: isSet(object.cycleID) ? Number(object.cycleID) : 0,
    };
  },

  toJSON(message: MsgDeleteBillingcycles): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cycleID !== undefined && (obj.cycleID = Math.round(message.cycleID));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteBillingcycles>, I>>(object: I): MsgDeleteBillingcycles {
    const message = createBaseMsgDeleteBillingcycles();
    message.creator = object.creator ?? "";
    message.cycleID = object.cycleID ?? 0;
    return message;
  },
};

function createBaseMsgDeleteBillingcyclesResponse(): MsgDeleteBillingcyclesResponse {
  return {};
}

export const MsgDeleteBillingcyclesResponse = {
  encode(_: MsgDeleteBillingcyclesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteBillingcyclesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteBillingcyclesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteBillingcyclesResponse {
    return {};
  },

  toJSON(_: MsgDeleteBillingcyclesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteBillingcyclesResponse>, I>>(_: I): MsgDeleteBillingcyclesResponse {
    const message = createBaseMsgDeleteBillingcyclesResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  Record(request: MsgRecord): Promise<MsgRecordResponse>;
  Record3(request: MsgRecord3): Promise<MsgRecord3Response>;
  CreatePowerPurchaseContract(request: MsgCreatePowerPurchaseContract): Promise<MsgCreatePowerPurchaseContractResponse>;
  UpdatePowerPurchaseContract(request: MsgUpdatePowerPurchaseContract): Promise<MsgUpdatePowerPurchaseContractResponse>;
  DeletePowerPurchaseContract(request: MsgDeletePowerPurchaseContract): Promise<MsgDeletePowerPurchaseContractResponse>;
  CreatePpaMap(request: MsgCreatePpaMap): Promise<MsgCreatePpaMapResponse>;
  UpdatePpaMap(request: MsgUpdatePpaMap): Promise<MsgUpdatePpaMapResponse>;
  DeletePpaMap(request: MsgDeletePpaMap): Promise<MsgDeletePpaMapResponse>;
  CreateBillingcycles(request: MsgCreateBillingcycles): Promise<MsgCreateBillingcyclesResponse>;
  UpdateBillingcycles(request: MsgUpdateBillingcycles): Promise<MsgUpdateBillingcyclesResponse>;
  DeleteBillingcycles(request: MsgDeleteBillingcycles): Promise<MsgDeleteBillingcyclesResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Record = this.Record.bind(this);
    this.Record3 = this.Record3.bind(this);
    this.CreatePowerPurchaseContract = this.CreatePowerPurchaseContract.bind(this);
    this.UpdatePowerPurchaseContract = this.UpdatePowerPurchaseContract.bind(this);
    this.DeletePowerPurchaseContract = this.DeletePowerPurchaseContract.bind(this);
    this.CreatePpaMap = this.CreatePpaMap.bind(this);
    this.UpdatePpaMap = this.UpdatePpaMap.bind(this);
    this.DeletePpaMap = this.DeletePpaMap.bind(this);
    this.CreateBillingcycles = this.CreateBillingcycles.bind(this);
    this.UpdateBillingcycles = this.UpdateBillingcycles.bind(this);
    this.DeleteBillingcycles = this.DeleteBillingcycles.bind(this);
  }
  Record(request: MsgRecord): Promise<MsgRecordResponse> {
    const data = MsgRecord.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "Record", data);
    return promise.then((data) => MsgRecordResponse.decode(new _m0.Reader(data)));
  }

  Record3(request: MsgRecord3): Promise<MsgRecord3Response> {
    const data = MsgRecord3.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "Record3", data);
    return promise.then((data) => MsgRecord3Response.decode(new _m0.Reader(data)));
  }

  CreatePowerPurchaseContract(
    request: MsgCreatePowerPurchaseContract,
  ): Promise<MsgCreatePowerPurchaseContractResponse> {
    const data = MsgCreatePowerPurchaseContract.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "CreatePowerPurchaseContract", data);
    return promise.then((data) => MsgCreatePowerPurchaseContractResponse.decode(new _m0.Reader(data)));
  }

  UpdatePowerPurchaseContract(
    request: MsgUpdatePowerPurchaseContract,
  ): Promise<MsgUpdatePowerPurchaseContractResponse> {
    const data = MsgUpdatePowerPurchaseContract.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "UpdatePowerPurchaseContract", data);
    return promise.then((data) => MsgUpdatePowerPurchaseContractResponse.decode(new _m0.Reader(data)));
  }

  DeletePowerPurchaseContract(
    request: MsgDeletePowerPurchaseContract,
  ): Promise<MsgDeletePowerPurchaseContractResponse> {
    const data = MsgDeletePowerPurchaseContract.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "DeletePowerPurchaseContract", data);
    return promise.then((data) => MsgDeletePowerPurchaseContractResponse.decode(new _m0.Reader(data)));
  }

  CreatePpaMap(request: MsgCreatePpaMap): Promise<MsgCreatePpaMapResponse> {
    const data = MsgCreatePpaMap.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "CreatePpaMap", data);
    return promise.then((data) => MsgCreatePpaMapResponse.decode(new _m0.Reader(data)));
  }

  UpdatePpaMap(request: MsgUpdatePpaMap): Promise<MsgUpdatePpaMapResponse> {
    const data = MsgUpdatePpaMap.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "UpdatePpaMap", data);
    return promise.then((data) => MsgUpdatePpaMapResponse.decode(new _m0.Reader(data)));
  }

  DeletePpaMap(request: MsgDeletePpaMap): Promise<MsgDeletePpaMapResponse> {
    const data = MsgDeletePpaMap.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "DeletePpaMap", data);
    return promise.then((data) => MsgDeletePpaMapResponse.decode(new _m0.Reader(data)));
  }

  CreateBillingcycles(request: MsgCreateBillingcycles): Promise<MsgCreateBillingcyclesResponse> {
    const data = MsgCreateBillingcycles.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "CreateBillingcycles", data);
    return promise.then((data) => MsgCreateBillingcyclesResponse.decode(new _m0.Reader(data)));
  }

  UpdateBillingcycles(request: MsgUpdateBillingcycles): Promise<MsgUpdateBillingcyclesResponse> {
    const data = MsgUpdateBillingcycles.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "UpdateBillingcycles", data);
    return promise.then((data) => MsgUpdateBillingcyclesResponse.decode(new _m0.Reader(data)));
  }

  DeleteBillingcycles(request: MsgDeleteBillingcycles): Promise<MsgDeleteBillingcyclesResponse> {
    const data = MsgDeleteBillingcycles.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "DeleteBillingcycles", data);
    return promise.then((data) => MsgDeleteBillingcyclesResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
