import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgDeletePowerPurchaseContract } from "./types/electra/meter/tx";
import { MsgUpdatePowerPurchaseContract } from "./types/electra/meter/tx";
import { MsgRecord } from "./types/electra/meter/tx";
import { MsgCreatePowerPurchaseContract } from "./types/electra/meter/tx";
import { MsgDeleteBillingcycles } from "./types/electra/meter/tx";
import { MsgCreatePpaMap } from "./types/electra/meter/tx";
import { MsgCreateBillingcycles } from "./types/electra/meter/tx";
import { MsgDeletePpaMap } from "./types/electra/meter/tx";
import { MsgUpdatePpaMap } from "./types/electra/meter/tx";
import { MsgUpdateBillingcycles } from "./types/electra/meter/tx";
import { MsgRecord3 } from "./types/electra/meter/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/electra.meter.MsgDeletePowerPurchaseContract", MsgDeletePowerPurchaseContract],
    ["/electra.meter.MsgUpdatePowerPurchaseContract", MsgUpdatePowerPurchaseContract],
    ["/electra.meter.MsgRecord", MsgRecord],
    ["/electra.meter.MsgCreatePowerPurchaseContract", MsgCreatePowerPurchaseContract],
    ["/electra.meter.MsgDeleteBillingcycles", MsgDeleteBillingcycles],
    ["/electra.meter.MsgCreatePpaMap", MsgCreatePpaMap],
    ["/electra.meter.MsgCreateBillingcycles", MsgCreateBillingcycles],
    ["/electra.meter.MsgDeletePpaMap", MsgDeletePpaMap],
    ["/electra.meter.MsgUpdatePpaMap", MsgUpdatePpaMap],
    ["/electra.meter.MsgUpdateBillingcycles", MsgUpdateBillingcycles],
    ["/electra.meter.MsgRecord3", MsgRecord3],
    
];

export { msgTypes }