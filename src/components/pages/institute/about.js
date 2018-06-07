import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import {Link} from 'react-router-dom';
import {Image} from 'cloudinary-react';
import Slider from "react-slick";
import _ from 'lodash';
import {PrevArrow, NextArrow} from '../../arrows';


const styleSheet = createStyleSheet('InstituteAbout', theme => ({
    bg: {
        backgroundColor: theme.default.color,
        textAlign: window.screen.width < 800 ? 'center' : 'left'
    },
    title: {
        textTransform: 'uppercase',
        fontWeight: '700',
        margin: '2rem 0 1rem 0'
    },
    headerSliderInstituto: {
        textTransform: 'uppercase',
        fontWeight: '500',
        fontSize: '1.3em',
        letterSpacing: 2
    },
    textoSliderInstituto: {
        fontSize: '1.15em',
        color: 'white',
        lineHeight: '25px'
    },
    item: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        position: 'absolute',
        textAlign: 'center',
        maxWidth: '100%'
    },
    text2: {
        position: 'absolute',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: 'white !important'
    },
    button: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white !important',
        marginBottom: 30
    },
    slider: {
        maxWidth: '100%'
    },
    whiteColor: {
        color: 'white'
    },
    conteudoCentral: {
        backgroundColor: '#fff',
        textAlign: 'center'
    },
    titleTextoCentral: {
        textTransform: 'uppercase',
        maxWidth: window.screen.width > 900 ? '55%' : '100%',
        margin: '2rem auto',
        fontSize: '1.3em',
        letterSpacing: 2
    },
    textoCentral: {
        maxWidth: window.screen.width > 900 ? '50%' : '100%',
        margin: '2rem auto',
        fontSize: '1.15em'
    },
    textoCardInstituto: {
        textTransform: 'none',
        fontWeight: 700,
        position: 'absolute',
        textAlign: 'center',
        color: 'white !important'

    }

}));

class InstituteAbout extends Component {
    renderHeader = () => {
        const { classes } = this.props;
        return _.range(4).map(key => {
            return (
                <div key={`header-${key}`}>
                    <Grid container gutter={0} align="center" justify="center" direction="column">
                        <Grid item xs={12}>
                            <Image
                                cloudName="vivala"
                                publicId={`sobre_instituto_slide_${key+1}.png`}
                                width={window.screen.width > 900 ? 900 : window.screen.width}
                                height={window.screen.width > 900 ? 300 : 220}
                                crop="scale" alt="Sobre Instituto"
                            />
                        </Grid>
                        <Grid gutter={0} container className={classes.text + ' instituto-sobre-slider'}>
                            <Grid item xs={8}>
                                <Typography type="subheading" color="inherit" className={`${classes.headerSliderInstituto} ${classes.whiteColor}`} gutterBottom>
                                    Melhore o seu Mundo
                                </Typography>
                                <Typography type="body1" color="inherit" className={classes.textoSliderInstituto + ' texto-slider-instituto'}>
                                    Projetos de capacitação profissional, mentoria e acesso a capital <br/> para pequenos empreendedores
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            )
        })
    }

    render() {
        const { classes } = this.props;
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4500,
            adaptativeHeight: true,
            prevArrow: <PrevArrow white inside />,
            nextArrow: <NextArrow white inside />,
        }

        return (
            <div className={classes.bg}>
                <div className="content-wrapper">
                    <Helmet>
                        <title>Sobre | Instituto Vivalá</title>
                        <meta name="theme-color" content="#09A2A1" />
                        <meta name="description" content="Projetos de Capacitação Profissional e Investimentos para Microempreendedores Mentorados." />

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
                    <div className={classes.bg}>
                        <div className="container padding">
                            <Typography type="headline" color="accent" className={classes.title}>
                                Sobre o Instituto
                            </Typography>
                        </div>
                    </div>

                <div className="container sobre-instituto-slick-container">
                    <div className={classes.item}>
                        <Slider {...settings} className={classes.slider}>
                            { this.renderHeader() }
                        </Slider>
                    </div>
                </div>
            </div>
            <div className={classes.conteudoCentral}>
                <div>
                    <div className="container padding-heights">
                        <div>
                            <Typography type="title" color="accent" className={classes.titleTextoCentral} gutterBottom>
                                Conheça e se envolva com nossos projetos
                            </Typography>
                        </div>
                        <br/>
                        <Link className={classes.button} to="/volunturismo">
                            <Image
                                cloudName="vivala"
                                publicId="sobre_instituto_expedicoes.png"
                                width={window.screen.width > 900 ? 900 : 500}
                                height={window.screen.width > 900 ? 400 : 170}
                                crop="fit" alt="Sobre Instituto"
                            />
                            <Typography type="title" color="inherit" className={classes.textoCardInstituto}>
                                Capacitação profissional
                            </Typography>
                        </Link>
                        <Link className={classes.button} to="/instituto">
                            <Image
                                cloudName="vivala"
                                publicId="sobre_instituto_sustentavel.png"
                                width={window.screen.width > 900 ? 900 : 500}
                                height={window.screen.width > 900 ? 400 : 170}
                                crop="fit" alt="Sobre Fundo Social de Investimento"
                            />
                            <Typography type="title" color="inherit" className={classes.textoCardInstituto}>
                                Fundo Social de Investimento
                            </Typography>
                        </Link>
                        <Link className={classes.button} to="/instituto/resultados">
                            <Image
                                cloudName="vivala"
                                publicId="sobre_instituto_resultados.png"
                                width={window.screen.width > 900 ? 900 : 500}
                                height={window.screen.width > 900 ? 400 : 170}
                                crop="fit" alt="Sobre Instituto Resultados"
                            />
                            <Typography type="title" color="inherit" className={classes.textoCardInstituto}>
                                Resultados
                            </Typography>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

InstituteAbout.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(InstituteAbout);
