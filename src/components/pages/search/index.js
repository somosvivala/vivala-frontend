import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import List, { ListItem } from 'material-ui/List';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom';

const styleSheet = createStyleSheet('SearchPageIndex', theme => ({
    bg: {
        backgroundColor: theme.default.color,
        textAlign: window.screen.width < 900 ? 'center' : 'left'
    },
    bg2: {
        backgroundColor: theme.defaultDarken.color,
        textAlign: window.screen.width < 900 ? 'center' : 'left'
    },
    circle: {
        backgroundColor: theme.vivala.color,
        height: 25,
        padding: '10px 5px',
        width: 50,
        borderRadius: '50%',
        fontSize: 20,
        color: 'white !important',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        marginLeft: 20,
        maxWidth: window.screen.width < 480 ? 150 : '100%',
        textAlign: 'left'
    },
}));

class SearchPageIndex extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className={classes.bg}>
                    <div className="container padding">
                        <Typography type="headline">Busque sua viagem</Typography>
                        <Typography type="body1">
                            Encontre pacotes completos, hospedagens, voos, ônibus
                            e experiências de mais de 500.000 fornecedores em poucos cliques
                        </Typography>
                    </div>
                </div>

                <div className={classes.bg2}>
                    <div className="container padding">
                        <Typography type="title">Como funciona</Typography>
                        <List>
                            <ListItem button className={classes.listItem}>
                                <Typography className={classes.circle} type="title" color="inherit" component="span"><strong>1</strong></Typography>
                                <div className={classes.text}>
                                    <Typography type="subheading" color="inherit">
                                        Busque no site
                                    </Typography>
                                </div>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <Typography type="title" color="inherit" component="span" className={classes.circle}><strong>2</strong></Typography>
                                <div className={classes.text}>
                                    <Typography type="subheading" color="inherit">
                                        Compare as melhores companhias e preços do mercado
                                    </Typography>
                                </div>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <Typography className={classes.circle} type="title" color="inherit" component="span"><strong>3</strong></Typography>
                                <div className={classes.text}>
                                    <Typography type="subheading" color="inherit">
                                        Escolha a melhor opção
                                    </Typography>
                                </div>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <Typography className={classes.circle} type="title" color="inherit" component="span"><strong>4</strong></Typography>
                                <div className={classes.text}>
                                    <Typography type="subheading" color="inherit">
                                        Selecione como e em quantas vezes irá pagar
                                    </Typography>
                                </div>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <Typography className={classes.circle} type="title" color="inherit" component="span"><strong>5</strong></Typography>
                                <div className={classes.text}>
                                    <Typography type="subheading" color="inherit">
                                        Pronto! Receba os voucher em seu e-mail
                                    </Typography>
                                </div>
                            </ListItem>
                        </List>
                        <Button raised color="primary" style={{ width: window.screen.width < 900 ? '100%' : 'auto' }}>
                            <Link to="/busca">
                                Vamos às buscas
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className={classes.bg}>
                    <div className="container padding">
                        <Typography type="subheading" color="inherit" paragraph>
                            Ou se preferir, seja atendido de forma ágil, humanizada e gratuita
                        </Typography>
                        <Button raised color="primary" style={{ width: window.screen.width < 900 ? '100%' : 'auto' }}>
                            <Link to="/cotacao">
                                Receba sua cotação em até 24 horas
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

SearchPageIndex.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(SearchPageIndex);