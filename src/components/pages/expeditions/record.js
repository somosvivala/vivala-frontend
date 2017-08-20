import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Slider from 'react-slick';
import {Image} from  'cloudinary-react';
import {PrevArrow, NextArrow} from '../../arrows';

const styleSheet = createStyleSheet('ExpeditionsRecord', theme => ({
    bg: {
        backgroundColor: theme.default.color,
        padding: 30,
    },
    img: {
        width: '100%',
        textAlign: 'center'
    },
    headline: {
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    title: {
        textTransform: 'uppercase',
    },
    slider: {
        width: '95%',
        margin: '20px auto'
    },
    applySizes: {
        width: window.screen.width > 900 ? 900 : window.screen.width,
        height: window.screen.width > 900 ? 420 : 250
    }
}));

class ExpeditionsRecord extends Component {
    renderPhotos = () => {
        return this.props.photos.map((photo, key) => {
            return <div key={`expedicao-${key}`} className={this.props.classes.applySizes}>
                <Image
                    cloudName="vivala"
                    publicId={photo.name}
                    width={window.screen.width > 900 ? 900 : window.screen.width}
                    height={window.screen.width > 900 ? 420 : 250}
                    crop="scale" alt={`Expedição Foto ${key+1}`}
                    className={this.props.classes.img}
                />
            </div>
        })
    }
    render() {
        const { classes, title, text, text2 } = this.props;

        const settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptativeHeight: true,
            autoplay: true,
            autoplaySpeed: 4000,
            prevArrow: <PrevArrow white inside />,
            nextArrow: <NextArrow white inside />,
        }

        return (
            <div className={classes.bg}>
                <div className="container">
                    <Grid gutter={24} container align="center" justify="center">
                        <Typography type="headline" color="accent" className={classes.headline}>
                            {title}
                        </Typography>

                        <Slider {...settings} className={classes.slider}>
                            {this.renderPhotos()}
                        </Slider>

                        <Grid container gutter={0} item xs={12} align="center" justify="center">
                            <Typography type="title" color="accent" className={classes.title} gutterBottom>
                                Propósito
                            </Typography>
                            <Typography type="body1">
                                {text}
                            </Typography>
                        </Grid>
                        <Grid container gutter={0} item xs={12} align="center" justify="center">
                            <Typography type="title" color="accent" className={classes.title} gutterBottom>
                                Roteiro
                            </Typography>
                            <Typography type="body1">
                                {text2}
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

ExpeditionsRecord.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string,
    text: PropTypes.string,
    text2: PropTypes.string,
    photos: PropTypes.array,
};

export default withStyles(styleSheet)(ExpeditionsRecord);