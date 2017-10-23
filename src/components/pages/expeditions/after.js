import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from'material-ui/Typography';
import Slider from 'react-slick';
import ExpeditionsListItem from './list-item';
import {PrevArrow, NextArrow} from '../../arrows';

const styleSheet = createStyleSheet('ExpeditonsAfter', theme => ({
    bg: {
        backgroundColor: theme.institute.color,
        padding: 30,
        textAlign: window.screen.width < 900 ? 'center' : 'left',
        paddingBottom: '3rem'
    },
    headline: {
        color: 'white',
        marginBottom: '2rem',
        textAlign: 'center',
        fontSize: '1.4em',
        fontWeight: '300',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    },
    slider: {
        width: '95%',
        margin: 'auto'
    }
}));

class ExpeditonsAfter extends Component {
    renderListItems = () => {
        return this.props.expeditions.map((expedition, key) => {
            return <div key={`${expedition.title}-${key}`}>
                <ExpeditionsListItem expedition={expedition} color="default" />
            </div>
        })
    }

    render() {
        const { classes, expeditions } = this.props;
        const settings = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: <PrevArrow white />,
            nextArrow: <NextArrow white />,
        }

        return (
            <div className={classes.bg}>
                <div className="container">
                    <Typography type="headline" color="inherit" className={classes.headline} gutterBottom>
                        Próximas Edições
                    </Typography>
                    { expeditions.length > 0 &&
                        <Slider {...settings} className={classes.slider}>
                            { this.renderListItems() }
                        </Slider>
                    }
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
