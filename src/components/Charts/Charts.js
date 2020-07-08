import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api/index';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Charts.module.css';

const Charts = () =>{
    const [dailyData, setDailyData] = useState([]);
// similar to 
//     state ={
//         dailyData:{}
//      }
// setDailyData means you don't have to worry about this.setState({})

useEffect(() =>{
    const fetchAPI = async () => {
        setDailyData(await fetchDailyData());
    } 
    console.log(dailyData)
    fetchAPI();
}, []);

const lineChart = (
    dailyData.length ? (
        <Line 
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets:[{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#6236ffb0',
                    fill: true
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: '#f9345fb0',
                    // backgroundColor: 'rgb(255, 0, 0, 0.5)',
                    fill: true
                }]
            }}
        />
    )
    :
    null
);
    return(
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Charts;