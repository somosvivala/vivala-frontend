import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import {Image} from 'cloudinary-react';
import {Link} from 'react-router-dom';

const styleSheet = createStyleSheet('IndexHeader', theme => ({
    gridContainer: {
        marginBottom: 20,
        padding: '0 20px'
    },
    gridItem: {
        position: window.screen.width > 900 ? 'absolute' : 'relative',
        textAlign: window.screen.width < 900 ? 'center' : 'left'
    },
    margin: {
        marginBottom: 25,
    },
    addMargin: {
        marginLeft: window.screen.width > 900 ? 250 : 0
    }
}));

class IndexHeader extends Component {
   render() {
        const { classes, title, text, button } = this.props;

        return (
            <Grid gutter={0} container>
                <div className="container">
                    <Grid gutter={0} container align="center" className={classes.gridContainer}>
                        <Image
                            cloudName="vivala"
                            publicId="home_1.png"
                            width={window.screen.width > 800 ? 800 : 400}
                            height={window.screen.width > 800 ? 400 : 250}
                            crop="scale" alt="Conheça seu mundo"
                            className={classes.addMargin}
                        />
                        <Grid container gutter={0} item xs={12} sm={4} className={classes.gridItem}>
                            <Grid item xs={12}><Typography type="headline" gutterBottom>{title}</Typography></Grid>
                            <Grid item xs={12}><Typography type="body1" gutterBottom className={classes.margin}>{text}</Typography></Grid>
                            <Grid item xs={12}>
                                <Button raised color="primary">
                                    <Link to="/cotacao">{button}</Link>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
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