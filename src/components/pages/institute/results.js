import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import List, { ListItem } from 'material-ui/List';

const styleSheet = createStyleSheet('InstituteResults', theme => ({
    bg: {
        backgroundColor: theme.default.color,
        textAlign: window.screen.width < 800 ? 'center' : 'left'
    },
    listItem: {
        backgroundColor: theme.defaultDarken.color,
        marginBottom: 10,
    },
    text: {
        maxWidth: '100%',
        flex: 5
    },
    icon: {
        textAlign: window.screen.width < 800 ? 'center' : 'left',
        fontWeight: 'bold',
        backgroundColor: "#ED6D2C",
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        fontSize: 20,
        marginRight: 20,
        flex: 1
    },
    title: {
        textTransform: 'uppercase',
        textAlign: window.screen.width < 900 ? 'center' : 'left',
        fontWeight: 700,
        marginTop: '2rem'
    }
}));

class InstituteResults extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="content-wrapper">
                <div className="container padding">
                    <Typography type="headline" color="#ED6D2C" className={classes.title} gutterBottom>
                        Resultados
                    </Typography>
                    <List>
                        <ListItem className={classes.listItem}>
                            <Typography className={classes.icon}>+4 mil</Typography>
                            <Typography type="subheading" color="inherit" className={classes.text}>
                                horas de voluntariado
                            </Typography>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <Typography className={classes.icon}>+450 mil</Typography>
                            <Typography type="subheading" color="inherit" className={classes.text}>
                                reais injetados nas economias locais
                            </Typography>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <Typography className={classes.icon}>+500</Typography>
                            <Typography type="subheading" color="inherit" className={classes.text}>
                                voluntárixs
                            </Typography>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <Typography className={classes.icon}>+150</Typography>
                            <Typography type="subheading" color="inherit" className={classes.text}>
                               micronegócios em nosso programa de capacitação profissional
                            </Typography>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <Typography className={classes.icon}>+40</Typography>
                            <Typography type="subheading" color="inherit" className={classes.text}>
                                expedições pelo país
                            </Typography>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <Typography className={classes.icon}>+6</Typography>
                            <Typography type="subheading" color="inherit" className={classes.text}>
                                comunidades brasileiras
                            </Typography>
                        </ListItem>
                    </List>
                </div>
            </div>
        );
    }
}

InstituteResults.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(InstituteResults);
