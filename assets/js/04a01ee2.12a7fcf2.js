"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[21823],{42337:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var t=i(74848),s=i(28453);const l={},r="cScale",a={id:"applications/cScale",title:"cScale",description:"This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a > (such as this one) can be removed.",source:"@site/applications/cScale.md",sourceDirName:"applications",slug:"/applications/cScale",permalink:"/applications/cScale",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/cScale.md",tags:[],version:"current",frontMatter:{}},d={},o=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Fixed Int",id:"fixed-int",level:4},{value:"Compact Int",id:"compact-int",level:4},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 - Working Product",id:"milestone-1---working-product",level:3},{value:"Milestone 2 - Additional testing",id:"milestone-2---additional-testing",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cscale",children:"cScale"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a ",(0,t.jsx)(n.code,{children:">"})," (such as this one) can be removed."]}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/#pencil-process",children:"Grants Program Process"})," on how to submit a proposal."]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Team Name:"})," Matthew Darnell (Individual)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Payment Address:"})," ",(0,t.jsx)(n.code,{children:"15ssDeS9peN9a3rDwFrV19YJ8oRffmphaE"})," (BTC)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 1"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Status:"})," ",(0,t.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/pull/625#issuecomment-1047869564",children:"Terminated"})]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,t.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"cScale is a SCALE codec implementation in C"}),"\n",(0,t.jsx)(n.li,{children:"Currently there does not seem to be a working standalone implementation of this serialization codec in C"}),"\n",(0,t.jsx)(n.li,{children:"A SCALE implementation would allow for the development of more desktop applications communicating with Substrate nodes"}),"\n",(0,t.jsx)(n.li,{children:"I am developing this because I am interested in creating a simple and secure desktop Substrate wallet"}),"\n",(0,t.jsx)(n.li,{children:"I already have a generally working product that I would also like to improve as I get suggestions"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"project-details",children:"Project Details"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Technology stack will be a simple C library, mostly in C99 with a few uses of C11 ",(0,t.jsx)(n.code,{children:"_Generic"}),". One dependency currently will be included which is an open sourced, single file, pure-header utf8 implementation useful for SCALE string encoding."]}),"\n",(0,t.jsx)(n.li,{children:"Makefile is included but can do simple CMakeLists.txt if preferred"}),"\n",(0,t.jsxs)(n.li,{children:["Supported Data Types will be:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fixed Width Integers"}),"\n",(0,t.jsx)(n.li,{children:"Compact/General Integers"}),"\n",(0,t.jsx)(n.li,{children:"Booleans"}),"\n",(0,t.jsx)(n.li,{children:"Options"}),"\n",(0,t.jsx)(n.li,{children:"Vectors (and Strings)"}),"\n",(0,t.jsx)(n.li,{children:"Enumerations"}),"\n",(0,t.jsx)(n.li,{children:"Tuples"}),"\n",(0,t.jsx)(n.li,{children:"User-Defined Data Structures"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Some limitations and caveats:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["C does not support ",(0,t.jsx)(n.code,{children:"uint128_t"})," types. Possible options are to introduce a 3rd party dependency or consume ",(0,t.jsx)(n.code,{children:"u128"})," values encoded as ",(0,t.jsx)(n.code,{children:"char*"})," strings. GCC does provide a ",(0,t.jsx)(n.code,{children:"uint128_t"})," extension but I'm not sure how universal this is and C does not support sufficiently long literal int values. Currently I am able to encode from a hex-represented ",(0,t.jsx)(n.code,{children:"u128"})," but could consume decimal represented ",(0,t.jsx)(n.code,{children:"char*"})," strings if required."]}),"\n",(0,t.jsxs)(n.li,{children:["Enumerations are tricky to implement as they are user-defined. I am able to construct a ",(0,t.jsx)(n.code,{children:"struct"})," which generates a custom enum type by consuming an array of strings of different types, e.g. ",(0,t.jsx)(n.code,{children:"[Int, Bool]"}),", but I am not sure how to make this very clean for the user."]}),"\n",(0,t.jsxs)(n.li,{children:["A lack of templating and type inference makes encoding/decoding user-defined ",(0,t.jsx)(n.code,{children:"struct"})," values a little difficult. I am able to achieve this by defining a custom ",(0,t.jsx)(n.code,{children:"struct"})," which contains a ",(0,t.jsx)(n.code,{children:"serialize"})," as well as ",(0,t.jsx)(n.code,{children:"deserialize"})," function pointer. The user will be able to include this ",(0,t.jsx)(n.code,{children:"struct"})," in his data structure and assign his own custom function. This works fine, but again, it is a little more in depth for the end user than ideal."]}),"\n",(0,t.jsx)(n.li,{children:"With each of these, I would love feedback from others on how to improve the library!"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The target audience are Desktop C/C++ developers who would like to be able to encode and decode Substrate API data"}),"\n",(0,t.jsxs)(n.li,{children:["Similar Projects","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Kagome (C++ and not intended for standalone library use)"}),"\n",(0,t.jsx)(n.li,{children:"FinoaBanking substrate-c-tool (Has not been updated for over a year and is in unknown state of completion as far as I can tell)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,t.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Matthew Darnell"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Contact Email:"})," ",(0,t.jsx)(n.a,{href:"mailto:matthew.darnell@protonmail.com",children:"matthew.darnell@protonmail.com"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,t.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/MatthewDarnell/iota-simplewallet",children:"https://github.com/MatthewDarnell/iota-simplewallet"})," -- IOTA C library"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/MatthewDarnell/redis_orderbook",children:"https://github.com/MatthewDarnell/redis_orderbook"})," -- Order matching engine in Rust"]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,t.jsx)(n.p,{children:"Currently have a basic working implementation. Generating a testing app, a basic cli app, and a statically linked library."}),"\n",(0,t.jsx)(n.p,{children:"Some examples:"}),"\n",(0,t.jsx)(n.h4,{id:"fixed-int",children:"Fixed Int"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'scale_fixed_int fixed = { 0 };\nencode_int_to_fixed_int_scale(&fixed, (uint16_t)42);\nuint8_t serialized[64] = { 0 };\nsize_t serialized_len = 0;\nserialize_fixed_int(serialized, &serialized_len, &fixed);\n\nuint16_t output = 0;\ndecode_scale_fixed_int((void*)&output, &fixed);\n\nfor(int i=0; i < serialized_len; i++) printf("%02X", serialized[i]);\nprintf(" --- %u\\n", output);\n'})}),"\n",(0,t.jsx)(n.p,{children:"Prints:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"2A00 --- 42\n"})}),"\n",(0,t.jsx)(n.h4,{id:"compact-int",children:"Compact Int"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:' scale_compact_int compact = { 0 };\n  encode_compact(&compact, (uint32_t)69);\n  uint8_t serialized[64] = { 0 };\n  size_t serialized_len = 0;\n  char *output = decode_compact_to_hex(&compact);\n  serialize_compact_int(serialized, &serialized_len, &compact);\n  uint32_t decoded = strtoul(output, NULL, 16);\n  printf("SCALE=<");\n  for(int i=0; i < serialized_len; i++) printf("%02X", serialized[i]);\n  printf("> --- Hex=<%s> --- Decoded=<%u>\\n", output, decoded);\n  free(output);\n'})}),"\n",(0,t.jsx)(n.p,{children:"Prints:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"SCALE=<1501> --- Hex=<45> --- Decoded=<69>\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,t.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Total Estimated Duration:"})," 1 month"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Full-Time Equivalent (FTE):"}),"  1 FTE"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Total Costs:"})," 10,000 USD, denominated in Bitcoin"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"milestone-1---working-product",children:"Milestone 1 - Working Product"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Estimated duration:"})," 2 weeks"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"FTE:"}),"  1"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Costs:"})," 9,000 USD in BTC"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"right"},children:"Number"}),(0,t.jsx)(n.th,{children:"Deliverable"}),(0,t.jsx)(n.th,{children:"Specification"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"0a."}),(0,t.jsx)(n.td,{children:"License"}),(0,t.jsx)(n.td,{children:"GPLv3"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"0b."}),(0,t.jsx)(n.td,{children:"Documentation"}),(0,t.jsxs)(n.td,{children:["I will provide a README with several examples as well as a .c file for each data type with several tests showing encoding and decoding. I will also provide a ",(0,t.jsx)(n.code,{children:"docs"})," folder containing a markdown file giving examples for each data type as well as commenting  each function in the main header file."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"1."}),(0,t.jsx)(n.td,{children:"Intermediate Structs"}),(0,t.jsx)(n.td,{children:"I will provide a set of Structs which represent SCALE data internally before being processed"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"2."}),(0,t.jsx)(n.td,{children:"Encode"}),(0,t.jsxs)(n.td,{children:["I will provide a set of functions that encode data into intermediate structs as well as others to serialize them. Each will generate an array of ",(0,t.jsx)(n.code,{children:"uint8_t*"})," as well as a corresponding length"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"3."}),(0,t.jsx)(n.td,{children:"Decode"}),(0,t.jsxs)(n.td,{children:["I will provide a set of functions that decode a valid SCALE ",(0,t.jsx)(n.code,{children:"uint8_t*"})," array into the appropriate intermediate struct as well as functions to deserialize the struct back into raw data"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"4."}),(0,t.jsx)(n.td,{children:"Testing"}),(0,t.jsx)(n.td,{children:"I will provide a testing application which tests each data type and ensures correctness"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"5."}),(0,t.jsx)(n.td,{children:"Basic CLI"}),(0,t.jsx)(n.td,{children:"I will provide a basic command line interface app which will encode/decode fixed width and compact integers"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"milestone-2---additional-testing",children:"Milestone 2 - Additional testing"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Estimated duration:"})," 1 month"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"FTE:"}),"  1"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Costs:"})," 1,000 USD in BTC"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"right"},children:"Number"}),(0,t.jsx)(n.th,{children:"Deliverable"}),(0,t.jsx)(n.th,{children:"Specification"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"0a."}),(0,t.jsx)(n.td,{children:"License"}),(0,t.jsx)(n.td,{children:"GPLv3"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"0b."}),(0,t.jsx)(n.td,{children:"Documentation"}),(0,t.jsx)(n.td,{children:"I will add several useful structs to the docs folder which represent actual Substrate data with their respective serialization functions. (AccountInfo, AccountData)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"1."}),(0,t.jsx)(n.td,{children:"Tests"}),(0,t.jsx)(n.td,{children:"I will work to provide more tests, preferably utilizing Rust FFI to compare against parity-scale-code results. This may or may not require some assistance as I have never used Rust FFI."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"I am writing this library to use in my own personal desktop wallet application"}),"\n",(0,t.jsxs)(n.li,{children:["I see a real need for it to allow the Substrate community to grow and I hope it makes it on the official list of ",(0,t.jsx)(n.a,{href:"https://substrate.dev/docs/en/knowledgebase/advanced/codec#implementations",children:"Scale Implementations"})]}),"\n",(0,t.jsx)(n.li,{children:"Long term I would be interested in improving this library to keep current with a possibly-evolving SCALE standard as well as getting help from other C devs making pull requests, which would be most welcome."}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"How did you hear about the Grants Program?"})," Shawn Tabrizi"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This started as a personal project and I would like to assist in expanding the Substrate ecosystem by providing a critical element of its infrastructure in C"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(96540);const s={},l=t.createContext(s);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);