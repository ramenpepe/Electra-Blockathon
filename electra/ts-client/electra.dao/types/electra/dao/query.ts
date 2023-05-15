/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Membership } from "./membership";
import { Params } from "./params";

export const protobufPackage = "electra.dao";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetMembershipRequest {
  memberaddress: string;
}

export interface QueryGetMembershipResponse {
  membership: Membership | undefined;
}

export interface QueryAllMembershipRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllMembershipResponse {
  membership: Membership[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetMembershipRequest(): QueryGetMembershipRequest {
  return { memberaddress: "" };
}

export const QueryGetMembershipRequest = {
  encode(message: QueryGetMembershipRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.memberaddress !== "") {
      writer.uint32(10).string(message.memberaddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMembershipRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMembershipRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberaddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMembershipRequest {
    return { memberaddress: isSet(object.memberaddress) ? String(object.memberaddress) : "" };
  },

  toJSON(message: QueryGetMembershipRequest): unknown {
    const obj: any = {};
    message.memberaddress !== undefined && (obj.memberaddress = message.memberaddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMembershipRequest>, I>>(object: I): QueryGetMembershipRequest {
    const message = createBaseQueryGetMembershipRequest();
    message.memberaddress = object.memberaddress ?? "";
    return message;
  },
};

function createBaseQueryGetMembershipResponse(): QueryGetMembershipResponse {
  return { membership: undefined };
}

export const QueryGetMembershipResponse = {
  encode(message: QueryGetMembershipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.membership !== undefined) {
      Membership.encode(message.membership, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMembershipResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMembershipResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.membership = Membership.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMembershipResponse {
    return { membership: isSet(object.membership) ? Membership.fromJSON(object.membership) : undefined };
  },

  toJSON(message: QueryGetMembershipResponse): unknown {
    const obj: any = {};
    message.membership !== undefined
      && (obj.membership = message.membership ? Membership.toJSON(message.membership) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMembershipResponse>, I>>(object: I): QueryGetMembershipResponse {
    const message = createBaseQueryGetMembershipResponse();
    message.membership = (object.membership !== undefined && object.membership !== null)
      ? Membership.fromPartial(object.membership)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMembershipRequest(): QueryAllMembershipRequest {
  return { pagination: undefined };
}

export const QueryAllMembershipRequest = {
  encode(message: QueryAllMembershipRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMembershipRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMembershipRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMembershipRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllMembershipRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMembershipRequest>, I>>(object: I): QueryAllMembershipRequest {
    const message = createBaseQueryAllMembershipRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMembershipResponse(): QueryAllMembershipResponse {
  return { membership: [], pagination: undefined };
}

export const QueryAllMembershipResponse = {
  encode(message: QueryAllMembershipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.membership) {
      Membership.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMembershipResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMembershipResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.membership.push(Membership.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMembershipResponse {
    return {
      membership: Array.isArray(object?.membership) ? object.membership.map((e: any) => Membership.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllMembershipResponse): unknown {
    const obj: any = {};
    if (message.membership) {
      obj.membership = message.membership.map((e) => e ? Membership.toJSON(e) : undefined);
    } else {
      obj.membership = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMembershipResponse>, I>>(object: I): QueryAllMembershipResponse {
    const message = createBaseQueryAllMembershipResponse();
    message.membership = object.membership?.map((e) => Membership.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Membership items. */
  Membership(request: QueryGetMembershipRequest): Promise<QueryGetMembershipResponse>;
  MembershipAll(request: QueryAllMembershipRequest): Promise<QueryAllMembershipResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Membership = this.Membership.bind(this);
    this.MembershipAll = this.MembershipAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("electra.dao.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Membership(request: QueryGetMembershipRequest): Promise<QueryGetMembershipResponse> {
    const data = QueryGetMembershipRequest.encode(request).finish();
    const promise = this.rpc.request("electra.dao.Query", "Membership", data);
    return promise.then((data) => QueryGetMembershipResponse.decode(new _m0.Reader(data)));
  }

  MembershipAll(request: QueryAllMembershipRequest): Promise<QueryAllMembershipResponse> {
    const data = QueryAllMembershipRequest.encode(request).finish();
    const promise = this.rpc.request("electra.dao.Query", "MembershipAll", data);
    return promise.then((data) => QueryAllMembershipResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
