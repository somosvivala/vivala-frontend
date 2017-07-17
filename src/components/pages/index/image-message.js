import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('ImageMessage', theme => ({
    gridContainer: {
        margin: 0,
        height: 400,
        maxWidth: '100%'
    },
    gridItem: {
        right: 20,
        padding: '0 !important',
        position: 'absolute',
    }
}));

class ImageMessage extends Component
{
    render() {
        const { classes, text } = this.props;
        const imgSrc = `http://via.placeholder.com/${window.screen.width < 800 ? window.screen.width : 800 }x400`;

        return (
            <div className="container">
                <Grid container align="center" className={classes.gridContainer}>
                    <img src={imgSrc} alt="Conheça seu mundo" className={classes.img} />
                    <Grid item xs={6}  className={classes.gridItem}>
                        <Typography type="body1">{text}</Typography>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

ImageMessage.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired
};

export default withStyles(styleSheet)(ImageMessage);
