"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[39550],{86675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var s=n(74848),i=n(28453);const r={},a="Privacy enhancement for Polkadot-js extension",o={id:"applications/polkadot-js-extension-per-account-auth",title:"Privacy enhancement for Polkadot-js extension",description:"- Team Name: ChainSafe",source:"@site/applications/polkadot-js-extension-per-account-auth.md",sourceDirName:"applications",slug:"/applications/polkadot-js-extension-per-account-auth",permalink:"/applications/polkadot-js-extension-per-account-auth",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/polkadot-js-extension-per-account-auth.md",tags:[],version:"current",frontMatter:{}},l={},h=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 Privacy enhancement feature",id:"milestone-1-privacy-enhancement-feature",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"privacy-enhancement-for-polkadot-js-extension",children:"Privacy enhancement for Polkadot-js extension"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Team Name:"})," ChainSafe"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Payment Address:"})," 0x85D81Ab61Fe16CDcaeF2Ca556ED4577A51b9b07C (DAI)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsxs)(t.strong,{children:[(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 1"]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,s.jsxs)(t.p,{children:["In response to the RFP: ",(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/rfps/privacy-enhancement-polkadot-extension.md",children:"https://github.com/w3f/Grants-Program/blob/master/rfps/privacy-enhancement-polkadot-extension.md"})]}),"\n",(0,s.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:'An increasing number of websites require access to the Polkadot extension with a growing ecosystem. By allowing access to the extension, websites (naturally) can see the addresses that are contained in the extension. This imposes a big risk to privacy, because malicious actors could create lists about which addresses belong to one entity and, in the worst case, even link it to real-world identities (if at least one address is linked to an on-chain identity). A feature to prevent this is currently the "hide" button on single addresses, which prevent websites from seeing that address. However, it is currently cumbersome to handle that feature. The idea of this project is to extend on that feature and include a few QOL functionalities to make it easier for users to protect their privacy.'}),"\n",(0,s.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,s.jsxs)(t.p,{children:["The project details have been discussed with the Polkadot-js extension's main maintainer here: ",(0,s.jsx)(t.a,{href:"https://github.com/polkadot-js/extension/issues/1037",children:"https://github.com/polkadot-js/extension/issues/1037"})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The current authorization screen will be modified to not only let users consent to share their account details with a website requesting it, but also select which accounts will be visible to the website."}),"\n",(0,s.jsx)(t.li,{children:'The screeen will allow to select all accounts with one click, such as a "select all checkboxes".'}),"\n",(0,s.jsx)(t.li,{children:"The current website whitelist screen will be modify to allow users to change what accounts are shared with what website (currently it only allows the blank access to any visible account)."}),"\n",(0,s.jsx)(t.li,{children:"It was agreed in the above mentioned issue, that to have the highest privacy, no migration of the current website whitelist would be performed. As such, even if a user has granted access to their accounts to a website with the extension version X, they will be prompted in version Y to select what account they whish to share - with version X being the version of the extension prior to this project's merge, and version Y being the version containing the feature developped for this grant. This represents a little UX annoyance, but is worth the trouble considering the privacy enhancement it provides."}),"\n",(0,s.jsxs)(t.li,{children:["This project will contain a little UI changes as possible, as explained above, it will ",(0,s.jsx)(t.em,{children:"not"})," contain any group selection or creation. It will ",(0,s.jsx)(t.em,{children:"not"})," add any additional menu entry. so as to keep the maintenance as low as possible."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,s.jsx)(t.p,{children:"Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"This projects aims at enhancing any Polkadot-js extension's user privacy by not sharing all their accounts"}),"\n",(0,s.jsxs)(t.li,{children:["The project has been discussed with the main maintainer of the extension ",(0,s.jsx)(t.a,{href:"https://github.com/polkadot-js/extension/issues/1037",children:"here"}),", and got a soft approval, e.g it has high chances of being merged."]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,s.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Thibaut Sardan @tbaut"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Contact Name:"})," Thibaut Sardan"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Contact Email:"})," ",(0,s.jsx)(t.a,{href:"mailto:thibaut@chainsafe.io",children:"thibaut@chainsafe.io"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Website:"})," chainsafe.io"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Registered Address:"})," 251 Spadina Ave, Toronto, Ontario, M5T 2E2, Canada"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Registered Legal Entity:"})," ChainSafe Systems"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,s.jsxs)(t.p,{children:["Thibaut worked at Parity for more than 3 years, and has been a key contributor of the Polkadot-js extension, currenly the second largest human commiter afer Jaco, see ",(0,s.jsx)(t.a,{href:"https://github.com/polkadot-js/extension/graphs/contributors",children:"https://github.com/polkadot-js/extension/graphs/contributors"})]}),"\n",(0,s.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/ChainSafe",children:"https://github.com/ChainSafe"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/tbaut",children:"https://github.com/tbaut"})}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,s.jsxs)(t.p,{children:["An issue was created to validate the idea with the Extension's main maintainer: ",(0,s.jsx)(t.a,{href:"https://github.com/polkadot-js/extension/issues/1037",children:"https://github.com/polkadot-js/extension/issues/1037"})]}),"\n",(0,s.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,s.jsxs)(t.p,{children:["This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories ",(0,s.jsx)(t.a,{href:"../docs/grant_guidelines_per_category.md",children:"here"}),". Since these will be part of the agreement, it helps to describe ",(0,s.jsx)(t.em,{children:"the functionality we should expect in as much detail as possible"}),", plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected."]}),"\n",(0,s.jsx)(t.p,{children:"For each milestone,"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["make sure to include a specification of your software. ",(0,s.jsx)(t.em,{children:"Treat it as a contract"}),"; the level of detail must be enough to later verify that the software meets the specification."]}),"\n",(0,s.jsxs)(t.li,{children:["include the amount of funding requested ",(0,s.jsx)(t.em,{children:"per milestone"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"include documentation (tutorials, API specifications, architecture diagrams, whatever is appropriate) in each milestone. This ensures that the code can be widely used by the community."}),"\n",(0,s.jsx)(t.li,{children:"provide a test suite, comprising unit and integration tests, along with a guide on how to set up and run them."}),"\n",(0,s.jsx)(t.li,{children:"commit to providing Dockerfiles for the delivery of your project."}),"\n",(0,s.jsx)(t.li,{children:"indicate milestone duration as well as number of full-time employees working on each milestone."}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Deliverables 0a-0d are mandatory for all milestones"}),", and deliverable 0e at least for the last one. If you do not intend to deliver one of these, please state a reason in its specification (e.g. Milestone X is research oriented and as such there is no code to test)."]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u26a1"," If any of your deliverables is based on somebody else's work, make sure you work and publish ",(0,s.jsx)(t.em,{children:"under the terms of the license"})," of the respective project and that you ",(0,s.jsx)(t.strong,{children:"highlight this fact in your milestone documentation"})," and in the source code if applicable! ",(0,s.jsx)(t.strong,{children:"Teams that submit others' work without attributing it will be immediately terminated."})]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Total Estimated Duration:"})," 1 month between the start of the development and the merge of the PR"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  1 FTE"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Total Costs:"})," 10000"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"milestone-1-privacy-enhancement-feature",children:"Milestone 1 Privacy enhancement feature"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Estimated duration:"})," 1 month"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"FTE:"}),"  1"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Costs:"})," 10000 USD"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"This feature can only be delivered in 1 Milestone considering its scope and the user needs. E.g we cannot deliver the per website authorization selection without letting the user change this parameter later on."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(t.th,{children:"Deliverable"}),(0,s.jsx)(t.th,{children:"Specification"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,s.jsx)(t.td,{children:"License"}),(0,s.jsx)(t.td,{children:"Apache 2.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,s.jsx)(t.td,{children:"Documentation"}),(0,s.jsxs)(t.td,{children:["We will provide both ",(0,s.jsx)(t.strong,{children:"inline documentation"})," of the code and a basic ",(0,s.jsx)(t.strong,{children:"tutorial"})," that explains how a user can authorize a Dapp to get access to some accounts, and how a user can change these accesses."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,s.jsx)(t.td,{children:"Testing Guide"}),(0,s.jsx)(t.td,{children:"This part of the extension does not have tests, because it does not have many moving part, and writing integration tests would be a whole other project."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,s.jsx)(t.td,{children:"Docker"}),(0,s.jsx)(t.td,{children:"There is no Docker needed."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"0e."}),(0,s.jsx)(t.td,{children:"Article"}),(0,s.jsxs)(t.td,{children:["We will publish an ",(0,s.jsx)(t.strong,{children:"article"})," that explains the new functionnality included in this project and its privacy benefits for all polkadot-js extension's users."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,s.jsx)(t.td,{children:"new approval screen"}),(0,s.jsx)(t.td,{children:"Users will be able to see all their accounts, check which one they want to share with the website, and optionnaly select all accounts at once."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,s.jsx)(t.td,{children:"new approval back-end"}),(0,s.jsx)(t.td,{children:"The current system of whitelist will be retired and a new system of authorization per website per account will be implemented. Note that the current account visibility feature (with the eye) will be kept untouched."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,s.jsx)(t.td,{children:"website approval enhancement"}),(0,s.jsx)(t.td,{children:'The current parameter screen "Manage Website Access" will be enhanced where users can select per website what accounts are shared with each website. The account selection component will be re-used here so as to reduce maintenance hurdle.'})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,s.jsx)(t.p,{children:"Please include here"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Thibaut has been a regular comtributor of the extension in the past, he's been helping with the curration of the extension's issues as well, and this should continue in the future."}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"How did you hear about the Grants Program?"})," Github RFP and personal recommendation"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);