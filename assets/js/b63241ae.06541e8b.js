"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[73227],{13362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var i=n(74848),s=n(28453);const l={},r="SubIdentity",d={id:"applications/SubIdentity",title:"SubIdentity",description:"- Team Name: TDSoftware",source:"@site/applications/SubIdentity.md",sourceDirName:"applications",slug:"/applications/SubIdentity",permalink:"/applications/SubIdentity",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/SubIdentity.md",tags:[],version:"current",frontMatter:{}},a={},o=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Search View",id:"search-view",level:4},{value:"List View",id:"list-view",level:4},{value:"Identity View",id:"identity-view",level:4},{value:"Technology Stack",id:"technology-stack",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Design and Implementation of the Basic Application",id:"milestone-1--design-and-implementation-of-the-basic-application",level:3},{value:"Milestone 2 - Offline mode and performance improvement",id:"milestone-2---offline-mode-and-performance-improvement",level:3},{value:"Milestone 3 - Implementation of default plugins and direct interaction",id:"milestone-3---implementation-of-default-plugins-and-direct-interaction",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"subidentity",children:"SubIdentity"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Team Name:"})," ",(0,i.jsx)(t.a,{href:"https://www.tdsoftware.de/",children:"TDSoftware"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Payment Address:"})," 0x8Db0972d9F40357526B879A002d60CCf6B4a8882"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Level:"})," 2"]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,i.jsxs)(t.p,{children:["This application is in response to the ",(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/rfps/identity-directory.md",children:"RFP: Substrate Identity Directory"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"SubIdentity is a fully client-side web application build with Vue.js in Typescript. The application enables searching of on-chain identities by any identity field in a substrate-based chain that implements the identity pallet. Search results are displayed in a list view. By choosing an identity from the list or providing the address of the on-chain account in a link, it is possible to right away see a human readable representation of the identity. A direct interaction with this account, such as sending tokens, is possible."}),"\n",(0,i.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,i.jsx)(t.p,{children:"The project begins with a design and concept phase, which ensures that the greatest possible benefit is achieved with the application. SubIdentity will be component based, flexible and easily extendable. The responsive design ensures high accessibility on different devices such as mobile phones or desktop computers. The focus is on performance and usability to ensure the best possible user experience. The applications theme (color and branding) can be customized easily by configuring parameters. The final project phase includes manual and automated quality assurance (QA) with Selenium and the creation of unit tests."}),"\n",(0,i.jsx)(t.h4,{id:"search-view",children:"Search View"}),"\n",(0,i.jsxs)(t.p,{children:["The search view includes an input mask for the search term, the option to select a chain and to connect your own endpoint. After searching for the entered term, the list view is displayed.\n",(0,i.jsx)(t.img,{src:"https://tdsoftware-dev.de/subidentity/home.png",alt:""})]}),"\n",(0,i.jsx)(t.h4,{id:"list-view",children:"List View"}),"\n",(0,i.jsx)(t.p,{children:"The list view displays all identities that the search parameter entered in the search mask matches any of their identity fields. Clicking on an identity in the list view takes the user to the detailed identity view."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://tdsoftware-dev.de/subidentity/search-results.png",alt:""})}),"\n",(0,i.jsx)(t.h4,{id:"identity-view",children:"Identity View"}),"\n",(0,i.jsxs)(t.p,{children:["The detailed identity view contains available data of an on-chain identity in a beautiful card design that is adjustable. Cards can be closed and reordered as desired by the user. If provided, an avatar is displayed next to all metadata available in the identity entry. Tokens can be send from the detailed view directly to the on-chain account.\n",(0,i.jsx)(t.img,{src:"https://tdsoftware-dev.de/subidentity/profile-details.png",alt:""})]}),"\n",(0,i.jsx)(t.h4,{id:"technology-stack",children:"Technology Stack"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"polkadot{.js}"}),"\n",(0,i.jsx)(t.li,{children:"Vue.js with Vuex and the Vue Router"}),"\n",(0,i.jsx)(t.li,{children:"TypeScript"}),"\n",(0,i.jsx)(t.li,{children:"webpack"}),"\n",(0,i.jsx)(t.li,{children:"Babel - for backwards compatibility in older Browsers"}),"\n",(0,i.jsx)(t.li,{children:"Jest - for unit tests"}),"\n",(0,i.jsx)(t.li,{children:"ESLint"}),"\n",(0,i.jsx)(t.li,{children:"SASS (SCSS)"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,i.jsx)(t.p,{children:"This project is meant to provide an Identity Directory for all substrate-based chains, that implement the Identity pallet."}),"\n",(0,i.jsx)(t.p,{children:"Similar Project"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/Shard-Labs/identity-hub/tree/main/src",children:"https://github.com/Shard-Labs/identity-hub/tree/main/src"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"What makes us different"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"easily extendible solution as it is component based"}),"\n",(0,i.jsx)(t.li,{children:"focus on high performance and usability"}),"\n",(0,i.jsx)(t.li,{children:"fully responsive UI"}),"\n",(0,i.jsx)(t.li,{children:"manual and with Selenium automated QA during development"}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,i.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Sascha Dobschal"}),"\n",(0,i.jsx)(t.li,{children:"Anika Oertel"}),"\n",(0,i.jsx)(t.li,{children:"Markus Fitzner"}),"\n",(0,i.jsx)(t.li,{children:"Toni Frotscher"}),"\n",(0,i.jsx)(t.li,{children:"Sosan Neikbeen"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Name:"})," Sascha Dobschal"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Email:"})," ",(0,i.jsx)(t.a,{href:"mailto:s.dobschal@tdsoftware.de",children:"s.dobschal@tdsoftware.de"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Registered Address:"})," Schlossgasse 20, 07743 Jena, Germany"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Registered Legal Entity:"})," TDSoftware GmbH"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,i.jsx)(t.p,{children:"We have years of experience in bringing ideas to life with a user-centered focus using blockchain and mobile technology. We have worked closely with a large number of customers to implement their solutions and therefore have already gained experience with blockchain technologies.\nOur most relevant projects are among others:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Exchange for trading digital assets (Customer is a Top 200 Token of CMC)"}),"\n",(0,i.jsx)(t.li,{children:"Token Swap WebApp (Customer is a Top 200 Token of CMC)"}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://artists.niftymarket.com/",children:"Blockchain, NFT Pallets & App"})," (In Development)"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"We look forward to contributing to the web3 ecosystem with an open source project next."}),"\n",(0,i.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,i.jsx)(t.p,{children:"Source code will be in:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/TDSoftware",children:"https://github.com/TDSoftware"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Team profiles:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/dobschal",children:"https://github.com/dobschal"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/a-oertel",children:"https://github.com/a-oertel"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/markusdent",children:"https://github.com/markusdent"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/frotscher",children:"https://github.com/frotscher"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/sosan-neikbeen",children:"https://github.com/sosan-neikbeen"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"team-linkedin-profiles",children:"Team LinkedIn Profiles"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/dobschal/",children:"https://www.linkedin.com/in/dobschal/"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/anika-oertel-128237223/",children:"https://www.linkedin.com/in/anika-oertel-128237223/"})}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/rfps/identity-directory.md",children:"RFP"})}),"\n",(0,i.jsx)(t.p,{children:"A concept and initial design was created as part of this application and can be found in the Project Details chapter."}),"\n",(0,i.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,i.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Estimated Duration:"})," 3 months"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  3"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Costs:"})," 49500 DAI"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-1--design-and-implementation-of-the-basic-application",children:"Milestone 1 \u2014 Design and Implementation of the Basic Application"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"})," 1 month"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  3"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"}),"  16500 DAI"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"A basic application with a responsive design is developed which supports querying by address and identity fields. A user can query identities from Polkadot or Kusama. When a search returns multiple results a list view is displayed. If there is only one search result or one identity is selected from the list view, a detailed identity view is displayed."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"Apache 2.0 / GPLv3 / MIT / Unlicense"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsxs)(t.td,{children:["We will provide both ",(0,i.jsx)(t.strong,{children:"inline documentation"})," of the code and a basic ",(0,i.jsx)(t.strong,{children:"tutorial"})," that explains how a user can use the application."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,i.jsx)(t.td,{children:"Testing"}),(0,i.jsx)(t.td,{children:"Core functions will be covered by unit tests as far as reasonably applicable to ensure functionality and robustness. In the documentation, we will describe how to run these tests."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(t.td,{children:"Concept and design"}),(0,i.jsx)(t.td,{children:"We will create a high-fidelity, responsive, pixel perfect design for a search, a list view and a detailed identity view"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(t.td,{children:"Implement logic for querying identities"}),(0,i.jsx)(t.td,{children:"Implement logic to receive identities from a substrate-based chain implementing the Identity pallet"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,i.jsx)(t.td,{children:"Implement UI for search and list view"}),(0,i.jsx)(t.td,{children:"Build UI with Vue.js"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,i.jsx)(t.td,{children:"Implement UI for detailed identity view"}),(0,i.jsx)(t.td,{children:"Build UI with Vue.js"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-2---offline-mode-and-performance-improvement",children:"Milestone 2 - Offline mode and performance improvement"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated Duration:"})," 1 month"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  3"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 16500 DAI"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"A user can query identities from Polkadot, Kusama or provide his own node endpoint. The application can be hosted on IPFS and a backend is developed in order to improve performance."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"Apache 2.0 / GPLv3 / MIT / Unlicense"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsxs)(t.td,{children:["We will provide both ",(0,i.jsx)(t.strong,{children:"inline documentation"})," of the code and update the basic ",(0,i.jsx)(t.strong,{children:"tutorial"})," that explains how a user can use the application."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,i.jsx)(t.td,{children:"Testing"}),(0,i.jsx)(t.td,{children:"Core functions will be covered by unit tests as far as reasonably applicable to ensure functionality and robustness. In the documentation, we will describe how to run these tests."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(t.td,{children:"Implement offline mode"}),(0,i.jsx)(t.td,{children:"Enable a user to connect to a local node and fetch identities from there"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(t.td,{children:"Implement UI for node selection"}),(0,i.jsx)(t.td,{children:"Enable a user to select the node from the UI"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,i.jsx)(t.td,{children:"Implement URL param logic"}),(0,i.jsx)(t.td,{children:"URL Parameters can specify which cards are visible and in which order"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"4a."}),(0,i.jsx)(t.td,{children:"Performance improvement"}),(0,i.jsx)(t.td,{children:"Focus on improving the web applications performance to maximize usability e.g. by storing fetched information from a local node to IPFS if a users pinata key was provided"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"4b."}),(0,i.jsx)(t.td,{children:"Backend Development"}),(0,i.jsx)(t.td,{children:"Implement backend with e.g. Node.js to increase performance through indexing; Provide an API for frontend"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"4c."}),(0,i.jsx)(t.td,{children:"Consume API"}),(0,i.jsx)(t.td,{children:"Use the provided API in frontend to increase performance"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-3---implementation-of-default-plugins-and-direct-interaction",children:"Milestone 3 - Implementation of default plugins and direct interaction"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated Duration:"})," 1 month"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  3"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 16500 DAI"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"A flexible, expandable and component-based application is developed, that supports the following default plugins: basic info, governance, treasury and validator. It is possible to directly interact with the underlying account by sending tokens to it.  Manual and automated quality assurance is done."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"Apache 2.0 / GPLv3 / MIT / Unlicense"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsxs)(t.td,{children:["We will provide both ",(0,i.jsx)(t.strong,{children:"inline documentation"})," of the code and update the basic ",(0,i.jsx)(t.strong,{children:"tutorial"})," that explains how a user can use the application."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,i.jsx)(t.td,{children:"Testing"}),(0,i.jsx)(t.td,{children:"Core functions will be covered by unit tests as far as reasonably applicable to ensure functionality and robustness. In the documentation, we will describe how to run these tests."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,i.jsx)(t.td,{children:"Article"}),(0,i.jsx)(t.td,{children:"We will publish an article that explains what was done as part of the grant."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1a."}),(0,i.jsx)(t.td,{children:"Implement logic for default plugins - backend"}),(0,i.jsx)(t.td,{children:"Implement logic to get information for default plugins governance, treasury and validator on backend, provide API for frontend"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1b."}),(0,i.jsx)(t.td,{children:"Implement logic for default plugins - frontend"}),(0,i.jsx)(t.td,{children:"Implement logic to to get information for default plugins governance, treasury and validator; Consume provided API"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(t.td,{children:"Implement components for displaying default plugins"}),(0,i.jsx)(t.td,{children:"Implement UI for displaying default plugins"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,i.jsx)(t.td,{children:"Implement logic for sending tokens"}),(0,i.jsx)(t.td,{children:"Implement logic to get balance of current account and make a transaction to displayed identity; consider transaction fees; use an open protocol (e.g. wallet connect) to establish a secure connection to a wallet"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,i.jsx)(t.td,{children:"Implement UI for sending tokens"}),(0,i.jsx)(t.td,{children:"Implement UI for sending tokens, including a button to trigger a transaction, an input field and a display of balances and fees"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"5."}),(0,i.jsx)(t.td,{children:"Quality Assurance"}),(0,i.jsx)(t.td,{children:"Manual and automated QA"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,i.jsxs)(t.p,{children:["After we have provided a flexible, expandable and component-based application with the above-mentioned functions as part of milestones 1, 2 and 3, the development of further components as plugins could follow, as suggested in the ",(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/applications/substrate-identity-directory.md",children:"RFP"})," in the Additional Plug-in Ideas chapter.\nIn addition, TDSoftware can undertake maintenance tasks as part of a maintenance grant."]}),"\n",(0,i.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,i.jsx)(t.p,{children:"This is our first application for an open source project to innovate the web3 Ecosystem."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var i=n(96540);const s={},l=i.createContext(s);function r(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);