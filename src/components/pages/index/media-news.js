import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import {Image} from 'cloudinary-react';

const styleSheet = createStyleSheet('MediaNews', theme => ({
    bg: {
        backgroundColor: '#e1e1e1'
    },
    item: {
        margin: '0px auto',
        textAlign: 'center'
    },
    slider: {
        width: '90%',
        margin: '20px auto'
    },
    text: {
        margin: '0 0 20px 20px',
    },
    img: {
        padding: 10
    }
}));

class MediaNews extends Component {
    render() {
        const { classes, items, text } = this.props;
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 480, settings: { slidesToShow: 2 } },
                { breakpoint: 800, settings: { slidesToShow: 4 } }
            ]
        }
        return (
            <div className={classes.bg}>
                <div className="container padding">
                    <Typography type="subheading" gutterBottom className={classes.text}>{text}</Typography>
                    <Slider {...settings} className={classes.slider}>
                        <div className={classes.item}>
                            <Image
                                cloudName="vivala"
                                publicId="logo_catracalivre.png"
                                width={200}
                                height={100}
                                alt="Conheça seu mundo"
                                className={classes.img}
                            />
                        </div>
                        <div className={classes.item}>
                            <img src="http://via.placeholder.com/120x100" className={classes.img} />
                        </div>
                        <div className={classes.item}>
                            <img src="http://via.placeholder.com/120x100" className={classes.img} />
                        </div>
                        <div className={classes.item}>
                            <img src="http://via.placeholder.com/120x100" className={classes.img} />
                        </div>
                        <div className={classes.item}>
                            <img src="http://via.placeholder.com/120x100" className={classes.img} />
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}

MediaNews.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    items: PropTypes.object,
};

export default withStyles(styleSheet)(MediaNews);
