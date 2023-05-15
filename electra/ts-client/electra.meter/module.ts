// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgCreateProducerbills } from "./types/electra/meter/tx";
import { MsgUpdateProducerbillingline } from "./types/electra/meter/tx";
import { MsgDeleteProducerbillingline } from "./types/electra/meter/tx";
import { MsgDeleteCustomerbills } from "./types/electra/meter/tx";
import { MsgCreateBillingcycles } from "./types/electra/meter/tx";
import { MsgUpdatePpaMap } from "./types/electra/meter/tx";
import { MsgUpdatePowerPurchaseContract } from "./types/electra/meter/tx";
import { MsgRecord3 } from "./types/electra/meter/tx";
import { MsgPrepareBill } from "./types/electra/meter/tx";
import { MsgUpdateCustomerbillingline } from "./types/electra/meter/tx";
import { MsgDeletePowerPurchaseContract } from "./types/electra/meter/tx";
import { MsgDeleteBillingcycles } from "./types/electra/meter/tx";
import { MsgRecord } from "./types/electra/meter/tx";
import { MsgCreatePpaMap } from "./types/electra/meter/tx";
import { MsgDeleteProducerbills } from "./types/electra/meter/tx";
import { MsgDeletePpaMap } from "./types/electra/meter/tx";
import { MsgCreateProducerbillingline } from "./types/electra/meter/tx";
import { MsgUpdateProducerbills } from "./types/electra/meter/tx";
import { MsgUpdateCustomerbills } from "./types/electra/meter/tx";
import { MsgCreateCustomerbills } from "./types/electra/meter/tx";
import { MsgUpdateBillingcycles } from "./types/electra/meter/tx";
import { MsgCreateCustomerbillingline } from "./types/electra/meter/tx";
import { MsgDeleteCustomerbillingline } from "./types/electra/meter/tx";
import { MsgCreatePowerPurchaseContract } from "./types/electra/meter/tx";

import { Billingcycles as typeBillingcycles} from "./types"
import { Customerbillingline as typeCustomerbillingline} from "./types"
import { Customerbills as typeCustomerbills} from "./types"
import { Meterdirectory as typeMeterdirectory} from "./types"
import { Meterreadings as typeMeterreadings} from "./types"
import { Params as typeParams} from "./types"
import { PowerPurchaseContract as typePowerPurchaseContract} from "./types"
import { PpaMap as typePpaMap} from "./types"
import { Producerbillingline as typeProducerbillingline} from "./types"
import { Producerbills as typeProducerbills} from "./types"

export { MsgCreateProducerbills, MsgUpdateProducerbillingline, MsgDeleteProducerbillingline, MsgDeleteCustomerbills, MsgCreateBillingcycles, MsgUpdatePpaMap, MsgUpdatePowerPurchaseContract, MsgRecord3, MsgPrepareBill, MsgUpdateCustomerbillingline, MsgDeletePowerPurchaseContract, MsgDeleteBillingcycles, MsgRecord, MsgCreatePpaMap, MsgDeleteProducerbills, MsgDeletePpaMap, MsgCreateProducerbillingline, MsgUpdateProducerbills, MsgUpdateCustomerbills, MsgCreateCustomerbills, MsgUpdateBillingcycles, MsgCreateCustomerbillingline, MsgDeleteCustomerbillingline, MsgCreatePowerPurchaseContract };

type sendMsgCreateProducerbillsParams = {
  value: MsgCreateProducerbills,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateProducerbillinglineParams = {
  value: MsgUpdateProducerbillingline,
  fee?: StdFee,
  memo?: string
};

type sendMsgDeleteProducerbillinglineParams = {
  value: MsgDeleteProducerbillingline,
  fee?: StdFee,
  memo?: string
};

type sendMsgDeleteCustomerbillsParams = {
  value: MsgDeleteCustomerbills,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateBillingcyclesParams = {
  value: MsgCreateBillingcycles,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdatePpaMapParams = {
  value: MsgUpdatePpaMap,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdatePowerPurchaseContractParams = {
  value: MsgUpdatePowerPurchaseContract,
  fee?: StdFee,
  memo?: string
};

type sendMsgRecord3Params = {
  value: MsgRecord3,
  fee?: StdFee,
  memo?: string
};

type sendMsgPrepareBillParams = {
  value: MsgPrepareBill,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateCustomerbillinglineParams = {
  value: MsgUpdateCustomerbillingline,
  fee?: StdFee,
  memo?: string
};

type sendMsgDeletePowerPurchaseContractParams = {
  value: MsgDeletePowerPurchaseContract,
  fee?: StdFee,
  memo?: string
};

type sendMsgDeleteBillingcyclesParams = {
  value: MsgDeleteBillingcycles,
  fee?: StdFee,
  memo?: string
};

type sendMsgRecordParams = {
  value: MsgRecord,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreatePpaMapParams = {
  value: MsgCreatePpaMap,
  fee?: StdFee,
  memo?: string
};

type sendMsgDeleteProducerbillsParams = {
  value: MsgDeleteProducerbills,
  fee?: StdFee,
  memo?: string
};

type sendMsgDeletePpaMapParams = {
  value: MsgDeletePpaMap,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateProducerbillinglineParams = {
  value: MsgCreateProducerbillingline,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateProducerbillsParams = {
  value: MsgUpdateProducerbills,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateCustomerbillsParams = {
  value: MsgUpdateCustomerbills,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateCustomerbillsParams = {
  value: MsgCreateCustomerbills,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateBillingcyclesParams = {
  value: MsgUpdateBillingcycles,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateCustomerbillinglineParams = {
  value: MsgCreateCustomerbillingline,
  fee?: StdFee,
  memo?: string
};

type sendMsgDeleteCustomerbillinglineParams = {
  value: MsgDeleteCustomerbillingline,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreatePowerPurchaseContractParams = {
  value: MsgCreatePowerPurchaseContract,
  fee?: StdFee,
  memo?: string
};


type msgCreateProducerbillsParams = {
  value: MsgCreateProducerbills,
};

type msgUpdateProducerbillinglineParams = {
  value: MsgUpdateProducerbillingline,
};

type msgDeleteProducerbillinglineParams = {
  value: MsgDeleteProducerbillingline,
};

type msgDeleteCustomerbillsParams = {
  value: MsgDeleteCustomerbills,
};

type msgCreateBillingcyclesParams = {
  value: MsgCreateBillingcycles,
};

type msgUpdatePpaMapParams = {
  value: MsgUpdatePpaMap,
};

type msgUpdatePowerPurchaseContractParams = {
  value: MsgUpdatePowerPurchaseContract,
};

type msgRecord3Params = {
  value: MsgRecord3,
};

type msgPrepareBillParams = {
  value: MsgPrepareBill,
};

type msgUpdateCustomerbillinglineParams = {
  value: MsgUpdateCustomerbillingline,
};

type msgDeletePowerPurchaseContractParams = {
  value: MsgDeletePowerPurchaseContract,
};

type msgDeleteBillingcyclesParams = {
  value: MsgDeleteBillingcycles,
};

type msgRecordParams = {
  value: MsgRecord,
};

type msgCreatePpaMapParams = {
  value: MsgCreatePpaMap,
};

type msgDeleteProducerbillsParams = {
  value: MsgDeleteProducerbills,
};

type msgDeletePpaMapParams = {
  value: MsgDeletePpaMap,
};

type msgCreateProducerbillinglineParams = {
  value: MsgCreateProducerbillingline,
};

type msgUpdateProducerbillsParams = {
  value: MsgUpdateProducerbills,
};

type msgUpdateCustomerbillsParams = {
  value: MsgUpdateCustomerbills,
};

type msgCreateCustomerbillsParams = {
  value: MsgCreateCustomerbills,
};

type msgUpdateBillingcyclesParams = {
  value: MsgUpdateBillingcycles,
};

type msgCreateCustomerbillinglineParams = {
  value: MsgCreateCustomerbillingline,
};

type msgDeleteCustomerbillinglineParams = {
  value: MsgDeleteCustomerbillingline,
};

type msgCreatePowerPurchaseContractParams = {
  value: MsgCreatePowerPurchaseContract,
};


export const registry = new Registry(msgTypes);

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	const structure: {fields: Field[]} = { fields: [] }
	for (let [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgCreateProducerbills({ value, fee, memo }: sendMsgCreateProducerbillsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateProducerbills: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateProducerbills({ value: MsgCreateProducerbills.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateProducerbills: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateProducerbillingline({ value, fee, memo }: sendMsgUpdateProducerbillinglineParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateProducerbillingline: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateProducerbillingline({ value: MsgUpdateProducerbillingline.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateProducerbillingline: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeleteProducerbillingline({ value, fee, memo }: sendMsgDeleteProducerbillinglineParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeleteProducerbillingline: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeleteProducerbillingline({ value: MsgDeleteProducerbillingline.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeleteProducerbillingline: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeleteCustomerbills({ value, fee, memo }: sendMsgDeleteCustomerbillsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeleteCustomerbills: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeleteCustomerbills({ value: MsgDeleteCustomerbills.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeleteCustomerbills: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateBillingcycles({ value, fee, memo }: sendMsgCreateBillingcyclesParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateBillingcycles: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateBillingcycles({ value: MsgCreateBillingcycles.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateBillingcycles: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdatePpaMap({ value, fee, memo }: sendMsgUpdatePpaMapParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdatePpaMap: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdatePpaMap({ value: MsgUpdatePpaMap.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdatePpaMap: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdatePowerPurchaseContract({ value, fee, memo }: sendMsgUpdatePowerPurchaseContractParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdatePowerPurchaseContract: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdatePowerPurchaseContract({ value: MsgUpdatePowerPurchaseContract.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdatePowerPurchaseContract: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgRecord3({ value, fee, memo }: sendMsgRecord3Params): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRecord3: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgRecord3({ value: MsgRecord3.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRecord3: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgPrepareBill({ value, fee, memo }: sendMsgPrepareBillParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgPrepareBill: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgPrepareBill({ value: MsgPrepareBill.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgPrepareBill: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateCustomerbillingline({ value, fee, memo }: sendMsgUpdateCustomerbillinglineParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateCustomerbillingline: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateCustomerbillingline({ value: MsgUpdateCustomerbillingline.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateCustomerbillingline: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeletePowerPurchaseContract({ value, fee, memo }: sendMsgDeletePowerPurchaseContractParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeletePowerPurchaseContract: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeletePowerPurchaseContract({ value: MsgDeletePowerPurchaseContract.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeletePowerPurchaseContract: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeleteBillingcycles({ value, fee, memo }: sendMsgDeleteBillingcyclesParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeleteBillingcycles: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeleteBillingcycles({ value: MsgDeleteBillingcycles.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeleteBillingcycles: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgRecord({ value, fee, memo }: sendMsgRecordParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRecord: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgRecord({ value: MsgRecord.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRecord: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreatePpaMap({ value, fee, memo }: sendMsgCreatePpaMapParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreatePpaMap: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreatePpaMap({ value: MsgCreatePpaMap.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreatePpaMap: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeleteProducerbills({ value, fee, memo }: sendMsgDeleteProducerbillsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeleteProducerbills: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeleteProducerbills({ value: MsgDeleteProducerbills.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeleteProducerbills: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeletePpaMap({ value, fee, memo }: sendMsgDeletePpaMapParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeletePpaMap: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeletePpaMap({ value: MsgDeletePpaMap.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeletePpaMap: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateProducerbillingline({ value, fee, memo }: sendMsgCreateProducerbillinglineParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateProducerbillingline: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateProducerbillingline({ value: MsgCreateProducerbillingline.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateProducerbillingline: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateProducerbills({ value, fee, memo }: sendMsgUpdateProducerbillsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateProducerbills: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateProducerbills({ value: MsgUpdateProducerbills.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateProducerbills: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateCustomerbills({ value, fee, memo }: sendMsgUpdateCustomerbillsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateCustomerbills: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateCustomerbills({ value: MsgUpdateCustomerbills.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateCustomerbills: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateCustomerbills({ value, fee, memo }: sendMsgCreateCustomerbillsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateCustomerbills: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateCustomerbills({ value: MsgCreateCustomerbills.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateCustomerbills: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateBillingcycles({ value, fee, memo }: sendMsgUpdateBillingcyclesParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateBillingcycles: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateBillingcycles({ value: MsgUpdateBillingcycles.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateBillingcycles: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateCustomerbillingline({ value, fee, memo }: sendMsgCreateCustomerbillinglineParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateCustomerbillingline: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateCustomerbillingline({ value: MsgCreateCustomerbillingline.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateCustomerbillingline: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeleteCustomerbillingline({ value, fee, memo }: sendMsgDeleteCustomerbillinglineParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeleteCustomerbillingline: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeleteCustomerbillingline({ value: MsgDeleteCustomerbillingline.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeleteCustomerbillingline: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreatePowerPurchaseContract({ value, fee, memo }: sendMsgCreatePowerPurchaseContractParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreatePowerPurchaseContract: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreatePowerPurchaseContract({ value: MsgCreatePowerPurchaseContract.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreatePowerPurchaseContract: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgCreateProducerbills({ value }: msgCreateProducerbillsParams): EncodeObject {
			try {
				return { typeUrl: "/electra.meter.MsgCreateProducerbills", value: MsgCreateProducerbills.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateProducerbills: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateProducerbillingline({ value }: msgUpdateProducerbillinglineParams): EncodeObject {
			try {
				return { typeUrl: "/electra.meter.MsgUpdateProducerbillingline", value: MsgUpdateProducerbillingline.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateProducerbillingline: Could not create message: ' + e.message)
			}
		},
		
		msgDeleteProducerbillingline({ value }: msgDeleteProducerbillinglineParams): EncodeObject {
			try {
				return { typeUrl: "/electra.meter.MsgDeleteProducerbillingline", value: MsgDeleteProducerbillingline.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeleteProducerbillingline: Could not create message: ' + e.message)
			}
		},
		
		msgDeleteCustomerbills({ value }: msgDeleteCustomerbillsParams): EncodeObject {
			try {
				return { typeUrl: "/electra.meter.MsgDeleteCustomerbills", value: MsgDeleteCustomerbills.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeleteCustomerbills: Could not create message: ' + e.message)
			}
		},
		
		msgCreateBillingcycles({ value }: msgCreateBillingcyclesParams): EncodeObject {
			try {
				return { typeUrl: "/electra.meter.MsgCreateBillingcycles", value: MsgCreateBillingcycles.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateBillingcycles: Could not create message: ' + e.message)
			}
		},
		
		msgUpdatePpaMap({ value }: msgUpdatePpaMapParams): EncodeObject {
			try {
				return { typeUrl: "/electra.meter.MsgUpdatePpaMap", value: MsgUpdatePpaMap.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdatePpaMap: Could not create message: ' + e.message)
			}
		},
		
		msgUpdatePowerPurchaseContract({ value }: msgUpdatePowerPurchaseContractParams): EncodeObject {
			try {
				return { typeUrl: "/electra.meter.MsgUpdatePowerPurchaseContract", value: MsgUpdatePowerPurchaseContract.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdatePowerPurchaseContract: Could not create message: ' + e.message)
			}
		},
		
		msgRecord3({ value }: msgRecord3Params): EncodeObject {
			try {
				return { typeUrl: "/electra.meter.MsgRecord3", value: MsgRecord3.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRecord3: Could not create message: ' + e.message)
			}
		},
		
		msgPrepareBill({ value }: msgPrepareBillParams): EncodeObject {
			try {
				return { typeUrl: "/electra.meter.MsgPrepareBill", value: MsgPrepareBill.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgPrepareBill: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateCustomerbillingline({ value }: msgUpdateCustomerbillinglineParams): EncodeObject {
			try {
				return { typeUrl: "/electra.meter.MsgUpdateCustomerbillingline", value: MsgUpdateCustomerbillingline.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateCustomerbillingline: Could not create message: ' + e.message)
			}
		},
		
		msgDeletePowerPurchaseContract({ value }: msgDeletePowerPurchaseContractParams): EncodeObject {
			try {
				return { typeUrl: "/electra.meter.MsgDeletePowerPurchaseContract", value: MsgDeletePowerPurchaseContract.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeletePowerPurchaseContract: Could not create message: ' + e.message)
			}
		},
		
		msgDeleteBillingcycles({ value }: msgDeleteBillingcyclesParams): EncodeObject {
			try {
				return { typeUrl: "/electra.meter.MsgDeleteBillingcycles", value: MsgDeleteBillingcycles.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeleteBillingcycles: Could not create message: ' + e.message)
			}
		},
		
		msgRecord({ value }: msgRecordParams): EncodeObject {
			try {
				return { typeUrl: "/electra.meter.MsgRecord", value: MsgRecord.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRecord: Could not create message: ' + e.message)
			}
		},
		
		msgCreatePpaMap({ value }: msgCreatePpaMapParams): EncodeObject {
			try {
				return { typeUrl: "/electra.meter.MsgCreatePpaMap", value: MsgCreatePpaMap.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreatePpaMap: Could not create message: ' + e.message)
			}
		},
		
		msgDeleteProducerbills({ value }: msgDeleteProducerbillsParams): EncodeObject {
			try {
				return { typeUrl: "/electra.meter.MsgDeleteProducerbills", value: MsgDeleteProducerbills.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeleteProducerbills: Could not create message: ' + e.message)
			}
		},
		
		msgDeletePpaMap({ value }: msgDeletePpaMapParams): EncodeObject {
			try {
				return { typeUrl: "/electra.meter.MsgDeletePpaMap", value: MsgDeletePpaMap.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeletePpaMap: Could not create message: ' + e.message)
			}
		},
		
		msgCreateProducerbillingline({ value }: msgCreateProducerbillinglineParams): EncodeObject {
			try {
				return { typeUrl: "/electra.meter.MsgCreateProducerbillingline", value: MsgCreateProducerbillingline.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateProducerbillingline: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateProducerbills({ value }: msgUpdateProducerbillsParams): EncodeObject {
			try {
				return { typeUrl: "/electra.meter.MsgUpdateProducerbills", value: MsgUpdateProducerbills.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateProducerbills: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateCustomerbills({ value }: msgUpdateCustomerbillsParams): EncodeObject {
			try {
				return { typeUrl: "/electra.meter.MsgUpdateCustomerbills", value: MsgUpdateCustomerbills.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateCustomerbills: Could not create message: ' + e.message)
			}
		},
		
		msgCreateCustomerbills({ value }: msgCreateCustomerbillsParams): EncodeObject {
			try {
				return { typeUrl: "/electra.meter.MsgCreateCustomerbills", value: MsgCreateCustomerbills.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateCustomerbills: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateBillingcycles({ value }: msgUpdateBillingcyclesParams): EncodeObject {
			try {
				return { typeUrl: "/electra.meter.MsgUpdateBillingcycles", value: MsgUpdateBillingcycles.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateBillingcycles: Could not create message: ' + e.message)
			}
		},
		
		msgCreateCustomerbillingline({ value }: msgCreateCustomerbillinglineParams): EncodeObject {
			try {
				return { typeUrl: "/electra.meter.MsgCreateCustomerbillingline", value: MsgCreateCustomerbillingline.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateCustomerbillingline: Could not create message: ' + e.message)
			}
		},
		
		msgDeleteCustomerbillingline({ value }: msgDeleteCustomerbillinglineParams): EncodeObject {
			try {
				return { typeUrl: "/electra.meter.MsgDeleteCustomerbillingline", value: MsgDeleteCustomerbillingline.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeleteCustomerbillingline: Could not create message: ' + e.message)
			}
		},
		
		msgCreatePowerPurchaseContract({ value }: msgCreatePowerPurchaseContractParams): EncodeObject {
			try {
				return { typeUrl: "/electra.meter.MsgCreatePowerPurchaseContract", value: MsgCreatePowerPurchaseContract.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreatePowerPurchaseContract: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	public structure: Record<string,unknown>;
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		this.structure =  {
						Billingcycles: getStructure(typeBillingcycles.fromPartial({})),
						Customerbillingline: getStructure(typeCustomerbillingline.fromPartial({})),
						Customerbills: getStructure(typeCustomerbills.fromPartial({})),
						Meterdirectory: getStructure(typeMeterdirectory.fromPartial({})),
						Meterreadings: getStructure(typeMeterreadings.fromPartial({})),
						Params: getStructure(typeParams.fromPartial({})),
						PowerPurchaseContract: getStructure(typePowerPurchaseContract.fromPartial({})),
						PpaMap: getStructure(typePpaMap.fromPartial({})),
						Producerbillingline: getStructure(typeProducerbillingline.fromPartial({})),
						Producerbills: getStructure(typeProducerbills.fromPartial({})),
						
		};
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			ElectraMeter: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;