import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom';
import {Image} from 'cloudinary-react';

const styleSheet = createStyleSheet('ExpeditionsListItem', theme => ({
    padding: {
        padding: 30
    },
    default: {
        color: theme.default.color
    },
    inherit: {
        color: 'inherit'
    },
    img: {
        maxWidth: window.screen.width >  800 ? '100%' : '95%',
        textAlign: 'center',
        objectFit: 'contain',
        margin:  window.screen.width >  800 ? 'auto 0 auto 1.6rem' : 'auto',
        borderRadius: '2px'
    },
    textoDescricao: {
        fontSize: '1.2rem',
        marginBottom: '2rem',
        marginLeft: window.screen.width >  800 ? '1rem' : '0',
        maxWidth: '90%'
    },
    subheading: {
        fontWeight: '600',
        lineHeight: '0.1rem',
        marginLeft: window.screen.width >  800 ? '1rem' : '0',
    },
    ancoraBotao: {
        marginLeft: window.screen.width >  800 ? '1rem' : '0',
    },
}));

class ExpeditionsListItem extends Component {
    render() {
        const { classes, expedition, color } = this.props;
        const align = window.screen.width > 800 ? 'flex-start' : 'center';
        const url = `expedicoes/${expedition.id}`;

        return (
            <Grid container gutter={16} justify="center" >
                <Grid gutter={0} container item xs={12} sm={6} align={align}>
                    <Link to={url}>
                        <Image
                            cloudName="vivala"
                            publicId={expedition.foto}
                            width={window.screen.width > 900 ? 400 : 300}
                            height={window.screen.width > 900 ? 300 : 200}
                            crop="scale" alt={`${expedition.titulo}`}
                            className={classes.img}
                        />
                    </Link>
                </Grid>
                <Grid gutter={0} container item xs={12} sm={6} className={`${classes[color]}`} align={align} justify="center" direction="column">
                    <Typography type="title" color="inherit" className={classes.subheading} paragraph>
                        {expedition.titulo}
                    </Typography>
                    <Typography color="inherit" className={classes.textoDescricao} paragraph>
                        {expedition.descricao}
                    </Typography>
                    <Link to={url} className={classes.ancoraBotao}>
                        <Button raised color="contrast" >
                            Saiba mais
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        );
    }
}

ExpeditionsListItem.propTypes = {
    classes: PropTypes.object.isRequired,
    expedition: PropTypes.shape({
        id: PropTypes.number,
        titulo: PropTypes.string,
        descricao: PropTypes.string,
        foto: PropTypes.string
    }).isRequired,
    color: PropTypes.string.isRequired,
};

export default withStyles(styleSheet)(ExpeditionsListItem);
