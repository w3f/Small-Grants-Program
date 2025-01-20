"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[53907],{47705:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"applications/xtokens","title":"xtokens - XCM Implementation for Fungible Assets","description":"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don\'t remove any of the mandatory parts presented in bold letters or as headlines! See the Open Grants Program Process on how to submit a proposal.","source":"@site/applications/xtokens.md","sourceDirName":"applications","slug":"/applications/xtokens","permalink":"/applications/xtokens","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/xtokens.md","tags":[],"version":"current","frontMatter":{}}');var i=t(74848),r=t(28453);const a={},o="xtokens - XCM Implementation for Fungible Assets",l={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team Github",id:"team-github",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone \u2014 Implement xtokens PoC",id:"milestone--implement-xtokens-poc",level:3},{value:"Milestone \u2014 Further Implement <code>xtokens</code> according to the XCM Fungible Asset Implementation Guide",id:"milestone--further-implement-xtokens-according-to-the-xcm-fungible-asset-implementation-guide",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"xtokens---xcm-implementation-for-fungible-assets",children:"xtokens - XCM Implementation for Fungible Assets"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the ",(0,i.jsx)(n.a,{href:"https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md",children:"Open Grants Program Process"})," on how to submit a proposal."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Team Name:"})," Acala"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Payment Address:"})," ",(0,i.jsx)(n.code,{children:"1Q88PtW866r4bfv2eMphobP78QnsDrRKfY"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe."})}),"\n",(0,i.jsxs)(n.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,i.jsx)(n.p,{children:"We are creating a XCM Implementation for Fungible Assets - xtokens."}),"\n",(0,i.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["Polkadot Cross-Consensus Message Format (XCM) is a generic message format that is very flexible but loosly defined. Therefore, we need to provide an implementation of required use case e.g. cross-chain transfer, for parachains to be interoperable with the same context, namely send/receive fungible assets between parachains, and between relay chain and parachains. We have developed an implementation guide, as well as a reference implementation ",(0,i.jsx)(n.code,{children:"xtokens"})," that has been used by Acala, Laminar, Plasm, and HydraDX successfully completing cross-chain fungible token transfers on Rococo parachain testnet. We are supporting many more projects including Moonbeam, Centrifuge, PolkaBTC, Darwinia, Kilt, Crust and Snowfork to implement this and enable our chains to be composable with each other."]}),"\n",(0,i.jsx)(n.p,{children:"We believe all chains on Polkadot/Kusama shall be composable with each other, from exchanging values to exchanging and altering states. The cross-chain fungible asset implementation is the first step towards this goal."}),"\n",(0,i.jsx)(n.h3,{id:"project-details",children:"Project Details"}),"\n",(0,i.jsxs)(n.p,{children:["We have already delivered the work we outlined in a PoC state, we will continue the development to meet the ",(0,i.jsx)(n.code,{children:"best practice"})," outlined in the implementation guide at a production-grade standard, and this grant is applied partially in retrospect."]}),"\n",(0,i.jsx)(n.p,{children:"Below are deliverables:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["XCM Fungible Asset Implementation Guide that outlines fungible asset design considerations and discussions, serving as a draft ",(0,i.jsx)(n.code,{children:"best practice"}),". (see ",(0,i.jsx)(n.a,{href:"https://github.com/open-web3-stack/open-runtime-module-library/discussions/385",children:"here"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["A reference implementation of cross-chain fungible assets - xtokens PoC (see xtokens ",(0,i.jsx)(n.a,{href:"https://github.com/open-web3-stack/open-runtime-module-library/tree/master/xtokens",children:"here"})," and xcm-support ",(0,i.jsx)(n.a,{href:"https://github.com/open-web3-stack/open-runtime-module-library/tree/master/xcm-support",children:"here"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["A detailed documentation for other parachains to use these pallets, configure cross-chain assets, open HRMP channels on Rococo to test the cross-chain transfer etc. (see docs ",(0,i.jsx)(n.a,{href:"https://wiki.acala.network/build/development-guide/composable-chains",children:"here"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Further develop xtokens to implement parachain and fungible asset identifier to handle asset conversion, assetId conversion, and multi-location conversion etc in a more generic and extensible way as described in the ",(0,i.jsx)(n.a,{href:"https://github.com/open-web3-stack/open-runtime-module-library/discussions/385",children:"implementation guide"})]}),"\n",(0,i.jsxs)(n.li,{children:["We will contribute the ",(0,i.jsx)(n.code,{children:"xtokens"})," code to the ",(0,i.jsx)(n.a,{href:"https://github.com/open-web3-stack/open-runtime-module-library",children:"orml (open-runtime-module-library)"})," so anyone can use and further extend it."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,i.jsxs)(n.p,{children:["This is another common-good implementation that would be useful to any parachains who want to send and receive fungible assets from other parachains, as well as send/receive relay chain token between relay chain and parachain. We have tackled many XCM and HRMP caveats while implementing ",(0,i.jsx)(n.code,{children:"xtokens"}),", which would save much time for many other projects and accelerate innovations on top of cross-chain value exchange. We also foresee this work will inspire more collaboration and discussion within the parachain ecosystem, and could also inspire similar development for non-fungible assets."]}),"\n",(0,i.jsx)(n.p,{children:"We are not aware of other implementations at this stage, but hope to inspire more."}),"\n",(0,i.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,i.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Shaun Wang (Lead Developer)"}),"\n",(0,i.jsx)(n.li,{children:"Bryan Chen (Architect)"}),"\n",(0,i.jsx)(n.li,{children:"Bette Chen (Product Manager)"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Contact Name:"})," Bette Chen"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Contact Email:"})," ",(0,i.jsx)(n.a,{href:"mailto:bette@acala.network",children:"bette@acala.network"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://acala.network/",children:"Acala Website"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Registered Address:"})," 462 Crawford Lane #02-39 Singapore 190462"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Registered Legal Entity:"})," ACALA PTE. LTD."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,i.jsx)(n.p,{children:"The team is made of experienced Substrate builders, various members are contributors to substrate, polkadot-js and other core libraries."}),"\n",(0,i.jsx)(n.p,{children:"Shaun Wang has been contributing to several Polkadot ecosystem open source libraries, including Substrate, parity-common, type-metadata, etc. He has worked extensively on launching Acala on Rococo testnet, implementing xtokens, helping various teams installing xtokens and successfully completing cross-chain transfers."}),"\n",(0,i.jsx)(n.p,{children:"Bryan Chen is one of the most active contributors to substrate codebase outside of Parity, a Polkadot community ambassador, and substrate/polkadot lecturer. He's the architect and technical brainpower behind the Laminar & Acala project."}),"\n",(0,i.jsx)(n.p,{children:"Bette Chen has more than a decade product/program/project management experience with background in Software Engineering and MBA from Otago and Duke. She's in charge of product and operation for Laminar & Acala."}),"\n",(0,i.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["xtokens: ",(0,i.jsx)(n.a,{href:"https://github.com/open-web3-stack/open-runtime-module-library/tree/master/xtokens",children:"https://github.com/open-web3-stack/open-runtime-module-library/tree/master/xtokens"})]}),"\n",(0,i.jsxs)(n.li,{children:["xcm-support: ",(0,i.jsx)(n.a,{href:"https://github.com/open-web3-stack/open-runtime-module-library/tree/master/xcm-support",children:"https://github.com/open-web3-stack/open-runtime-module-library/tree/master/xcm-support"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"team-github",children:"Team Github"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Shaun: ",(0,i.jsx)(n.a,{href:"https://github.com/orgs/laminar-protocol/people/shaopengw",children:"https://github.com/orgs/laminar-protocol/people/shaopengw"})]}),"\n",(0,i.jsxs)(n.li,{children:["Bryan: ",(0,i.jsx)(n.a,{href:"https://github.com/orgs/laminar-protocol/people/xlc",children:"https://github.com/orgs/laminar-protocol/people/xlc"})]}),"\n",(0,i.jsxs)(n.li,{children:["Bette: ",(0,i.jsx)(n.a,{href:"https://github.com/orgs/laminar-protocol/people/bette7",children:"https://github.com/orgs/laminar-protocol/people/bette7"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"team-linkedin-profiles",children:"Team LinkedIn Profiles"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.linkedin.com/in/bryan-chen-1ba8ba52/",children:"https://www.linkedin.com/in/bryan-chen-1ba8ba52/"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.linkedin.com/in/bette-chen/",children:"https://www.linkedin.com/in/bette-chen/"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.linkedin.com/in/shaopeng-wang/",children:"https://www.linkedin.com/in/shaopeng-wang/"})}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,i.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Total Estimated Duration:"})," 2 month"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Full-time equivalent (FTE):"}),"  1.5 FTE"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Total Costs:"})," USD 25k (Payable in BTC)"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"milestone--implement-xtokens-poc",children:"Milestone \u2014 Implement xtokens PoC"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Estimated Duration:"})," 1 month"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"FTE:"}),"  1.5"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Costs:"})," USD 15k"]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Number"}),(0,i.jsx)(n.th,{children:"Deliverable"}),(0,i.jsx)(n.th,{children:"Specification"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0a."}),(0,i.jsx)(n.td,{children:"License"}),(0,i.jsx)(n.td,{children:"Apache 2.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0b."}),(0,i.jsx)(n.td,{children:"Documentation"}),(0,i.jsx)(n.td,{children:"We will provide both inline documentation of the code and a basic tutorial that explains how to use xtokens"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0c."}),(0,i.jsx)(n.td,{children:"Testing Guide"}),(0,i.jsx)(n.td,{children:"The code will have proper unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1."}),(0,i.jsxs)(n.td,{children:["Substrate module: ",(0,i.jsx)(n.code,{children:"xtokens"})]}),(0,i.jsx)(n.td,{children:"We will create a Substrate module that will handle cross-chain Account and balance transfers: transfer relay chain token e.g. DOT, transfer parachain tokens to parachain etc."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2."}),(0,i.jsxs)(n.td,{children:["Substrate module: ",(0,i.jsx)(n.code,{children:"xcm-support"})]}),(0,i.jsx)(n.td,{children:"We will create a Substrate module that will provide support functionalities for XCM e.g. convert relay chain decimals to parachain decimals, supports multi-currency, and converts relay chain currencyId to parachain etc."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"3."}),(0,i.jsx)(n.td,{children:"Support parachain installing xtoken"}),(0,i.jsx)(n.td,{children:"We will support other parachains to install and test cross-chain fungible token transfer using xtoken, by providing necessary documentation, direct technical support, and trouble shooting."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"4."}),(0,i.jsx)(n.td,{children:"Article/Tutorial"}),(0,i.jsx)(n.td,{children:"We will write a tutorial that explains the work done as part of the grant."})]})]})]}),"\n",(0,i.jsxs)(n.h3,{id:"milestone--further-implement-xtokens-according-to-the-xcm-fungible-asset-implementation-guide",children:["Milestone \u2014 Further Implement ",(0,i.jsx)(n.code,{children:"xtokens"})," according to the XCM Fungible Asset Implementation Guide"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Estimated Duration:"})," 1 month"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"FTE:"}),"  1.5"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Costs:"})," USD 10k"]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Number"}),(0,i.jsx)(n.th,{children:"Deliverable"}),(0,i.jsx)(n.th,{children:"Specification"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0a."}),(0,i.jsx)(n.td,{children:"License"}),(0,i.jsx)(n.td,{children:"Apache 2.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0b."}),(0,i.jsx)(n.td,{children:"Documentation"}),(0,i.jsx)(n.td,{children:"We will provide both inline documentation of the code and a basic tutorial that explains how to use xtokens"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0c."}),(0,i.jsx)(n.td,{children:"Testing Guide"}),(0,i.jsx)(n.td,{children:"The code will have proper unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1."}),(0,i.jsxs)(n.td,{children:["Substrate module: ",(0,i.jsx)(n.code,{children:"xtokens"})]}),(0,i.jsxs)(n.td,{children:["We will extend ",(0,i.jsx)(n.code,{children:"xtokens"})," to include parachain fungible asset multi location mapping with parachainId as the namespace (in PoC it's just string identifiers), Asset Transactor to handle fungible asset balances and operations, Location Conversion to map multi-location and accountId, AssetId Conversion to map foreign multi-asset to native parachain assetId/currencyId and vice versa"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2."}),(0,i.jsxs)(n.td,{children:["Substrate module: ",(0,i.jsx)(n.code,{children:"xcm-support"})]}),(0,i.jsxs)(n.td,{children:["We will extend ",(0,i.jsx)(n.code,{children:"xcm-support"})," to support the added operations from #1"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"3."}),(0,i.jsx)(n.td,{children:"Article/Tutorial"}),(0,i.jsx)(n.td,{children:"We will write a tutorial that explains the work done as part of the grant."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,i.jsx)(n.p,{children:"This is only the beginning of shaping up specific use cases of XCM, we will continue to improve fungible asset implementations so its generic enough for most if not all parachains. This work is likely to inspire non-fungible asset implementations, and we'd also be keen to contribute further as well."}),"\n",(0,i.jsxs)(n.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,i.jsx)(n.p,{children:"Possible additional information to include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"xtokens"})," PoC has been implemented on multiple parachains on Rcococ, Plasm was the first amongst them, and ",(0,i.jsx)(n.a,{href:"https://medium.com/acalanetwork/the-first-successful-cross-chain-messaging-passing-xcmp-transaction-on-polkadot-testnet-eb36af2ad8c3?source=collection_home---4------1-----------------------",children:"here"})," is the article describing it."]}),"\n",(0,i.jsx)(n.li,{children:"Are there are any teams who have already contributed (financially) to the project? Just Acala."}),"\n",(0,i.jsx)(n.li,{children:"Have you applied for other grants so far? Yes, we have a grant for stablecoin that has been completed. We also have a grant for a Substrate composable EVM, of which the first milestone has been delivered."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);