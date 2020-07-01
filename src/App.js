import React, { Component } from 'react';
// import Cards from './components/Cards/Cards';
// import Charts from './components/Charts/Charts';
// import CountryPicker from './components/CountryPicker/CountryPicker'; 

import { Cards, Charts, CountryPicker } from './components';
import { fetchData } from './api/index';

import './App.css'

export default class App extends Component{
    state = {
        data: {},
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        // console.log(fetchedData)
        this.setState({
            data: fetchedData
        });

    }

    render(){
        const { data } = this.state;
        return(
            <div className="app-container">
                <Cards data={data} />
                <CountryPicker />
                <Charts />
            </div>
        )
    }
}