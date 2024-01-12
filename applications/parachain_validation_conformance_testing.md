# Parachain Validation Conformance Testing

- **Team Name:** [BlockyDevs](https://www.blockydevs.com/)
- **Payment Address:**  [FIAT] USD - Bank Details 15.12.2023 20:34 CET 
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

Response to [Parachain Validation Conformance Testing RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/parachain_validation_conformance_testing.md)

The project aims to develop a Command Line Interface (CLI) featuring Parachain Validation Conformance Tests. The CLI can be executed either manually or seamlessly integrated into a CI/CD pipeline.
### Overview

Please provide the following:

Each Polkadot host implementation seeking to participate in consensus must incorporate the Parachains protocol. An integral component of the Parachains protocol is the execution of the Parachain Validation Function (PVF). The PVF is a WebAssembly (wasm) blob mandated to furnish the validate_block function, accepting a fixed set of arguments, including proof of validity from a collator. This function validates the proof and, upon success, returns relevant information to the Polkadot host implementation. The PVF operates as a black box for the Polkadot node, exclusively utilizing the validate_block function. It is imperative to maintain limits on the execution of these PVFs to ensure consensus across diverse node implementations, versions, hardware configurations, and OS setups.

The project's scope encompasses the creation of tests to validate compliant wasm files. Additionally, we will implement multiple PVF tests designed to exceed specified limits. Furthermore, we will conduct fuzzing tests on various PVF permutations to assess their behavior across multiple constraints.
The tests will be encapsulated within a Command Line Interface (CLI), providing the flexibility to execute them manually or seamlessly integrate them into a CI/CD pipeline.
---
As BlockyDevs, our introduction to the Polkadot ecosystem began with active participation in numerous hackathons. Subsequently, our team members initiated the [SmartBeaver](https://smartbeaver.io/) project, a PSP wizard designed to generate PSP-compliant contracts in pure ink! This project is currently under our maintenance and development. In addition to our own endeavors, we have extended our assistance to various projects in constructing solutions on the Polkadot platform.

As a team, our continuous pursuit is to enhance our skills and knowledge. Engaging in these projects will afford us the opportunity to delve deeper into understanding the limits of the Polkadot ecosystem and make meaningful contributions to its ongoing growth.

### Project Details

- Determine conformance parameters and test cases
  - The execution of these PVFs is required to stay in certain limits to reach consensus across different node implementations, node versions, different hardware configuration and OS configurations. Some of these limits are:
    - A deterministic maximum stack depth. All node implementations should support the same stack depth.
    - A deterministic maximum memory. All node implementations should support the same maximum memory usage per PVF execution.
    - deterministic maximum execution time. All node implementations should execute a given PVF in the same maximum time frame.
    - deterministic compilation/preparation of the PVF. All node implementations should compile/prepare a given PVF in the same maximum time frame and maximum memory budget.
- Develop basic conformance tests that are running valid wasm files.
- Develop conformance tests that are resulting in running over the limits identified during the research.
- Develop fuzzing conformance tests across different implementations ensuring that all are coming to the same result.
  - Conformance tests evaluating all possible permutations of limits.


  
### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
  - The objective of this Request for Proposal (RFP) is to verify that compilation and preparation activities adhere to specified limits. Additionally, it aims to contribute to the proper definition of these limits across diverse implementations.
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
  - Parachain developers
- What need(s) does your project meet?
  - It explores the execution limits of PVFs and delivers a conformance test suite to guarantee that compilation and preparation adhere to specified limits across various implementations.
- How did you identify these needs? Please provide evidence in the form of (scientific) articles, forum discussions, case studies, or raw data.
  - This is an response to an open RFP [Parachain Validation Conformance Testing RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/parachain_validation_conformance_testing.md)

## Team :busts_in_silhouette:


### Team members


- Piotr: Team Leader / Developer
- Maciej: Lead Developer
- Bartosz : Developer 
- Mike: Blockchain Consultant and Solutions Architect

### Contact

- **Contact Name:** Piotr Swierzy
- **Contact Email:** piotr.swierzy@blockydevs.com
- **Website:** [BlockyDevs](https://www.blockydevs.com/)

### Legal Structure

- **Registered Address:** Leopolda Staffa 105B, 01-884 Warsaw, Poland
- **Registered Legal Entity:** BLOCKYDEVS Sp. z o.o.

### Team's experience

Our team at BlockyDevs, a formally registered software house in Europe, comprises highly experienced blockchain developers. We have successfully built a cross-chain DAO for the Human protocol, showcasing our expertise in developing multichain applications. Currently, we actively contribute to the Solana Ledger app and maintain the Smart Beaver open-source projects, underscoring our proficiency in developing and sustaining open-source initiatives.

**Some of our previous work:**
  - **Human Protocol Cross-chain governance**
    We have partnered with the [Human Protocol](https://www.humanprotocol.org/) to create a Cross-chain Governance (Cross-chain DAO) solution. This system enables voting on proposals from any supported chain without the need to bridge tokens between chains.
    We have developed the smart contracts, frontend, and backend layers. You can explore the repository for each component here:
    -   [Smart Contracts](https://github.com/blockydevs/bdmh-cross-chain-governance/tree/main/smartcontracts)
    -   [Frontend](https://github.com/blockydevs/bdmh-cross-chain-governance/tree/main/frontend)
    -   [Backend](https://github.com/blockydevs/bdmh-cross-chain-governance/tree/main/vote-aggregator)

    You can view the demo [here](https://blockydevs.github.io/bdmh-cross-chain-governance/), hosted on Github Pages.
  - **Smart Beaver**
    [Smart Beaver](https://smartbeaver.io/) is a smart contract wizard that empowers everyone to create PSP-compliant smart contract code written in pure Ink!. Initially developed during the EthWarsaw hackathon by our team members, we currently maintain the open-source Smart Beaver project. The project has also received a grant from [Aleph Zero](https://alephzero.org/).
    A notable technical aspect of the project is its lack of a backend layer. We compiled our Rust code generator to WebAssembly (wasm), and the frontend application executes the compiled wasm file to generate the code on the frontend layer.
    Explore the [open-source repository](https://github.com/Smart-Beaver) and access the [live version](https://smartbeaver.blockydevs.dev/).
  - **Ordianals View**
    Our team has created [OrdinalsView](https://ordinalsview.com/), a website designed for discovering, registering, and launching Bitcoin Ordinals. This project has equipped us with valuable experience in decoding complex data structures from on-chain Bitcoin transactions, monitoring blockchain transactions, and efficiently
    processing them. Additionally, we are proposing a new Bitcoin Improvement Proposal (BIP) for the Ordinals metadata. You can see the BIP's [here](https://github.com/blockydevs/ordinals-bip/blob/main/bip-metadata.mediawiki) and [here](https://github.com/blockydevs/ordinals-bip/blob/main/bip.mediawiki).
  - **Solana Ledger Wallet**
    We received a grant from the Solana Foundation to address an RFP related to the Solana Ledger app. Throughout the project, our focus has been on implementing new functionalities and extending existing features within the Solana Ledger app. We maintain an ongoing feedback loop with the Solana engineering team, adhering to their contribution guidelines.
    For a glimpse of our contributions, you can review two example pull requests: [link](https://github.com/blockydevs/app-solana/pull/7) and [link](https://github.com/solana-labs/solana/pull/34423).

### Team Code Repos

- https://github.com/Smart-Beaver
- https://github.com/blockydevs/

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/coredumped7893
- https://github.com/piotrswierzy
- https://github.com/BartoszSolka

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/bartosz-solka/
- https://www.linkedin.com/in/piotr-swierzy/


## Development Status :open_book:

No actual development has been made for this RFP.

## Development Roadmap :nut_and_bolt:
### Overview

- **Total Estimated Duration:** ~1-2 months
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** 25,000 USD

### Milestone 1

- **Estimated duration:** ~1-2 months
- **FTE:**  2
- **Costs:** 25,000 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one.

| Number | Deliverable               | Specification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -----: |---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                   | Apache 2.0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **0b.** | Documentation             | Markdown documentation of the tool, contribution guide, build, setup and execution documentation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1. | Research                  | The research will yield a comprehensive document outlining the test strategy, test scenarios, and initial test data in detail. This document will serve as a foundation for seamless execution in subsequent phases. It includes the definition of baselines for the conformance tests, as well as the identification of challenges and the development path for the mechanism for executing and configuring the tests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2. | Basic conformance tests   | Basic conformance tests: Develop a CLI wrapper to manage tests, parse additional parameters, and ensure seamless integration with future upgrades. We will also incorporate a pipeline-friendly mode, facilitating integration with platforms such as GH Actions or GitLab CI/CD. Our foundation will be the Clap Rust library (https://crates.io/crates/clap); We will utilize the https://github.com/paritytech/zombienet tool for test execution. This tool allows easy modification of host configurations, loading of modified PVF, and test definition using a natural language DSL for readability and potential contributions from others; We will prepare tests that utilize currently existing wasm blobs as reference (valid) implementations. In these cases, tests should naturally pass. Wasm blobs can be extracted using the polkadot-parachain export-genesis-wasm CLI (https://github.com/paritytech/cumulus/blob/master/polkadot-parachain/src/cli.rs#L51. |
| 3. | Limit conformance tests   | Conformance tests that are resulting in running over the limits. In addition to the basic conformance tests, we will implement multiple test cases designed to fail. This involves providing code for invalid PVFs. We will evaluate memory and stack limits by creating code that utilizes numerous stack-allocating instructions and other allocations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 4. | Fuzzing conformance tests | Develop fuzzing conformance tests across different implementations, ensuring consistent results among them. Conformance tests will evaluate all possible permutations of limits. As part of our fuzzing strategy, we plan to write our own utility that combines random test cases and subjects them to testing.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

...


## Future Plans

- Maintenance of the open-source repository

## Referral Program (optional) :moneybag:

You can find more information about the program [here](../README.md#moneybag-referral-program).

- **Referrer:** N/A
- **Payment Address:** N/A

## Additional Information :heavy_plus_sign:

### Differences between [LimeChain's solution](https://polkadot.polkassembly.io/motion/389) and ours:

The most significant difference is that LimeChain's solution implements a 'PVF configurable mock,' which is used to inject WebAssembly (WASM). In contrast, we plan to create multiple example implementations and share their codebase. WASM injection appears to be a time-consuming and complex solution; we opt for easier-to-understand tests, the code for which will be publicly available.

The testing scenarios will be quite similar since we share the common goal of identifying test cases and implementing conformance tests for the execution of the Parachain Validation Function (PVF) across different node implementations.

Additionally, we plan to develop a CLI that will allow for easy integration, either by wrapping it in a Docker container, using it directly from the terminal, or integrating it into a CI/CD pipeline. In our opinion, developing a CLI in a popular library is easier to maintain and is more likely to be developed by the community than WASM injectors.

**How did you hear about the Grants Program?** We work together with Aleph Zero on the [SmartBeaver](smartbeaver.io) project