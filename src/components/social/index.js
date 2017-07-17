import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('Social', theme => ({
    social: {
        marginTop: 15,
        display: 'flex',
        justifyContent: 'space-around',
        width: 200,
    },
}));

class Social extends Component {
    render() {
        const { classes, color, facebook, instagram, youtube, linkedin } = this.props;
        return (
            <Grid item className={classes.social}>
                { facebook ? <a target="_blank" href={facebook}><i className="fa fa-2x fa-facebook-square" style={{ color }}></i></a> : null }
                { linkedin ? <a target="_blank" href={linkedin}><i className="fa fa-2x fa-linkedin-square" style={{ color }}></i></a> : null }
                { youtube ? <a target="_blank" href={youtube}><i className="fa fa-2x fa-youtube-square" style={{ color }}></i></a> : null }
                { instagram ? <a target="_blank" href={instagram}><i className="fa fa-2x fa-instagram" style={{ color }}></i></a> : null }
            </Grid>
        );
    }
}

Social.propTypes = {
    color: PropTypes.string.isRequired,
    facebook: PropTypes.string,
    instagram: PropTypes.string,
    youtube: PropTypes.string,
    linkedin: PropTypes.string,
};

export default withStyles(styleSheet)(Social);
