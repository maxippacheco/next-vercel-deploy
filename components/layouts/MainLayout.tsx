import React from 'react';

import Head from 'next/head';
import { Navbar } from '../Navbar';

import styles from './MainLayout.module.css';

import { PropsWithChildren } from 'react';

export const MainLayout = ({ children }: PropsWithChildren<unknown>) => {
    return (
        <div className={styles.container}>
          
          <Head>
            <title>Home - Fernando</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        
          <Navbar />
    
          <main className={styles.main}>
    
            { children }
    
          </main>     
        </div>
      )
};
