import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from'material-ui/Typography';
import Slider from 'react-slick';
import ExperiencesListItem from './list-item';

const styleSheet = createStyleSheet('ExpeditonsBefore', theme => ({
    bg: {
        backgroundColor: theme.defaultDarken.color,
        padding: 30,
        textAlign: window.screen.width < 900 ? 'center' : 'left'
    },
    headline: {
        color: theme.vivala.color,
        marginBottom: '2rem',
        textAlign: 'center',
        fontSize: '1.4em',
        fontWeight: '300',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    },
    slider: {
        width: '95%',
        margin: '20px auto'
    },
}));

class ExpeditonsBefore extends Component {
    renderListItems = () => {
        return this.props.experiences.map((experience, key) => {
            return <div key={`${experience.title}-${key}`}>
                <ExperiencesListItem experience={experience} color="inherit" />
            </div>
        })
    }
    render() {
        const { classes, experiences } = this.props;
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
                        Edições Anteriores
                    </Typography>
                    { experiences.length &&
                        <Slider {...settings} className={classes.slider}>
                            { this.renderListItems() }
                        </Slider>
                    }
                    </div>
            </div>
        );
    }
}

ExpeditonsBefore.propTypes = {
    classes: PropTypes.object.isRequired,
    experiences: PropTypes.array.isRequired
};

export default withStyles(styleSheet)(ExpeditonsBefore);
