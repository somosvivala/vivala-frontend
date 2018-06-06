import React, { Component } from 'react';
import {Helmet} from "react-helmet";
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
            <div className="content-wrapper">
                <Helmet>
                    <title>Resultados | Instituto Vivalá</title>
                    <meta name="theme-color" content="#09A2A1" />
                    <meta name="description" content="Projetos de Capacitação Profissional e Investimentos para Microempreendedores Mentorados." />

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
                <div className="container padding">
                    <Typography type="headline" color="accent" className={classes.title} gutterBottom>
                        Resultados
                    </Typography>
                    <List>
                        <ListItem className={classes.listItem}>
                            <Typography className={classes.icon}>+11</Typography>
                            <Typography type="subheading" color="inherit" className={classes.text}>
                                Expedições
                            </Typography>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <Typography className={classes.icon}>+4</Typography>
                            <Typography type="subheading" color="inherit" className={classes.text}>
                                Regiões
                            </Typography>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <Typography className={classes.icon}>+100</Typography>
                            <Typography type="subheading" color="inherit" className={classes.text}>
                                Microempreendedores assistidos
                            </Typography>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <Typography className={classes.icon}>+200</Typography>
                            <Typography type="subheading" color="inherit" className={classes.text}>
                                Voluntários
                            </Typography>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <Typography className={classes.icon}>+R$ 150.000</Typography>
                            <Typography type="subheading" color="inherit" className={classes.text}>
                                Injetados nas economias locais
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
