import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from'material-ui/Typography';
import Slider from 'react-slick';
import ExpeditionsListItem from './list-item';

const styleSheet = createStyleSheet('ExpeditonsAfter', theme => ({
    bg: {
        backgroundColor: theme.institute.color,
        padding: 30,
        textAlign: window.screen.width < 900 ? 'center' : 'left'
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
    renderListItems(expeditions) {
        return expeditions.map(expedition => {
            return <div key={expedition.title}>
                <ExpeditionsListItem expedition={expedition} color="default" />
            </div>
        })
    }

    render() {
        const { classes, translations, expeditions } = this.props;
        const settings = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
        }

        return (
            <div className={classes.bg}>
                <div className="container">
                    <Typography type="headline" color="inherit" className={classes.headline} gutterBottom>
                        {translations.title}
                    </Typography>
                    <Slider {...settings} className={classes.slider}>
                        { this.renderListItems(expeditions) }
                    </Slider>
                </div>
            </div>
        );
    }
}

ExpeditonsAfter.propTypes = {
    classes: PropTypes.object.isRequired,
    translations: PropTypes.object.isRequired,
    expeditions: PropTypes.array.isRequired
};

export default withStyles(styleSheet)(ExpeditonsAfter);