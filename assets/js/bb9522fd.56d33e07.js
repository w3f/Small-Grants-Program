"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[74163],{11646:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=t(74848),s=t(28453);const a={},r="Grant Management Web Application",o={id:"docs/RFPs/grant_management_webapp",title:"Grant Management Web Application",description:"This Request for Proposals is closed, meaning we are not looking for any more proposals on this topic at the moment.",source:"@site/docs/RFPs/grant_management_webapp.md",sourceDirName:"docs/RFPs",slug:"/docs/RFPs/grant_management_webapp",permalink:"/docs/RFPs/grant_management_webapp",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/grant_management_webapp.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Formal Guarantees for GRANDPA Finality Gadget",permalink:"/docs/RFPs/formal_guarantees_for_grandpa"},next:{title:"RFP: Substrate Identity Directory",permalink:"/docs/RFPs/identity-directory"}},l={},d=[{value:"Context",id:"context",level:2},{value:"Project Description \ud83d\udcc4",id:"project-description-page_facing_up",level:2},{value:"Existing prototype",id:"existing-prototype",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-nut_and_bolt",level:2},{value:"Grants Page",id:"grants-page",level:3},{value:"Grants details",id:"grants-details",level:3},{value:"Teams",id:"teams",level:3},{value:"Applications",id:"applications",level:3},{value:"Deliveries",id:"deliveries",level:3},{value:"Stats",id:"stats",level:3},{value:"API",id:"api",level:3},{value:"Additional Notes",id:"additional-notes",level:2}];function h(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"grant-management-web-application",children:"Grant Management Web Application"}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:["This Request for Proposals is ",(0,i.jsx)(n.em,{children:"closed"}),", meaning we are not looking for any more proposals on this topic at the moment."]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Status:"})," Closed"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Proposer:"})," ",(0,i.jsx)(n.a,{href:"https://github.com/randombishop",children:"randombishop"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"context",children:"Context"}),"\n",(0,i.jsx)(n.p,{children:"Web3 Foundation manages grant applications and deliveries in two github repositories:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program",children:"Grants"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/w3f/Grant-Milestone-Delivery",children:"Deliveries"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"All the grant applications, approvals, deliveries and evaluations are pushed into GitHub as PRs and Markdown documents, so that all processes are public and transparent."}),"\n",(0,i.jsxs)(n.p,{children:["You can find all the details about how applications and deliveries are submitted in the ",(0,i.jsx)(n.a,{href:"https://w3f.github.io/Grants-Program/",children:"Grants Program Website"}),", or by browsing the two repositories above."]}),"\n",(0,i.jsxs)(n.h2,{id:"project-description-page_facing_up",children:["Project Description ","\ud83d\udcc4"]}),"\n",(0,i.jsx)(n.p,{children:"The objective of this RFP is a web application that publishes all the information contained in\nthe W3F grants repositories in a way that facilitates easier navigation for the grants committee. Though the software would initially be used for the W3F Grants Program, any interested third parties should ideally be able to utilize the application for their own purposes."}),"\n",(0,i.jsx)(n.p,{children:"By providing an API, it will also allow for pulling the data in a structured way in order to make it easy to calculate statistics, track different metrics and publish data."}),"\n",(0,i.jsx)(n.p,{children:"The Web3 Foundation Grants Program is unique in that everything is openly and transparently published on GitHub. As a result of this RFP, we hope the W3F Grants Program can set an example of how other grant programs can leverage a simple yet powerful process to manage their grants. Therefore, the web application and the structure of our repositories should be reusable by other grant programs."}),"\n",(0,i.jsx)(n.h2,{id:"existing-prototype",children:"Existing prototype"}),"\n",(0,i.jsx)(n.p,{children:"A quick and dirty prototype already exists for the application:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/w3f/w3f_grants_backend",children:"Backend"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/w3f/w3f_grants_frontend",children:"Frontend"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["These examples are just an initial experiment to test how the app could work, and are completely undocumented, but please feel free to ",(0,i.jsx)(n.a,{href:"mailto:grants@web3.foundation",children:"contact us"})," if you need help trying them out or to simply discuss."]}),"\n",(0,i.jsx)(n.p,{children:"Also, using these is completely optional and the RFP doesn't require building from these. Proposers are free to propose the framework and approach of their choice."}),"\n",(0,i.jsxs)(n.h2,{id:"deliverables-nut_and_bolt",children:["Deliverables ","\ud83d\udd29"]}),"\n",(0,i.jsx)(n.h3,{id:"grants-page",children:"Grants Page"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Lists grants and their status."}),"\n",(0,i.jsx)(n.li,{children:"Search"}),"\n",(0,i.jsx)(n.li,{children:"Filter"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/keeganquigley/Grants-Program/assets/1389409/0eda6f0b-071d-4d44-9835-196167479c07",alt:"screenshot_grants_page"})}),"\n",(0,i.jsx)(n.h3,{id:"grants-details",children:"Grants details"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Shows the grant information"}),"\n",(0,i.jsx)(n.li,{children:"Overview of the grant project"}),"\n",(0,i.jsx)(n.li,{children:"Milestones details and status"}),"\n",(0,i.jsx)(n.li,{children:"All documents related to the grant and links to their pull requests (application, deliveries and evaluations)"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For example:\n",(0,i.jsx)(n.img,{src:"https://github.com/keeganquigley/Grants-Program/assets/1389409/098962a3-249f-4fa5-8c03-9d0dbc7f32eb",alt:"screenshot_grants_details"})]}),"\n",(0,i.jsx)(n.h3,{id:"teams",children:"Teams"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Provide a view at the team level."}),"\n",(0,i.jsx)(n.li,{children:"Contact information."}),"\n",(0,i.jsx)(n.li,{children:"Grants and applications, and their current status."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"applications",children:"Applications"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Current grant applications."}),"\n",(0,i.jsx)(n.li,{children:"Links to the PR on github, link to the team page to check their history."}),"\n",(0,i.jsx)(n.li,{children:"Status of the application, date opened, number of approvals so far and how many remaining."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"deliveries",children:"Deliveries"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Shows current deliveries pending evaluation."}),"\n",(0,i.jsx)(n.li,{children:"Links to all relevant information and history."}),"\n",(0,i.jsx)(n.li,{children:"Status of the delivery, submission date, evaluator, and if it's on stale."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"stats",children:"Stats"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Number of applications approved by month, with the corresponding total amount, and paid so far."}),"\n",(0,i.jsx)(n.li,{children:"Map of applications by country of origin."}),"\n",(0,i.jsx)(n.li,{children:"Chart of applications by status (Not yet delivered / delivered first milestone / completed / terminated)"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"api",children:"API"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The web app should ideally separate frontend from backend logic, and publish an API to fetch the structured data."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"additional-notes",children:"Additional Notes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The features proposed above represent an ",(0,i.jsx)(n.em,{children:"suggestion"})," on what the grant management webapp should do and look like, but are neither exhaustive nor strictly required. Teams are welcome to propose their own design and vision for this product."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The Web3 Foundation's Grants Program should be just an example/first step.\nIdeally, the tool (combining GitHub + website) can benefit other grant programs and on-chain treasuries."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Long term goals:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Oracles/pallets for treasury integration."}),"\n",(0,i.jsx)(n.li,{children:"Using a decentralized alternative instead of github."}),"\n"]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(96540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);