import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('Social', theme => ({
    social: {
        display: 'inline-block',
        width: 30,
        padding: 10
    }
}));

class Social extends Component {
    render() {
        const { classes, color, facebook, instagram, youtube, linkedin } = this.props;
        return (
            <div className="social-container">
                { instagram ? <a rel="noopener noreferrer" target="_blank" href={instagram} className={classes.social}><i className="fa fa-2x fa-instagram" style={{ color }}></i></a> : null }
                { facebook ? <a rel="noopener noreferrer" target="_blank" href={facebook} className={classes.social}><i className="fa fa-2x fa-facebook-square" style={{ color }}></i></a> : null }
                { youtube ? <a rel="noopener noreferrer" target="_blank" href={youtube} className={classes.social}><i className="fa fa-2x fa-youtube-square" style={{ color }}></i></a> : null }
                { linkedin ? <a rel="noopener noreferrer" target="_blank" href={linkedin} className={classes.social}><i className="fa fa-2x fa-linkedin-square" style={{ color }}></i></a> : null }
            </div>
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
