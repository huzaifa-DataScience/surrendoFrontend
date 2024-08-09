import React, { useEffect, useState, useContext } from 'react';
import styles from '../styles/analysis.module.css';
import AnalysisForm from '@/components/AnalysisForm';
import { UserContext } from '@/components/context/userContext';
import axios from 'axios';
import { useRouter } from 'next/router';
import DatePicker from 'react-datepicker';  
import 'react-datepicker/dist/react-datepicker.css';  

const Analysis = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());  
    const { userData, setUserData, trackerCode } = useContext(UserContext);
    const router = useRouter();

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleSubmit = async () => {
        const trackerData = {
            date: selectedDate,  
            data: userData,
            code: trackerCode
        };

        try {
            const response = await axios.post('http://localhost:3000/api/tracker', trackerData);
            console.log('Tracker data saved:', response.data);
            alert('Successfully submitted tracker');
        } catch (error) {
            console.error('Error submitting tracker data:', error);
        }
    };

    return (
        <div className={styles.main}>
            

            <div className={styles.sideNav}>
                <h1 style={{ textAlign: 'center', borderBottom: '5px solid #6531a7', paddingBottom: '10px', marginTop: '60px' }}>
                    Select your category
                </h1>
           
                <ul>
                    {userData && Object.keys(userData)?.map((category, index) => (
                        <li key={index} onClick={() => handleCategoryClick(category)}>
                            <div>
                                {category}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.mainContent}>
            <div className={styles.dateContainer}>
                <h1>Select your date</h1>
            <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="yyyy/MM/dd"
                        className={styles.datePicker} 
                    />
            </div>

                <AnalysisForm initialSymptoms={selectedCategory ? userData[selectedCategory] : []} category={selectedCategory} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                   
                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                        <button className={styles.submitButton} onClick={() => router.back()}>Back</button>
                        <button className={styles.submitButton} onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analysis;
