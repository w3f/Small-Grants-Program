"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[25526],{50274:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=i(74848),l=i(28453);const r={},a="Zenlink DEX Smart Contract",s={id:"applications/zenlink-smart-contract",title:"Zenlink DEX Smart Contract",description:"Team Name:* Zenlink",source:"@site/applications/zenlink-smart-contract.md",sourceDirName:"applications",slug:"/applications/zenlink-smart-contract",permalink:"/applications/zenlink-smart-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/zenlink-smart-contract.md",tags:[],version:"current",frontMatter:{}},o={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"System Components",id:"system-components",level:3},{value:"Benefit",id:"benefit",level:3},{value:"The whole planning of Zenlink",id:"the-whole-planning-of-zenlink",level:3},{value:"What we will implement in this grant",id:"what-we-will-implement-in-this-grant",level:2},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Team Website",id:"team-website",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap",id:"development-roadmap",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implementing Zenlink DEX DApp",id:"milestone-1--implementing-zenlink-dex-dapp",level:3},{value:"Community engagement",id:"community-engagement",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"zenlink-dex-smart-contract",children:"Zenlink DEX Smart Contract"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Team Name:"})," Zenlink"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Payment Address:"})," 3FyMZ4Y6wFXkaSzdBPetizppR5bD6BVLUy"]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,t.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"Based on the prediction of the further growth of the DEX ecosystem in the future and the rapid development of the public blockchain technology, we propose a Polkadot network-based, high-liquidity, cross-chain DEX Network, Zenlink."}),"\n",(0,t.jsx)(n.p,{children:"It is a decentralized exchange network that consists of Zenlink DEX Module, Zenlink DEX Aggregator and other DEX Application on parachains."}),"\n",(0,t.jsx)(n.h3,{id:"system-components",children:"System Components"}),"\n",(0,t.jsx)(n.p,{children:"In general, Zenlink project consists of the following parts:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Zenlink DEX Protocol: The top-level unified general DEX protocol which can be implemented by the following ways. We prefer to make it to have Auto Market Maker(AMM) function and be easy imported into parachain in multiple ways.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Module: it's implemented as a Substrate pallet which can be imported into the runtime of a parachain."}),"\n",(0,t.jsx)(n.li,{children:"Smart Contract: it's implemented as a smart contract which can be deployed into the ink! pallet of a parachain."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Zenlink DEX Aggregator: A simple and user-friendly entrance of DEX world which is able to connect with most of DEX on Polkadot, so that user can do one-click trade with multiple DEX on low slippage"}),"\n",(0,t.jsx)(n.li,{children:"Zenlink Token(ZLK): The native token of Zenlink DEX Protocol which can be used to distribute liquidity benefits and governance, etc"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://images-cdn.shimo.im/TrQlWEFKIz34Mv54__thumbnail.png",alt:"Zenlink Ecosystem"})}),"\n",(0,t.jsx)(n.p,{children:"As a result of the above components, a decentralized exchange network, Zenlink DEX Network, will be established."}),"\n",(0,t.jsx)(n.h3,{id:"benefit",children:"Benefit"}),"\n",(0,t.jsx)(n.p,{children:"Parachains don't need to implement dex functionality by themselves since Zenlink DEX Protocol has two implementations so it is easy to be integrated. After that, the tokens of parachains would be involved into Zenlink DEX Network by trading with other tokens of other parachains. The more parachains integrate with the protocol, the more tokens users can exchange, so that they would be like to be a market maker and benefit from the value of the flow."}),"\n",(0,t.jsx)(n.h3,{id:"the-whole-planning-of-zenlink",children:"The whole planning of Zenlink"}),"\n",(0,t.jsx)(n.p,{children:"Firstly, Zenlink DEX Module and Smart Contract will be implemented based on Zenlink DEX Protocol. In order to complete the Zenlink ecosystem, we would like to deploy it to a substrate blockchain and build a front-end website application, Zenlink DEX Dapp, for test."}),"\n",(0,t.jsx)(n.p,{children:"Secondly, we would like to build another important component, Zenlink DEX Aggregator. It will connect to Zenlink DEX Dapp."}),"\n",(0,t.jsx)(n.p,{children:"Thirdly, we will test the full function of Zenlink DEX Module and Aggregator on Kusama. Users also can try it on Zenlink DEX Dapp."}),"\n",(0,t.jsx)(n.p,{children:"Finally, the whole infrastructure(Zenlink DEX Module and Aggregator) will be deployed to Polkadot, so that Zenlink DEX Dapp will be switched to Polkadot network and published."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://uploader.shimo.im/f/aCpI4JDF0fHIhpjw.png!thumbnail",alt:"Zenlink Architecture"})}),"\n",(0,t.jsx)(n.h2,{id:"what-we-will-implement-in-this-grant",children:"What we will implement in this grant"}),"\n",(0,t.jsx)(n.p,{children:"We will implement the protocol as a smart contract in this grant."}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.a,{href:"/applications/zenlink",children:"the last grant"}),", Zenlink DEX Module has been delivered within a docker image which has Auto Market Maker(AMM) function and is easy imported into parachain. Zenlink DEX Smart contract is not obsolete since those two implementation could be used by different cases. If a parachain doesn't want to integrate with Zenlink DEX Module into its runtime, it also has another option -- deploying the Zenlink DEX Smart Contract into its smart contract pallet, like ink!."]}),"\n",(0,t.jsx)(n.p,{children:"The purpose of this grant is to offer more options for parachain projects to introduce Zenlink in a friendly way."}),"\n",(0,t.jsx)(n.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,t.jsx)(n.p,{children:"no"}),"\n",(0,t.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,t.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Hui Guo(Leo Guo), Team Leader"}),"\n",(0,t.jsx)(n.li,{children:"Tianling, Principal Blockchain Expert"}),"\n",(0,t.jsx)(n.li,{children:"Jianbin Zhao, Senior Backend Engineer"}),"\n",(0,t.jsx)(n.li,{children:"Rui Shi, Senior Backend Engineer"}),"\n",(0,t.jsx)(n.li,{children:"Hui Yuan, Senior Product Manager"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Contact Name:"})," Victory Van"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Contact Email:"})," ",(0,t.jsx)(n.a,{href:"mailto:vv@zenlink.pro",children:"vv@zenlink.pro"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"team-website",children:"Team Website"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://zenlink.pro/",children:"https://zenlink.pro/"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Registered Address:"})," Address: 3 FRASER STREET #05-25 DUO TOWER SINGAPORE(189352)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Registered Legal Entity:"})," ZENLINK FOUNDATION LTD."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"UEN:"})," 202029221W"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,t.jsx)(n.p,{children:"The team is made up of many experienced professionals in the blockchain industry."}),"\n",(0,t.jsx)(n.p,{children:"Guo hui(Leo Guo) is the project leader. He joined imToken very early (June 2017) and worked for 3 years as a data analyst and marketing operation specialist. He is very good at trading quotes and user data analysis which helps imToken get 10m users and Tokenlon, imToken\u2019s DEX, achieve 600m trading volume as well."}),"\n",(0,t.jsx)(n.p,{children:"Tianling was a former senior expert of Alibaba. After leaving it, he joined a blockchain company as the core developer for 3 years. He is familiar with the underlying blockchain design and substrate development and also was in charge of the architecture design. Now, he is the principal blockchain expert of Zenlink team."}),"\n",(0,t.jsx)(n.p,{children:"Jianbin Zhao is a senior backend dev with 5 years experience, and he is helping the team build the first DEX web application."}),"\n",(0,t.jsx)(n.p,{children:"Rui shi is a senior backend dev with 5 years experience. He is not only familiar with C++/Rust, but also has good project experience on Substrate development."}),"\n",(0,t.jsx)(n.p,{children:"Hui Yuan has rich experience in product design and management. She has built many nice and user-friendly internet application."}),"\n",(0,t.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/zenlinkpro/zenlink_dex_module",children:"https://github.com/zenlinkpro/zenlink_dex_module"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"team-linkedin-profiles",children:"Team LinkedIn Profiles"}),"\n",(0,t.jsx)(n.p,{children:"no"}),"\n",(0,t.jsx)(n.h2,{id:"development-roadmap",children:"Development Roadmap"}),"\n",(0,t.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Total Estimated Duration:"})," 2 weeks"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Full-time equivalent (FTE):"})," 4"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Total Costs:"})," 0.3 btc"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"milestone-1--implementing-zenlink-dex-dapp",children:"Milestone 1 \u2014 Implementing Zenlink DEX DApp"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Estimated Duration:"})," 2 weeks"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"FTE:"}),"  4"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Costs:"})," 0.3 btc"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Deliverable"}),(0,t.jsx)(n.th,{children:"Specification"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Technical specifications and Zenlink DEX Module design"}),(0,t.jsxs)(n.td,{children:["These spec should be included in the  ",(0,t.jsx)(n.a,{href:"https://github.com/zenlinkpro/whitepaper/blob/master/en/zenlink_whitepaper_en.pdf",children:"whitepaper"}),". For details, please see the section 'Zenlink DEX Protocol' and 'Zenlink DEX Module'"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Zenlink DEX Smart Contract Repository"}),(0,t.jsx)(n.td,{children:"A git repository containing the dex smart contract source code. The smart contract can be deployed to a substrate chain using ink! which is a smart contract substrate pallet. The smart contract will has Automate Market Maker(AMM) function."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Tests"}),(0,t.jsx)(n.td,{children:"The code will have proper unit-test coverage to ensure functionality and robustness"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Docker"}),(0,t.jsx)(n.td,{children:"Docker image with a Substrate chain using our module, demonstrating its functionality"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Tutorial"}),(0,t.jsx)(n.td,{children:"The tutorial will not only indicate that how to use set up and deploy it into the ink! module, and also introduce special user cases and potential extensibility. It will be be published on Medium."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"community-engagement",children:"Community engagement"}),"\n",(0,t.jsxs)(n.p,{children:["The tutorials and Documentation that we provide will be published as articles in ",(0,t.jsx)(n.a,{href:"https://medium.com/zenlinkpro",children:"Zenlink Medium"})," and other social media platforms with due mention about Web3 grant."]}),"\n",(0,t.jsx)(n.p,{children:"We also intend to engage community by running range of user testing to get more feedback from the real end-users to improve our product."}),"\n",(0,t.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Migrate the above basic components to Kusama/Rococo for test"}),"\n",(0,t.jsx)(n.li,{children:"Build & deploy Zenlink DEX Aggregator on Kusama/Rococo."}),"\n",(0,t.jsx)(n.li,{children:"Full function test on Kusama/Rococo."}),"\n",(0,t.jsx)(n.li,{children:"Deploy the whole components to Polkadot including Zenlink DEX Module, DEX Dapp and DEX Aggregator."}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Medium: ",(0,t.jsx)(n.a,{href:"https://medium.com/zenlinkpro",children:"https://medium.com/zenlinkpro"})]}),"\n",(0,t.jsxs)(n.li,{children:["Twitter: ",(0,t.jsx)(n.a,{href:"https://twitter.com/ZenlinkPro",children:"https://twitter.com/ZenlinkPro"})]}),"\n",(0,t.jsxs)(n.li,{children:["Whitepaper: ",(0,t.jsx)(n.a,{href:"https://github.com/zenlinkpro/whitepaper/blob/master/en/zenlink_whitepaper_en.pdf",children:"https://github.com/zenlinkpro/whitepaper/blob/master/en/zenlink_whitepaper_en.pdf"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>s});var t=i(96540);const l={},r=t.createContext(l);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);