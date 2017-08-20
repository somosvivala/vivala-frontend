import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from'material-ui/Typography';
import Slider from 'react-slick';
import ExpeditionsListItem from './list-item';

const styleSheet = createStyleSheet('ExpeditonsBefore', theme => ({
    bg: {
        backgroundColor: theme.defaultDarken.color,
        padding: 30,
        textAlign: window.screen.width < 900 ? 'center' : 'left'
    },
    headline: {
        color: theme.institute.color
    },
    slider: {
        width: '95%',
        margin: '20px auto'
    },
}));

class ExpeditonsBefore extends Component {
    renderListItems(expeditions) {
        return expeditions.map(expedition => {
            return <div key={expedition.title}>
                <ExpeditionsListItem expedition={expedition} color="inherit" />
            </div>
        })
    }
    render() {
        const { classes, translations, expeditions } = this.props;
        const settings = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
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

ExpeditonsBefore.propTypes = {
    classes: PropTypes.object.isRequired,
    translations: PropTypes.object.isRequired,
    expeditions: PropTypes.array.isRequired
};

export default withStyles(styleSheet)(ExpeditonsBefore);