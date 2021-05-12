import React, { useEffect, useState, Component } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import EditLink from '../components/editLink/editLink';

class Devtools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'about:blank',
    }
    this.iframe = null;
    this.height = 200;
  }

  setRef(w) {
    if(this.iframe) {
      return;
    }
    this.iframe = w;
    this.height = this.iframe.parentNode.clientHeight;
    this.iframe.style.height = this.height + 'px';
    this.setState({ ...this.state, url: 'https://dev-tools.attrace.com'})
  }

  render() {
    return (
      <Layout title="Attrace devtools">
        <iframe style={{border: '0', width: '100%', backgroundColor: '#FFF' }} src={this.state.url} ref={w => this.setRef(w)}></iframe>
      </Layout>
    )
  }
}

export default Devtools;
