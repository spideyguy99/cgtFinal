import * as React from 'react';
import { Paper } from '@mui/material';

import BackgroundPaper from '../media/homebackground.png';

export default function Home(){
    return(
        <div>
            <Paper className='paper'>
                
                <div  className='homeContent'>
                    <h1>Small Machine. <br/> Big Flavor </h1>
                    <p>Introducing the brand new food maker.</p>
                </div>
                <img src={BackgroundPaper} className='paperImg' alt='background img'/>
            </Paper>
        </div>
    )
}