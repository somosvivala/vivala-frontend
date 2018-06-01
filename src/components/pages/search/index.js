import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import List, { ListItem } from 'material-ui/List';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom';
import SearchButton from '../../search/button';

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
        padding: '6px 10px',
        borderRadius: '50%',
        fontSize: 20,
        color: 'white !important',
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        marginLeft: 20,
        maxWidth: window.screen.width < 480 ? '75%' : '100%',
        textAlign: 'left'
    },
    button: {
        width: window.screen.width < 900 ? '100%' : 'auto',
        minWidth: 220,
        fontWeight: 'bold'
    },
    title: {
        textTransform: 'uppercase',
        textAlign: 'left',
        padding: '1rem'
    },
    titulo: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: window.screen.width < 900 ? 'center' : 'left',
        marginTop: '2rem'
    },
    subtitulo: {
        textAlign: window.screen.width < 900 ? 'center' : 'left',
        maxWidth: window.screen.width < 900 ? '100%' : '75%'

    },
    alignCenter: {
        textAlign: 'center'
    }
}));

class SearchPageIndex extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="content-wrapper">
                <Helmet>
                    <title>Busque Sua Viagem</title>
                    <meta name="theme-color" content="#ED6D2C" />
                    <meta name="description" content="Encontre Pacotes Completos, Hospedagens, Voos, Carros, Seguro Viagem, Passeios e Transfers de mais de 500.000 Fornecedores em Poucos Cliques." />

                    <meta property="og:locale" content="pt_BR" />
                    <meta property="og:url" content={this.props.location.pathname} />
                    <meta property="og:title" content="Vivalá - Operadora de Volunturismo e Ecoturismo no Brasil e Agência Global de Viagens" />
                    <meta property="og:site_name" content="Vivalá" />
                    <meta property="og:description" content="Viaje pelo Brasil com roteiros de Turismo e Voluntariado, Experiências de Conexão com a Natureza e Lugares Incríveis para ir quando quiser." />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="https://res.cloudinary.com/vivala/image/upload/imagem_home_1524934756" />
                    <meta property="og:image:type" content="image/jpg" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                </Helmet>
                <div className={classes.bg}>
                    <div className="container padding">
                        <Typography type="headline" className={classes.titulo} gutterBottom>Busque sua viagem</Typography>
                        <Typography type="body1" className={classes.subtitulo}>
                            Encontre pacotes completos, hospedagens, voos, ônibus
                            e experiências de mais de 500.000 fornecedores em poucos cliques
                        </Typography>
                    </div>
                </div>

                <div className={classes.bg2 + ' busque-sozinho'}>
                    <div className="container padding">
                        <Typography type="title" gutterBottom className={classes.title}>Como funciona</Typography>
                        <List>
                            <ListItem className={classes.listItem}>
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
                        <div className={classes.alignCenter}>
                            <Button raised color="primary" className={classes.button}>
                                <Link to="/busca">
                                    Vamos às buscas
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <SearchButton darkBg="true" />
            </div>
        );
    }
}

SearchPageIndex.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(SearchPageIndex);
