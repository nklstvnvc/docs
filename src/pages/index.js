import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import EditLink from '../components/editLink/editLink';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
      <Layout
          title={`${siteConfig.title}`}
          description="Attrace blockchain network documentation">
        <main className={styles.main}>
          <div className={styles.pageSection}>
            <h2>Welcome</h2>

            <p>You are currently reading the Attrace technical docs.</p>

            <p>These docs are written for engineers, smart contract developers, node operators or anybody interested in how the Attrace Referral Marketplace operates at a lower level.</p>

            {/*<div className="alert alert--primary" role="alert" style={{ marginBottom: '1rem' }}>*/}
            {/*  Visit <a href="https://marketplace.attrace.com">market.attrace.com</a> if you are looking for the live referral marketplace instead (which has been built on top of the Attrace smart contracts and conversion verifying nodes).*/}
            {/*</div>*/}

            <p>These docs are open source and constantly evolving, so if you can’t find what you’re looking for or have ideas for improvements, please contribute by filing a GitLab issue or merge request in this repository. You can find an edit link on the bottom of every page.</p>


            <p>... <Link to='/reference/'>continue to the overview</Link> or use the top-menu to explore other topics.</p>

            <div style={{marginTop: '2rem'}}>
              <EditLink to={siteConfig.customFields.baseEditUrl+'/src/pages/index.js'} />
            </div>
          </div>
        </main>
      </Layout>
  );
}

export default Home;
