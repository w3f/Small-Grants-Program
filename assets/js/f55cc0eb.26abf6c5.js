"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[10360],{9968:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var n=s(74848),i=s(28453);const r={},o="OpenSquare off-chain voting for Polkadot ecosystem",a={id:"applications/OpenSquare-offchain-voting",title:"OpenSquare off-chain voting for Polkadot ecosystem",description:"Team Name:* OpenSquare",source:"@site/applications/OpenSquare-offchain-voting.md",sourceDirName:"applications",slug:"/applications/OpenSquare-offchain-voting",permalink:"/applications/OpenSquare-offchain-voting",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/OpenSquare-offchain-voting.md",tags:[],version:"current",frontMatter:{}},l={},h=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Future Plans",id:"future-plans",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"opensquare-off-chain-voting-for-polkadot-ecosystem",children:"OpenSquare off-chain voting for Polkadot ecosystem"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Team Name:"})," OpenSquare"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Payment Address:"})," 0x4905083abdD13bd95345A871701Fd0b08AbD46d1 (USDT)"]}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,n.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["In short, you can see this proposed platform as ",(0,n.jsx)(t.a,{href:"https://snapshot.org",children:"snapshot"})," in the polkadot ecosystem."]}),"\n",(0,n.jsx)(t.p,{children:"Though Polkadot/Kusama and most other Substrate based chains have on-chain governance and runtime can be easily upgraded with democracy. We think this platform still make sense with following reasons:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Compared to the formal on-chain votes, this platform provides not so formal off-chain signed polls which may help token holders and community members engage ",(0,n.jsx)(t.strong,{children:"more"})," in the ecosystem building."]}),"\n",(0,n.jsxs)(t.li,{children:["Compared to Polkassembly polls on post:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"users have to sign their votes and the signed data will be stored on IPFS"}),"\n",(0,n.jsx)(t.li,{children:"users don\u2019t have to do any registration."}),"\n",(0,n.jsx)(t.li,{children:"Different strategies can also be provided to calculate the final result, rather than simply count the vote numbers."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"Not all on-chain systems with assets on Substrate based chains can upgrade with democracy, like assets issued on Statemine, ERC-20 assets which may be issued on Moonriver, Karura, Shiden, etc."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,n.jsx)(t.p,{children:"Off-chain votes will be an important part of OpenSquare collaboration platform. Other planned collaboration forms include bounties, payment QA, short term employment, etc. Key components in this proposal include:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Predefined spaces where users can create proposals. It will definitely include Kusama and Polkadot, current para-chains with very high possibility."}),"\n",(0,n.jsx)(t.li,{children:"Proposal list in one space where users can view the closed or ongoing proposals."}),"\n",(0,n.jsx)(t.li,{children:"Proposal detail page where users can view the detail and the signed votes."}),"\n",(0,n.jsx)(t.li,{children:"A proposal discussion arena where users submit the signed messages and here we expect chaos."}),"\n",(0,n.jsx)(t.li,{children:"An authoring page where users can create proposals, and set the corresponding snapshot height, start and end date(height)."}),"\n",(0,n.jsx)(t.li,{children:"Archive nodes interaction with which we read users\u2019 balances on the corresponding snapshot block height."}),"\n",(0,n.jsx)(t.li,{children:"A backed server to interact with the node(Polkadot, Kusama, etc), store the organized data to DB, handle IPFS storage, provide APIs to get data."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/2264908/127607269-5d54f0b0-d8b8-48f1-9c7a-fc8c205bc645.png",alt:"os_grant_voting"})}),"\n",(0,n.jsx)(t.p,{children:"Some implementation notes:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"We have to call polkadot.js extension to sign the voting/poll, and some discussion messages."}),"\n",(0,n.jsx)(t.li,{children:"About voting power, since Polkadot/Kusama have proxy accounts, so we have to support proxy account vote on behalf of the original one."}),"\n",(0,n.jsxs)(t.li,{children:["In this proposal, we will implement ",(0,n.jsx)(t.code,{children:"balance of account"})," and ",(0,n.jsx)(t.code,{children:"quadratic balance of account"})," strategies for Polkadot and Kusama. It means if Alice's balance is 100 at one chain height, her voting power will be 100 and 10 by these 2 strategies."]}),"\n",(0,n.jsxs)(t.li,{children:["We have a partnership with ",(0,n.jsx)(t.a,{href:"https://crust.network/",children:"Crust"}),", and we may store data to IPFS through ",(0,n.jsx)(t.a,{href:"https://decoo.io/",children:"decoo"})," that crust granted."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Providing off-chain voting/polls to help token holders/community members engage more in ecosystem building."}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Flexible strategies help produce different voting/poll results which bring us different opinions from the on-chain tallying methods."}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://snapshot.org",children:"snapshot"})," is popular for Ethereum stack projects, mainly for governance, and currently we didn't see similar projects in Polkadot ecosystem."]}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,n.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Yongfeng Li(@wliyongfeng), Full stack developer"}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Chaojun Huang(@hyifeng), Full stack developer"}),"\n",(0,n.jsx)(t.li,{children:"Wentao Chen(@qiyisi), Full stack developer"}),"\n",(0,n.jsx)(t.li,{children:"Yizhou Xin(@YoshiyukiSakura), Full stack developer"}),"\n",(0,n.jsx)(t.li,{children:"Alcazar(@Popoulosss), Designer"}),"\n",(0,n.jsx)(t.li,{children:"Yaping Wu, BD and execution member"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["You can see our team with this ",(0,n.jsx)(t.a,{href:"https://www.opensquare.network/team/",children:"link"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Contact Name:"})," Yongfeng Li"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Contact Email:"})," ",(0,n.jsx)(t.a,{href:"mailto:wliyongfeng@gmail.com",children:"wliyongfeng@gmail.com"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Website:"})," ",(0,n.jsx)(t.a,{href:"https://www.opensquare.network",children:"https://www.opensquare.network"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Registered Address:"})," 3 FRASER STREET #05-25, DUO TOWER, SINGAPORE 189352"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Registered Legal Entity:"})," OPENSQUARE FOUNDATION LTD."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,n.jsx)(t.p,{children:"We have more than 3 years experience with Substrate/Polkadot related tech stack. Our recently developing products include:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://www.dotreasury.com/",children:"doTreasury"}),". We can now see it as a treasury business explorer but it aims to improve the treasury mechanism with retrospection."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://www.statescan.io",children:"Statescan"}),", a fungible asset explorer for Statemint implementation chains."]}),"\n",(0,n.jsxs)(t.li,{children:["OpenSquare bounties business built on substrate. We got a grant for this, and please check details ",(0,n.jsx)(t.a,{href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/open_square_network.md",children:"here"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"We are honored that either dotreasury or statescan get support from kusama or polkadot treasury, and our work about bounties is granted by w3f previously. We are confident to deliver a high quality and usable off-chain voting site."}),"\n",(0,n.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/opensquare-network/",children:"https://github.com/opensquare-network/"})}),"\n",(0,n.jsx)(t.p,{children:"Team members github accounts:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/wliyongfeng",children:"https://github.com/wliyongfeng"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/hyifeng",children:"https://github.com/hyifeng"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/qiyisi",children:"https://github.com/qiyisi"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/YoshiyukiSakura",children:"https://github.com/YoshiyukiSakura"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/Popoulosss",children:"https://github.com/Popoulosss"})}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,n.jsx)(t.p,{children:"Only 1 milestone in this proposal, while the main goal is to check the feasibility of off-chain voting in the polkadot ecosystem.\nWe will put more features like more plugins and strategies in future proposals, but after this proposal we will launch it and make it available to the community."}),"\n",(0,n.jsx)(t.p,{children:"Milestone 1 \u2014 Implement Basic off-chain voting/polls logic for Polkadot & Kusama"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Estimated duration: 2 weeks"}),"\n",(0,n.jsx)(t.li,{children:"FTE: 3"}),"\n",(0,n.jsx)(t.li,{children:"Costs: 8,000 USD"}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,n.jsx)(t.th,{children:"Deliverable"}),(0,n.jsx)(t.th,{children:"Specification"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,n.jsx)(t.td,{children:"License"}),(0,n.jsx)(t.td,{children:"Apache 2.0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,n.jsx)(t.td,{children:"Code"}),(0,n.jsxs)(t.td,{children:["Code will be open source, organized in one monorepo by ",(0,n.jsx)(t.a,{href:"https://classic.yarnpkg.com/en/docs/workspaces/",children:"yarn workspaces"}),", hosted on ",(0,n.jsx)(t.a,{href:"https://github.com/opensquare-network/",children:"OpenSquare github account"}),". It will be implemented in JavaScript, ",(0,n.jsx)(t.a,{href:"https://reactjs.org/",children:"React"})," for fronted, ",(0,n.jsx)(t.a,{href:"https://koajs.com/",children:"koa"})," for backend. Either fronted and backed will depend on polkadot.js, while fronted will also depend on ",(0,n.jsx)(t.a,{href:"https://github.com/polkadot-js/extension/tree/master/packages/extension-dapp",children:"extension-dapp"})," to interact with polkadot{.js} extension."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,n.jsx)(t.td,{children:"Documentation"}),(0,n.jsx)(t.td,{children:"We will provide a documentation site to explain necessary concepts, how this site work, and some user workflows."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,n.jsx)(t.td,{children:"Test cases"}),(0,n.jsx)(t.td,{children:"Core functions will be covered by unit tests to ensure functionality and robustness. They will could be verified in simple npm scripts."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,n.jsx)(t.td,{children:"User story 1"}),(0,n.jsx)(t.td,{children:"Alice opens OpenSquare.io(domain not finally decided) and she can see spaces at least include polkadot and kusama. She can see a closed and ongoing proposal list after clicking a space."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,n.jsx)(t.td,{children:"User story 2"}),(0,n.jsx)(t.td,{children:"Alice will see the proposal description, votes records and the final result or analysis/distribution on a closed proposal page."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,n.jsx)(t.td,{children:"User story 3"}),(0,n.jsx)(t.td,{children:"Alice votes yes on an ongoing proposal with polkadot{.js} extension, she can see her vote and re-vote to override the previous one. The reason that she changed her vote is that she checked the discussion and found some related news."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,n.jsx)(t.td,{children:"User story 4"}),(0,n.jsx)(t.td,{children:"Alice created a proposal with the title \u201cShould there be a specified UI for the society features?\u201d and some description, and there are 2 choices: yes and no. She chose the voter balance as the final result strategy, while she can also choose sqrt balance as the strategy. With a very high sumed balance vote yes to Alice\u2019s proposal, she now is very confident to seek more support to go on with following actions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"5."}),(0,n.jsx)(t.td,{children:"User story 5"}),(0,n.jsx)(t.td,{children:"Bob wanted to create a proposal at kusama height 1000, but failed, because his account has 0 balance. Anybody can create a proposal, but the minimum requirement is having at least 10 KSM at the target height."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Add more spaces, and in the future users may create their own space and customize it."}),"\n",(0,n.jsx)(t.li,{children:"Support plugins and more strategies so users can customize the process and voting result."}),"\n",(0,n.jsx)(t.li,{children:"Support voting by assets issued on statemine or erc-20 tokens."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var n=s(96540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);