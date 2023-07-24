import React from 'react';
import { Box, Grid} from '@mui/material';
import LayoutHome from './pages/LayoutHome';


const Home = () =>{
    return (
        <Box flex={4} p={10}>
            <Grid container>
                <Grid item sm={12}>
                    <LayoutHome/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;