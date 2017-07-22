import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from'material-ui/Typography';
import Slider from 'react-slick';
import ExpeditionsItem from './item';

const styleSheet = createStyleSheet('ExpeditonsAfter', theme => ({
    bg: {
        backgroundColor: theme.institute.color,
        padding: 30
    },
    headline: {
        color: theme.default.color
    },
    slider: {
        width: '95%',
        margin: '20px auto 0 auto'
    }
}));

class ExpeditonsAfter extends Component {
    render() {
        const { classes, translations } = this.props;
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        const align = window.screen.width < 800 ? 'center' : 'left';
        return (
            <div className={classes.bg}>
                <div className="container" style={{ textAlign: align}}>
                    <Typography type="headline" color="inherit" className={classes.headline} gutterBottom>
                        {translations.title}
                    </Typography>
                    <Slider {...settings} className={classes.slider}>
                        <div><ExpeditionsItem link="#" translations={{ title: 'Teste', text: 'Teste 123', button: 'Saiba Mais' }} color="inherit" /></div>
                        <div><ExpeditionsItem link="#" translations={{ title: 'Teste', text: 'Teste 123', button: 'Saiba Mais' }} color="default" /></div>
                        <div><ExpeditionsItem link="#" translations={{ title: 'Teste', text: 'Teste 123', button: 'Saiba Mais' }} color="inherit" /></div>
                    </Slider>
                </div>
            </div>
        );
    }
}

ExpeditonsAfter.propTypes = {
    classes: PropTypes.object.isRequired,
    translations: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(ExpeditonsAfter);