import * as React from 'react';
import { Paper } from '@mui/material';

import RecipesImg from '../media/recipes.png';

export default function Recipes(){
    return(
        <div>
            <Paper className='paper'>
                <div className='recipeLeft'>
                    <h2>Recipes</h2>
                    <p>
                        Try one of our many amazing recipes. With the NutriMaker, create food to your heart's content. Search through the endless combinations you are able to make.
                    </p>
                    <img src={RecipesImg} className="recipeImg" alt="recipies buffer img"/>
                </div>
                <div className='recipeRightHolder'>
                    <div className='recipeRight'>
                        <h3> Mix and match!</h3>
                        <p>Flavorful and healthy options.</p>
                    </div>
                </div>
                
            </Paper>
            
        </div>
    )
}