import * as React from 'react';
import { Paper } from '@mui/material';

export default function About(){
    return(
        <Paper style={{width: '50%', margin: 'auto'}}>
            <div className='aboutHolder'>
                <h1>About</h1>
                <p>NutriMaker is a one of a kind, instantaneous food generator. Essentially, food preparation made easy. No more messy cleanups or long wait times. Have food ready at the push of a button. We believe everyone deserves to have great tasting food, without having to shell out all of their hard earned money. Not everyone has access to food, but with this device; you will never go hungry again.</p>
            </div>
        </Paper>
        
    )
}