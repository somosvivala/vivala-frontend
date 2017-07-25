import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import List, { ListItem } from 'material-ui/List';

const styleSheet = createStyleSheet('AgentsFeatures', theme => ({
    bg: {
        backgroundColor: theme.default.color
    },
    title: {
        textTransform: 'uppercase'
    },
    listItem: {
        backgroundColor: theme.defaultDarken.color,
        marginBottom: 10,
    },
    img: {
        marginRight: 20,
        width: 70,
        height: 50,
    },
}));

class AgentsFeatures extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.bg}>
                <div className="container padding">
                    <Typography type="headline" className={classes.title} gutterBottom>
                        Seja um agente
                    </Typography>
                    <List>
                        <ListItem button component="a" href="#simple-list" className={classes.listItem}>
                            <img src={""} className={classes.img} />
                            <div>
                                <Typography type="subheading">
                                    Sem investimento inicial
                                </Typography>
                                <Typography type="body1">
                                    Junte-se ao nosso time de agentes já presente em 11 estados brasileiros
                                </Typography>
                            </div>
                        </ListItem>
                        <ListItem button component="a" href="#simple-list" className={classes.listItem}>
                            <img src={""} className={classes.img} />
                            <div>
                                <Typography type="subheading">
                                    Trabalhe quando e onde quiser
                                </Typography>
                                <Typography type="body1">
                                    Basta ter um computador e muita vontade de crescer
                                </Typography>
                            </div>
                        </ListItem>
                        <ListItem button component="a" href="#simple-list" className={classes.listItem}>
                            <img src={""} className={classes.img} />
                            <div>
                                <Typography type="subheading">
                                    Ganhe dinheiro
                                </Typography>
                                <Typography type="body1">
                                    Quer trabalhar só com turismo ou fazer renda extra? Ganhe até R$ 1.000,00 por semana
                                </Typography>
                            </div>
                        </ListItem>
                    </List>
                </div>
            </div>
        );
    }
}

AgentsFeatures.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(AgentsFeatures);