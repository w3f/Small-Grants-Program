"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[1689],{59439:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));a(95657);const r={},i="Supersig",o={unversionedId:"applications/supersig_fellowship",id:"applications/supersig_fellowship",title:"Supersig",description:"This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a > (such as this one) can be removed.",source:"@site/applications/supersig_fellowship.md",sourceDirName:"applications",slug:"/applications/supersig_fellowship",permalink:"/Grants-Program/applications/supersig_fellowship",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/supersig_fellowship.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Limit Call Data Size",id:"limit-call-data-size",level:3},{value:"Limit Number of Live Proposals",id:"limit-number-of-live-proposals",level:3},{value:"Enable off-chain signing (optional work)",id:"enable-off-chain-signing-optional-work",level:3},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 pallet_supersig MVP",id:"milestone-1--pallet_supersig-mvp",level:3},{value:"Milestone 2 \u2014 Supersig UI and feedback from Fellowship",id:"milestone-2--supersig-ui-and-feedback-from-fellowship",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"supersig"},"Supersig"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a ",(0,l.kt)("inlineCode",{parentName:"p"},">")," (such as this one) can be removed."),(0,l.kt)("p",{parentName:"blockquote"},"See the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/#pencil-process"},"Grants Program Process")," on how to submit a proposal.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Team Name:")," Decentration"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Payment Address:")," (BTC)37hhQbMnXTrEgFnQUA9xJEeQMW7DuGvxuz"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,l.kt)("em",{parentName:"p"},"The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe."))),(0,l.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,l.kt)("p",null,'"A Supersig is a Multisig with superpowers"'),(0,l.kt)("p",null,'A new pallet, RPC and UI that enables organisations to benefit from much more flexibility than multisig, where users can add and remove members, as well as optionally add "Master" users that have more power than "Standard" users. see our prior grant phase completion ',(0,l.kt)("a",{parentName:"p",href:"https://decentration.medium.com/decentration-completes-supersig-w3f-funded-grant-5e788f858ca8"},"blog post")),(0,l.kt)("p",null,"This is Decentration's second grant proposal for Web3. Our ethos is to build, simple user friendly products that many would be used by many. Our aim is to see Supersig be used across many chains and communities, rather than used by just one small community in the ecosystem. This second grant core aim is to make changes that enables supersig to go into the Statemine parachain. In order to do this some refactoring needs to take place both in the pallet and in the frontend. This has been based on feedback from two key product owners, Joe from Statemint/mine, and Jaco from polkadot-js. "),(0,l.kt)("p",null,"To avoid private gatekeeping, the PR into Statemine would require approval from Fellowship members. Therefore we need to make a few changes that will have it in the best state so it is approved, as well as be prepared for any further feedback provided to make any other changes. "),(0,l.kt)("p",null,"Our frontend app needs some changes in order for Jaco to accept it into the official apps repo after it has been PR'd into Statemine. As well as this we want to build a separate (non polkadot-js) custom user interface. "),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"a ",(0,l.kt)("em",{parentName:"li"},"supersig")," is like a ",(0,l.kt)("em",{parentName:"li"},"multisig")," but with superpowers."),(0,l.kt)("li",{parentName:"ul"},"we want to continue to change and improve to be to a system chain standard."),(0,l.kt)("li",{parentName:"ul"},"make changes to pallet of supersig based on feedback from statemine product owner. "),(0,l.kt)("li",{parentName:"ul"},"make changes to UI based on feedback from polkadot-js apps product owner. "),(0,l.kt)("li",{parentName:"ul"},"You can try out the first version here, see our test ",(0,l.kt)("a",{parentName:"li",href:"https://apps.decentration.org/?rpc=wss%3A%2F%2Fsoupcan1.jelliedowl.com#/supersig/dashboard"},"chain")," ")),(0,l.kt)("h3",{id:"project-details"},"Project Details"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"An overview of the technology stack to be used: Substrate, Rust, React/Typescript.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"PoC/MVP or other relevant prior work or research on the topic. Decentration has:"),(0,l.kt)("li",{parentName:"ul"},"delivered ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/kabocha-network/pallet_supersig"},"Supersig v1"),". "),(0,l.kt)("li",{parentName:"ul"},"launched ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/kabocha-network/parachain/"},"Kabocha crowdloan")),(0,l.kt)("li",{parentName:"ul"},"developed pallet_mint: where funding proposals that are approved mint new coins, instead of from a treasury. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/kabocha-network/parachain/pull/6"},"https://github.com/kabocha-network/parachain/pull/6")))))),(0,l.kt)("li",{parentName:"ul"},"What your project is ",(0,l.kt)("em",{parentName:"li"},"not")," or will ",(0,l.kt)("em",{parentName:"li"},"not")," provide or implement",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"In this grant proposal we are focussing on making iterations to the minimimal viable version of the pallet to make it less prone to bloat due to unbounded call data in the storage, we won't be creating a new pallet. ")))),(0,l.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,l.kt)("p",null,"Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Where and how does your project fit into the ecosystem?")," The aim is for it to be part of system chains on kusama and thereafter polkadot's Statemint. We want to maximise for ubiquitous use, and we believe this is the most effective route to get there. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Who is your target audience?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Multsig users of Substrate chains, who desire more flexibility and create scalable organisations."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"What need(s) does your project meet?")," It helps users of Substrate chains improve the fund management of the teams and projects that get funded by the community treasury."),(0,l.kt)("li",{parentName:"ul"},"Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"pallet_collective is very similar, but as there are only a limited number of instances available, and such instances needed a general on-chain upgrade to instantiate, it is not useful for our needs.  "),(0,l.kt)("li",{parentName:"ul"},"pure proxy in the proxy_pallet has similarities in how addresses are created on-chain. ")))),(0,l.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,l.kt)("h3",{id:"team-members"},"Team members"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Name of team leader:")," Ramsey Ajram"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Names of team members:")," Tsubasa Mori, Nathan Gardet Derc")),(0,l.kt)("h3",{id:"contact"},"Contact"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Name:")," Ramsey Ajram"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,l.kt)("a",{parentName:"li",href:"mailto:ramsey@decentration.org"},"ramsey@decentration.org")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Website:")," ",(0,l.kt)("a",{parentName:"li",href:"https://decentration.org"},"https://decentration.org"))),(0,l.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Registered Address:")," Digital Trust Company"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Decentration Trust Company (470-2018-233-GB-001)")),(0,l.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,l.kt)("p",null,"Ramsey (decentration) - Substrate Engineer, Product manager, startup technical founder. Launched ",(0,l.kt)("a",{parentName:"p",href:"https://kabocha.network"},"Kabocha")," parachain, chain development and launch; team lead product owner of Supersig. Alumni of Polkadot Blockchain Academy\nHere is a recent contribution from Ramsey in a ",(0,l.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=IiAkJAfZsug&t=2299s"},"Substrate Seminar")),(0,l.kt)("p",null,"Nathan Gardet-Derc (erudyx) - Substrate / Rust Engineer, contributor to Kabocha, Rusty Crewmate. developer on ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kabocha-network/pallet_supersig"},"pallet_supersig"),". Alumni of Polkadot Blockchain Academy"),(0,l.kt)("p",null,"Tsubasa Mori (KingdomParadise) - Full stack developer - Javascript / Typescript / React / Rust / Node.js / Next.js "),(0,l.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/decentration/apps/tree/supersig-v1.0.0"},"https://github.com/decentration/apps/tree/supersig-v1.0.0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kabocha-network/pallet_supersig"},"https://github.com/kabocha-network/pallet_supersig"))),(0,l.kt)("p",null,"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/decentration"},"https://github.com/decentration")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/KingdomParadise"},"https://github.com/KingdomParadise")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/gdnathan"},"https://github.com/gdnathan"))),(0,l.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,l.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,l.kt)("p",null,"pallet started here:\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kabocha-network/pallet_supersig/tree/polkadot-v0.9.37"},"https://github.com/kabocha-network/pallet_supersig/tree/polkadot-v0.9.37")),(0,l.kt)("p",null,"*Supersig is functional, accessible and usable for developers to integrate and for their end users. "),(0,l.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,l.kt)("p",null,"This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories ",(0,l.kt)("a",{parentName:"p",href:"../docs/grant_guidelines_per_category.md"},"here"),". Since these will be part of the agreement, it helps to describe ",(0,l.kt)("em",{parentName:"p"},"the functionality we should expect in as much detail as possible"),", plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected."),(0,l.kt)("p",null,"Below we provide an ",(0,l.kt)("strong",{parentName:"p"},"example roadmap"),". In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We ",(0,l.kt)("em",{parentName:"p"},"recommend")," that teams structure their roadmap as 1 milestone \u2248 1 month."),(0,l.kt)("p",null,"For each milestone,"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Milestone 1")," To make changes to ",(0,l.kt)("inlineCode",{parentName:"p"},"pallet_supersig")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"apps frontend")," so that it is up to scratch with system chain level use, accepted by polkadot-js apps, and prepared for Fellowship review. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The pallet will be refactored based on feedback from Joe Petrowski, product owner of Statemine, after he is satisfied withe changes we will make the case to the Polkadot Fellowship. "),(0,l.kt)("li",{parentName:"ul"},"Based on feedback from Jaco, product owner of polkadot-js, changes need to be made so that supersig-app is accepted officially into the repo and if it is accepted into Statemine. "),(0,l.kt)("li",{parentName:"ul"},"The pallet will be tested on the Pop-Art, community run relay test network"),(0,l.kt)("li",{parentName:"ul"},"The pallet will be well benchmarked."),(0,l.kt)("li",{parentName:"ul"},"The pallet will aim to be on Statemine parachain on kusama. "),(0,l.kt)("li",{parentName:"ul"},"Unit integration tests"),(0,l.kt)("li",{parentName:"ul"},"Easy to spin up node to test pallet"),(0,l.kt)("li",{parentName:"ul"},"Clearly written as Readme and inline documentation")),(0,l.kt)("p",null,"Details for pallet: "),(0,l.kt)("p",null,'We will likely be making a limit on call data size and a cap on the number of "live proposals" there can be per chain. '),(0,l.kt)("h3",{id:"limit-call-data-size"},"Limit Call Data Size"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Limit call data size: Introduce a maximum call data size limit in the configuration trait. This limit can be set to a reasonable default value, which can be changed as required. Users will be prevented from submitting call data exceeding this limit:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"#[pallet::config]\npub trait Config: frame_system::Config {\n    // ...\n    /// The maximum size of call data allowed (in bytes).\n    #[pallet::constant]\n    type MaxCallDataSize: Get<u32>;\n    // ...\n}\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Check call data size: Before storing the call data in create, approve, and other relevant functions, ensure that its size is within the specified limit.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"// In the `create` function\nensure!(\n    call_data.len() <= T::MaxCallDataSize::get() as usize,\n    Error::<T>::CallDataTooLarge\n);\n\n// Similarly, add checks in the `approve` and other relevant functions.\n\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Add a new error variant for oversized call data:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"#[pallet::error]\npub enum Error<T> {\n    // ...\n    /// The call data size exceeds the maximum allowed limit.\n    CallDataTooLarge,\n    // ...\n}\n")),(0,l.kt)("h3",{id:"limit-number-of-live-proposals"},"Limit Number of Live Proposals"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Add the LiveProposalMaximum associated type to the pallet's Config trait:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait Config: frame_system::Config {\n    // ...\n    type LiveProposalMaximum: Get<u32>;\n    // ...\n}\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Add a storage item to track the number of active proposals for each Supersig account:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"#[pallet::storage]\n#[pallet::getter(fn active_proposals)]\npub type ActiveProposals<T: Config> = StorageMap<_, Twox64Concat, SupersigId, u32, ValueQuery>;\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Modify the submit_call extrinsic to check the number of active proposals before allowing a new one:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"#[pallet::weight(T::WeightInfo::submit_call())]\npub fn submit_call(origin: OriginFor<T>, supersig_id: SupersigId, call_data: Vec<u8>) -> DispatchResultWithPostInfo {\n    let who = ensure_signed(origin)?;\n    // ...\n\n    let current_active_proposals = Self::active_proposals(supersig_id);\n    ensure!(current_active_proposals < T::LiveProposalMaximum::get(), Error::<T>::TooManyActiveProposals);\n\n    // ...\n}\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Increment the number of active proposals for the Supersig account when a new proposal is submitted:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"ActiveProposals::<T>::mutate(supersig_id, |active_proposals| *active_proposals += 1);\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Add an error variant for the case when there are too many active proposals:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"#[pallet::error]\npub enum Error<T> {\n    // ...\n    TooManyActiveProposals,\n}\n")),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"Decrement the number of active proposals when a proposal is approved or rejected. You can do this in the approve and reject extrinsics:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"ActiveProposals::<T>::mutate(supersig_id, |active_proposals| *active_proposals = active_proposals.saturating_sub(1));\n")),(0,l.kt)("p",null,"As a non binding idea to test, we shall also be exploring the idea of enabling off-chain signing, though this will require a lot of refactoring:"),(0,l.kt)("h3",{id:"enable-off-chain-signing-optional-work"},"Enable off-chain signing (optional work)"),(0,l.kt)("p",null,"To incorporate off-chain signing in the supersig pallet while maintaining the same features such as adding and removing members, we would need to do the following:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a CallHash type alias to represent the hash of the call data:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub type CallHash<T> = <T as frame_system::Config>::Hash;\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Change the CallData storage item to use the CallHash instead of the actual call data:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"#[pallet::storage]\n#[pallet::getter(fn call_data)]\npub type CallData<T: Config> = StorageMap<_, Twox64Concat, SupersigId, CallHash<T>, OptionQuery>;\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Modify the create and approve functions to accept a call_hash parameter instead of the call data:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn create(origin: OriginFor<T>, call_hash: CallHash<T>, ...);\npub fn approve(origin: OriginFor<T>, call_hash: CallHash<T>, ...);\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"In the create and approve functions, calculate the call hash and ensure it matches the provided call_hash parameter:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"// In the `create` function\nlet actual_call_hash = T::Hashing::hash_of(&call_data);\nensure!(\n    actual_call_hash == call_hash,\n    Error::<T>::InvalidCallHash\n);\n// as well add the check in the `approve` function.\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Add a new error variant for mismatched call hashes:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"#[pallet::error]\npub enum Error<T> {\n    // ...\n    /// The provided call hash does not match the actual call hash.\n    InvalidCallHash,\n    // ...\n}\n")),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"Update the extrinsics and RPCs to work with call hashes instead of call data.")),(0,l.kt)("h1",{id:"refactor-page-supersig-ui-for-polkadot-js-fork"},"Refactor Page-Supersig UI for polkadot js fork"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A lot of functions need to be transformed into the hooks that polkadot js apps use as a standard."),(0,l.kt)("li",{parentName:"ul"},"Very strict linting and standards, currently sitting at 300 errors. ")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Milestone 2")," Custom UI foundation MVP, and act on feedback from Fellowship. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Build a custom interface where the user interacts with their organisation created with supersig. The interface will initially support Statemine, Kabocha, and Soupcan (testnet).\nThe interface will leverage all the features ",(0,l.kt)("a",{parentName:"li",href:"https://trello.com/1/cards/64197a7bcc843f46bfb0ab2b/attachments/64198bf574e7348c470997bb/download/Screenshot_2023-03-21_at_10.46.20.png"},"here"),", but in a cleaner and bespoke user interface like ",(0,l.kt)("a",{parentName:"li",href:"https://trello.com/c/fUTXOuo3/619-create-supersig-ui-for-m2-2"},"this simple mockup"),". "),(0,l.kt)("li",{parentName:"ul"},"Custom UI will be simpler and more bespoke to organising, initially around supersig. It will begin with similar features to page-supersig on polkadot-js app, however it will be the foundation for then future building blocks, such as: multisig interface, automated payments, and other statemine/mint primitives, XCM apps, etc. We can prioritise on what those will be based on feedback, and in future milestone. With our own interface we have the freedom to create something different and specific to a core set of interrelated tools, rather than abide by polkadot-js which is designed to encompass basically everything."),(0,l.kt)("li",{parentName:"ul"},"Make improvements so that Fellowship member feedback is satisfied (if any).")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u26a1 If any of your deliverables is based on somebody else's work, make sure you work and publish ",(0,l.kt)("em",{parentName:"p"},"under the terms of the license")," of the respective project and that you ",(0,l.kt)("strong",{parentName:"p"},"highlight this fact in your milestone documentation")," and in the source code if applicable! ",(0,l.kt)("strong",{parentName:"p"},"Teams that submit others' work without attributing it will be immediately terminated."))),(0,l.kt)("h3",{id:"overview-1"},"Overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 7 to 11 weeks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Costs:")," USD 18,000")),(0,l.kt)("h3",{id:"milestone-1--pallet_supersig-mvp"},"Milestone 1 \u2014 pallet_supersig MVP"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated duration:")," 4 to 5 weeks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 11,000 USD")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide inline documentation of the supersig pallet's code, and a basic tutorial that explains how a user can spin up one of our Substrate nodes and send test transactions, which will show how the supersig functionality works.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,l.kt)("td",{parentName:"tr",align:null},"Article"),(0,l.kt)("td",{parentName:"tr",align:null},"We will publish an article that explains supersig pallet to developers on a blog post; and a substrate workshop/seminar that explains that shows how the pallet was designed (if there available slot, else a video shared on loom/youtube).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Substrate module: pallet_supersig"),(0,l.kt)("td",{parentName:"tr",align:null},"We will refactor the pallet so that it does not store unbounded call data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Supersig-app: polkadot-js-ui"),(0,l.kt)("td",{parentName:"tr",align:null},"We need to make various changes and use a lot of polkadot js hooks in order Jaco to accept the PR: refactoring converting a lot of hooks to be the native polkadot-rs hooks rather than our own hooks; linting; changing augment-types; linting, and 300 errors when building for the polkadot-js PR.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Benchmarking"),(0,l.kt)("td",{parentName:"tr",align:null},"The pallet will be benchmarked and unit tested using worst case weightings.")))),(0,l.kt)("h3",{id:"milestone-2--supersig-ui-and-feedback-from-fellowship"},"Milestone 2 \u2014 Supersig UI and feedback from Fellowship"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated duration:")," 3 to 6 weeks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 7,000 USD")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide inline documentation and a tutorial with a polkadot-js apps fork that guides a developer to simply set up supersig pallet and UI.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing messages"),(0,l.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by e2e testing guide and informative error messages.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,l.kt)("td",{parentName:"tr",align:null},"Docker"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile that can be used to test all the functionality delivered with milestone 2. The dockerfile will be a polkadot JS UI fork, it will also be the smallest possible file size (MBs not GBs)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,l.kt)("td",{parentName:"tr",align:null},"Article"),(0,l.kt)("td",{parentName:"tr",align:null},"We will publish an article that explains supersig pallet to the end-user. The article will be on medium and subsocial.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"React/Typecript: Supersig UI"),(0,l.kt)("td",{parentName:"tr",align:null},"We will build a custom user interface so that users can interact with supersig.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Substrate chain"),(0,l.kt)("td",{parentName:"tr",align:null},"We will create a custom substrate template that will contain pallet supersig")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Polkadot JS Apps UI Fork"),(0,l.kt)("td",{parentName:"tr",align:null},"We will add the custom feature to a polkadot JS UI fork (and make a PR to the main repo), so that the user can see the pallet in action, end to end.")))),(0,l.kt)("h2",{id:"future-plans"},"Future Plans"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"After success with supersig being a system level chain, maintain it, and work on future versions, as well as XCM accesibility. ")),(0,l.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Who can vouch for Ramsey(Decentration)?")," Josh Muir (Kusama Council and Dat Dot), Dan Shields, Will Chevdor, Sacha Lanski..."))}d.isMDXComponent=!0}}]);