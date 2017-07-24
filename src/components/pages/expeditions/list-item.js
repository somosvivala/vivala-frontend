import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom';

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
        width: '100%',
        textAlign: 'center'
    },
    subheading: {
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
}));

class ExpeditionsListItem extends Component {
    render() {
        const { classes, expedition, color } = this.props;
        const align = window.screen.width > 800 ? 'flex-start' : 'center';
        const url = `/expedicoes/${expedition.id}`;

        return (
            <Grid container gutter={16} align="flex-start" justify="center" className={classes.padding}>
                <Grid gutter={0} container item xs={12} sm={6} align={align}>
                    <Link to={url}>
                        <img src="http://via.placeholder.com/400x300" className={classes.img}/>
                    </Link>
                </Grid>
                <Grid gutter={0} container item xs={12} sm={6} className={[classes[color], classes.padding]} align={align} justify="center" direction="column">
                    <Typography type="title" color="inherit" className={classes.subheading} gutterBottom>
                        {expedition.title}
                    </Typography>
                    <Button raised color="contrast" href={url}>
                        Saiba Mais
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

ExpeditionsListItem.propTypes = {
    classes: PropTypes.object.isRequired,
    expedition: PropTypes.objectOf({
        id: PropTypes.number,
        title: PropTypes.string,
    }).isRequired,
    color: PropTypes.string.isRequired,
};

export default withStyles(styleSheet)(ExpeditionsListItem);