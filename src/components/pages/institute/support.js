import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import {Link} from 'react-router-dom';
import {Image} from 'cloudinary-react';

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
                            Seja um doador
                        </Typography>
                        <Image
                            cloudName="vivala"
                            publicId="instututo_apoio.png"
                            width={window.screen.width > 800 ? 700 : 400}
                            height={window.screen.width > 800 ? 300 : 200}
                            crop="scale" alt="Apoio Financeiro"
                            className={classes.img}
                        />
                        <Typography type="subheading" color="inherit" className={classes.body} paragraph>
                            Ajude a expandir o trabalho do Instituto contribuindo mensalmente com a quantia que desejar.
                            <br/>
                            <Link to="https://doare.org/br/doacao/1792/instituto-vivala" rel="noopener noreferrer" target="_blank" className={classes.bolder}>CLIQUE AQUI</Link> e saiba mais.
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
