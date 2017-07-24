import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from'material-ui/Typography';
import Slider from 'react-slick';
import ExpeditionsListItem from './list-item';

const styleSheet = createStyleSheet('ExpeditonsBefore', theme => ({
    bg: {
        backgroundColor: theme.defaultDarken.color,
        padding: 30
    },
    headline: {
        color: theme.institute.color
    },
    slider: {
        width: '95%',
        margin: '20px auto 0 auto'
    }
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
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        const align = window.screen.width < 800 ? 'center' : 'left';
        return (
            <div className={classes.bg}>
                <div className="container" style={{ textAlign: align }}>
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