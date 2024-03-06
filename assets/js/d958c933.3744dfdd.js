"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[81435],{33460:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=t(74848),i=t(28453);const r={},a="Galaxy: Three-dimensional Web for Polkadot Users",l={id:"applications/galaxy",title:"Galaxy: Three-dimensional Web for Polkadot Users",description:"- Team Name: Galaxy.Do",source:"@site/applications/galaxy.md",sourceDirName:"applications",slug:"/applications/galaxy",permalink:"/applications/galaxy",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/galaxy.md",tags:[],version:"current",frontMatter:{}},o={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"1. Frontend - Excalidraw",id:"1-frontend---excalidraw",level:4},{value:"2. Networking - Polkadot",id:"2-networking---polkadot",level:4},{value:"3. Backend - Chisel",id:"3-backend---chisel",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Proof of Concept",id:"milestone-1--proof-of-concept",level:3},{value:"Milestone 2 \u2014 Minimal Valuable Product",id:"milestone-2--minimal-valuable-product",level:3},{value:"Next Milestones",id:"next-milestones",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Referral Program (optional) \ud83d\udcb0",id:"referral-program-optional-moneybag",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"galaxy-three-dimensional-web-for-polkadot-users",children:"Galaxy: Three-dimensional Web for Polkadot Users"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Team Name:"})," Galaxy.Do"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Payment Address:"})," 0xF1dcdA1C9E76BBf32791da01e464A3F55bd7000c (USDC)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 1"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,s.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/4569866/228949639-f89bb602-59c5-4b30-917e-8a8b3cdebc20.png",alt:"image"})}),"\n",(0,s.jsx)(n.p,{children:"Web has revolutionized the way we organize and explore knowledge."}),"\n",(0,s.jsx)(n.p,{children:"Although web pages digitalized physical documents, they also inherited some of limitations."}),"\n",(0,s.jsx)(n.p,{children:"That's the reason most web pages are vertically scrollable, in one dimension only, imitating physical predecessor."}),"\n",(0,s.jsx)(n.p,{children:"Whiteboards expanding it's space into second dimension leverage human ability of spatial awareness to enhance the understanding."}),"\n",(0,s.jsx)(n.p,{children:"As hyper text links navigate user in between of web site pages, same way whiteboards can be also inter-linked to expand information into a third dimension."}),"\n",(0,s.jsx)(n.p,{children:"Then multiple related whiteboards can be rendered as layers on the same canvas with seamless transition in between the layers, thus expanding the knowledge into a third dimension."}),"\n",(0,s.jsx)(n.p,{children:"That's the quintessence of Stretch Text concept, which makes it possible to express interconnectedness of all knowledge (intertwingularity)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Current grant is offering to develop canvas-based browser which allows polkadot users to create, organize, and share knowledge leveraging three-dimensional Stretch Text space."})}),"\n",(0,s.jsx)(n.h3,{id:"project-details",children:"Project Details"}),"\n",(0,s.jsx)(n.h4,{id:"1-frontend---excalidraw",children:"1. Frontend - Excalidraw"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/4569866/228949713-8de6ff8c-fdde-41ab-8ae9-d895ab3e7b02.png",alt:"image"})}),"\n",(0,s.jsx)(n.p,{children:"The scene is represented as an object; it contains UI State, list of elements, and files cache."}),"\n",(0,s.jsx)(n.p,{children:"Whenever the elements on the scene updated, it triggers rendering of the canvas."}),"\n",(0,s.jsx)(n.p,{children:"Each element is represented as an object too: text, images, shapes."}),"\n",(0,s.jsx)(n.p,{children:"If given element object has a text field, then each line of the text passed to fillText canvas method."}),"\n",(0,s.jsx)(n.p,{children:"If given element is an image though, it's content is fetched from files cache, and then passed to drawImage canvas method.\nFiles cache is simply a mapping from image content hash to the blob content."}),"\n",(0,s.jsx)(n.p,{children:"UI implemented in React rendering on top of the canvas allows to seamlessly create and manipulate the elements on the canvas."}),"\n",(0,s.jsx)(n.p,{children:"Selected elements can be joined into groups, and then selected groups can be serialized and saved as a separate layers."}),"\n",(0,s.jsx)(n.p,{children:"As user navigates across an infinite canvas, the layers outside of viewport can be unloaded and relevant layers appear."}),"\n",(0,s.jsx)(n.h4,{id:"2-networking---polkadot",children:"2. Networking - Polkadot"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/4569866/228949758-62d6cc1e-ed11-493e-800d-846857aaebcb.png",alt:"image"})}),"\n",(0,s.jsx)(n.p,{children:"Each layer can be serialized into JSON file and then saved to IPFS."}),"\n",(0,s.jsx)(n.p,{children:"User who created the layer, then makes a transaction to claim ownership of it."}),"\n",(0,s.jsx)(n.p,{children:"In the transaction, user is passing IPFS link and chosen Layer Name."}),"\n",(0,s.jsx)(n.p,{children:"The smart contract deployed on the pallete, maintains the mapping from Layer Link to IPFS Link."}),"\n",(0,s.jsxs)(n.p,{children:["Layer Link is represented as deep link in format of ",(0,s.jsx)(n.code,{children:"galaxy://<wallet address/<layer name>"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"3-backend---chisel",children:"3. Backend - Chisel"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/4569866/228949811-b22de278-3e80-4cf1-8b45-c1e8dcb31879.png",alt:"image"})}),"\n",(0,s.jsx)(n.p,{children:"Galaxy Browser consist of frontend app, backend server, and database."}),"\n",(0,s.jsx)(n.p,{children:"REST API implemented in Rust is running a Deno runtime to handle the network requests in between frontend and database."}),"\n",(0,s.jsx)(n.p,{children:"When user opens a deep link, layer loading will be handled by backend endpoint which returns the scene object in response to frontend request."}),"\n",(0,s.jsx)(n.p,{children:"Same endpoint will first resolve Layer Link to IPFS link through polkadot as described above, then fetch content of IPFS link,\nperform validation of deserialized content to ensure it corresponds scene schema, then save every element as a separate object\nin the database, then fetch images and save them to database as well, and then consturct a scene object."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"The proposed architecture also allows to implement more advanced features: search across different layers, tagging and versioning, recommendations, parallel tranclusion, and microtransactions."})}),"\n",(0,s.jsx)(n.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,s.jsx)(n.p,{children:"Here open for suggestions. Specifically to consider partnerships with: wallets, storage solutions, content sharing platforms and social networks, copyright and microtransaction services."}),"\n",(0,s.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,s.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,s.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Contact Name:"})," Igor Berlenko"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Contact Email:"})," ",(0,s.jsx)(n.a,{href:"mailto:igorberlenko7@gmail.com",children:"igorberlenko7@gmail.com"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Website:"})," ",(0,s.jsx)(n.a,{href:"https://galaxy.do",children:"https://galaxy.do"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,s.jsx)(n.p,{children:"Opensource Code. Governance with DHO (Hypha DAO)."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/hypha-dao/hypha-substrate",children:"https://github.com/hypha-dao/hypha-substrate"})}),"\n",(0,s.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,s.jsx)(n.p,{children:"My profile:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/7flash",children:"https://github.com/7flash"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Relevant repositories I have contributed to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/excalidraw/excalidraw",children:"https://github.com/excalidraw/excalidraw"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/chiselstrike/chiselstrike",children:"https://github.com/chiselstrike/chiselstrike"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/zsviczian/obsidian-excalidraw-plugin",children:"https://github.com/zsviczian/obsidian-excalidraw-plugin"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/JoinSeeds/seeds_light_wallet",children:"https://github.com/JoinSeeds/seeds_light_wallet"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/ColdStack-Network/blockchain",children:"https://github.com/ColdStack-Network/blockchain"})}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,s.jsx)(n.p,{children:'The Galaxy Browser is all inspired by Xanadu Spaces, and particularly the architecture described above solves the problem of "Browser Law" articulated by Ted Nelson in following video:'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=kV_vYkSmkxk",children:"https://www.youtube.com/watch?v=kV_vYkSmkxk"})}),"\n",(0,s.jsx)(n.p,{children:"In the next video I showed a short demo of Galaxy Browser with additional features such as layers transitions, command palletes, contextual GPT, and StableDiffusion-bookmarks."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=8Y7_gvmMyKY",children:"https://www.youtube.com/watch?v=8Y7_gvmMyKY"})}),"\n",(0,s.jsx)(n.p,{children:"The demo implementation is made possible because of Zsolt work on his Obsidian plugin excalibrain."}),"\n",(0,s.jsx)(n.p,{children:"These might be relevant discussions in Excalidraw:"}),"\n",(0,s.jsxs)(n.p,{children:["Layers: ",(0,s.jsx)(n.a,{href:"https://github.com/excalidraw/excalidraw/issues/6266#issuecomment-1439488787",children:"https://github.com/excalidraw/excalidraw/issues/6266#issuecomment-1439488787"})]}),"\n",(0,s.jsxs)(n.p,{children:["Pinned Anchors: ",(0,s.jsx)(n.a,{href:"https://github.com/excalidraw/excalidraw/issues/3276#issuecomment-1246985074",children:"https://github.com/excalidraw/excalidraw/issues/3276#issuecomment-1246985074"})]}),"\n",(0,s.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,s.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Estimated Duration:"})," 1 month"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Full-Time Equivalent (FTE):"})," 1"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Costs:"})," 10,000 USD"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-1--proof-of-concept",children:"Milestone 1 \u2014 Proof of Concept"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated duration:"})," 1 week"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 2,500 USD"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"First Milestone is PoC implements following scenario:"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"User opens Galaxy Web App, connects Polkadot Wallet, draws some elements, clicks button to save layer to IPFS and shares a link.\nAnother user opens the app, choose to load layer from IPFS, inserts the received link, and can see the elements created by first user appear on his canvas."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:(0,s.jsx)(n.strong,{children:"0a."})}),(0,s.jsx)(n.td,{children:"License"}),(0,s.jsx)(n.td,{children:"MIT"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:(0,s.jsx)(n.strong,{children:"0b."})}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsxs)(n.td,{children:["We will provide both ",(0,s.jsx)(n.strong,{children:"inline documentation"})," of the code and a basic ",(0,s.jsx)(n.strong,{children:"tutorial"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:(0,s.jsx)(n.strong,{children:"0c."})}),(0,s.jsx)(n.td,{children:"Testing and Testing Guide"}),(0,s.jsx)(n.td,{children:"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:(0,s.jsx)(n.strong,{children:"0d."})}),(0,s.jsx)(n.td,{children:"Docker"}),(0,s.jsx)(n.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"1."}),(0,s.jsx)(n.td,{children:"Frontend: Galaxy Web App"}),(0,s.jsx)(n.td,{children:"A new repository which integrates Excalidraw whiteboard with Polkadot wallet and IPFS storage"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-2--minimal-valuable-product",children:"Milestone 2 \u2014 Minimal Valuable Product"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated Duration:"})," 3 weeks"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 7,500 USD"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Second Milestone is MVP implements following scenario:"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'User installs desktop Galaxy App, opens "galaxy://" deep link which is resolved to IPFS, scene is rendered on canvas. User adds other elements on the scene and saves them into a new layer. User closes and reopens the app. He can see both layers with images loaded from database instantly.'}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:(0,s.jsx)(n.strong,{children:"0a."})}),(0,s.jsx)(n.td,{children:"License"}),(0,s.jsx)(n.td,{children:"MIT"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:(0,s.jsx)(n.strong,{children:"0b."})}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsxs)(n.td,{children:["We will provide both ",(0,s.jsx)(n.strong,{children:"inline documentation"})," of the code and a basic ",(0,s.jsx)(n.strong,{children:"tutorial"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:(0,s.jsx)(n.strong,{children:"0c."})}),(0,s.jsx)(n.td,{children:"Testing and Testing Guide"}),(0,s.jsx)(n.td,{children:"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:(0,s.jsx)(n.strong,{children:"0d."})}),(0,s.jsx)(n.td,{children:"Docker"}),(0,s.jsx)(n.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0e."}),(0,s.jsx)(n.td,{children:"Article"}),(0,s.jsxs)(n.td,{children:["We will publish an ",(0,s.jsx)(n.strong,{children:"article"})," and ",(0,s.jsx)(n.strong,{children:"video"})," that explains how to setup and use the Galaxy Browser."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"1."}),(0,s.jsx)(n.td,{children:"Galaxy Browser"}),(0,s.jsx)(n.td,{children:"Complete App to organize, share and explore knowledge"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"2."}),(0,s.jsx)(n.td,{children:"Smart contract"}),(0,s.jsx)(n.td,{children:"It will allow users to claim ownership over layers and resolve Layer Links into IPFS Links"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"next-milestones",children:"Next Milestones"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Transclusion scenario"})," might be beyond the scope of testing promised deliverables but still might be implemented within a timeline:"]}),"\n",(0,s.jsx)(n.p,{children:"User is loading two layers from different wallets into his scene, then saves the whole scene into a new layer with tranclusion of two non-changed layers.\nCreators of original two layers receives notification of forked version.\nCreator of first layer opens the forked version, only second layer is loaded. It happens because first layer already exist in his database.\nCreator of second layer makes changes in some elements which is reflected in combined layer without any actions from creator of combined layer.\nIt works because during tranclusion, the elements are not copied, and because Layer Link of the original layer remains the same whilst referencing to a different IPFS link."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Microtransactions scenarios"})," will be implemented later. Though worth mentioning here as the most exciting future/feature:"]}),"\n",(0,s.jsx)(n.p,{children:"Different artists publishing their paintings, each painting as a separate Galaxy Layer.\nAnother user creates a gallery layer with automated script taking the highest ranked paintings into it.\nViewers have to subscribe into the gallery layer to view it.\nThe subscription payments are distributed in between all of the authors included in the gallery, as well with gallery curators.\nEven though viewers can have direct view access to each individual paintings for free, but there is a reason which makes the gallery worth to pay for. That's important to notice, how rearrangement of images on the whiteboard, brings in additional value.\nAlso notice, how curators managing the gallery are being rewarded along with actual painting authors.\nThe same mechanics can be applied to any other type of information: news, expert opinions, financial forecasts, etc.\nContent Explorers, who rearrange and recommend the most relevant pieces of information in the Web, will be financially incentivized along with actual content creators."}),"\n",(0,s.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,s.jsx)(n.p,{children:"I believe in opensource community to drive the long term development of the project, and of course can see myself leading it as long as needed."}),"\n",(0,s.jsxs)(n.h2,{id:"referral-program-optional-moneybag",children:["Referral Program (optional) ","\ud83d\udcb0"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Referrer:"})," github.com/n13"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Payment Address:"})," bc1q7axtazzhsdttextp0qspueaagv4pgfm5l9ne64 (BTC)"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"How did you hear about the Grants Program?"})," personal recommendation"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Previous grants you may have applied for: ",(0,s.jsx)(n.a,{href:"https://pomelo.io/grants/galaxy",children:"https://pomelo.io/grants/galaxy"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);