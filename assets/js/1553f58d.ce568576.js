"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[52254],{29562:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=i(74848),s=i(28453);const r={},a="CoinFabrik On Ink Integration Tests",o={id:"applications/CoinFabrik_On_Ink_Integration_Tests",title:"CoinFabrik On Ink Integration Tests",description:"- Team Name: CoinFabrik (Nektra S.A)",source:"@site/applications/CoinFabrik_On_Ink_Integration_Tests.md",sourceDirName:"applications",slug:"/applications/CoinFabrik_On_Ink_Integration_Tests",permalink:"/applications/CoinFabrik_On_Ink_Integration_Tests",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/CoinFabrik_On_Ink_Integration_Tests.md",tags:[],version:"current",frontMatter:{}},l={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1: Analysis",id:"milestone-1-analysis",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Referral Program (optional) \ud83d\udcb0",id:"referral-program-optional-moneybag",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"coinfabrik-on-ink-integration-tests",children:"CoinFabrik On Ink Integration Tests"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Team Name:"})," CoinFabrik (Nektra S.A)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Payment Address:"})," 0xf488039EDe6B38D7689fDCC6A9FC2dd0EF39D54e (USDC)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsxs)(t.strong,{children:[(0,n.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,n.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["CoinFabrik has successfully accomplished two previous grant milestones for the development of ",(0,n.jsx)(t.a,{href:"https://coinfabrik.github.io/scout/",children:"Scout"}),", an open source bug-detection tool for ink! targetted to developers and smart contract auditors."]}),"\n",(0,n.jsxs)(t.p,{children:["We have completed a ",(0,n.jsx)(t.a,{href:"https://github.com/CoinFabrik/web3-grant",children:"Proof of Concept"})," and a ",(0,n.jsx)(t.a,{href:"https://github.com/CoinFabrik/scout",children:"Prototype"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"During these iterations, we encountered certain challenges, especially while developing fuzzing detectors. These challenges included limitations in integration tests and differences with the ink! E2E testing environment. Specifically, we faced difficulties when working with functions in integration testing related to cross contract calls, storage, gas usage, and delegatecall."}),"\n",(0,n.jsx)(t.p,{children:"With this grant, our objective is to conduct a comprehensive analysis to identify any other missing functionalities in integration tests, and to propose and develop new testing features based on our findings."}),"\n",(0,n.jsxs)(t.p,{children:["Our intention is to ",(0,n.jsx)(t.code,{children:"flatten the anvil"})," of ink! integration testing. With a properly flattened anvil, quality tools can be built."]}),"\n",(0,n.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,n.jsx)(t.p,{children:"As mentioned before, we have already identified a number of E2E functionalities that are not present in integration tests."}),"\n",(0,n.jsx)(t.p,{children:"For example:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"A different implementation of storage in integration testing vs E2E testing. The same storage limitations present in E2E should also be present in integration testing."}),"\n",(0,n.jsx)(t.li,{children:"Inability to perform delegatecall in integration tests."}),"\n",(0,n.jsx)(t.li,{children:"Inability to perform cross contract calls in integration tests."}),"\n",(0,n.jsx)(t.li,{children:"Gas consumption is not integrated."}),"\n",(0,n.jsx)(t.li,{children:"Address inconsistencies. Alice and Bob addresses differ between integration and E2E tests environments."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["This list is not exhaustive, as it simply highlights some difficulties we encountered while conducting integration tests for vulnerability examples during the development of detectors for our static analyzer, ",(0,n.jsx)(t.a,{href:"https://github.com/CoinFabrik/scout",children:"Scout"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The overall advantage of integration tests is that, since they are performed off-chain, they are significantly faster than E2E tests, which imply compiling and deploying the smart contract to a Substrate node. We believe that having a complete set of functionalities for integration tests will allow developers to thoroughly test their code more quickly. Particularly, we believe the impossibility to perform cross contract calls in integration tests is a limitation for developers trying to quickly assess interactions across different contracts. This can be done through E2E tests, but it takes more time."}),"\n",(0,n.jsx)(t.p,{children:"Our proposal is to begin our work by making a full review of the current functionalities of integration tests and E2E tests. From this revision, we will assemble a comparative table, identifying differences and proposing improvements and missing developments to be made for integration tests. For specific cases where the enhancement or missing functionality is clear, and the implementation of the enhancement is deemed feasible, code examples could be provided to show the current limitations of integration tests."}),"\n",(0,n.jsx)(t.p,{children:"Furthermore, we need to thoroughly analyze the complexity and feasibility of generating the necessary tests. The analysis we just mentioned will allow us to better understand which improvements will truly be possible to develop. This includes listing the missing functionalities in integration tests that are available for E2E testing, analyzing the feasibility of their implementation, and prioritizing their development order."}),"\n",(0,n.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,n.jsx)(t.p,{children:"Having a comprehensive set of functionalities available for integration tests would bring numerous benefits to the entire community, including improved reliability, code quality and maturity, and faster feedback loops."}),"\n",(0,n.jsxs)(t.p,{children:["In the context of fuzzing detectors, integration tests are useful during their development in order to identify fuzzing parameters, and they are quicker than E2E tests. We learned this while working on fuzzing detection techniques during the ",(0,n.jsx)(t.a,{href:"https://github.com/CoinFabrik/web3-grant",children:"Proof of Concept of Scout"}),", which we performed in collaboration with ",(0,n.jsx)(t.a,{href:"https://lafhis.dc.uba.ar/home",children:"researchers from the University of Buenos Aires"}),". We believe that, having a complete set of functionalities for integration tests would be useful for other teams working in the development of fuzzing detectors for ink! smart contracts (e.g: ",(0,n.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/applications/FuzzLand.md",children:"Fuzzland"})," team developing ",(0,n.jsx)(t.a,{href:"https://github.com/fuzzland/ityfuzz",children:"Ityfuzz"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/applications/klevoya_fuzzer.md",children:"Klevoya"})," team)."]}),"\n",(0,n.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,n.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Ariel Wassbein, Head of Research."}),"\n",(0,n.jsx)(t.li,{children:"Diego Kelyacoubian, Head of Program Management."}),"\n",(0,n.jsx)(t.li,{children:"Valeria Caracciolo, Business Development."}),"\n",(0,n.jsx)(t.li,{children:"CoinFabrik's development and auditing team."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Contact Name:"})," Valeria Caracciolo"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Contact Email:"})," ",(0,n.jsx)(t.a,{href:"mailto:valeria.caracciolo@coinfabrik.com",children:"valeria.caracciolo@coinfabrik.com"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Website:"})," ",(0,n.jsx)(t.a,{href:"https://www.coinfabrik.com/",children:"https://www.coinfabrik.com/"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Registered Address:"})," Dr. Emilio Ravignani 2394, C1425 CABA, Argentina."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Registered Legal Entity:"})," Nektra S.A."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,n.jsx)(t.p,{children:"We are a research and development company specialized in Web3, with a strong background in cybersecurity. Founded in 2014, we have worked on over 200 blockchain-related projects, EVM based and also for Solana, Algorand, and Polkadot. Beyond development, we offer security audits through a dedicated in-house team of senior cybersecurity professionals, currently working on code in Substrate, Solidity, Clarity, Rust, and TEAL."}),"\n",(0,n.jsx)(t.p,{children:"Our team has an academic background in computer science and mathematics, with work experience focused on cybersecurity and software development, including academic publications, patents turned into products, and conference presentations. Furthermore, we have an ongoing collaboration on knowledge transfer and open-source projects with the University of Buenos Aires."}),"\n",(0,n.jsx)(t.p,{children:"As well, CoinFabrik has been providing Quality Assurance as a service to development teams, accumulating valuable expertise in the field for a considerable period of time. Our clients highly appreciate this service, and as a result, we are eager to expand our capabilities to the ink! ecosystem."}),"\n",(0,n.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/CoinFabrik",children:"https://github.com/CoinFabrik"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/CoinFabrik/scout",children:"https://github.com/CoinFabrik/scout"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/CoinFabrik/web3-grant",children:"https://github.com/CoinFabrik/web3-grant"})}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"team-linkedin-profiles-if-available",children:"Team LinkedIn Profiles (if available)"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.linkedin.com/in/arielwaissbein/",children:"https://www.linkedin.com/in/arielwaissbein/"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.linkedin.com/in/diego-kelyacoubian-5417613/",children:"https://www.linkedin.com/in/diego-kelyacoubian-5417613/"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.linkedin.com/in/valeriacaracciolo/",children:"https://www.linkedin.com/in/valeriacaracciolo/"})}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,n.jsx)(t.p,{children:"We have already identified some improvements to be made in integration tests. We also identified how they are implemented in E2E tests and provide an initial level of complexity / feasibility associated to their development:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Issue Number"}),(0,n.jsx)(t.th,{children:"Issue Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Feasibility"}),(0,n.jsx)(t.th,{children:"References"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"Alice and Bob's addresses"}),(0,n.jsx)(t.td,{children:"Alice and Bob's addresses should match across integration and E2E tests."}),(0,n.jsx)(t.td,{children:"Feasible"}),(0,n.jsxs)(t.td,{children:["Accounts on Integration Tests: ",(0,n.jsx)(t.a,{href:"https://github.com/paritytech/ink/blob/c2af39883aab48c71dc09dac5d06583f2e84dc54/crates/env/src/engine/off_chain/test_api.rs#L333",children:"Link"})," ",(0,n.jsx)("br",{})," Accounts on E2E tests: Addresses are used from this library ",(0,n.jsx)(t.a,{href:"https://github.com/paritytech/substrate/blob/28e906dffcaa91e85f59aff628d953ebeb036ae2/primitives/keyring/src/sr25519.rs#L108C38-L108C38",children:"Link"})," ",(0,n.jsx)("br",{})," Account addresses are different for both Alice and Bob."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"2"}),(0,n.jsx)(t.td,{children:"Storage Limitations"}),(0,n.jsx)(t.td,{children:"The storage in the integration environment should have the same limitations as in the blockchain environment (end-to-end)."}),(0,n.jsx)(t.td,{children:"Feasible"}),(0,n.jsxs)(t.td,{children:["Set_contract_storage is implemented differently in integration tests vs E2E tests. ",(0,n.jsx)("br",{})," In integration tests, set_contract_storage is implemented this way: ",(0,n.jsx)(t.a,{href:"https://github.com/paritytech/ink/blob/c2af39883aab48c71dc09dac5d06583f2e84dc54/crates/env/src/engine/off_chain/impls.rs#L185",children:"Link"})," ",(0,n.jsx)("br",{})," In E2E tests, the implementation calls the ext::set_storage function, this function is implemented in a way that checks maximum value lengths: ",(0,n.jsx)(t.a,{href:"https://github.com/paritytech/ink/blob/c2af39883aab48c71dc09dac5d06583f2e84dc54/crates/env/src/engine/on_chain/impls.rs#L215",children:"Link1"})," ",(0,n.jsx)(t.a,{href:"https://github.com/paritytech/substrate/blob/28e906dffcaa91e85f59aff628d953ebeb036ae2/frame/contracts/src/wasm/runtime.rs#L790",children:"Link2"})," ",(0,n.jsx)("br",{})," The checking of maximum value lengths through the ext::set_storage function is not implemented in integration tests."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"3"}),(0,n.jsx)(t.td,{children:"Delegate call"}),(0,n.jsx)(t.td,{children:"Ability to use delegate calls in integration tests."}),(0,n.jsx)(t.td,{children:"Complex, yet feasible."}),(0,n.jsxs)(t.td,{children:["Not implemented in integration tests: ",(0,n.jsx)(t.a,{href:"https://github.com/paritytech/ink/blob/c2af39883aab48c71dc09dac5d06583f2e84dc54/crates/env/src/engine/off_chain/impls.rs#L449",children:"Link"})," ",(0,n.jsx)("br",{}),' Notice in line 460: \u201coff-chain environment does not support delegated contract invocation" ',(0,n.jsx)("br",{})," In E2E tests, it is implemented here: ",(0,n.jsx)(t.a,{href:"https://github.com/paritytech/substrate/blob/28e906dffcaa91e85f59aff628d953ebeb036ae2/frame/contracts/src/wasm/runtime.rs#L1467",children:"Link"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"4"}),(0,n.jsx)(t.td,{children:"Cross contract calls"}),(0,n.jsx)(t.td,{children:"Ability to perform contract-to-contract calls during integration tests."}),(0,n.jsx)(t.td,{children:"To be evaluated."}),(0,n.jsxs)(t.td,{children:["Not implemented in integration tests: ",(0,n.jsx)(t.a,{href:"https://github.com/paritytech/ink/blob/c2af39883aab48c71dc09dac5d06583f2e84dc54/crates/env/src/engine/off_chain/impls.rs#L432",children:"Link"})," ",(0,n.jsx)("br",{}),' Notice in line 446: \u201coff-chain environment does not support contract invocation" ',(0,n.jsx)("br",{})," In E2E tests, it is implemented here: ",(0,n.jsx)(t.a,{href:"https://github.com/paritytech/substrate/blob/28e906dffcaa91e85f59aff628d953ebeb036ae2/frame/contracts/src/wasm/runtime.rs#L1412",children:"Link"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"5"}),(0,n.jsx)(t.td,{children:"Gas usage"}),(0,n.jsx)(t.td,{children:"Gas usage in the integration environment should have the same limitations as in the blockchain environment (end-to-end)."}),(0,n.jsx)(t.td,{children:"To be evaluated."}),(0,n.jsxs)(t.td,{children:["Not implemented in integration tests: ",(0,n.jsx)(t.a,{href:"https://github.com/paritytech/ink/blob/c2af39883aab48c71dc09dac5d06583f2e84dc54/crates/engine/src/ext.rs#L404",children:"Link"})," ",(0,n.jsx)("br",{}),' Notice in line 405: \u201coff-chain environment does not yet support gas_left" ',(0,n.jsx)("br",{})," In E2E tests, it is implemented here: ",(0,n.jsx)(t.a,{href:"https://github.com/paritytech/substrate/blob/28e906dffcaa91e85f59aff628d953ebeb036ae2/frame/contracts/src/wasm/runtime.rs#L1974",children:"Link"})]})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"We validated the idea of the analysis and development described in this application with Sam Ruberti from the ink! Ecosystem and David Hawig from Web3 Foundation, who encouraged us to apply for this grant."}),"\n",(0,n.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,n.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Total Estimated Duration:"})," 2 weeks"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  2.5 FTE\n(0.25 Project Manager,\n0.25 Tech Lead,\n1 Full time Sr. Rust Developer,\n1 Full Time SemiSr. Rust Developer)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Total Costs:"}),"  13,500 USD"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"milestone-1-analysis",children:"Milestone 1: Analysis"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Estimated duration:"})," 2 weeks"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"FTE:"}),"  2.5"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Costs:"})," 13,500 USD"]}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Number"}),(0,n.jsx)(t.th,{children:"Deliverable"}),(0,n.jsx)(t.th,{children:"Specification"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0a."}),(0,n.jsx)(t.td,{children:"License"}),(0,n.jsx)(t.td,{children:"MIT"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0b."}),(0,n.jsx)(t.td,{children:"Documentation"}),(0,n.jsx)(t.td,{children:"Create a comprehensive report that compares the functionalities of integration tests and E2E (End-to-End) tests. The report's focus is to identify what can be accomplished in E2E tests but not currently in integration tests, as well as any inconsistencies. If applicable, we will provide suggestions that are not covered by either test type."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0c."}),(0,n.jsx)(t.td,{children:"Testing and Testing Guide"}),(0,n.jsx)(t.td,{children:"No tests will be produced at this stage."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0d."}),(0,n.jsx)(t.td,{children:"Docker"}),(0,n.jsx)(t.td,{children:"Does not apply at this stage."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0e."}),(0,n.jsx)(t.td,{children:"Article"}),(0,n.jsxs)(t.td,{children:["We will prepare a summary report and publish it on our blog ",(0,n.jsx)(t.a,{href:"https://blog.coinfabrik.com/",children:"https://blog.coinfabrik.com/"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"1"})}),(0,n.jsx)(t.td,{children:"Analyze"}),(0,n.jsx)(t.td,{children:"Study and compare Integration and E2E (End-to-End) tests in ink!."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"2"})}),(0,n.jsx)(t.td,{children:"Evaluate"}),(0,n.jsx)(t.td,{children:"Assign a complexity level to each finding based on the difficulty of implementing the missing or enhanced functionality."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"3"})}),(0,n.jsx)(t.td,{children:"Estimate"}),(0,n.jsx)(t.td,{children:"Indicate an order of priority under which the missing functionalities shall be developed during the next milestone, where the functionalities are effectively implemented for integration tests."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,n.jsx)(t.p,{children:"After finishing Milestone 1: Analysis, and having a good understanding of which missing functionalities in the integration testing environment can be developed, as well as an estimation of the effort required to develop them, we will submit a new grant proposal for a second milestone. The intention of this second milestone is to effectively implement these missing features. We detail in the table bellow its deliverables; its estimated duration is to be defined upon the delivery of the initial Analysis milestone."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Number"}),(0,n.jsx)(t.th,{children:"Deliverable"}),(0,n.jsx)(t.th,{children:"Specification"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0a."}),(0,n.jsx)(t.td,{children:"License"}),(0,n.jsx)(t.td,{children:"MIT"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0b."}),(0,n.jsx)(t.td,{children:"Documentation"}),(0,n.jsx)(t.td,{children:"We will update our previous report. This includes the current status of identified use cases."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0c."}),(0,n.jsx)(t.td,{children:"Testing and Testing Guide"}),(0,n.jsx)(t.td,{children:"We will develop the missing functionalities identified, and submit a pull request to the corresponding repository. The newly developed functionalities will be documented and a testing guide will be included."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0d."}),(0,n.jsx)(t.td,{children:"Docker"}),(0,n.jsx)(t.td,{children:"Does not apply at this stage."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0e."}),(0,n.jsx)(t.td,{children:"Article"}),(0,n.jsxs)(t.td,{children:["We will publish an updated report in our blog at ",(0,n.jsx)(t.a,{href:"https://blog.coinfabrik.com/",children:"https://blog.coinfabrik.com/"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"1"})}),(0,n.jsx)(t.td,{children:"Develop"}),(0,n.jsx)(t.td,{children:"Build the necessary improvements and missing tests for the identified use cases outlined in the first milestone."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"2"})}),(0,n.jsx)(t.td,{children:"Analyze and Estimate"}),(0,n.jsx)(t.td,{children:"If applicable, suggest additional tests for this or next milestones."})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Moving forward, we have two projects in mind:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Research and develop an advanced testing automation solution for ink! smart contracts."}),"\n",(0,n.jsxs)(t.li,{children:["Improve our open source bug-detection tool ",(0,n.jsx)(t.a,{href:"https://coinfabrik.github.io/scout/",children:"Scout"})]}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"referral-program-optional-moneybag",children:["Referral Program (optional) ","\ud83d\udcb0"]}),"\n",(0,n.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"How did you hear about the Grants Program?"})," Richard Casey from Parity brought this program to our attention, and we have already successfully delivered two applications as a result."]}),"\n",(0,n.jsx)(t.p,{children:"During our inquiries for this application, we briefly consulted Sam Ruberti from the ink! Team and David Hawig from the Web3 Foundation. Their encouragement motivated us to proceed with this presentation."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var n=i(96540);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);