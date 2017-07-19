import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import List, { ListItem } from 'material-ui/List';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import PacotesCompletosSvg from '../../assets/svg/icons/pacotes.svg';
import OnibusSvg from '../../assets/svg/icons/onibus.svg';
import HoteisSvg from '../../assets/svg/icons/hoteis.svg';
import VoosSvg from '../../assets/svg/icons/voos.svg';
import ExperienciasSvg from '../../assets/svg/icons/experiencia.svg';

const styleSheet = createStyleSheet('SearchTravel', theme => ({
    bg: {
        backgroundColor: theme.vivala.color
    },
    subheading: {
        color: 'white !important',
        paddingLeft: 20
    },
    click: {
        cursor: 'pointer',
        textAlign: 'right',
        color: 'white !important'
    },
    list: {
        padding: 20,
    },
    listItem: {
        backgroundColor: 'rgba(255,255,255,0.1) !important',
        marginBottom: 10,
    },
    text: {
        color: 'white !important'
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
        margin: 20,
        backgroundColor: 'rgba(255,255,255,0.1) !important',
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
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
                        <Grid xs={2} item style={{paddingRight: 20}}>
                            <div onClick={click} className={classes.click}><Icon>keyboard_arrow_up</Icon></div>
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <List className={classes.list}>
                                <ListItem button component="a" href="#simple-list" className={classes.listItem}>
                                    <img src={PacotesCompletosSvg} className={classes.img} />
                                    <Typography type="subheading" color="inherit" className={classes.text}>{translations.boxLeft[0].text}</Typography>
                                </ListItem>
                                <ListItem button component="a" href="#simple-list" className={classes.listItem}>
                                    <img src={HoteisSvg} className={classes.img} />
                                    <Typography type="subheading" color="inherit" className={classes.text}>{translations.boxLeft[1].text}</Typography>
                                </ListItem>
                                <ListItem button component="a" href="#simple-list" className={classes.listItem}>
                                    <img src={VoosSvg} className={classes.img} />
                                    <Typography type="subheading" color="inherit" className={classes.text}>{translations.boxLeft[2].text}</Typography>
                                </ListItem>
                                <ListItem button component="a" href="#simple-list" className={classes.listItem}>
                                    <img src={OnibusSvg} className={classes.img} />
                                    <Typography type="subheading" color="inherit" className={classes.text}>{translations.boxLeft[3].text}</Typography>
                                </ListItem>
                                <ListItem button component="a" href="#simple-list" className={classes.listItem}>
                                    <img src={ExperienciasSvg} className={classes.img} />
                                    <Typography type="subheading" color="inherit" className={classes.text}>{translations.boxLeft[4].text}</Typography>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <div className={classes.bordered}>
                                <p>{translations.boxRight.text}</p>
                                <a href="#" className={classes.button}>{translations.boxRight.button} <Icon>arrow_forward</Icon></a>
                            </div>
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
