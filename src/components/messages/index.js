import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';

const styleSheet = createStyleSheet('MessagesIndex', theme => ({
    title: {
        color: theme.vivala.color,
        textTransform: 'uppercase'
    },
    message: {
        textAlign: 'center'
    },
    success: {
        color: 'green',
        fontSize: 70
    },
    error: {
        color: 'red',
        fontSize: 70
    }
}));

class MessagesIndex extends Component {
    render() {
        const { classes, type, title, heading, subheading } = this.props;

        const successMessage = (
            <div className={classes.message}>
                <Icon className={classes[type]}>done</Icon>
                <Typography type="body1">
                    <strong>{heading}</strong>
                </Typography>
                <Typography type="body1">
                    {subheading}
                </Typography>

            </div>
        );

        const errorMessage = (
            <div className={classes.message}>
                <Icon className={classes[type]}>block</Icon>
                <Typography type="body1" paragraph>
                    <strong>Ops!</strong>
                </Typography>
                <Typography type="body1" paragraph>
                    Houve um problema ao enviar as informações.
                </Typography>
            </div>
        )

        return (
            <div>
                <Typography type="title" gutterBottom align="center" className={classes.title}>{title}</Typography>
                { type === 'success' ? successMessage : errorMessage }
            </div>
        );
    }
}

MessagesIndex.propTypes = {
    classes: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
};

export default withStyles(styleSheet)(MessagesIndex);