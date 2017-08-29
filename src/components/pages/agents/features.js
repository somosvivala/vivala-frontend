import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import List, { ListItem } from 'material-ui/List';
import {Image} from 'cloudinary-react';

const styleSheet = createStyleSheet('AgentsFeatures', theme => ({
    bg: {
        backgroundColor: '#f7f7f7'
    },
    title: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: window.screen.width < 900 ? 'center' : 'left',
        marginTop: '2rem'
    },
    listItem: {
        backgroundColor: '#eceaeb',
        marginBottom: 10,
    },
    img: {
        marginRight: 20,    
        maxWidth: 40
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
                        <ListItem href="#simple-list" className={classes.listItem}>
                            <Image
                                cloudName="vivala"
                                publicId="check_laranja.png"
                                width={100}
                                crop="scale" alt="Ícone - Check Vivalá"
                                className={classes.img}
                            />
                            <div>
                                <Typography type="subheading">
                                    <strong>Sem investimento inicial</strong>
                                </Typography>
                                <Typography type="body1">
                                    Junte-se ao nosso time de agentes já presente em 11 estados brasileiros
                                </Typography>
                            </div>
                        </ListItem>
                        <ListItem href="#simple-list" className={classes.listItem}>
                            <Image
                                cloudName="vivala"
                                publicId="check_laranja.png"
                                width={100}
                                crop="scale" alt="Ícone - Check Vivalá"
                                className={classes.img}
                            />
                            <div>
                                <Typography type="subheading">
                                    <strong>Trabalhe quando e onde quiser</strong>
                                </Typography>
                                <Typography type="body1">
                                    Basta ter um computador e muita vontade de crescer
                                </Typography>
                            </div>
                        </ListItem>
                        <ListItem href="#simple-list" className={classes.listItem}>
                            <Image
                                cloudName="vivala"
                                publicId="check_laranja.png"
                                width={100}
                                crop="scale" alt="Ícone - Check Vivalá"
                                className={classes.img}
                            />
                            <div>
                                <Typography type="subheading">
                                    <strong>Ganhe dinheiro</strong>
                                </Typography>
                                <Typography type="body1">
                                    Quer trabalhar só com turismo ou fazer renda extra?
                                    Ganhe até R$ 1.000,00 por semana
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
