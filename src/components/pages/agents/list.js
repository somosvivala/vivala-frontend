import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Slider from 'react-slick';
import {Image} from 'cloudinary-react';
import {Link} from 'react-router-dom';

const styleSheet = createStyleSheet('AgentsList', theme => ({
    bg: {
        backgroundColor: theme.default.color
    },
    subheading: {
        textTransform: 'uppercase',
        textAlign: window.screen.width < 900 ? 'center' : 'left',
        fontWeight: 700,
        marginTop: '2rem'
    },
    slider: {
        margin: '20px auto',
        width: '90%'
    },
    item: {
        textAlign: 'center',
        width: '100%',
        overflow: 'hidden'
    },
    subTitle: {
        textAlign: window.screen.width < 900 ? 'center' : 'left',
        paddingLeft: window.screen.width < 900 ? 0 : 25,
        maxWidth: window.screen.width < 900 ? '60%' : '100%',
        margin: '0 auto 3rem auto'
    },
    align: {
        textAlign: window.screen.width < 900 ? 'center' : 'left',
        paddingLeft: window.screen.width < 900 ? 0 : 25
    },
    button: {
        width: window.screen.width < 900 ? '100%' : '33%',
        textTransform: 'none',
        fontWeight: 700,
        paddingLeft: 0,
        paddingRight: 0,
        fontSize: window.screen.width < 900 ? '15px' : '17px'
    },
    alignCenter: {
        textAlign: 'center',
        textTransform: 'none',
        fontWeight:600,
        marginTop: 40
    },
    img: {
        margin: '0 auto',
        marginBottom: 10,
        width: '90%',
        height: 'auto'
    }
}));

class AgentsList extends Component {
    render() {
        const { classes } = this.props;
        const settings = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 7000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 480, settings: { slidesToShow: 1 } },
            ],
            adaptativeHeight: true
        }

        return (
            <div className={classes.bg}>
                <div className="container padding">
                    <Typography type="headline" align="center" className={classes.subheading} gutterBottom>
                        Agentes
                    </Typography>
                    <Typography type="body1" align="center" gutterBottom className={classes.subTitle}>
                        Conheça algumas pessoas do nosso time de agentes
                    </Typography>

                    <Slider {...settings} className={classes.slider}>
                        <div>
                            <div className={classes.item}>
                                <Image
                                    cloudName="vivala"
                                    publicId="luiza_celidonio.png"
                                    width={window.screen.width < 480 ? 250 : 180}
                                    height={window.screen.width < 480 ? 180 : 120}
                                    crop="scale" alt="Luiza Celidonio"
                                    className={classes.img}
                                />
                                <Typography type="body1">Luiza Celidonio</Typography>
                                <Typography type="body1">São Paulo, São Paulo</Typography>
                            </div>
                        </div>
                        <div>
                            <div className={classes.item}>
                                <Image
                                    cloudName="vivala"
                                    publicId="lara_magnago.png"
                                    width={window.screen.width < 480 ? 250 : 180}
                                    height={window.screen.width < 480 ? 180 : 120}
                                    crop="scale" alt="Lara Magnago"
                                    className={classes.img}
                                />
                                <Typography type="body1">Lara Magnago</Typography>
                                <Typography type="body1">Vitória, Espírito Santo</Typography>
                            </div>
                        </div>
                        <div>
                            <div className={classes.item}>
                                <Image
                                    cloudName="vivala"
                                    publicId="cristiane_schuh.png"
                                    width={window.screen.width < 480 ? 250 : 180}
                                    height={window.screen.width < 480 ? 180 : 120}
                                    crop="scale" alt="Cristiane Schuh"
                                    className={classes.img}
                                />
                                <Typography type="body1">Cristiane Schuh</Typography>
                                <Typography type="body1">Dois Irmãos, Rio Grande do Sul</Typography>
                            </div>
                        </div>
                    </Slider>

                    <div className={classes.alignCenter}>
                        <Link to="/agentes/seja-um-agente">
                            <Button raised color="primary" className={classes.button}>
                                Seja um Agente Vivalá!
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

AgentsList.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(AgentsList);
