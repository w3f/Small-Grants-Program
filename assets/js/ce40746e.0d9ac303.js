"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[72697],{30940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=n(74848),l=n(28453);const a={},s="Xcavate",r={id:"applications/Xcavate",title:"Xcavate",description:"We are building a real estate centric lending and asset minting protocol.",source:"@site/applications/Xcavate.md",sourceDirName:"applications",slug:"/applications/Xcavate",permalink:"/applications/Xcavate",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/Xcavate.md",tags:[],version:"current",frontMatter:{}},o={},d=[{value:"Project Overview",id:"project-overview",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Technology Stack",id:"technology-stack",level:3},{value:"Third-Party",id:"third-party",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Initial POC of lending protocol",id:"milestone-1--initial-poc-of-lending-protocol",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"xcavate",children:"Xcavate"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"We are building a real estate centric lending and asset minting protocol."}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Team Name:"})," Xcavate"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Payment Address:"})," 5E28NSFGwYB9C39bYdRAQ79UKRsM6shxkJr3LG4hehycwfJc"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Costs:"})," $8500 USDT (Polkadot - Statemint)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Level:"})," 1"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"project-overview",children:"Project Overview"}),"\n",(0,i.jsx)(t.p,{children:"Due to a combination of increased population and changing housing needs, there is global housing crisis. According to the UN, the global population is set to reach over 11.2 billion by the year 2100, therefore 2 billion new homes are required in the next 80 years. 20% of all housing is built by small to medium sized real estate developers but access to finance through traditional banks and other financial institutions is complex, time consuming and expensive."}),"\n",(0,i.jsx)(t.p,{children:"Xcavate is looking to solve this issue by developing a completely decentralised lending and NFT protocol governed by a DAO to help fund the building of real world real estate assets, as well as transact and manage fractions of each property as a route to a global real estate investor market. Our goal is to create a Decentralised Autonomous Organisation (DAO), which has a core Fellowship of real estate developers, investors and blockchain developers accountable to its wider community, so more houses can be built and invested in to help reach the growing demand."}),"\n",(0,i.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"Xcavate will be a first-of-its-kind real-world land & property NFT platform that collateralises real world parcels of land to finance real estate development.\r\nXcavate facilitates digitising land and/or property title deeds through minting and bundling of NFTs, which are then linked to verifiable digital identities (DIDs) approved by government entities.\r\nXcavate is an ecosystem that allows real-world property developers access to finance parcels of physical land with planning permission for development. Once the land is at the final development stage, the developer will create NFTs for the individual properties to be sold/managed by a peer-to-peer marketplace (property owners, investors, trusts etc.).\r\nThe system will significantly reduce the time from real estate planning permission to build start. By simplifying the finance application process and speeding up the release of funds to the developer. Xcavate not only provides real-world property developers with a way to build quicker but, as a result, enables a more significant number of much-needed houses to be delivered to market. It also provides liquidity to static real-world assets at every stage of the property development process in a fair and risk-averse way. It will enable the real estate to be onboarded cleanly and efficiently, opening up opportunities throughout the broader Dotsama ecosystem."}),"\n",(0,i.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,i.jsx)(t.p,{children:"We will initially build a POC of the real estate developer loan process to prove the concept. Building a simple polkadot.js wallet that allows verification of identity and creation of DIDS (through the KILT protocol). Once land ownership and build value has been identified (using Oracles) then the LAND NFT can be minted and placed in a multi-sig wallet along with the full loan amount (from the community loan pool). Each build tranche of money will be delivered to the real estate developer wallet, once real estate build evidence has been established and verified."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://xcavate.io/W3F/DeveloperLoanProcessPOCv2.jpg",alt:""})}),"\n",(0,i.jsx)(t.p,{children:"Xcavate will adapt and build multiple Pallets to execute the functionalities. We will use the KILT SDK as well as the substrate framework and primary language Rust to create the pallets on the Polkadot ecosystem.\r\nToken Pallet\r\nDecentralised Identity Document pallet\r\nUser Management pallet\r\nLoan Management pallet\r\nTransaction management pallet\r\nStaking pallet\r\nVerification pallet"}),"\n",(0,i.jsx)(t.p,{children:"This Architecture diagram shows the visual representation that maps out the physical implementation for components in the Polkadot ecosystem and how the scalability of the platform works. The diagram represents Microservices we are using to execute the functionality. API gateway will split the API calls to the respective microservices. We are using an s3 bucket to store the media files. We are using pallets to execute the functions on the Polkadot ecosystem."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://xcavate.io/W3F/XCAV-WEB-3-Grant-Application-Image-4.jpg",alt:""})}),"\n",(0,i.jsx)(t.p,{children:"Token:\r\nXCAV - Platforms Native Token to launch a para chain and participate in a crowd loan/slot auction. XCAV tokens are used to stake within the platform. We will create these tokens with the Transfer, Mint, Burn, Approve, and Allowance functions.\r\nLiquidity Pool:\r\nXcavate creates a liquidity pool to store staked tokens, staked tokens will be queued and utilized for each loan application. XCAV tokens are swapped as GBPT through XCM and deposited on the Central Loan pool.\r\nCentral Loan Pool:\r\nXcavate Creates a central loan pool to manage Loan amounts and Loan repayment. The central lending pool will act as the heart of the platform to map all the transactions."}),"\n",(0,i.jsx)(t.h3,{id:"technology-stack",children:"Technology Stack"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"React.js"}),"\n",(0,i.jsx)(t.li,{children:"Node.js"}),"\n",(0,i.jsx)(t.li,{children:"Express.js"}),"\n",(0,i.jsx)(t.li,{children:"Rust"}),"\n",(0,i.jsx)(t.li,{children:"Substrate Framework"}),"\n",(0,i.jsx)(t.li,{children:"Polkadot"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"third-party",children:"Third-Party"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Kilt \u2013 SDK"}),"\n",(0,i.jsx)(t.li,{children:"Chainlink"}),"\n",(0,i.jsx)(t.li,{children:"AWS"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,i.jsx)(t.p,{children:"After many months of research, we initially met on a zoom with Ingo from Kilt, discussing our idea and talking through how the Kilt chain can be incorporated into the Xcavate system. A few weeks later, we contacted Acala and met with Robinson, who was very helpful and enthusiastic about us being involved in the ecosystem and our potential partnership. We also reached Centrifuge and spent many weeks looking through their docs with the initial idea of creating a dApp on their chain, but as there were some striking differences in how their chain operated, it was apparent that was not going to be the best fit for our project. Going forward, however, once the real estate has been built, there will be opportunities for us to introduce Centrifuge."}),"\n",(0,i.jsx)(t.p,{children:"We feel this is a great way to bring land & Property assets into the digital ecosystem to interact with the following potential partners:"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Kilt (Identity & wallet)"}),"\r\nThis is a crucial part of the initial process to verify; Real Estate Director, Company & Title Deed and create DID\u2019s, which will be held in a polkadot.js wallet and used throughout the process.\r\n",(0,i.jsx)(t.strong,{children:"Statemint / Acala"}),"\r\nThere are many stages of financing that will involve aUSD / USDT / GDPT\u2026 from the initial funding pool, a liquidity pool, as well as the need to exchange the locked loan value for each project in GBP stable coins (as our initial market is based in the UK).\r\n",(0,i.jsx)(t.strong,{children:"CRUST"}),"\r\nOur POC will use AWS to prove the concept, however going forward we will look to host our dApp and all the land and property related documents on the Crust network.\r\n",(0,i.jsx)(t.strong,{children:"Subwallet"}),"\r\nIntegrate DID's and Real Estae NFTs in to the their wallet to improve the UI/UX"]}),"\n",(0,i.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,i.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Richard Houldsworth \u2013 CTO"}),"\n",(0,i.jsx)(t.li,{children:"Alex Ward \u2013 COO"}),"\n",(0,i.jsx)(t.li,{children:"Ganish Oli - Substrate Developer"}),"\n",(0,i.jsx)(t.li,{children:"Rene H\xfcrter - Substrate Developer"}),"\n",(0,i.jsx)(t.li,{children:"Alan - Full Stack Developer"}),"\n",(0,i.jsx)(t.li,{children:"Victor Chukwonoso - Product Designer"}),"\n",(0,i.jsx)(t.li,{children:"Neeraj Choubisa - Full Stack Developer"}),"\n",(0,i.jsx)(t.li,{children:"Victor Chukwonoso - UI/UX Designer"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Name:"})," Richard Houldsworth"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Email:"})," ",(0,i.jsx)(t.a,{href:"mailto:richard@xcavate.io",children:"richard@xcavate.io"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Website:"})," xcavate.io"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"H & W Investments Limited"}),"\n",(0,i.jsx)(t.li,{children:"17 College Road, Cheshunt EN8 9LS, United Kingdom"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,i.jsx)(t.p,{children:"Richard Houldsworth \u2013 10 years in web 2.0 dev space \u2013 serial Entrepreneur\r\nAlex Ward \u2013 25 years in the global property market \u2013 serial Entrepreneur\r\nGanish Oli - ink! smart contract developer and substrate blockchain developer.\r\nRene H\xfcrter - Currently studying to become a blockchain developer. Alchemy University Ethereum Bootcamp 11/2022. Scaling Ethereum 2023 Hackathon 11/03/2023. Consensus 2023 Hackathon (Web3athon 2023) 17/04/2023.\r\nAlan Ma - Full-Stack developer who likes to work with JavaScript/Typescript (React, Next.js, Redux, Vue.js, Node), Blockchain(Bitcoin, Ethereum, Cosmos, Solidity, Rust), Golang, Python among others. Since I graduated from the university, I\u2019ve joined several companies and dev teams to build web/mobile and web3 apps.\r\nRene H\xfcrter - I am currently studying to become a blockchain developer. Alchemy University Ethereum Bootcamp 11/2022. Scaling Ethereum 2023 Hackathon 11/03/2023. Consensus 2023 Hackathon (Web3athon 2023) 17/04/2023.\r\nNeeraj Choubisa - A Passionate Full Stack Blockchain Ethereum Based Web Developer, Third-Year student at Indian Institute of Information Technology, Dharwad"}),"\n",(0,i.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/xcavateblockchain",children:"https://github.com/xcavateblockchain"}),"\r\n",(0,i.jsx)(t.a,{href:"https://github.com/xcavate2022",children:"https://github.com/xcavate2022"}),"\r\n",(0,i.jsx)(t.a,{href:"https://github.com/ganesh1233456",children:"https://github.com/ganesh1233456"}),"\r\n",(0,i.jsx)(t.a,{href:"https://github.com/RecrafterH",children:"https://github.com/RecrafterH"}),"\r\n",(0,i.jsx)(t.a,{href:"https://github.com/meanking",children:"https://github.com/meanking"}),"\r\n",(0,i.jsx)(t.a,{href:"https://github.com/Kali-Decoder",children:"https://github.com/Kali-Decoder"}),"\r\n",(0,i.jsx)(t.a,{href:"https://github.com/RecrafterH",children:"https://github.com/RecrafterH"})]}),"\n",(0,i.jsx)(t.h3,{id:"team-linkedin-profiles",children:"Team LinkedIn Profiles"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/richard-houldsworth/",children:"https://www.linkedin.com/in/richard-houldsworth/"}),"\r\n",(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/alex-ward-2350a036/",children:"https://www.linkedin.com/in/alex-ward-2350a036/"}),"\r\n",(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/ganesh-oli-9285a4163/",children:"https://www.linkedin.com/in/ganesh-oli-9285a4163/"}),"\r\n",(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/neeraj-choubisa-a4952b202/",children:"https://www.linkedin.com/in/neeraj-choubisa-a4952b202/"}),"\r\n",(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/ren%C3%A9-h%C3%BCrter-36084b249",children:"https://www.linkedin.com/in/ren%C3%A9-h%C3%BCrter-36084b249"})]}),"\n",(0,i.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,i.jsx)(t.p,{children:"We have been heavily involved in learning all things associated with the Polkadot & Kusama Ecosystem. This has been coupled with the idea of bringing land and property from its current state into the web3 ecosystem. We have been meeting with top-level industry leads, government officials and developers.\r\nRobin Ejsmond-Frey and Nico Morgan from Parity have been a tremendous help by supporting us with information about the W3F grant application process and recommendations to attend Hackathons and the Polkadot Decoded Event London. As well as as number of forums to help our substrate development knowledge."}),"\n",(0,i.jsx)(t.p,{children:"We have been taking time to play with Substrate to form initial local nodes. We feel we are now ready to build the initial POC for this project in the Rococco test environmenment."}),"\n",(0,i.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,i.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Estimated Duration:"})," 2 months"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  4"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Costs:"})," $8500 USDT"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-1--initial-poc-of-lending-protocol",children:"Milestone 1 \u2014 Initial POC of lending protocol"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated Duration:"})," 2 months"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  4"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," $8500 USDT"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"We will build on the excellent work we have achieved developing the Real Estate NFT marketplace for the hackerearth.com hackerthon."}),"\n",(0,i.jsx)(t.p,{children:"In the first milestone, the features for the PoC will be implemented and tested by limited users. We will adapt FRAME pallets to create a unique structure of a central community loan pool that acts as a risk reducer to allow individual loan stakers to lock and unlock native XCAV coins quickly and easily, rather than being committed to the full term of a particular loan. This will provide an attractive low risk investment opportunity and increase community confidence in the network while eliminating any delay in providing the funds to the real estate development project, once all the necessary checks have been completed. This loan pool structure could be applied to many different chains in future projects. The execution of various stages of the dApp specific logic will built using ink! smart contracts."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Number"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Deliverables"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"0a."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"License"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Apache 2.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"0b."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Documentation"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The documentation will be provided to show the whole architecture of the Xcavate Network."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"0c."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Testing and Testing Guide"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The testing guide will be provided to test each component."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"0d."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"VS Code Instructions"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"We have struggled to create docker images and a container, which allows interaction between the frontend, backend & node however VS code is working as expected."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"0e."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Tutorial"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"We will write a tutorial about how to use Xcavate Network."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"0f."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Article"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"We will write an article published on media channels."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Xcavate Node Repo"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"We will create a customized chain node with Substrate 2.0 Framework."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Xcavate Loan App Repo"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"All smart contracts will be written in Ink! to handle all the on chain runtime events related pallet functions such as; 1) Assess loan application criteria 2) Creation and management of multisig wallet 3) Minting and transfer of LAND NFTs 4) Defining and executing the loan APR structure 5) Monitor and execute real estate build stage checks 5) Deliver tranches of loan amounts to wallets 6) Manage the loan repayment and NFT transfer."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"3."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Loan management pallet"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"* Manage loan application ** Land details' ** Registration * Manage loan interest percentage ** Based on land and experience * Approve/Reject request"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"4."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Staking pallet"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"* User can stake native token * Calculate APR * Distribute payouts"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"5."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"DAO"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The PoC will have a basic voting structure to ensure rewards can be given to the real estate build stage checkers (As we progress in to the MVP stage this will be expanded to form a full governance structure)."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,i.jsx)(t.p,{children:"We are talking to Subwallet about integrating the KILT protocol DIDs in to their wallet for a smoother and simpler user experience. Once we have built the initial POC then on to the MVP and GTM. We have already started the white paper as well as developed a pitch deck to demonstrate the potential of the system to; investors, partners and eventually XCAV coin holders. We have started a social media campaign in order to build a community now and through the dApp build & testing stages."}),"\n",(0,i.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,i.jsx)(t.p,{children:"We will be attending the 2023 Polkadot Decoded event. We are keen to network and expand our partnerships across the Dotsama Ecosystem, while helping to build much needed real estate investment opportunities to a global population."})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var i=n(96540);const l={},a=i.createContext(l);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);