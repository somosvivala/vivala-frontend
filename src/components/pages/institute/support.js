import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import {Link} from 'react-router-dom';
import {Image} from 'cloudinary-react';

const styleSheet = createStyleSheet('InstituteSupport', theme => ({
    bg: {
        backgroundColor: theme.institute.color,
        textAlign: window.screen.width < 800 ? 'center' : 'left'
    },
    bg2: {
        backgroundColor: theme.default.color,
        textAlign: window.screen.width < 800 ? 'center' : 'left'
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
    }
}));

class InstituteSupport extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <div className={classes.bg}>
                    <div className="container padding">
                        <Typography type="subheading" color="inherit" className={classes.title} paragraph>
                            Seja um doador
                        </Typography>
                        <Image
                            cloudName="vivala"
                            publicId="instututo_apoio.png"
                            width={window.screen.width > 800 ? 800 : 400}
                            height={window.screen.width > 800 ? 400 : 250}
                            crop="scale" alt="Apoio Financeiro"
                        />
                        <Typography type="body1" color="inherit" className={classes.body} paragraph>
                            Seja um dos nosso patrocinadores.
                        </Typography>
                    </div>
                </div>
                <div className={classes.bg2}>
                    <div className="container padding">
                        <Typography type="subheading" color="accent" paragraph className={classes.title2}>
                            Apoio Com Recursos
                        </Typography>
                        <Typography type="body1">
                            Se você acredita que pode ajudar o instituto, entre em <Link to="/contato" className={classes.contact}>contato</Link>
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