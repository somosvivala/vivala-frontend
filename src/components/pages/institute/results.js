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
        flex: 10
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
}));

class InstituteResults extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.bg}>
                <div className="container padding">
                    <Typography type="headline" color="accent" gutterBottom>
                        Resultados
                    </Typography>
                    <List>
                        <ListItem href="#simple-list" className={classes.listItem}>
                            <Typography className={classes.icon}>3</Typography>
                            <Typography type="subheading" color="inherit" className={classes.text}>
                                Expedições
                            </Typography>
                        </ListItem>
                        <ListItem href="#simple-list" className={classes.listItem}>
                            <Typography className={classes.icon}>15</Typography>
                            <Typography type="subheading" color="inherit" className={classes.text}>
                                Instituições sociais ajudadas em 5 estados
                            </Typography>
                        </ListItem>
                        <ListItem href="#simple-list" className={classes.listItem}>
                            <Typography className={classes.icon}>18</Typography>
                            <Typography type="subheading" color="inherit" className={classes.text}>
                                Microempreendedores capacitados
                            </Typography>
                        </ListItem>
                        <ListItem href="#simple-list" className={classes.listItem}>
                            <Typography className={classes.icon}>25</Typography>
                            <Typography type="subheading" color="inherit" className={classes.text}>
                                Transformadores de expedição
                            </Typography>
                        </ListItem>
                        <ListItem href="#simple-list" className={classes.listItem}>
                            <Typography className={classes.icon}>500</Typography>
                            <Typography type="subheading" color="inherit" className={classes.text}>
                                Inscrições voluntárias
                            </Typography>
                        </ListItem>
                        <ListItem href="#simple-list" className={classes.listItem}>
                            <Typography className={classes.icon}>RIO</Typography>
                            <Typography type="subheading" color="inherit" className={classes.text}>
                                Único parceiro global na capacitação de voluntários para os jogos RIO 2016
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