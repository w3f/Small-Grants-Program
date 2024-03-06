"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[27397],{96367:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=t(74848),s=t(28453);const a={},r="XBI - xcm-based high-level standard and interface (ABI) for smart contracts",o={id:"applications/xbi-format-psp-t3rn",title:"XBI - xcm-based high-level standard and interface (ABI) for smart contracts",description:"This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a > (such as this one) can be removed.",source:"@site/applications/xbi-format-psp-t3rn.md",sourceDirName:"applications",slug:"/applications/xbi-format-psp-t3rn",permalink:"/applications/xbi-format-psp-t3rn",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/xbi-format-psp-t3rn.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Brief Description",id:"brief-description",level:4},{value:"Rationale",id:"rationale",level:4},{value:"Project Details",id:"project-details",level:3},{value:"Propose XCM Format Extension",id:"propose-xcm-format-extension",level:5},{value:"XBI-payload specification",id:"xbi-payload-specification",level:2},{value:"XBI Executor",id:"xbi-executor",level:2},{value:"General introduction to proving with XBI Executor",id:"general-introduction-to-proving-with-xbi-executor",level:3},{value:"Location of XBI in the stack",id:"location-of-xbi-in-the-stack",level:2},{value:"XBI payload lifecycle",id:"xbi-payload-lifecycle",level:3},{value:"Metadata",id:"metadata",level:4},{value:"Lifecycle",id:"lifecycle",level:4},{value:"Expectations",id:"expectations",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Milestone 1 \u2014 Produce PSP as a result of collaboration with Selected partners which sets requirements for XBI Format and XBI Executors Interface",id:"milestone-1--produce-psp-as-a-result-of-collaboration-with-selected-partners-which-sets-requirements-for-xbi-format-and-xbi-executors-interface",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"xbi---xcm-based-high-level-standard-and-interface-abi-for-smart-contracts",children:"XBI - xcm-based high-level standard and interface (ABI) for smart contracts"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a ",(0,i.jsx)(n.code,{children:">"})," (such as this one) can be removed."]}),"\n",(0,i.jsxs)(n.p,{children:["See the ",(0,i.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/#pencil-process",children:"Grants Program Process"})," on how to submit a proposal."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Team Name:"})," t3rn"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Payment Address:"})," 0x343f822207f65fba7cc5325fd76d879528e706f4"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,i.jsx)(n.em,{children:"The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe."})]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,i.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Propose a new Polkadot Standard Proposal for an XCM-based high-level interface for cross-chain smart contract execution - XBI."}),"\n",(0,i.jsx)(n.h4,{id:"brief-description",children:"Brief Description"}),"\n",(0,i.jsx)(n.p,{children:"XBI will be an XCM-based Binary Interface that extends the XCM-protocol to enable smart contracts calls, while receiving execution results back to the source Parachain. The same interface will be used to connect Smart Contract VMs installed on other Parachains, as well as to communicate with remote-to-Polkadot blockchains using the XCM protocol, which will be compatible with the bridges of the most active blockchain ecosystems today (i.e. Ethereum, Solana, Avalanche, Cosmos)."}),"\n",(0,i.jsx)(n.p,{children:"To further the adoption of XBI within the Polkadot ecosystem we specify XBI as a PSP - Polkadot Standard Proposal."}),"\n",(0,i.jsx)(n.h4,{id:"rationale",children:"Rationale"}),"\n",(0,i.jsx)(n.p,{children:"First and foremost, XBI focuses on usability, as such it will recognise the difference between WASM and EVM, the most popular smart contract byte code in the Polkadot ecosystem, as of today. As a high-level format XBI sets the standard for interfaces implementing interactions between EVM and WASM based contracts."}),"\n",(0,i.jsx)(n.p,{children:"We propose further propose to implement XBI as part of t3rn, a composable smart contracts platform, alongside selected Substrate-based blockchains that focus heavily on the smart contracts interoperability, such as Moonbeam and Astar. This will be done in order to enable mutual cross-chain smart contract communication between internal-to-Polkadot projects using the same Interface for trust-free communication with remote-to-Polkadot ecosystems."}),"\n",(0,i.jsx)(n.p,{children:"The XBI interface used by Parchains offers a contingencies against runtime upgrades, while allowing Parachains to define and expose their functionalties."}),"\n",(0,i.jsx)(n.h3,{id:"project-details",children:"Project Details"}),"\n",(0,i.jsx)(n.p,{children:"The XBI cross-chain binary interface for smart contracts is a format extension to XCM that allows Parachain to mutually call and retrieve results from:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"smart contracts VMs,"}),"\n",(0,i.jsx)(n.li,{children:"pallets"}),"\n",(0,i.jsx)(n.li,{children:"state queries: on Parachains as well as remote-to-Polkadot ecosystems that have an adapter, for a Pallet XBI Executor, to a Parachain's Runtime. Pallet XBI Executor adapts to a bridge linking a Parachain with selected remote-to-Polkadot ecosystem, defining the necessary interface, while configuring the XCM Executor Pallet to provide status responses on sent queries."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Parachains that use XBI can expect the following functionalities:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"a) Trigger smart contract execution on internal-to-Polkadot Parachains:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Pallet Contracts WASM smart contracts"}),"\n",(0,i.jsx)(n.li,{children:"Pallet EVM smart contracts"}),"\n",(0,i.jsx)(n.li,{children:"Other Pallets"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"b) Trigger smart contract execution on external-to-Polkadot Ecosystems:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"EVM-like smart contracts"}),"\n",(0,i.jsx)(n.li,{children:"Generic smart contracts"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"c) Reveive responses for both successful and unsuccessful executions on both internal and remote-to-Polkadot ecosystems"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"d) Expose customized APIs, specific to a Parachain, decodable via XBI Format."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"propose-xcm-format-extension",children:"Propose XCM Format Extension"}),"\n",(0,i.jsx)(n.p,{children:"We propose for the XCM format to be extended; standardizing how XCM::Transact is used."}),"\n",(0,i.jsx)(n.p,{children:"We further propose to introduce two format XCM extensions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'XCM::Transact("magicbyte", XCMFE#1, <Scale-encoded-native-call>)'})," - native runtime dispatch (in case of FRAME - Scale encoded call)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"XCM::Transact(XCMFE#2, <palletname>::<methodname>, <scale-encoded-args>)"})," - public Scale-RPC, in case of FRAME - Method name is ",(0,i.jsx)(n.code,{children:"<palletname>::<methodname>"}),"."]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"XCM::Transact(XCMFE#3, XBI(<XBI-instance>, XBI-payload))"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"xbi-payload-specification",children:"XBI-payload specification"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"call(instance_id/bridge_id)"}),": ",(0,i.jsx)(n.code,{children:"modifications"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"call_native"}),": ",(0,i.jsx)(n.code,{children:"trigger Scale encoded native call"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"payload: Bytes"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"call_evm"}),":  ",(0,i.jsx)(n.code,{children:"trigger smart contract call"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"caller: AccountId"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"dest: AccountId"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"value: Balance"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"input: Bytes"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"gas_limit: Balance"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"max_fee_per_gas: Option<Balance>"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"max_priority_fee_per_gas: Option<Balance>"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"nonce: Option<u32>"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"access_list: Option<Bytes>"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"call_wasm"}),": ",(0,i.jsx)(n.code,{children:"trigger smart contract call"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"caller: AccountId"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"dest: MultiAddress<AccountId, ()>"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"value: Balance"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"input: Bytes"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"additional_params: Option<Vec<ABIType>>"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"call_custom"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"caller: AccountId"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"dest: MultiAddress<AccountId, ()>"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"value: Balance"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"input: Bytes"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"additional_params: Option<Vec<ABIType>>"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"query"}),": ",(0,i.jsx)(n.code,{children:"access state / read-only"})," // worth making a batch/related call.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"query_evm"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"address: AccountId"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"storage_key: Bytes"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"query_wasm"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"address: AccountId"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"storage_key: Bytes"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"result"}),": ",(0,i.jsx)(n.code,{children:"(success|failure, <output|failruedetails>, <dest_parachain_witness>)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"metadata"}),": ",(0,i.jsx)(n.code,{children:"Lifecycle status notifications"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Sent (action timeout, notification timeout)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Delivered (action timeout, notification timeout)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Executed (action timeout, notification timeout)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Destination / Bridge security guarantees (e.g. in confirmation no for PoW, finality proofs)"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"max_exec_cost"}),": ",(0,i.jsx)(n.code,{children:"Balance"})," : ",(0,i.jsx)(n.code,{children:"Maximal cost / fees for execution of delivery"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"max_notification_cost"}),": ",(0,i.jsx)(n.code,{children:"Balance"})," : ",(0,i.jsx)(n.code,{children:"Maximal cost / fees per delivering notification"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Each XBI Executor's instance will need to implement the XCM Format for the underlying bridge it connects with."}),"\n",(0,i.jsx)(n.h2,{id:"xbi-executor",children:"XBI Executor"}),"\n",(0,i.jsx)(n.p,{children:"Executers will be responsible for tracking the lifecycle of sent XBI payloads."}),"\n",(0,i.jsx)(n.p,{children:"Getting the result should trigger a XCM-message back to the original sender of the XBI payload (if the sender subscribed to execution lifecycle status notification)."}),"\n",(0,i.jsxs)(n.p,{children:["The XCM-message will look like this ",(0,i.jsx)(n.code,{children:"XCM::Extended|Transact(XCMFE#3, XBI::result(...))"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"general-introduction-to-proving-with-xbi-executor",children:"General introduction to proving with XBI Executor"}),"\n",(0,i.jsx)(n.p,{children:"Upon receiving an XBI request, an XBI Executor will generate the associated ID and stores in the state map. This entry to the state map gets updated as soon as the Executor receives the response from one of the Runtime's VM (Default Executor) or an installed Runtime Bridge.\nThe state entry is updated with the output response to the requested XBI Payload. As such, it is available for trust-free validation on the requesting Parachain side by sending back the Witness that includes the dispatched call alongside accompanying bytes, which can be decoded to derive the status of the call after the inclusion has already been confirmed. We propose a form of Witness that should work with most external-to-Polkadot ecosystems; suitability will be assessed as part of the first Development Milestone."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"struct Witness {\n    encoded_message: Vec<u8>, // Encoded message containing the call dispatch   \n    trie_pointer: TriePointer, // Enum pointer, to a merkle tree in that block: state, transaction or logs   \n    block_hash: Vec<u8>, // Pointer to a block including the message   \n    merkle_path_proof: Vec<Vec<u8>> // Proof - a merkle path including message into block \n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"location-of-xbi-in-the-stack",children:"Location of XBI in the stack"}),"\n",(0,i.jsx)(n.p,{children:"XBI Format is a standard over XCM, enabling Parachains with effective communication to use the same interface with various smart contract VMs, installed both at local-to-Polkadot as well remote-to-Polkadot Consensus Systems."}),"\n",(0,i.jsx)(n.p,{children:"Communication using XCM Format traverses as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"(trigger) XCM -> (send) XCM>XBI> -> (receive) XBI>DispatchableCall ->  (execute) -> (send) Result->XBI::result -> (receive) XBI result"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The above examples readability could also be enhances with the following example:\n",(0,i.jsx)(n.code,{children:"(send XBIDefaultExecutor::call_custom) Moonbeam -> t3rn (send XBIRemoteExecutor::call_custom) -> Cosmos Bridge -> (native-to-Cosmos execution) Cosmos Chain  -> Cosmos Bridge -> (send XBIExecutor::result) t3rn -> (receive XBIExecutor::result) Moonbeam"})]}),"\n",(0,i.jsx)(n.h3,{id:"xbi-payload-lifecycle",children:"XBI payload lifecycle"}),"\n",(0,i.jsx)(n.p,{children:"XBI payload lifecycle can be directed by developers using metadata. XBI Executors implement the functionalities allowing to handle the lifecycle:"}),"\n",(0,i.jsx)(n.h4,{id:"metadata",children:"Metadata"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Lifecycle status notifications","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Sent (action timeout, notification timeout)"}),"\n",(0,i.jsx)(n.li,{children:"Delivered (action timeout, notification timeout)"}),"\n",(0,i.jsx)(n.li,{children:"Executed (action timeout, notification timeout)"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Destination / Bridge security guarantees (e.g. in confirmation no )"}),"\n",(0,i.jsx)(n.li,{children:"Timeout for every lifecycle step."}),"\n",(0,i.jsx)(n.li,{children:"Maximal cost / fees"}),"\n",(0,i.jsx)(n.li,{children:"Notification payment / stipend"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"lifecycle",children:"Lifecycle"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Successfully sent across the bridge (no execution yet)"}),"\n",(0,i.jsx)(n.li,{children:"Delivery on the other side"}),"\n",(0,i.jsx)(n.li,{children:"Execution status on the other side"}),"\n",(0,i.jsx)(n.li,{children:"Execution result / Notification stream"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"expectations",children:"Expectations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Propose XBI Format to be used by t3rn and Parachains, factored in feedback and discussion with selected teams building smart contracts VMs."}),"\n",(0,i.jsx)(n.li,{children:"Conclude the work on XBI specification as a PSP - Polkadot Specification Proposal"}),"\n",(0,i.jsx)(n.li,{children:"Set the stage for the XBI grant follow-up that focuses solely on its implementation for both local and remote to Polkadot ecosystems"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,i.jsx)(n.p,{children:"t3rn is a cross-chain smart contracts registry that enable smart contracts execution on multiple blockchians. The XCM-based Interface will come in a form of a FRAME pallet and will be used by t3rn and any other Substrate-based project that wishes to use it."}),"\n",(0,i.jsx)(n.p,{children:"The XBI Format and XBI Executors for cross-chain smart contracts will be tested live in a XCM Environment, such as the Rococo network with other selected Substrate builders."}),"\n",(0,i.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,i.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Maciej Baj (team lead)"}),"\n",(0,i.jsx)(n.li,{children:"t3rn team members: 7 developers"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Contact Name:"})," Jacob Kowalewski"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Contact Email:"})," ",(0,i.jsx)(n.a,{href:"mailto:jacob@t3rn.io",children:"jacob@t3rn.io"}),", ",(0,i.jsx)(n.a,{href:"mailto:maciej@t3rn.io",children:"maciej@t3rn.io"})," (CC)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Website:"})," ",(0,i.jsx)(n.a,{href:"https://www.t3rn.io/",children:"https://www.t3rn.io/"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Registered Address:"})," Quijano Chambers, Road Town, Tortola, British Virgin Islands, BVI, BC No. 2062235"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Registered Legal Entity:"})," t3rn Ltd."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,i.jsx)(n.p,{children:"t3rn team - succesfully completed one Web3 Foundation grant to establish and implement the prototype of t3rn's cross-chain gateways and is now building as part of Substrate Builders Program."}),"\n",(0,i.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/t3rn",children:"https://github.com/t3rn"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/MaciejBaj",children:"https://github.com/MaciejBaj"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"team-linkedin-profiles-if-available",children:"Team LinkedIn Profiles (if available)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.linkedin.com/in/maciej-baj/",children:"https://www.linkedin.com/in/maciej-baj/"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.linkedin.com/in/pauletscheit/",children:"https://www.linkedin.com/in/pauletscheit/"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.linkedin.com/in/jacobkowalewski/",children:"https://www.linkedin.com/in/jacobkowalewski/"})}),"\n",(0,i.jsxs)(n.li,{children:["select members of the ",(0,i.jsx)(n.a,{href:"https://www.linkedin.com/company/t3rn-io",children:"t3rn team"})," - TBD"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,i.jsx)(n.h3,{id:"milestone-1--produce-psp-as-a-result-of-collaboration-with-selected-partners-which-sets-requirements-for-xbi-format-and-xbi-executors-interface",children:"Milestone 1 \u2014 Produce PSP as a result of collaboration with Selected partners which sets requirements for XBI Format and XBI Executors Interface"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Estimated duration:"})," 6 weeks"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"FTE:"}),"  2"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Costs:"})," $25.000 in DAI (Ethereum)"]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(n.th,{children:"Deliverable"}),(0,i.jsx)(n.th,{children:"Specification"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"1a."}),(0,i.jsx)(n.td,{children:"License"}),(0,i.jsx)(n.td,{children:"Apache 2.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"1b."}),(0,i.jsx)(n.td,{children:"Documentation"}),(0,i.jsxs)(n.td,{children:["Provide both ",(0,i.jsx)(n.strong,{children:"inline documentation"})," of the code and a basic ",(0,i.jsx)(n.strong,{children:"tutorial"})," that establishes XBI Format. This assumes a series of consulations and feedback loops enhancing the XBI Format usability with min. 2 selected partnered Parachain teams. Tutorials will be done to show how to access the XBI-Executor interface and interact with XBI Format with it as a Substrate-based blockchain."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"1c."}),(0,i.jsx)(n.td,{children:"PSP"}),(0,i.jsx)(n.td,{children:"Transform the XBI Format documentation into Polkadot Standard Proposal. Detail both the Metadata and all of the XBI execution orders of the format, as a consistent and unambiguous specification."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,i.jsx)(n.p,{children:"This is the research-focused grant proposal on XBI which is assumed to be followed up with the grant focused solely on its implementation."}),"\n",(0,i.jsx)(n.p,{children:"XBI will help contribute to the t3rn vision of a fully connected cross-chain ecosystem, rooted in Polkadot. For the context, t3rn is building a cross-chain smart contract hosting platform that enable smart contracts execution on multiple blockchians."}),"\n",(0,i.jsxs)(n.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"How did you hear about the Grants Program?"}),"\nThis is our second Web3 Foundation grant, having delivered on our first grant back in December 2020. We having been working tirelessly within the Polkadot ecosystem ever since, as part of the Substrate Builders Program and intend to launch as a Polkadot parachain in summer 2022."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(96540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);