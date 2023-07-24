import React from 'react';
import {Box,Link} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import '../styles/Footer.scss';

const Footer = () =>{
    return (
        <Box pt={8}>
            <footer class="footer">
                <div class="waves">
                    <div class="wave" id="wave1"></div>
                    <div class="wave" id="wave2"></div>
                    <div class="wave" id="wave3"></div>
                    <div class="wave" id="wave4"></div>
                </div>
                <div class="footer-distributed">
                    <div class="footer-left">
                        <h3>CE<span>DII</span></h3>
                        <p>Centre d’Echanges, de Documentation et d’Information Interinstitutionnelles</p>
                        <p class="footer-links">
                            <Link href="#" class="link-1">Acceuil</Link>
                            
                            <Link href="#">Echange</Link>
                        
                            <Link href="#">Documentation</Link>
                        
                            <Link href="#">Information</Link>
                            
                            <Link href="#">A propos</Link>
                        </p>
                    </div>
                    <div class="footer-center">
                        <div>
                            <i class="place"><PlaceIcon/></i>
                            <p><span>Boulevard Philibert TSIRANANA</span> BP. 166 Tsianolondroa 301 <br/>FIANARANTSOA MADAGASCAR</p>
                        </div>

                        <div>
                            <br/>
                            <i class="place"><CallIcon/></i>
                            <p>Tel: (261) 20 75 509 34 / (261) 20 75 509 68 <br/>Fax : (261) 20 75 511 06</p>
                        </div>

                        <div>
                            <br/>
                            <i class="place"><EmailIcon/></i>
                            <p><a href="cedii@cedii.mg">Email : cedii@cedii.mg ;  cedii.fia@moov.mg  </a></p>
                        </div>
                    </div>
                    <div class="footer-right">
                        <p class="footer-company-about">
                            <h3>cedii</h3>
                            Actuellement, le CEDII compte, derrière lui, plus de huit (08) années d’existence et depuis sa création, l’effectif des associations membres a pu doubler. En parallèle, des structures exécutives internes ont pu être instituées : Maison des Organisations de la Société Civile, Service de Documentation, Service Questions-Réponses, Service Information et Animation, Service Cyberespace et microédition. 
                        </p>
                        <div class="footer-icons">
                            <Link href="https://www.facebook.com/echangesinformationdocumentation"><FacebookIcon/></Link>
                            <Link href="https://mail.google.com/mail/u/0/#search/cedii.fia%40gmail.com"><EmailIcon/></Link>
                        </div>
                    </div>
                </div>                         
            </footer>
        </Box>
    );
};

export default  Footer;