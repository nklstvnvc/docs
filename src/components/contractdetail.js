import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../pages/styles.module.css';
import Link from '@docusaurus/Link';
import { Switch, Route, useRouteMatch } from '@docusaurus/router'
import showdown from 'showdown';
import ndjsonStream from 'can-ndjson-stream';

function ContractDetailComponent() {
  let match = useRouteMatch()

  const contractid = decodeURIComponent(match.params.contractid);

  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  const [contract, setContract] = useState();

  useEffect(() => {
    let done;

    fetch('https://discovery.attrace.network/betanet/manifest.json')
    .then(manifest => manifest.json())
    .then(async manifest => {
      if(done) return;
      console.log({ manifest });
      return fetch(`https://${manifest.Witnesses[0].Host}/api/v1/contracts`)
    })
    .then(async (res) => {
      if(done) return;
      const stream = await ndjsonStream(res.body)
      const reader = await stream.getReader()
      let read;
      const results = [];
      await reader.read().then(read = (result) => {
        if (result.done) {
          return;
        }
        results.push(result.value);
        reader.read().then(read);
      })
      if(done) return
      let c = results.find(r => r.result.Id === contractid)
      if(!(c && c.result)) return
      setContract(c.result)
    })
    .catch(console.error);

    return () => done = true;
  }, []);

  // Create docs
  let docs = "Loading...";
  if(contract) {
    // Markdown it
    const converter = new showdown.Converter();
    docs = converter.makeHtml(contract.Description)
  }

  return (
    <main className={styles.main}>
      <div className={styles.pageSection}>
        <h1>Network contract documentation</h1>
        <h2>{contractid}</h2>

        <div dangerouslySetInnerHTML={{__html: docs}}></div>
      </div>
    </main>
  )
}

export default function App() {
    let match = useRouteMatch();

    return (
        <Layout title="Contract Detail">
            <Switch>
                <Route path={`${match.path}/:contractid`} component={ContractDetailComponent} />
            </Switch>
        </Layout>
    )
}