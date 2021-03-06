import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom';

const styleSheet = createStyleSheet('BadRequest', theme => ({
    bg: {
        backgroundColor: theme.default.color,
        textAlign: 'center'
    },
    title: {
        textTransform: 'uppercase',
        color: theme.vivala.color
    },
    message: {
        marginBottom: 30
    }
}));

class BadRequest extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.bg}>
                <div className="container padding-2x">
                    <Typography type="display1" color="inherit" gutterBottom className={classes.title}>
                        Erro Interno (500)
                    </Typography>
                    <Typography type="display2" paragraph>
                        : (
                    </Typography>
                    <Typography type="title" color="inherit" className={classes.message}>
                        O link que você acessou parece estar quebrado ou a página pode ter sido removida.
                    </Typography>
                    <Button raised color="primary"><Link to="/">Voltar para Home</Link></Button>
                </div>

            </div>
        );
    }
}

BadRequest.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(BadRequest);