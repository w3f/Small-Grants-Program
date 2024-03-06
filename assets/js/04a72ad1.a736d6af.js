"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[50689],{67980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=n(74848),i=n(28453);const o={},r="Privacy Enhancement for Polkadot Extension",a={id:"docs/RFPs/privacy-enhancement-polkadot-extension",title:"Privacy Enhancement for Polkadot Extension",description:"This Request for Proposals is closed, meaning we are not looking for any more proposals on this topic at the moment.",source:"@site/docs/RFPs/privacy-enhancement-polkadot-extension.md",sourceDirName:"docs/RFPs",slug:"/docs/RFPs/privacy-enhancement-polkadot-extension",permalink:"/docs/RFPs/privacy-enhancement-polkadot-extension",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/privacy-enhancement-polkadot-extension.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Polkadot Protocol Conformance Tests",permalink:"/docs/RFPs/polkadot-protocol_conformance_tests"},next:{title:"High-availability validator setup",permalink:"/docs/RFPs/raft-validators"}},l={},c=[{value:"Project Description \ud83d\udcc4",id:"project-description-page_facing_up",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-nut_and_bolt",level:2},{value:"Milestone 1",id:"milestone-1",level:3}];function d(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"privacy-enhancement-for-polkadot-extension",children:"Privacy Enhancement for Polkadot Extension"}),"\n",(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsxs)(t.p,{children:["This Request for Proposals is ",(0,s.jsx)(t.em,{children:"closed"}),", meaning we are not looking for any more proposals on this topic at the moment."]})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Status:"})," ",(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/applications/polkadot-js-extension-per-account-auth.md",children:"Implemented"}),". GH ",(0,s.jsx)(t.a,{href:"https://github.com/polkadot-js/extension/issues/1037",children:"issue"})," has been closed."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Proposer:"})," jonasW3F"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Projects you think this work could be useful for"})," [optional]: ",(0,s.jsx)(t.a,{href:"https://github.com/polkadot-js/extension",children:"https://github.com/polkadot-js/extension"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Teams/People that could deliver the RFP:"})," @celrisen"]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"project-description-page_facing_up",children:["Project Description ","\ud83d\udcc4"]}),"\n",(0,s.jsx)(t.p,{children:'An increasing number of websites require access to the Polkadot extension with a growing ecosystem. By allowing access to the extension, websites (naturally) can see the addresses that are contained in the extension. This imposes a big risk to privacy, because malicious actors could create lists about which addresses belong to one entity and, in the worst case, even link it to real-world identities (if at least one address is linked to an on-chain identity). A feature to prevent this is currently the "hide" button on single addresses, which prevent websites from seeing that address. However, it is currently cumbersome to handle that feature. The idea of this RFP is to extend on that feature and include a few QOL functionalities to make it easier for users to protect their privacy.'}),"\n",(0,s.jsxs)(t.h2,{id:"deliverables-nut_and_bolt",children:["Deliverables ","\ud83d\udd29"]}),"\n",(0,s.jsxs)(t.p,{children:["As outlined ",(0,s.jsx)(t.a,{href:"https://github.com/polkadot-js/extension/issues/893",children:"here"}),", the deliverable should include five features to the extension and a successful completion of this RFP includes a merge of a PR to the main polkadot-js/extension repo. ",(0,s.jsx)(t.strong,{children:"It is of great importance to generate clean code that follows best-practices"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Total Estimated Duration:"})," 1 month"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Full-time equivalent (FTE):"}),"  Amount of time (in days) required for a single person to complete this project (",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Full-time_equivalent",children:"see"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Total Costs:"})," $10'000."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"milestone-1",children:"Milestone 1"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Estimated Duration:"})," 1 month"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"FTE:"}),"  Amount of time (in days) required for a single person to complete this milestone"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Costs:"})," $10'000"]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Number"}),(0,s.jsx)(t.th,{children:"Deliverable"}),(0,s.jsx)(t.th,{children:"Specification"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1."}),(0,s.jsx)(t.td,{children:'"Hide all"'}),(0,s.jsx)(t.td,{children:"A global button that hides/un-hides all addresses"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2."}),(0,s.jsx)(t.td,{children:'"View-Groups"'}),(0,s.jsx)(t.td,{children:'Create and name groups which a user can organize their accounts to. For example, a "polkadot-js" group could unhide all accounts, while a "Parachain X" group only unhides those accounts a user knows that they have those parachain tokens on.'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"3."}),(0,s.jsx)(t.td,{children:'"Privacy Mode"'}),(0,s.jsx)(t.td,{children:'A setting that automatically changes the extension to a specific view group (which could be "hide all").'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"4."}),(0,s.jsx)(t.td,{children:'"Hide from Extension"'}),(0,s.jsx)(t.td,{children:"A feature that lets users hide addresses in the extension itself. This is useful for doing demos or presenting the screen. Those accounts are listed in a special tab and can be unhidden from there."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"5."}),(0,s.jsx)(t.td,{children:'"Link View-Groups to URLs"'}),(0,s.jsxs)(t.td,{children:["The extension already features an access control to specific URLs. To add on that, the extension could automatically switch to a defined view-group when entering an URL. Building on that, upon ",(0,s.jsx)(t.em,{children:"first"})," authorization of a website, the extension could ask which view-groups to add it to or offer to create a new one."]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);