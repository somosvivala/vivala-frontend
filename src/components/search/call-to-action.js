import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';
import PropTypes from 'prop-types';
import Social from '../social';

const styleSheet = createStyleSheet('SearchCallToAction', theme => ({
    container: {
        height: window.screen.width < 900 ? '180px' : '150px'
    },
    containerBotaoSearch: {
        height: window.screen.width < 900 ? '120px' : '100px'
    },
    bg: {
        backgroundColor: '#DCDCDC',
    },
    applyPadding: {
        padding: window.screen.width < 900 ? '0 20px' : '0'
    },
    text: {
        fontWeight: 'bold',
        fontSize: '18px',
        textAlign: window.screen.width < 900 ? "center" : "left"
    },
    textoSegundaSecaoHome: {
        fontWeight: 'bold',
        fontSize: '18px',
        textAlign: window.screen.width < 900 ? "center" : "left",
        marginBottom: window.screen.width < 900 ? "0" : "11%"
    },
    button: {
        boxShadow: 'inset 2px 2px 4px 1px rgba(0,0,0,0.3)',
        borderRadius: 5,
        fontWeight: 400,

    }
}));

class SearchCallToAction extends Component {
    render() {
        const { classes, click, translations } = this.props;

        return (
            <div className={classes.bg}>
                <div className={`container ${classes.applyPadding}`}>
                    <Grid container gutter={0} align="center" justify="space-between" className={classes.container}>
                        <Grid gutter={0} container item xs={12} sm={6} justify="flex-start">
                            <Typography type="subheading" className={classes.textoSegundaSecaoHome}>
                                {translations.text}
                            </Typography>
                        </Grid>
                        <Grid gutter={24} container item xs={12} sm={6} justify="center" align="center" className={classes.containerBotaoSearch}>
                            <Button raised color="contrast" onClick={click} className={classes.button}>
                                <Icon color="contrast">search</Icon> {translations.button}
                            </Button>
                            <Social color="#aaa"
                                    facebook="https://www.facebook.com/SomosVivala/"
                                    linkedin="https://pt.linkedin.com/company/vivalá"
                                    instagram="https://www.instagram.com/somosvivala/"
                                    youtube="https://www.youtube.com/channel/UCT8bbWeVmbaDDMxvWlI8bBA"
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

SearchCallToAction.propTypes = {
    classes: PropTypes.object.isRequired,
    translations: PropTypes.object.isRequired,
    click: PropTypes.func.isRequired,
}

export default withStyles(styleSheet)(SearchCallToAction);
