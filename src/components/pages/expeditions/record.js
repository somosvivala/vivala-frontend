import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Slider from 'react-slick';
import {Image} from  'cloudinary-react';
import {PrevArrow, NextArrow} from '../../arrows';
import Youtube from 'react-youtube';

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
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '2rem'
    },
    title: {
        textTransform: 'uppercase',
        textAlign: window.screen.width > 900 ? 'left' : 'center',
        width: window.screen.width > 900 ? '80%' : '100%',
    },
    slider: {
        width: '95%',
        margin: '20px auto'
    },
    containerTexto: {
        width: window.screen.width > 900 ? '80%' : '100%',
        margin: 'auto',
        textAlign: window.screen.width > 900 ? 'left' : 'center',
    },
}));

class ExpeditionsRecord extends Component {
    renderPhotos = () => {
        const {classes, itens_slider} = this.props;
        return itens_slider.map((item, key) => {
            if (item.type === 'video') {
                return (
                    <div key={`expedicao-${key}`}>
                        <div >
                            <Youtube
                                videoId={item.code}
                                opts={{ width: '100%', height: window.screen.width > 900 ? 400 : 250 }}
                            />
                        </div>
                    </div>
                );
            }

            return (
                <div key={`expedicao-${key}`}>
                    <div >
                        <Image
                            cloudName="vivala"
                            publicId={item.code}
                            height={window.screen.width > 900 ? 400 : 250}
                            crop="scale" alt={`Expedição Foto ${key+1}`}
                            className={classes.img}
                        />
                    </div>
                </div>
            );
        })
    }



    renderDescriptions = () => {
        const {classes, descricoes} = this.props;
        if (!descricoes.length) return null;
        return descricoes.map((description, key) => {
            return (
                <Grid container gutter={0} item xs={12} align="center" justify="center" key={`description-${key}`}>
                    <Typography type="title" color="accent" className={classes.title} gutterBottom>
                        {description.titulo}
                    </Typography>
                    <Typography type="body1" dangerouslySetInnerHTML={{__html: description.texto }} component="div" className={classes.containerTexto} />
                </Grid>
            );
        });
    }

    render() {
        const { classes, titulo, itens_slider } = this.props;

        const settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptativeHeight: true,
            autoplay: true,
            autoplaySpeed: 5000,
            prevArrow: <PrevArrow white inside />,
            nextArrow: <NextArrow white inside />,
        }

        return (
            <div className={classes.bg}>
                <div className="container">
                    <Grid gutter={24} container align="center" justify="center">
                        <Typography type="headline" color="accent" className={classes.headline}>
                            {titulo}
                        </Typography>

                        { itens_slider.length > 0 &&
                            <Slider {...settings} className={classes.slider}>
                                {this.renderPhotos()}
                            </Slider>
                        }

                        {this.renderDescriptions()}
                    </Grid>
                </div>
            </div>
        );
    }
}

ExpeditionsRecord.propTypes = {
    classes: PropTypes.object.isRequired,
    titulo: PropTypes.string,
    descricoes: PropTypes.array,
    itens_slider: PropTypes.array,
};

export default withStyles(styleSheet)(ExpeditionsRecord);
