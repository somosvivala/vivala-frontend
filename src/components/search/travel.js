import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import List, { ListItem } from 'material-ui/List';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import PacotesCompletosSvg from '../../assets/svg/icons/pacotes.svg';
import HoteisSvg from '../../assets/svg/icons/hoteis.svg';
import VoosSvg from '../../assets/svg/icons/voos.svg';
import ExperienciasSvg from '../../assets/svg/icons/experiencia.svg';
import {Link} from 'react-router-dom';

const styleSheet = createStyleSheet('SearchTravel', theme => ({
    bg: {
        backgroundColor: theme.vivala.color
    },
    subheading: {
        color: 'white !important',
        paddingLeft: 20,
        fontWeight: 'bold'
    },
    click: {
        cursor: 'pointer',
        textAlign: 'right',
        color: 'white !important'
    },
    list: {
        //padding: 20,
    },
    listItem: {
        backgroundColor: '#FF7D39 !important',
        marginBottom: 10,        
        boxSizing: 'border-box'
    },
    text: {
        color: 'white !important',
    },
    img: {
        marginRight: 20,
        width: 70,
        height: 50,
    },
    bordered: {
        border: '2px solid white',
        color: 'white',
        fontWeight: 200,
        padding: 20,
        //margin: 20,
        margin: window.screen.width < 900 ? '0px' : '10px',
        width: '100%',
        backgroundColor: '#FF7D39 !important',
        boxSizing: 'border-box'
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    applyPadding: {
        paddingRight: 20
    },
    colorWhite: {
        color: 'white',
    },
    bold: {
        fontWeight: 'bold'
    }
}));


class SearchTravel extends Component {
    render() {
        const {classes, click, translations} = this.props;

        return (
            <div className={classes.bg}>
                <div className="container padding">
                    <Grid gutter={0} container>
                        <Grid xs={10} item >
                            <Typography type="subheading" className={classes.subheading}>
                                {translations.text}
                            </Typography>
                        </Grid>
                        <Grid xs={2} item className={classes.applyPadding}>
                            <div onClick={click} className={classes.click}><Icon>keyboard_arrow_up</Icon></div>
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <List className={classes.list}>
                                <ListItem button component="a" rel="noopener noreferrer" target="_blank" href="https://www.e-agencias.com.br/vivala/home/packages" className={classes.listItem}>
                                    <img src={PacotesCompletosSvg} className={classes.img} alt="Pacotes Completos Icone"/>
                                    <Typography type="subheading" color="inherit" className={classes.text}>{translations.boxLeft[0].text}</Typography>
                                </ListItem>
                                <ListItem button component="a" rel="noopener noreferrer" target="_blank" href="https://www.e-agencias.com.br/vivala/home/hotels" className={classes.listItem}>
                                    <img src={HoteisSvg} className={classes.img} alt="Hospedagens Icone" />
                                    <Typography type="subheading" color="inherit" className={classes.text}>{translations.boxLeft[1].text}</Typography>
                                </ListItem>
                                <ListItem button component="a" rel="noopener noreferrer" target="_blank" href="https://www.e-agencias.com.br/vivala/home/flights" className={classes.listItem}>
                                    <img src={VoosSvg} className={classes.img} alt="Voos Icone"/>
                                    <Typography type="subheading" color="inherit" className={classes.text}>{translations.boxLeft[2].text}</Typography>
                                </ListItem>
                                <Link to="/experiencias">
                                    <ListItem button component="div" className={classes.listItem}>
                                        <img src={ExperienciasSvg} className={classes.img} alt="Experiencias Icone"/>
                                        <Typography type="subheading" color="inherit" className={classes.text}>{translations.boxLeft[3].text}</Typography>
                                    </ListItem>
                                </Link>
                            </List>
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <Link to="/cotacao" className={classes.button}>
                                <div className={`${classes.bordered} ${classes.colorWhite}`}>
                                    <Typography type="body1" paragraph color="inherit" >
                                        {translations.boxRight.text}
                                    </Typography>
                                    <Typography type="subheading" color="inherit" paragraph className={classes.bold}>
                                        <Grid container gutter={0} item xs={12} justify="space-between">
                                            {translations.boxRight.button} <Icon>arrow_forward</Icon>
                                        </Grid>
                                    </Typography>
                                </div>
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

SearchTravel.propTypes = {
    classes: PropTypes.object.isRequired,
    click: PropTypes.func.isRequired,
    translations: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(SearchTravel);
