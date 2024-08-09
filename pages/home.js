import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/home.module.css'

const Home = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>

      <button onClick={() => router.push('/analysis')} className={styles.button}>Daily Health Tracker</button>
      <button onClick={() => router.push('/insight')} className={styles.button}>Go to Analytics</button>
    </div>
  );
};

export default Home;
