import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';
import PropTypes from 'prop-types';
import Social from '../social';

const styleSheet = createStyleSheet('SearchCallToAction', theme => ({
    container: {
        height: 190
    },
    bg: {
        backgroundColor: 'rgb(245, 245, 245)'
    },
}));

class SearchCallToAction extends Component {
    render() {
        const { classes, click, translations } = this.props;

        return (
            <div className={classes.bg}>
                <div className="container">
                    <Grid container gutter={0} align="center" justify="center" className={classes.container}>
                        <Grid gutter={0} container item xs={12} sm={6} justify="center">
                            <Typography type="subheading" align="center">
                                {translations.text}
                            </Typography>
                        </Grid>
                        <Grid gutter={24} container item xs={12} sm={6} justify="center" align="center">
                            <Button raised color="contrast" onClick={click}>
                                <Icon color="contrast">search</Icon> {translations.button}
                            </Button>
                            <Social color="#ccc" facebook="#" linkedin="#" instagram="#" youtube="#"/>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

SearchCallToAction.propTypes = {
    classes: PropTypes.object.isRequired,
    translations: PropTypes.object.isRequired,
    click: PropTypes.func.isRequired,
}

export default withStyles(styleSheet)(SearchCallToAction);