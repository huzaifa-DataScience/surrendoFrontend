import React, { useState } from 'react';
import MonthlyAnalytics from '@/components/MonthlyAnalytics';
import YearlyAnalytics from '@/components/YearlyAnalytics';
import style from '../styles/insight.module.css';

const Insight = () => {
  const [view, setView] = useState('monthly'); 
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1>Symptom Tracker</h1>
      </div>

      <div className={style.buttonContainer}>
        <button className={style.buttons} onClick={() => setView('monthly')}>Monthly</button>
        <button className={style.buttons} onClick={() => setView('yearly')}>Yearly</button>
      </div>

      <div className={style.contentContainer}>
        {view === 'monthly' ? <MonthlyAnalytics /> : <YearlyAnalytics />}
      </div>
    </div>
  );
};

export default Insight;
