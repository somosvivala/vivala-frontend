import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import {Image} from 'cloudinary-react';

const styleSheet = createStyleSheet('ImageMessage', theme => ({
    gridContainerBack: {
        backgroundColor: '#F7F7F7',
        width: '100%',
    },
    gridContainer: {
        margin: 0,
        maxWidth: '100%'
    },
    gridItem: {
        right: 20,
        padding: '0 !important',
        position: 'absolute',
        fontSize: '20px !important',
        maxWidth: window.screen.width < 900 ? '160px' : 'default',
    },
    massageImage: {
        marginLeft: window.screen.width < 900 ? '-40px' : 'default',
    }
}));

class ImageMessage extends Component
{
    render() {
        const { classes, text } = this.props;
        return (
            <div className={classes.gridContainerBack}>
            <div className="container">
                <Grid container align="center" className={classes.gridContainer}>
                    <Image
                        cloudName="vivala"
                        publicId="home_2.png"
                        width={window.screen.width > 800 ? 700 : 320}
                        //height={window.screen.width > 800 ? 500 : 250}
                        crop="scale" alt="Transforme sua vida"
                        className={classes.massageImage}
                    />
                    <Grid item xs={4}  className={classes.gridItem}>
                        <Typography type="subheading" color="inherit">{text}</Typography>
                    </Grid>
                </Grid>
            </div>
            </div>
        );
    }
}

ImageMessage.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired
};

export default withStyles(styleSheet)(ImageMessage);
