import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet('InstituteItem', theme => ({
    item: {
        backgroundColor: theme.institute.lightColor,
        margin: '0 10px',
        padding: 20,
        textAlign: 'center'
    }
}));

class InstituteItem extends Component {
    render() {
        const { classes, title, place, subTitle, link } = this.props;
        return (
            <div className={classes.item}>
                <Typography type="body1">
                    {title}
                </Typography>
                <Typography type="body1">
                    {place}
                </Typography>
                <Typography type="body1">
                    {subTitle}
                </Typography>
                <a href={link}>
                    Saiba Mais
                </a>
            </div>
        );
    }
}

InstituteItem.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default withStyles(styleSheet)(InstituteItem);
