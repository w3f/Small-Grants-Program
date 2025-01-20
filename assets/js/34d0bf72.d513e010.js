"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[54417],{50876:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"applications/dapp_wallet_integration_native_mobile_libraries","title":"Tesseract dApps/Wallet integration native mobile libraries","description":"- Team Name: Tesseract","source":"@site/applications/dapp_wallet_integration_native_mobile_libraries.md","sourceDirName":"applications","slug":"/applications/dapp_wallet_integration_native_mobile_libraries","permalink":"/applications/dapp_wallet_integration_native_mobile_libraries","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/dapp_wallet_integration_native_mobile_libraries.md","tags":[],"version":"current","frontMatter":{}}');var n=i(74848),r=i(28453);const l={},a="Tesseract dApps/Wallet integration native mobile libraries",o={},d=[{value:"Overview",id:"overview",level:3},{value:"Why are the Tesseract native libraries necessary?",id:"why-are-the-tesseract-native-libraries-necessary",level:3},{value:"What about cross-platform mobile apps (React Native, Flutter, etc.)?",id:"what-about-cross-platform-mobile-apps-react-native-flutter-etc",level:3},{value:"Native Libraries APIs",id:"native-libraries-apis",level:3},{value:"dApp Side",id:"dapp-side",level:4},{value:"Wallet Side",id:"wallet-side",level:4},{value:"Feasibility",id:"feasibility",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Notable past open-source repos",id:"notable-past-open-source-repos",level:4},{value:"Teams&#39; github profiles",id:"teams-github-profiles",level:4},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Roadmap Overview",id:"roadmap-overview",level:3},{value:"Milestone 1: Wallet-side Library in Kotlin (Android)",id:"milestone-1-wallet-side-library-in-kotlin-android",level:3},{value:"Milestone 2: Wallet-side Library in Swift (iOS)",id:"milestone-2-wallet-side-library-in-swift-ios",level:3},{value:"Milestone 3: Client-side library in Kotlin (Android)",id:"milestone-3-client-side-library-in-kotlin-android",level:3},{value:"Milestone 4: Client-side library in Swift (iOS)",id:"milestone-4-client-side-library-in-swift-ios",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Conclusion \u2795",id:"conclusion-heavy_plus_sign",level:2},{value:"Some links for reference",id:"some-links-for-reference",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"tesseract-dappswallet-integration-native-mobile-libraries",children:"Tesseract dApps/Wallet integration native mobile libraries"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Team Name:"})," Tesseract"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Continuation of:"})," ",(0,n.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/pull/508",children:"mobile dApps/Wallet Connection"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["This is a follow-up grant proposal aiming to reduce the integration barriers of the mobile dApp/Wallet integration protocol built during the ",(0,n.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/pull/508",children:"previous grant"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Tesseract dApp/Wallet integration protocol implemented in our ",(0,n.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/pull/508",children:"previously finished grant"})," provides excellent UX enhancement capabilities to the Polkadot Substrate ecosystem. Its current version allows native mobile applications to request public keys and transaction signatures through seamless integration with any Tesseract-compatible wallet installed on the same smartphone. You can see the ",(0,n.jsx)(t.strong,{children:"Polkadoot dApp interacting with a wallet"})," demo here: ",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=0AlDYB3Qglc",children:"https://www.youtube.com/watch?v=0AlDYB3Qglc"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The version released during the previous grant is an excellent achievement for Tesseract. It is the first step toward implementing Tesseract\u2019s full potential. Ultimately, we aim to make Tesseract a universal go-to dApp/Wallet integration solution capable of handling any scenario using the shortest peer-to-peer communication path. You can read more about it in detail in one of our articles: ",(0,n.jsx)(t.a,{href:"https://medium.com/@dileping/why-do-we-need-better-dapp-wallet-connectors-and-how-did-we-come-up-with-the-tesseract-protocol-987ce0e8a1ab",children:"Why do we need better dApp/Wallet connectors?"})]}),"\n",(0,n.jsx)(t.p,{children:"To achieve such an ambitious goal, we need to cover two main areas of improvement:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Allow Tesseract to cover more use cases: add desktop dApps connectivity, ability to work with dApps running in browsers, etc."}),"\n",(0,n.jsx)(t.li,{children:"Provide the dApp and Wallet developers with a way to integrate Tesseract as easily as it can get."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Even though covering more use cases ASAP sounds tempting, we believe that the UX improvements Tesseract\u2019s current version brings to the Substrate community already provide enough value by itself to focus on and implement an easy way for the dApps and wallets to integrate Tesseract - a set of native libraries (Swift and Kotlin), that allows using Tesseract no harder than any native library the developers are used to."}),"\n",(0,n.jsx)(t.h3,{id:"why-are-the-tesseract-native-libraries-necessary",children:"Why are the Tesseract native libraries necessary?"}),"\n",(0,n.jsx)(t.p,{children:"iOS and Android provide their developers with native programming languages, which are the standard for the platforms: Swift and Kotlin, respectively."}),"\n",(0,n.jsx)(t.p,{children:"In contrast, Tesseract is built in Rust for its reliability, robustness, and cross-platform nature. While providing a lot of pros, Rust is quite hard and cumbersome to integrate into a mobile app (dApp or Wallet) and requires a lot of knowledge and effort, which is a significant barrier to Tesseract integration."}),"\n",(0,n.jsx)(t.p,{children:"To counteract this barrier, we propose to build Swift and Kotlin native libraries that wrap all the complexity of Rust integration under the hood and provide the dApp and Wallet developers with easy and familiar native APIs that require no more effort than any other mobile library."}),"\n",(0,n.jsx)(t.p,{children:"This way, we reduce the integration barrier to the minimum, allowing Tesseract to participate in Polkadot/Substrate community without bearing any additional complexity for the developer."}),"\n",(0,n.jsx)(t.h3,{id:"what-about-cross-platform-mobile-apps-react-native-flutter-etc",children:"What about cross-platform mobile apps (React Native, Flutter, etc.)?"}),"\n",(0,n.jsx)(t.p,{children:"Cross-platform mobile frameworks, such as React Native and Flutter, are popular among mobile developers. Providing libraries for these frameworks is definitely planned."}),"\n",(0,n.jsx)(t.p,{children:"However, building a library for such a cross-platform framework is done via Swift/Kotlin bridges. This means that to build the APIs for the cross-platform frameworks, we first need to implement Swift/Kotlin Tesseract libraries. It\u2019s an unavoidable prerequisite."}),"\n",(0,n.jsx)(t.p,{children:"We are approaching the infrastructure around Tesseract in stages. Even though we would love to have React Native and Flutter asap, to avoid the grant bloating, we narrowed the scope down to Swift/Kotlin, which provides significant value by itself, allowing non-cross-platform developers to benefit from Tesseract while being a prerequisite step for cross-platform libraries development anyhow. React Native and Flutter are the next step."}),"\n",(0,n.jsx)(t.h3,{id:"native-libraries-apis",children:"Native Libraries APIs"}),"\n",(0,n.jsx)(t.p,{children:"In total, there are four sets of APIs of Tesseract libraries to work on:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Android dApp side"}),"\n",(0,n.jsx)(t.li,{children:"Android Wallet side"}),"\n",(0,n.jsx)(t.li,{children:"iOS dApp side"}),"\n",(0,n.jsx)(t.li,{children:"iOS Wallet side"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Each of the sides requires several rust libraries to be wrapped:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Tesseract itself"}),"\n",(0,n.jsx)(t.li,{children:"IPC transport"}),"\n",(0,n.jsx)(t.li,{children:"Test protocol"}),"\n",(0,n.jsx)(t.li,{children:"Substrate protocol"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"For the sake of simplicity, we will not list all the objects and methods here but rather provide examples of how native mobile developers can use Tesseract."}),"\n",(0,n.jsx)(t.p,{children:"We aim to make the APIs as simple as we managed to do in Rust and keep them as similar among the platforms as possible. Even though implementing the bridges is not a trivial process and is a lot of interop code, the libraries\u2019 \u201cfrontend\u201d APIs still can be very easy and intuitive. Let\u2019s jump straight to it."}),"\n",(0,n.jsx)(t.h4,{id:"dapp-side",children:"dApp Side"}),"\n",(0,n.jsx)(t.p,{children:"Let\u2019s start with some code examples we have in Rust. Here is how one would initialize Tesseract and request an account from the wallet in Rust on the dApp side:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:"let polkadot_wallet_service = Tesseract::new(Arc::new(delegate))\n  .transport(TransportIPCAndroid::new(&env, application))\n  .service(Substrate::Protocol);\n\n\nlet account = Arc::clone(&polkadot_wallet_service).get_account(AccountType::Sr25519).await?;\n"})}),"\n",(0,n.jsx)(t.p,{children:"In iOS, it can look something like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"let polkadotWalletService = Tesseract(delegate: delegate)\n  .transport(IPCTransportIOS())\n  .service(protocol: .polkadot)\n\n\nlet account = try await polkadotWalletService.getAccount()\n"})}),"\n",(0,n.jsx)(t.p,{children:"And here is an example for Android:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:"val polkadotWalletService = Tesseract(delegate)\n  .transport(TransportIPC(application))\n  .service(Protocol.Polkadot)\n\nval account = polkadotWalletService.getAccount().await()\n"})}),"\n",(0,n.jsx)(t.h4,{id:"wallet-side",children:"Wallet Side"}),"\n",(0,n.jsx)(t.p,{children:"While the dApp APIs are typical for client-side APIs, the wallet-side APIs resemble some service implementation closely (i.e., a web service or an RPC). Here is how it works in Rust (an example is taken from the Developer Wallet):"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:"let ipc = Transport::default(&env)?;\nlet tesseract = Tesseract::new()\n  .transport(ipc)\n  .service(TestService::new(...))\n  .service(SubstrateService:new(...));\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Also, ",(0,n.jsx)(t.code,{children:"TestService"})," and ",(0,n.jsx)(t.code,{children:"SubstrateService"})," are classes implementing a certain interface (separate for each) that defines how exactly the wallet should reply to the public key and transaction signature requests. Here are the Rust interface implementations:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:"impl tesseract::service::Service for TestService {\n  type Protocol = Test;\n\n  fn protocol(&self) -> &Test {\n    &Test::Protocol\n  }\n\n\n  fn to_executor(self) -> Box<dyn tesseract::service::Executor + Send + Sync> {\n    Box::new(tesseract_protocol_test::service::TestExecutor::from_service(Self))\n  }\n}\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:"#[async_trait]\nimpl tesseract_protocol_test::TestService for TestService {\n  async fn sign_transaction(self: Arc<Self>, req: &str) -> tesseract::Result<String> {\n    //implementation code goes here\n  }\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"The implementation of the Polkadot Service is going to be fairly similar, just different methods (Polkadot specific):"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:"#[async_trait]\nimpl tesseract_protocol_substrate::SubstrateService for SubstrateService {\n  async fn get_account(self: Arc<Self>, account_type: AccountType) -> tesseract::Result<GetAccountResponse> {\n    //implementation code goes here\n  }\n\n  async fn sign_transaction(self: Arc<Self>, account_type: AccountType, account_path: &str, extrinsic_data: &[u8], extrinsic_metadata: &[u8], extrinsic_types: &[u8]) -> tesseract::Result<Vec<u8>> {\n    //implementation code goes here\n  }\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"Such an API implementation approach is pretty straightforward for both Swift and Kotlin. The initialization is a simple builder pattern, and the Rust\u2019s traits here can be replaced with the protocols and interfaces of Swift and Kotlin 1:1 in this case. We are not providing additional examples here to keep the proposal concise, as we believe they are redundant for the wallet example due to its trivial outer API."}),"\n",(0,n.jsx)(t.h3,{id:"feasibility",children:"Feasibility"}),"\n",(0,n.jsx)(t.p,{children:"All the APIs in the examples are tested to be achievable with the mock objects. The feasibility of creating such bridges was tested while creating the mobile demo applications and the Developer Wallet for the previous grant."}),"\n",(0,n.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,n.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Daniel Leping, @dileping on GitHub, CEO"}),"\n",(0,n.jsx)(t.li,{children:"Yehor Popovych, @ypopovych on GitHub, CTO"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Contact Name:"})," Daniel Leping"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Contact Email:"})," ",(0,n.jsx)(t.a,{href:"mailto:daniel@tesseract.one",children:"daniel@tesseract.one"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Website:"})," ",(0,n.jsx)(t.a,{href:"https://github.com/tesseract-one/",children:"https://github.com/tesseract-one/"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Registered Address:"})," 251 Little Falls Drive, Wilmington, New Castle County, Delaware 19808-1674, USA"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Registered Legal Entity:"})," Tesseract Systems, Inc."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,n.jsx)(t.p,{children:"Our team has been building blockchain applications since 2017 and has worked together on Tesseract since 2018. The company got funded by SOSV and Emurgo in 2019 and took training in the dLab acceleration program."}),"\n",(0,n.jsxs)(t.p,{children:["This is our third grant application for W3F. Previously, we were awarded to build ",(0,n.jsx)(t.a,{href:"https://github.com/w3f/General-Grants-Program/pull/333",children:"Polkadot/Substrate Swift SDK"})," and the initial grant of ",(0,n.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/pull/508",children:"Tesseract dApp/Wallet integration protocol"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Prior to blockchain technology, we had a wealth of experience in building mobile applications and middleware, among which the most noticeable projects are: Swift Express and Reactive Swift."}),"\n",(0,n.jsx)(t.p,{children:"The team has a 10-year history of working together, delivering various solutions of high complexity, including the mentioned above Swift Express and Reactive Swift, Cross++ ( cross-platform framework in C++ that allowed to keep the app logic shared while providing the capability to use native UIs) and tens of the web, mobile, and server applications for customers from around the world including the US, EU, Israel, Australia, etc."}),"\n",(0,n.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/tesseract-one",children:"https://github.com/tesseract-one"})," - current main repo"]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"notable-past-open-source-repos",children:"Notable past open-source repos"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/crossroadlabs/Express",children:"https://github.com/crossroadlabs/Express"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/reactive-swift",children:"https://github.com/reactive-swift"})}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"teams-github-profiles",children:"Teams' github profiles"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/dileping",children:"https://github.com/dileping"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/ypopovych",children:"https://github.com/ypopovych"})}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"team-linkedin-profiles",children:"Team LinkedIn Profiles"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.linkedin.com/in/danielleping/",children:"https://www.linkedin.com/in/danielleping/"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.linkedin.com/in/yehor-popovych/",children:"https://www.linkedin.com/in/yehor-popovych/"})}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,n.jsx)(t.h3,{id:"roadmap-overview",children:"Roadmap Overview"}),"\n",(0,n.jsx)(t.p,{children:"The development is split into four equal milestones, each covering client or wallet-side APIs in Kotlin or Swift. This split allows us to focus on a particular library at a time and achieve tangible and easily verifiable goals with each milestone."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Total Estimated Duration:"})," 16 weeks"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  2"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"milestone-1-wallet-side-library-in-kotlin-android",children:"Milestone 1: Wallet-side Library in Kotlin (Android)"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Estimated duration:"})," 4 weeks"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"FTE:"})," 2"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"A library in Kotlin, wrapping the wallet-side Tesseract rust implementation. Provides Android Wallet developers with native Kotlin APIs of Tesseract."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,n.jsx)(t.th,{children:"Deliverable"}),(0,n.jsx)(t.th,{children:"Specification"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0a."})}),(0,n.jsx)(t.td,{children:"License"}),(0,n.jsx)(t.td,{children:"Apache 2.0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0b."})}),(0,n.jsx)(t.td,{children:"Documentation"}),(0,n.jsxs)(t.td,{children:["We will provide both ",(0,n.jsx)(t.strong,{children:"inline documentation"})," of the code and a basic ",(0,n.jsx)(t.strong,{children:"tutorial"})," that explains how to integrate Tesseract into a Wallet."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0c."})}),(0,n.jsx)(t.td,{children:"Testing and Testing Guide"}),(0,n.jsx)(t.td,{children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0d."})}),(0,n.jsx)(t.td,{children:"Docker"}),(0,n.jsx)(t.td,{children:"Due to the client-side nature of the deliverable, there is no need for a docker image."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0e."}),(0,n.jsx)(t.td,{children:"Article"}),(0,n.jsx)(t.td,{children:"We will publish an article that explains how Tesseract makes dApps better and how to enable Tesseract protocol support in a Polkadot wallet for Android."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,n.jsx)(t.td,{children:"Wallet-side Android library"}),(0,n.jsx)(t.td,{children:"The library provides Kotlin APIs for Tesseract's wallet-side"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,n.jsx)(t.td,{children:"Wallet-side IPC wrapper for Android"}),(0,n.jsx)(t.td,{children:"Kotlin wrapper for the wallet side of Android IPC transport"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,n.jsx)(t.td,{children:"Wallet-side of the Test protocol in Kotlin"}),(0,n.jsx)(t.td,{children:"Kotlin API for the wallet side of Tesseract Test protocol"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,n.jsx)(t.td,{children:"Wallet-side of the Substrate protocol in Kotlin"}),(0,n.jsx)(t.td,{children:"Kotlin API for the wallet side of Tesseract Substrate protocol"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"5."}),(0,n.jsx)(t.td,{children:"Android demo Wallet"}),(0,n.jsx)(t.td,{children:"A demo wallet that demonstrates the Kotlin APIs usage"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"milestone-2-wallet-side-library-in-swift-ios",children:"Milestone 2: Wallet-side Library in Swift (iOS)"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Estimated duration:"})," 4 weeks"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"FTE:"})," 2"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"A library in Swift, wrapping the wallet-side Tesseract rust implementation. Provides iOS Wallet developers with native Swift APIs of Tesseract."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,n.jsx)(t.th,{children:"Deliverable"}),(0,n.jsx)(t.th,{children:"Specification"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0a."})}),(0,n.jsx)(t.td,{children:"License"}),(0,n.jsx)(t.td,{children:"Apache 2.0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0b."})}),(0,n.jsx)(t.td,{children:"Documentation"}),(0,n.jsxs)(t.td,{children:["We will provide both ",(0,n.jsx)(t.strong,{children:"inline documentation"})," of the code and a basic ",(0,n.jsx)(t.strong,{children:"tutorial"})," that explains how to integrate Tesseract into a Wallet."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0c."})}),(0,n.jsx)(t.td,{children:"Testing and Testing Guide"}),(0,n.jsx)(t.td,{children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0d."})}),(0,n.jsx)(t.td,{children:"Docker"}),(0,n.jsx)(t.td,{children:"Due to the client-side nature of the deliverable, there is no need for a docker image."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0e."}),(0,n.jsx)(t.td,{children:"Article"}),(0,n.jsx)(t.td,{children:"We will publish an article that explains how Tesseract makes dApps better and how to enable Tesseract protocol support in a Polkadot wallet for iOS."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,n.jsx)(t.td,{children:"Wallet-side iOS library"}),(0,n.jsx)(t.td,{children:"The library provides Swift APIs for Tesseract's wallet-side"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,n.jsx)(t.td,{children:"Wallet-side IPC wrapper for iOS"}),(0,n.jsx)(t.td,{children:"Swift wrapper for the wallet side of iOS IPC transport"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,n.jsx)(t.td,{children:"Wallet-side of the Test protocol in Swift"}),(0,n.jsx)(t.td,{children:"Swift API for the wallet side of Tesseract Test protocol"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,n.jsx)(t.td,{children:"Wallet-side of the Substrate protocol in Swift"}),(0,n.jsx)(t.td,{children:"Swift API for the wallet side of Tesseract Substrate protocol"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"5."}),(0,n.jsx)(t.td,{children:"iOS demo Wallet"}),(0,n.jsx)(t.td,{children:"A demo wallet that demonstrates the Swift APIs usage"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"milestone-3-client-side-library-in-kotlin-android",children:"Milestone 3: Client-side library in Kotlin (Android)"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Estimated duration:"})," 4 weeks"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"FTE:"})," 2"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"A library in Kotlin, wrapping the client-side Tesseract rust implementation. Provides Android dApp developers with native Kotlin APIs of Tesseract."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,n.jsx)(t.th,{children:"Deliverable"}),(0,n.jsx)(t.th,{children:"Specification"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0a."})}),(0,n.jsx)(t.td,{children:"License"}),(0,n.jsx)(t.td,{children:"Apache 2.0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0b."})}),(0,n.jsx)(t.td,{children:"Documentation"}),(0,n.jsxs)(t.td,{children:["We will provide both ",(0,n.jsx)(t.strong,{children:"inline documentation"})," of the code and a basic ",(0,n.jsx)(t.strong,{children:"tutorial"})," that explains how to integrate Tesseract into a dApp."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0c."})}),(0,n.jsx)(t.td,{children:"Testing and Testing Guide"}),(0,n.jsx)(t.td,{children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0d."})}),(0,n.jsx)(t.td,{children:"Docker"}),(0,n.jsx)(t.td,{children:"Due to the client-side nature of the deliverable, there is no need for a docker image."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0e."}),(0,n.jsx)(t.td,{children:"Article"}),(0,n.jsx)(t.td,{children:"We will publish an article that explains how Tesseract makes dApps better and how to integrate it into a Polkadot dApp on Android."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,n.jsx)(t.td,{children:"Client-side Android library"}),(0,n.jsx)(t.td,{children:"The library provides Kotlin APIs for Tesseract's client-side"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,n.jsx)(t.td,{children:"Client-side IPC wrapper for Android"}),(0,n.jsx)(t.td,{children:"Kotlin wrapper for the dApp side of Android IPC transport"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,n.jsx)(t.td,{children:"Client-side of the Test protocol in Kotlin"}),(0,n.jsx)(t.td,{children:"Kotlin API for the dApp side of Tesseract Test protocol"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,n.jsx)(t.td,{children:"Client-side of the Substrate protocol in Kotlin"}),(0,n.jsx)(t.td,{children:"Kotlin API for the dApp side of Tesseract Substrate protocol"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"5."}),(0,n.jsx)(t.td,{children:"Android demo dApp"}),(0,n.jsx)(t.td,{children:"A demo application that demonstrates the Kotlin APIs usage"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"milestone-4-client-side-library-in-swift-ios",children:"Milestone 4: Client-side library in Swift (iOS)"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Estimated duration:"})," 4 weeks"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"FTE:"})," 2"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"A library in Swift, wrapping the client-side Tesseract rust implementation. Provides iOS dApp developers with native Swift APIs of Tesseract."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,n.jsx)(t.th,{children:"Deliverable"}),(0,n.jsx)(t.th,{children:"Specification"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0a."})}),(0,n.jsx)(t.td,{children:"License"}),(0,n.jsx)(t.td,{children:"Apache 2.0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0b."})}),(0,n.jsx)(t.td,{children:"Documentation"}),(0,n.jsxs)(t.td,{children:["We will provide both ",(0,n.jsx)(t.strong,{children:"inline documentation"})," of the code and a basic ",(0,n.jsx)(t.strong,{children:"tutorial"})," that explains how to integrate Tesseract into a dApp."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0c."})}),(0,n.jsx)(t.td,{children:"Testing and Testing Guide"}),(0,n.jsx)(t.td,{children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0d."})}),(0,n.jsx)(t.td,{children:"Docker"}),(0,n.jsx)(t.td,{children:"Due to the client-side nature of the deliverable, there is no need for a docker image."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0e."}),(0,n.jsx)(t.td,{children:"Article"}),(0,n.jsx)(t.td,{children:"We will publish an article that explains how Tesseract makes dApps better and how to integrate it into a Polkadot dApp on iOS."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,n.jsx)(t.td,{children:"Client-side iOS library"}),(0,n.jsx)(t.td,{children:"The library provides Swift APIs for Tesseract's client-side"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,n.jsx)(t.td,{children:"Client-side IPC wrapper for iOS"}),(0,n.jsx)(t.td,{children:"Swift wrapper for the dApp side of iOS IPC transport"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,n.jsx)(t.td,{children:"Client-side of the Test protocol in Swift"}),(0,n.jsx)(t.td,{children:"Swift API for the dApp side of Tesseract Test protocol"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,n.jsx)(t.td,{children:"Client-side of the Substrate protocol in Swift"}),(0,n.jsx)(t.td,{children:"Swift API for the dApp side of Tesseract Substrate protocol"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"5."}),(0,n.jsx)(t.td,{children:"iOS demo dApp"}),(0,n.jsx)(t.td,{children:"A demo application that demonstrates the Swift APIs usage"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,n.jsxs)(t.p,{children:["As mentioned initially, we aim to make Tesseract a ",(0,n.jsx)(t.strong,{children:"universal go-to dApp/Wallet integration solution"}),". We approach the development of Tesseract step-by-step, with each additional step bringing a significant concrete value to the ecosystem."]}),"\n",(0,n.jsx)(t.p,{children:"The most critical areas we plan to cover are:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Simplifying the integration of Tesseract for various development platforms by providing more and more libraries for various platforms (JS, Flutter, etc.)"}),"\n",(0,n.jsx)(t.li,{children:"Cover more use cases. Due to its robust and flexible core, Tesseract is extremely extendible, allowing us to aim for a universal dApp/Wallet integration solution as the ultimate goal. With its first two implemented connectors (mobile IPC for iOS and Android), Tesseract proves its capabilities to provide first-class seamless integration for mobile dApps. Soon, we will release more connectors (Bluetooth, NFC, QR, etc.), allowing more dApps to benefit from our seamless wallet integration. Desktop, Web, and more kinds of dApps will be provided with a seamless wallet integration in the near future."}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"conclusion-heavy_plus_sign",children:["Conclusion ","\u2795"]}),"\n",(0,n.jsx)(t.p,{children:"Thanks to the support of the Web3 Foundation, the first version of the Tesseract universal dApp/Wallet integration protocol was built and released successfully. Though, to start providing value to the Polkadot/Substrate community, we need to lower the current technical integration barriers imposed by the fact that Tesseract is built with Rust, which is hard and labor-intensive to integrate into mobile dApps and Wallets. To eliminate this, we propose to build a set of native Swift and Kotlin libraries that wrap Tesseract\u2019s Rust implementation under the hood and provide mobile developers with a straightforward way to integrate Tesseract within minutes, thus significantly improving the UX of mobile dApps within Polkadot/Substrate ecosystem."}),"\n",(0,n.jsx)(t.h2,{id:"some-links-for-reference",children:"Some links for reference"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Github: ",(0,n.jsx)(t.a,{href:"https://github.com/tesseract-one/",children:"https://github.com/tesseract-one/"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Original grant proposal: ",(0,n.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/applications/mobile_dapp_connection.md",children:"https://github.com/w3f/Grants-Program/blob/master/applications/mobile_dapp_connection.md"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Demo video: ",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=0AlDYB3Qglc",children:"https://www.youtube.com/watch?v=0AlDYB3Qglc"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Developer wallet (for Tesseract-compatible dApps testing): ",(0,n.jsx)(t.a,{href:"https://github.com/tesseract-one/dev-wallet",children:"https://github.com/tesseract-one/dev-wallet"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Polkadot dApp example: ",(0,n.jsx)(t.a,{href:"https://github.com/tesseract-one/polkachat.rs",children:"https://github.com/tesseract-one/polkachat.rs"})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>a});var s=i(96540);const n={},r=s.createContext(n);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);