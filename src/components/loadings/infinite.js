import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { LinearProgress } from 'material-ui/Progress';

const styleSheet = createStyleSheet('LoadingInfinite', {
    root: {
        width: '100%',
    },
});

function LoadingInfinite(props) {
    const classes = props.classes;
    return (
        <div className="infinite-loader">
            <LinearProgress className="loading" />
        </div>
    );
}

LoadingInfinite.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(LoadingInfinite);
