import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";

const styleSheet = createStyleSheet('ExperiencesHeader', theme => ({
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

class ExperiencesHeader extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.bg}>
                <div className="container padding">
                    <Grid container gutter={0} align="center" justify="center">
                        <Grid item xs={12}>
                            <Typography type="headline" className={classes.title} gutterBottom>
                                Experiências
                            </Typography>
                            <Typography type="body1" className={classes.subTitle}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

ExperiencesHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ExperiencesHeader);
