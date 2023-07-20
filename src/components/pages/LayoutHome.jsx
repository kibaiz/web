import React from 'react';
import {Box, Grid, Container} from '@mui/material';
import Typewriter from "typewriter-effect";
import CardHome from './CardHome';
import SectionHome from './SectionHome';

import '../styles/LayoutHome.scss';


const LayoutHome = () =>{
    return (
        <Container>
            <Box flex={4} pt={5} >
                <Grid container>
                    <Grid item xs={12}>
                        <p direction="row" className="title">Bienvenue</p>
                        <p direction="row" className="title2">
                            Centre d’Echanges, de Documentation et d’Information Interinstitutionnelles<br/>
                        </p>
                        <div direction="row" className="typewrite">
                            <Typewriter 
                                onInit={(typewriter) => {
                                typewriter
                                    .typeString("Notre Vision")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .pauseFor(1500)
                                    .typeString("Le développement équilibré et harmonieux, permettant aux différentes forces vives d’accéder à l’information et de contribuer au mieux vivre et au mieux être, et de participer à l’éradication de l’exclusion et de la pauvreté sous toutes  leurs  formes.")
                                    .pauseFor(1500)
                                    .start();
                            }}
                            />
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <CardHome/>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <SectionHome/>
                    </Grid>
                </Grid>
            </Box>
        </Container>

    );
};

export default  LayoutHome;