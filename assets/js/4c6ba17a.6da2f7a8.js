"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[21826],{98645:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(74848),s=t(28453);const r={},o=void 0,a={id:"applications/hybrid_node_research",title:"hybrid_node_research",description:"- Team Name: Zondax AG",source:"@site/applications/hybrid_node_research.md",sourceDirName:"applications",slug:"/applications/hybrid_node_research",permalink:"/applications/hybrid_node_research",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/hybrid_node_research.md",tags:[],version:"current",frontMatter:{}},l={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Technology and Languages",id:"technology-and-languages",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Technical Scope:",id:"technical-scope",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 - Preengineering of hybrid node and research analysis",id:"milestone-1---preengineering-of-hybrid-node-and-research-analysis",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const n={a:"a",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Team Name:"})," Zondax AG"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Payment Address:"})," (DAI ERC 20)  0xf50a09731dc32a64431920e10e1e58dce28e6b11"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[Level]"}),": 3"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,i.jsxs)(n.p,{children:["This grant application falls under this RFP ",(0,i.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/blob/master/docs/rfps/alternative_polkadot_host_implementations.md",children:"https://github.com/w3f/Grants-Program/blob/master/docs/rfps/alternative_polkadot_host_implementations.md"})," and it is meant as a previous research work analysis before the actual rework of the host implementation."]}),"\n",(0,i.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"A Polkadot host provides the environment in which the runtime executes. For this reason, hosts typically evolve slowly and are based on the Polkadot specification. This specification defines the boundaries and interactions between the host implementation and the network runtime."}),"\n",(0,i.jsx)(n.p,{children:"The polkadot network (and other related chains) have been successfully running for a few years already. There is a collective evolution and experience beyond the specifications themselves. Moreover, there are already a few other alternative implementations that have not reached production level quality yet. We consider that starting from scratch will require a significant effort and high risk objective."}),"\n",(0,i.jsx)(n.p,{children:"For this reason, we consider that building an alternative implementation based on a hybrid and progressive approach can minimize risk and ensure a successful roadmap. By hybrid and progressive, we mean that we will start by taking the existing Parity host based on Rust and progressively replacing substantial areas using a combination of new C++ or Rust implementations."}),"\n",(0,i.jsx)(n.p,{children:"Given the risk and complexity of this project, we would like to propose an initial pre-engineering phase. We will focus on analysing the current situation and preparing a clear and detailed execution plan that takes into consideration possible risks and blockers."}),"\n",(0,i.jsx)(n.h3,{id:"project-details",children:"Project Details"}),"\n",(0,i.jsxs)(n.p,{children:["This project will ",(0,i.jsx)(n.em,{children:"not"})," provide a working alternative node. Instead, it will concentrate on analysing and providing a clear work plan aligned with our proposal of a hybrid approach."]}),"\n",(0,i.jsx)(n.p,{children:"As a proof of concept, we will also select a specific component (such as Keystore) and will show how our development process and be effectively used to progressively evolve the existing Parity node."}),"\n",(0,i.jsx)(n.p,{children:"Last but not least, a member our our research team will analyse existing specifications looking for possible gaps and risky areas. The objective is to determine possible mitigations and alternative plans beforehand."}),"\n",(0,i.jsx)(n.h4,{id:"technology-and-languages",children:"Technology and Languages"}),"\n",(0,i.jsx)(n.p,{children:"To minimize extensive testing and validation, we will concentrate on Linux based systems only.  Our main technology focus will be to promote modularity and replace different parts of the reference node by rewriting them in C/C++."}),"\n",(0,i.jsx)(n.p,{children:"At the moment of this writing, we intend to concentrate on C++ 17/20, however, we don\u2019t disregard the possibility of using Rust in some cases. In particular, to facilitate adequate FFI between official Parity code and rewritten C/C++ or Rust code by Zondax."}),"\n",(0,i.jsx)(n.p,{children:"At the end of this project, we will summarize our experience and make a recommendation for future work."}),"\n",(0,i.jsx)(n.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,i.jsx)(n.p,{children:"Zondax is a growing and distributed team with experience and projects for more than 50 blockchains. Zondax has been contributing to the Substrate ecosystem since 2018-2019. The team has received and completed a large number of W3F grants and currently maintains most Ledger apps for the ecosystem."}),"\n",(0,i.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,i.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"1 x Researcher"}),"\n",(0,i.jsx)(n.li,{children:"2 x Rust / C++ Engineers"}),"\n",(0,i.jsx)(n.li,{children:"1 x Project Manager"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Contact Name:"})," Juan Leni and Ainhoa Aldave"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Contact Email:"})," ",(0,i.jsx)(n.a,{href:"mailto:juan.leni@zondax.ch",children:"juan.leni@zondax.ch"})," / ",(0,i.jsx)(n.a,{href:"mailto:ainhoa.aldave@zondax.ch",children:"ainhoa.aldave@zondax.ch"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Website:"}),"  zondax.ch"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,i.jsx)(n.p,{children:"Legal structure\nZondax AG\nDammstrasse 16\nZug 6300\nSwitzerland\nUID CHE-491.796.576"}),"\n",(0,i.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,i.jsx)(n.p,{children:"Over the last few years, Zondax has been involved in a large number of projects for most of the key players in the blockchain industry. Our team includes experts in most blockchain aspects, from cryptography to data and protocol engineering."}),"\n",(0,i.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,i.jsxs)(n.p,{children:["Most of our contributions to the blockchain ecosystem can be found in our GitHub organization: ",(0,i.jsx)(n.a,{href:"https://github.com/zondax",children:"https://github.com/zondax"})]}),"\n",(0,i.jsxs)(n.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,i.jsx)(n.p,{children:"Not initiated."}),"\n",(0,i.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,i.jsx)(n.h2,{id:"technical-scope",children:"Technical Scope:"}),"\n",(0,i.jsx)(n.p,{children:"The scope of this proposal will consist of:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Review of specifications and conformance tests\nThe Polkadot specification and the corresponding conformance tests will be used as a reference of expected valid behavior:\n",(0,i.jsx)(n.a,{href:"https://github.com/w3f/polkadot-spec",children:"https://github.com/w3f/polkadot-spec"}),"\n",(0,i.jsx)(n.a,{href:"https://github.com/w3f/polkadot-tests",children:"https://github.com/w3f/polkadot-tests"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Review of Polkadot Host (Parity)\nWe will pay particular attention to the following areas:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Code churn. Determine stable and more active areas"}),"\n",(0,i.jsx)(n.li,{children:"Traits and extensibility points"}),"\n",(0,i.jsx)(n.li,{children:"Internal and external interfaces"}),"\n",(0,i.jsx)(n.li,{children:"Quality of protocol specification and how they are tested"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Analysis, initial rework (as a proof of concept) and reimplementation of a module:\nBased on the findings from the previous stage, we will select and replace a module (such as Keystore and remote signing APIs) while keeping everything else in the node functional."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Select component to be replace"}),"\n",(0,i.jsx)(n.li,{children:"Write integration tests at the boundary level"}),"\n",(0,i.jsx)(n.li,{children:"Replace the module with an external implementation"}),"\n",(0,i.jsx)(n.li,{children:"Define how to integrate and follow upstream changes"}),"\n",(0,i.jsx)(n.li,{children:"Define and inform future practices based on this proof of concept."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Total estimated workload:"})," 4 weeks"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Delivery time:"}),": 6 to 8 weeks"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Full-Time Equivalent (FTE):"}),"  2.5 FTE"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Total Costs:"})," 58'800 DAI"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"milestone-1---preengineering-of-hybrid-node-and-research-analysis",children:"Milestone 1 - Preengineering of hybrid node and research analysis"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Estimated workload:"})," 4 working weeks"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Delivery time:"}),": 6 to 8 weeks"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"FTE:"}),"  2,5"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Costs:"})," 58'800 DAI"]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(n.th,{children:"Deliverable"}),(0,i.jsx)(n.th,{children:"Specification"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:(0,i.jsx)(n.strong,{children:"0a."})}),(0,i.jsx)(n.td,{children:"License"}),(0,i.jsx)(n.td,{children:"Apache 2.0 / GPLv3 / MIT"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:(0,i.jsx)(n.strong,{children:"0b."})}),(0,i.jsx)(n.td,{children:"Documentation"}),(0,i.jsx)(n.td,{children:"We will provide a inline documentation of the code and   inline documentation of the code and a basic tutorial"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:(0,i.jsx)(n.strong,{children:"0c."})}),(0,i.jsx)(n.td,{children:"Testing and Testing Guide"}),(0,i.jsx)(n.td,{children:"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. We plan to write integration tests at the boundary level"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:(0,i.jsx)(n.strong,{children:"0d."})}),(0,i.jsx)(n.td,{children:"Docker"}),(0,i.jsx)(n.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"0e."}),(0,i.jsx)(n.td,{children:"Article"}),(0,i.jsx)(n.td,{children:"We will publish an article explaining the research analysis done"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(n.td,{children:"Research Report"}),(0,i.jsx)(n.td,{children:"We will provide a detailed report covering the review of specifications and conformance tests, the review of Polkadot Host (Parity)and the findings from the re-work of the module and primitives including recommendation practices based on this proof of concept."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(n.td,{children:"PoC code"}),(0,i.jsxs)(n.td,{children:["We will provide the code from the re-worked primitives.We plan to promote modularity and replace parts of the reference node by rewriting them in C/C++.  ",(0,i.jsx)("br",{})," Note: This will not be production-ready code. It is just meant to be used as a proof of concept and to inform future development plans."]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,i.jsx)(n.p,{children:"After this first research analysis we plan to apply for additional grant to cover a long-term commitment and full rework implementation of this alternative hybrid Polakdot host."}),"\n",(0,i.jsxs)(n.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,i.jsx)(n.p,{children:"Zondax has been contributing to the Polkadot ecosystem for several years, and has succesfully completed several grants."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);