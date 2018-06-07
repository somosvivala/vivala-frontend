import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Youtube from 'react-youtube';
import Slider from 'react-slick';
import MediaNews from '../index/media-news';
import trans from '../../../utils/translate';
import {PrevArrow, NextArrow} from '../../arrows';

const styleSheet = createStyleSheet('AboutIndex', theme => ({
    bg: {
        backgroundColor: theme.default.color
    },
    bgOrange: {
        backgroundColor: theme.vivala.color
    },
    headline: {
        marginTop: '2rem',
        textTransform: 'uppercase',
        fontWeight: 700,
        textAlign: window.screen.width < 900 ? 'center' : 'left',
    },
    gridContainer: {
        maxWidth: '100%',
        position: 'relative',
    },
    box: {
        position: 'relative',
        height: window.screen.width > 900 ? 300 : 250,
        textAlign: 'center'
    },
    subheading: {
        color: 'white !important',
        fontSize: window.screen.width < 900 ? '18px' : '22px',
        fontWeight: '500',
        lineHeight: '28px',
        display: 'inline-flex',
        alignItems: 'center',
        height: window.screen.width > 900 ? 300 : 250,
        margin: 'auto',
        width: '80%'
    },
    img: {
        position: 'absolute',
        maxWidth: '100%'
    },
    slider: {
        position: 'relative',
        height: window.screen.width > 900 ? 300 : 250
    },
    imagemBackground: {
        backgroundImage: 'url("http://res.cloudinary.com/vivala/image/upload/v1501121822/sobre_vivala_slide_fundo.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        maxWidth: '900px',
        margin: '0 auto'
    },
    subTitle: {
        textAlign: window.screen.width < 900 ? 'center' : 'left'
    }
}));

class AboutIndex extends Component {
    render() {
        const { classes } = this.props;

        const settings = {
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1,
            adaptativeHeight: true,
            prevArrow: <PrevArrow white inside />,
            nextArrow: <NextArrow white inside />,
        }

        return (
            <div className="content-wrapper">
                <Helmet>
                    <title>Sobre | Vivalá</title>
                    <meta name="theme-color" content="#ED6D2C" />
                    <meta name="description" content="Operadora de Volunturismo e Ecoturismo no Brasil e Agência Global de Viagens" />

                    <meta property="og:locale" content="pt_BR" />
                    <meta property="og:url" content={this.props.location.pathname} />
                    <meta property="og:title" content="Vivalá - Operadora de Volunturismo e Ecoturismo no Brasil e Agência Global de Viagens" />
                    <meta property="og:site_name" content="Vivalá" />
                    <meta property="og:description" content="Viaje pelo Brasil com roteiros de Turismo e Voluntariado, Experiências de Conexão com a Natureza e Lugares Incríveis para ir quando quiser." />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="https://res.cloudinary.com/vivala/image/upload/v1528403873/home_volunturismo_1527197447_vasb9e.jpg" />
                    <meta property="og:image:type" content="image/jpg" />
                    <meta property="og:image:width" content="1621" />
                    <meta property="og:image:height" content="788" />
                </Helmet>
                <div className="sobre">
                    <div className="container">
                        <Grid container className="page-header about-header " gutter={0} align="center" justify="center">
                            <Grid item xs={12} className="header-content">
                                <Typography type="headline" color="accent" className="section-title" gutterBottom>
                                    Sobre
                                </Typography>
                                <Typography type="body1" className="section-subtitle">
                                    Acreditamos que viagens melhoram pessoas e pessoas melhoram o mundo
                                </Typography>
                            </Grid>

                            <Grid className="video-wrapper" item xs={12}>
                                <Youtube videoId="kaIRH4Uh7nw" opts={{ width: '100%', height: '100%' }}/>
                            </Grid>
                        </Grid>
                    </div>
                </div>

                <MediaNews />
            </div>
        );
    }
}

AboutIndex.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(AboutIndex);
