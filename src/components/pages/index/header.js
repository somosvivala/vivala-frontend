import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import {Image} from 'cloudinary-react';
import {Link} from 'react-router-dom';

const styleSheet = createStyleSheet('IndexHeader', theme => ({
    gridContainerBack: {
        backgroundColor: '#F7F7F7',
        width: '100%',
        paddingBottom: '25px',
    }, 
    gridContainer: {
        //marginBottom: 20,
        //padding: '0 20px',
    },
    headerBox: {
        position: window.screen.width > 900 ? 'absolute' : 'relative',
        textAlign: window.screen.width < 900 ? 'center' : 'left',
    },
    headerHeadline: {
        fontSize: window.screen.width < 900 ? '32px' : 'default',
    },
    headerText: {
        marginBottom: 25,
        width: window.screen.width < 900 ? '300px' : 'default',
        marginLeft:  window.screen.width < 900 ? 'auto' : 'default',
        marginRight:  window.screen.width < 900 ? 'auto' : 'default',
        textAlign: 'left',
    },
    addMargin: {
        marginLeft: window.screen.width > 900 ? 250 : 'auto',
        marginRight: window.screen.width > 900 ? 0 : 'auto',
    }
}));

class IndexHeader extends Component {
   render() {
        const { classes, title, text, button } = this.props;

        return (
            <Grid gutter={0} container>
                <div className={classes.gridContainerBack}>
                <div className="container">
                    <Grid gutter={0} container align="center" className={classes.gridContainer}>
                        <Image
                            cloudName="vivala"
                            publicId="home_1.png"
                            width={window.screen.width > 900 ? 800 : 320}
                            crop="scale" alt="Conheça seu mundo"
                            className={classes.addMargin}
                        />
                        <Grid container gutter={0} item xs={12} sm={4} className={classes.headerBox}>
                            <Grid item xs={12}><Typography type="headline" gutterBottom className={classes.headerHeadline}>{title}</Typography></Grid>
                            <Grid item xs={12}><Typography type="body1" gutterBottom className={classes.headerText}>{text}</Typography></Grid>
                            <Grid item xs={12}>
                                <Button raised color="primary">
                                    <Link to="/cotacao"><b>{button}</b></Link>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
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