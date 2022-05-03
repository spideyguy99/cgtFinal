import * as React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, MenuList, Paper } from '@mui/material';

import Logo from './media/new.png';

export default function Nav(){
    return(
        <div className='navHolder'>
            <Paper>
                <div className='logo'>
                    <img src={Logo}/>
                </div>
                <div style={{width:'100%', height:'2px', backgroundColor: 'grey'}}/>
                <MenuList  className='nav'>
                    <MenuItem> 
                        <Link to={'/'}>Home</Link> 
                    </MenuItem>
                    <MenuItem> 
                        <Link to={'/about'}>About</Link> 
                    </MenuItem>
                    <MenuItem> 
                        <Link to={'/recipes'}>Recipes</Link> 
                    </MenuItem>
                    <MenuItem>
                        Specialty
                    </MenuItem>
                    <MenuItem>
                        Accessories
                    </MenuItem>
                    <MenuItem>
                        Products
                    </MenuItem>
                    <MenuItem>
                        Sales & Promotions
                    </MenuItem>
                </MenuList>
            </Paper>
        </div>
    )
}