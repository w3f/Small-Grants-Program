"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[84741],{53463:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=s(74848),n=s(28453);const i={},l="Sirato (Epirus) Substrate Explorer - Phase III",o={id:"applications/sirato_substrate_phase3",title:"Sirato (Epirus) Substrate Explorer - Phase III",description:"-   Project Name: Sirato (Epirus) Substrate Explorer - Phase III",source:"@site/applications/sirato_substrate_phase3.md",sourceDirName:"applications",slug:"/applications/sirato_substrate_phase3",permalink:"/applications/sirato_substrate_phase3",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/sirato_substrate_phase3.md",tags:[],version:"current",frontMatter:{}},a={},c=[{value:"Project Overview",id:"project-overview",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"<strong>Network Data Support</strong>",id:"network-data-support",level:4},{value:"Mock-ups",id:"mock-ups",level:4},{value:"Technology Stack",id:"technology-stack",level:3},{value:"Out of Scope",id:"out-of-scope",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1",id:"milestone-1",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Future Plans",id:"future-plans",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"sirato-epirus-substrate-explorer---phase-iii",children:"Sirato (Epirus) Substrate Explorer - Phase III"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Project Name:"})," Sirato (Epirus) Substrate Explorer - Phase III"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Team Name:"})," Web3 Labs Ltd"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Payment Address:"})," Fiat payment address provided on invoice dated 23/06/2023."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsxs)(t.strong,{children:[(0,r.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"project-overview",children:"Project Overview"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"We recently rebranded from Epirus to Sirato"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"This is an application for a follow-up grant for the Epirus Substrate Explorer that has completed two grants previously:"}),"\n",(0,r.jsx)(t.p,{children:"Phase I:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/applications/epirus_substrate_explorer.md",children:"Application"})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/w3f/Grant-Milestone-Delivery/pull/527",children:"Delivery"})}),"\n",(0,r.jsx)(t.p,{children:"Phase II:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/applications/epirus_substrate_phase_2.md",children:"Application"})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/w3f/Grant-Milestone-Delivery/pull/652",children:"Milestone 1 Delivery"})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/w3f/Grant-Milestone-Delivery/pull/742",children:"Milestone 2 Delivery"})}),"\n",(0,r.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(t.p,{children:"From our previous grants we have built:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["A ",(0,r.jsx)(t.a,{href:"https://substrate.sirato.xyz/",children:"Wasm contracts explorer"})," that supports smart contracts deployed on ",(0,r.jsx)(t.code,{children:"pallet-contracts"})]}),"\n",(0,r.jsxs)(t.li,{children:["A ",(0,r.jsx)(t.a,{href:"https://github.com/web3labs/ink-verifier-server",children:"verifier service"})," that verifies, through reproducible builds, the source code files for a specific on-chain code hash."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"In this grant, we intend to expand Sirato to support essential base data such as blocks, extrinsics and system events."}),"\n",(0,r.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,r.jsx)(t.p,{children:"In our current architecture, there are several components:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Squid Archive (built on the Subsquid framework): the squid archive connects to the Substrate network node and indexes base data such as blocks and extrinsics, exposing a GraphQL API"}),"\n",(0,r.jsxs)(t.li,{children:["Squid Processor (built on Subsquid framework): the squid processor ingests data from the squid archive, filtering and transforming the relevant data to the data models for the Explorer. Currently, our squid processor is focused on Wasm contract data from ",(0,r.jsx)(t.code,{children:"pallet-contracts"}),". The squid processor exposes a GraphQL API."]}),"\n",(0,r.jsx)(t.li,{children:"Explorer UI: The explorer UI is made up of a set of composable components that consumes the API of the Squid processor and renders the web application."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"The below diagram illustrates the high-level architecture and how the components interact with each other:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://drive.google.com/uc?id=1BVgvcQPCwGa3BJyD__z-wXKgzyt9mBbG",alt:"Current Architecture"})}),"\n",(0,r.jsx)(t.p,{children:"In this grant, we will add data handlers and data models for the base data. Since the Squid Archive directly exposes the network base data of blocks and extrinsics, we will use the GraphQL API of the squid archive in the UI to retrieve this data."}),"\n",(0,r.jsx)(t.h4,{id:"network-data-support",children:(0,r.jsx)(t.strong,{children:"Network Data Support"})}),"\n",(0,r.jsx)(t.p,{children:"The Squid Archive already exposes blocks, extrinsics and events data through its GraphQL API. We will consume this API from the explorer UI and build the components to show:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Blocks list"}),"\n",(0,r.jsx)(t.li,{children:"Extrinsics list"}),"\n",(0,r.jsx)(t.li,{children:"Block page: contains block details and all extrinsics and events included in this block"}),"\n",(0,r.jsx)(t.li,{children:"Extrinsics page: contains extrinsic details and all events emitted from the extrinsic"}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"mock-ups",children:"Mock-ups"}),"\n",(0,r.jsx)(t.p,{children:"Mock up of how an extrinsic page will look:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://drive.google.com/uc?id=112GANJWuaxcFJBbhS6-I9ubGMfi9pV-N",alt:"Extrinsic Page"})}),"\n",(0,r.jsx)(t.h3,{id:"technology-stack",children:"Technology Stack"}),"\n",(0,r.jsx)(t.p,{children:"We plan to build on top of our current explorer, so we will continue using the same technology stack:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://www.subsquid.io/",children:"Subsquid Framework"}),", with Typescript, for data processing."]}),"\n",(0,r.jsx)(t.li,{children:"React.js and Tailwindcss for the UI"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"out-of-scope",children:"Out of Scope"}),"\n",(0,r.jsx)(t.p,{children:"Due to time and resource constraints, we will leave the following items for future development:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Additional query endpoints for interrogating the contract registry"}),"\n",(0,r.jsx)(t.li,{children:"The ability to interact directly with verified smart contracts"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,r.jsx)(t.p,{children:"There is currently a lack of high-quality open-source explorers for smart contract networks in the Substrate ecosystem. Polkadot.js is the de facto explorer and it is very modular and flexible. However, it was designed more for development and lacks the ability to filter, sort and search through data on the network. In the space of user-facing explorers, Subscan is currently the most popular solution and has the most comprehensive support for Substrate pallets. On the other hand, Subscan is mostly close-sourced and introduces an economic entry barrier for new networks."}),"\n",(0,r.jsxs)(t.p,{children:["This dominance by Subscan is something that has been highlighted recently during an in-depth ",(0,r.jsx)(t.a,{href:"https://forum.polkadot.network/t/subscan-ought-to-change-its-business-model-or-be-replaced/2357",children:"discussion on the Polkadot Forum"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"While a number of open-source alternatives have emerged, none of them have support for smart contracts. In our previous grants, we have expanded the open-source explorer offerings to include WASM contracts on Substrate. At the same time, we also want to provide the essential base data like blocks and extrinsics so that smart contract networks can have a feature-complete explorer at their fingertips."}),"\n",(0,r.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,r.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Total Estimated Duration:"})," 1 month"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"})," 2 FTE"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Total Costs:"})," 25,000 EUR"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"milestone-1",children:"Milestone 1"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"N\xba"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Deliverable"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Specification"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"0a."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"License"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Apache 2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"0b."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Documentation"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"We will provide inline documentation of the code and documentation on how to set up an explorer instance."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"0c."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Testing Guide"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. We will describe how to run these tests in the guide."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"0d."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Docker"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"We will provide a Dockerfile and Docker Compose file(s) to ease the deployment and execution of the system."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"1."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Updated Explorer UI - Base data support"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"The Explorer UI will connect to the Squid archive GraphQL endpoint and display block, extrinsic and system event data."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"2."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Public explorer instance"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"A publicly accessible instance of the Explorer connected to a development network with WASM smart contracts support, with additional display of blocks, extrinsics and events."})]})]})]}),"\n",(0,r.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,r.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Contact Name:"})," Conor Svensson"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Contact Email:"})," ",(0,r.jsx)(t.a,{href:"mailto:conor@web3labs.com",children:"conor@web3labs.com"})]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Registered Address:"})," 7 Bell Yard, London, England, WC2A 2JR"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Registered Legal Entity:"})," Web3 Labs Ltd, CRN 10783824"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/web3labs",children:"https://github.com/web3labs"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,r.jsx)(t.p,{children:"We plan to add open-source support to other popular Substrate pallets in the future. Some interesting pallets we are considering are assets and XCM related pallets, to be able to track asset movements across the DotSama networks."}),"\n",(0,r.jsx)(t.p,{children:"The Frontier EVM and EVM+ pallet by Acala are also valuable addition to the ecosystem that we wish to support at some point. On top of that, we also plan to add some proprietary modules for the explorer to be able to sustain our growth long-term. Our goal is to provide a full-fledged open-core explorer with comprehensive data and intuitive UI that networks can customise to their needs."}),"\n",(0,r.jsx)(t.p,{children:"Besides the core explorer, we also want to expand the functionality of our ink! verifier service. Right now, it only supports the verification and metadata hosting of ink! smart contracts."}),"\n",(0,r.jsx)(t.p,{children:"Our goal is to support any WASM smart contracts and evolve the service to a multi-VM metadata registry that can scale up to cater for the entire Substrate and DotSama ecosystems."})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>o});var r=s(96540);const n={},i=r.createContext(n);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);