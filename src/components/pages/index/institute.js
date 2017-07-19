import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Social from '../../social';
import Slider from 'react-slick';
import InstituteItem from './institute-item';
import Logo from '../../../assets/svg/logo_instituto.svg';

const styleSheet = createStyleSheet('Institute', theme => ({
    bg: {
        backgroundColor: theme.institute.color,
        padding: '20px 0'
    },
    gridContainer: {
        margin: 0,
    },
    img: {
        marginBottom: 20,
        width: 150,
        height: 100
    },
    subheading: {
        color: 'white'
    },
    slider: {
        width: '90%',
        margin: '20px auto 0 auto'
    }
}));

class Institute extends Component {
    render() {
        const { classes, text } = this.props;
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 480, settings: { slidesToShow: 2 } },
            ]
        }
        return (
            <div className={classes.bg}>
                <div className="container padding">
                    <Grid container className={classes.gridContainer} justify="space-around">
                        <Grid container item xs={5} justify="center">
                            <img src={Logo} alt="Instituto Vivala" className={classes.img} />
                        </Grid>
                        <Grid container item xs={6} justify="center">
                            <Typography type="subheading" gutterBottom color="inherit" className={classes.subheading}>
                                {text}
                            </Typography>
                            <Social color="rgba(255,255,255, 0.5)" facebook="#" linkedin="#" instagram="#" youtube="#"/>
                        </Grid>
                    </Grid>
                    <Slider {...settings} className={classes.slider}>
                        <div><InstituteItem title='asdasdasdasd' place='asdasdasdasd' subTitle='asdasdasdasd' link='ddd' /></div>
                        <div><InstituteItem title='asdasdasdasd' place='asdasdasdasd' subTitle='asdasdasdasd' link='ddd' /></div>
                        <div><InstituteItem title='asdasdasdasd' place='asdasdasdasd' subTitle='asdasdasdasd' link='ddd' /></div>
                    </Slider>
                </div>
            </div>
        );
    }
}

Institute.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(Institute);
