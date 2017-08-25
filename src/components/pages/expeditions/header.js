import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";

const styleSheet = createStyleSheet('ExpeditionsHeader', theme => ({
    bg: {
        backgroundColor: theme.default.color,
    },
    title: {
        textTransform: 'uppercase',
        fontWeight: '700',
        margin: '2rem 0 1rem 0',
        textAlign: window.screen.width < 900 ? 'center' : 'left',
    },
    subTitle: {
        marginBottom: '1rem',
        textAlign: window.screen.width < 900 ? 'center' : 'left',
        fontSize: '1.2rem'
    }
    
}));

class ExpeditionsHeader extends Component {
    render() {
        const { classes, translations } = this.props;
        return (
            <div className={classes.bg}>
                <div className="container padding">
                    <Grid container gutter={0} align="center" justify="center">
                        <Grid item xs={12}>
                            <Typography type="headline" color="accent" className={classes.title} gutterBottom>
                                {translations.title}
                            </Typography>
                            <Typography type="body1" className={classes.subTitle}>
                                {translations.text}
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

ExpeditionsHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    translations: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ExpeditionsHeader);
