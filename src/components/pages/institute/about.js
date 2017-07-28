import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import {Link} from 'react-router-dom';
import {Image} from 'cloudinary-react';
import Slider from "react-slick";
import _ from 'lodash';

const styleSheet = createStyleSheet('InstituteAbout', theme => ({
    bg: {
        backgroundColor: theme.default.color,
        textAlign: window.screen.width < 800 ? 'center' : 'left'
    },
    title: {
        textTransform: 'uppercase'
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
                        <Grid gutter={0} container className={classes.text}>
                            <Grid item xs={8}>
                                <Typography type="subheading" color="inherit" className={classes.title} style={{ color: 'white' }} gutterBottom>
                                    Melhore o seu Mundo
                                </Typography>
                                <Typography type="body1" color="inherit" style={{ color: 'white' }}>
                                    Projetos de capacitação <br/> profissional com microempreendedores
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
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
            adaptativeHeight: true,
        }
        return (
            <div>
                <div className={classes.bg}>
                    <div className="container padding">
                        <Typography type="headline" color="accent" className={classes.title}>
                            Sobre o Instituto
                        </Typography>
                    </div>
                </div>

                <div className="container">
                    <div className={classes.item}>
                        <Slider {...settings} className={classes.slider}>
                            { this.renderHeader() }
                        </Slider>
                    </div>
                </div>

                <div className={classes.bg}>
                    <div className="container" style={{ padding: '20px 0' }}>
                        <div style={{ padding: '0 20px'}}>
                            <Typography type="title" color="accent" className={classes.title} gutterBottom>
                                Seja a Mudança
                            </Typography>
                            <Typography type="body1" paraghraph>
                                Para cada compra realizada no site, 5% do lucro é destinado
                                a ações de sustentabilidade e capacitação profissional
                            </Typography>
                        </div>
                        <br/>
                        <Link className={classes.button} to="/expedicoes">
                            <Image
                                cloudName="vivala"
                                publicId="sobre_instituto_expedicoes.png"
                                width={window.screen.width > 900 ? 900 : 500}
                                height={window.screen.width > 900 ? 400 : 170}
                                crop="fit" alt="Sobre Instituto"
                            />
                            <Typography type="title" color="inherit" className={classes.text2}>
                                Expedições
                            </Typography>
                        </Link>
                        <Link className={classes.button} to="/instituto">
                            <Image
                                cloudName="vivala"
                                publicId="sobre_instituto_sustentavel.png"
                                width={window.screen.width > 900 ? 900 : 500}
                                height={window.screen.width > 900 ? 400 : 170}
                                crop="fit" alt="Sobre Instituto Sustentável"
                            />
                            <Typography type="title" color="inherit" className={classes.text2}>
                                Instituto Sustentável
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
                            <Typography type="title" color="inherit" className={classes.text2}>
                                Resultados
                            </Typography>
                        </Link>
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