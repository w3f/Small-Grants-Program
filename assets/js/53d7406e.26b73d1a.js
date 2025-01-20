"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[75435],{72401:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"applications/ZK-Snarks tutorial","title":"ZK-Snarks tutorial","description":"- Team Name: Bright Inventions","source":"@site/applications/ZK-Snarks tutorial.md","sourceDirName":"applications","slug":"/applications/ZK-Snarks tutorial","permalink":"/applications/ZK-Snarks tutorial","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/ZK-Snarks tutorial.md","tags":[],"version":"current","frontMatter":{}}');var s=t(74848),r=t(28453);const l={},o="ZK-Snarks tutorial",a={},d=[{value:"Project Description \ud83d\udcc4",id:"project-description-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Technology stack",id:"technology-stack",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1",id:"milestone-1",level:3},{value:"Milestone 2",id:"milestone-2",level:3}];function h(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"zk-snarks-tutorial",children:"ZK-Snarks tutorial"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Team Name:"})," Bright Inventions"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Payment Address:"})," 0xD75dDC4Aa3618e1417c68E5Df79ef9D66E4B1Ed9"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsxs)(i.strong,{children:[(0,s.jsx)(i.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n"]}),"\n",(0,s.jsxs)(i.h2,{id:"project-description-page_facing_up",children:["Project Description ","\ud83d\udcc4"]}),"\n",(0,s.jsx)(i.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(i.p,{children:"Main goal of this PoC is to introduce the substrate community into the zk-snarks concept. At this point we would like to create a few blog posts with the tutorial codebase, which will help in better understanding the zk-snarks for the substrate community."}),"\n",(0,s.jsx)(i.h3,{id:"project-details",children:"Project Details"}),"\n",(0,s.jsx)(i.p,{children:"Short description of the problem: Bob has sha256 hashed value and he would like to make sure Alice knows hashed value without Alice revealing it. To do so, Alice can use zksnarks to prove him she knows given value without making it public."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"function C(X, w) -> bool {\n  return ( sha256(w) == X );\n}\n"})}),"\n",(0,s.jsx)(i.h3,{id:"technology-stack",children:"Technology stack"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Rust - groth16 proof verification"}),"\n",(0,s.jsx)(i.li,{children:"Substrate - environment for pallet creation"}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://docs.circom.io/",children:"Circom compiler"})," - model problem to be solved by prover"]}),"\n",(0,s.jsx)(i.li,{children:"SnarkJS - zksnark setup and proof generation"}),"\n",(0,s.jsx)(i.li,{children:"PolkadotJS - presentation purposes"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,s.jsx)(i.p,{children:"By preparing a tutorial with basic implementation of the ZK-Snarks ion Substrate ecosystem, we hope to popularise this concept and make it more accessible to the Substrate developers. There are similar initiatives available in other blockchain technologies, however currently there is no easily accessible up to date demonstrational implementation of ZK-Snarks."}),"\n",(0,s.jsxs)(i.p,{children:["Few years ago a project aiming at such implementation (",(0,s.jsx)(i.a,{href:"https://github.com/zeropoolnetwork/zeropool-substrate-groth16-example",children:"Zeropool Substrate"}),") was shared on github, however it is not up to date at the moment. We haven't found a working, updated solution available to the public."]}),"\n",(0,s.jsx)(i.p,{children:"As our implementation will be accompanied by series of blog posts and a youtube tutorial video, we aim to reach wider audience and provide an accessible introduction to ZK-Snarks in Substrate for developers."}),"\n",(0,s.jsxs)(i.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,s.jsx)(i.h3,{id:"team-members",children:"Team members"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Micha\u0142 Grali\u0144ski - Rust Developer"}),"\n",(0,s.jsx)(i.li,{children:"Kasper Ziemianek - Rust Developer"}),"\n",(0,s.jsx)(i.li,{children:"Katarzyna \u0141ukasiewicz - Project Manager"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"contact",children:"Contact"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Contact Name:"})," Katarzyna \u0141ukasiewicz"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Contact Email:"})," ",(0,s.jsx)(i.a,{href:"mailto:katarzyna.lukasiewicz@brightinventions.pl",children:"katarzyna.lukasiewicz@brightinventions.pl"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Website:"})," ",(0,s.jsx)(i.a,{href:"https://brightinventions.pl/",children:"https://brightinventions.pl/"})]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,s.jsx)(i.p,{children:"Bright Inventions is a limited liability company based in Gdansk, Poland. Company was founded in 2012 by Daniel Makurat and Micha\u0142 \u0141ukasiewicz."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Registered Address:"})," ul. Jana Matejki 12, 80-232 Gda\u0144sk, Poland"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Registered Legal Entity:"})," Bright Inventions Sp. z o. o."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Info:"})," ",(0,s.jsx)(i.a,{href:"mailto:info@brightinventions.pl",children:"info@brightinventions.pl"}),", ",(0,s.jsx)(i.a,{href:"http://www.brightinventions.pl",children:"www.brightinventions.pl"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Company registration number:"})," 0000687244"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"VAT EU:"})," PL5842761920"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"REGON:"})," 367805647"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Bright Inventions is a team of oveer 70 full-time onsite developers, project managers & UX/UI designers - experts in mobile and web applications, systems integration, IOT devices and Blockchain platforms."}),"\n",(0,s.jsx)(i.p,{children:"We believe that building a software product is about people working together in a collective way. By offering complex support \u2013 mobile and web development as well as IT consultancy we try to eliminate roadblocks towards engaging clients as partners at every step of the process."}),"\n",(0,s.jsx)(i.p,{children:"We support startups, digital agencies as well as medium to big businesses. We cooperate with startups, accelerators and incubators. Whatever the client profile is, we always  aim to establish a satisfying partnership for both sides. Since 2012 we have built software for more than 40 businesses worldwide."}),"\n",(0,s.jsx)(i.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Micha\u0142 - Rust Developer, for over 12 years he has been working as a C++ developer. In his career he participate in various projects, starting from the embedded devices, automotive, mobile games and ending on the financial systems. Right now he is focused on the blockchain technology."}),"\n",(0,s.jsx)(i.li,{children:"Kasper - Software developer with 10 years of experience. Former Java Developer who has recently switched to Rust. Around blockchain ecosystem since 2017."}),"\n",(0,s.jsx)(i.li,{children:"Kasia - she has been working with agile methods for over 10 years, both as a researcher and a practitioner. She believes in teamwork and a power of user centered mindset. With experience in leading international projects, she knows how to support and encourage timely and high quality deliveries."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/bright/",children:"https://github.com/bright/"})}),"\n",(0,s.jsx)(i.h3,{id:"team-linkedin-profiles",children:"Team LinkedIn Profiles"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://www.linkedin.com/in/michal-gralinski-b464152/",children:"https://www.linkedin.com/in/michal-gralinski-b464152/"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://www.linkedin.com/in/kziemianek/",children:"https://www.linkedin.com/in/kziemianek/"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://www.linkedin.com/in/katarzyna-%C5%82ukasiewicz-b473901aa/",children:"https://www.linkedin.com/in/katarzyna-\u0142ukasiewicz-b473901aa/"})}),"\n"]}),"\n",(0,s.jsxs)(i.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,s.jsx)(i.h3,{id:"overview-1",children:"Overview"}),"\n",(0,s.jsx)(i.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Total Estimated Duration:"})," 10 weeks"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Full-Time Equivalent (FTE):"}),"  1 FTE"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Total Costs:"})," 25 000 DAI"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"milestone-1",children:"Milestone 1"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Estimated duration:"})," 4 weeks"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"FTE:"}),"  1"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Costs:"})," 10 000 DAI"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Create a pallet which will store a necessary data for a zk-Snarks + Research on ZK-Snarks concept"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(i.th,{children:"Deliverable"}),(0,s.jsx)(i.th,{children:"Specification"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:(0,s.jsx)(i.strong,{children:"0a."})}),(0,s.jsx)(i.td,{children:"License"}),(0,s.jsx)(i.td,{children:"Apache 2.0 / GPLv3 / MIT / Unlicense"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:(0,s.jsx)(i.strong,{children:"0b."})}),(0,s.jsx)(i.td,{children:"Documentation"}),(0,s.jsx)(i.td,{children:"We will provide inline documentation. The accompanying blogpost will also serve as an additional documentation."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:(0,s.jsx)(i.strong,{children:"0c."})}),(0,s.jsx)(i.td,{children:"Testing and Testing Guide"}),(0,s.jsx)(i.td,{children:"We will provide unit tests for the pallet and the guidelines for running and testing it."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:(0,s.jsx)(i.strong,{children:"0d."})}),(0,s.jsx)(i.td,{children:"Docker"}),(0,s.jsx)(i.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"1."}),(0,s.jsx)(i.td,{children:"The pallet"}),(0,s.jsx)(i.td,{children:"Pallet allows storing a verification key and the proof on the blockchain and run the on-chain verification. With the first milestone we will provide a dummy version mechanism, which is going to be replaced with the grooth16 in the next milestone."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"2."}),(0,s.jsx)(i.td,{children:"Blog post"}),(0,s.jsx)(i.td,{children:"With the first blog post we would like to focus on describing the audience the Zk-Snarks concept: A/ what are the zk-snarks, B/ describing the \u201cBob\u201d problem and how they can solve it. C/ describing the process of creating proof D/ creating a \u201ccircom\u201d example where we generate a proof."})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"milestone-2",children:"Milestone 2"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Estimated duration:"})," 6 weeks"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"FTE:"}),"  1"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Costs:"})," 15 000 DAI"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Implement the on-chain proof verification mechanism followed by series of educational materials."}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(i.th,{children:"Deliverable"}),(0,s.jsx)(i.th,{children:"Specification"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:(0,s.jsx)(i.strong,{children:"0a."})}),(0,s.jsx)(i.td,{children:"License"}),(0,s.jsx)(i.td,{children:"Apache 2.0 / GPLv3 / MIT / Unlicense"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:(0,s.jsx)(i.strong,{children:"0b."})}),(0,s.jsx)(i.td,{children:"Documentation"}),(0,s.jsx)(i.td,{children:"We will provide both inline documentation of the code and a tutorial (which will be a part of the blog post) that explains how a user can (for example) spin up Substrate nodes and upload a verification key and the proof. This will show how the new functionality works."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:(0,s.jsx)(i.strong,{children:"0c."})}),(0,s.jsx)(i.td,{children:"Testing and Testing Guide"}),(0,s.jsx)(i.td,{children:"We will provide unit tests for the proof verification mechanism."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:(0,s.jsx)(i.strong,{children:"0d."})}),(0,s.jsx)(i.td,{children:"Docker"}),(0,s.jsx)(i.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"1."}),(0,s.jsx)(i.td,{children:"Research notes"}),(0,s.jsx)(i.td,{children:"Mathematical calculations based on Groth16"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"2."}),(0,s.jsx)(i.td,{children:"Groth16  proof verification method"}),(0,s.jsx)(i.td,{children:"Implement Groth16  proof verification method which will be used by pallet"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"3."}),(0,s.jsx)(i.td,{children:"Demo"}),(0,s.jsx)(i.td,{children:"Create a demo, where we will use a 3-rd party tool to verify a solution & where we Alice could be rewarded for finding a solution."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"4."}),(0,s.jsx)(i.td,{children:"Circuits in circom"}),(0,s.jsx)(i.td,{children:"Prepare a circuits in circom, which will describe our problem"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"5."}),(0,s.jsx)(i.td,{children:"Blog post: Tutorial Groth16 (Part 1)"}),(0,s.jsx)(i.td,{children:'describing the groth16 & running "circom proof" from previous post with the Rust Unit test / CMD'})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"6."}),(0,s.jsx)(i.td,{children:"Blog post: Tutorial Pallet (Part 2)"}),(0,s.jsx)(i.td,{children:"updating the pallet with the groth16 & running an example from the previous tutorial with the PolkaJS"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"7."}),(0,s.jsx)(i.td,{children:"Youtube video"}),(0,s.jsx)(i.td,{children:"Youtube video tutorial explaining the concepts from the blog posts"})]})]})]})]})}function c(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>l,x:()=>o});var n=t(96540);const s={},r=n.createContext(s);function l(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);