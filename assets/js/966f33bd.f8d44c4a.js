"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[26162],{6746:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=s(74848),n=s(28453);const i={},o="Decentralized Security Marketplace",a={id:"docs/RFPs/decentralized-security-marketplace",title:"Decentralized Security Marketplace",description:"This Request for Proposals is currently considered under development, meaning one or more grants have been signed to address the topic. We might be interested in additional implementations, but it\u2019s better to double check this with the grants team.",source:"@site/docs/RFPs/decentralized-security-marketplace.md",sourceDirName:"docs/RFPs",slug:"/docs/RFPs/decentralized-security-marketplace",permalink:"/docs/RFPs/decentralized-security-marketplace",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/decentralized-security-marketplace.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Data Analysis Tools for Substrate-based Blockchains",permalink:"/docs/RFPs/data_analysis_tools"},next:{title:"e-Passport ZK Validation  [ON HOLD PENDING REVISIONS]",permalink:"/docs/RFPs/epassport-zk-validation"}},l={},c=[{value:"Project Description \ud83d\udcc4",id:"project-description-page_facing_up",level:2},{value:"Actors \ud83d\udc65",id:"actors-busts_in_silhouette",level:3},{value:"Deliverables \ud83d\udd29",id:"deliverables-nut_and_bolt",level:2}];function d(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"decentralized-security-marketplace",children:"Decentralized Security Marketplace"})}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["This Request for Proposals is currently considered ",(0,r.jsx)(t.strong,{children:"under development"}),", meaning one or more grants have been signed to address the topic. We might be interested in additional implementations, but it\u2019s better to double check this with the grants team."]})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Status:"})," ",(0,r.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/pull/1726",children:"Under Development"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Proposer:"})," ",(0,r.jsx)(t.a,{href:"https://github.com/0xCaso",children:"Matteo Casonato"}),", ",(0,r.jsx)(t.a,{href:"https://github.com/bhargavbh",children:"Bhargav Batt"})]}),"\n"]}),"\n",(0,r.jsxs)(t.h2,{id:"project-description-page_facing_up",children:["Project Description ","\ud83d\udcc4"]}),"\n",(0,r.jsxs)(t.p,{children:["According to the ",(0,r.jsx)(t.a,{href:"https://assets.ctfassets.net/t3wqy70tc3bv/1ObYJk9jzWS4ExHICslYep/e2b5cee51268e47ee164c4dffbd78ad4/Immunefi_Crypto_Losses_2022_Report.pdf",children:(0,r.jsx)(t.em,{children:"Immunefi's 2022 annual report"})}),", there has been a total loss of ~$3.77B because of hacks in the web3 space. To increase a protocol's security, audits and bug bounties can be a useful tool."]}),"\n",(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.strong,{children:"decentralized security marketplace"})," would allow projects to find reviewers/testers/auditors/whitehats and vice versa to pursue structured tests and audits. This would benefit everyone:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Projects"})," would increase their security;"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Developers"})," would have the possibility to earn while using their skills, improving them;"]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.strong,{children:"ecosystem"})," would be more secure, with more projects being audited and more developers learning about security."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Ideally, this marketplace would be built as a smart contract platform deployable on any existing parachain (that supports WASM smart contracts, such as ",(0,r.jsx)(t.a,{href:"https://docs.astar.network/docs/getting-started",children:"Astar"})," or ",(0,r.jsx)(t.a,{href:"https://docs.watr.org/builders/substrate-contracts",children:"Watr"}),") using ",(0,r.jsx)(t.a,{href:"https://paritytech.github.io/ink/",children:"ink!"})," (",(0,r.jsx)(t.a,{href:"https://github.com/paritytech/awesome-ink",children:"here"})," you can see some examples)."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note"}),": This use case can be extended/applied to other areas. The main problem to solve here is to find a way to manage the ",(0,r.jsx)(t.em,{children:"delayed"})," transaction between two parties (i.e., ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Escrow",children:"escrow"}),"), and to ensure fairness and transparency (e.g., a reviewer is not able to deliver all the reports in time, and the project's team would like to decide whether to extend the escrow duration or just to pay a lower percentage of the established bounty)."]}),"\n",(0,r.jsxs)(t.h3,{id:"actors-busts_in_silhouette",children:["Actors ","\ud83d\udc65"]}),"\n",(0,r.jsx)(t.p,{children:"To ensure fairness and transparency, the marketplace could have the following actors:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Projects"})," - The projects that want to be reviewed / tested;"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Auditors"})," - The developers that want to perform audits / hunt bugs;"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Arbiters"})," - The developers that will arbitrate the disputes between projects and auditors (they will be useful if a project opens a dispute for any reason). They could get a small percentage of the bounty."]}),"\n"]}),"\n",(0,r.jsxs)(t.h2,{id:"deliverables-nut_and_bolt",children:["Deliverables ","\ud83d\udd29"]}),"\n",(0,r.jsx)(t.p,{children:"The followings could be the initial deliverables of the project. Of course, improvements and additions are more than welcome."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Initial ",(0,r.jsx)(t.strong,{children:"research and design"})," of the protocol:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["You can refer to what ",(0,r.jsx)(t.a,{href:"https://immunefi.com/explore/",children:"Immunefi"})," and ",(0,r.jsx)(t.a,{href:"https://code4rena.com/",children:"Code4rena"})," are doing (but bring that on-chain);"]}),"\n",(0,r.jsx)(t.li,{children:"How to ensure the trustless interaction (e.g., projects could lock a percentage of the bounty to open the request);"}),"\n",(0,r.jsx)(t.li,{children:"What types of disputes could be risen and how to solve them;"}),"\n",(0,r.jsx)(t.li,{children:"How to manage time delays;"}),"\n",(0,r.jsx)(t.li,{children:"Look for other use cases (in or outside the security field);"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Development of the ",(0,r.jsx)(t.strong,{children:"protocol"}),":","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Development of the governance smart contract (e.g. to add/remove projects, auditors, arbiters, etc.);"}),"\n",(0,r.jsx)(t.li,{children:"Development of the auditing smart contract (e.g. to create audits);"}),"\n",(0,r.jsx)(t.li,{children:"Development of the arbitration smart contract (e.g. to create/solve disputes);"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Development of the ",(0,r.jsx)(t.strong,{children:"frontend"}),", that enables the actors to interact with the protocol."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var r=s(96540);const n={},i=r.createContext(n);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);