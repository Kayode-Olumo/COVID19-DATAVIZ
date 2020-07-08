import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api/index';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Charts.module.css';

const Charts = ({data: {confirmed, recovered, deaths}, country}) =>{
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
                    data: dailyData.map(({ recovered }) => recovered),
                    label: 'Recovered',
                    borderColor: '#1cb142b0',
                    fill: true
                },{
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

const barChart = (
    confirmed ? ( 
        <Bar  
            data={{
                labels: ['Infected','Recovered','Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: ['#6236ffb0','#1cb142b0','#f9345fb0'], 
                    data: [
                        confirmed.value,
                        recovered.value, 
                        deaths.value
                    ]
                }],
            }} 
            option= {
                { legend: { display: false },
                  title: { display: true, 
                           text:`Current state in ${country}`
                         },
                }
            }
        />
    ) : null
) ; 

    return(
        <div className={styles.container}>
            {country? barChart:lineChart}
        </div>
    )
}

export default Charts;