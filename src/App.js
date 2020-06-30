import React, { Component } from 'react';
// import Cards from './components/Cards/Cards';
// import Charts from './components/Charts/Charts';
// import CountryPicker from './components/CountryPicker/CountryPicker'; 

import { Cards, 
         Charts, 
         CountryPicker } 
        from './components';

import './App.css'

export default class App extends Component{
    render(){
        return(
            <div className="app-container">
                <Cards />
                <CountryPicker />
                <Charts />
            </div>
        )
    }
}