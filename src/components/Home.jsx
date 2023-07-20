import React from 'react';
import { Box, Grid} from '@mui/material';
import LayoutHome from './pages/LayoutHome';
import Footer from './pages/Footer';

const Home = () =>{
    return (
        <Box flex={4} p={10}>
            <Grid container>
                <Grid item sm={12}>
                    <LayoutHome/>
                </Grid>
            </Grid>
            <Footer/>
        </Box>
    );
};

export default Home;