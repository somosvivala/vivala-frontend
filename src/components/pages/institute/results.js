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
        fontWeight: 'bold',
        backgroundColor: theme.institute.color,
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
            <div className={classes.bg}>
                <div className="container padding">
                    <Typography type="headline" color="accent" className={classes.title} gutterBottom>
                        Resultados
                    </Typography>
                    <List>
                        <ListItem className={classes.listItem}>
                            <Typography className={classes.icon}>+2</Typography>
                            <Typography type="subheading" color="inherit" className={classes.text}>
                                Expedições
                            </Typography>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <Typography className={classes.icon}>+40</Typography>
                            <Typography type="subheading" color="inherit" className={classes.text}>
                                Microempreendedores capacitados
                            </Typography>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <Typography className={classes.icon}>+50</Typography>
                            <Typography type="subheading" color="inherit" className={classes.text}>
                                Voluntários (Transformadores)
                            </Typography>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <Typography className={classes.icon}>+R$ 40.000</Typography>
                            <Typography type="subheading" color="inherit" className={classes.text}>
                                Injetados na economia local
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
