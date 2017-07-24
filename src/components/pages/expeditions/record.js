import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Slider from 'react-slick';

const styleSheet = createStyleSheet('ExpeditionsRecord', theme => ({
    bg: {
        backgroundColor: theme.default.color,
        padding: 30,
    },
    img: {
        width: '100%',
        textAlign: 'center'
    },
    title: {
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    subheading: {
        textTransform: 'uppercase',
    },
    slider: {
        width: '95%',
        margin: '20px auto'
    }
}));

class ExpeditionsRecord extends Component {
    render() {
        const { classes, title, text, text2 } = this.props;

        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        }

        return (
            <div className={classes.bg}>
                <div className="container">
                    <Grid gutter={24} container align="center" justify="center">
                        <Typography type="title" color="accent" className={classes.title}>
                            {title}
                        </Typography>

                        <Slider {...settings} className={classes.slider}>
                            <div><img src="http://via.placeholder.com/800x400" className={classes.img}/></div>
                            <div><img src="http://via.placeholder.com/800x400" className={classes.img}/></div>
                            <div><img src="http://via.placeholder.com/800x400" className={classes.img}/></div>
                        </Slider>

                        <Grid container gutter={0} item xs={12} align="center" justify="center">
                            <Typography type="subheading" color="accent" className={classes.subheading} gutterBottom>
                                Propósito
                            </Typography>
                            <Typography type="body1">
                                {text}
                            </Typography>
                        </Grid>
                        <Grid container gutter={0} item xs={12} align="center" justify="center">
                            <Typography type="subheading" color="accent" className={classes.subheading} gutterBottom>
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
};

export default withStyles(styleSheet)(ExpeditionsRecord);