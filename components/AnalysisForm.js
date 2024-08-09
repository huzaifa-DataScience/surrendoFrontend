import React, { useEffect, useState, useContext } from 'react';
import SymptomList from './SymptomList';
import styles from '../styles/analysisForm.module.css';
import { UserContext } from './context/userContext';

const AnalysisForm = ({ initialSymptoms, category }) => {
  const { userData, setUserData } = useContext(UserContext);
  const [symptoms, setSymptoms] = useState(initialSymptoms);

  useEffect(() => {
    setSymptoms(initialSymptoms);
  }, [initialSymptoms]);

  const toggleChecked = (index, value) => {
    const newSymptoms = [...symptoms];
    newSymptoms[index].checked = value;
    setUserData((prevData) => ({
      ...prevData,
      [category]: newSymptoms
    }));
  };

  const setSeverity = (index, severity) => {
    const newSymptoms = [...symptoms];
    newSymptoms[index].severity = severity;
    setUserData((prevData) => ({
      ...prevData,
      [category]: newSymptoms
    }));
  };

  const setNote = (index, note) => {
    
    const newSymptoms = [...symptoms];
    newSymptoms[index].note = note;  
    setUserData((prevData) => ({
      ...prevData,
      [category]: newSymptoms
    }));
  };

  const symptomProps = symptoms.map((symptom, index) => ({
    ...symptom,
    toggleChecked,
    setSeverity,
    setNote
  }));
  return (
    <div className={styles.analysisForm}>
      <div className={styles.content}>
        <SymptomList symptoms={symptomProps} category={category} />
      </div>
    </div>
  );
};

export default AnalysisForm;
