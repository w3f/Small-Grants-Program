import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';



function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title} </h1>  */}
        <img src="img/web3 foundation grants_black.jpg"></img>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}            
          style={{
            display: "block"
          }}
          >
          <div>
            <Link
              className="button button--secondary button--lg"
              to="./docs/Process/how-to-apply"
              style={{
                marginLeft: "10px",
                marginBottom: "5px",
                color: "rgb(255, 255, 255)",
                background: "rgb(0, 0, 0, 0.9)",
              }}>
              Apply
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="./docs/office-hours"
              style={{
                marginLeft: "10px",
                marginBottom: "5px",
                background: "rgb(255, 255, 255, 0.9)",
                borderColor: "rgb(92, 26, 124)"
              }}>
              Office Hours
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="./docs/rfps"
              style={{
                marginLeft: "10px",
                marginBottom: "5px",
                background: "rgb(255, 255, 255, 0.9)",
                borderColor: "rgb(92, 26, 124)"
              }}>
              Browse RFPs
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://futures.web3.foundation"
              style={{
                marginLeft: "10px",
                marginBottom: "5px",
                background: "rgb(255, 255, 255, 0.9)",
                borderColor: "rgb(92, 26, 124)"
              }}>
              Decentralized Futures ↗
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://jam.web3.foundation"
              style={{
                marginLeft: "10px",
                marginBottom: "5px",
                background: "rgb(255, 255, 255, 0.9)",
                borderColor: "rgb(92, 26, 124)"
              }}>
              JAM Prize ↗
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Web3 Foundation Grants">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
