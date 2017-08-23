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
    createMarkup(markup) {
        return {__html: markup};
    }

    renderPhotos = () => {
        return this.props.itens_slider.map((item, key) => {
            if (item.type === 'photo') {
                return <div key={`expedicao-${key}`} className={this.props.classes.applySizes}>
                    <Youtube
                        videoId={"kaIRH4Uh7nw"}
                        opts={{ width: '100%', height: window.screen.width > 900 ? 420 : 250 }}
                    />
                </div>
            }

            return <div key={`expedicao-${key}`} className={this.props.classes.applySizes}>
                <Image
                    cloudName="vivala"
                    publicId={item.code}
                    width={window.screen.width > 900 ? 900 : window.screen.width}
                    height={window.screen.width > 900 ? 420 : 250}
                    crop="scale" alt={`Expedição Foto ${key+1}`}
                    className={this.props.classes.img}
                />
            </div>
        })
    }

    renderDescriptions = () => {
        return this.props.descricoes.map((description, key) => {
            return <Grid container gutter={0} item xs={12} align="center" justify="center" key={`description-${key}`}>
                <Typography type="title" color="accent" className={this.props.classes.title} gutterBottom>
                    {description.titulo}
                </Typography>
                <Typography type="body1">
                    <span dangerouslySetInnerHTML={this.createMarkup(description.texto)} />
                </Typography>
            </Grid>
        });
    }

    render() {
        const { classes, titulo } = this.props;

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

                        <Slider {...settings} className={classes.slider}>
                            {this.renderPhotos()}
                        </Slider>


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