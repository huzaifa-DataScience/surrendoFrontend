import React, { useState } from 'react';
import styles from "../styles/analysisForm.module.css";
import radio from "../styles/customRadio.module.css";
import bar from "../styles/customBar.module.css";

const SymptomList = ({ symptoms , category }) => {

const [txt , setTxt] = useState()

  const handleTextChange = (e) => {
  setTxt(e.target.value)
  };

  const renderTicks = () => {
    const ticks = [];
    for (let i = 0; i <= 10; i++) {
      ticks.push(<div key={i} className={bar["range-tick"]}></div>);
    }
    return ticks;
  };

  return (
    <div className={styles.symptomList}>
      
      {category!=='User Notes'?<div className={styles.headers}>
       
        <h1>Yes / No</h1>
        <h1>Symptoms</h1>
       <h1>Severity</h1>
      </div>
      :
      <div style={{textAlign:'center' , borderBottom:'5px solid #6531a7' ,width:'100%'}}>
          <h1>User Notes</h1>
        </div>
}
     {category!=='User Notes'? <div>
      {symptoms.map((symptom, index) => (
        <div key={index} className={styles.symptomItem}>
          <div > 
          { symptom.checked !==undefined &&
          <div className={styles.checkboxes}> 
            <label className={radio.container}>
              <input
                type="radio"
                name={`symptom-${index}`}
                checked={symptom.checked === 'yes'}
                onChange={() => symptom.toggleChecked(index, 'yes')}
              />
              <span className={radio.checkmark}></span>
            </label>
            <span style={{ fontSize: '30px', margin: '0 20px', marginTop: '25px' }}>/</span>
            <label className={radio.container}>
              <input
                type="radio"
                name={`symptom-${index}`}
                checked={symptom.checked === 'no'}
                onChange={() => symptom.toggleChecked(index, 'no')}
              />
              <span className={radio.checkmark}></span>
            </label>
            </div>
            }</div>

         
          <div className={styles.symptomName}>
           {symptom.name!==undefined && <div>  {symptom.name}</div> }
          </div>

            <div>
          { 'severity' in symptom ? <div className={styles.symptomControls}>
            
            <div className={bar.customRangeContainer}>
              
              <div className={bar["range-ticks"]}>{renderTicks()}</div>
              <input
                type="range"
                min="0"
                max="10"
                value={symptom.severity}
                onChange={(e) => symptom.setSeverity(index, e.target.value)}
                className={bar.customRangeInput}
              />
            </div>
            <span className={bar.valueField}>{symptom.severity}</span>
            
          </div>
          
        : 'note' in symptom?
       <> <input
        type="number"
        value={symptom.note}
        onChange={(e) =>  symptom.setNote(index,e.target.value)}
        className={styles.textField}
      />
      <span style={{marginLeft:'1rem', fontWeight:'bold'}}>MG</span>
      </>
        :''
        }

          
          </div>
        </div>
      ))}
      </div>
      :
    
    <textarea
    value={txt}
      onChange={(e) =>  handleTextChange(e)}
      className={styles.noteField}
  />
}

    </div>
  );
};

export default SymptomList;
