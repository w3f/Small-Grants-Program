"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[79527],{12001:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(74848),s=n(28453);const r={},l="wasm-opt for Rust",o={id:"applications/wasm-opt-for-rust",title:"wasm-opt for Rust",description:"- Team Name: Common Orbit LLC",source:"@site/applications/wasm-opt-for-rust.md",sourceDirName:"applications",slug:"/applications/wasm-opt-for-rust",permalink:"/applications/wasm-opt-for-rust",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/wasm-opt-for-rust.md",tags:[],version:"current",frontMatter:{}},a={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Prior Work and Alternatives",id:"prior-work-and-alternatives",level:4},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Proof of Concept",id:"milestone-1--proof-of-concept",level:3},{value:"Milestone 2 \u2014 Integration",id:"milestone-2--integration",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Appendix: The <code>wasm-opt</code> installation experience",id:"appendix-the-wasm-opt-installation-experience",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.h1,{id:"wasm-opt-for-rust",children:[(0,i.jsx)(t.code,{children:"wasm-opt"})," for Rust"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Team Name:"})," Common Orbit LLC"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Payment Address:"})," (Ethereum DAI) 0x2de31E52E24Df0588C64B27657D4F75e5462adEf"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsxs)(t.strong,{children:[(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,i.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:["This project makes the ",(0,i.jsx)(t.a,{href:"https://rustwasm.github.io/book/reference/tools.html#wasm-opt--a-hrefhttpsgithubcomwebassemblybinaryenrepositorya",children:(0,i.jsx)(t.code,{children:"wasm-opt"})})," tool more accessible to Rust programmers.\n",(0,i.jsx)(t.code,{children:"wasm-opt"})," is a ",(0,i.jsx)(t.a,{href:"https://webassembly.org/",children:"WebAssembly"})," optimizer and is required by most software toolchains that\nproduce WebAssembly binaries."]}),"\n",(0,i.jsxs)(t.p,{children:["This project is to package ",(0,i.jsx)(t.code,{children:"wasm-opt"})," as a cargo crate,\nso that it can be installed by typing"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"cargo install wasm-opt"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Additionally, it will provide a Rust API so that toolchain developers may,\nif they desire, call ",(0,i.jsx)(t.code,{children:"wasm-opt"})," programmatically,\nso that their users are not required to manually install the tool."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"wasm-opt"})," is a part of the ",(0,i.jsx)(t.a,{href:"https://github.com/WebAssembly/binaryen",children:"binaryen"})," toolset, written in C++.\nIt is almost universally required by all toolchains that compile to WebAssembly.\nIt is required by Parity's ",(0,i.jsx)(t.a,{href:"https://github.com/paritytech/cargo-contract",children:(0,i.jsx)(t.code,{children:"cargo-contract"})})," tool for ",(0,i.jsx)(t.a,{href:"https://github.com/paritytech/ink",children:"ink!"})," development."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsxs)(t.strong,{children:["This tool can not be aquired in the way Rust programmers expect \u2014 with ",(0,i.jsx)(t.code,{children:"cargo install"}),"."]}),"\nInstallation of the tool is system-dependent.\nMany system package managers have some version of it,\nin some cases an old version;\nor it can be downloaded in binary form for most platforms, from GitHub,\nin which case it has to be extracted and added to the environment ",(0,i.jsx)(t.code,{children:"PATH"})," variable in an ad-hoc way."]}),"\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.a,{href:"#appendix-the-wasm-opt-installation-experience",children:"our personal experience"}),", aquiring this tool was a minor, but needless, barrier, to programming with ",(0,i.jsx)(t.a,{href:"https://github.com/paritytech/ink",children:"ink!"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["In the course of this grant ",(0,i.jsx)(t.code,{children:"cargo-contract"})," will receive pull requests\nto optionally enable both the following:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["recommend installation via ",(0,i.jsx)(t.code,{children:"cargo install wasm-opt"})]}),"\n",(0,i.jsxs)(t.li,{children:["use ",(0,i.jsx)(t.code,{children:"wasm-opt"})," via API and not require installation."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,i.jsxs)(t.p,{children:["Note that although ",(0,i.jsx)(t.code,{children:"wasm-opt"})," comes from the binaryen suite of tools,\nthis project is only focused on ",(0,i.jsx)(t.code,{children:"wasm-opt"}),".\nAll other binaryen tools are out of scope.\nIf this project is successful and there is demand,\nfuture work can extend the technique to the rest of binaryen."]}),"\n",(0,i.jsxs)(t.p,{children:["This project is technically straightforward.\nThe main complication is that within ",(0,i.jsx)(t.code,{children:"cargo"})," it is not possible to install binaries that were not produced\ndirectly by the Rust compiler.\nThis means that it is not possible to simply build ",(0,i.jsx)(t.code,{children:"wasm-opt"})," in a build script, then have ",(0,i.jsx)(t.code,{children:"cargo"})," install it."]}),"\n",(0,i.jsx)(t.p,{children:"This is the basic approach we will take, for the executable:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["a ",(0,i.jsx)(t.code,{children:"wasm-opt-sys"})," crate builds the C++ code for ",(0,i.jsx)(t.code,{children:"wasm-opt"})]}),"\n",(0,i.jsx)(t.li,{children:"the C++ source is built with only the C++ compiler all Rust users will have installed,\nno CMake or other build-system dependency"}),"\n",(0,i.jsxs)(t.li,{children:["the C++ ",(0,i.jsx)(t.code,{children:"wasm-opt"})," source is minimally-patched to export its ",(0,i.jsx)(t.code,{children:"main"})," function with C ABI to be called from Rust"]}),"\n",(0,i.jsxs)(t.li,{children:["a ",(0,i.jsx)(t.code,{children:"wasm-opt"})," crate contains a tiny Rust module that calls the C ",(0,i.jsx)(t.code,{children:"wasm-opt"})," main function"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"We have prototyped the project sufficiently to believe the described approach will succeed."}),"\n",(0,i.jsx)(t.p,{children:"For the library bindings:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"wasm-opt-sys"})," will export low-level Rust bindings with the help of one\nof the common C++-integration crates, likely ",(0,i.jsx)(t.code,{children:"cxx"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"wasm-opt"})," will provide an idiomatic Rust wrapper that exposes the necessary ",(0,i.jsx)(t.code,{children:"wasm-opt"})," options programmatically"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"We will also deliver the following:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Full README and API documentation"}),"\n",(0,i.jsx)(t.li,{children:"Basic regression tests for the binary and library"}),"\n",(0,i.jsxs)(t.li,{children:["CI for the platforms","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"aarch64-apple-darwin"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"aarch64-unknown-linux-gnu"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"i686-pc-windows-msvc"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"i686-unknown-linux-gnu"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"x86_64-apple-darwin"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"x86_64-pc-windows-msvc"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"x86_64-unknown-linux-gnu"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Pull requests adding optional support for the ",(0,i.jsx)(t.code,{children:"wasm-opt"})," crate to","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"cargo-contract"}),", the ink! build tool"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["One blog post about the tool and its development, at ",(0,i.jsx)(t.a,{href:"https://brson.github.io",children:"https://brson.github.io"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["We will not include the following ",(0,i.jsx)(t.code,{children:"wasm-opt"})," capabilities in the library bindings:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Fuzzing. ",(0,i.jsx)(t.code,{children:"wasm-opt"})," has multiple options related to fuzz testing the output\nmodule. We are aware of no potential clients for this feature. Including these\nfuzzing features requires code duplication in Rust, for additional maintenance\nburden and questionable benefit."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,i.jsx)(t.p,{children:"This project is immediately useful to all Rust developers that build for wasm."}),"\n",(0,i.jsxs)(t.p,{children:["It is more specifically useful to developers of Rust-based toolchains that target wasm,\nand most specifically the ",(0,i.jsx)(t.code,{children:"cargo-contract"})," tool used to compile ink! programs.\nIt is probably relevant to authors of Substrate runtimes as well,\nthough we do not have that experience yet."]}),"\n",(0,i.jsx)(t.h4,{id:"prior-work-and-alternatives",children:"Prior Work and Alternatives"}),"\n",(0,i.jsxs)(t.p,{children:["There are existing ",(0,i.jsx)(t.a,{href:"https://github.com/pepyakin/binaryen-rs",children:"Rust bindings for binaryen"}),".\nAs-is they don't provide a route to installing ",(0,i.jsx)(t.code,{children:"wasm-opt"})," via cargo.\nIt is unclear if they provide the APIs needed to expose ",(0,i.jsx)(t.code,{children:"wasm-opt"})," programmatically,\nthough they probably do.\nThese bindings appear to rely on CMake to build.\nWe do not expect to use them directly, but may reference them during development."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://github.com/bytecodealliance/cargo-wasi",children:(0,i.jsx)(t.code,{children:"cargo-wasi"})})," tool takes a ",(0,i.jsx)(t.a,{href:"https://bytecodealliance.github.io/cargo-wasi/wasm-opt.html#which-wasm-opt-executed",children:"different strategy"})," to acquiring ",(0,i.jsx)(t.code,{children:"wasm-opt"}),".\nIt automatically downloads the ",(0,i.jsx)(t.code,{children:"wasm-opt"})," binary, presumably from the official releases.\nOther wasm toolchains like ",(0,i.jsx)(t.code,{children:"cargo-contract"})," could follow a similar strategy,\npossibly by extracting the existing logic from ",(0,i.jsx)(t.code,{children:"cargo-wasi"}),"."]}),"\n",(0,i.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,i.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Team lead:"})," ",(0,i.jsx)(t.a,{href:"https://github.com/brson",children:"Brian Anderson"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Team member:"})," ",(0,i.jsx)(t.a,{href:"https://github.com/aimeedeer",children:"Aimee Zhu"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Name:"})," Brian Anderson"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Email:"})," ",(0,i.jsx)(t.a,{href:"mailto:andersrb@gmail.com",children:"andersrb@gmail.com"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Website:"})," ",(0,i.jsx)(t.a,{href:"https://brson.github.io",children:"https://brson.github.io"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Registered Address:"})," 16192 Coastal Highway, Lewes, Delaware 19958"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Registered Legal Entity:"})," Common Orbit LLC"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,i.jsxs)(t.p,{children:["The team lead is one of the original authors of the Rust programming language,\nwith 12 years of Rust experience.\nThey have performed Rust work for Mozilla, Reddit, PingCAP, Solana, MobileCoin, Parity, and Nervos.\nBoth team members are maintainers of the ",(0,i.jsx)(t.a,{href:"https://rustinblockchain.org/",children:"Rust in Blockchain"})," newsletter."]}),"\n",(0,i.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/brson/wasm-opt-rs",children:"https://github.com/brson/wasm-opt-rs"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/brson",children:"https://github.com/brson"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/aimeedeer",children:"https://github.com/aimeedeer"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"team-linkedin-profiles-if-available",children:"Team LinkedIn Profiles (if available)"}),"\n",(0,i.jsx)(t.p,{children:"N/A"}),"\n",(0,i.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/brson/wasm-opt-rs",children:"https://github.com/brson/wasm-opt-rs"})}),"\n",(0,i.jsxs)(t.p,{children:["We have created the initial project layout and investigated the feasibility of building the binaryen codebase using only the ",(0,i.jsx)(t.a,{href:"https://docs.rs/cc/latest/cc/",children:(0,i.jsx)(t.code,{children:"cc"})})," crate,\nas well as the feasibility of trivially calling the ",(0,i.jsx)(t.code,{children:"wasm-opt"})," ",(0,i.jsx)(t.code,{children:"main"})," function from Rust as described."]}),"\n",(0,i.jsxs)(t.p,{children:["We have reserved the ",(0,i.jsx)(t.code,{children:"wasm-opt"})," and ",(0,i.jsx)(t.code,{children:"wasm-opt-sys"})," crate names on crates.io."]}),"\n",(0,i.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,i.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Estimated Duration:"})," 3-4 months"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  0.4"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Costs:"})," 30,000 USD"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This will be a part time effort.\nI have divided this into two logical milestones,\nthough in reality the work will overlap."}),"\n",(0,i.jsx)(t.h3,{id:"milestone-1--proof-of-concept",children:"Milestone 1 \u2014 Proof of Concept"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"})," 1-2 month"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  0.4"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 15,000 USD"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["During this phase we will prove the concept and produce a ",(0,i.jsx)(t.code,{children:"wasm-opt"})," Rust binary and API."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"MIT / Apache-2.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsx)(t.td,{children:"Basic README."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,i.jsx)(t.td,{children:"Testing Guide"}),(0,i.jsx)(t.td,{children:"Manual smoke testing on Linux, Windows, and MacOS, x86_64 and ARM."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,i.jsx)(t.td,{children:"Docker"}),(0,i.jsx)(t.td,{children:"Docker is not required for this project."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"wasm-opt"})," binary"]}),(0,i.jsxs)(t.td,{children:["Produce a ",(0,i.jsx)(t.code,{children:"wasm-opt"})," binary that can be built by cargo but is otherwise identical to stock ",(0,i.jsx)(t.code,{children:"wasm-opt"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(t.td,{children:"APIs"}),(0,i.jsx)(t.td,{children:"Write an idiomatic, but possibly incomplete, Rust API for loading wasm, optimizing it, and writing it again."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-2--integration",children:"Milestone 2 \u2014 Integration"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"})," 1-2 month"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  0.4"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 15,000 USD"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["During this phase we will prepare the project for production and integrate it with ",(0,i.jsx)(t.code,{children:"cargo-contract"}),"."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"MIT / Apache-2.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsx)(t.td,{children:"Full README and API docs."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,i.jsx)(t.td,{children:"Testing Guide"}),(0,i.jsx)(t.td,{children:"Basic integration tests for both binary and library."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,i.jsx)(t.td,{children:"Docker"}),(0,i.jsx)(t.td,{children:"Docker is not required for this project."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0e."}),(0,i.jsx)(t.td,{children:"Article"}),(0,i.jsx)(t.td,{children:"Publish a technical blog post about how the project was developed and indicating it is available for use."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(t.td,{children:"APIs"}),(0,i.jsxs)(t.td,{children:["Ensure the APIs expose all the ",(0,i.jsx)(t.code,{children:"wasm-opt"})," options, and can be easily integrated into tools like ",(0,i.jsx)(t.code,{children:"cargo-contract"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"cargo-contract"})," integration"]}),(0,i.jsxs)(t.td,{children:["Submit a PR to ",(0,i.jsx)(t.code,{children:"cargo-contract"})," that integrates the ",(0,i.jsx)(t.code,{children:"wasm-opt"})," crate."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,i.jsx)(t.td,{children:"CI"}),(0,i.jsx)(t.td,{children:"Set up CI for all indicated platforms."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,i.jsx)(t.p,{children:"Upon completion of this project we will pursue a maintainence grant\nto supply hourly funds for maintenance of this project.\nWe expect maintenance to be minimal,\nprimarily updating the code and making new releases to match upstream binaryen releases,\nand responding to issue reports."}),"\n",(0,i.jsxs)(t.p,{children:["We are interested in pursuing a pure-Rust alternative to ",(0,i.jsx)(t.code,{children:"wasm-opt"})," with a limited\nfocus of quickly shrinking wasm binaries."]}),"\n",(0,i.jsx)(t.p,{children:"We expect to pursue additional projects related to ink! and Substrate."}),"\n",(0,i.jsxs)(t.h2,{id:"appendix-the-wasm-opt-installation-experience",children:["Appendix: The ",(0,i.jsx)(t.code,{children:"wasm-opt"})," installation experience"]}),"\n",(0,i.jsxs)(t.p,{children:["Upon calling ",(0,i.jsx)(t.code,{children:"cargo-contract build"})," without ",(0,i.jsx)(t.code,{children:"wasm-opt"})," installed\nthe build errors with this long explanation:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"ERROR: wasm-opt not found! Make sure the binary is in your PATH environment.\n\nWe use this tool to optimize the size of your contract's Wasm binary.\n\nwasm-opt is part of the binaryen package. You can find detailed\ninstallation instructions on https://github.com/WebAssembly/binaryen#tools.\n\nThere are ready-to-install packages for many platforms:\n* Debian/Ubuntu: apt-get install binaryen\n* Homebrew: brew install binaryen\n* Arch Linux: pacman -S binaryen\n* Windows: binary releases at https://github.com/WebAssembly/binaryen/releases\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Despite the effort to explain how to install this tool,\nfollowing the instructions on our system resulted in an old version of ",(0,i.jsx)(t.code,{children:"wasm-opt"}),"\nand ",(0,i.jsx)(t.code,{children:"cargo-contract"})," produced a new error:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"ERROR: Your wasm-opt version is 91, but we require a version >= 99.\n\nIf you tried installing from your system package manager the best\nway forward is to download a recent binary release directly:\n\nhttps://github.com/WebAssembly/binaryen/releases\n\nMake sure that the `wasm-opt` file from that release is in your `PATH`.\n"})}),"\n",(0,i.jsx)(t.p,{children:"This actually did about the best that could be expected to help us\nget set up, and we did end up downloading the binary tarball,\nextracting it, and modifying our path.\nBut the experience could be better."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var i=n(96540);const s={},r=i.createContext(s);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);