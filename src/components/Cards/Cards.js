import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import './Cards.css'

const Cards = ( confirmed, recovered, deaths, lastUpdate) =>{
    return(
        <div className='card-container'>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography colour='textSecondary' gutterBottom>Infected</Typography>
                        <Typography variant='h5'>real data</Typography>
                        <Typography colour='textSecondary'>real date</Typography>
                        <Typography variant='body2'>Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography colour='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography variant='h5'>real data</Typography>
                        <Typography colour='textSecondary'>real date</Typography>
                        <Typography variant='body2'>Number of recovered from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography colour='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant='h5'>real data</Typography>
                        <Typography colour='textSecondary'>real date</Typography>
                        <Typography variant='body2'>Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    )
}



export default Cards;