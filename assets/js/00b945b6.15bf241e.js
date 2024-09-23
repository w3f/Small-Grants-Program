"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[11425],{36204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(74848),o=n(28453);const s={},a="Wallet Aggregator Library",i={id:"docs/RFPs/wallet-aggregator-library",title:"Wallet Aggregator Library",description:"This Request for Proposals is closed, meaning we are not looking for any more proposals on this topic at the moment.",source:"@site/docs/RFPs/wallet-aggregator-library.md",sourceDirName:"docs/RFPs",slug:"/docs/RFPs/wallet-aggregator-library",permalink:"/docs/RFPs/wallet-aggregator-library",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/wallet-aggregator-library.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"polkadot-validator-setup maintenance",permalink:"/docs/RFPs/validator-setup-maintenance"},next:{title:"XCM library & tools",permalink:"/docs/RFPs/xcm-tool"}},l={},c=[{value:"Project Description \ud83d\udcc4",id:"project-description-page_facing_up",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-nut_and_bolt",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"wallet-aggregator-library",children:"Wallet Aggregator Library"})}),"\n",(0,r.jsx)(t.admonition,{type:"danger",children:(0,r.jsxs)(t.p,{children:["This Request for Proposals is ",(0,r.jsx)(t.em,{children:"closed"}),", meaning we are not looking for any more proposals on this topic at the moment."]})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Status:"})," ",(0,r.jsx)(t.a,{href:"https://github.com/Koniverse/SubConnect",children:"Implemented: SubConnect"}),", ",(0,r.jsx)(t.a,{href:"https://github.com/TalismanSociety/talisman-connect",children:"Implemented: talisman-connect"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Proposer:"})," ",(0,r.jsx)(t.a,{href:"https://github.com/0xCaso",children:"Matteo Casonato"})]}),"\n"]}),"\n",(0,r.jsxs)(t.h2,{id:"project-description-page_facing_up",children:["Project Description ","\ud83d\udcc4"]}),"\n",(0,r.jsxs)(t.p,{children:["Users of Polkadot and Substrate-based projects need to connect their wallet to a front-end when using a dApp. At the moment, there are ",(0,r.jsx)(t.a,{href:"https://wiki.polkadot.network/docs/build-wallets",children:"several wallets and browser extensions"})," that can be used (Polkadot-JS, Talisman, Fearless, just to name a few). However, it's common that the frontends don't support all of them, and the users need to install a new wallet or browser extension to connect to the frontend."]}),"\n",(0,r.jsxs)(t.p,{children:["This project aims to create a ",(0,r.jsx)(t.strong,{children:"React library"})," that allows users to connect with any wallet or browser extension to the frontends that adopts it. This way, the users can use the wallet they prefer, and the frontends can support all of them without the need to implement the connection logic for each wallet, just integrating one library (making life easier for developers). Though we would prefer a React library, we would also consider implementations for other libraries as well."]}),"\n",(0,r.jsxs)(t.h2,{id:"deliverables-nut_and_bolt",children:["Deliverables ","\ud83d\udd29"]}),"\n",(0,r.jsx)(t.p,{children:"The following items could be the initial deliverables of the project. Of course, improvements and additions are more than welcome."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Initial ",(0,r.jsx)(t.strong,{children:"research"}),":","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["study from the ",(0,r.jsx)(t.a,{href:"https://www.rainbowkit.com/docs/introduction",children:"RainbowKit"})," library (which is the same thing, already developed for EVM chains);"]}),"\n",(0,r.jsx)(t.li,{children:"understand which wallets/extensions can be integrated, what is needed to connect to them, etc.;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Library ",(0,r.jsx)(t.strong,{children:"development"}),":","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"various connectors for each wallet;"}),"\n",(0,r.jsx)(t.li,{children:"UI components (connect button, account and chain selector, etc.);"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["UI/UX (for both users/devs) ",(0,r.jsx)(t.strong,{children:"improvement"}),":","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["addition of a tool that scaffolds a new project with the wallet connection library (firable, for example, with ",(0,r.jsx)(t.code,{children:"npm init @user/wallet-aggregator@latest"}),");"]}),"\n",(0,r.jsxs)(t.li,{children:["selective account disclosure implementation (view ",(0,r.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/privacy-enhancement-polkadot-extension.md",children:"this"})," RFP)."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(96540);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);