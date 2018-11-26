import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import {Link} from 'react-router-dom';
import Youtube from 'react-youtube';

const styleSheet = createStyleSheet('InstituteSupport', theme => ({
    bg: {
        backgroundColor: theme.institute.color,
        textAlign: 'center'
    },
    bg2: {
        backgroundColor: theme.default.color,
        textAlign: 'center'
    },
    title: {
        textTransform: 'uppercase',
        color: 'white !important',
    },
    body: {
        color: 'white !important'
    },
    contact: {
        fontWeight: 'bold'
    },
    title2: {
        textTransform: 'uppercase',
    },
    img: {
        marginBottom: 10,
        maxWidth: '100%',
        objectFit: 'cover'
    },
    bolder: {
        fontWeight: 'bolder'
    }
}));

class InstituteSupport extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <div className={classes.bg}>
                    <div className="container padding-2x">
                        <Typography type="title" color="inherit" className={classes.title} paragraph>
                            Seja um associado
                        </Typography>
                        <Youtube videoId="CPxNSZNqYTE" opts={{ width: window.screen.width < 900 ? '100%' : '60%' }}/>
                        <Typography type="subheading" color="inherit" className={classes.body} paragraph>
                            <a href="https://paybox.doare.org/br/paybox?lang=br&amount=50&currency=BRL&values=30,50,150,300,500&orgId=a66bd958-8227-11e7-a51d-f23c913baafa&subscribe=&subscriptionAmount=50&showSubscription=1" rel="noopener noreferrer" target="_blank" className={classes.bolder}>Clique aqui e escolha a quantia que deseja contribuir mensalmente</a>
                        </Typography>
                    </div>
                </div>
                <div className={classes.bg2}>
                    <div className="container padding-2x">
                        <Typography type="title" color="accent" paragraph className={classes.title2}>
                            Apoio Com Outros Recursos
                        </Typography>
                        <Typography type="subheading" color="inherit">
                            Se você acredita que pode ajudar o Instituto com outros recursos que não financeiros, entre em <Link to="/contato" className={classes.contact}>contato</Link>.
                        </Typography>
                    </div>
                </div>
            </div>
        );
    }
}

InstituteSupport.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(InstituteSupport);
