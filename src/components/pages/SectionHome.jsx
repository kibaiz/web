import React from 'react';
import {Box} from '@mui/material';
import '../styles/SectionHome.scss';

const SectiontHome = () =>{
    return (
        <Box flex={4}>
            <div class="header">
                <h1>Les acquis, que le CEDII peut faire valoir, couvrent plusieurs domaines, et peuvent être regroupés sous trois rubriques principales : les acquis en expériences, les acquis en résultats, et les acquis en partenariats.</h1>
                <h1>Diagnostic et analyse stratégique</h1>
                <p>
                
                </p>
            </div>
                <div class="row1-container">
                <div class="box box-down cyan">
                <h2>D'expériences</h2>
                <p>Ces acquis revêtent un caractère très significatif dans les domaines de la mobilisation, de la coopération, du développement de réseaux, le développement des appuis-conseils, et le développement de systèmes d’informations</p>
                <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt=""/>
                </div>

                <div class="box red">
                <h2>Partenariats</h2>
                <p>En matière de partenariat, le CEDII offre l’un des exemples locaux de collaboration réussie entre le secteur public, le secteur privé, la société rurale et la société civile locale.</p>
                <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""/>
                </div>

                <div class="box box-down blue">
                <h2>Des résultats</h2>
                <p>L’avenir de CEDII pourra se concrétiser dans le développement de nouveaux services innovants, face à des problèmes relativement nouveaux ou récents des jeunes, des collectivités, des professionnels du secteur privé ou de la société civile, etc.</p>
                <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt=""/>
                </div>
            </div>
            <div class="row2-container">
                <div class="box orange">
                <h2>Les acquis  en matière </h2>
                <p>
                    Le développement des formations et des appuis-conseils : pour les artisans, pour les producteurs paysans, etc.
                </p>
                <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt=""/>
                </div>
            </div>
        </Box>
    );
};

export default  SectiontHome;