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
        color: 'white',
        textAlign: 'center'
    },
    slider: {
        width: '90%',
        margin: '20px auto'
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
                { breakpoint: 768, settings: { slidesToShow: 2 } },
            ],
            adaptativeHeight: true,
        }
        return (
            <div className={classes.bg}>
                <div className="container padding">
                    <Grid gutter={0} container className={classes.gridContainer} justify="space-around">
                        <Grid gutter={0} container item xs={4} justify="center">
                            <img src={Logo} alt="Instituto Vivala" className={classes.img} />
                        </Grid>
                        <Grid gutter={0} container item xs justify="center">
                            <Typography type="subheading" gutterBottom color="inherit" className={classes.subheading}>
                                {text}
                            </Typography>
                            {
                                window.screen.width > 900 &&
                                    <Social color="rgba(255,255,255, 0.5)"
                                            facebook="https://www.facebook.com/institutovivala/"
                                            linkedin="https://pt.linkedin.com/company/vivalá"
                                            instagram="https://www.instagram.com/institutovivala/"
                                            youtube="https://www.youtube.com/channel/UCF-Lv8two48zRLLd8_DOcGA"
                                    />
                            }
                        </Grid>
                    </Grid>
                    <Slider {...settings} className={classes.slider}>
                        <div><InstituteItem title='Expedição Amazônia #1' subtitle="O pulmão do mundo" link='/expedicoes/1' /></div>
                        <div><InstituteItem title='Expedição Amazônia #2' subtitle="O pulmão do mundo" link='/expedicoes/2' /></div>
                        <div><InstituteItem title='Expedição Amazônia #3' subtitle="O pulmão do mundo" link='/expedicoes/3' /></div>
                        <div><InstituteItem title='Expedição Mata Atlântica #1' subtitle="Sabedoria da floresta"  link='/expedicoes/4' /></div>
                    </Slider>

                    {
                        window.screen.width <= 900 &&
                            <Social color="rgba(255,255,255, 0.5)"
                                    facebook="https://www.facebook.com/institutovivala/"
                                    linkedin="https://pt.linkedin.com/company/vivalá"
                                    instagram="https://www.instagram.com/institutovivala/"
                                    youtube="https://www.youtube.com/channel/UCF-Lv8two48zRLLd8_DOcGA"
                            />
                    }
                </div>
            </div>
        );
    }
}

Institute.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(Institute);
