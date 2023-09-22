"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[72087],{22779:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));a(8209);const o={},i="Roloi - XCM Payment Automation",l={unversionedId:"applications/roloi-xcm-payment-automation",id:"applications/roloi-xcm-payment-automation",title:"Roloi - XCM Payment Automation",description:"- Team Name: NeoPower Digital",source:"@site/applications/roloi-xcm-payment-automation.md",sourceDirName:"applications",slug:"/applications/roloi-xcm-payment-automation",permalink:"/applications/roloi-xcm-payment-automation",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/roloi-xcm-payment-automation.md",tags:[],version:"current",frontMatter:{}},s={},m=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Goal",id:"goal",level:4},{value:"How to achieve it",id:"how-to-achieve-it",level:4},{value:"Technical details",id:"technical-details",level:4},{value:"Our solution",id:"our-solution",level:4},{value:"Wireframes",id:"wireframes",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Founders",id:"founders",level:4},{value:"CGO",id:"cgo",level:4},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 - UI on Rococo Testnet",id:"milestone-1---ui-on-rococo-testnet",level:3},{value:"Milestone 2 \u2014 Smart Contract and Kusama Connection",id:"milestone-2--smart-contract-and-kusama-connection",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],p={toc:m},u="wrapper";function c(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"roloi---xcm-payment-automation"},"Roloi - XCM Payment Automation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," NeoPower Digital"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 1dz667uQX199rHyj6tizmL6EJe4AZxjH1RhnyrT1QuQ4pfS (Polkadot - USDT)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 3")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"We are ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/NeoPowerDigital"},"NeoPower"),", a Web3 software company. We are currently building a payment automation platform called ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/RoloiMoney"},"Roloi"),"."),(0,r.kt)("p",null,"Last year we received a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/roloi_milestone_1.md"},"W3F Grant")," for the migration of our Streaming Smart Contract from Cosmos to Polkadot. We talk about this migration journey in a ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/@RoloiMoney/cosmwasm-to-ink-beyond-the-cosmos-e4920604f9cb"},"Medium Article"),"."),(0,r.kt)("p",null,"Roloi is based on three automation pillars:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Token streaming"),(0,r.kt)("li",{parentName:"ul"},"Recurring payments"),(0,r.kt)("li",{parentName:"ul"},"Conditional payments")),(0,r.kt)("p",null,"As a next step for Roloi, we are going to build the ",(0,r.kt)("strong",{parentName:"p"},"recurring payments feature"),". "),(0,r.kt)("p",null,"Roloi can achieve this by avoiding off-chain mechanisms thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://oak.tech/"},"OAK Network"),": the automation parachain."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("h4",{id:"goal"},"Goal"),(0,r.kt)("p",null,"Automate ink! smart contract transactions in a recurring way."),(0,r.kt)("h4",{id:"how-to-achieve-it"},"How to achieve it"),(0,r.kt)("p",null,"We need to notify our Smart Contract deployed on ",(0,r.kt)("strong",{parentName:"p"},"Shiden")," (Astar) whenever a ",(0,r.kt)("strong",{parentName:"p"},"scheduled transaction")," should be executed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"XCM")," enables us to connect parachains. This way, we can schedule transactions on ",(0,r.kt)("strong",{parentName:"p"},"Shiden")," (Astar) with the assistance of ",(0,r.kt)("strong",{parentName:"p"},"Turing")," (OAK). "),(0,r.kt)("h4",{id:"technical-details"},"Technical details"),(0,r.kt)("p",null,"Creating products using XCM implies a complex journey today. Here is an example between Astar and OAK:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/lrjifU5.png",alt:"W3F Grant - XCM Payment Automation"})),(0,r.kt)("p",null,"There are some DX/UX issues while building products with the out-of-the-box approach:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The process to enable the connection between chains requires the ",(0,r.kt)("strong",{parentName:"li"},"configuration of Proxy Accounts")," on both chains."),(0,r.kt)("li",{parentName:"ul"},"Users have to manually ",(0,r.kt)("strong",{parentName:"li"},"top up their Proxy Accounts")," in order to allow them to pay for fees to act on their behalf."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"XCM messages are complex")," to understand and generate."),(0,r.kt)("li",{parentName:"ul"},"Managing ",(0,r.kt)("strong",{parentName:"li"},"on-chain recurring transactions")," is always a complex task."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Polkadot.js")," is great for low-level development, but ",(0,r.kt)("strong",{parentName:"li"},"hard to use for user-oriented products."))),(0,r.kt)("h4",{id:"our-solution"},"Our solution"),(0,r.kt)("p",null,"Our deliverable will include a ",(0,r.kt)("strong",{parentName:"p"},"Next.js UI")," and an ",(0,r.kt)("strong",{parentName:"p"},"ink! smart contract")," to create recurring transfers leveraging XCM features."),(0,r.kt)("p",null,"The included features on the Next.js UI are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2705 Wallet connection"),(0,r.kt)("li",{parentName:"ul"},"\u2705 1-click proxy accounts setup"),(0,r.kt)("li",{parentName:"ul"},"\u2705 Recurring payment creation"),(0,r.kt)("li",{parentName:"ul"},"\u2705 Incoming and outgoing payments section"),(0,r.kt)("li",{parentName:"ul"},"\u2705 useink() library")),(0,r.kt)("p",null,"For devs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcbb Our own useful hooks and reusable abstractions in Typescript to encapsulate tasks such as:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Creating proxy accounts on both sides"),(0,r.kt)("li",{parentName:"ul"},"Depositing funds into these accounts to cover fees"),(0,r.kt)("li",{parentName:"ul"},"Wrapping the recurring transaction to be executed via Astar Proxy Account"),(0,r.kt)("li",{parentName:"ul"},"Transmitting the recurring task configuration via XCM & HRMP"))),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcbb ink! smart contract example used to trigger payments"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcbb Recurring payment data model")),(0,r.kt)("p",null,"Some hook examples:\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/Qfrjp4S.png",alt:"W3F Grant - XCM Payment Automation - Hook examples"})),(0,r.kt)("p",null,"This project will be generic and open source to serve the Polkadot builders community as a ",(0,r.kt)("strong",{parentName:"p"},"public good")," that teams can use to ",(0,r.kt)("strong",{parentName:"p"},"automate transactions")," leveraging ",(0,r.kt)("strong",{parentName:"p"},"cross-chain features"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This will make building with XCM fast and simple.")),(0,r.kt)("h4",{id:"wireframes"},"Wireframes"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/5hVZWuF.png",alt:"Wireframe"})),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"This project is a ",(0,r.kt)("strong",{parentName:"p"},"public good for the Polkadot Builders community"),". For NeoPower, this will be a great experience since all of this work will give us more traction to ",(0,r.kt)("strong",{parentName:"p"},"grow Roloi"),". "),(0,r.kt)("p",null,"Our intention is to provide a ",(0,r.kt)("strong",{parentName:"p"},"generic and open-source project")," that can be the starting point to many real use cases of cross-chain payments using XCM. "),(0,r.kt)("p",null,"The code will be backed with robust and clear documentation. This will allow our platform to be easy-to-use and effortlessly scalable. "),(0,r.kt)("p",null,"We also plan on publishing a ",(0,r.kt)("strong",{parentName:"p"},"Medium Article")," to ",(0,r.kt)("strong",{parentName:"p"},"share our experience developing with XCM"),"."),(0,r.kt)("p",null,"At NeoPower, we are always contributing to the Polkadot Spanish community with educational content:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=u9VmpjLfMkA&list=PLmL99foFXSfghdKCvI7oXq6-5G3zCSBsS&index=3&ab_channel=NeoPower"},"ink! workshop (Polkadot Hackathon Latam)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/jHUvwO0siKo"},"ink! workshop (Polkadot Blockchain Academy - Buenos Aires)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/ESbrKJ1eXZY"},"ink! intro (Polkadot Hackathon Latam - Closing event)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/o7BwYB1LmCE"},"\u201cWhat\u2019s Roloi?\u201d talk (Polkadot Latam Day)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=nmboRFPK9mI"},"ink! Development Workshop (Universidad Iberoamericana, Mexico)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/ink-docs/pulls?q=is%3Apr+is%3Aclosed+author%3Apcorrado-np"},"ink! official docs - Translation to Spanish")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://youtube.com/playlist?list=PLmL99foFXSfjL8iuQTJ7ah_jDVv4os3p8"},"How to use useink! Library - Video Playlist")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/NeoPowerDigital/status/1674568722755866624?s=20"},'"Gavin Wood\'s vision of Polkadot" talk (Polkadot Decoded 2023 - View Party Buenos Aires)')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/RoloiMoney/status/1677388280155832322?s=20"},'"Payments in Crypto for Humans" talk (Polkadot Decoded 2023 - Satellite Event Buenos Aires)')),(0,r.kt)("li",{parentName:"ul"},"(coming soon) ink! 8-week course in Spanish (Polkadot Hub)")),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("p",null,"We are NeoPower, a Web3 software company. Our core team members:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Brian Sasbon (Co-Founder & CEO)"),(0,r.kt)("li",{parentName:"ul"},"Pablo Corrado (Co-Founder & CTO)"),(0,r.kt)("li",{parentName:"ul"},"Hern\xe1n Hermida (CGO)")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Brian Sasbon"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:bsasbon@neopower.digital"},"bsasbon@neopower.digital")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ",(0,r.kt)("a",{parentName:"li",href:"https://neopower.digital/"},"https://neopower.digital/"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," Pacheco 2131, CABA, Buenos Aires, Argentina (CP1431)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," NeoPower Digital, LLC")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("h4",{id:"founders"},"Founders"),(0,r.kt)("p",null,"We are Brian and Pablo, Software Engineers with a Degree from the National Technological University (UTN) from Buenos Aires, Argentina, and have more than 10 years of experience as developers for many different projects. We have strong experience working as Full-stack Developers and Team Managers for US traditional finance clients like Morgan Stanley, Visa, and JP Morgan."),(0,r.kt)("p",null,"6 years ago we founded NeoPower, our own software company to work for different clients building freelance teams of designers, developers, and testers."),(0,r.kt)("p",null,"We are building Roloi, a payment automation platform to enable on-chain payment flow automation in Astar. Our project was supported with a first grant from the Web3 Foundation."),(0,r.kt)("h4",{id:"cgo"},"CGO"),(0,r.kt)("p",null,"Hern\xe1n S. Hermida (aka Milstein) is a DeFi Researcher with more than two years of experience contributing to educational communities in Latam. Currently, he hosts #DeFiSpace, a weekly Twitter Spaces cycle, with more than 50 episodes, interviewing builders from different multi-chain projects, and creates content for \u201cLa Multisig\u201d, a web3 educational YouTube Channel with its community."),(0,r.kt)("p",null,"He\u2019s the growth lead of DeFi Argentina a non-profit project that helps children\u2019s food banks in Argentina by collecting donations in cryptocurrencies."),(0,r.kt)("p",null,"He\u2019s also been an OAK ambassador since Nov 2022."),(0,r.kt)("p",null,"Hern\xe1n is part of the Roloi team as CGO to help with the growth, research, and networking strategy, leveraging his knowledge about DeFi and communities."),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/NeoPower-Digital"},"NeoPower GitHub Repository"))),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2.5 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," $ 52,500")),(0,r.kt)("h3",{id:"milestone-1---ui-on-rococo-testnet"},"Milestone 1 - UI on Rococo Testnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 1.5 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," $ 31,500 ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0a.")),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"MIT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0b.")),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a general tutorial for the user to understand how to use the dApp and technical documentation of the main functionalities.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0c.")),(0,r.kt)("td",{parentName:"tr",align:null},"Testing"),(0,r.kt)("td",{parentName:"tr",align:null},"To guarantee robustness, the main functionality will be covered by unit tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"1.")),(0,r.kt)("td",{parentName:"tr",align:null},"UI"),(0,r.kt)("td",{parentName:"tr",align:null},"As expressed in the Project Details section, we will provide a ",(0,r.kt)("strong",{parentName:"td"},"Typescript Next.js Web App")," that includes key abstractions to simplify the developers' work when using XCM and connecting parachains. The scope of this UI includes connection to the Rococo Testnets of Astar & OAK and chain native token transfers. Libraries to use: Polkadot.js & useink.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1a."),(0,r.kt)("td",{parentName:"tr",align:null},"React XCM tooling"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide reusable React hooks, generic components, state management and types to facilitate the creation and top-up of Proxy Accounts, and execution of XCM (v3) messages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1b."),(0,r.kt)("td",{parentName:"tr",align:null},"Home page"),(0,r.kt)("td",{parentName:"tr",align:null},"This page will handle the wallet connection and will show the app dashboard.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1c."),(0,r.kt)("td",{parentName:"tr",align:null},"Create a Recurring Payment Page"),(0,r.kt)("td",{parentName:"tr",align:null},"On this page, the user will be able to create recurring transfers using the previously defined XCM flow. The most tricky part of the process will be transparent for the user.")))),(0,r.kt)("h3",{id:"milestone-2--smart-contract-and-kusama-connection"},"Milestone 2 \u2014 Smart Contract and Kusama Connection"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," $ 21,000 ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0a.")),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"MIT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0b.")),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will iterate the existing documentation to include the new functionalities.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0c.")),(0,r.kt)("td",{parentName:"tr",align:null},"Testing"),(0,r.kt)("td",{parentName:"tr",align:null},"To guarantee robustness, the main functionality will be covered by unit tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0d.")),(0,r.kt)("td",{parentName:"tr",align:null},"Article"),(0,r.kt)("td",{parentName:"tr",align:null},"We will publish a Medium Article about our development experience with XCM.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"1.")),(0,r.kt)("td",{parentName:"tr",align:null},"UI"),(0,r.kt)("td",{parentName:"tr",align:null},"We will add the connection to the Kusama chains of Astar and OAK.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1a."),(0,r.kt)("td",{parentName:"tr",align:null},"My Payments Page"),(0,r.kt)("td",{parentName:"tr",align:null},"A page to show all the incoming and outgoing payments of the connected user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"2.")),(0,r.kt)("td",{parentName:"tr",align:null},"Smart Contract"),(0,r.kt)("td",{parentName:"tr",align:null},"An ink! smart contract that stores all the payment flows and monitors the security of the assets. All the token transfers will occur in Shiden. This enables transfers of non-native tokens.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2a."),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction - Configure new recurring transfer"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a message to configure a new recurring transfer between Shiden accounts.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2b."),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction - Modify the configuration of a recurring transfer"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a message to modify an existing recurring transfer between Shiden accounts.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2c."),(0,r.kt)("td",{parentName:"tr",align:null},"Query - Get user recurring transfers"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a message to get all the incoming and outgoing recurring transfers of the connected user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2d."),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction - Execute a transfer"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a message to execute a transfer related to an existing recurring configuration. It will be triggered by the OAK scheduler, and the contract should validate the time according to the existing configuration.")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Automate cross-chain token transfers."),(0,r.kt)("li",{parentName:"ul"},"Include conditionals to the transfers."),(0,r.kt)("li",{parentName:"ul"},"Scale this automation platform according to the ecosystem needs. "),(0,r.kt)("li",{parentName:"ul"},"Integrate this code to Roloi to schedule payment flows.")),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,"We heard about the Grants Program through Twitter, and through personal recommendations from Parity developers we decided to apply."),(0,r.kt)("p",null,"Links:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://roloi.money"},"https://roloi.money")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://neopower.digital"},"https://neopower.digital"))))}c.isMDXComponent=!0}}]);