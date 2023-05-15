import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgDeletePoll } from "./types/electra/dao/tx";
import { MsgCreatePoll } from "./types/electra/dao/tx";
import { MsgUpdatePoll } from "./types/electra/dao/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/electra.dao.MsgDeletePoll", MsgDeletePoll],
    ["/electra.dao.MsgCreatePoll", MsgCreatePoll],
    ["/electra.dao.MsgUpdatePoll", MsgUpdatePoll],
    
];

export { msgTypes }