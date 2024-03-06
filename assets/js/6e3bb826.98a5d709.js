"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[8353],{19887:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=i(74848),s=i(28453);const r={},l="SARP - A Static Analysis Tool for Runtime Pallets",a={id:"applications/sarp-basic-functionality",title:"SARP - A Static Analysis Tool for Runtime Pallets",description:"- Team Name: Supercomputing Systems AG (SCS)",source:"@site/applications/sarp-basic-functionality.md",sourceDirName:"applications",slug:"/applications/sarp-basic-functionality",permalink:"/applications/sarp-basic-functionality",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/sarp-basic-functionality.md",tags:[],version:"current",frontMatter:{}},o={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Vulnerability Classes",id:"vulnerability-classes",level:4},{value:"Milestone 1 - Research",id:"milestone-1---research",level:3},{value:"Deliverables",id:"deliverables",level:4},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function h(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"sarp---a-static-analysis-tool-for-runtime-pallets",children:"SARP - A Static Analysis Tool for Runtime Pallets"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Team Name:"})," Supercomputing Systems AG (SCS)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Payment Address:"})," 0xd24622311a22470353bd21d9bcd9e02ba0cfebbe (USDC)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsxs)(t.strong,{children:[(0,n.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 1"]}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,n.jsxs)(t.p,{children:["This application is a response to the RFP ",(0,n.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Static-Analysis-for-Runtime-Pallets.md",children:"Static Analysis for Runtime Pallets"})]}),"\n",(0,n.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://docs.substrate.io/learn/runtime-development/",children:"Runtime Pallets"})," are modules for writing the business logic of blockchains in ",(0,n.jsx)(t.a,{href:"https://github.com/paritytech/substrate",children:"Substrate"})," (a Rust framework for building blockchains). These are usually concise pieces of standalone code with relatively few dependencies and clear specifications, hence tractable targets for performing static analysis and verification. The code quality of a runtime pallet is crucial, as even minor defects can result in major exploits like DoS attacks or the stealing of funds by a malicious party. A static code analysis can help to automate the auditing processes and prevent introduction of defects throughout the software life-cycle."]}),"\n",(0,n.jsxs)(t.p,{children:["Therefore we would like to develop a tool - SARP (Static Analysis tool for Runtime Pallets) to perform static analysis with reasonable soundness guarantees. In particular, we would like to target vunerability classes that are detectable using dataflow analysis techniques like ",(0,n.jsx)(t.em,{children:"tag analysis"})," and ",(0,n.jsx)(t.em,{children:"taint analysis"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Our team has no prior knowledge in static code analysis, but has a good understanding of substrate and Rust."}),"\n",(0,n.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,n.jsxs)(t.p,{children:["We will base our work on ",(0,n.jsx)(t.a,{href:"https://github.com/facebookexperimental/MIRAI/",children:"MIRAI"})," and extend it with checks on substrate pallets. For details see the ",(0,n.jsx)(t.a,{href:"#development-roadmap-nut_and_bolt",children:"Development Roadmap"})]}),"\n",(0,n.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,n.jsx)(t.p,{children:"The tool will help any team developing substrate pallets. It can further be integrated in the CI pipelines of the teams, providing a continuous quality check on the pallet code."}),"\n",(0,n.jsxs)(t.p,{children:["In the long term it could be interesting to connect the work done here with the new emerging auditing DAOs (like ",(0,n.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/applications/FuzzLand.md",children:"Fuzzland"})," or ",(0,n.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/applications/QRUCIAL_DAO.md",children:"QRUCIAL DAO"}),")."]}),"\n",(0,n.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,n.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Sabine Proll: Project Lead"}),"\n",(0,n.jsx)(t.li,{children:"Bigna H\xe4rdi: Developer"}),"\n",(0,n.jsx)(t.li,{children:"Edith Chevrier: Developer"}),"\n",(0,n.jsx)(t.li,{children:"Thomas Niederberger: Developer"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Contact Name:"})," Sabine Proll"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Contact Email:"})," ",(0,n.jsx)(t.a,{href:"mailto:Sabine.Proll@scs.ch",children:"Sabine.Proll@scs.ch"})," | ",(0,n.jsx)(t.a,{href:"mailto:info@scs.ch",children:"info@scs.ch"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Website:"})," ",(0,n.jsx)(t.a,{href:"https://www.scs.ch",children:"https://www.scs.ch"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Registered Address:"})," Technoparkstrasse 1, 8005 Z\xfcrich, Switzerland"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Registered Legal Entity:"})," Supercomputing Systems AG"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,n.jsx)(t.p,{children:"Supercomputing Systems AG is a contractor with 130 engineers, working in the fields of software, electronics and system design. Profound know-how, solid methodological competence as well as efficient project management are the foundation of our success. Within the company we have a team of 5 blockchain developers, who have experience in the Polkadot ecosystem."}),"\n",(0,n.jsxs)(t.p,{children:["Our blockchain team has been a contributor to the ecoysystem since 2019. We started with grants from the Web3 Foundation to build the basis for ",(0,n.jsx)(t.a,{href:"https://github.com/integritee-network",children:"Integritee"})," (see our grants from waves ",(0,n.jsx)(t.a,{href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/substrate_sgx_proposal.md",children:"1"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/substrate-api-client.md",children:"3"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/SubstraTEE-extension-pack1.md",children:"5"}),"). After that, our team has worked for Integritee and Encointer as a contractor. Recently the team received grants from the Kusama treasury for maintaining and improving the ",(0,n.jsx)(t.a,{href:"https://github.com/scs/substrate-api-client",children:"substrate-api-client"}),", see our proposals for ",(0,n.jsx)(t.a,{href:"https://kusama.subsquare.io/referenda/referendum/26",children:"Nov 22 - Jan 23"})," and ",(0,n.jsx)(t.a,{href:"https://kusama.subsquare.io/referenda/referendum/88",children:"Feb 23 - Apr 23"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,n.jsx)(t.p,{children:"The team has mainly worked on the following repositories"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/scs/substrate-api-client",children:"Substrate Api Client"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/integritee-network/worker",children:"Integritee Worker"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/encointer/community-sidechain",children:"Encointer Sidechain"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Github accounts of the team members"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/masapr",children:"https://github.com/masapr"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/haerdib",children:"https://github.com/haerdib"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/echevrier",children:"https://github.com/echevrier"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/Niederb",children:"https://github.com/Niederb"})}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"team-linkedin-profiles",children:"Team LinkedIn Profiles"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.linkedin.com/in/sabine-proll-5a7118153",children:"https://www.linkedin.com/in/sabine-proll-5a7118153"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.linkedin.com/in/bigna-h%C3%A4rdi-736bb21a9",children:"https://www.linkedin.com/in/bigna-h%C3%A4rdi-736bb21a9"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.linkedin.com/in/edith-chevrier-90233297",children:"https://www.linkedin.com/in/edith-chevrier-90233297"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.linkedin.com/in/thomas-niederberger-6057b71a7",children:"https://www.linkedin.com/in/thomas-niederberger-6057b71a7"})}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,n.jsxs)(t.p,{children:["We will base our work on ",(0,n.jsx)(t.a,{href:"https://github.com/facebookexperimental/MIRAI",children:"MIRAI"})," and the RFP ",(0,n.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Static-Analysis-for-Runtime-Pallets.md",children:"Static Analysis for Runtime Pallets"})]}),"\n",(0,n.jsx)(t.p,{children:"We have not started to work on this."}),"\n",(0,n.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,n.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Total Estimated Duration:"})," 0,5 months"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"})," 0,8 FTE"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Total Costs:"})," 10.000 USD"]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"vulnerability-classes",children:"Vulnerability Classes"}),"\n",(0,n.jsx)(t.p,{children:"For this project we want to address the following vulnerability classes:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/bhargavbh/MIRAI/blob/main/substrate_examples/incorrect-origin/description.md",children:"incorrect origin"})," of dispatchable functions."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/bhargavbh/MIRAI/blob/main/substrate_examples/unsigned-transaction/description.md",children:"unsigned transaction"})," validation."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"milestone-1---research",children:"Milestone 1 - Research"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Estimated duration:"})," 0,5 months"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"FTE:"})," 0,8 FTE"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Costs:"})," 10.000 USD"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["In milestone 1 we want to investigate how the above stated ",(0,n.jsx)(t.a,{href:"#vulnerability-classes",children:"vulnerability classes"}),", can be detected by extending MIRAI."]}),"\n",(0,n.jsx)(t.h4,{id:"deliverables",children:"Deliverables"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Number"}),(0,n.jsx)(t.th,{children:"Deliverable"}),(0,n.jsx)(t.th,{children:"Specification"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0a."}),(0,n.jsx)(t.td,{children:"License"}),(0,n.jsx)(t.td,{children:"MIT"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0b."}),(0,n.jsx)(t.td,{children:"User Documentation"}),(0,n.jsxs)(t.td,{children:["We will provide a basic ",(0,n.jsx)(t.strong,{children:"tutorial"})," that explains how to use the tool on a substrate pallet."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0c."}),(0,n.jsx)(t.td,{children:"Testing and Testing Guide"}),(0,n.jsx)(t.td,{children:"A first set of tests will be provided, together with a testing guide, that describes how to run them."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1."}),(0,n.jsx)(t.td,{children:"Prototype Code"}),(0,n.jsx)(t.td,{children:"Prototype code to approach the above two stated vulnerability classes."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"2."}),(0,n.jsx)(t.td,{children:"Documentation"}),(0,n.jsxs)(t.td,{children:["Technical documentation ",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"describing the approach we plan to implement in milestone 2, incl. its limitations. "}),(0,n.jsx)("li",{children:"with (interesting) examples of the vulnerability classes."})]})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"3."}),(0,n.jsx)(t.td,{children:"Engagement"}),(0,n.jsx)(t.td,{children:"Engage with teams at Web3 Foundation and Parity for prioritization."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,n.jsx)(t.p,{children:"The next steps for the tool would be to:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Implement a first simple version of the tool, together with tests and documentation."}),"\n",(0,n.jsxs)(t.li,{children:["Improve the usability, by providing","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"means to surpress warnings"}),"\n",(0,n.jsx)(t.li,{children:"a comprehensive user tutorial, incl. documentation on the risks of each vulnerability"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Add more features including checks on the following vulnerability classes:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"tracking bad randomness: ensure bad randomness does not leak into sensitive functions."}),"\n",(0,n.jsxs)(t.li,{children:["detect panics statically to avoid potential DoS attacks: these include ",(0,n.jsx)(t.a,{href:"https://github.com/bhargavbh/MIRAI/blob/main/substrate_examples/arithmetic-overflow/description.md",children:"unsafe arithmetic operations"}),", access outside bounds, assertion failures, etc."]}),"\n",(0,n.jsx)(t.li,{children:"tracking unsanitised input leakage for sensitive functions."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Once we have a tool with a good feature set and basic usability features, we want to promote it to the Polkadot developers. Once the tool is in use, we hope to receive feedback on further features and improvements by the developers."}),"\n",(0,n.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"How did you hear about the Grants Program?"}),"\r\nWe have previously received grants by the Web3 Foundation for other projects (substratee and substrate-api-client)."]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>a});var n=i(96540);const s={},r=n.createContext(s);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);