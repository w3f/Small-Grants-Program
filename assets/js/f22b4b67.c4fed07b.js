"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[46804],{60753:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"applications/quadratic-funding","title":"Quadratic Funding Module","description":"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don\'t remove any of the mandatory parts presented in bold letters or as headlines! See the Open Grants Program Process on how to submit a proposal.","source":"@site/applications/quadratic-funding.md","sourceDirName":"applications","slug":"/applications/quadratic-funding","permalink":"/applications/quadratic-funding","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/quadratic-funding.md","tags":[],"version":"current","frontMatter":{}}');var o=t(74848),s=t(28453);const r={},a="Quadratic Funding Module",l={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team name",id:"team-name",level:3},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Update 2: UI Examples",id:"update-2-ui-examples",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement Substrate Modules",id:"milestone-1--implement-substrate-modules",level:3},{value:"Milestone 2 \u2014 Web Application (Dapp)",id:"milestone-2--web-application-dapp",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"quadratic-funding-module",children:"Quadratic Funding Module"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the ",(0,o.jsx)(n.a,{href:"https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md",children:"Open Grants Program Process"})," on how to submit a proposal."]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["This page is also available in ",(0,o.jsx)(n.a,{href:"./application-template-cn.md",children:"Chinese (\u4e2d\u6587)"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Payment Address:"})," DAI, 0x69ecE265815B1F0357cc08c6b1C47F3785c3CB46"]}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"If this application in response to an RFP then please indicate this on the first line of this section."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["This application is to solve the problem proposed in ",(0,o.jsx)(n.a,{href:"https://github.com/w3f/General-Grants-Program/blob/master/rfp-proposal/on-chain-quadratic-funding.md",children:"On-chain Quadratic Funding (General-Grants-Program/rfp-proposal/on-chain-quadratic-funding.md)"})]}),"\n",(0,o.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Please provide the following:"}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"A brief description of the project."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Quadratic Funding is a common short name for ",(0,o.jsx)(n.a,{href:"https://blogchains.org/wp-content/uploads/sites/4/2019/04/SSRN-id3243656.pdf",children:"Constrained Liberal Radicalism algorithm (referred to as CLR in this proposal)"})," proposed by Vitalik Buterin 2018, and is a crowdfund matching mechanism for public goods, like open source. The authors of the paper summaries the mathematical idea as below."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:'"Individuals make public goods contributions to projects of value to them. The amount received by the project is (proportional to) the square of the sum of the square roots of contributions received."'})}),"\n",(0,o.jsx)(n.p,{children:"The mechanism is a concrete proposal for making grassroots donations something much larger by proportionately matching more towards small donations compared to large ones. It has been efficiently funding projects in the Web3 ecosystem."}),"\n",(0,o.jsxs)(n.p,{children:["According to @Noc2 and @Swader in ",(0,o.jsx)(n.a,{href:"https://github.com/gitcoinco/quadratic-funding",children:"the RFP"}),",\n",(0,o.jsxs)(n.em,{children:[(0,o.jsx)(n.a,{href:"https://gitcoin.co/",children:"Gitcoin"})," is currently using this mechanism to successfully fund and support public goods. However, Gitcoin's solution is centralized. The goal of the RFP is to develop a decentralized solution on top of ",(0,o.jsx)(n.a,{href:"https://github.com/paritytech/substrate",children:"Substrate"}),", which can potentially be integrated into Kusama, Polkadot or any other Substrate-based chain as a pallet. The on-chain treasury could potentially sustainably fund the matching pool in the long-run. However, the Web3 Foundation would also be committed to fund a matching pool of the solution for initial test rounds."]})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"An indication of how you will integrate this project into Substrate / Polkadot / Kusama."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"We will build a Substrate pallet in Rust."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"An indication of why your team is interested in creating this project."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"I have friends working at Gitcoin since 2018 and I'm a big fan of their work. I am already a Gitcoin user familiar of the CLR mechanism used in their grants, and think it's a great experiment trying to solve many real-world problems. Transparency has always been one of the highlights of blockchain, and by bringing a innovative and sophisticated funding mechanism on-chain will provide great utility to Polkadot ecosystem. The problem is challenging and fun to solve, and related to the DAO concept of my focus, therefore I decide to gear up and tackle the RFP."}),"\n",(0,o.jsx)(n.h3,{id:"project-details",children:"Project Details"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"We expect the teams to already have a solid idea about the project's expected final state.\nTherefore, we ask the teams to submit (where relevant):"}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Mockups/designs of any UI components"}),"\n",(0,o.jsx)(n.li,{children:"API specifications of the core functionality"}),"\n",(0,o.jsx)(n.li,{children:"An overview of the technology stack to be used"}),"\n",(0,o.jsx)(n.li,{children:"Documentation of core components, protocols, architecture etc. to be deployed"}),"\n",(0,o.jsx)(n.li,{children:"PoC/MVP or other relevant prior work or research on the topic"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The project is divided into two milestones, substrate module and web application."}),"\n",(0,o.jsx)(n.p,{children:"In the first milestone we will create a substrate module for the core CLR mechanism implementation, which will include struct, event, error code, and API function definitions. Then, we will build a substrate chain to host and demonstrate the module."}),"\n",(0,o.jsx)(n.p,{children:"In the second milestone, we will create a web application interacting with Polkadot.js browser extension to demonstrate the use case of the developed module. The features of the web interface will be similar to today's Gitcoin web UI, however, rather than retrieving the matching donation calculation results from a centralized server, our UI will talk to our substrate chain directly. Upon sending a donating transaction, a user is guaranteed that his/her donation has been recorded in substrate storage and corresponding matching fund will be arranged by the chain."}),"\n",(0,o.jsx)(n.p,{children:"A simple flow of the application is shown using below UML sequence diagram. Note that it only demonstrates the ideal case. Interruptions and error cases are omitted in the diagram."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://lucid.app/lucidchart/b9eb3034-1615-443c-9e8c-948cbfcecaf1/view",children:"User flow diagram on Lucid Chart"})}),"\n",(0,o.jsx)(n.p,{children:"Diving deep into possible user scenarios, I find they are more complicated than initially thought. For example, we need to code a way to prevent collusion of two projects, one of which could possibly use the matching fund to vote for the other's application in order to get more funds. That said, we will start with the basic logic and address issues occurred on the way."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Update #1"})}),"\n",(0,o.jsx)(n.p,{children:"We have completed the initial design of the web app wireframe, so I'm attaching it below. It contains two major pages, the Project Listing page and Project Detail page. The  goals of those pages are to clearly present details of participating projects, as well as the matching amount to individual donation. I personally like the user comments and on-chain transactions elements at the bottom of the second page. Not only does it create a plaza for individual donators to speak out, it also connects the donation activity to those voices, thus creating a strong sense of authenticity."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://lucid.app/lucidchart/b50c73aa-55ac-4037-a43d-6623fc6bf977/view?page=0_0#",children:"Web app wireframe on Lucidchart"})}),"\n",(0,o.jsx)(n.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Are there any other projects similar to yours? If so, how is your project different?"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"There are DAO projects such as PolkaDAO being built on Polkadot, providing utility for fund-raising of private companies. However, our focus is different. This project aims to provide an on-chain crowdfunding solution with a matching function. Specifically, it consists of two components, crowdfunding and matching donations."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Crowdfunding"}),": Individuals crowdfund donations towards public goods (for example: open source software)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Matching donations"}),": These individual contributions are \u2018matched\u2019 or \u2018topped-off\u2019 by a government, grants program, or private philanthropist."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Besides open-source program grant, the CLR mechanism can be applied to other crowdfunding for public goods, such as government electoral voting and non-profit funding. I have friends running an non-profit organization at Silicon Valley. My goal is to work with her to create the first real-world non-profit fundraising using CLR on Polkadot."}),"\n",(0,o.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,o.jsx)(n.h3,{id:"team-name",children:"Team name"}),"\n",(0,o.jsx)(n.p,{children:"OAK Foundation"}),"\n",(0,o.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Name of team leader: Chris Li"}),"\n",(0,o.jsx)(n.li,{children:"Names of team members: Xingyou Chen, Zhongwei Shi, Kangbin Ge"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Contact Name:"})," ",(0,o.jsx)(n.a,{href:"https://www.linkedin.com/in/chrisli2046/",children:"Chris Li"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Contact Email:"})," ",(0,o.jsx)(n.a,{href:"mailto:chris@oak.tech",children:"chris@oak.tech"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Website:"})," ",(0,o.jsx)(n.a,{href:"https://oak.tech",children:"https://oak.tech"})]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,o.jsx)(n.p,{children:"Individuals"}),"\n",(0,o.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Please describe the team's relevant experience. If the project involves development work, then we'd appreciated if you can single out a few interesting code commits made by team members on their past projects. For research-related grants, references to past publications and projects in a related domain are helpful."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"I worked at Microsoft for 4 years as a senior protocol (API) engineer before taking the leap into blockchain 2017, and have accumulated great experience with smart contract and application development on Ethereum, EOS, and RSK. Here are my achievements and expertise."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Implemented a prediction market dapp on Ethereum."}),"\n",(0,o.jsx)(n.li,{children:"Built games on EOS and ranked the top 10 by DappRadar & DappReview in daily volume for 6 months."}),"\n",(0,o.jsx)(n.li,{children:"Assembled an engineer team and built iOS & Android crypto wallets for the past 1.5 years."}),"\n",(0,o.jsx)(n.li,{children:"Very familiar with Bitcoin and Ethereum multi-signature, ENS, and Wallet Connect."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"My strongest programing languages are C++ & C#, and have been ramping up on Rust since Fall 2020."}),"\n",(0,o.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/OAK-Foundation/OAK-blockchain",children:"https://github.com/OAK-Foundation/OAK-blockchain"})," (Blockchain in development)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/OAK-Foundation/OAK-docs",children:"https://github.com/OAK-Foundation/OAK-docs"})," (Developer documentation)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/OAK-Foundation/quadratic-funding-pallet",children:"https://github.com/OAK-Foundation/quadratic-funding-pallet"})," (Quadratic Funding pallet)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/OAK-Foundation/quadratic-funding-test",children:"https://github.com/OAK-Foundation/quadratic-funding-test"})," (E2E Quadratic Funding test cases using Polkadot.js)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/OAK-Foundation/quadratic-funding-webapp",children:"https://github.com/OAK-Foundation/quadratic-funding-webapp"})," (The web application of Quadratic Funding)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/OAK-Foundation/extension",children:"https://github.com/OAK-Foundation/extension"})," (Open-source contribution to Polkadot.js extension)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/OAK-Foundation/hackathon-2021-spring",children:"https://github.com/OAK-Foundation/hackathon-2021-spring"})," (The demo project for Parity hackathon in Shanghai 2021)"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"update-2-ui-examples",children:"Update 2: UI Examples"}),"\n",(0,o.jsx)(n.p,{children:"UI demos of the team's previous work, which includes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"rWallet iOS app: production screenshots and example sketch source file"}),"\n",(0,o.jsx)(n.li,{children:"RSK website: finalized design image and example sketch source file"}),"\n",(0,o.jsxs)(n.li,{children:["Forge Labs website: production screenshot\n",(0,o.jsx)(n.a,{href:"https://drive.google.com/drive/folders/1nZPg4PmWSBxbfHuMyuAlw8UVXSybjTHG?usp=sharing",children:"https://drive.google.com/drive/folders/1nZPg4PmWSBxbfHuMyuAlw8UVXSybjTHG?usp=sharing"})]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"team-linkedin-profiles",children:"Team LinkedIn Profiles"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.linkedin.com/in/chrisli2046/",children:"Chris Li"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.linkedin.com/in/xingyou-chen-283056205/",children:"Xingyou Chen"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.linkedin.com/in/shi-zhongwei-b06573205/",children:"Zhongwei Shi"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.linkedin.com/in/kangbin-ge-08a56b205/",children:"Kangbin Ge"})}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"This section should break out the development roadmap into a number of milestones. Since the milestones will appear in the grant contract, it helps to describe the functionality we should expect, plus how we can check that such functionality exists in the product. Whenever milestones are delivered, we refer to the contract to ensure that everything has been delivered as expected."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Total Estimated Duration:"})," 3 months"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Full-time equivalent (FTE):"}),"  4 FTE"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Total Costs:"})," 20,000 DAI"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"milestone-1--implement-substrate-modules",children:"Milestone 1 \u2014 Implement Substrate Modules"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Estimated Duration:"})," 1.5 month"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"FTE:"}),"  4"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Costs:"})," 20,000 DAI"]}),"\n"]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Number"}),(0,o.jsx)(n.th,{children:"Deliverable"}),(0,o.jsx)(n.th,{children:"Specification"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"0a."}),(0,o.jsx)(n.td,{children:"License"}),(0,o.jsx)(n.td,{children:"Apache 2.0"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"0b."}),(0,o.jsx)(n.td,{children:"Documentation"}),(0,o.jsx)(n.td,{children:"We will provide both inline documentation of the code and a basic tutorial that explains the usage of the API."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"0c."}),(0,o.jsx)(n.td,{children:"Testing Guide"}),(0,o.jsx)(n.td,{children:"The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"0d."}),(0,o.jsx)(n.td,{children:"Tutorial"}),(0,o.jsx)(n.td,{children:"We will write tutorials on Medium that explains the work done as part of the grant."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"1."}),(0,o.jsx)(n.td,{children:"Substrate module: CLR"}),(0,o.jsxs)(n.td,{children:["We will create a Substrate module that have below functionalities.",(0,o.jsx)("br",{}),"1. Project: create, cancel, contribute, withdraw",(0,o.jsx)("br",{}),"2. Proposal: create, vote, cancel, finalize, appeal",(0,o.jsx)("br",{}),"3. Functions should be able to interact with Polkadot Identity Module and filter participants based on their identity information."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"2."}),(0,o.jsx)(n.td,{children:"Substrate chain"}),(0,o.jsx)(n.td,{children:"Module CLR of our custom chain will be interacted with above defined functions through API"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"3."}),(0,o.jsx)(n.td,{children:"Docker"}),(0,o.jsx)(n.td,{children:"We will provide a dockerfile to demonstrate the full functionality of our chain"})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"milestone-2--web-application-dapp",children:"Milestone 2 \u2014 Web Application (Dapp)"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Estimated Duration:"})," 1 month"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"FTE:"}),"  4"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Costs:"})," 0 DAI"]}),"\n"]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Number"}),(0,o.jsx)(n.th,{children:"Deliverable"}),(0,o.jsx)(n.th,{children:"Specification"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"0a."}),(0,o.jsx)(n.td,{children:"License"}),(0,o.jsx)(n.td,{children:"Apache 2.0"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"0b."}),(0,o.jsx)(n.td,{children:"Documentation"}),(0,o.jsx)(n.td,{children:"We will provide both inline documentation of the code and a basic tutorial that explains how a user can interact with the application with Polkadot.js browser extension."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"0c."}),(0,o.jsx)(n.td,{children:"Testing Guide"}),(0,o.jsx)(n.td,{children:"The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"0d."}),(0,o.jsx)(n.td,{children:"Tutorial"}),(0,o.jsx)(n.td,{children:"We will write Medium tutorials that explains the work done as part of the grant."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"1."}),(0,o.jsx)(n.td,{children:"Application Implementation"}),(0,o.jsx)(n.td,{children:"We will incorporate the javascript library from the previous step and build a web application that interacts with our substrate chain. Note that the web is a separate product from polkadot.js.org/apps/#/rpc and will provide user friendly interface without necessary knowledge of API calls."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"2."}),(0,o.jsx)(n.td,{children:"Deployment Instructions"}),(0,o.jsx)(n.td,{children:"We will provide one-line runner for the web application so others could spin up the app easily."})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Please include the team's long-term plans and intentions."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"In my opinion there are tons of things we can keep iterating on, but there are four important areas in terms of future development."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"User Study. We should invite a group of beta users for trial and feedback after launch. According to @semuelle, a few questions should be answered in the study plan. For example,"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"How do we choose subjects? What is the target size?"}),"\n",(0,o.jsx)(n.li,{children:"What's the questionnaire for the users in the study?"}),"\n",(0,o.jsx)(n.li,{children:"How do we measure and make use of the results?"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Sybil resistance. As development of this mechanism progresses to production, a number of challenges such as collusion and Sybil attack need to be addressed. Vitalik has proposed a method MACI, or ",(0,o.jsx)(n.a,{href:"https://ethresear.ch/t/minimal-anti-collusion-infrastructure/5413",children:"Minimal anti-collusion infrastructure"})," and a project ",(0,o.jsx)(n.a,{href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/nuclei_governance_os_voting.md",children:"Governance OS Voting"})," from Polkadot General Grant has been working on a solution. We will try our best to integrate those open source projects in order to fight against collusion."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Generalization of incentive protocol. The CLR mechanism, if proven, is one of many ways to conduct crowd-funding for public goods. Just as Substrate provides a framework for any kind of state transition machine, the donation-matching, or even broadly, incentive part should be generalized to easily adapt to other methods. Although new methods need to be coded into the substrate module, but as it evolves, the module will contain most common used methods for the council to choose from."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Reputation protocol integration. The incentive protocol layer sits on top of and relies on reputation protocol. Although the CLR can work without knowing the reputation of a wallet, a lot more advanced features will require a reputations system. For example, without reputation, the risk of cheating is minimum. Therefore, the incentive protocol needs a lot of heavy-lifting work, such as keeping tracking of the relationship of every wallet pair to prevent fraud. Ideally, there will be a reputation layer on Polkadot for our incentive protocol to build upon."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Fund dispensing. We have this idea to raise money for public goods, however, could we also improve the way we spend the money? With the transparency of blockchain, the delivery of the work is open to public for examination. By connecting the developer to the public directly, the product will dramatically reduce the work required from the traditional middleman and create a fair competition among developers."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Social experiment. The project is only valuable when put into real-world scenarios. It, along with Polkadot, are great exciting social experiments. I believe in beta and later production we will encounter challenges on both technical and philosophical sides. It will be an on-going effort to address those issues, and to improve the product as it's constantly put into test."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Possible additional information to include:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"What work has been done so far?"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"We have gone through all tutorials on substrate.dev, played around with the framework and are ready to start."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Are there are any teams who have already contributed (financially) to the project?"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"None"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Have you applied for other grants so far?"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"No"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);