"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[69466],{17835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=n(74848),i=n(28453);const s={},r="Polkadot Protocol Conformance Tests",a={id:"docs/RFPs/polkadot-protocol_conformance_tests",title:"Polkadot Protocol Conformance Tests",description:"This Request for Proposals is currently considered under development, meaning one or more grants have been signed to address the topic. We might be interested in additional implementations, but it\u2019s better to double check this with the grants team.",source:"@site/docs/RFPs/polkadot-protocol_conformance_tests.md",sourceDirName:"docs/RFPs",slug:"/docs/RFPs/polkadot-protocol_conformance_tests",permalink:"/docs/RFPs/polkadot-protocol_conformance_tests",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/polkadot-protocol_conformance_tests.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Polkadot Collator Setup",permalink:"/docs/RFPs/polkadot-collator-setup"},next:{title:"Privacy Enhancement for Polkadot Extension",permalink:"/docs/RFPs/privacy-enhancement-polkadot-extension"}},l={},c=[{value:"Project Description \ud83d\udcc4",id:"project-description-page_facing_up",level:2},{value:"Deliverables",id:"deliverables",level:2}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"polkadot-protocol-conformance-tests",children:"Polkadot Protocol Conformance Tests"}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsxs)(t.p,{children:["This Request for Proposals is currently considered ",(0,o.jsx)(t.strong,{children:"under development"}),", meaning one or more grants have been signed to address the topic. We might be interested in additional implementations, but it\u2019s better to double check this with the grants team."]})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Status:"})," ",(0,o.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/pull/1956",children:"Under Development (Zondax)"}),", ",(0,o.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/pull/1950",children:"Under Development (LimeChain)"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Proposer:"})," ",(0,o.jsx)(t.a,{href:"https://github.com/bhargavbh",children:"Bhargav Bhatt"}),", ",(0,o.jsx)(t.a,{href:"https://github.com/Noc2",children:"David Hawig"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Objectives:"})," Create and maintain a comprehensive test-suite for conformance of core functionalities of Polkadot Host."]}),"\n"]}),"\n",(0,o.jsxs)(t.h2,{id:"project-description-page_facing_up",children:["Project Description ","\ud83d\udcc4"]}),"\n",(0,o.jsxs)(t.p,{children:["The reliability and security of the Polkadot network crucially depends on bug-free implementation of Hosts/Nodes. Currently, Substrate and Smoldot (in Rust) are implementations in production, while ",(0,o.jsx)(t.a,{href:"https://github.com/ChainSafe/gossamer",children:"Gossamer (in Go)"})," and ",(0,o.jsx)(t.a,{href:"https://github.com/soramitsu/kagome/",children:"Kagome (in C++)"})," are in advanced stages of development. This RFP invites teams to create and maintain a comprehensive test-suite to check conformance of Host implementations against the official ",(0,o.jsx)(t.a,{href:"https://spec.polkadot.network/",children:"Polkadot Protocol Specification"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"The objectives are multifold. The test-suite can:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"be used to objectively evaluate the conformance of a Host Implementation against the Spec."}),"\n",(0,o.jsx)(t.li,{children:"help implementers in early stages and steer their development efforts."}),"\n",(0,o.jsx)(t.li,{children:"complement the specifications to clarify corner cases and intricacies of the Spec. In several scenarios, precise tests are highly valuable in clarifying the inevitable ambiguities in the Spec."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Initially, the focus would be on unit tests with tests designed and generated at the right layer of abstraction to accommodate the existing implementations. The scope of the test-suite covers all the components/protocols described in the Specification but we would like to prioritise the following:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Mapping the consensus attack surface and producing fuzzing targets accordingly. An indicative, non-exhaustive list of potential targets:","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Host API","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Sequences of storage and child-storage operations"}),"\n",(0,o.jsx)(t.li,{children:"Cryptography primitives, particularly those exposed in the Host API"}),"\n",(0,o.jsx)(t.li,{children:"Trie root"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["BABE","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Block import"}),"\n",(0,o.jsx)(t.li,{children:"Block validation"}),"\n",(0,o.jsx)(t.li,{children:"Next/current validators aka VRF/block lottery"}),"\n",(0,o.jsx)(t.li,{children:"Secondary slot verification"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["GRANDPA","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Block import"}),"\n",(0,o.jsx)(t.li,{children:"Block validation"}),"\n",(0,o.jsx)(t.li,{children:"Justification import & validation/verification"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.li,{children:"Trie proof verification"}),"\n",(0,o.jsx)(t.li,{children:"Scale encoding and decoding, for specific message types, and randomly generated ones"}),"\n",(0,o.jsx)(t.li,{children:"Parachain candidate validation"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"The goal of the initial grant should be to develop a PoC. The long-term goal should be to develop a comprehensive test suite that is funded by the on-chain treasury."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Useful resources:"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://spec.polkadot.network/",children:"Polkadot Protocol Specification"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/w3f/polkadot-tests",children:"GitHub polkadot-tests"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/AcalaNetwork/chopsticks",children:"Chopsticks"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/paritytech/zombienet",children:"Zombienet"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://paritytech.github.io/try-runtime-cli/try_runtime/",children:"try-runtime"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"deliverables",children:"Deliverables"}),"\n",(0,o.jsx)(t.p,{children:"The structure of the grant and the milestones depends highly on the project itself and the goal of the initial PoC. It\u2019s therefore up to the applying team to come up with a milestone and delivery structure."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(96540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);