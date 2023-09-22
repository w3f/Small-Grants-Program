"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[35172],{34537:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));a(8209);const r={},i="Uniscan NFT Explorer",o={unversionedId:"applications/nft_explorer",id:"applications/nft_explorer",title:"Uniscan NFT Explorer",description:"Team Name:* Uniscan",source:"@site/applications/nft_explorer.md",sourceDirName:"applications",slug:"/applications/nft_explorer",permalink:"/applications/nft_explorer",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/nft_explorer.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Architecture",id:"architecture",level:4},{value:"Mockups",id:"mockups",level:4},{value:"Data models",id:"data-models",level:4},{value:"collections",id:"collections",level:5},{value:"tokens",id:"tokens",level:5},{value:"addresses",id:"addresses",level:5},{value:"blockchains",id:"blockchains",level:5},{value:"transfers",id:"transfers",level:5},{value:"Apis",id:"apis",level:4},{value:"Web APIs",id:"web-apis",level:5},{value:"Technology stack",id:"technology-stack",level:4},{value:"frontend",id:"frontend",level:5},{value:"backend",id:"backend",level:5},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Similar projects",id:"similar-projects",level:3},{value:"Why evm?",id:"why-evm",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 common components",id:"milestone-1--common-components",level:3},{value:"Milestone 2 \u2014 Web server",id:"milestone-2--web-server",level:3},{value:"Future Plans",id:"future-plans",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"uniscan-nft-explorer"},"Uniscan NFT Explorer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Team Name:")," Uniscan"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Payment Address:")," 0x480821a0700b0d5fBC722a5339ED2d49979Eaa42 (DAI)")),(0,l.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Uniscan NFT Explorer wants to be the best place to analyze, track and discover NFTs."),(0,l.kt)("p",null,"Uniscan NFT Explorer hopes to create a unified NFT dedicated explorer for the Polkadot / Kusama ecology. It can be used to discover and view the NFTs in important parachains in the Polkadot / Kusama ecology."),(0,l.kt)("p",null,"The vision of this explorer is to become a better platform for discovering and analyzing NFTs. In the future, we can provide more tools for discovering and analyzing NFTs, such as combining on-chain data and off-chain data to provide users with some statistical views."),(0,l.kt)("p",null,"We hope that through this grant, we can better understand NFT and lay a foundation for the realization of this vision. This grant is the first step of this vision, that is to achieve a basic browser structure and functions, and only focus on evm. Through this grant, we hope to"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"establish a reliable technology architecture."),(0,l.kt)("li",{parentName:"ol"},"choose the best technology stacks."),(0,l.kt)("li",{parentName:"ol"},"better understand nft, and improve the data model,"),(0,l.kt)("li",{parentName:"ol"},"implement a better style suitable for NFT display.")),(0,l.kt)("h3",{id:"project-details"},"Project Details"),(0,l.kt)("h4",{id:"architecture"},"Architecture"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1608576/127757463-724704ab-d7e1-488c-bd18-d4f2d9725d5f.png",alt:null})),(0,l.kt)("p",null,"This is a standard web program, the main structure includes three layers."),(0,l.kt)("p",null,"The first layer is the Web server, which is responsible for rendering browser pages, showing NFTs to users, and providing some interactive functions."),(0,l.kt)("p",null,"The second layer is the database layer. A data model is used in the database to store all NFTs data, and the Web server will query the data from the database."),(0,l.kt)("p",null,"The third layer is the data query layer connected to blockchains. In this layer, there will be a number of long-running workers. These workers will monitor or poll blockchains to discover NFTs, and then combine these NFTs with their related data into the database, and the push service will also be notified to push the latest data to the browser. In addition to obtaining data through blockchains, this layer may also grab data from some centralized or decentralized services, such as grabbing transaction data from Markets, etc. This part is not in the scope of this grant."),(0,l.kt)("p",null,"This grant application only focuses on the NFTs on the evm-compatible virtual machine in the Polkadot ecosystem, and only monitors and saves the ERC721 and ERC1155 compatible NFTs. And only considers connecting two substrate based blockchains."),(0,l.kt)("p",null,"In the future, we will apply for other grants based on the completion of this grant, including more chains, support for wasm based NFTs, and support for more types of NFTs, such as RMRK."),(0,l.kt)("h4",{id:"mockups"},"Mockups"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1608576/127953335-7b4684e0-e195-40d6-b336-9853f976b47f.png",alt:"nftexplorer"})),(0,l.kt)("h4",{id:"data-models"},"Data models"),(0,l.kt)("h5",{id:"collections"},"collections"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"id: The collection's unique identifier"),(0,l.kt)("li",{parentName:"ul"},"name: The collection's name"),(0,l.kt)("li",{parentName:"ul"},"symbol: An abbreviated name of this NFT. null if it is an erc1155 collection."),(0,l.kt)("li",{parentName:"ul"},"blockchain_id: Blockchain id"),(0,l.kt)("li",{parentName:"ul"},"contract_platform: Only support EVM compatible now, wasm will be supported"),(0,l.kt)("li",{parentName:"ul"},"contract_address: Contract address"),(0,l.kt)("li",{parentName:"ul"},"type: erc721 compatible | erc1155 compatible"),(0,l.kt)("li",{parentName:"ul"},"total_supply: A count of tokens tracked by this NFT"),(0,l.kt)("li",{parentName:"ul"},"explorer_url: A subscan(or other explorers) url to show its the normal info"),(0,l.kt)("li",{parentName:"ul"},"holders: Number of holders"),(0,l.kt)("li",{parentName:"ul"},"transfers: Number of transfers"),(0,l.kt)("li",{parentName:"ul"},"creator: The creator's address id")),(0,l.kt)("h5",{id:"tokens"},"tokens"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"id: The token unique identifier in the system"),(0,l.kt)("li",{parentName:"ul"},"id_in_contract: Token id or token type id(erc1155) in its nft contracts"),(0,l.kt)("li",{parentName:"ul"},"collection_id: the NFT id to which this token belongs"),(0,l.kt)("li",{parentName:"ul"},"unique: true | false, true if it is an erc721 compatible token, false if it is an erc1155 compatible token"),(0,l.kt)("li",{parentName:"ul"},"supply: 1 if erc721"),(0,l.kt)("li",{parentName:"ul"},"creator: The creator's address id"),(0,l.kt)("li",{parentName:"ul"},"owner: The current owner\u2018s address id"),(0,l.kt)("li",{parentName:"ul"},"title: Short title of this token"),(0,l.kt)("li",{parentName:"ul"},"name:  The name of this token"),(0,l.kt)("li",{parentName:"ul"},"description: Describe the token"),(0,l.kt)("li",{parentName:"ul"},"image: A URI pointing to a resource with mime-type image/*"),(0,l.kt)("li",{parentName:"ul"},"metadata_uri: A distinct Uniform Resource Identifier (URI) for a given token"),(0,l.kt)("li",{parentName:"ul"},"is_permanent: bool, a flag to show is this token has a permanent resource"),(0,l.kt)("li",{parentName:"ul"},"explorer_url: A subscan(or other explorers) url to show its the normal info"),(0,l.kt)("li",{parentName:"ul"},"transfers: Number of transfers")),(0,l.kt)("h5",{id:"addresses"},"addresses"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"id: The address unique identifier"),(0,l.kt)("li",{parentName:"ul"},"blockchain_id: Blockchain id"),(0,l.kt)("li",{parentName:"ul"},"important_level:")),(0,l.kt)("h5",{id:"blockchains"},"blockchains"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"id: The blockchain unique identifier"),(0,l.kt)("li",{parentName:"ul"},"title: Short title of this blockchain"),(0,l.kt)("li",{parentName:"ul"},"description: Describe the blockchain")),(0,l.kt)("h5",{id:"transfers"},"transfers"),(0,l.kt)("p",null,"if it is an erc1155 batch transfer, it will be split into many rows here."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"collection_id: the collection id"),(0,l.kt)("li",{parentName:"ul"},"token_id: the token id"),(0,l.kt)("li",{parentName:"ul"},"value: used if it is an erc1155 transfer"),(0,l.kt)("li",{parentName:"ul"},"from: from address"),(0,l.kt)("li",{parentName:"ul"},"to: to address"),(0,l.kt)("li",{parentName:"ul"},"created_at: Time when the transfer occurred"),(0,l.kt)("li",{parentName:"ul"},"txhash: txhash")),(0,l.kt)("h4",{id:"apis"},"Apis"),(0,l.kt)("h5",{id:"web-apis"},"Web APIs"),(0,l.kt)("p",null,"Because we don't want to make this application separate from the frontend and backend, there may be no well-defined APIs. Here are some APIs:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"GET /tokens/latest"),(0,l.kt)("p",{parentName:"li"},"Get the latest created NFT list")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"GET /transfers/latest"),(0,l.kt)("p",{parentName:"li"},"Get the latest transfers")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"GET /tokens/highest_transfered/1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"GET /tokens/highest_transfered/7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"GET /tokens"),(0,l.kt)("p",{parentName:"li"},"List all NFT tokens by condition"),(0,l.kt)("p",{parentName:"li"},"params:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"sort by:"),(0,l.kt)("li",{parentName:"ul"},"type:"),(0,l.kt)("li",{parentName:"ul"},"chain:"),(0,l.kt)("li",{parentName:"ul"},"page"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"GET /tokens/:id"),(0,l.kt)("p",{parentName:"li"},"Get token detail by id")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"GET /collections"),(0,l.kt)("p",{parentName:"li"},"List all NFT collections by condition"),(0,l.kt)("p",{parentName:"li"},"params:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"sort by:"),(0,l.kt)("li",{parentName:"ul"},"type:"),(0,l.kt)("li",{parentName:"ul"},"chain:"),(0,l.kt)("li",{parentName:"ul"},"page"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"GET /collections/:id/tokens"),(0,l.kt)("p",{parentName:"li"},"Get the tokens of a collection")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"GET /addresses/:address"),(0,l.kt)("p",{parentName:"li"},"Get the collections with tokens that belong to the address"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n {\n  "collection_id": 1,\n    "collection_name": "...",\n  "tokens": [\n   {\n    "token_id": 2,\n    "token_title": "...",\n    ...\n   },\n   ...\n  ]\n },\n ...\n]\n')))),(0,l.kt)("h4",{id:"technology-stack"},"Technology stack"),(0,l.kt)("h5",{id:"frontend"},"frontend"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hotwired.dev/"},"hotwired"),", it is tool set to help build a rich & fast first-load pages."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://getbootstrap.com/"},"bootstrap")," 5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ChainSafe/web3.js"},"https://github.com/ChainSafe/web3.js"))),(0,l.kt)("h5",{id:"backend"},"backend"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.ruby-lang.org/"},"ruby lang")," 2.7"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rubyonrails.org/"},"ruby on rails")," 6.1, web framework"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/itering/scale.rb"},"https://github.com/itering/scale.rb")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tomusdrw/rust-web3"},"https://github.com/tomusdrw/rust-web3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ChainSafe/web3.js"},"https://github.com/ChainSafe/web3.js")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/mperham/sidekiq"},"Sidekiq")," 6, for background job processing"),(0,l.kt)("li",{parentName:"ul"},"Web/Application server: Nginx & ",(0,l.kt)("a",{parentName:"li",href:"https://puma.io/"},"Puma"))),(0,l.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,l.kt)("p",null,"We believe that there will be various NFTs in the Polkadot / Kusama ecosystem in the future, so a unified nft explorer must be very important. Now many parachains will support the creation of NFTs. Users interested in NFTs will want to have a unified entry to view these NFTs."),(0,l.kt)("p",null,"We found that there is no unified and easy-to-use NFT browser in the current Polkadot ecosystem."),(0,l.kt)("p",null,"Potential users of the NFT browser include NFT collectors, NFT creators, NFT speculators and other applications."),(0,l.kt)("h3",{id:"similar-projects"},"Similar projects"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://nft.kodadot.xyz/rmrk/gallery"},"https://nft.kodadot.xyz/rmrk/gallery")),(0,l.kt)("p",null,"Kodadot gallery is a rmrk nfts gallery."),(0,l.kt)("p",null,"The difference between us is that the purpose and direction. Kodadot gallery is a part of the RMRK. Uniscan's current goal is to support NFTs of evm pallet. The Uniscan's final goal is to build an all-in-one NFT explorer for Polkadot & Kusama ecosystem with some data statistics for users to easily discover NFTs."),(0,l.kt)("h3",{id:"why-evm"},"Why evm?"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Evm is the most widely adopted virtual machine platform in the Polkadot/Kusama ecosystem, so there will be a lot of NFTs to be issued based on evm pallet."),(0,l.kt)("li",{parentName:"ol"},"There is not an NFT explorer support evm in the Polkadot/Kusama ecosystem."),(0,l.kt)("li",{parentName:"ol"},"It is difficult for the NFT explorers of the Ethereum ecosystem to cover the chains in the Polkadot ecosystem. And they are not permissionless.")),(0,l.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,l.kt)("h3",{id:"team-members"},"Team members"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Kyle Gu: product manager"),(0,l.kt)("li",{parentName:"ul"},"Tuminfei: architecture and blockchain consultant"),(0,l.kt)("li",{parentName:"ul"},"Aki Wu: full-stack developer")),(0,l.kt)("h3",{id:"contact"},"Contact"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Name:")," Aki Wu"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,l.kt)("a",{parentName:"li",href:"mailto:wuminzhe@gmail.com"},"wuminzhe@gmail.com"))),(0,l.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Registered Address:")," 3 FRASER STREET #05-25 DUO TOWER SINGAPORE (189352)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," UNI-ARTS FOUNDATION LTD.")),(0,l.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,l.kt)("p",null,"Uniscan is a team dedicated to create an unified NFT explorer. We have the ability to develop web, mobile, and blockchain applications. The team is familiar with Ethereum and Substrate development."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Aki Wu")," has many years of web and blockchain development experience, and is proficient in web development, and is familiar with ruby and rust languages. When working at ",(0,l.kt)("a",{parentName:"p",href:"https://www.itering.io/"},"Itering"),", he developed ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/itering/scale.rb"},"scale.rb"),", a Scale Codec library and Substrate Client implemented in Ruby language. ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/itering/scale.rb"},"scale.rb")," is a grant of the Web3 Foundation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kyle Gu")," is the product manager of Uniscan team.  He has worked in the blockchain industry for many years and is familiar with the operation and development of blockchain projects."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Tuminfei")," is the architecture and blockchain consultant of Uniscan team. He has rich experience in the field of software development, especially in blockchain. He has implemented many projects as a leader. He is familiar with the development of Ethereum and Substrate. He is also a major maintainer of the UniArts chain."),(0,l.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/wuminzhe"},"https://github.com/wuminzhe")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tuminfei"},"https://github.com/tuminfei"))),(0,l.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"I try to use rust to query the evm log by address and topic, this is part of the research."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/wuminzhe/evm-log-tracker"},"https://github.com/wuminzhe/evm-log-tracker")))),(0,l.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,l.kt)("h3",{id:"overview-1"},"Overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2.5 months"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  2 FTE"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Costs:")," 16,000 USD")),(0,l.kt)("h3",{id:"milestone-1--common-components"},"Milestone 1 \u2014 common components"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated duration:")," 1 month"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 8,000 USD")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"MIT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,l.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,l.kt)("strong",{parentName:"td"},"tutorial")," that run the code, which will show how the new functionality works.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,l.kt)("td",{parentName:"tr",align:null},"Docker"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,l.kt)("td",{parentName:"tr",align:null},"Article"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"A evm log tracking lib using ethereum filter"),(0,l.kt)("td",{parentName:"tr",align:null},"It is a lib used to track event logs of certain addresses and topics.",(0,l.kt)("br",null),"It use ethereum compatible json-rpc apis(",(0,l.kt)("a",{parentName:"td",href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newfilter"},"eth_newfilter"),", ",(0,l.kt)("a",{parentName:"td",href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs"},"eth_getlogs"),") to track the logs. ",(0,l.kt)("br",null),"It will be used to track the substrate ERC721 and ERC1155 NFTs. ",(0,l.kt)("br",null),"It will be implemented in rust programming language.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"A evm log tracking lib using substrate event"),(0,l.kt)("td",{parentName:"tr",align:null},"It is a lib used to track event logs of certain addresses and topics.",(0,l.kt)("br",null),"It use substrate events(",(0,l.kt)("a",{parentName:"td",href:"https://polkadot.js.org/docs/substrate/rpc/#getstoragekey-storagekey-at-blockhash-storagedata"},"getStorage"),") to track the logs. ",(0,l.kt)("br",null),"It will be used to track substrate ERC721 and ERC1155 NFTs.",(0,l.kt)("br",null),"It will be implemented in ruby programming language.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"A lib to identify the NFTs"),(0,l.kt)("td",{parentName:"tr",align:null},"This lib is used by the above tracking lib to identify which contracts are NFT contracts(ERC721, ERC1155). ",(0,l.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-165"},"ERC-165")," Standard Interface Detection is used.",(0,l.kt)("br",null),"It will be implemented in ruby programming language.")))),(0,l.kt)("h3",{id:"milestone-2--web-server"},"Milestone 2 \u2014 Web server"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1.5 month"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 8,000 USD")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"MIT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"1. We will provide both ",(0,l.kt)("strong",{parentName:"td"},"inline documentation")," of the code.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,l.kt)("td",{parentName:"tr",align:null},"Docker"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. ",(0,l.kt)("br",null),"And, It will be used to run the server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,l.kt)("td",{parentName:"tr",align:null},"Article"),(0,l.kt)("td",{parentName:"tr",align:null},"We will publish an medium english ",(0,l.kt)("strong",{parentName:"td"},"article")," that explains what was done as part of the grant and how to use it( How to use the three libraries in Milestone1, the description of the models in Milestone2).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Models"),(0,l.kt)("td",{parentName:"tr",align:null},"Implement the models described in ",(0,l.kt)("a",{parentName:"td",href:"https://www.notion.so/Data-models-Apis-2195fd63e1b14e46bb75d68a00c6ecaa"},"models"),".",(0,l.kt)("br",null),"It will be implemented in ruby programming language.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Views and Controllers"),(0,l.kt)("td",{parentName:"tr",align:null},"Implement the views and the related controllers described in ",(0,l.kt)("a",{parentName:"td",href:"https://www.notion.so/Mockup-3993bf6284d9416e86e77a21f9fc5014"},"mockups")," and ",(0,l.kt)("a",{parentName:"td",href:"https://www.notion.so/Data-models-Apis-2195fd63e1b14e46bb75d68a00c6ecaa"},"apis"),".",(0,l.kt)("br",null),"It will be implemented in ruby programming language.")))),(0,l.kt)("h2",{id:"future-plans"},"Future Plans"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Strengthen the display effect on the small screen"),(0,l.kt)("li",{parentName:"ul"},"Support the NFTs of Statemine"),(0,l.kt)("li",{parentName:"ul"},"Support more evm based chain"),(0,l.kt)("li",{parentName:"ul"},"Support wasm based NFTs"),(0,l.kt)("li",{parentName:"ul"},"Support more NFT types or specifications, such as RMRK"),(0,l.kt)("li",{parentName:"ul"},"Market data & view"),(0,l.kt)("li",{parentName:"ul"},"Record important addresses and level them"),(0,l.kt)("li",{parentName:"ul"},"Statistic chart, such as transfer frequency statistic"),(0,l.kt)("li",{parentName:"ul"},"Signup & Signin. The use can add nfts to the favorites.")))}d.isMDXComponent=!0}}]);