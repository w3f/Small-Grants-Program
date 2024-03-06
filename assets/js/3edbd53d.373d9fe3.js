"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[6709],{30141:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var n=t(74848),s=t(28453);const o={},r="Research feasibility of a Go Runtime",a={id:"applications/research-feasibility-go-runtime",title:"Research feasibility of a Go Runtime",description:"- Team Name: LimeChain",source:"@site/applications/research-feasibility-go-runtime.md",sourceDirName:"applications",slug:"/applications/research-feasibility-go-runtime",permalink:"/applications/research-feasibility-go-runtime",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/research-feasibility-go-runtime.md",tags:[],version:"current",frontMatter:{}},l={},h=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Research",id:"research",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Research feasibility of a Go Runtime",id:"milestone-1--research-feasibility-of-a-go-runtime",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"research-feasibility-of-a-go-runtime",children:"Research feasibility of a Go Runtime"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Team Name:"})," ",(0,n.jsx)(i.a,{href:"https://github.com/LimeChain",children:"LimeChain"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Payment Address:"})," eth:0x1F7683228Ee9Bc65335374eA5c92B81C74131404 (USDC/USDT/DAI)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsxs)(i.strong,{children:[(0,n.jsx)(i.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 3"]}),"\n"]}),"\n",(0,n.jsxs)(i.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,n.jsx)(i.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(i.p,{children:"The Internet is designed to be, has been, currently is, and will always be a network of networks. What this means for us, users, is that no-matter who we are,\nwhat we want to do, and what clients we use - we can connect with others through the Internet. Furthermore, different communities, geographically and culturally divided,\ncan still benefit from each other because of the inclusive, \u201cnon-maximalist\u201d attitude of the Internet. Unlike Bitcoin, the Polkadot Network tries explicitly to support these values."}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"\u201cPolkadot is in many respects the biggest bet in this ecosystem against chain maximalism.\u201d - Dr. Gavin Wood"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"A lot of effort has been put on the protocol level to make Polkadot interoperable and capable of hosting a variety of parachains, third-party chains (Bitcoin, Ethereum, etc.),\nand even computer networks in general, as long as they abide by the specification. However, as of now, no massive strides have been made towards realizing this variation on the\nimplementation level (except for Host implementations). If Polkadot strives to be truly the chain of chains, it needs to properly address both levels."}),"\n",(0,n.jsxs)(i.p,{children:["The Polkadot architecture is divided into two parts: Host and Runtime. While there are several choices presented to users regarding the Host implementation\n(",(0,n.jsx)(i.a,{href:"https://github.com/ChainSafe/gossamer",children:"gossamer"}),", ",(0,n.jsx)(i.a,{href:"https://github.com/soramitsu/kagome",children:"kagome"}),", ",(0,n.jsx)(i.a,{href:"https://github.com/paritytech/polkadot",children:"polkadot"}),", ",(0,n.jsx)(i.a,{href:"https://github.com/paritytech/smoldot",children:"smoldot"}),"),\nthere really are only two options for the runtime: either start from scratch, which is not ideal in most cases, or utilize the power of Substrate. For many people, especially for those whose expertise\nis not in computer networking/blockchain technology, this really leaves them with a single option - Substrate.\n",(0,n.jsx)(i.strong,{children:"Although great, Substrate is not ideal for newcomers. Rust is well-known to have a steep learning curve and, by inference, so does Substrate, even though great effort has been put to simplify the framework."})]}),"\n",(0,n.jsx)(i.p,{children:"In summary, the lack of diversity and ease of use of Polkadot Runtimes is a barrier that stops Polkadot from living up to its full promise and the Polkadot community should as a whole address this problem.\nThe history of software engineering has taught us many times that by bringing diversity and ease of use to the field, an explosion of innovation follows."}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"\u201cPolkadot should also be the biggest bet against implementation maximalism.\u201d - LimeChain Team"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"project-details",children:"Project Details"}),"\n",(0,n.jsx)(i.h4,{id:"research",children:"Research"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"The ultimate/end goal is implementing a Polkadot Go RelayChain Runtime"}),", however, it will be technically challenging to go for the direct implementation without abstracting components into different modules.\nGiven that a modularised approach is taken, the practical goal would be to formalise those modules into a framework that can be reused by other developers.\n",(0,n.jsx)(i.strong,{children:"In order to be able to develop a framework for Go Runtimes, we need to clear out Go-related technological challenges first. This proposal is about R&D aimed at those challenges."})]}),"\n",(0,n.jsxs)(i.p,{children:['Go is a modern, powerful, and fast programming language focused on simplicity (abiding by the KISS principle: "Keep It Simple, Stupid") and gaining a lot of popularity among software developers nowadays.\nIt is future-proof and stable, being backed by Google and used in many of their software. It has great support for network programming. ',(0,n.jsx)(i.strong,{children:"All of these reasons make Go an ideal candidate for implementing\nan alternative framework for blockchain development targeted at newcomers."})," Furthermore, the waters have already been tested! ",(0,n.jsx)(i.a,{href:"https://github.com/ChainSafe/gossamer",children:"Gossamer"})," is a recent effort towards implementing a comprehensive\nPolkadot Host in Go, which should make implementing the Runtime easier. It is arguable that other frameworks for building Blockchain networks (e.g Cosmos) have gained significant adoption due to the lower barrier for entry (compared to Rust)."]}),"\n",(0,n.jsx)(i.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,n.jsx)(i.p,{children:"The lack of diversity and ease of use of Polkadot Runtimes is a barrier that stops Polkadot from living up to its full promise and the Polkadot community should as a whole address this problem.\nThe history of software engineering has taught us many times that by bringing diversity and ease of use to the field, an explosion of innovation follows."}),"\n",(0,n.jsxs)(i.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,n.jsx)(i.h3,{id:"team-members",children:"Team members"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Daniel Ivanov"}),"\n",(0,n.jsx)(i.li,{children:"Radosvet Mihtarski"}),"\n",(0,n.jsx)(i.li,{children:"failfmi"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"contact",children:"Contact"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Contact Name:"})," Christian Veselinov, Zhivko Todorov"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Contact Email:"})," ",(0,n.jsx)(i.a,{href:"mailto:chris@limechain.tech",children:"chris@limechain.tech"}),", ",(0,n.jsx)(i.a,{href:"mailto:zhivko@limechain.tech",children:"zhivko@limechain.tech"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Website:"})," ",(0,n.jsx)(i.a,{href:"https://limechain.tech",children:"https://limechain.tech"})]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Registered Address:"})," Bulgaria, Dragan Tsankov 23A, 1113, Sofia, Bulgaria"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Registered Legal Entity:"})," LimeLabs Ltd."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,n.jsxs)(i.p,{children:["At LimeChain, we feel confident in and have a lot of development hours invested building ",(0,n.jsx)(i.a,{href:"https://github.com/LimeChain/as-substrate-runtime",children:"Runtime from scratch"})," and evolving it into fully capable ",(0,n.jsx)(i.a,{href:"https://github.com/LimeChain/subsembly",children:"frameworks for building Substrate Runtimes"}),".\nWe have extensive experience in building developer tooling, specifically within Rust/WebAssembly (",(0,n.jsx)(i.a,{href:"https://github.com/limeChain/matchstick/",children:"matchstick"}),"). Other infrastructure projects that we are contributors to is Hedera Hashgraph.\nLimeChain\u2019s team has been integrating an EVM within the Hedera networks as-well as being sole technical partner of ",(0,n.jsx)(i.a,{href:"https://github.com/CudoVentures",children:"Cudos network"})," (based on Cosmos) which recently had their genesis mainnet release.\nAll of this emphasizes that the knowledge/expertise of the company spans across the major blockchain stacks - Substrate/EVM and Cosmos."]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/LimeChain/subsembly",children:"https://github.com/LimeChain/subsembly"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/LimeChain/subsembly-core",children:"https://github.com/LimeChain/subsembly-core"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/LimeChain/as-scale-codec",children:"https://github.com/LimeChain/as-scale-codec"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/LimeChain/as-substrate-runtime",children:"https://github.com/LimeChain/as-substrate-runtime"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/LimeChain",children:"https://github.com/LimeChain"})}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/daniel-k-ivanov",children:"https://github.com/daniel-k-ivanov"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/radkomih",children:"https://github.com/radkomih"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/failfmi",children:"https://github.com/failfmi"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"team-linkedin-profiles-if-available",children:"Team LinkedIn Profiles (if available)"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://www.linkedin.com/in/daniel-k-ivanov/",children:"https://www.linkedin.com/in/daniel-k-ivanov/"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://www.linkedin.com/in/radosvet-m",children:"https://www.linkedin.com/in/radosvet-m"})}),"\n"]}),"\n",(0,n.jsxs)(i.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,n.jsx)(i.p,{children:"So far, in our research process, we have come across technical challenges that Go faces regarding the Polkadot specification.\nThere are a couple of issues related to how Go translates to the expected Wasm from the Polkadot specification:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["The toolchain for WebAssembly MVP is limited.","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["The Wasm runtime described in the Polkadot specification targets WebAssembly MVP, with very domain-specific API. The official Go compiler does not support Wasm for non-browser environments\n(read more ",(0,n.jsx)(i.a,{href:"https://github.com/golang/go/issues/31105",children:"1"}),", ",(0,n.jsx)(i.a,{href:"https://substrate.stackexchange.com/questions/60/what-is-gossamer-and-how-does-it-compare-to-substrate/89#89",children:"2"}),") and the only options is using ",(0,n.jsx)(i.a,{href:"https://github.com/tinygo-org/tinygo",children:"TinyGo"}),".\nThe runtime is expected to expose some linker specific globals (",(0,n.jsx)(i.code,{children:"__heap_base"}),", ",(0,n.jsx)(i.code,{children:"__data_end"}),") - ",(0,n.jsx)(i.a,{href:"https://github.com/tinygo-org/tinygo/issues/2045",children:"read more"}),", but TinyGo does not support that out of the box."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["Managing memory externally is not supported and not a good fit for Go/TinyGo","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["By specification, the Wasm runtime does not include a memory allocator, it is expected to import memory from the host and rely on host imported functions for all heap allocations. TinyGo has GC and manages its memory by itself. So it can\u2019t work directly on systems where the host wants to manage the memory.\nTheoretically, it might be possible to add support for it in TinyGo, but it will require a lot of effort in the long term, the support would be limited and performance might be unsatisfactory. To support an automatic memory management, the GC proposal would be handy.\nBut the Wasm runtime supports only WebAssembly MVP currently, and the ",(0,n.jsx)(i.a,{href:"https://github.com/WebAssembly/gc/blob/main/proposals/gc/Overview.md",children:"GC proposal"})," is under development."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["The standard library support in TinyGo is limited","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.code,{children:"reflect"})," package is ",(0,n.jsx)(i.a,{href:"https://github.com/tinygo-org/tinygo/pull/2640",children:"not fully supported"})," in TinyGo. The SCALE serialization logic relies on that package, and we also might need it to implement for the Metadata API."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,n.jsx)(i.p,{children:"Described below are the steps we think are necessary to get a deep understanding of how the current technical challenges we have found so far can be overcome:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Go internals, runtime, memory allocation, garbage collection","\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Get a deep understanding of how internals, runtime, memory allocation and garbage collection works in Go."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["WebAssembly GC proposal","\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Thoroughly research the GC proposal for WebAssembly, such as its design and progress so far."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["Research ",(0,n.jsx)(i.a,{href:"https://github.com/tinygo-org/tinygo",children:"TinyGo"})," or alternative compiler toolchain in Go for the following addition of:","\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"How it works"}),"\n",(0,n.jsx)(i.li,{children:"Features support"}),"\n",(0,n.jsx)(i.li,{children:"Wasm support"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["Build a PoC","\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Manual memory allocator, Go compiler Runtime implementation"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.li,{children:"Propose a specification, based on the previous steps"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"overview-1",children:"Overview"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Total Estimated Duration:"})," 8 working weeks"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Full-Time Equivalent (FTE):"}),"  2"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Total Costs:"})," $44,800"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"milestone-1--research-feasibility-of-a-go-runtime",children:"Milestone 1 \u2014 Research feasibility of a Go Runtime"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Estimated duration:"})," 8 working weeks"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"FTE:"})," 2"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Costs:"})," $44,800"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"This milestone will"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{style:{textAlign:"right"},children:"Number"}),(0,n.jsx)(i.th,{children:"Deliverable"}),(0,n.jsx)(i.th,{children:"Specification"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"right"},children:"0a."}),(0,n.jsx)(i.td,{children:"License"}),(0,n.jsx)(i.td,{children:"Apache 2.0"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"right"},children:"0b."}),(0,n.jsx)(i.td,{children:"Documentation"}),(0,n.jsx)(i.td,{children:"We will provide Markdown documentation of the whole research, explaining the necessary steps needed to resolve the technical challenges for Polkadot Runtime implementation."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"right"},children:"0c."}),(0,n.jsx)(i.td,{children:"Testing Guide"}),(0,n.jsx)(i.td,{children:"We will provide a testing guide of the PoC manual memory allocator via FFI"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"right"},children:"0d."}),(0,n.jsx)(i.td,{children:"Docker"}),(0,n.jsx)(i.td,{children:"We will provide a Dockerfile(s) that can be used to test the PoC."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"right"},children:"1."}),(0,n.jsx)(i.td,{children:"Research"}),(0,n.jsx)(i.td,{children:"We will start our research with  Go internals, runtime, memory allocation and garbage collection."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"right"},children:"2."}),(0,n.jsx)(i.td,{children:"Research"}),(0,n.jsx)(i.td,{children:"We will continue our research with the WebAssembly GC proposal - check progress so far."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"right"},children:"3."}),(0,n.jsx)(i.td,{children:"Research"}),(0,n.jsx)(i.td,{children:"We will go through intensively TinyGo or an alternative compiler toolchain."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"right"},children:"4."}),(0,n.jsx)(i.td,{children:"Research"}),(0,n.jsx)(i.td,{children:"We will try building a PoC, including a manual memory allocator, and a Go compiler Runtime implementation."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"right"},children:"5."}),(0,n.jsx)(i.td,{children:"Documentation"}),(0,n.jsx)(i.td,{children:"We will provide Markdown documentation, based on the previous steps."})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,n.jsx)(i.p,{children:"Having this research will give us clear understanding of how the technical challenges that Go has for Polkadot Runtime implementation can be resolved.\nBy resolving them, Go will become an alternative language to Rust for Polkadot Runtime implementation."}),"\n",(0,n.jsxs)(i.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,n.jsx)(i.p,{children:"LimeChain has been a long-time contributor to the Substrate ecosystem mainly focused on developer tooling. Due to our involvement in the space, we are working with various clients, developing smart contracts and working on parachains."})]})}function d(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>a});var n=t(96540);const s={},o=n.createContext(s);function r(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);