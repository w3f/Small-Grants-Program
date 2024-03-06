"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[67416],{24020:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=r(74848),t=r(28453);const a={},i="BCANN ( The blockchain system for Assigned Names And Numbers )",o={id:"applications/BCANN",title:"BCANN ( The blockchain system for Assigned Names And Numbers )",description:"\ud83c\udf0f This page is also available in Chinese (\u4e2d\u6587).",source:"@site/applications/BCANN.md",sourceDirName:"applications",slug:"/applications/BCANN",permalink:"/applications/BCANN",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/BCANN.md",tags:[],version:"current",frontMatter:{}},c={},l=[{value:"Project Overview",id:"project-overview",level:2},{value:"Overview",id:"overview",level:3},{value:"Background",id:"background",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Interface Specification",id:"interface-specification",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Development Roadmap",id:"development-roadmap",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1: Initial implementation, name service registry and name resolver",id:"milestone-1-initial-implementation-name-service-registry-and-name-resolver",level:3},{value:"Milestone 2: Example of name services dapp",id:"milestone-2-example-of-name-services-dapp",level:3},{value:"Future Plans",id:"future-plans",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",del:"del",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"bcann--the-blockchain-system-for-assigned-names-and-numbers-",children:"BCANN ( The blockchain system for Assigned Names And Numbers )"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\ud83c\udf0f This page is also available in ",(0,s.jsx)(n.a,{href:"./application-template-cn.md",children:"Chinese (\u4e2d\u6587)"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a ",(0,s.jsx)(n.code,{children:">"})," (such as this one) can be removed."]}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"https://github.com/w3f/Open-Grants-Program/#pencil-process",children:"Open Grants Program Process"})," on how to submit a proposal."]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Proposer:"})," Witter Lee"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Payment Address:"})," 0x4575f459F79B6ed5Dd644aBCc64affCc4c680DE3"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Status:"})," ",(0,s.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/pull/353#issuecomment-946463960",children:"Terminated"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"project-overview",children:"Project Overview"}),"\n",(0,s.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"BCANN is a protocol of assigned names & numbers & crypto-currency addresses for multi-chain."}),"\n",(0,s.jsx)(n.h3,{id:"background",children:"Background"}),"\n",(0,s.jsx)(n.p,{children:"DNS is the infrastructure of the Internet,an efficient resource addressing method."}),"\n",(0,s.jsx)(n.p,{children:"But DNS has some common problems like below"}),"\n",(0,s.jsxs)(n.p,{children:["1.Domain name hijacking",(0,s.jsx)(n.br,{}),"\n","2.DNS cache pollution",(0,s.jsx)(n.br,{}),"\n","3.DDOS attack"]}),"\n",(0,s.jsx)(n.p,{children:"Decentralized DNS can solve those problems of centralized domain names through distributed ledger\uff1a"}),"\n",(0,s.jsx)(n.p,{children:"1.High security level same as BTC/ETH/DOT,the private key is the only way to manage domain name\n2.Prevent DNS cache pollution by distributed ledger for Name Services\n3.DDOS can not attack all decentralized name service nodes"}),"\n",(0,s.jsx)(n.p,{children:"There are some decentralized DNS projects, such as Namecoin, ENS, etc. These projects solve many central service problems, but the boundary of the blockchain makes DNS unable to act on the blockchain outside of itself."}),"\n",(0,s.jsx)(n.p,{children:"The Polkadot cross-chain ecosystem breaks the boundaries between the blockchain and makes it possible for the deentralized DNS, and that's why we created this project."}),"\n",(0,s.jsx)(n.h3,{id:"project-details",children:"Project Details"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://drive.google.com/file/d/1eD3fqQ0p7osblX1x-iW3hPLhIWG3R4Lv/view?usp=sharing",children:"architecture"})}),"\n",(0,s.jsx)(n.p,{children:"The BCANN protocol will allow parachains to quickly obtain the complete functions of decentralized domain names through the Polkadot parachain module, and meet the needs of developers on the parachain for the name services's functions."}),"\n",(0,s.jsx)(n.h4,{id:"interface-specification",children:"Interface Specification"}),"\n",(0,s.jsx)(n.p,{children:"Main interface (Users can implement the Resolver by themselves for extension)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"1. name registry\n    /**\n     * @dev Sets the record for a name.\n     * @param name The name to update.\n     * @param owner The address of the new owner.\n     * @param resolver The address of the resolver.\n     * @param ttl The TTL in seconds.\n     */\n    func setRecord(name, owner,resolver,ttl);\n\n     /**\n     * @dev Sets the record for a subname.\n     * @param name The parent name.\n     * @param label The hash of the label specifying the subname.\n     * @param owner The address of the new owner.\n     * @param resolver The address of the resolver.\n     * @param ttl The TTL in seconds.\n     */    \n    func setSubnameRecord(name, label, owner, resolver, ttl); \n\n     /**\n     * @dev Returns the resolver for the specified name.\n     * @param name The specified name.\n     * @return address of the resolver.\n     */\n    func resolver(name) return (resolver);\n\n     /**\n     * @dev Returns whether a record has been imported to the registry.\n     * @param name The specified name.\n     * @return Bool if record exists\n     */\n    func exists(name) return (bool) \n\n2. name resolver\n   DnsResolver\n    /**\n     * Set one or more DNS records.\n     * @param name the name for which to set the records\n     * @param data the DNS wire format records to set\n     */\n   func setDNSRecords(name,data);\n   \n    /**\n     * Obtain a DNS record.\n     * @param name the name for which to fetch the record\n     * @param fullname the fully-qualified name for which to fetch the record\n     * @param resource the ID of the resource as per https://en.wikipedia.org/wiki/List_of_DNS_record_types\n     * @return the DNS record\n     */\n    func dnsRecord(name, fullname, resource) return (data);\n\n   AddrResolver\n    /**\n     * set a addr record.\n     * @param name the name for which to set the records\n     * @param fullname the fully-qualified name for which to fetch the record\n     * @param the address of the coin type\n     * @return the DNS record\n     */\n    func setAddr(name,coinType,addr);\n\n    /**\n     * Obtain a coin address record.\n     * @param name the name for which to set the records\n     * @param fullname the fully-qualified name for which to fetch the record\n     * @return the coin address record\n     */\n    func addr(name,coinType) return (address);\n   NameResolver\n    /**\n     * Sets the name associated with a BCANN name, for reverse records\n     * May only be called by the owner of that name in the BCANN registry.\n     * @param name The name to update.\n     * @param nameVal The name value.\n     */\n    func setName(name,nameVal);\n\n    **\n     * Returns the name associated with a BCANN name, for reverse records.\n     * @param name The BCANN node to query.\n     * @return The associated name.\n     */\n    func name(name) return (nameVal);\n   TextResolver\n    /**\n     * Sets the text data associated with a BCANN name and key.\n     * May only be called by the owner of that name in the BCANN registry.\n     * @param name The name to update.\n     * @param key The key to set.\n     * @param value The text data value to set.\n     */\n    func setText(name, key, value);\n\n    /**\n     * Returns the text data associated with a BCANN name and key.\n     * @param node The BCANN node to query.\n     * @param key The text data key to query.\n     * @return The associated text data.\n     */\n    func text(name, string calldata key) return (text);\n   \n   PublicResolver:DnsResolver,AddrResolver,NameResolver,TextResolver\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,s.jsxs)(n.p,{children:["There is a ",(0,s.jsx)(n.a,{href:"https://github.com/w3f/Open-Grants-Program/blob/master/applications/deeper_network.md",children:"deeper.network"})," project that includes decentralized DNS. There are several diferences worth highligting:"]}),"\n",(0,s.jsx)(n.p,{children:"*Deeper's dDNS focuses on supporting it's DWEB , BCANNN focuses on decentralized name services for blockchain ecosystem, which includes dDNS and crypto-currency address pointing service."}),"\n",(0,s.jsxs)(n.p,{children:["There is a ",(0,s.jsx)(n.a,{href:"https://ens.domains/",children:"ens"})," project. There are several diferences worth highligting:"]}),"\n",(0,s.jsx)(n.p,{children:"*ENS is a smart contract deployed on ETH,BCANNN is the infrastructure of the parachain, which will be released as a substrate runtime module library."}),"\n",(0,s.jsxs)(n.p,{children:["There is a ",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/substrate",children:"Nicks Module"})," project. There are several diferences worth highligting:"]}),"\n",(0,s.jsx)(n.p,{children:"*Nicks Module is a module that keep track of account names on-chain.BCANN provides a complete domain name service and address mapping service."}),"\n",(0,s.jsxs)(n.p,{children:["There is a ",(0,s.jsx)(n.a,{href:"https://github.com/xaya/substrate-names/",children:"substrate-names"})," project. There are several diferences worth highligting:"]}),"\n",(0,s.jsx)(n.p,{children:"*Substrate-names, like NameCoin, only provides key-value style name services. BCANN provides complete domain name/subdomain name service and address mapping service."}),"\n",(0,s.jsxs)(n.p,{children:["There is a ",(0,s.jsx)(n.a,{href:"https://github.com/hskang9/substrate-name-service",children:"substrate-name-service"})," project. There are several diferences worth highligting:"]}),"\n",(0,s.jsx)(n.p,{children:"*Support of Substrate-name-service for subdomains is not good enough, and only supports IPV4. This is just a sample project and the updating has been stopped. BCANN provides complete domain name/subdomain name service and address mapping service."}),"\n",(0,s.jsx)(n.p,{children:"Name services is an infrastructure for blockchain ecosystem. In the blockchain world, the human-readable name is the effective identification for hash, addresses, and other items, which improves the usability."}),"\n",(0,s.jsx)(n.p,{children:"Usage scenarios:"}),"\n",(0,s.jsxs)(n.p,{children:["a. Human-readable identity for decentralized social media",(0,s.jsx)(n.br,{}),"\n","b. Human-readable identity for decentralized email",(0,s.jsx)(n.br,{}),"\n","c. Human-readable identity for the address to send asset",(0,s.jsx)(n.br,{}),"\n","d. domain name for decentralized web\ne. Human-readable identity for decentralized storage file locations"]}),"\n",(0,s.jsx)(n.p,{children:"BCANNN will create a name service protocol on polkadot parachain. As a basic protocol of the name service, BCANNN will have built-in support for name/subname registry and resolver,and it shall support existing blockchain domain names, such as .eth, .luxe, etc., through adapter contract. That means users can use BCANNN as a common resolver for all blockchain domain to query/update name services records."}),"\n",(0,s.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,s.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Witter Lee"}),"\n",(0,s.jsx)(n.li,{children:"Chak Zhou"}),"\n",(0,s.jsx)(n.li,{children:"Andy An"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Contact Name:"})," Witter Lee"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Contact Email:"})," ",(0,s.jsx)(n.a,{href:"mailto:lwt@msn.cn",children:"lwt@msn.cn"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No.2588 Hongmei South Road, Minhang District, Shanghai"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Shanghai Blockchain Network Technology Co., Ltd."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,s.jsxs)(n.p,{children:["Witter Lee :",(0,s.jsx)(n.br,{}),"\n","Full stack engineer with 12+ years of experience",(0,s.jsx)(n.br,{}),"\n","7 years of experience in the blockchain industry",(0,s.jsx)(n.br,{}),"\n","4 years of  experience in smart contract\n2013",(0,s.jsxs)(n.del,{children:["2014 RippleChina.cn's CTO",(0,s.jsx)(n.br,{}),"\n","2014"]}),"2016 fullcoin.com exchange's CTO",(0,s.jsx)(n.br,{}),"\n","2016",(0,s.jsxs)(n.del,{children:["2018 19800.com exchange CEO & CTO",(0,s.jsx)(n.br,{}),"\n","2018"]}),"2020 azex exchange CEO"]}),"\n",(0,s.jsxs)(n.p,{children:["Chak Zhou :",(0,s.jsx)(n.br,{}),"\n","Full stack engineer with 10+ years experience",(0,s.jsx)(n.br,{}),"\n","4 years of experience in the blockchain industry",(0,s.jsx)(n.br,{}),"\n","2 years of experience in smart contract development\n2010",(0,s.jsxs)(n.del,{children:["2014 Senior engineer of Travel e-commerce",(0,s.jsx)(n.br,{}),"\n","2014"]}),"2016 Senior engineer of cross-border e-commerce",(0,s.jsx)(n.br,{}),"\n","2017",(0,s.jsxs)(n.del,{children:["2018 19800.com exchange CTO",(0,s.jsx)(n.br,{}),"\n","2018"]}),"2020 azex exchange CTO"]}),"\n",(0,s.jsxs)(n.p,{children:["Andy An :",(0,s.jsx)(n.br,{}),"\n","Senior engineer engineer with 10 + years experience",(0,s.jsx)(n.br,{}),"\n","2 years of experience in the blockchain industry",(0,s.jsx)(n.br,{}),"\n","2 years of experience in smart contract\n2010",(0,s.jsxs)(n.del,{children:["2016 Senior engineer of alipay",(0,s.jsx)(n.br,{}),"\n","2016"]}),"2018 Senior engineer of 19800.com exchange",(0,s.jsx)(n.br,{}),"\n","2018~2020 Senior engineer of azex exchange"]}),"\n",(0,s.jsx)(n.p,{children:"We come from a long-term cooperation team, we have 5+ years experience in blockchain industry, like blockchain technology , smart contract development, We have 2+ years of experience in researching on the ens project."}),"\n",(0,s.jsx)(n.h2,{id:"development-roadmap",children:"Development Roadmap"}),"\n",(0,s.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Estimated Duration:"})," 12 weeks"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Costs:"})," 10,000.00 DAI"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-1-initial-implementation-name-service-registry-and-name-resolver",children:"Milestone 1: Initial implementation, name service registry and name resolver"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated Duration:"})," 4 weeks"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Full-time equivalent (FTE):"}),"  2"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 5,000 DAI"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0a."}),(0,s.jsx)(n.td,{children:"License"}),(0,s.jsx)(n.td,{children:"MIT"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0b."}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsx)(n.td,{children:"We will provide inline documentation of the code and basic tutorials, which will explain how to use name services"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0c."}),(0,s.jsx)(n.td,{children:"Testing coverage"}),(0,s.jsx)(n.td,{children:"The code will have unit-test coverage (min. 90%) to ensure functionality and robustness. We will describe how to run these tests in the guide."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1."}),(0,s.jsx)(n.td,{children:"Module design"}),(0,s.jsx)(n.td,{children:"The name/sub-name will enable NFT support for names transfer/rental services"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2."}),(0,s.jsx)(n.td,{children:"Customizable Resolver"}),(0,s.jsx)(n.td,{children:"We will implement methods to set up custom resolver"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"We will implement the protocol at this milestone. The deliverable part includes:\na. Official website with project introduction\nb. ParaChain frame source code, protocol introduction document and module deployment document\nc. Unit testing and test documentation"}),"\n",(0,s.jsx)(n.h3,{id:"milestone-2-example-of-name-services-dapp",children:"Milestone 2: Example of name services dapp"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://org.modao.cc/app/4447109c463ec3a36043cb54e1edd7fafcc01c2c?simulator_type=device&sticky",children:"mock-ups for milestone 2"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated Duration:"})," 4 weeks"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Full-time equivalent (FTE):"}),"  3"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 5,000 DAI"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0a."}),(0,s.jsx)(n.td,{children:"License"}),(0,s.jsx)(n.td,{children:"Apache 2.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0b."}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsx)(n.td,{children:"We will provide documentation on how to get a name/subname, and how to use your name/subname for crypto address resolve"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0c."}),(0,s.jsx)(n.td,{children:"Testing Guide"}),(0,s.jsx)(n.td,{children:"We will provide users with a test name services, and users can get a 30-day test period for a name/subname"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1."}),(0,s.jsx)(n.td,{children:"ns dapp"}),(0,s.jsx)(n.td,{children:"We will implement a dapp to get/manage/transfer your name/subname."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"We will implement a dapp at this milestone. The deliverable part includes:\na. Dapp for getting/managing/transferring your name/subname\nb. Dapp for getting/managing/transferring your name/subname for test purpose (free name/subname)"}),"\n",(0,s.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"We will create a mail system for name/subname which offers common mail service with crypto currency sending service"}),"\n",(0,s.jsx)(n.li,{children:"We will create a BCANN parachain for each parachain as the superset of the registry data, it can provide developers with one-stop domain name registry and resolve services"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var s=r(96540);const t={},a=s.createContext(t);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);