import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Social from '../../social';
import Slider from 'react-slick';
import InstituteItem from './institute-item';
import Logo from '../../../assets/svg/logo_instituto.svg';
import {PrevArrow, NextArrow} from '../../arrows';

const styleSheet = createStyleSheet('Institute', theme => ({
    bg: {
        backgroundColor: theme.institute.color,
        padding: '20px 0'
    },
    gridContainer: {
        margin: 0,
    },
    logoInstituto: {
        height: 80,
        maxWidth: '90%',
        objectFit: 'contain',
        margin: 'auto'
    },
    subheading: {
        color: 'white',
        textAlign: 'center',
    },
    slider: {
        width:  '90%',
        margin: '30px auto',
        minHeight: 0,
        minWidth: 0
    }
}));

class Institute extends Component {
    renderItems = () => {
        return this.props.expeditions.map((expedition, key) => {
            return <div key={`expedicao-${key}`}>
                <InstituteItem title={expedition.titulo} subtitle={expedition.descricao} link={`/expedicoes/${expedition.id}`} />
            </div>
        })
    }

    render() {
        const { classes } = this.props;
        const settings = {
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 768, settings: { slidesToShow: 2 } },
                { breakpoint: 480, settings: { slidesToShow: 1 } }
            ],
            adaptativeHeight: false,
            variableWidth: true,
            autoplay: false,
            autoplaySpeed: 500,
            prevArrow: <PrevArrow white />,
            nextArrow: <NextArrow white />,
            speed: 500
        }

        return (
            <div className={classes.bg}>
                <div className="container padding">
                    <Grid gutter={8} container className={classes.gridContainer} justify="space-between">
                        <Grid gutter={0} container item xs={4} justify="center">
                            <img src={Logo} alt="Instituto Vivala" className={classes.logoInstituto} />
                        </Grid>
                    </Grid>
                    <div className="home-instituto-slick-container">
                        <Slider {...settings} className={classes.slider}>
                            {this.renderItems()}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

Institute.propTypes = {
    classes: PropTypes.object.isRequired,
    expeditions: PropTypes.array,
};

export default withStyles(styleSheet)(Institute);
