import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRecord } from "./types/electra/meter/tx";
import { MsgUpdatePowerPurchaseContract } from "./types/electra/meter/tx";
import { MsgRecord3 } from "./types/electra/meter/tx";
import { MsgCreatePpaMap } from "./types/electra/meter/tx";
import { MsgDeletePowerPurchaseContract } from "./types/electra/meter/tx";
import { MsgCreatePowerPurchaseContract } from "./types/electra/meter/tx";
import { MsgUpdatePpaMap } from "./types/electra/meter/tx";
import { MsgDeletePpaMap } from "./types/electra/meter/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/electra.meter.MsgRecord", MsgRecord],
    ["/electra.meter.MsgUpdatePowerPurchaseContract", MsgUpdatePowerPurchaseContract],
    ["/electra.meter.MsgRecord3", MsgRecord3],
    ["/electra.meter.MsgCreatePpaMap", MsgCreatePpaMap],
    ["/electra.meter.MsgDeletePowerPurchaseContract", MsgDeletePowerPurchaseContract],
    ["/electra.meter.MsgCreatePowerPurchaseContract", MsgCreatePowerPurchaseContract],
    ["/electra.meter.MsgUpdatePpaMap", MsgUpdatePpaMap],
    ["/electra.meter.MsgDeletePpaMap", MsgDeletePpaMap],
    
];

export { msgTypes }