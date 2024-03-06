"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[24651],{75001:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(74848),s=t(28453);const r={},l="Ink Playground IDE Improvements Grant",o={id:"applications/ink-playground-ide-improvements",title:"Ink Playground IDE Improvements Grant",description:"- Team Name: Zeeve",source:"@site/applications/ink-playground-ide-improvements.md",sourceDirName:"applications",slug:"/applications/ink-playground-ide-improvements",permalink:"/applications/ink-playground-ide-improvements",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/ink-playground-ide-improvements.md",tags:[],version:"current",frontMatter:{}},a={},d=[{value:"Overview",id:"overview",level:2},{value:"Project Details",id:"project-details",level:2},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Road-map \ud83d\udd29",id:"development-road-map-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement Ink&#39;s Dependency versioning",id:"milestone-1--implement-inks-dependency-versioning",level:3},{value:"Milestone 2 - Ink! crate docs code execution",id:"milestone-2---ink-crate-docs-code-execution",level:3},{value:"Technology Stack",id:"technology-stack",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2},{value:"References:",id:"references",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"ink-playground-ide-improvements-grant",children:"Ink Playground IDE Improvements Grant"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Team Name:"})," ",(0,i.jsx)(n.a,{href:"https://www.zeeve.io",children:"Zeeve"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Payment Address:"})," Ethereum (USDT/USDC) 0x5E1257E928aa42E3D0cd9E2A7537E37D108D811B"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"The adoption of any technology depends on the accessibility and ease of use to both the maintainer and user, blockchain\nor distributed ledger technologies are inherently a lot difficult to understand and maintain, so we have to build tools\nto make the process much easier and painless. In the case of Polkadot's substrate based smart contract development we have\nInk! playground which helps smart contract developers to prototype and test it before deploying on the parachain in a\nSandboxed environment with having to do time-consuming setup of dependencies and also with ability to set up a local\nenvironment to do development."}),"\n",(0,i.jsx)(n.h2,{id:"project-details",children:"Project Details"}),"\n",(0,i.jsx)(n.p,{children:"The community posed few challenges and issues to improve the Ink! Playground to keep up with the Ink's advancements and\nhave Ink's own docs with ability to execute the examples with multi version support, the following issues were proposed\nby the Grant team to resolve:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/paritytech/ink-playground/issues/427",children:"Support supplying ink! version in URL \xb7 Issue #427 \xb7 paritytech/ink-playground"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/paritytech/ink-playground/issues/197",children:"Update playground automatically upon new ink! release \xb7 Issue #197 \xb7 paritytech/ink-playground \xb7 GitHub"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/paritytech/ink-playground/issues/460",children:"Implement versioning for ink! playground \xb7 Issue #460 \xb7 paritytech/ink-playground \xb7 GitHub"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/paritytech/ink-playground/issues/428",children:"Support running code from crate docs \xb7 Issue #428 \xb7 paritytech/ink-playground \xb7 GitHub"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The brief overview of the issue resolution:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Dependency Versioning"}),": Provide an API and UI components to set dependency versions for the contract, which will\nhelp developers to build for targeted systems and environments."]}),"\n",(0,i.jsxs)(n.li,{children:["Automated ",(0,i.jsx)(n.strong,{children:"Ink! Version upgrade"})," in Ink! Playground system when new Ink! Version releases."]}),"\n",(0,i.jsxs)(n.li,{children:["Ability to select ",(0,i.jsx)(n.strong,{children:"Ink! version"})," to compile the code in the IDE."]}),"\n",(0,i.jsxs)(n.li,{children:["In Ink! ",(0,i.jsx)(n.strong,{children:"Crate docs"})," code examples can be executed using the Ink! Playground backend with Ink! version support."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Additionally, we would like to propose further enhancements to the Ink! Playground which will benefit the Polkadot community\nby easing the development process with better Developer Experience. We are excited to work on the following enhancements\nonce we complete the aforementioned improvements and build upon to provide maintenance of the Ink! Playground."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Local file system storage:"})," Use the local file system for contract storage which will help developers\nto open and save the file without leaving the IDE."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Template contracts:"})," Provide contract templates similar to the Ethereum contract standards based on\nthe popular use cases."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Ability to run contract functions"})," based on the metadata generated for a contract, this\nwill help developers to prototype, test and debug  the contracts faster."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Deploy contracts from the IDE:"})," Deploy the contracts to the remote contract execution environment by\nproviding the remote endpoint."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Recent contracts:"})," List all the recent contracts that were saved for faster access to previously edited\ncontracts."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,i.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ghan Vashishtha"}),"\n",(0,i.jsx)(n.li,{children:"Sankalp Sharma"}),"\n",(0,i.jsx)(n.li,{children:"Jasti Sri Radhe Shyam"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Contact Name:"})," Ghan Vashishtha"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Contact Email:"})," ",(0,i.jsx)(n.a,{href:"mailto:ghan@zeeve.io",children:"ghan@zeeve.io"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Website:"})," ",(0,i.jsx)(n.a,{href:"http://www.zeeve.io",children:"www.zeeve.io"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Registered Address:"})," 300 Spect\xedum Cente\xed D\xed. Suite 400 I\xedvine, CA 92618 United States"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Registered Legal Entity:"})," Zeeve Inc."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,i.jsxs)(n.p,{children:["Founded by a team of experienced professionals and entrepreneurs from industry, Zeeve's co-founders\ncollectively have over 45+ years of experience in technology, product development, and various\nbusiness verticals. Zeeve has built an enterprise-grade no-code Blockchain Infrastructure Automation\nplatform that enables Enterprises, Blockchain Startups, Blockchain Consulting Companies and Web3\nDevelopers to deploy Blockchain nodes and Decentralized Apps within minutes, and manage them with\nadvanced analytics and real-time alerts. In June 2022, the Startup raised $2.65 Million in a Seed\nRound from Leo Capital and Blu Ventures. It plans to deploy the funds towards product development,\naugmenting the technology team and enhancing its reach among DApp developers and global corporations,\nplease consider visiting our prior ",(0,i.jsx)(n.a,{href:"https://www.zeeve.io/platform",children:"work"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/Zeeve-App",children:"https://github.com/Zeeve-App"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/Zeeve-App/sawtooth-artifacts",children:"https://github.com/Zeeve-App/sawtooth-artifacts"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/Zeeve-App/Zeeve-read-the-docs",children:"https://github.com/Zeeve-App/Zeeve-read-the-docs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/Zeeve-App/larch",children:"https://github.com/Zeeve-App/larch"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"team-linkedin-profiles-if-available",children:"Team LinkedIn Profiles (if available)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.linkedin.com/in/ghan-vashishtha/",children:"https://www.linkedin.com/in/ghan-vashishtha/"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.linkedin.com/in/sankalp-sharma-502008139/",children:"https://www.linkedin.com/in/sankalp-sharma-502008139/"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.linkedin.com/in/jastisriradheshyam/",children:"https://www.linkedin.com/in/jastisriradheshyam/"})}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,i.jsx)(n.p,{children:"Before applying for the Web3 Foundation Grant, the Zeeve team has built a DevOps automation for Polkadot and other substrate chains, also created substrates based relay chains:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Automated Polkadot deployments including validator nodes, archive nodes ",(0,i.jsx)(n.a,{href:"https://www.zeeve.io/blockchain-protocols/deploy-polkadot-node/",children:"here"})]}),"\n",(0,i.jsxs)(n.li,{children:["Automated Kusama deployments including validator nodes, archive nodes ",(0,i.jsx)(n.a,{href:"https://www.zeeve.io/blockchain-protocols/deploy-kusama-node/",children:"here"})]}),"\n",(0,i.jsxs)(n.li,{children:["Created a relay chain on substrate with some customizations done at the core to accommodate the tokenomics and custom reward mechanism ",(0,i.jsx)(n.a,{href:"https://axscan.axiacoin.network/#/explorer",children:"here"})]}),"\n",(0,i.jsxs)(n.li,{children:["Published a ",(0,i.jsx)(n.a,{href:"https://www.zeeve.io/blog/how-to-use-substrate-to-create-parachains-in-polkadot/",children:"blog post"})," about the usage and implementation of parachain's"]}),"\n",(0,i.jsx)(n.li,{children:"The focus for Zeeve will be automating the parachain deployments, dedicated node setups and help with faster testing with zombie-net."}),"\n",(0,i.jsx)(n.li,{children:"Spoke with David Hawig, Richard Casey and Gautam Dhameja from the Parity team regarding the development of Zeeve and the Web3 Grant application"}),"\n",(0,i.jsxs)(n.li,{children:["Developed Larch, a UI for the Parity's Zombienet - ",(0,i.jsx)(n.a,{href:"https://github.com/Zeeve-App/larch",children:"GitHub - Zeeve-App/larch"})]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"development-road-map-nut_and_bolt",children:["Development Road-map ","\ud83d\udd29"]}),"\n",(0,i.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Total Estimated Duration:"})," 100 working days"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Full-Time Equivalent (FTE):"})," 3 FTE"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Total Costs:"})," 24,000 USD."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"milestone-1--implement-inks-dependency-versioning",children:"Milestone 1 \u2014 Implement Ink's Dependency versioning"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Estimated duration:"})," 90 working days"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"FTE:"})," 3"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Costs:"})," 21,000 USD"]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(n.th,{children:"Deliverable"}),(0,i.jsx)(n.th,{children:"Specification"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"0.a."}),(0,i.jsx)(n.td,{children:"License"}),(0,i.jsx)(n.td,{children:"Apache-2.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"0.b."}),(0,i.jsx)(n.td,{children:"Documentation"}),(0,i.jsxs)(n.td,{children:["We will provide both ",(0,i.jsx)(n.strong,{children:"inline documentation"})," of the code and a basic ",(0,i.jsx)(n.strong,{children:"tutorial"})," that explains how a user can open and save a file"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(n.td,{children:"On demand version specific compilation"}),(0,i.jsx)(n.td,{children:"We will add the ability to build the compiler environment if a compiler environment is not present with a specific version of Ink!"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(n.td,{children:"Dependency Version support"}),(0,i.jsxs)(n.td,{children:["We will upgrade and maintain Ink! and ",(0,i.jsx)(n.code,{children:"cargo-contract"})," dependencies versions up to date and have provision to have older version support"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"3."}),(0,i.jsx)(n.td,{children:"Ink! Upgrades"}),(0,i.jsx)(n.td,{children:"We will add the ability to add Playground's Ink! version support to latest version as soon as new version of Ink! is released without manual intervention"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"4."}),(0,i.jsx)(n.td,{children:"Select Ink! version from UI"}),(0,i.jsx)(n.td,{children:"We will add ability to select Ink!'s version from the IDE to compile"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"milestone-2---ink-crate-docs-code-execution",children:"Milestone 2 - Ink! crate docs code execution"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Estimated duration:"})," 10 working days"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"FTE:"})," 3"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Costs:"})," 3000 USD"]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(n.th,{children:"Deliverable"}),(0,i.jsx)(n.th,{children:"Specification"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"0.a."}),(0,i.jsx)(n.td,{children:"License"}),(0,i.jsx)(n.td,{children:"Apache-2.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"0.b."}),(0,i.jsx)(n.td,{children:"Documentation"}),(0,i.jsxs)(n.td,{children:["We will provide both ",(0,i.jsx)(n.strong,{children:"inline documentation"})," of the code and a basic ",(0,i.jsx)(n.strong,{children:"tutorial"})," that explains how a user can open and save a file"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(n.td,{children:"Ink! Create docs"}),(0,i.jsx)(n.td,{children:"We will provide the API and update create docs to run the code examples"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"technology-stack",children:"Technology Stack"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Javascript"}),"\n",(0,i.jsx)(n.li,{children:"CSS"}),"\n",(0,i.jsx)(n.li,{children:"HTML"}),"\n",(0,i.jsx)(n.li,{children:"Typescript"}),"\n",(0,i.jsx)(n.li,{children:"Rust"}),"\n",(0,i.jsx)(n.li,{children:"Docker"}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"How did you hear about the Grants Program?"})," Web3 Foundation Website / Parity team / a conversation with Richard Casey."]}),"\n",(0,i.jsx)(n.h3,{id:"references",children:"References:"}),"\n",(0,i.jsxs)(n.p,{children:["[1]: ",(0,i.jsx)(n.a,{href:"https://www.parity.io/blog/what-is-paritys-ink",children:"What is Parity's ink!? | Parity Technologies"})]}),"\n",(0,i.jsxs)(n.p,{children:["[2]: ",(0,i.jsx)(n.a,{href:"https://github.com/paritytech/ink/blob/master/ARCHITECTURE.md",children:"ink/ARCHITECTURE.md at master \xb7 paritytech/ink \xb7 GitHub"})]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);