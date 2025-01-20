"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[62033],{6475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"applications/Substrate_Move_System_Pallet_1","title":"Substrate Move System Pallet (part 1)","description":"- Team Name: Eiger","source":"@site/applications/Substrate_Move_System_Pallet_1.md","sourceDirName":"applications","slug":"/applications/Substrate_Move_System_Pallet_1","permalink":"/applications/Substrate_Move_System_Pallet_1","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/Substrate_Move_System_Pallet_1.md","tags":[],"version":"current","frontMatter":{}}');var i=n(74848),r=n(28453);const o={},a="Substrate Move System Pallet (part 1)",l={},h=[{value:"Project Overview <strong><strong>\ud83d\udcc4</strong></strong>",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team <strong>\ud83d\udc65</strong>",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status <strong>\ud83d\udcd6</strong>",id:"development-status-",level:2},{value:"Development Roadmap <strong>\ud83d\udd29</strong>",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"<strong>In-Depth Exploration and Assessment of MoveVM and Substrate Integration</strong>",id:"in-depth-exploration-and-assessment-of-movevm-and-substrate-integration",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information <strong>\u2795</strong>",id:"additional-information-",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"substrate-move-system-pallet-part-1",children:"Substrate Move System Pallet (part 1)"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Team Name:"})," Eiger"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Payment Address:"})," Fiat 14.04.2023, 16:50 UTC+3"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Level:"})," 3"]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"project-overview-",children:["Project Overview ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.strong,{children:"\ud83d\udcc4"})})]}),"\n",(0,i.jsxs)(t.p,{children:["This application is a response to the ",(0,i.jsxs)(t.strong,{children:[(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/move_smart_contract_pallet.md",children:"Move Smart Contract Pallet RFP"}),"."]})]}),"\n",(0,i.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"Some terminology first:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Substrate Move System Pallet"})," - A Substrate system pallet that can be used as a building block for substrate-based chains, it exposes interfaces to interact with the Move virtual machine."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Substrate Move"})," - A Move language fork that is Substrate compatible."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Objectives:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The goal is to provide a Substrate system pallet that allows to deploy and interact with Smart Contracts written in the Move language, by providing a Move Virtual Machine (MoveVM) as a pallet."}),"\n",(0,i.jsx)(t.li,{children:"We plan on exploring a fork of the Move language, so it\u2019s adjusted to work with the Substrate ecosystem, as well as developing a Substrate system pallet that allows the execution of Move smart contracts."}),"\n",(0,i.jsx)(t.li,{children:"The project directly improves the growth potential of the Substrate based ecosystem by providing support for one of the most modern smart contract programming languages and VM types out there - Move."}),"\n",(0,i.jsx)(t.li,{children:"We are interested in creating this project because we are firm believers in the modular vision of web3, and only by collaborative efforts on improving and unifying the technology between different chains and the languages, will we get better products as an outcome."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Goal"})," - Level up the growth possibilities of the Substrate ecosystem by providing a way to develop and execute Move smart contracts on Substrate."]}),"\n",(0,i.jsx)(t.p,{children:"This is the first phase of a 3-phase development program:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"In-Depth Exploration and Assessment of MoveVM and Substrate Integration"})}),"\n",(0,i.jsx)(t.li,{children:"MoveVM compatibility work and Subtrate Pallet development"}),"\n",(0,i.jsx)(t.li,{children:"Finalising the Substrate-Compatible MoveVM"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Prior work"})}),"\n",(0,i.jsxs)(t.p,{children:["We are basing the core architecture and many of the design decisions on the ",(0,i.jsx)(t.a,{href:"https://github.com/pontem-network/pontem/tree/master/pallets/sp-mvm",children:"Pontem networks developed system pallet for Move VM"}),". They had maintained ",(0,i.jsx)(t.a,{href:"https://github.com/pontem-network/sp-move-vm",children:"their own fork of the Diems Move language"}),", which was used as the base execution layer for their version. Both of these repositories have not been maintained for a very long time already."]}),"\n",(0,i.jsx)(t.p,{children:"\u267b\ufe0f We aren't seeking to maintain any of the existing codebase; rather, we aim for a full revival through a new greenfield project. Our rationale for this stems from the substantial advancements made in the Rust, Substrate, and Move ecosystems since Pontem\u2019s latest commits from over a year ago. We believe that handling potential code rot due to the passage of time might be more labor-intensive than starting afresh and drawing upon existing projects for more current guidelines."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Documentation of core components, architecture"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Substrate Move:"})}),"\n",(0,i.jsx)(t.p,{children:"The first part of the project will be a MoveVM fork, as some major changes will need to be made to the codebase for it to be substrate compatible. For example:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"no_std"})," compatibility: Making it lightweight and suitable for use in Substrate runtimes."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"wasm32"}),"\xa0target compatibility: Adapting all the VM\u2019s different components to work efficiently and securely on the wasm32 target architecture."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"We plan on creating and maintaining the fork in a manner that would allow us and the community to easily follow and track changes from the upstream, thus making the maintenance and change tracking to be much simpler."}),"\n",(0,i.jsx)(t.p,{children:"At the time of writing this application, we suspect that this will be needed because this is what also Pontem had to do to support it in their version. This will be further researched and assessed during the first milestone."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Move VM system pallet:"})}),"\n",(0,i.jsx)(t.p,{children:"The second part of the project will be a Substrate virtual machine pallet in Substrate. This is a modular component that is needed to integrate a specific new VM into a Substrate runtime. It will serve as a bridge between the runtime and the Move VM, managing resources and translating data or actions between the two environments."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"API specifications"})}),"\n",(0,i.jsx)(t.p,{children:"As a minimum, we plan on providing all of the RPC calls that the Pontem crate did. As the team progresses with the implementation, we might add or remove RPC calls as we best see fit."}),"\n",(0,i.jsx)(t.p,{children:"Move language has a concept of \u201cgas\u201d for executing contracts, whereas Polkadot uses \u201cWeights\u201d. Each Move transaction invocation requires providing a gas limit for execution, and it\u2019s necessary to be able to transform the values between weight and gas:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"mvm_gasToWeight"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"mvm_weightToGas"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Estimating gas for different operations:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"mvm_estimateGasPublish"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"mvm_estimateGasExecute"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Working with the primitives of the Move language:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"mvm_getResource"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"mvm_getModuleABI"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"mvm_getModule"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Tech stack"})}),"\n",(0,i.jsx)(t.p,{children:"We plan on using Rust for developing the system pallets and using existing Move language smart contracts for end-to-end testing of the whole workflow."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Notes"})}),"\n",(0,i.jsx)(t.p,{children:"Because the Move language requires a fork to work with Substrate chains, and modifications to the address size, there might be incompatibilities with deploying existing Move Smart Contracts from other chains that make use of the address properties size, as well as the compiled ABI and bytecode for those contracts might be invalid. To deploy on our MoveVM system pallet, the forked toolchain must be used to re-compile all smart contracts. The address size of Move language is configurable via a feature switch with 32-bits being one of the options."}),"\n",(0,i.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,i.jsx)(t.p,{children:"Move is a smart contract programming language that emphasizes access control and scarcity, offering some unique advantages over other popular VMs in blockchain ecosystems."}),"\n",(0,i.jsxs)(t.p,{children:["The importance of bringing the MoveVM to Polkadot was recognized over two years ago when ",(0,i.jsx)(t.a,{href:"https://pontem.network/",children:"Pontem Network"}),"\xa0started working on a\xa0",(0,i.jsx)(t.a,{href:"https://github.com/pontem-network/pontem/tree/master/pallets/sp-mvm",children:"Move virtual machine pallet"}),"\xa0to execute Move smart contracts on Substrate-based chains. Although they discontinued the project and haven't updated the codebase for over a year, the W3F still keeps this RFP, which serves as evidence that porting the MoveVM is crucial for the future of the Polkadot network."]}),"\n",(0,i.jsx)(t.p,{children:"We concur with this perspective and have actually been actively researching the MoveVM - exactly with a similar idea of helping port it over to other chains."}),"\n",(0,i.jsxs)(t.h2,{id:"team-",children:["Team ",(0,i.jsx)(t.strong,{children:"\ud83d\udc65"})]}),"\n",(0,i.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Roberts Ivanovs"})," (",(0,i.jsx)(t.a,{href:"https://github.com/roberts-ivanovs",children:"Github"}),",\xa0",(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/roberts-ivanovs-3b24b6159/",children:"Linkedin"}),") is a Rust Software Engineer at Eiger. He has extensive experience using Rust for performance-sensitive backend work, the IoT industry, web development, and Solidity/dApp development."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Tomek Piotrowski"})," (",(0,i.jsx)(t.a,{href:"https://github.com/tomekpiotrowski",children:"Github"}),", ",(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/tomasz-piotrowski-17466b4/",children:"Linkedin"}),") Software Engineer at Eiger, specializing in Rust-based applications. With a strong background in software development, he has spent recent years focusing on the Rust programming language. At Eiger, Tomasz actively contributes to the advancement of Rust-based blockchains and their ecosystems."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Name:"})," Daren Tuzi"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Email:"})," ",(0,i.jsx)(t.a,{href:"mailto:daren@eiger.co",children:"daren@eiger.co"}),"\xa0(Founder & CEO of Eiger)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Website:"})," ",(0,i.jsx)(t.a,{href:"https://www.eiger.co/",children:"Eiger.co"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Registered Address:"})," Linnankatu 3 A 24, 20100 Turku, Finland"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Registered Legal Entity:"})," Eiger Oy****"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,i.jsx)(t.p,{children:"Web3 promises to upgrade the very foundations of our society \u2013 from money, finance, and governance to media, gaming, and science. To deliver on that promise, decentralised technologies are to be integrated into the everyday experiences of billions of people. For engineering, this is a mountain of a challenge."}),"\n",(0,i.jsx)(t.p,{children:"Eiger was founded to develop infrastructure for web3 mass adoption. We help technology companies improve and integrate the core technologies of web3 to meet the climbing demands for scaling and performance."}),"\n",(0,i.jsx)(t.p,{children:"We currently employ 25+ senior web3 engineers across the globe and work with some of the most ambitious organisations in the industry, including Forte, Aleo, and XRP Labs, to name a few."}),"\n",(0,i.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,i.jsx)(t.p,{children:"As mentioned in the Teams section, Eiger already has extensive experience developing large infrastructural projects. Some chosen examples:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The SnarkOS for Aleo, the privacy-focused smart contract L1 platform going into production this summer.\xa0",(0,i.jsx)(t.a,{href:"https://github.com/AleoHQ/snarkOS",children:"https://github.com/AleoHQ/snarkOS"})]}),"\n",(0,i.jsxs)(t.li,{children:["OrbitDB is a distributed, p2p, serverless database.\xa0",(0,i.jsx)(t.a,{href:"https://github.com/orbitdb/orbit-db",children:"https://github.com/orbitdb/orbit-db"})]}),"\n",(0,i.jsxs)(t.li,{children:["The rust implementation of IPFS, now archived.\xa0",(0,i.jsx)(t.a,{href:"https://github.com/rs-ipfs/rust-ipfs",children:"https://github.com/rs-ipfs/rust-ipfs"})]}),"\n",(0,i.jsxs)(t.li,{children:["The main implementation of Interledger in Rust, which we developed and maintained.\xa0",(0,i.jsx)(t.a,{href:"https://github.com/interledger/interledger-rs",children:"https://github.com/interledger/interledger-rs"})]}),"\n",(0,i.jsxs)(t.li,{children:["Ziggurat - A Network protocol testing framework for ZCash, XRP, and Algorand. Notably, critical network vulnerabilities were found and reported to the core teams.\xa0",(0,i.jsx)(t.a,{href:"https://github.com/runziggurat",children:"https://github.com/runziggurat"})]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"development-status-",children:["Development Status ",(0,i.jsx)(t.strong,{children:"\ud83d\udcd6"})]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["This application is a direct response to ",(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/move_smart_contract_pallet.md",children:"this RFP"})]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/move-language/move/tree/main/language",children:"Move language Github"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/pontem-network/sp-move-vm",children:"Pontem MoveVM fork"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/pontem-network/pontem/tree/master/pallets/sp-mvm",children:"Pontem MoveVM system pallet"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"We have not yet started our own development, we are still in the research phase."}),"\n",(0,i.jsxs)(t.h2,{id:"development-roadmap-",children:["Development Roadmap ",(0,i.jsx)(t.strong,{children:"\ud83d\udd29"})]}),"\n",(0,i.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Estimated Duration:"})," 1 month"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"})," 2 FTE"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Costs:"})," 48 000 USD"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Starting Date:"})," 10/07/23"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"in-depth-exploration-and-assessment-of-movevm-and-substrate-integration",children:(0,i.jsx)(t.strong,{children:"In-Depth Exploration and Assessment of MoveVM and Substrate Integration"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Goal"}),": Research Pontem Move VM solution, Move language and its ecosystem, and document all findings. Prepare a repository for developing the Substrate Move system pallet."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0a."}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"Apache 2.0 and MIT"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0b."}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsx)(t.td,{children:"We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0c."}),(0,i.jsx)(t.td,{children:"Testing and Testing Guide"}),(0,i.jsx)(t.td,{children:"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0d."}),(0,i.jsx)(t.td,{children:"Docker"}),(0,i.jsx)(t.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0e."}),(0,i.jsx)(t.td,{children:"Article"}),(0,i.jsxs)(t.td,{children:["Content: article that explains all of the research and findings done in the research phase, and how it shapes the project in the future. The research would include: ",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"analysis of the Pontem Move fork,"}),(0,i.jsx)("li",{children:"analysis of the Pontem MoveVM system pallet, evaluating its architecture and design decisions,"}),(0,i.jsx)("li",{children:"analysis of the current Move language restrictions, ABI and understanding if forking the language is still necessary,"}),(0,i.jsx)("li",{children:"analysis of the potential effects of forking the language and the toolchain if it is deemed necessary."})]}),"Medium: A markdown design decision document in the repository."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"1."}),(0,i.jsx)(t.td,{children:"System Pallet: Substrate Move"}),(0,i.jsxs)(t.td,{children:["We will create a Substrate system pallet that will provide the RPC calls as the initial interfaces for interacting with the Move VM. The Move VM port itself will not be implemented, all of the methods will be empty stubs.",(0,i.jsx)("br",{})," Solid code practices will be in place: CI/CD, tests, documentation, linting, and publication of the library to ",(0,i.jsx)(t.a,{href:"http://crates.io",children:"http://crates.io"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2."}),(0,i.jsx)(t.td,{children:"Rust crate: Substrate Move"}),(0,i.jsx)(t.td,{children:"Forking the Move VM if deemed necessary. The alterations would include everything to create the virtual machine Substrate-compatible."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3."}),(0,i.jsx)(t.td,{children:"Rust crate: Substrate Move documentation"}),(0,i.jsx)(t.td,{children:"Documentation of the alteration made for the MoveVM to be Substrate-compatible. Also, the whole process of how it was ported will be described, either in form of markdown documentation or detailed commenting on GitHub issues and PRs."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,i.jsx)(t.p,{children:"This is the first phase of a 3 steps development plan:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"In-Depth Exploration and Assessment of MoveVM and Substrate Integration"})}),"\n",(0,i.jsx)(t.li,{children:"MoveVM compatibility work and Subtrate Pallet development"}),"\n",(0,i.jsx)(t.li,{children:"Finalising the Substrate-Compatible MoveVM"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"next"})," step will be to submit a grant proposal to continue this work - creating the first iteration of a pallet capable of receiving, storing and executing Move smart contracts."]}),"\n",(0,i.jsx)(t.p,{children:"We hope that upon the completion of all phases of creating the Substrate Move System Pallet , it will open doors for further collaboration and community input on the project. We strive to have the codebase well documented so that others might join in and contribute."}),"\n",(0,i.jsxs)(t.p,{children:["While there are no long-term plans set in stone for the usage of this pallet, we have had incredibly exciting discussions about creating a parachain, possibly a ",(0,i.jsx)(t.a,{href:"https://polkadot.network/blog/common-good-parachains-an-introduction-to-governance-allocated-parachain-slots/",children:"common good parachain"})," (system parachain), that utilizes this MoveVM implementation and would run MoveVM contracts. As we near the completion of this initial development, we will be discussing these future plans more in-depth."]}),"\n",(0,i.jsxs)(t.h2,{id:"additional-information-",children:["Additional Information ",(0,i.jsx)(t.strong,{children:"\u2795"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"How did you hear about the Grants Program?"})}),"\n",(0,i.jsx)(t.p,{children:"We learned about it when looking at open RFPs by the web3 foundation on their website."}),"\n",(0,i.jsx)(t.p,{children:"We wanted to get back up to date on what is happening in the Polkadot ecosystem, and working on grants, specifically RFPs, has been a great way to do so."}),"\n",(0,i.jsx)(t.p,{children:"Looking to apply to other RFPs currently open as well. Stay tuned!"})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);