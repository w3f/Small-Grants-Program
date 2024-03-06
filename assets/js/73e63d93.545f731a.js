"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[55897],{73829:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(74848),i=t(28453);const o={},r="Polkadot.{js} Desktop Application",a={id:"applications/polkadot-desktop-app",title:"Polkadot.\\{js} Desktop Application",description:"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the Open Grants Program Process on how to submit a proposal.",source:"@site/applications/polkadot-desktop-app.md",sourceDirName:"applications",slug:"/applications/polkadot-desktop-app",permalink:"/applications/polkadot-desktop-app",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/polkadot-desktop-app.md",tags:[],version:"current",frontMatter:{}},l={},d=[{value:"Project Description \ud83d\udcc4",id:"project-description-page_facing_up",level:2},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Milestone 1",id:"milestone-1",level:3},{value:"Package as Electron App",id:"package-as-electron-app",level:4},{value:"Milestone 2",id:"milestone-2",level:3},{value:"Account creation redesign and visual improvements",id:"account-creation-redesign-and-visual-improvements",level:4},{value:"Milestone 3",id:"milestone-3",level:3},{value:"Improve User Experience in Accounts app",id:"improve-user-experience-in-accounts-app",level:4},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2},{value:"Work done so far",id:"work-done-so-far",level:3},{value:"Have you applied for other grants so far?",id:"have-you-applied-for-other-grants-so-far",level:3},{value:"Similar projects",id:"similar-projects",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"polkadotjs-desktop-application",children:"Polkadot.{js} Desktop Application"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the ",(0,s.jsx)(n.a,{href:"https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md",children:"Open Grants Program Process"})," on how to submit a proposal."]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Proposer:"})," ",(0,s.jsx)(n.a,{href:"https://github.com/EthWorks/",children:"EthWorks"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Payment Address:"})," 37hdwwNqXHMrni1WGHruwWVzUy5kmsEfJs"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"project-description-page_facing_up",children:["Project Description ","\ud83d\udcc4"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://polkadot.js.org/apps/",children:"Polkadot.{js}"})," web application is now widely used to interact with Polkadot-based networks (Kusama, Alexander etc.). Soon it will also be a go-to app for the Polkadot Mainnet."]}),"\n",(0,s.jsx)(n.p,{children:"There are two problems which we\u2019d like to address with this development effort:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"So far, this application is feature-rich, but hard to use, especially for beginners."}),"\n",(0,s.jsx)(n.li,{children:"The default way of holding the account secrets is browser\u2019s local storage. It\u2019s not a safe way to hold user\u2019s private keys"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["We\u2019d like to package the app as a desktop application. This implies a change to the way accounts information is stored. Instead of browser\u2019s local storage we\u2019d use the filesystem for that, which is a much safer option.\nTo make it easier to use the application, especially for new users, we will work on improving the look and feel and UX experience, starting with the ",(0,s.jsx)(n.a,{href:"https://polkadot.js.org/apps/#/accounts",children:"Accounts"})," section."]}),"\n",(0,s.jsx)(n.p,{children:"Our team worked previously on Polkadot.{js} Browser Extension. We already have a decent understanding of the Polkadot frontends and theirs UX shortcomings."}),"\n",(0,s.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Members:"})," Krzysztof, Natalia, Bartek, Ivan, optionally other developers at Ethworks"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"LinkedIn Profiles:"})," ",(0,s.jsx)(n.a,{href:"https://www.linkedin.com/in/krzysztofjelski/",children:"Krzysztof"}),", ",(0,s.jsx)(n.a,{href:"https://www.linkedin.com/in/nkirejczyk/",children:"Natalia"}),", ",(0,s.jsx)(n.a,{href:"https://www.linkedin.com/in/bart%C5%82omiej-rutkowski-958751118/",children:"Bartek"}),", ",(0,s.jsx)(n.a,{href:"https://www.linkedin.com/in/ivan-rukhavets-904ba7146/",children:"Ivan"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Code Repos:"})," ",(0,s.jsx)(n.a,{href:"https://github.com/polkadot-js/apps",children:"https://github.com/polkadot-js/apps"})," (the repo we want to contribute to)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Website:"})," ",(0,s.jsx)(n.a,{href:"https://ethworks.io",children:"https://ethworks.io"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Legal Structure:"}),(0,s.jsx)("br",{}),"\nEthworks sp z o.o.",(0,s.jsx)("br",{}),"\nVAT ID: PL7010771665.",(0,s.jsx)("br",{}),"\nIgnacego Krasickiego 35",(0,s.jsx)("br",{}),"\n02-611 Warsaw, Poland",(0,s.jsx)("br",{}),"\nOffice:",(0,s.jsx)("br",{}),"\nCzeczota 29",(0,s.jsx)("br",{}),"\n02-606 Warsaw, Poland"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Team's Experience:"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"We have been actively involved in the Ethereum ecosystem for many years, many of us even before Ethworks was founded. During this time we had the opportunity to build many widely used tools such as Ethereum.rb (the ethereum library for the Ruby language) or Waffle (a library for writing and testing smart contracts)."}),"\n",(0,s.jsx)(n.p,{children:"For our clients we have developed numerous customer-facing dApps. We not only know how to create robust and reliable software, but also clean, modern and user-friendly UI. Our design team had pleasure to work with such great brands as Ethereum Foundation, Bitcoin or IOTA."}),"\n",(0,s.jsx)(n.p,{children:"Additionally members of Ethworks are building Universal Login, a tool for storing funds and connecting to Ethereum applications, aiming to simplify on-boarding of new users."}),"\n",(0,s.jsxs)(n.p,{children:["In a previous ",(0,s.jsx)(n.a,{href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/polkadot_js_chrome_extension.md",children:"grant from W3F"}),", we did an UX-overhaul of Polkadot.{js} extension and extended it with useful features."]}),"\n",(0,s.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Estimated Duration:"})," 3 months"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Full-time equivalent (FTE):"})," 1.25"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Costs:"})," 3,37 BTC"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-1",children:"Milestone 1"}),"\n",(0,s.jsx)(n.h4,{id:"package-as-electron-app",children:"Package as Electron App"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated Duration:"})," 1 month"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FTE:"})," 1.25"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 1,12 BTC"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["First step will be to convert the ",(0,s.jsx)(n.a,{href:"https://polkadot.js.org/apps/",children:"Polkadot.{js} web application"})," into a desktop application. We\u2019ll use ",(0,s.jsx)(n.a,{href:"https://www.electronjs.org/",children:"Electron"})," for that."]}),"\n",(0,s.jsx)(n.p,{children:"To make the application functional, we need to change the storage of accounts. So, instead of using browser\u2019s local storage, we\u2019ll store the accounts encrypted on the filesystem."}),"\n",(0,s.jsx)(n.p,{children:"Part of the work will be the setup of CI/CD pipeline, including application signing and preparing packages for multiple platforms."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.a,{href:"https://polkadot.js.org/apps/",children:"Polkadot.{js} web application"})," as an Electron app"]}),(0,s.jsx)(n.td,{children:"Functionality of the current web app delivered as a desktop app"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2."}),(0,s.jsx)(n.td,{children:"Redesigned account storage"}),(0,s.jsx)(n.td,{children:"Feature of using the filesystem to store encrypted accounts"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3."}),(0,s.jsx)(n.td,{children:"Continuous Integration environment"}),(0,s.jsx)(n.td,{children:"Pipeline that build the desktop applications and runs automated tests on it"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"4."}),(0,s.jsx)(n.td,{children:"Continuous Delivery to automate packaging for Mac, Windows and Linux"}),(0,s.jsx)(n.td,{children:"Pipeline that creates release packages of the application for 3 operating system)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"5."}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsx)(n.td,{children:"Updates to the relevant documentation where needed"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-2",children:"Milestone 2"}),"\n",(0,s.jsx)(n.h4,{id:"account-creation-redesign-and-visual-improvements",children:"Account creation redesign and visual improvements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated Duration:"})," 1 month"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FTE:"})," 1.25"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 1,12 BTC"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["We\u2019d like to improve ",(0,s.jsx)(n.a,{href:"https://polkadot.js.org/apps/#/accounts",children:"Accounts"}),", the part of the application new users will mostly interact with. Thus we want to start with a redesign of this section in Milestone 2."]}),"\n",(0,s.jsx)(n.p,{children:"New designs will be more inviting to the users. We'll improve usability of account creation features by redesigning the flows and interactions."}),"\n",(0,s.jsx)(n.p,{children:"As part of the design we\u2019ll create new visual components (sidebar, buttons, notifications, etc.)."}),"\n",(0,s.jsxs)(n.p,{children:["Here's how we envision the Accounts list:\n",(0,s.jsx)(n.img,{src:"https://i.imgur.com/KhKdMwl.png",alt:"Preliminary design - Accounst list"}),"\nThe following two designs are a result of our re-thinking of the user onboarding process. In this milestone we won't be working on the user onboarding yet. However, we might use parts of the following designs in the account creation modals.\n",(0,s.jsx)(n.img,{src:"https://i.imgur.com/sO51bph.png",alt:"Preliminary design - First account creation"}),"\n",(0,s.jsx)(n.img,{src:"https://i.imgur.com/C9ys8Pn.png",alt:"Preliminary design - Adding a new account"})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1."}),(0,s.jsx)(n.td,{children:"Accounts design"}),(0,s.jsxs)(n.td,{children:["Design of ",(0,s.jsx)(n.a,{href:"https://polkadot.js.org/apps/#/accounts",children:"Accounts"})," application, including sidebar and visual components (in Figma)."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2."}),(0,s.jsx)(n.td,{children:"Updated UX flow for Account creation"}),(0,s.jsx)(n.td,{children:"Implement redesigned account creation flow. Password validation improvements."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3."}),(0,s.jsx)(n.td,{children:"Initial Style Guide"}),(0,s.jsx)(n.td,{children:"Document containing color palette and UI components for the application."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"4."}),(0,s.jsx)(n.td,{children:"Implement new style"}),(0,s.jsx)(n.td,{children:"Implement parts of the new designs, including consistent font usage, new navigation, minor improvements of layout and dark mode."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-3",children:"Milestone 3"}),"\n",(0,s.jsx)(n.h4,{id:"improve-user-experience-in-accounts-app",children:"Improve User Experience in Accounts app"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated Duration:"})," 1 month"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FTE:"})," 1.25"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 1,13 BTC"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In this Milestone we'll tackle usability issues with ",(0,s.jsx)(n.a,{href:"https://polkadot.js.org/apps/#/accounts",children:"Accounts"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Currently, users face following difficulties:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"cannot see at a glance the totals of their balances across all accounts"}),"\n",(0,s.jsx)(n.li,{children:"account names cannot be edited"}),"\n",(0,s.jsx)(n.li,{children:"accounts list default sort is not intuitive and cannot be changed by the user"}),"\n",(0,s.jsx)(n.li,{children:"unlock is not next to the locked balance, but in the drop down menu"}),"\n",(0,s.jsx)(n.li,{children:"some information provided in the accounts list gives little value to users (eg. type, tags, transactions count) and could be hidden in some detail view"}),"\n",(0,s.jsx)(n.li,{children:"expanding balances messes up the table layout"}),"\n",(0,s.jsx)(n.li,{children:"account modals don't react to keyboard, e.g. Enter to confirm or Escape to quit"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For sure coming up with an effective design will require some iterating over wireframes/prototypes, and possibly also with implementations."}),"\n",(0,s.jsx)(n.p,{children:"Code-wise, we'll remove dependencies on SUI library components where possible. Also, we're going to add more unit and UI automated tests and remove code duplication where possible."}),"\n",(0,s.jsxs)(n.p,{children:["For a more detailed preliminary backlog, consult ",(0,s.jsx)(n.a,{href:"https://workflowy.com/s/accounts-backlog/9ppyPN0DpdNL3vG5",children:"this list"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1."}),(0,s.jsx)(n.td,{children:"Accounts list redesign"}),(0,s.jsx)(n.td,{children:"Figma design that solve all usability issues mentioned above"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2."}),(0,s.jsx)(n.td,{children:"Accounts list implementation"}),(0,s.jsx)(n.td,{children:"Implementing the designs in Polkadot-JS apps"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3."}),(0,s.jsx)(n.td,{children:"Accounts sidebar implementation"}),(0,s.jsx)(n.td,{children:"Re-Implementing the sidebar that pops up after clicking on an account"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"4."}),(0,s.jsx)(n.td,{children:"Accounts App modals improvements"}),(0,s.jsx)(n.td,{children:"Improve usability and consistency in Account modal, eg. Derive, Add Proxy. Remove code duplication between Create and Derive"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"5."}),(0,s.jsx)(n.td,{children:"Documentation updates"}),(0,s.jsx)(n.td,{children:"We'll add or update the relevant documentation where needed, including screenshots in polkadot wiki"})]})]})]}),"\n",(0,s.jsxs)(n.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,s.jsx)(n.h3,{id:"work-done-so-far",children:"Work done so far"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.figma.com/proto/5NAICV06SHNbbIoYhrUS3u/PolkaDot?node-id=763%3A81&viewport=-213%2C-44%2C0.2232329249382019&scaling=min-zoom",children:"Preliminary designs"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"have-you-applied-for-other-grants-so-far",children:"Have you applied for other grants so far?"}),"\n",(0,s.jsxs)(n.p,{children:["We have successfully applied for a grant on ",(0,s.jsx)(n.a,{href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/polkadot_js_chrome_extension.md",children:"Polkadot.{js} Extension"}),". We are now awaiting acceptance of the last milestone of this grant."]}),"\n",(0,s.jsx)(n.h3,{id:"similar-projects",children:"Similar projects"}),"\n",(0,s.jsxs)(n.p,{children:["We're aware of the ",(0,s.jsx)(n.a,{href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/SubstrateIDE.md",children:"SubstrateIDE"})," project, which also uses ",(0,s.jsx)(n.a,{href:"https://www.electronjs.org/",children:"Electron"})," to package the ",(0,s.jsx)(n.a,{href:"https://polkadot.js.org/apps/",children:"Polkadot.{js}"})," app. However, in case of this project the focus is on providing a developer environment, of which the Polkadot Apps is just a part. In our grant application we focus more on providing an end-user solution."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);