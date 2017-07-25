import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import {Link} from 'react-router-dom';

const styleSheet = createStyleSheet('InstituteAbout', theme => ({
    bg: {
        backgroundColor: theme.default.color,
        textAlign: window.screen.width < 800 ? 'center' : 'left'
    },
    title: {
        textTransform: 'uppercase'
    },
    item: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        position: 'absolute',
        textAlign: 'center'
    },
    text2: {
        position: 'absolute',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: 'white !important'
    },
    button: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white !important',
        marginBottom: 30
    },
}));

class InstituteAbout extends Component {
    render() {
        const { classes } = this.props;
        const imgSrc = `http://via.placeholder.com/${window.screen.width < 800 ? window.screen.width : 800 }x400`;

        return (
            <div>
                <div className={classes.bg}>
                    <div className="container padding">
                        <Typography type="headline" color="accent" className={classes.title}>
                            Sobre o Instituto
                        </Typography>
                    </div>
                </div>

                <div className="container">
                    <div className={classes.item}>
                        <div className={classes.text}>
                            <Typography type="subheading" color="inherit" className={classes.title}>
                                Melhore o seu Mundo
                            </Typography>
                            <Typography type="body1">
                                Projetos de capacitação profissional com microempreendedores
                            </Typography>
                        </div>
                        <img src={imgSrc} alt="Sobre o instituto" />
                    </div>
                </div>

                <div className={classes.bg}>
                    <div className="container padding">
                        <Typography type="headline" color="accent" className={classes.title} gutterBottom>
                            Seja a Mudança
                        </Typography>
                        <Typography type="body1" paraghraph>
                            Para cada compra realizada no site, 5% do lucro é destinado
                            a ações de sustentabilidade e capacitação profissional
                        </Typography>
                        <br/>
                        <Link className={classes.button} to="/expedicoes">
                            <img src={imgSrc} alt="Expedições" />
                            <Typography type="subheading" color="inherit" className={classes.text2}>
                                Expedições
                            </Typography>
                        </Link>
                        <Link className={classes.button} to="/instituto">
                            <img src={imgSrc} alt="Instituto Sustentável" />
                            <Typography type="subheading" color="inherit" className={classes.text2}>
                                Instituto Sustentável
                            </Typography>
                        </Link>
                        <Link className={classes.button} to="/instituto/resultados">
                            <img src={imgSrc} alt="Resultados" />
                            <Typography type="subheading" color="inherit" className={classes.text2}>
                                Resultados
                            </Typography>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

InstituteAbout.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(InstituteAbout);