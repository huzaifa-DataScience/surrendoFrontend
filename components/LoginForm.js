import { useState , useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '../styles/LoginForm.module.css';
import { UserContext } from './context/userContext';


const LoginForm = () => {
  const [code, setCode] = useState('');
  const router = useRouter();

  const {setUserData , setTrackerCode}  = useContext(UserContext)


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/login', { code });
      if (response.status === 200) {
        console.log('data',response?.data?.trackerData)
        setUserData(response?.data?.trackerData)
        setTrackerCode(response?.data?.trackerCode)
        router.push('/home');
      }
    } 
    catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed');
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
