import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Youtube from 'react-youtube';
import Slider from 'react-slick';
import MediaNews from '../index/media-news';
import {Image} from 'cloudinary-react';

const styleSheet = createStyleSheet('AboutIndex', theme => ({
    bg: {
        backgroundColor: theme.default.color
    },
    bgOrange: {
        backgroundColor: theme.vivala.color
    },
    headline: {
        textTransform: 'uppercase'
    },
    gridContainer: {
        position: 'relative',
        height: 400,
        textAlign: 'center',
        width: '100%',
        margin: 0,
    },
    img: {
        position: 'absolute',
    },
    text: {
        display: 'flex',
        width: window.screen.width < 800 ? window.screen.width : 800,
        alignItems: 'center',
        justifyContent: 'center'
    },
    subheading: {
        color: 'white !important'
    }
}));

class AboutIndex extends Component {
    render() {
        const { classes } = this.props;

        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
        }
        return (
            <div>
                <div className={classes.bg}>
                    <div className="container padding">
                        <Typography type="headline" className={classes.headline} gutterBottom>
                            Sobre
                        </Typography>
                        <Typography type="body1" paragraph>
                            Acreditamos que viagens melhoram pessoas e pessoas melhoram o mundo!
                        </Typography>
                        <Youtube videoId="kaIRH4Uh7nw" opts={{ width: '100%' }}/>
                    </div>
                </div>
                <div className={classes.bgOrange}>
                    <div className="container">
                        <Grid container align="center" className={classes.gridContainer}>
                            <Image
                                cloudName="vivala"
                                publicId="sobre_vivala_slide_fundo.png"
                                width={800}
                                height={400}
                                alt="Sobre"
                                className={classes.img}
                            />
                            <Slider {...settings} className="fix-slider">
                                <div>
                                    <Grid gutter={0} container justify="center" className={classes.text}>
                                        <Grid item xs={8}>
                                            <Typography type="subheading" align="center" className={classes.subheading}>
                                                Não perca mais horas e horas procurando sua próxima viagem.
                                                Peça sua cotação de forma ágil e seja atendido por agentes profissionais de forma humanizada e gratuita.
                                                Analisaremos seu perfil e iremos te sugerir opções em até 24 horas!
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                                <div>
                                    <div className={classes.text}>
                                        <Grid gutter={0} container justify="center" className={classes.text}>
                                            <Grid item xs={8}>
                                                <Typography type="subheading" align="center" className={classes.subheading}>
                                                    Se preferir, busque e compre suas próximas experiências comparando mais de 500.000 fornecedores no mundo
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                                <div>
                                    <div  className={classes.text}>
                                        <Grid gutter={0} container justify="center" className={classes.text}>
                                            <Grid item xs={8}>
                                                <Typography type="subheading" align="center" className={classes.subheading}>
                                                    Buscando soluções corporativas?
                                                    Realizamos a gestão corporativa de viagens e programas de incentivo de viagens para seus funcionários.
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                                <div>
                                    <div  className={classes.text}>
                                        <Grid gutter={0} container justify="center" className={classes.text}>
                                            <Grid item xs={8}>
                                                <Typography type="subheading" align="center" className={classes.subheading}>
                                                    A Vivalá reverte 5% do seu lucro para o Instituto Vivalá,
                                                    fortalecendo o trabalho de Expedições de capacitação profissional realizado com microempreendedores brasileiros,
                                                    ou seja, comprando conosco você estará ajudando o Instituto a se manter e expandir suas atividades.
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </Slider>
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