"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[73461],{50784:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"applications/pallet_supersig","title":"Supersig","description":"This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don\'t remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a > (such as this one) can be removed.","source":"@site/applications/pallet_supersig.md","sourceDirName":"applications","slug":"/applications/pallet_supersig","permalink":"/applications/pallet_supersig","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/pallet_supersig.md","tags":[],"version":"current","frontMatter":{}}');var n=i(74848),r=i(28453);const l={},a="Supersig",o={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"pallet_supersig public methods",id:"pallet_supersig-public-methods",level:3},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 pallet_supersig MVP",id:"milestone-1--pallet_supersig-mvp",level:3},{value:"Milestone 2 \u2014 Supersig for Polkadot JS UI",id:"milestone-2--supersig-for-polkadot-js-ui",level:3},{value:"Milestone 3 \u2014 Testing Feedback and Improvements",id:"milestone-3--testing-feedback-and-improvements",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"supersig",children:"Supersig"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a ",(0,n.jsx)(t.code,{children:">"})," (such as this one) can be removed."]}),"\n",(0,n.jsxs)(t.p,{children:["See the ",(0,n.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/#pencil-process",children:"Grants Program Process"})," on how to submit a proposal."]}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Team Name:"})," Decentration"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Payment Address:"})," (BTC)37hhQbMnXTrEgFnQUA9xJEeQMW7DuGvxuz"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsxs)(t.strong,{children:[(0,n.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["\u26a0\ufe0f ",(0,n.jsx)(t.em,{children:"The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe."})]}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,n.jsx)(t.p,{children:'"A Supersig is a Multisig with superpowers"'}),"\n",(0,n.jsx)(t.p,{children:"A new pallet that improves on the the very-well-used multisig, but making it fit for functioning more like a larger fund, sub-treasury, DAO, or as we like to call it a DOrg."}),"\n",(0,n.jsx)(t.p,{children:"This is Decentration's first grant proposal to Web3. We view this simple, suitable and potentially pervasivaely used pallet as a great opportunity to develop an ongoing relationship with Web3 Foundation, given that we have shared and aligned interests."}),"\n",(0,n.jsx)(t.p,{children:"These pallets improvements have already created a lot of interest and feedback from people in the community and on twitter, so we believe its a valuable use of resources."}),"\n",(0,n.jsx)(t.p,{children:"We also believe in building things people need rather over-engineering without validation. The simplicity of this pallet is a great example of this."}),"\n",(0,n.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["a ",(0,n.jsx)(t.em,{children:"supersig"})," is like a ",(0,n.jsx)(t.em,{children:"multisig"})," but with superpowers."]}),"\n",(0,n.jsx)(t.li,{children:"The first version lets you add and remove members, and has simpleMajority voting for all calls."}),"\n",(0,n.jsx)(t.li,{children:"Kabocha (parachain candidate) and Edgeware network will use this, but we believe all chains will benefit from it."}),"\n",(0,n.jsx)(t.li,{children:"The pallet will be unit tested and benchmarked."}),"\n",(0,n.jsx)(t.li,{children:'Our team is interested in this as we are building out "DGov" (decentralised governance) functionality for Kabocha. "Pallet Supersig" is but one of the multiple pallets we are building, which aims to benefit substrate chains. Our focus is on making Kabocha a grassroots substrate chain that benefits the wider substrate community.'}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Mockups/designs of any UI components: You can also view the diagram ",(0,n.jsx)(t.a,{href:"https://trello.com/c/qi4Nf2YT",children:"here"}),"\nOr ",(0,n.jsx)(t.a,{href:"https://github.com/rusty-crewmates/pallet_dorg/blob/e702f1a1b3fc5361dcc17e088e64c537f4211c79/pallet_dorg.drawio",children:"here"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"An overview of the technology stack to be used: Simple substrate pallet."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Documentation of core components, protocols, architecture, etc. to be deployed: pallet_supersig ",(0,n.jsx)(t.a,{href:"https://trello.com/c/qi4Nf2YT",children:"Trello ticket"})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"PoC/MVP or other relevant prior work or research on the topic. As a small team we have:"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["launched ",(0,n.jsx)(t.a,{href:"https://github.com/kabocha-network/parachain/",children:"Kabocha crowdloan"})]}),"\n",(0,n.jsxs)(t.li,{children:["developed pallet_mint: where funding proposals that are approved mint new coins, instead of from a treasury. ",(0,n.jsx)(t.a,{href:"https://github.com/kabocha-network/parachain/pull/6",children:"https://github.com/kabocha-network/parachain/pull/6"})]}),"\n",(0,n.jsx)(t.li,{children:'(upcoming) planning on-chain proposal system called "pallet_proposals" which will begin as a level 2 grant.'}),"\n",(0,n.jsxs)(t.li,{children:["maintaining a community run Rococo fork called ",(0,n.jsx)(t.a,{href:"https://apps.decentration.org/?rpc=wss%3A%2F%2Fpopart1.jelliedowl.com#/explorer",children:"Pop-Art"})]}),"\n",(0,n.jsxs)(t.li,{children:["Maintaining and upgrading ",(0,n.jsx)(t.a,{href:"https://trello.com/c/YPOPV5U8",children:"Substrate Recipes"})," for the benefit of the Substrate community."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["What your project is ",(0,n.jsx)(t.em,{children:"not"})," or will ",(0,n.jsx)(t.em,{children:"not"})," provide or implement"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"In this grant proposal we are focussing on the first minimimal viable version of the pallet, where threshold is enumerated to various options including simple and superMajority; and add/remove member functionality. We envisage many directions this can go and many features to improve it, but will stick to this simple implementation in the MVP. We also (in the second milestone) be adapting the polkadot-js-ui, as we do envisage visualising members in the Accounts and Address Book section would be very useful."}),"\n",(0,n.jsx)(t.li,{children:"We wont be creating a brand new UI, but this may be part of another proposal which will encompass various pallets we are working on."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,n.jsx)(t.p,{children:"Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:"Where and how does your project fit into the ecosystem?"})," It gives teams and sub-communities the opportunity to manage more funds, and add and remove members, while having a enum (simpleMajority) quorum that is not fixed x/n."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:"Who is your target audience?"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Multsig users of Substrate chains, who desire the extra features we have collected from feedback."}),"\n",(0,n.jsx)(t.li,{children:"Groups of people who want to self-bond a validator together."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:"What need(s) does your project meet?"})," It helps users of Substrate chains improve the fund management of the teams and projects that get funded by the community treasury."]}),"\n",(0,n.jsxs)(t.li,{children:["Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"pallet_collective is very similar, but as there are only a limited number of instances available, and such instances needed a general on-chain upgrade to instantiate, it is not useful for our needs."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,n.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:"Name of team leader:"})," Ramsey Ajram"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:"Names of team members:"})," Timoth\xe9e Delabrouille, Nathan Gardet, Jan Kraus, Eljo Prfiti, Richard Wells"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Contact Name:"})," Ramsey Ajram"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Contact Email:"})," ",(0,n.jsx)(t.a,{href:"mailto:ramsey@decentration.org",children:"ramsey@decentration.org"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Website:"})," ",(0,n.jsx)(t.a,{href:"https://kabocha.network",children:"https://kabocha.network"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Registered Address:"})," Digital Trust Company"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Registered Legal Entity:"})," Decentration Trust Company (470-2018-233-GB-001)"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,n.jsxs)(t.p,{children:["Ramsey (decentration) - Substrate Engineer, Product manager, startup technical founder. Leading ",(0,n.jsx)(t.a,{href:"https://kabocha.network",children:"Kabocha's"})," chain development and launch; Designer pallet_mint (done), pallet_proposals (ongoing).\nHere is a recent contribution from Ramsey in a ",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=IiAkJAfZsug&t=2299s",children:"Substrate Seminar"})]}),"\n",(0,n.jsx)(t.p,{children:"Timoth\xe9e Delabrouille (tdelabro) - Substrate / Rust Engineer, founder of Rusty Crewmates, contributor to Kabocha"}),"\n",(0,n.jsxs)(t.p,{children:["Nathan Gardet-Derc (erudyx) - Substrate / Rust Engineer, contributor to Kabocha, Rusty Crewmate. developer on ",(0,n.jsx)(t.a,{href:"https://github.com/kabocha-network/parachain/pull/6",children:"pallet_mint"})]}),"\n",(0,n.jsx)(t.p,{children:"Jan Kraus - Full stack deveveloper - Javascript / Typescript / React / Node.js / Next.js / Gatsby / Ruby on Rails"}),"\n",(0,n.jsxs)(t.p,{children:["Elio Prfiti - Substrate Engineer - Kabocha - Upgraded Substrate Recipes... ",(0,n.jsx)(t.a,{href:"https://wiki.kabocha.network/recipes",children:"https://wiki.kabocha.network/recipes"})]}),"\n",(0,n.jsx)(t.p,{children:"Richard Wells - Decent Partners, Kabocha founding steward, key stakeholder and communicator."}),"\n",(0,n.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/kabocha-network/parachain/tree/kab-release-v0.1.3",children:"https://github.com/kabocha-network/parachain/tree/kab-release-v0.1.3"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/rusty-crewmates/substrate-tutorials",children:"https://github.com/rusty-crewmates/substrate-tutorials"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/decentration",children:"https://github.com/decentration"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/gdnathan",children:"https://github.com/gdnathan"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/tdelabro",children:"https://github.com/tdelabro"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/johny",children:"https://github.com/johny"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/herou",children:"https://github.com/herou"})}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"team-linkedin-profiles-if-available",children:"Team LinkedIn Profiles (if available)"}),"\n",(0,n.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,n.jsxs)(t.p,{children:["pallet started here:\n",(0,n.jsx)(t.a,{href:"https://github.com/kabocha-network/pallet_supersig/tree/polkadot-v0.9.16",children:"https://github.com/kabocha-network/pallet_supersig/tree/polkadot-v0.9.16"})]}),"\n",(0,n.jsxs)(t.p,{children:["Description in trello ticket:\n",(0,n.jsx)(t.a,{href:"https://trello.com/c/qi4Nf2YT",children:"https://trello.com/c/qi4Nf2YT"})]}),"\n",(0,n.jsx)(t.p,{children:"*We are now working on the Supersig pallet (pallet_supersig). This pallet will benefit multisig users of Substrate based chains."}),"\n",(0,n.jsx)(t.p,{children:"The Supersig pallet is a multisig with super powers. It allows you to add and remove members of the multisig. It extends the capabilities of a multisig so it can be fit for governance of larger funds."}),"\n",(0,n.jsx)(t.p,{children:"A multisig transaction acts more like a treasury proposal. And the signatures become votes, with a quorum that can be changed (but in the MVP is fixed to simpleMajority).*"}),"\n",(0,n.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,n.jsxs)(t.p,{children:["This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories ",(0,n.jsx)(t.a,{href:"../docs/grant_guidelines_per_category.md",children:"here"}),". Since these will be part of the agreement, it helps to describe ",(0,n.jsx)(t.em,{children:"the functionality we should expect in as much detail as possible"}),", plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected."]}),"\n",(0,n.jsxs)(t.p,{children:["Below we provide an ",(0,n.jsx)(t.strong,{children:"example roadmap"}),". In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We ",(0,n.jsx)(t.em,{children:"recommend"})," that teams structure their roadmap as 1 milestone \u2248 1 month."]}),"\n",(0,n.jsx)(t.p,{children:"For each milestone,"}),"\n",(0,n.jsx)(t.h3,{id:"pallet_supersig-public-methods",children:"pallet_supersig public methods"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Create a supersig"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"create_supersig"})," will create a supersig with specified parameters, and transfer an existencial deposit from the creator to the generated supersig account, to bring the account to life. The dispatch origin for this call must be ",(0,n.jsx)(t.code,{children:"Signed"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The threshold is currently u128, but will be Enum."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:"pub fn create_supersig(\n   origin: OriginFor<T>,\n   members: Vec<T::AccountId>,\n   threshold: u128, \n  )\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Submit a call to a specific supersig"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"submit_call"})," will create a proposal on the supersig, that members can approve. This will lock an amount that depend on the length of the encoded call, to prevent spam. The dispatch origin for this call must be ",(0,n.jsx)(t.code,{children:"Signed"}),", and the origin must be a supersig member."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:"pub fn submit_call(\n   origin: OriginFor<T>,\n   supersig_id: T::AccountId,\n   call: Box<<T as pallet::Config>::Call>,\n  )\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Vote for a call in the supersig"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"approve_call"})," will add a positive, unique vote to the specified call proposal. If the numbers of votes on this proposal = SimpleMajority (51%), then the call is executed. The dispatch origin for this call must be ",(0,n.jsx)(t.code,{children:"Signed"}),", and the origin must be a supersig member."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:"pub fn approve_call(\n   origin: OriginFor<T>,\n   supersig_id: T::AccountId,\n   call_index: CallIndex,\n  )\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Remove a call from the supersig"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"remove_call"})," will remove a call from the poll. For trensparency reasons, the votes won't be removed. This will also unlock deposited funds. The dispatch origin for this call must be ",(0,n.jsx)(t.code,{children:"Signed"})," by either the supersig or the account who submitted the call."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:"pub fn remove_call(\n   origin: OriginFor<T>,\n   supersig_id: T::AccountId,\n   call_index: CallIndex,\n  )\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Add member to the supersig"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:"pub fn add_member(\n      origin: OriginFor<T>,\n   supersig_id: T::AccountId,\n   call_index: CallIndex,\n  )\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Remove member from the supersig"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:"pub fn remove_member(\n      origin: OriginFor<T>,\n   supersig_id: T::AccountId,\n   call_index: CallIndex,\n  )\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Milestone 1"})," to make a working, secure and usable pallet_supersig v0.1.0."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The pallet will be tested on the Pop-Art, community run relay test network"}),"\n",(0,n.jsx)(t.li,{children:"The pallet will be well benchmarked."}),"\n",(0,n.jsx)(t.li,{children:"The pallet will be functioning in both Kabocha and Edgware chains at the minimum."}),"\n",(0,n.jsx)(t.li,{children:"Unit integration tests"}),"\n",(0,n.jsx)(t.li,{children:"Easy to spin up node to test pallet"}),"\n",(0,n.jsx)(t.li,{children:"Clearly written as Readme and inline documentation"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Milestone 2"})," will make the Supersig as visible of an experience within the polkadot js UI as Multisig, The PR will be made, and if there is a blocker, then the apps.decentration.org fork will house the feature."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Polkadot JS UI will be forked and adapted to show the Supersig IF the chain has the pallet installed."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Milestone 3"}),' Will get feedback and make some improvements. One improvement is adding a "Super Beneficiary" option that allows a threshold of 2/n only if the Super Beneficiary is involved in the transaction. Else the transactio will default to a superMajority. This allows for greater than the usual 2/3 multisig, but without loss of security.']}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["\u26a1"," If any of your deliverables is based on somebody else's work, make sure you work and publish ",(0,n.jsx)(t.em,{children:"under the terms of the license"})," of the respective project and that you ",(0,n.jsx)(t.strong,{children:"highlight this fact in your milestone documentation"})," and in the source code if applicable! ",(0,n.jsx)(t.strong,{children:"Teams that submit others' work without attributing it will be immediately terminated."})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Total Estimated Duration:"})," 5 to 7 weeks"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  2"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Total Costs:"})," USD 27,000"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"milestone-1--pallet_supersig-mvp",children:"Milestone 1 \u2014 pallet_supersig MVP"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Estimated duration:"})," 3 to 4 weeks"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"FTE:"}),"  2"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Costs:"})," 14,000 USD"]}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,n.jsx)(t.th,{children:"Deliverable"}),(0,n.jsx)(t.th,{children:"Specification"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,n.jsx)(t.td,{children:"License"}),(0,n.jsx)(t.td,{children:"Apache 2.0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,n.jsx)(t.td,{children:"Documentation"}),(0,n.jsx)(t.td,{children:"We will provide inline documentation of the supersig pallet's code, and a basic tutorial that explains how a user can spin up one of our Substrate nodes and send test transactions, which will show how the supersig functionality works."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,n.jsx)(t.td,{children:"Testing Guide"}),(0,n.jsx)(t.td,{children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,n.jsx)(t.td,{children:"Docker"}),(0,n.jsx)(t.td,{children:"We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0e."}),(0,n.jsx)(t.td,{children:"Article"}),(0,n.jsx)(t.td,{children:"We will publish an article that explains supersig pallet to developers on medium and subsocial; and a substrate workshop/seminar that explains that shows how the pallet was designed (if there available slot, else a video shared on youtube)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,n.jsx)(t.td,{children:"Substrate module: pallet_supersig"}),(0,n.jsx)(t.td,{children:'We will create a Substrate pallet that will allow user you to create a "supersig" where users can be added and removed. All extrinsics will require a simpleMajority to approve. The clear difference from multisig is that the supersig address is not a composite of its signatories, therefore it will stay static when adding or removing signatories.'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,n.jsx)(t.td,{children:"Benchmarking"}),(0,n.jsx)(t.td,{children:"The pallet will be benchmarked and unit tested using worst case weightings."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"milestone-2--supersig-for-polkadot-js-ui",children:"Milestone 2 \u2014 Supersig for Polkadot JS UI"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Estimated duration:"})," 2 to 4 weeks"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"FTE:"}),"  1.5"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Costs:"})," 7,000 USD"]}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,n.jsx)(t.th,{children:"Deliverable"}),(0,n.jsx)(t.th,{children:"Specification"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,n.jsx)(t.td,{children:"License"}),(0,n.jsx)(t.td,{children:"Apache 2.0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,n.jsx)(t.td,{children:"Documentation"}),(0,n.jsx)(t.td,{children:"We will provide inline documentation and a tutorial with a polkadot-js apps fork that guides a developer to simply set up supersig pallet and UI."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,n.jsx)(t.td,{children:"Error messages"}),(0,n.jsx)(t.td,{children:"Core functions will be fully covered by very informative error messages."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,n.jsx)(t.td,{children:"Docker"}),(0,n.jsx)(t.td,{children:"We will provide a Dockerfile that can be used to test all the functionality delivered with milestone 2. The dockerfile will be a polkadot JS UI fork, it will also be the smallest possible file size (MBs not GBs)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0e."}),(0,n.jsx)(t.td,{children:"Article"}),(0,n.jsx)(t.td,{children:"We will publish an article that explains supersig pallet to the end-user. The article will be on medium and subsocial."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,n.jsx)(t.td,{children:"Substrate module: pallet_supersig"}),(0,n.jsx)(t.td,{children:"We will create a Substrate module from Milestone 1 that will be connected to a substrate chain as mentioned in 2."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,n.jsx)(t.td,{children:"Substrate chain"}),(0,n.jsx)(t.td,{children:"We will create a custom substrate template that will contain pallet supersig"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,n.jsx)(t.td,{children:"Polkadot JS Apps UI Fork"}),(0,n.jsx)(t.td,{children:"We will add the custom feature to a polkadot JS UI fork (and make a PR to the main repo), so that the user can see the pallet in action, end to end."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"milestone-3--testing-feedback-and-improvements",children:"Milestone 3 \u2014 Testing Feedback and Improvements"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Estimated duration:"})," 2 to 3 weeks"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"FTE:"}),"  2"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Costs:"})," 6,000 USD"]}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,n.jsx)(t.th,{children:"Deliverable"}),(0,n.jsx)(t.th,{children:"Specification"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,n.jsx)(t.td,{children:"License"}),(0,n.jsx)(t.td,{children:"Apache 2.0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,n.jsx)(t.td,{children:"Documentation"}),(0,n.jsx)(t.td,{children:"We will update inline documentation and tutorials based on updates and feedback gained from user interviews."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,n.jsx)(t.td,{children:"Testing Guide"}),(0,n.jsx)(t.td,{children:"If required we will update unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,n.jsx)(t.td,{children:"Docker"}),(0,n.jsx)(t.td,{children:"We will update the Dockerfile from previous milestones."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0e."}),(0,n.jsx)(t.td,{children:"Article"}),(0,n.jsx)(t.td,{children:"We will update our prior articles if we have made any changes during this milestone."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,n.jsx)(t.td,{children:"User interviews, feedback iteration"}),(0,n.jsx)(t.td,{children:"We will conduct user interviews to collate feedback and put them in a task backlog. We will select priorities that fit within the scope of this grant, which will be updated. From the findings of our feedback, a backlog of future tasks may be added on our kanban baord to create minor/major version bumps, and would inform the priority of future work. This milestone is vague because we are using this time to finding out unknowns to make changes with care (and in Good Faith)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,n.jsx)(t.td,{children:"Substrate module: pallet_supersig"}),(0,n.jsx)(t.td,{children:"We will make any necessary updates from previous milestones."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,n.jsx)(t.td,{children:"Polkadot JS Apps UI: Polkadot JS UI Fork"}),(0,n.jsx)(t.td,{children:"We will make any necessary updates from previous milestones."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,n.jsx)(t.p,{children:"Improvements:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"make it accessible in Kabocha and Edgeware after testing, then promote the pallet in the Substrate community, and invite other communities to include the pallet;"}),"\n",(0,n.jsx)(t.li,{children:"feature to change the quorum. Or have different quorums filtered by different categories (like proxy filter)"}),"\n",(0,n.jsxs)(t.li,{children:["Add Option Master Beneficiary (see ",(0,n.jsx)(t.a,{href:"https://github.com/rusty-crewmates/pallet_supersig/issues/1",children:"here"}),")"]}),"\n",(0,n.jsx)(t.li,{children:"We can envisage is making the pallet more compatible in the polkadot-js-apps UI."}),"\n",(0,n.jsx)(t.li,{children:"We then aim to improve the functionality of the pallet based on feedback."}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Who can vouch for Ramsey(Decentration)?"})," Josh Muir (Kusama Council and Dat Dot), Bruno \u0160kvorc, Dan Shields, Will Chevdor, Sacha Lanski..."]})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>a});var s=i(96540);const n={},r=s.createContext(n);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);