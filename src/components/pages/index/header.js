import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import PrimaryButton from '../../buttons/primary';
import PropTypes from 'prop-types';
import {Image} from 'cloudinary-react';

const styleSheet = createStyleSheet('IndexHeader', theme => ({
    gridContainer: {
        margin: 0,
        maxWidth: '100%'
    },
    gridItem: {
        left: 20,
        right: 20,
        padding: '0 !important',
        position: 'absolute',
    },
    margin: {
        marginBottom: 25,
    }
}));

class IndexHeader extends Component {
   render() {
        const { classes, title, text, button } = this.props;

        return (
            <div className="container">
                <Grid container align="center" className={classes.gridContainer}>
                    <Image
                        cloudName="vivala"
                        publicId="home_1.png"
                        width={window.screen.width < 800 ? window.screen.width : 800}
                        height={window.screen.width < 800 ? 300 : 400}
                        crop="scale" alt="Conheça seu mundo"
                    />
                    <Grid item xs={12} sm={5} className={classes.gridItem}>
                        <Typography type="headline" gutterBottom>{title}</Typography>
                        <Typography type="body1" gutterBottom className={classes.margin}>{text}</Typography>
                        <PrimaryButton text={button} />
                    </Grid>
                </Grid>
            </div>
        );
    }
}
IndexHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
}

export default withStyles(styleSheet)(IndexHeader);