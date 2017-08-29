import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import List, { ListItem } from 'material-ui/List';
import Icon from 'material-ui/Icon';
import {Image} from 'cloudinary-react';

const styleSheet = createStyleSheet('CorporativeFeatures', theme => ({
    bg: {
        backgroundColor: '#f7f7f7'
    },
    title: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: window.screen.width < 900 ? 'center' : 'left',
        marginTop: '2rem',
    },
    subtitle: {
        textAlign: window.screen.width < 900 ? 'center' : 'left',
        margin: '0 0 2rem 0'
    },
    listItem: {
        backgroundColor: '#eceaeb',
        marginBottom: 10,
        display: 'flex'
    },
    icon: {
        fontSize: 40,
        maxWidth: '25%'
    },
    subheading: {
        marginLeft: 20,
        maxWidth: '75%'
    },
    img: {
        marginLeft: '20px',
        maxWidth: '40px',
    }
}));

class CorporativeFeatures extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.bg}>
                <div className="container padding">
                    <Typography type="headline" className={classes.title} gutterBottom>
                        Corporativo
                    </Typography>
                    <Typography type="body1" className={classes.subtitle} gutterBottom>
                        Tenha o melhor parceiro para sua empresa
                    </Typography>
                    <List>
                        <ListItem className={classes.listItem}>

                            <Image
                                cloudName="vivala"
                                publicId="check_laranja.png"
                                width={100}
                                crop="scale" alt="Ícone - Check Vivalá"
                                className={classes.img}
                            />

                            <Typography type="subheading" color="inherit" className={classes.subheading}>
                                Gestão completa de viagens para pequenas e médias empresas
                            </Typography>
                        </ListItem>
                        <ListItem className={classes.listItem}>

                            <Image
                                cloudName="vivala"
                                publicId="check_laranja.png"
                                width={100}
                                crop="scale" alt="Ícone - Check Vivalá"
                                className={classes.img}
                            />

                            <Typography type="subheading" color="inherit" className={classes.subheading}>
                                Campanhas de premiação e viagens de incentivo
                            </Typography>
                        </ListItem>
                        <ListItem className={classes.listItem}>

                            <Image
                                cloudName="vivala"
                                publicId="check_laranja.png"
                                width={100}
                                crop="scale" alt="Ícone - Check Vivalá"
                                className={classes.img}
                            />

                            <Typography type="subheading" color="inherit" className={classes.subheading}>
                                Grupos e eventos
                            </Typography>
                        </ListItem>
                    </List>
                </div>
            </div>
        );
    }
}

CorporativeFeatures.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(CorporativeFeatures);
