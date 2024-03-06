"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[42295],{22060:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=i(74848),s=i(28453);const r={},l="Bridges Attestation Oracle",a={id:"applications/DIA_Bridge_Attestation_Oracle",title:"Bridges Attestation Oracle",description:"- Team Name: DIA Data",source:"@site/applications/DIA_Bridge_Attestation_Oracle.md",sourceDirName:"applications",slug:"/applications/DIA_Bridge_Attestation_Oracle",permalink:"/applications/DIA_Bridge_Attestation_Oracle",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/DIA_Bridge_Attestation_Oracle.md",tags:[],version:"current",frontMatter:{}},o={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Architecture overview",id:"architecture-overview",level:4},{value:"Technology stack",id:"technology-stack",level:4},{value:"MVP",id:"mvp",level:4},{value:"Expectations",id:"expectations",level:4},{value:"Ecosystem Fit (Requirements)",id:"ecosystem-fit-requirements",level:3},{value:"Overview",id:"overview-1",level:4},{value:"Target audience",id:"target-audience",level:4},{value:"Meeting the needs",id:"meeting-the-needs",level:4},{value:"Similar projects",id:"similar-projects",level:4},{value:"Risks",id:"risks",level:4},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team",id:"team",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Development of a pallet for oracles",id:"development-of-a-pallet-for-oracles",level:4},{value:"Scraping Multichain bridge",id:"scraping-multichain-bridge",level:4},{value:"Development of collateral based values for nASTR, iBTC, stDOT, stETH, rETH, vKSM, kBTC",id:"development-of-collateral-based-values-for-nastr-ibtc-stdot-steth-reth-vksm-kbtc",level:4},{value:"Established partnerships in oracle fields with Polkadot ecosystem parachains",id:"established-partnerships-in-oracle-fields-with-polkadot-ecosystem-parachains",level:4},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-2",level:3},{value:"Milestone 1 - Core functionality",id:"milestone-1---core-functionality",level:3},{value:"Milestone 2 \u2014 Bridge integrations",id:"milestone-2--bridge-integrations",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"bridges-attestation-oracle",children:"Bridges Attestation Oracle"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Team Name:"})," DIA Data"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Payment Address:"})," 0xC13233bd20a7FcB1d7c2394AdE4857b778382264 Ethereum. Preferred currency - USDC (0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsxs)(t.strong,{children:[(0,n.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,n.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"Decentralized, on-chain bridge attestation oracle for Polkadot using off-chain workers"}),"\n",(0,n.jsxs)(t.p,{children:["Over the last few years, bridges have been the target of a number of high profile hacks. According to the ",(0,n.jsx)(t.a,{href:"https://rekt.news/leaderboard/",children:"rekt.news"})," 'hack leaderboard', 4 of the top 5 hacks in terms of USD value lost were attacks on bridges (total $2.2 billion lost amongst these 4 hacks). Despite many efforts to develop more robust and secure bridge architectures, there is no industry-wide tooling available for protocols to bolster their security in case a bridge is hacked. This is why we aim to to develop a decentralised, real-time bridge status update oracle that will help protocols in the Polkadot ecosystem protect their operations and customer funds."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/103409771/224655563-dbd6dca4-839d-41a5-859e-fa74c8868f84.png",alt:"Bridge Attestaion Oracle Solution Overview",title:"Attestation oracle architecture"})}),"\n",(0,n.jsx)(t.p,{children:"Our approach is to introduce on-chain verification of bridge balances on the Polkadot network using off-chain workers. The main idea behind this is that all dapps operating on Polkadot parachains will be able to integrate this security module, enabling them to trigger automated precautionary notifications and actions in case bridge balances unexpectedly drop. We achieve this by tracking bridges' locked asset vs issued assets across multiple chains. This allows us to calculate a collateral ratio, which protocols can use to define and trigger safety procedures in their code when the specified conditions are met."}),"\n",(0,n.jsxs)(t.p,{children:["The DIA team has already gained experience with collateral ratios, while creating fair value price feeds for Liquid Staked Tokens in the Polkadot ecosystem and beyond (more info ",(0,n.jsx)(t.a,{href:"https://www.diadata.org/xlsd-liquid-staking-oracle/",children:"here"}),"). The bridge attestation oracle would be specifically designed for use in the Polkadot ecosystem. Being a crosschain oracle by nature, we perceive a significant benefit in the proposed solution, because using the collateral ratio in the determination of asset prices that use bridges to bring liquidity to multiple blockchains enables the calculation of fair value prices."]}),"\n",(0,n.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,n.jsx)(t.h4,{id:"architecture-overview",children:"Architecture overview"}),"\n",(0,n.jsx)(t.p,{children:"The proposed project consists of a few core components that are to be developed."}),"\n",(0,n.jsx)(t.p,{children:"First, an overview regarding the data structures needed to represent bridge states:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"Asset:\n    Address  string\n    Chain    string\n    Decimals uint\n    Symbol   string\n    Name     string\n    \nBridgeSet:\n    LockedAssets  []Asset\n    MintedAsset   Asset\n    LockedAmounts []uint\n    MintedAmount  uint\n\nBridge:\n    Sets []BridgeSet\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Note that ",(0,n.jsx)(t.code,{children:"BridgeSet"})," is directional, so a bridge can hold a set twice in both directions if needed. By that, we can track minted and locked pairs in an omnidirectional way. Also note, that a ",(0,n.jsx)(t.code,{children:"BridgeSet"})," mints one token but can access several locked assets on different source chains."]}),"\n",(0,n.jsx)(t.p,{children:"With these in mind, the following components are proposed:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"An off-chain worker which reads bridge states: This component is used as an adapter between bridge states and the target parachain. It is used to read the amounts of locked assets from specified addresses (the bridge reserve addresses)."}),"\n",(0,n.jsx)(t.li,{children:"A token identification system which identifies matching tokens across multiple chains (i.e. both sides of each bridged asset). Identification requires  that for an asset at least the chain and the address are defined."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"An example flow on the token identification within the proposed system could look like this:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Read bridge-locked tokens on multiple source blockchains with RPC calls."}),"\n",(0,n.jsx)(t.li,{children:"Compute total amount of locked tokens by adding the values from the previous calls."}),"\n",(0,n.jsx)(t.li,{children:"Determine the amount of issued tokens on the target network."}),"\n",(0,n.jsxs)(t.li,{children:["Perform calculation ",(0,n.jsx)(t.code,{children:"MintedAmount - Sum([]LockedAmounts)"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Output values of number of issued tokens, number of locked tokens and collateral ratio values."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"All components will be available open-source to enable access to any dapp/protocol that intends to integrate this or further develop the components.\nAlso, a standard format (similar to the defined data structures above) will be developed to facilitate integrations of future bridges."}),"\n",(0,n.jsx)(t.h4,{id:"technology-stack",children:"Technology stack"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Pallet & off-chain workers will be the main enabler of the entire solution, reflecting Polkadot's native feature of off-chain workers integrated with pallets.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Rust programming language will be used to develop the pallet and the off-chain worker."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["RPCs will be the main gateway for querying data from different chains. As RPCs represent single points of failure, they will be implemented using the following logic:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Only publicly available RPCs will be used to circumvent private key management hurdles for publicly accessible solutions. If technically possible, we would enable the pallet integrator to choose their own private RPCs, if they prefer this."}),"\n",(0,n.jsx)(t.li,{children:"We will set-up a back-up system of at least 2 additional public RPCs in case one RPCs fails."}),"\n",(0,n.jsx)(t.li,{children:"We will set-up backstops for generating collateral value in case at least one of the RPCs fail."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Hosting and infrastructure will be organized as follows:"}),"\n",(0,n.jsx)(t.p,{children:"The main repository will be available on Github. Pre-built instances of our container images will live in Docker Hub for everyone to download. We seek to implement a CI/CD system that automatically builds and publishes latest changes so that anyone can use the latest version with ease and integrate fetching the latest version in their automation flow as well. Due to the decentralized nature of the proposed architecture, only the token identification data needs to be hosted centrally. For that, we will either extend existing community directories or build our own, with hosting the resulting identification files on github as well."}),"\n",(0,n.jsx)(t.p,{children:"We will also host documentation on how to use and participate in the system."}),"\n",(0,n.jsx)(t.h4,{id:"mvp",children:"MVP"}),"\n",(0,n.jsx)(t.p,{children:"Our MVP will consist of four main parts:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"The pallet providing collateral value that can be integrated by parachains"}),"\n",(0,n.jsx)(t.li,{children:"The documentation of integration"}),"\n",(0,n.jsx)(t.li,{children:"Integration of 2 bridges"}),"\n",(0,n.jsx)(t.li,{children:"Guidelines on integrating new bridges"}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"expectations",children:"Expectations"}),"\n",(0,n.jsx)(t.p,{children:"Team DIA will:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Create the framework and open-source the library of this integration."}),"\n",(0,n.jsx)(t.li,{children:"Integrate 2 bridges for initial use. Further integrations will be open for submissions from contributors."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"We will not:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Cover a security audit as a part of MVP design."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"ecosystem-fit-requirements",children:"Ecosystem Fit (Requirements)"}),"\n",(0,n.jsx)(t.h4,{id:"overview-1",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"The Polkadot ecosystem is a natural fit for this solution for several reasons:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Polkadot is a network of numerous parachains which utilize XCM for trustless and secure communication without relying on bridges. However, to achieve the vision of interoperability with external chains, bridge monitoring and attestation are necessary to establish trust and ensure the integrity of the transactions between the networks."}),"\n",(0,n.jsx)(t.li,{children:"The entire architecture of the product is tailored specifically to the Polkadot ecosystem due to it's unique ability of executing computational programs via off-chain workers."}),"\n",(0,n.jsx)(t.li,{children:"The tool adds significant value for a variety of Polkadot ecosystem actors - parachains, dapps, bridges, oracles and others."}),"\n",(0,n.jsx)(t.li,{children:"The tool aims to serve as a public good on Polkadot, therefore will benefit anyone that integrates it."}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"target-audience",children:"Target audience"}),"\n",(0,n.jsx)(t.p,{children:"We have identified our target audience as follows:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Parachains are the target facilitator that will enable the adoption, but they also stand to benefit from integration themselves as the tool enables them to track bridges' security on a chain level."}),"\n",(0,n.jsx)(t.li,{children:"DeFi dapp developers (e.g., lending protocols) are the main beneficiaries. We expect to see most adoption from them, as they are the arbiters that enable bridged assets to be traded/staked or used however else and thus are most directly exposing their users' assets to these risks."}),"\n",(0,n.jsx)(t.li,{children:"Bridges can integrate the security module to create their own security processes. They will strongly benefit from having an independent third party tracker next to their own internal ones."}),"\n",(0,n.jsx)(t.li,{children:"Oracles will be able to use the collateral ratio for interchain asset pricing. In theory, native asset trading statistics can be bridged to synthetic asset in order to decrease manipulation risk."}),"\n",(0,n.jsx)(t.li,{children:"As the module will be fully open source, any other Polkadot ecosystem developer/team can integrate it for their use cases."}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"meeting-the-needs",children:"Meeting the needs"}),"\n",(0,n.jsx)(t.p,{children:"Bridge hacks are rare but painful because of the potentially high amount of funds that are constantly at risk / an attractive target for malicious actors. Therefore, the bridge attestation oracle will provide a live auditing tool for any actor in the Polkadot ecosystem that wants to make their operation more secure."}),"\n",(0,n.jsx)(t.p,{children:"In discussions with various ecosystem actors, the idea and architecture of the solution were presented with the goal of validating the problem and the potential solution. We received supportive feedback from all interviewees, and therefore decided to pursue the inititive further."}),"\n",(0,n.jsx)(t.p,{children:"To verify the relevance of the idea we conducted interviews with several ecosystem participants, including"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Acala"}),"\n",(0,n.jsx)(t.li,{children:"Astar"}),"\n",(0,n.jsx)(t.li,{children:"AstridDAO"}),"\n",(0,n.jsx)(t.li,{children:"Interlay"}),"\n",(0,n.jsx)(t.li,{children:"Pendulum"}),"\n",(0,n.jsx)(t.li,{children:"StellaSwap"}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"similar-projects",children:"Similar projects"}),"\n",(0,n.jsx)(t.p,{children:"We were not able to identify any similar solution present in the market. Similar approaches can be attributed to:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Proof of Reserves oracles - developed by several oracle providers, these oracles track the amount of tokens in reserves and provide this information publicly."}),"\n",(0,n.jsx)(t.li,{children:"Cross-chain messaging protocols - these have architectural similarity in that one could transmit bridge balances as a message, however there are several limitations to this approach:"}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"They would act as a 2nd layer bridge (bridge for bridge balances) and are also prone to manipulation."}),"\n",(0,n.jsx)(t.li,{children:"Gas fees would have to be paid on the origin chain, which causes potentially volatile costs required to run such operation, putting them at risk."}),"\n"]}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsxs)(t.li,{children:["Real time alert providers for smart contract activities. Tools such as ",(0,n.jsx)(t.a,{href:"https://explorer.forta.network/",children:"Forta"})," allow to set-up monitoring and notifications for pre-determined smart contract activities. However, they do not offer a direct solution for bridge balance monitoring, which we aim to deliver."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"As our proposed solution is different in nature, we do not perceive any of the existing approaches as real alternatives. Additionally, all of these solutions are commercially driven, while the bridge attestation oracle will serve as a public good."}),"\n",(0,n.jsx)(t.h4,{id:"risks",children:"Risks"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"RPC manipulation risk - the solution will use RPC services to retrieve data from blockchains. Therefore, if someone manages to manipulate RPC data, the final value could be exploited. A potential mitigation could be to introduce connections to multiple RPCs simultaneously to reach a consensus."}),"\n",(0,n.jsx)(t.li,{children:"Contract migration risk - from time to time protocols may need to migrate or upgrade contracts. This could produce incosistent values. To avoid this,  direct communication channels with bridges can be set up and tracked to flag any changes on the smart contract level. This could be complemented with community based forum where contributors could also flag these migrations manually."}),"\n",(0,n.jsx)(t.li,{children:"Off-chain worker operational risk - the solution is developed on the assumption that off-chain workers can be trusted and will be maintained within the Polkadot ecosystem. However, upgrades, malfunctions or the unlikely event of discontinuation of off-chain workers poses a risk to the solution. In this case, migration to another off-chain computation platform could be a mitigation (e.g. Phala or Integritee)."}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,n.jsx)(t.h3,{id:"team",children:"Team"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Samuel Brack // Cofounder and CTO at DIA // ",(0,n.jsx)(t.a,{href:"https://github.com/kaythxbye",children:"Github"})," // ",(0,n.jsx)(t.a,{href:"https://www.linkedin.com/in/samuelbrack/",children:"LinkedIn"})]}),"\n",(0,n.jsxs)(t.li,{children:["Philipp Pade // Lead Integrations Developer at DIA // ",(0,n.jsx)(t.a,{href:"https://github.com/jppade",children:"Github"})," // ",(0,n.jsx)(t.a,{href:"https://www.linkedin.com/in/jan-philipp-pade/",children:"LinkedIn"})]}),"\n",(0,n.jsxs)(t.li,{children:["Nitin Gurbani // Senior Developer at DIA // ",(0,n.jsx)(t.a,{href:"https://github.com/nnn-gif",children:"Github"})," // ",(0,n.jsx)(t.a,{href:"https://www.linkedin.com/in/nitin-g-098229228/",children:"LinkedIn"})]}),"\n",(0,n.jsxs)(t.li,{children:["Zygis Marazas // Product Lead at DIA // ",(0,n.jsx)(t.a,{href:"https://www.linkedin.com/in/zygimantas-marazas/",children:"LinkedIn"})]}),"\n",(0,n.jsxs)(t.li,{children:["Paul Claudius // Cofounder and Business Development Lead at DIA // ",(0,n.jsx)(t.a,{href:"https://www.linkedin.com/in/paulclaudius/",children:"LinkedIn"})]}),"\n",(0,n.jsxs)(t.li,{children:["Dillon Hanson // Business Development Manager at DIA // ",(0,n.jsx)(t.a,{href:"https://www.linkedin.com/in/dillonhanson/",children:"LinkedIn"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["_",(0,n.jsx)(t.strong,{children:"Contact Name:"})," Paul Claudius"]}),"\n",(0,n.jsxs)(t.li,{children:["_",(0,n.jsx)(t.strong,{children:"Contact Email:"})," ",(0,n.jsx)(t.a,{href:"mailto:paul.claudius@diadata.org",children:"paul.claudius@diadata.org"})]}),"\n",(0,n.jsxs)(t.li,{children:["_",(0,n.jsx)(t.strong,{children:"Website:"})," ",(0,n.jsx)(t.a,{href:"https://www.diadata.org/",children:"https://www.diadata.org/"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["_",(0,n.jsx)(t.strong,{children:"Registered Address:"})," Baarerstrasse 10, 6300 Zug, Switzerland."]}),"\n",(0,n.jsxs)(t.li,{children:["_",(0,n.jsx)(t.strong,{children:"Registered Legal Entity:"})," DIA e.V."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,n.jsx)(t.p,{children:"Experience which will help to succesfully develop this project is listed below:"}),"\n",(0,n.jsx)(t.h4,{id:"development-of-a-pallet-for-oracles",children:"Development of a pallet for oracles"}),"\n",(0,n.jsxs)(t.p,{children:["Team DIA has extensive experience in developing a pallet for Polkadot using off-chain workers. The pallet was developed to serve the purpose of accessing oracles natively by parachains. The documentation of the solution can be found ",(0,n.jsx)(t.a,{href:"https://docs.diadata.org/documentation/oracle-documentation/oracle-structure/polkadot-offchain-worker",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"scraping-multichain-bridge",children:"Scraping Multichain bridge"}),"\n",(0,n.jsxs)(t.p,{children:["Team DIA already did experiments with automatic bridged assets identification, therefore we already developed a ",(0,n.jsx)(t.a,{href:"https://multichain.xyz/",children:"Multichain"})," bridge scraper which maps out assets accross a variety of chains."]}),"\n",(0,n.jsx)(t.h4,{id:"development-of-collateral-based-values-for-nastr-ibtc-stdot-steth-reth-vksm-kbtc",children:"Development of collateral based values for nASTR, iBTC, stDOT, stETH, rETH, vKSM, kBTC"}),"\n",(0,n.jsx)(t.p,{children:"We recently launched xLSD - a product that tracks collateral values for liquid staked tokens"}),"\n",(0,n.jsx)(t.h4,{id:"established-partnerships-in-oracle-fields-with-polkadot-ecosystem-parachains",children:"Established partnerships in oracle fields with Polkadot ecosystem parachains"}),"\n",(0,n.jsx)(t.p,{children:"We are already present in the Polkadot ecosystem and have developed oracles for a range of parachains and dapps, and integrated natively with a range of DEXs including:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Moonbeam & Moonriver","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Midas Capital"}),"\n",(0,n.jsx)(t.li,{children:"Mixbytes"}),"\n",(0,n.jsx)(t.li,{children:"Orbiter One"}),"\n",(0,n.jsx)(t.li,{children:"Raze Network"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Astar","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Starlay"}),"\n",(0,n.jsx)(t.li,{children:"SIO2 Finance"}),"\n",(0,n.jsx)(t.li,{children:"Algem"}),"\n",(0,n.jsx)(t.li,{children:"AstridDAO"}),"\n",(0,n.jsx)(t.li,{children:"Orcus Finance"}),"\n",(0,n.jsx)(t.li,{children:"Starfish Finance"}),"\n",(0,n.jsx)(t.li,{children:"Rikkei Finance"}),"\n",(0,n.jsx)(t.li,{children:"Arka Finance"}),"\n",(0,n.jsx)(t.li,{children:"Standard Protocol"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"Pendulum"}),"\n",(0,n.jsx)(t.li,{children:"Interlay"}),"\n",(0,n.jsx)(t.li,{children:"Bifrost"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"DEX integrations:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Beamswap (Moonbeam)"}),"\n",(0,n.jsx)(t.li,{children:"Stellaswap (Moonbeam)"}),"\n",(0,n.jsx)(t.li,{children:"Arthswap (Astar)"}),"\n",(0,n.jsx)(t.li,{children:"Huckleberry (Moonriver)"}),"\n",(0,n.jsx)(t.li,{children:"Solarbeam (Moonriver)"}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,n.jsx)(t.h3,{id:"overview-2",children:"Overview"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Total Estimated Duration:"})," 3 months"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  1.5 FTE"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Total Costs:"})," 26,000 USD"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"milestone-1---core-functionality",children:"Milestone 1 - Core functionality"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Estimated duration:"})," 1.5 months"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"FTE:"}),"  1.5"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Costs:"})," 18,000 USD"]}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,n.jsx)(t.th,{children:"Deliverable"}),(0,n.jsx)(t.th,{children:"Specification"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0a."})}),(0,n.jsx)(t.td,{children:"License"}),(0,n.jsx)(t.td,{children:"Apache 2.0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0b."})}),(0,n.jsx)(t.td,{children:"Documentation"}),(0,n.jsxs)(t.td,{children:["We will provide both ",(0,n.jsx)(t.strong,{children:"inline documentation"})," of the code and a basic ",(0,n.jsx)(t.strong,{children:"tutorial"})," that explains how a user can intgrate the collateral value into their code, which will display the functionality."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0c."})}),(0,n.jsx)(t.td,{children:"Testing and Testing Guide"}),(0,n.jsx)(t.td,{children:"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0d."})}),(0,n.jsx)(t.td,{children:"Docker"}),(0,n.jsx)(t.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0e."}),(0,n.jsx)(t.td,{children:"Article"}),(0,n.jsxs)(t.td,{children:["We will publish an ",(0,n.jsx)(t.strong,{children:"article"})," that introduces to the solution with all the guidelines included."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,n.jsx)(t.td,{children:"Attestation oracle core: Off-chain worker"}),(0,n.jsx)(t.td,{children:"We will create an Off-chain worker as stated in the architecture overview section."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,n.jsx)(t.td,{children:"Attestation oracle core: Pallet"}),(0,n.jsx)(t.td,{children:"The entire solution will be made available as Pallet (described in architecture section)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,n.jsx)(t.td,{children:"Attestation oracle core: RPCs"}),(0,n.jsx)(t.td,{children:"We will set-up connections to RPCs of other chains with fallback functionality (at least 2 RPCs per chain)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,n.jsx)(t.td,{children:"Attestation oracle core: Collateral ratio calculation"}),(0,n.jsx)(t.td,{children:"The logic for calculating collateral ratio will be developed within the off-chain worker."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"milestone-2--bridge-integrations",children:"Milestone 2 \u2014 Bridge integrations"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Estimated Duration:"})," 1.5 months"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"FTE:"}),"  1"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Costs:"})," 8,000 USD"]}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,n.jsx)(t.th,{children:"Deliverable"}),(0,n.jsx)(t.th,{children:"Specification"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0a."})}),(0,n.jsx)(t.td,{children:"License"}),(0,n.jsx)(t.td,{children:"Apache 2.0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0b."})}),(0,n.jsx)(t.td,{children:"Documentation"}),(0,n.jsxs)(t.td,{children:["We will provide both ",(0,n.jsx)(t.strong,{children:"inline documentation"})," of the code and a basic ",(0,n.jsx)(t.strong,{children:"tutorial"})," that explains how a user can integrate bridges collateralization value, which will show how the new functionality works."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0c."})}),(0,n.jsx)(t.td,{children:"Testing and Testing Guide"}),(0,n.jsx)(t.td,{children:"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0d."})}),(0,n.jsx)(t.td,{children:"Docker"}),(0,n.jsx)(t.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,n.jsx)(t.td,{children:"Bridge Integration: Multichain"}),(0,n.jsxs)(t.td,{children:["We will develop a module as part of the proposed solution that retrieves collateral information for assets bridged by the ",(0,n.jsx)(t.a,{href:"https://github.com/anyswap",children:"Multichain bridge contracts"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,n.jsx)(t.td,{children:"Bridge Integration: Interlay"}),(0,n.jsxs)(t.td,{children:["We will develop a module as part of the proposed solution that retrieves collateral information for assets bridged by the ",(0,n.jsx)(t.a,{href:"https://github.com/interlay/interbtc",children:"Interlay bridge contracts"}),"."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,n.jsx)(t.p,{children:"We see a lot of potential for the future of the solution, these include:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Develop attestation for multichain Liquid Staked Tokens (e.g. aUSD)."}),"\n",(0,n.jsx)(t.li,{children:"Spin-off as independent solution (not a pallet)."}),"\n",(0,n.jsx)(t.li,{children:"Develop monitoring dashboards for researchers."}),"\n",(0,n.jsx)(t.li,{children:"Create built-in notifications services."}),"\n",(0,n.jsx)(t.li,{children:"Expand into any smart contract metrics tracking that allows users to define their own logic."}),"\n",(0,n.jsx)(t.li,{children:"Introduce community driven governance for any changes and future directions of the solution."}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"How did you hear about the Grants Program?"})," - personal recommendation"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>a});var n=i(96540);const s={},r=n.createContext(s);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);