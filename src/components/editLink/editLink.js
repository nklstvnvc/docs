import React from 'react';
import Link from '@docusaurus/Link';
import EditIcon from '../editIcon/editIcon';
import styles from './styles.module.css';

export default function EditLink(props) {
  return (
    <Link className={styles.editLink} to={props.to}><EditIcon /> Edit this page</Link> 
  )
}