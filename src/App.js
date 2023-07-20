import * as React from 'react';
import { Routes, Route } from 'react-router';
import DrawerAppBar from './components/Navbar';
import Home from './components/Home';
import Echange from './components/Echange';
import Documentation from './components/Documentation';
import Information from './components/Information';
import Apropos from './components/Apropos';

import { Box } from '@mui/material';


function App() {
    return( 
    <Box>
        <DrawerAppBar/>
            <Routes>
                <Route path = "/" element={<Home/>}/> 
                <Route path = "/Acceuil" element={<Home/>}/> 
                <Route path = "/Echange" element = { <Echange/>}/> 
                <Route path = "/Documentation" element = {<Documentation/>}/> 
                <Route path = "/Information" element = { < Information />}/> 
                <Route path = "/Apropos" element = { < Apropos />}/>
            </Routes>
        </Box>
    );
}

export default App;