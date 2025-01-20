"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[18461],{4473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"applications/open-node-framework","title":"Open Node Framework","description":"Team Name:* Phala Network","source":"@site/applications/open-node-framework.md","sourceDirName":"applications","slug":"/applications/open-node-framework","permalink":"/applications/open-node-framework","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/open-node-framework.md","tags":[],"version":"current","frontMatter":{}}');var r=n(74848),s=n(28453);const a={},l="Open Node Framework",o={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 - Basic features and operating security improvement",id:"milestone-1---basic-features-and-operating-security-improvement",level:3},{value:"Milestone 2 \u2014 Advanced Features",id:"milestone-2--advanced-features",level:3},{value:"Future Plans",id:"future-plans",level:2}];function h(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"open-node-framework",children:"Open Node Framework"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Team Name:"})," Phala Network"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Payment Address:"})," DAI at 0x50DC97D0345d61B4D096e15313d50b6506972e5F"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Status:"})," ",(0,r.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/pull/334#issuecomment-1168505655",children:"Terminated"})]}),"\n"]}),"\n",(0,r.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,r.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Open Node Framework"})," is an end-to-end DevOps (SRE) solution to deploy a Substrate node network for staking and other purposes. It's designed to address high availability, scalability, and flexibility, using the modern technology stack."]}),"\n",(0,r.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,r.jsx)(t.p,{children:"While developing a Substrate based parachain, we found it challenging to operate and maintain different types of nodes. Validators and collators require high availability and key security. Bootnodes and RPC nodes require high performance and flexible scalability. So Open Node Framework has the following design purpose:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Parachain first: Focus on the requirement of parachains"}),"\n",(0,r.jsx)(t.li,{children:"Flexibility: Integrate with any Substrate based blockchain easily"}),"\n",(0,r.jsx)(t.li,{children:"Multipurpose: Run validators, collators, full nodes, bootstrap nodes, or RPC nodes"}),"\n",(0,r.jsx)(t.li,{children:"High Availability: Add redundancy to nodes (validators & collators) for higher security and robustness"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["There are a few existing projects that can partially meet the above requirements. Among them, ",(0,r.jsx)(t.a,{href:"https://github.com/w3f/polkadot-deployer",children:"Polkadot Deployer"})," is a k8s-based network deployment and monitoring tool. However, it's mainly designed for bootstraping and operating a full Polkadot, which may not meet the typical requirement of running a parachain. Therefore we think it's a good idea to iterate on it and make it parachain ready and address the features mentioned above."]}),"\n",(0,r.jsxs)(t.p,{children:["Tere are other interesting projects as well. ",(0,r.jsx)(t.a,{href:"https://github.com/w3f/polkadot-secure-validator",children:"Polkadot Secure Validator"})," implements a validator setup for Polkadot and Kusama coming with a monitoring system ",(0,r.jsx)(t.a,{href:"https://github.com/ironoa/polkadot-k8s-monitor",children:"Polkadot K8s Monitor"}),". ",(0,r.jsx)(t.a,{href:"https://github.com/gantree-io/",children:"Gantree"})," is a W3F Grant funded Substrate DevOps framework supporting customized Substrate node. However it lacks the support of node HA, and like the other two projects, doesn't support cross-datacenter deployment, and is not built on modern Kubernetes stack."]}),"\n",(0,r.jsx)(t.p,{children:"Open Node Framework wants to feature:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Multi IT infrastructure","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Native Kubernetes architecture"}),"\n",(0,r.jsx)(t.li,{children:"Cross-datacenter / cloud providers deployment with a central dashboard for daily management"}),"\n",(0,r.jsx)(t.li,{children:"Support multiple cloud providers with Terraform"}),"\n",(0,r.jsx)(t.li,{children:"Scale up to a large node network easily"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["High availability","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Upgradable node binary"}),"\n",(0,r.jsx)(t.li,{children:"Blockchain database backup and recovery"}),"\n",(0,r.jsx)(t.li,{children:"DDoS mitigation"}),"\n",(0,r.jsx)(t.li,{children:"Collator and validator redundancy"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Hardened security","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Ops jump servers / VPN behind a firewall"}),"\n",(0,r.jsx)(t.li,{children:"RPC authentication"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Monitoring","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Dashboard and data visualization with Prometheus and Graphana"}),"\n",(0,r.jsx)(t.li,{children:"Grafana / Loki stack for metrics, logging, tracing"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Flexible node integration","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Replacible Docker images for node binaries"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://i.imgur.com/VeoV3Oh.png",alt:""})}),"\n",(0,r.jsxs)(t.p,{children:["Open Node Framework has its MVP implementaion availabe at our ",(0,r.jsx)(t.a,{href:"https://github.com/Tenet-X/open-node",children:"Github Repo"}),". It implemented a basic infrastructure as shown in the above diagram. The components are deployed in a Kubernetes cluster with the binaries defined by Docker images. It supports both Terraform and Google GKE deployment, and it has been tested on Polkadot and Phala Network testnets."]}),"\n",(0,r.jsx)(t.p,{children:"In this grant, we are going to expand Open Node Framework in aspects:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Switch the code base to a fork of w3f/polkadot-deployer"}),"\n",(0,r.jsx)(t.li,{children:"Enable parachain and 3rd party binary config"}),"\n",(0,r.jsx)(t.li,{children:"Cross-datacenter deployment with a central place to manage and view the dashboard"}),"\n",(0,r.jsx)(t.li,{children:"HA collator validator setup"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"We are interested in the following areas but want to leave them for future work:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Secure Enclave protected Key Management Service"}),"\n",(0,r.jsx)(t.li,{children:"Integrate with indexing tools like SubQuery"}),"\n",(0,r.jsx)(t.li,{children:"Comprehensive UI for the end users"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Open Node Framework doesn't aim to build everything from scratch. We prefer to utilize the existing open source tools and potentially contribute to them. We plan to work on a fork of ",(0,r.jsx)(t.a,{href:"https://github.com/w3f/polkadot-deployer",children:"Polkadot Deployer"}),", and contribute it to the upstream if possible."]}),"\n",(0,r.jsx)(t.p,{children:"The other building block candidates are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Raft-based validator availablity","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Consul validator failover: ",(0,r.jsx)(t.a,{href:"https://github.com/protofire/polkadot-failover-mechanism",children:"protofire/polkadot-failover-mechanism"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Monitoring dashboard","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/ironoa/polkadot-k8s-monitor",children:"ironoa/polkadot-k8s-monitor"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/SimplyVC/panic_polkadot",children:"SimplyVC/panic_polkadot"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["API Serving","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/Joystream/hydra",children:"Joystream/hydra"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/subquery/subql",children:"subquery/subql"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/insight-w3f/terragrunt-polkadot",children:"insight-w3f/terragrunt-polkadot"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,r.jsx)(t.p,{children:"Open Node Framework provides the infrastructure to deploy any Substrate based parachain or standalone blockchain for multiple purposes, including running a bootstrap network, a validator cluster, a full node RPC service network, or a temporary simulation network for experiments, with all the essential infrastructure. It allows other Substrate blockchains to integrate with it easily."}),"\n",(0,r.jsx)(t.p,{children:"The project serves standalone the Substrate blockchain, parachain, and relay chain operators, offering them a flexible and user-friendly infrastructure framework with production best practice."}),"\n",(0,r.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,r.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Hang Yin: Lead & Software Engineer"}),"\n",(0,r.jsx)(t.li,{children:"Jun Jiang: Project Manager & Software Architect"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Contact Name:"})," Hang Yin"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Contact Email:"})," ",(0,r.jsx)(t.a,{href:"mailto:hangyin@phala.network",children:"hangyin@phala.network"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Website:"})," ",(0,r.jsx)(t.a,{href:"https://phala.network",children:"https://phala.network"})]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Registered Address:"})," 3 FRASER STREET #05-25 DUO TOWER SINGAPORE (189352)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Registered Legal Entity:"})," HASHFOREST TECHNOLOGY PTE. LTD."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,r.jsxs)(t.p,{children:["Open Node Framework is an open source project initiated by core members of ",(0,r.jsx)(t.a,{href:"https://phala.network",children:"Phala Network"})," and other contributors. Phala Network is a confidentiality layer for Polkadot that provides general purpose confidential smart contract to parachains on Polkadot and Kusama. The Phala team got two W3F General Grants: ",(0,r.jsx)(t.a,{href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/pLIBRA.md",children:"pDiem"})," and ",(0,r.jsx)(t.a,{href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/web3_analytics.md",children:"Web3 Analytics"}),". Phala has launched 3 testnets and got 1200+ nodes and 2600+ registered miners."]}),"\n",(0,r.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Open Node development repo: ",(0,r.jsx)(t.a,{href:"https://github.com/Phala-Network/open-node-deployer",children:"https://github.com/Phala-Network/open-node-deployer"})]}),"\n",(0,r.jsxs)(t.li,{children:["Open Node MVP: ",(0,r.jsx)(t.a,{href:"https://github.com/Tenet-X",children:"https://github.com/Tenet-X"})]}),"\n",(0,r.jsxs)(t.li,{children:["Phala Network team repo: ",(0,r.jsx)(t.a,{href:"https://github.com/Phala-Network",children:"https://github.com/Phala-Network"})]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"team-linkedin-profiles",children:"Team LinkedIn Profiles"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.linkedin.com/in/hang-yin-167012a7/",children:"https://www.linkedin.com/in/hang-yin-167012a7/"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.linkedin.com/in/jun-jiang-5b9b4153/",children:"https://www.linkedin.com/in/jun-jiang-5b9b4153/"})}),"\n"]}),"\n",(0,r.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,r.jsxs)(t.p,{children:["The MVP of Open Node Framework is available on ",(0,r.jsx)(t.a,{href:"https://github.com/Tenet-X",children:"Github"})," but we are going to switch to build on polkadot-deployer ",(0,r.jsx)(t.a,{href:"https://github.com/Phala-Network/open-node-deployer",children:"on our fork"})," instead. Please see ",(0,r.jsx)(t.a,{href:"#Project-Details",children:"Project Details"}),"."]}),"\n",(0,r.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,r.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Total Estimated Duration:"})," 3 months"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  2 FTE"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Total Costs:"})," 22,000 USD"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["In the milestone deliverable table, the features marked with ",(0,r.jsx)(t.em,{children:'"(addition)"'})," means add-on feature to the upstrea polkadot-deployer, and ",(0,r.jsx)(t.em,{children:'"(integration)"'})," means some changes in the upstream are required."]}),"\n",(0,r.jsx)(t.h3,{id:"milestone-1---basic-features-and-operating-security-improvement",children:"Milestone 1 - Basic features and operating security improvement"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Estimated Duration:"})," 3 months (ETA: Mar 15, 2022)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"FTE:"}),"  4"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Costs:"})," 10,000 USD"]}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,r.jsx)(t.th,{children:"Deliverable"}),(0,r.jsx)(t.th,{children:"Specification"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,r.jsx)(t.td,{children:"License"}),(0,r.jsx)(t.td,{children:"Apache 2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,r.jsx)(t.td,{children:"Documentation"}),(0,r.jsx)(t.td,{children:"Design docs including the architecture of the system and the design choices (including which open source projects to integrate). Inline documentation of the config files."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,r.jsx)(t.td,{children:"Testing Guide"}),(0,r.jsx)(t.td,{children:"A guide describing how to run the tests covering the cases in 0b."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,r.jsx)(t.td,{children:"Article/Tutorial"}),(0,r.jsx)(t.td,{children:"We will publish a tutorial and an workshop that explains how the project can be used to deploy different types of blockchain network."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,r.jsx)(t.td,{children:"Parachain support"}),(0,r.jsx)(t.td,{children:"Add parachain config support. (addition)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,r.jsx)(t.td,{children:"Custom Substrate support"}),(0,r.jsx)(t.td,{children:"Enable custom Substrate blockchain integration with the example configs to integrate with Substrate sample node (substrate/node/cli) (addition)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,r.jsx)(t.td,{children:"Operating scripts"}),(0,r.jsx)(t.td,{children:"Apply the declarative configs to: scale up / down the nodes (addition)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,r.jsx)(t.td,{children:"Monitoring, and logging"}),(0,r.jsx)(t.td,{children:"Implement the monitoring infrastructure with Prometheus and Loki to collect metrics and logs. (integration)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"5."}),(0,r.jsx)(t.td,{children:"Grey release"}),(0,r.jsx)(t.td,{children:"Integrate with CI/CD pipeline and enable greyscale release inside the cluster. (addition)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"6."}),(0,r.jsx)(t.td,{children:"More deployment modes"}),(0,r.jsx)(t.td,{children:"Templates to deploy bootstrap nodes, API nodes, and simulation network. (addition)"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"milestone-2--advanced-features",children:"Milestone 2 \u2014 Advanced Features"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Estimated Duration:"})," 1.5 month (ETA: Apr 30, 2022)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"FTE:"}),"  4"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Costs:"})," 12,000 USD"]}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,r.jsx)(t.th,{children:"Deliverable"}),(0,r.jsx)(t.th,{children:"Specification"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,r.jsx)(t.td,{children:"License"}),(0,r.jsx)(t.td,{children:"Apache 2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,r.jsx)(t.td,{children:"Documentation"}),(0,r.jsx)(t.td,{children:"We will provide high availability and session key management design docs, inline documentation of the config files and a basic tutorial that explains how to add HA setup, backup nodes, and alerts to the basic configurations as in M1."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,r.jsx)(t.td,{children:"Testing Guide"}),(0,r.jsx)(t.td,{children:"A guide describing how to run the tests covering the cases in 0b."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,r.jsx)(t.td,{children:"Article/Tutorial"}),(0,r.jsx)(t.td,{children:"We will extend the workshop to show how to deploy a hardened node network."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,r.jsx)(t.td,{children:"Backup node and recovery"}),(0,r.jsx)(t.td,{children:"Add sync node type and database backup & recovery routines. Add scripts to trigger and minotor the process. (addition)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,r.jsx)(t.td,{children:"Session key management"}),(0,r.jsx)(t.td,{children:"Add the script to interact with the node and the blockchain to generate and rotate the session keys, and add routines to migrate keys between validators and collators (or mount the keystore db to the assigned validators) (addition)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,r.jsx)(t.td,{children:"Alerts"}),(0,r.jsx)(t.td,{children:"Define the collator / validator related warnings and metrics from Prometheus and Loki and add them to the alerm manager. (integration)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,r.jsx)(t.td,{children:"HPA scaling"}),(0,r.jsx)(t.td,{children:"Automatically scale the storage and the size of the cluster based on load of the nodes. (addition)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"5."}),(0,r.jsx)(t.td,{children:"Authenticated RPC"}),(0,r.jsx)(t.td,{children:"Add the authentication layer to the node RPC for node operation (integration)"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,r.jsxs)(t.p,{children:["Besides the future work we described in ",(0,r.jsx)(t.a,{href:"#Project-Details",children:"Project Details"}),", the general plan is to make Open Node Framework an open and friendly open source project, lowering the barrier for Susbstrate developers to run their network. So we intend to use the project as a start point to build a developer community, and attract more contributors to sustain it."]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var i=n(96540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);