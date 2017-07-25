import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Youtube from 'react-youtube';
import Slider from 'react-slick';
import MediaNews from '../index/media-news';

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
    }
}));

class AboutIndex extends Component {
    render() {
        const { classes } = this.props;
        const imgSrc = `http://via.placeholder.com/${window.screen.width <= 800 ? window.screen.width : 800 }x400`;
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
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
                        <Youtube videoId="Qzdy_jaS4nw" opts={{ width: '100%' }}/>
                    </div>
                </div>
                <div className={classes.bgOrange}>
                    <div className="container">
                        <Grid container align="center" className={classes.gridContainer}>
                            <img src={imgSrc} alt="Conheça seu mundo" className={classes.img}/>
                            <Slider {...settings} className="fix-slider">
                                <div>
                                    <div className={classes.text}>
                                        <Typography type="body1" align="center" color="white">
                                            asdasdasdasdasd
                                        </Typography>
                                    </div>
                                </div>
                                <div>
                                    <div className={classes.text}>
                                        <Typography type="body1" align="center" color="white">
                                            asdasdasdasdasd
                                        </Typography>
                                    </div>
                                </div>
                                <div>
                                    <div  className={classes.text}>
                                        <Typography type="body1" align="center" color="white">
                                            asdasdasdasdasd
                                        </Typography>
                                    </div>
                                </div>
                                <div>
                                    <div  className={classes.text}>
                                        <Typography type="body1" align="center" color="white">
                                            asdasdasdasdasd
                                        </Typography>
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