import { useState, useEffect, useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import styles from '../styles/MonthlyAnalytics.module.css';
import { UserContext } from './context/userContext';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import PickDate from './CommonComponent/PickDate';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const YearlyAnalytics = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [data, setData] = useState([]);
  const {trackerCode}= useContext(UserContext)


  const getDate = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/analytics?type=yearly&period=${selectedYear}&code=${trackerCode}`);
      setData(response.data); 
    } catch (error) {
     alert('Error fetching data:', error);
    }
  };

  useEffect(() => {
   
     getDate()
  }, [selectedYear]);



  const chartData = {
    labels: data.map(item => item.month),
    datasets: [
      {
        label: 'Pain',
        data: data.map(item => item.Pain),
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        barThickness: 30,
        categoryPercentage: 0.5,
        barPercentage: 0.5,
      },
      {
        label: 'Medication',
        data: data.map(item => item.Medication),
        backgroundColor: 'rgba(54, 162, 235, 0.8)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        barThickness: 30,
        categoryPercentage: 0.5,
        barPercentage: 0.5,
      },
      {
        label: 'Digestive',
        data: data.map(item => item.Digestive),
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        barThickness: 30,
        categoryPercentage: 0.5,
        barPercentage: 0.5,
      },
      {
        label: 'Terminal',
        data: data.map(item => item.Terminal),
        backgroundColor: 'rgba(153, 102, 255, 0.8)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
        barThickness: 30,
        categoryPercentage: 0.5,
        barPercentage: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white',
        },
      },
      title: {
        display: true,
        text: 'Yearly Analytics',
        color: 'white',
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        titleColor: 'black',
        bodyColor: 'black',
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white',
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: 'white',
          beginAtZero: true,
          max: 25,
          stepSize: 5,
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
          lineWidth: 2,
          drawBorder: false,
          drawTicks: false,
        },
      },
    },
  };

  return (
    <div className={styles.container}>
      <h1>Yearly Analytics</h1>

        <PickDate
        type ={'yearly'}
        selectedDate={selectedYear}
        setSelectedDate={setSelectedYear}

        />
      <div className={styles.chart}>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default YearlyAnalytics;
