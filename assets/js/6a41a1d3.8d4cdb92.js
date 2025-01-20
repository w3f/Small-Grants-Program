"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[35036],{45752:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"docs/RFPs/scale-codec-comparator","title":"SCALE Codec Comparator","description":"This Request for Proposals is closed, meaning we are not looking for any more proposals on this topic at the moment.","source":"@site/docs/RFPs/scale-codec-comparator.md","sourceDirName":"docs/RFPs","slug":"/docs/RFPs/scale-codec-comparator","permalink":"/docs/RFPs/scale-codec-comparator","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/scale-codec-comparator.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"High-availability validator setup","permalink":"/docs/RFPs/raft-validators"},"next":{"title":"Social Recovery Wallet","permalink":"/docs/RFPs/social-recovery-wallet"}}');var r=s(74848),i=s(28453);const o={},a="SCALE Codec Comparator",l={},c=[{value:"Project Description \ud83d\udcc4",id:"project-description-page_facing_up",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-nut_and_bolt",level:2},{value:"Milestone 1: Feature-completeness &amp; FFI to Rust",id:"milestone-1-feature-completeness--ffi-to-rust",level:3},{value:"Milestone 2: Badge integration",id:"milestone-2-badge-integration",level:3}];function d(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"scale-codec-comparator",children:"SCALE Codec Comparator"})}),"\n",(0,r.jsx)(t.admonition,{type:"danger",children:(0,r.jsxs)(t.p,{children:["This Request for Proposals is ",(0,r.jsx)(t.em,{children:"closed"}),", meaning we are not looking for any more proposals on this topic at the moment."]})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Status:"})," ",(0,r.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/applications/scale-codec-comparator.md",children:"Implemented for ten encoding types"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Proposer:"})," ",(0,r.jsx)(t.a,{href:"https://github.com/mmagician/",children:"Marcin G\xf3rny"})]}),"\n"]}),"\n",(0,r.jsxs)(t.h2,{id:"project-description-page_facing_up",children:["Project Description ","\ud83d\udcc4"]}),"\n",(0,r.jsxs)(t.p,{children:["To date, there are ",(0,r.jsx)(t.a,{href:"https://docs.substrate.io/reference/scale-codec/",children:"9 published"})," implementations of the SCALE Codec. Since each is implemented by a different team & ",(0,r.jsx)(t.a,{href:"https://github.com/paritytech/parity-scale-codec",children:"the reference implementation"})," still introduces small fixes, it would be beneficial to compile a table of feature-completeness.\nThis would provide (some) assurance that the implementation in a given language is safe & sound to use."]}),"\n",(0,r.jsxs)(t.p,{children:["One approach would be to provide wrappers to the Rust reference implementation, like in ",(0,r.jsx)(t.a,{href:"https://github.com/itering/scale.rb/blob/develop/src/lib.rs",children:"scale.rb"})," and using the Foreign Function Interface (e.g. ",(0,r.jsx)(t.a,{href:"https://github.com/itering/scale.rb/blob/develop/spec/ffi_helper.rb",children:"here"}),") to call these directly from within the library."]}),"\n",(0,r.jsx)(t.p,{children:"Stage 2: To take this a step further, a GitHub action could be integrated to run all native unit tests also against the Rust lib. For repos which provide feature completeness & pass all relevant tests, a SCALE specific badge could be awarded."}),"\n",(0,r.jsxs)(t.h2,{id:"deliverables-nut_and_bolt",children:["Deliverables ","\ud83d\udd29"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Total Estimated Duration:"})," 2+ months"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Full-time equivalent (FTE):"}),"  1"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Total Costs:"})," ~ 12,000 DAI"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"milestone-1-feature-completeness--ffi-to-rust",children:"Milestone 1: Feature-completeness & FFI to Rust"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Estimated Duration:"})," 2 months"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"FTE:"}),"  1"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Costs:"})," ~ 10,000 DAI"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["For each library listed on ",(0,r.jsx)(t.a,{href:"https://docs.substrate.io/reference/scale-codec/",children:"substrate.dev"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Create a PR, providing a FFI to Rust's reference implementation."}),"\n",(0,r.jsx)(t.li,{children:"Ensure feature completeness, by ensuring there are comprehensive unit tests for each data type."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"milestone-2-badge-integration",children:"Milestone 2: Badge integration"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Estimated Duration:"})," 1 week"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"FTE:"}),"  1"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Costs:"})," ~ 2000 DAI"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Create a GitHub badge for SCALE feature complete libs"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Ensure that each lib listed above has the process of publishing the badge integrated into the CI workflow (e.g. GitHub action to run tests & award badge on successful run)"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Note: The goal is to have your changes merged upstream. While the final decision is taken by the repo owners, you should make sure that your PRs pass all checks specific to each lib, conforms to their contributing guidelines etc."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var n=s(96540);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);