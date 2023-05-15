/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "electra.dao";

export interface Membership {
  memberaddress: string;
  nickname: string;
  bio: string;
  role: string;
  ens: string;
  email: string;
  firstname: string;
  lastname: string;
  twiter: string;
  discord: string;
  github: string;
  linkedin: string;
  telegram: string;
  kyc: boolean;
  termsconditionsignature: string;
  date: string;
  block: number;
}

function createBaseMembership(): Membership {
  return {
    memberaddress: "",
    nickname: "",
    bio: "",
    role: "",
    ens: "",
    email: "",
    firstname: "",
    lastname: "",
    twiter: "",
    discord: "",
    github: "",
    linkedin: "",
    telegram: "",
    kyc: false,
    termsconditionsignature: "",
    date: "",
    block: 0,
  };
}

export const Membership = {
  encode(message: Membership, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.memberaddress !== "") {
      writer.uint32(10).string(message.memberaddress);
    }
    if (message.nickname !== "") {
      writer.uint32(18).string(message.nickname);
    }
    if (message.bio !== "") {
      writer.uint32(26).string(message.bio);
    }
    if (message.role !== "") {
      writer.uint32(34).string(message.role);
    }
    if (message.ens !== "") {
      writer.uint32(42).string(message.ens);
    }
    if (message.email !== "") {
      writer.uint32(50).string(message.email);
    }
    if (message.firstname !== "") {
      writer.uint32(58).string(message.firstname);
    }
    if (message.lastname !== "") {
      writer.uint32(66).string(message.lastname);
    }
    if (message.twiter !== "") {
      writer.uint32(74).string(message.twiter);
    }
    if (message.discord !== "") {
      writer.uint32(82).string(message.discord);
    }
    if (message.github !== "") {
      writer.uint32(90).string(message.github);
    }
    if (message.linkedin !== "") {
      writer.uint32(98).string(message.linkedin);
    }
    if (message.telegram !== "") {
      writer.uint32(106).string(message.telegram);
    }
    if (message.kyc === true) {
      writer.uint32(112).bool(message.kyc);
    }
    if (message.termsconditionsignature !== "") {
      writer.uint32(122).string(message.termsconditionsignature);
    }
    if (message.date !== "") {
      writer.uint32(130).string(message.date);
    }
    if (message.block !== 0) {
      writer.uint32(136).int32(message.block);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Membership {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMembership();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberaddress = reader.string();
          break;
        case 2:
          message.nickname = reader.string();
          break;
        case 3:
          message.bio = reader.string();
          break;
        case 4:
          message.role = reader.string();
          break;
        case 5:
          message.ens = reader.string();
          break;
        case 6:
          message.email = reader.string();
          break;
        case 7:
          message.firstname = reader.string();
          break;
        case 8:
          message.lastname = reader.string();
          break;
        case 9:
          message.twiter = reader.string();
          break;
        case 10:
          message.discord = reader.string();
          break;
        case 11:
          message.github = reader.string();
          break;
        case 12:
          message.linkedin = reader.string();
          break;
        case 13:
          message.telegram = reader.string();
          break;
        case 14:
          message.kyc = reader.bool();
          break;
        case 15:
          message.termsconditionsignature = reader.string();
          break;
        case 16:
          message.date = reader.string();
          break;
        case 17:
          message.block = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Membership {
    return {
      memberaddress: isSet(object.memberaddress) ? String(object.memberaddress) : "",
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      bio: isSet(object.bio) ? String(object.bio) : "",
      role: isSet(object.role) ? String(object.role) : "",
      ens: isSet(object.ens) ? String(object.ens) : "",
      email: isSet(object.email) ? String(object.email) : "",
      firstname: isSet(object.firstname) ? String(object.firstname) : "",
      lastname: isSet(object.lastname) ? String(object.lastname) : "",
      twiter: isSet(object.twiter) ? String(object.twiter) : "",
      discord: isSet(object.discord) ? String(object.discord) : "",
      github: isSet(object.github) ? String(object.github) : "",
      linkedin: isSet(object.linkedin) ? String(object.linkedin) : "",
      telegram: isSet(object.telegram) ? String(object.telegram) : "",
      kyc: isSet(object.kyc) ? Boolean(object.kyc) : false,
      termsconditionsignature: isSet(object.termsconditionsignature) ? String(object.termsconditionsignature) : "",
      date: isSet(object.date) ? String(object.date) : "",
      block: isSet(object.block) ? Number(object.block) : 0,
    };
  },

  toJSON(message: Membership): unknown {
    const obj: any = {};
    message.memberaddress !== undefined && (obj.memberaddress = message.memberaddress);
    message.nickname !== undefined && (obj.nickname = message.nickname);
    message.bio !== undefined && (obj.bio = message.bio);
    message.role !== undefined && (obj.role = message.role);
    message.ens !== undefined && (obj.ens = message.ens);
    message.email !== undefined && (obj.email = message.email);
    message.firstname !== undefined && (obj.firstname = message.firstname);
    message.lastname !== undefined && (obj.lastname = message.lastname);
    message.twiter !== undefined && (obj.twiter = message.twiter);
    message.discord !== undefined && (obj.discord = message.discord);
    message.github !== undefined && (obj.github = message.github);
    message.linkedin !== undefined && (obj.linkedin = message.linkedin);
    message.telegram !== undefined && (obj.telegram = message.telegram);
    message.kyc !== undefined && (obj.kyc = message.kyc);
    message.termsconditionsignature !== undefined && (obj.termsconditionsignature = message.termsconditionsignature);
    message.date !== undefined && (obj.date = message.date);
    message.block !== undefined && (obj.block = Math.round(message.block));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Membership>, I>>(object: I): Membership {
    const message = createBaseMembership();
    message.memberaddress = object.memberaddress ?? "";
    message.nickname = object.nickname ?? "";
    message.bio = object.bio ?? "";
    message.role = object.role ?? "";
    message.ens = object.ens ?? "";
    message.email = object.email ?? "";
    message.firstname = object.firstname ?? "";
    message.lastname = object.lastname ?? "";
    message.twiter = object.twiter ?? "";
    message.discord = object.discord ?? "";
    message.github = object.github ?? "";
    message.linkedin = object.linkedin ?? "";
    message.telegram = object.telegram ?? "";
    message.kyc = object.kyc ?? false;
    message.termsconditionsignature = object.termsconditionsignature ?? "";
    message.date = object.date ?? "";
    message.block = object.block ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
