import React from 'react';
import styles from '../Container/Container.module.css';

export const  Container = ({ children }: { children: React.ReactNode }):JSX.Element => {
  return <div className={styles.container}>{children}</div>;
}
