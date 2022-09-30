import React from 'react';
import styles from '../PageHeading/PageHeading.module.css';


export const PageHeading = ({ text }: { text: String }): JSX.Element => {
  return <h1 className={styles.headingTitle}>{text}</h1>;
};
