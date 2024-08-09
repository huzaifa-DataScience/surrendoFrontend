import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';  

import { format } from 'date-fns';
import styles from "./pickdate.module.css"


const pickDate = ({selectedDate , setSelectedDate ,type}) => {

    const [date , setDate] = useState('2024-08')
    let formattedDate =''

    useEffect(()=>{
        if(date && type=='monthly'){
        formattedDate = format(date, 'yyyy-MM');
        setSelectedDate(formattedDate)
        }
        else if (date && type =='yearly'){
            formattedDate = format(date, 'yyyy');
            setSelectedDate(formattedDate)
        }
    },[date])


  return (
    <div>

            <h1>Select your date</h1>
                   {type!=='yearly'? <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setDate(date)}
                        dateFormat="yyyy/MM/dd"
                        className={styles.datePicker} 
                    />
                :
                <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                showYearPicker
                dateFormat="yyyy"
                className={styles.datePicker} 
              />
                   }

    </div>
  )
}

export default pickDate