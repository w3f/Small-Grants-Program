"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[78897],{29659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(74848),s=n(28453);const r={},l="Anti-Collusion Infrastructure",o={id:"docs/RFPs/anti-collusion_infrastructure",title:"Anti-Collusion Infrastructure",description:"This Request for Proposals is currently considered under development, meaning one or more grants have been signed to address the topic. We might be interested in additional implementations, but it\u2019s better to double check this with the grants team.",source:"@site/docs/RFPs/anti-collusion_infrastructure.md",sourceDirName:"docs/RFPs",slug:"/docs/RFPs/anti-collusion_infrastructure",permalink:"/docs/RFPs/anti-collusion_infrastructure",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/anti-collusion_infrastructure.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Analytics Website/Data Platform",permalink:"/docs/RFPs/analysis-website-and-data-platform"},next:{title:"APPI: Auto-funded public P2P infrastructure",permalink:"/docs/RFPs/appi"}},a={},c=[{value:"Project Description \ud83d\udcc4",id:"project-description-page_facing_up",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-nut_and_bolt",level:2},{value:"Milestone 1 - Anti-collusion",id:"milestone-1---anti-collusion",level:3},{value:"Previous grant applications",id:"previous-grant-applications",level:3}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"anti-collusion-infrastructure",children:"Anti-Collusion Infrastructure"}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["This Request for Proposals is currently considered ",(0,i.jsx)(t.strong,{children:"under development"}),", meaning one or more grants have been signed to address the topic. We might be interested in additional implementations, but it\u2019s better to double check this with the grants team."]})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Status:"})," ",(0,i.jsx)(t.a,{href:"https://grants.web3.foundation/applications/infimum",children:"Under Development"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Proposer:"})," ",(0,i.jsx)(t.a,{href:"https://github.com/Noc2",children:"Noc2"})]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"project-description-page_facing_up",children:["Project Description ","\ud83d\udcc4"]}),"\n",(0,i.jsxs)(t.p,{children:["A lot of blockchain applications that involve some kind of voting, like on-chain quadratic funding, can potentially be exploited via collusion and bribery (see ",(0,i.jsx)(t.a,{href:"https://vitalik.ca/general/2019/04/03/collusion.html",children:"Vitalik\u2019s post about collusion"}),"). Therefore, it\u2019s important to design mechanisms that effectively prevent any kind of on-chain collusion or at least make it more difficult. The goal of this RFP is to encourage people to try to research and come up with their own solutions or to implement existing solutions, like ",(0,i.jsx)(t.a,{href:"https://ethresear.ch/t/minimal-anti-collusion-infrastructure/5413",children:"Minimal anti-collusion infrastructure"})," as a substrate pallet or ink! smart contract."]}),"\n",(0,i.jsxs)(t.h2,{id:"deliverables-nut_and_bolt",children:["Deliverables ","\ud83d\udd29"]}),"\n",(0,i.jsx)(t.p,{children:"The milestones below are just an initial draft. The milestones can be structured completely differently and the implementation can also leverage other tools and infrastructure as long as the overall goal of the RFP is met."}),"\n",(0,i.jsx)(t.h3,{id:"milestone-1---anti-collusion",children:"Milestone 1 - Anti-collusion"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0a."}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"Apache 2.0 / MIT / Unlicense"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0b."}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsx)(t.td,{children:"Inline documentation of the code and a basic tutorial that explains how a developer can use the project"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0c."}),(0,i.jsx)(t.td,{children:"Testing Guide"}),(0,i.jsx)(t.td,{children:"The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0d."}),(0,i.jsx)(t.td,{children:"Article/Tutorial"}),(0,i.jsx)(t.td,{children:"Article or tutorial that explains the work done as part of the grant."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"1."}),(0,i.jsx)(t.td,{children:"Anti-collusion"}),(0,i.jsxs)(t.td,{children:["Implement a mechanism to prevent bribery and collusion, leveraging encrypting votes (ZKPs) potentially via ",(0,i.jsx)(t.a,{href:"https://ethresear.ch/t/minimal-anti-collusion-infrastructure/5413",children:"Minimum Anti-Collusion Infrastructure (MACI)"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2."}),(0,i.jsx)(t.td,{children:"Voting Example"}),(0,i.jsx)(t.td,{children:"Integrate a basic voting example that lets you test the mechanism"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"previous-grant-applications",children:"Previous grant applications"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/pull/1144",children:"Maki"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/pull/232",children:"pallet-maci"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/pull/1948",children:"Infimum"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var i=n(96540);const s={},r=i.createContext(s);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);