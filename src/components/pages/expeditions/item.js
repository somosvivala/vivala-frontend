import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styleSheet = createStyleSheet('ExpeditionsItem', theme => ({
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
        width: '100%',
        textAlign: 'center'
    },
    subheading: {
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
}));

class ExpeditionsItem extends Component {
    render() {
        const { classes, translations, color, link } = this.props;
        const align = window.screen.width > 800 ? 'flex-start' : 'center';

        return (
            <Grid container gutter={0} align="flex-start" justify="center" className={classes.padding} >
                <Grid container item xs={12} sm={6} align={align} gutterBottom>
                    <a href="#">
                        <img src="http://via.placeholder.com/400x300" className={classes.img}/>
                    </a>
                </Grid>
                <Grid container item xs={12} sm={6} className={[classes[color], classes.padding]} align={align} justify="center" direction="column">
                    <Typography type="title" color="inherit" gutterBottom className={classes.subheading}>
                        {translations.title}
                    </Typography>
                    <Typography type="subheading" color="inherit" gutterBottom>
                        {translations.text}
                    </Typography>
                    <Button raised color="contrast" href={link}>
                        {translations.button}
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

ExpeditionsItem.propTypes = {
    classes: PropTypes.object.isRequired,
    translations: PropTypes.object.isRequired,
    color: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default withStyles(styleSheet)(ExpeditionsItem);