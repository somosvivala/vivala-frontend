import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import {Link} from 'react-router-dom';

const styleSheet = createStyleSheet('InstituteItem', theme => ({
    item: {
        backgroundColor: theme.institute.lightColor,
        margin: '0 5px',
        display: 'flex',
        padding: 5,
        flexDirection: 'column',
        justifyContent: 'space-around',
        textAlign: 'center',
        height: 100,
        color: '#222'
    }
}));

class InstituteItem extends Component {
    render() {
        const { classes, title, subtitle, link } = this.props;
        return (
            <div className={classes.item}>
                <Typography type="subheading" color="inherit">
                    {title}
                </Typography>
                <Typography type="subheading" color="inherit">
                    {subtitle}
                </Typography>
                <Typography type="body1" color="inherit">
                    <Link to={link}>
                        <strong>Saiba Mais</strong>
                    </Link>
                </Typography>
            </div>
        );
    }
}

InstituteItem.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default withStyles(styleSheet)(InstituteItem);
