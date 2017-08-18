import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Youtube from 'react-youtube';
import Slider from 'react-slick';
import MediaNews from '../index/media-news';
import {Image} from 'cloudinary-react';
import trans from '../../../utils/translate';

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
        maxWidth: '100%',
        position: 'relative',
    },
    subheading: {
        color: 'white !important',
        fontSize: window.screen.width < 900 ? '18px' : '24px'
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
    }
}));

class AboutIndex extends Component {
    render() {
        const { classes } = this.props;

        const settings = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 10500,
            speed: 4000,
            slidesToShow: 1,
            arrows: false,
            slidesToScroll: 1,
            adaptativeHeight: true,
        }

        const padding = window.screen.width < 900 ? '70px 20px' : '100px 20px';

        return (
            <div>
                <div className={classes.bg}>
                    <div className="container padding">
                        <Typography type="headline" className={classes.headline} gutterBottom>
                            Sobre
                        </Typography>
                        <Typography type="body1" paragraph>
                            Acreditamos que viagens melhoram pessoas
                            e pessoas melhoram o mundo
                        </Typography>
                    </div>
                    <div className="container video">
                        <Youtube videoId="kaIRH4Uh7nw" opts={{ width: window.screen.width < 900 ? '100%' : '900px' }}/>
                    </div>
                </div>
                <div className={classes.bgOrange}>
                    <div className={classes.imagemBackground}>
                        <div className="container">
                            <Grid gutter={0} container className={classes.gridContainer}>

                                <Slider {...settings} className={classes.slider}>
                                    <div>
                                        <div style={{ padding, display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                            <Grid item xs={12} >
                                                <Typography type="subheading" className={classes.subheading}>
                                                    Não perca mais horas e horas procurando sua próxima viagem.
                                                    Peça sua cotação de forma ágil e seja atendido por agentes profissionais de forma humanizada e gratuita. Analisaremos seu perfil e iremos te sugerir opções em até 24 horas!
                                                </Typography>
                                            </Grid>
                                        </div>
                                    </div>

                                    <div>
                                        <div style={{ padding, display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                                            <Grid item xs={12} >
                                                <Typography type="subheading" className={classes.subheading}>
                                                    Se preferir, busque e compre suas próximas experiências comparando mais de 500.000 fornecedores no mundo
                                                </Typography>
                                            </Grid>
                                        </div>
                                    </div>

                                    <div>
                                        <div style={{ padding, display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                                            <Grid item xs={12} >
                                                <Typography type="subheading" className={classes.subheading}>
                                                    Buscando soluções corporativas?
                                                    Realizamos a gestão corporativa de viagens e programas de incentivo de viagens para seus funcionários.
                                                    </Typography>
                                            </Grid>
                                        </div>
                                    </div>

                                    <div>
                                        <div style={{ padding, display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                                            <Grid item xs={12} >
                                                <Typography type="subheading" className={classes.subheading}>
                                                    A Vivalá reverte 5% do seu lucro para o Instituto Vivalá,
                                                    fortalecendo o trabalho de Expedições de capacitação profissional realizado com microempreendedores brasileiros,
                                                    ou seja, comprando conosco você estará ajudando o Instituto a se manter e expandir suas atividades.
                                                </Typography>
                                            </Grid>
                                        </div>
                                    </div>
                                </Slider>

                            </Grid>
                        </div>
                    </div>
                </div>
                <MediaNews text={trans('index.mediaNews.text')} />
            </div>
        );
    }
}

AboutIndex.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(AboutIndex);