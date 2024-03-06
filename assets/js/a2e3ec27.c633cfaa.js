"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[90503],{24742:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=i(74848),s=i(28453);const a={},r="Doter (A browser extension wallet for Polkadot)",o={id:"applications/Doter",title:"Doter (A browser extension wallet for Polkadot)",description:"- Team Name: ChainBridge network",source:"@site/applications/Doter.md",sourceDirName:"applications",slug:"/applications/Doter",permalink:"/applications/Doter",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/Doter.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Project Overview",id:"project-overview",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Functional structure",id:"functional-structure",level:4},{value:"Core components",id:"core-components",level:4},{value:"UI prototype",id:"ui-prototype",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Competitive product analysis",id:"competitive-product-analysis",level:4},{value:"The difference between Doter and polkadot.js extension",id:"the-difference-between-doter-and-polkadotjs-extension",level:4},{value:"Product direction and advantages",id:"product-direction-and-advantages",level:4},{value:"How to maintain the wallet",id:"how-to-maintain-the-wallet",level:4},{value:"Team",id:"team",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap",id:"development-roadmap",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone",id:"milestone",level:3},{value:"M1: Injection and signature",id:"m1-injection-and-signature",level:4},{value:"M2: Support kusama network",id:"m2-support-kusama-network",level:4},{value:"Community engagement",id:"community-engagement",level:2},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information",id:"additional-information",level:2}];function d(e){const n={a:"a",annotation:"annotation",br:"br",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",mtext:"mtext",p:"p",semantics:"semantics",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"doter-a-browser-extension-wallet-for-polkadot",children:"Doter (A browser extension wallet for Polkadot)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Team Name:"})," ChainBridge network"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"USDT Payment Payment Address:"})," 0x9bb9af8f2fd4487c88f1352fdd32a3ec2b6d28b6(ERC20)"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"project-overview",children:"Project Overview"}),"\n",(0,t.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"With the launch of Polkadot Parachain, the browser extension wallet, as an infrastructure, will play an important role in the interaction between Polkadot and parachain. However, the application market currently lacks an experience-friendly Polkadot browser extension wallet, so Doter came into being."}),"\n",(0,t.jsx)(n.p,{children:"We are committed to building Doter into a truly user-centric browser extension wallet, attracting users to participate in the Polkadot ecosystem by providing a clear and concise UI experience and rich on-chain governance functions."}),"\n",(0,t.jsxs)(n.p,{children:["Now, we can already ",(0,t.jsx)(n.a,{href:"https://chrome.google.com/webstore/detail/doter/abamjefkidngfegdjbmffdmbgjgpaobf",children:"install Doter"})," in the Google Chrome extension market."]}),"\n",(0,t.jsx)(n.h3,{id:"project-details",children:"Project Details"}),"\n",(0,t.jsx)(n.h4,{id:"functional-structure",children:"Functional structure"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://uploader.shimo.im/f/4XnoevPmkhO6ZSqT.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2MTkxMzk5MDEsImciOiJtNGtNTFpweGJuczYxQnFEIiwiaWF0IjoxNjE5MTM4MTAxLCJ1IjowfQ.gkX36NMe-V9je08Ofh2mFgSEzsJ_k-YnHBsaVxo2Lyo",alt:"img"})}),"\n",(0,t.jsx)(n.h4,{id:"core-components",children:"Core components"}),"\n",(0,t.jsx)(n.p,{children:"The Doter consists of several core components\uff1a"}),"\n",(0,t.jsx)(n.p,{children:"Account part: with the help of Doter, users can create account, retrieve account, and backup account conviently. Through these accounts, users can complete a series of core interactions with the Polkadot ecosystem."}),"\n",(0,t.jsx)(n.p,{children:"Transfer part: Users can easily select the transfer person, transfer amount and estimate the cost of miners. Friendly tips help users to operate easily."}),"\n",(0,t.jsx)(n.p,{children:"Query part: Doter provides many portals to facilitate users to query some common chain information, such as account balance, transfer records, community governance and so on."}),"\n",(0,t.jsx)(n.p,{children:"Setting part: with the help of this part, users can easily set the extension to make it closer to their habits."}),"\n",(0,t.jsx)(n.p,{children:"A lot of common community public packages are used to ensure the consistency and correctness of business logic in Doter, such as @polkadot/api, @polkadot/keyring, @polkadot/util etc. In the specific development process, we use a lot of encapsulated public packages based on web technology, so as to ensure a good experience in the browser."}),"\n",(0,t.jsx)(n.h4,{id:"ui-prototype",children:"UI prototype"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Create wallet\n",(0,t.jsx)(n.img,{src:"https://uploader.shimo.im/f/AvN1H55TIy37Mng1.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2MTc4NDMwNzMsImciOiJtNGtNTFpweGJuczYxQnFEIiwiaWF0IjoxNjE3ODQxMjczLCJ1Ijo1MjU3NjQ4MX0.-mNzWD92LrbP3ECC42XhCJrIxQqDVhepXo_KK3yXEgQ",alt:"img"})]}),"\n",(0,t.jsxs)(n.li,{children:["Import wallet",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.img,{src:"https://uploader.shimo.im/f/L2KdTUpEdaLUZFV7.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2MTc4NDMwNzMsImciOiJtNGtNTFpweGJuczYxQnFEIiwiaWF0IjoxNjE3ODQxMjczLCJ1Ijo1MjU3NjQ4MX0.-mNzWD92LrbP3ECC42XhCJrIxQqDVhepXo_KK3yXEgQ",alt:"img"})]}),"\n",(0,t.jsxs)(n.li,{children:["Transfer and receive\n",(0,t.jsx)(n.img,{src:"https://uploader.shimo.im/f/ls2kbqxw9OkhNEbz.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2MTc4NDMwNzMsImciOiJtNGtNTFpweGJuczYxQnFEIiwiaWF0IjoxNjE3ODQxMjczLCJ1Ijo1MjU3NjQ4MX0.-mNzWD92LrbP3ECC42XhCJrIxQqDVhepXo_KK3yXEgQ",alt:"img"})]}),"\n",(0,t.jsxs)(n.li,{children:["Settings\n",(0,t.jsx)(n.img,{src:"https://uploader.shimo.im/f/P23QRARBLwBGQSS0.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2MTc4NDMwNzMsImciOiJtNGtNTFpweGJuczYxQnFEIiwiaWF0IjoxNjE3ODQxMjczLCJ1Ijo1MjU3NjQ4MX0.-mNzWD92LrbP3ECC42XhCJrIxQqDVhepXo_KK3yXEgQ",alt:"img"})]}),"\n",(0,t.jsxs)(n.li,{children:["Manage\n",(0,t.jsx)(n.img,{src:"https://uploader.shimo.im/f/1YOSQkFmPIg8tUGl.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2MTc4NDMwNzMsImciOiJtNGtNTFpweGJuczYxQnFEIiwiaWF0IjoxNjE3ODQxMjczLCJ1Ijo1MjU3NjQ4MX0.-mNzWD92LrbP3ECC42XhCJrIxQqDVhepXo_KK3yXEgQ",alt:"img"})]}),"\n",(0,t.jsxs)(n.li,{children:["Transaction records, etc.\n",(0,t.jsx)(n.img,{src:"https://uploader.shimo.im/f/q1gFLzRqrYdAvnxO.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2MTc4NDMwNzMsImciOiJtNGtNTFpweGJuczYxQnFEIiwiaWF0IjoxNjE3ODQxMjczLCJ1Ijo1MjU3NjQ4MX0.-mNzWD92LrbP3ECC42XhCJrIxQqDVhepXo_KK3yXEgQ",alt:"img"})]}),"\n",(0,t.jsxs)(n.li,{children:["Governance",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.img,{src:"https://uploader.shimo.im/f/ppL6L43PPaQuic1g.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2MTc4NDMwNzMsImciOiJtNGtNTFpweGJuczYxQnFEIiwiaWF0IjoxNjE3ODQxMjczLCJ1Ijo1MjU3NjQ4MX0.-mNzWD92LrbP3ECC42XhCJrIxQqDVhepXo_KK3yXEgQ",alt:"img"})]}),"\n",(0,t.jsxs)(n.li,{children:["Signature and injection\n",(0,t.jsx)(n.img,{src:"https://uploader.shimo.im/f/lvYJi1DQ4ASFCcIF.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2MTc4NDMwNzMsImciOiJtNGtNTFpweGJuczYxQnFEIiwiaWF0IjoxNjE3ODQxMjczLCJ1Ijo1MjU3NjQ4MX0.-mNzWD92LrbP3ECC42XhCJrIxQqDVhepXo_KK3yXEgQ",alt:"img"})]}),"\n",(0,t.jsxs)(n.li,{children:["Staking\n",(0,t.jsx)(n.img,{src:"https://uploader.shimo.im/f/MDALPQL6MM0DjPcg.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2MTc4NDMwNzMsImciOiJtNGtNTFpweGJuczYxQnFEIiwiaWF0IjoxNjE3ODQxMjczLCJ1Ijo1MjU3NjQ4MX0.-mNzWD92LrbP3ECC42XhCJrIxQqDVhepXo_KK3yXEgQ",alt:"img"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,t.jsx)(n.h4,{id:"competitive-product-analysis",children:"Competitive product analysis"}),"\n",(0,t.jsx)(n.p,{children:"Polkadot's browser extension wallet, the currently known competitor is Enzyme."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"From the perspective of feature richness, the functional modules achieved by Doter's first milestone have exceeded Enzyme (Recently, we have completed the first milestone), and more functional modules that will serve the Polkadot ecology will be implemented in the plan."}),"\n",(0,t.jsx)(n.li,{children:"From the perspective of UI experience, Doter is a real user-centric wallet. A clear and concise UI experience is more attractive to users, and Doter has achieved Chinese and English language switching, which has a wider potential user group."}),"\n",(0,t.jsx)(n.li,{children:"From the perspective of github maintenance frequency, Enzyme has not been maintained for more than 1 year. In contrast, Doter has a clear development roadmap and the code base is constantly updated."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"the-difference-between-doter-and-polkadotjs-extension",children:"The difference between Doter and polkadot.js extension"}),"\n",(0,t.jsx)(n.p,{children:"Polkadot.js extension is an official account management tool, Compared with polkadot.js extension, Doter's positioning is not only an account management tool.\nDoter will also implements a series of common functions in Polkadot ecology, such as Transfer and receive, query transaction records, wallet management, easy-to-operate on-chain governance modules, etc. This means that doter can not only interact well with other dapps, but also independently complete the functions mentioned above, providing users with a one-stop experience, which polkadot.js extension does not have."}),"\n",(0,t.jsx)(n.p,{children:"In addition, Doter will also provide a completely user-centric UI experience to make it easier for users to participate in the Polkadot ecosystem."}),"\n",(0,t.jsx)(n.h4,{id:"product-direction-and-advantages",children:"Product direction and advantages"}),"\n",(0,t.jsx)(n.p,{children:"Analogous to MetaMask, in the current industry environment, browser extension wallets are more convenient to interact with DApp than mobile wallets. Doter is positioned as a browser extension wallet and has a first-mover advantage in the product direction."}),"\n",(0,t.jsx)(n.p,{children:"At the same time, most of the current mobile wallets connected to Polkadot are not dedicated to the Polkadot ecosystem, and there is no in-depth development based on Polkadot. Doter focuses on the Polkadot ecosystem and enables more users to participate in the Polkadot ecosystem through customized and truly friendly interactive experience."}),"\n",(0,t.jsx)(n.h4,{id:"how-to-maintain-the-wallet",children:"How to maintain the wallet"}),"\n",(0,t.jsx)(n.p,{children:"In the near future, Our team will have someone in charge of maintaining the Doter, Update at least once a month to fix bugs or improve the experience\uff0cto making Doter as close as possible to mature browser extension in other ecosystems(such as Ethereum)"}),"\n",(0,t.jsx)(n.p,{children:"Simultaneously, we will build our own community as soon as possible. We believe that a solid community is the foundation for Doter to seize the market, Through word of mouth from seed users, we will accumulate the first batch of users. After completing all the milestones, we will place advertisements in a number of blockchain media, and rapidly expand the number of users through advertising. Secondly, we will embed a frequently used DApp in the wallet and cultivate user habits through this, so that Doter will gradually become the portal of the Polkadot ecosystem."}),"\n",(0,t.jsx)(n.p,{children:"In summary, we have appropriate market timing, clear product direction, reliable development progress, friendly UI experience, detailed operation planning, and the most important thing is that we have a reliable team, We have 3 Years of work experience in NASDAQ listed company, we have the ability to make Doter a competitive product."}),"\n",(0,t.jsx)(n.h2,{id:"team",children:"Team"}),"\n",(0,t.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Guan Yu"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Gao Jianli"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Contact Name:"})," Gao Jianli"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Contact Email:"})," ",(0,t.jsx)(n.a,{href:"mailto:dianluyuanli@foxmail.com",children:"dianluyuanli@foxmail.com"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Website:"})," Doter is currently maintained on ",(0,t.jsx)(n.a,{href:"https://github.com/ChainBridgeNetworkTeam/Doter",children:"Github"}),", no website has been created yet"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,t.jsxs)(n.p,{children:["Doter is maintained by the ",(0,t.jsx)(n.a,{href:"https://github.com/ChainBridgeNetworkTeam",children:"ChainBridgeNetworkTeam"}),", and no company entity has been created yet, The following is our communication information."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Mailing address: 504, Building 16, Lane 270, Maotai Road, Changning District, Shanghai, China"}),"\n",(0,t.jsxs)(n.li,{children:["E-mail\uff1a",(0,t.jsx)(n.a,{href:"mailto:dianluyuanli@foxmail.com",children:"dianluyuanli@foxmail.com"}),", ",(0,t.jsx)(n.a,{href:"mailto:muskshi@foxmail.com",children:"muskshi@foxmail.com"})]}),"\n",(0,t.jsx)(n.li,{children:"Twitter\uff1aChainBridgeNet1"}),"\n",(0,t.jsx)(n.li,{children:"WeChat Official Accounts\uff1aChainBridgeNetwork"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Guan Yu",(0,t.jsx)(n.br,{}),"\n","He participated in Polkadot's official crowdfunding campaign in 2017 and has continued to be active in the Polkadot community ever since.\nFrom July 2018 to the present, he has been serving as a product manager for Pinduoduo Inc.(listed on NASDAQ), responsible for building core business modules such as CPS. He has 3 years of experience in large-scale Internet companies, is familiar with the development and maintenance of large-scale products, and is good at leading the business from 0 to 1 and achieving rapid growth."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Gao Jianli",(0,t.jsx)(n.br,{}),"\n","He joined Pinduoduo Inc.\uff08listed on NASDAQ\uff09in 2018 and became a full-time front-end development engineer. Responsible for the maintenance of the website promotion page, maintenance and development of the weChat applet architecture Project deployment and launch, development of productivity tools.\nHe has three years of development experience, is familiar with project deployment and front-end technology stack, and is keen on Polkadot ecological technology trends."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Personal Code Repos\uff1a",(0,t.jsx)(n.a,{href:"https://github.com/dianluyuanli-wp",children:"https://github.com/dianluyuanli-wp"})]}),"\n",(0,t.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/ChainBridgeNetworkTeam/Doter",children:"https://github.com/ChainBridgeNetworkTeam/Doter"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"team-linkedin-profiles",children:"Team LinkedIn Profiles"}),"\n",(0,t.jsxs)(n.p,{children:["Guan Yu\uff1a",(0,t.jsx)(n.a,{href:"https://www.linkedin.com/in/yu-guan-482624155/",children:"https://www.linkedin.com/in/yu-guan-482624155/"}),(0,t.jsx)(n.br,{}),"\n","Gao Jianli\uff1a",(0,t.jsx)(n.a,{href:"https://www.linkedin.com/in/jianli-gao-6785a1140/",children:"https://www.linkedin.com/in/jianli-gao-6785a1140/"})]}),"\n",(0,t.jsx)(n.h2,{id:"development-roadmap",children:"Development Roadmap"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["In particular, we have completed the basic module of the Doter wallet, and the extension program has been put on the Google extension market. You can already ",(0,t.jsx)(n.a,{href:"https://chrome.google.com/webstore/detail/doter/abamjefkidngfegdjbmffdmbgjgpaobf",children:"install"})," and use Doter."]})}),"\n",(0,t.jsx)(n.p,{children:"The following is a list of functions that have been implemented"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create and import wallets on Polkadot"}),"\n",(0,t.jsx)(n.li,{children:"Transfer and receive on Polkadot"}),"\n",(0,t.jsx)(n.li,{children:"Backup wallet on Polkadot"}),"\n",(0,t.jsx)(n.li,{children:"Query transaction records on Polkadot"}),"\n",(0,t.jsx)(n.li,{children:"Referendum on the chain on Polkadot"}),"\n",(0,t.jsx)(n.li,{children:"Switch multiple wallets on Polkadot"}),"\n",(0,t.jsx)(n.li,{children:"Manage address book on Polkadot"}),"\n",(0,t.jsx)(n.li,{children:"Switch language on Polkadot"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Total Estimated Duration: 2 month"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Full-time equivalent (FTE): 34"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Total Costs: $16,150"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"milestone",children:"Milestone"}),"\n",(0,t.jsx)(n.h4,{id:"m1-injection-and-signature",children:"M1: Injection and signature"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Estimated Duration: 1 month"}),"\n",(0,t.jsx)(n.li,{children:"FTE: 14"}),"\n",(0,t.jsxs)(n.li,{children:["Costs: ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mn,{children:"6"}),(0,t.jsx)(n.mo,{separator:"true",children:","}),(0,t.jsx)(n.mn,{children:"650"}),(0,t.jsx)(n.mtext,{children:"\uff08"}),(0,t.jsx)(n.mn,{children:"2"}),(0,t.jsx)(n.mi,{children:"c"}),(0,t.jsx)(n.mi,{children:"o"}),(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mi,{children:"t"}),(0,t.jsx)(n.mi,{children:"r"}),(0,t.jsx)(n.mi,{children:"i"}),(0,t.jsx)(n.mi,{children:"b"}),(0,t.jsx)(n.mi,{children:"u"}),(0,t.jsx)(n.mi,{children:"t"}),(0,t.jsx)(n.mi,{children:"o"}),(0,t.jsx)(n.mi,{children:"r"}),(0,t.jsx)(n.mi,{children:"s"}),(0,t.jsx)(n.mo,{children:"\u2217"}),(0,t.jsx)(n.mn,{children:"7"}),(0,t.jsx)(n.mi,{children:"F"}),(0,t.jsx)(n.mi,{children:"T"}),(0,t.jsx)(n.mi,{children:"E"}),(0,t.jsx)(n.mo,{children:"\u2217"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"6,650\uff082 contributors *7 FTE* "})]})})}),(0,t.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(n.span,{className:"mord",children:"6"}),(0,t.jsx)(n.span,{className:"mpunct",children:","}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(n.span,{className:"mord",children:"650"}),(0,t.jsx)(n.span,{className:"mord cjk_fallback",children:"\uff08"}),(0,t.jsx)(n.span,{className:"mord",children:"2"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"co"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"ib"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"u"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"ors"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(n.span,{className:"mbin",children:"\u2217"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(n.span,{className:"mord",children:"7"}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"FTE"}),(0,t.jsx)(n.span,{className:"mord",children:"\u2217"})]})]})]}),"475/FTE\uff09"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"right"},children:"Number"}),(0,t.jsx)(n.th,{children:"Deliverable"}),(0,t.jsx)(n.th,{children:"Specification"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"0a."}),(0,t.jsx)(n.td,{children:"License"}),(0,t.jsx)(n.td,{children:"Apache 2.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"0b."}),(0,t.jsx)(n.td,{children:"Description"}),(0,t.jsx)(n.td,{children:"We will implement wallet injection and transaction signature on Polkadot, and optimize the UI experience of existing funcctions."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"0c."}),(0,t.jsx)(n.td,{children:"Delivery time"}),(0,t.jsx)(n.td,{children:"Mid May"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"0d."}),(0,t.jsx)(n.td,{children:"How to verify"}),(0,t.jsx)(n.td,{children:"It is expected that in Mid May, you can install the latest version of Doter in the Google Extended Market and verify the functional modules promised in the milestone. In addition, you can also verify through integration tests, We will provide yarn commond for anyone who want to run the unit test scripts and check the results."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"1."}),(0,t.jsx)(n.td,{children:"Core component"}),(0,t.jsxs)(n.td,{children:["* Wallet injection on Polkadot",(0,t.jsx)("br",{})," * Transaction signature on Polkadot",(0,t.jsx)("br",{})," * Optimize account creation, transfer, account management and other functions to improve user experience"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"}}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"m2-support-kusama-network",children:"M2: Support kusama network"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Estimated Duration: 1 month"}),"\n",(0,t.jsx)(n.li,{children:"FTE: 20"}),"\n",(0,t.jsxs)(n.li,{children:["Costs: ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mn,{children:"9"}),(0,t.jsx)(n.mo,{separator:"true",children:","}),(0,t.jsx)(n.mn,{children:"500"}),(0,t.jsx)(n.mtext,{children:"\uff08"}),(0,t.jsx)(n.mn,{children:"2"}),(0,t.jsx)(n.mi,{children:"c"}),(0,t.jsx)(n.mi,{children:"o"}),(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mi,{children:"t"}),(0,t.jsx)(n.mi,{children:"r"}),(0,t.jsx)(n.mi,{children:"i"}),(0,t.jsx)(n.mi,{children:"b"}),(0,t.jsx)(n.mi,{children:"u"}),(0,t.jsx)(n.mi,{children:"t"}),(0,t.jsx)(n.mi,{children:"o"}),(0,t.jsx)(n.mi,{children:"r"}),(0,t.jsx)(n.mi,{children:"s"}),(0,t.jsx)(n.mo,{children:"\u2217"}),(0,t.jsx)(n.mn,{children:"10"}),(0,t.jsx)(n.mi,{children:"F"}),(0,t.jsx)(n.mi,{children:"T"}),(0,t.jsx)(n.mi,{children:"E"}),(0,t.jsx)(n.mo,{children:"\u2217"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"9,500\uff082 contributors *10 FTE* "})]})})}),(0,t.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(n.span,{className:"mord",children:"9"}),(0,t.jsx)(n.span,{className:"mpunct",children:","}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(n.span,{className:"mord",children:"500"}),(0,t.jsx)(n.span,{className:"mord cjk_fallback",children:"\uff08"}),(0,t.jsx)(n.span,{className:"mord",children:"2"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"co"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"ib"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"u"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"ors"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(n.span,{className:"mbin",children:"\u2217"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(n.span,{className:"mord",children:"10"}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"FTE"}),(0,t.jsx)(n.span,{className:"mord",children:"\u2217"})]})]})]}),"475/FTE\uff09"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"right"},children:"Number"}),(0,t.jsx)(n.th,{children:"Deliverable"}),(0,t.jsx)(n.th,{children:"Specification"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"0a."}),(0,t.jsx)(n.td,{children:"License"}),(0,t.jsx)(n.td,{children:"Apache 2.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"0b."}),(0,t.jsx)(n.td,{children:"Description"}),(0,t.jsx)(n.td,{children:"We will support all functional modules that have been implemented on Polkadot."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"0c."}),(0,t.jsx)(n.td,{children:"Delivery time"}),(0,t.jsx)(n.td,{children:"Mid June"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"0d."}),(0,t.jsx)(n.td,{children:"How to verify"}),(0,t.jsx)(n.td,{children:"It is expected that in mid June, you can install the latest version of Doter in the Google Extended Market and verify the functional modules promised in the milestone. In addition, you can also verify through integration tests, We will provide yarn commond for anyone who want to run the unit test scripts and check the results."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"1."}),(0,t.jsx)(n.td,{children:"Core component"}),(0,t.jsxs)(n.td,{children:["* Create and import wallets on Kusama",(0,t.jsx)("br",{})," * Transfer and receive on Kusama",(0,t.jsx)("br",{})," * Backup wallet on Kusama",(0,t.jsx)("br",{})," * Query transaction records on Kusama",(0,t.jsx)("br",{})," * Referendum on the chain on Kusama",(0,t.jsx)("br",{})," * Switch multiple wallets on Kusama",(0,t.jsx)("br",{})," * Manage address book on Kusama",(0,t.jsx)("br",{})," * Switch language on Kusama",(0,t.jsx)("br",{})," * wallet injection and signature on Kusama"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"}}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"community-engagement",children:"Community engagement"}),"\n",(0,t.jsxs)(n.p,{children:["This is a tutorial posted on medium\uff1a",(0,t.jsx)(n.a,{href:"https://chainbridgenetwork.medium.com/polkadots-browser-extension-wallet-doter-ac8cd91a5bf3",children:"https://chainbridgenetwork.medium.com/polkadots-browser-extension-wallet-doter-ac8cd91a5bf3"})]}),"\n",(0,t.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,t.jsx)(n.p,{children:"Doter\u2019s development team is ChainBridgeNetworkTeam. As the name suggests, our long-term vision is to be a bridge between different blockchains. We will use trust-free cross-chain asset custody and on-chain mapping to enable digital assets on different chains to be interoperable."}),"\n",(0,t.jsx)(n.p,{children:"Doter is our first product. We believe that with the launch of the parachain, Doter will act as an important interaction bridge in the Polkadot ecosystem. After completing the development of 2 milestones, we will design Doter version 2.0. In version 2.0, users can easily manage private digital assets without memorizing mnemonic words. This will be achieved through an innovative technology. We believe in version 2.0 Doter will greatly reduce the threshold for users to use wallets, making Doter a real bridge between Polkadot and ordinary users."}),"\n",(0,t.jsx)(n.h2,{id:"additional-information",children:"Additional Information"}),"\n",(0,t.jsx)(n.p,{children:"ChainBridgeNetworkTeam has just been established for two months, but we have completed the basic module of Doter, and have designed the other two milestones. In the next two months, we will deliver all pre-designed functional modules."}),"\n",(0,t.jsx)(n.p,{children:"So far, we have developed at our own expense, but in order to have sufficient funds to support the realization of our long-term vision, we will try to obtain the support of investment institutions."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(96540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);