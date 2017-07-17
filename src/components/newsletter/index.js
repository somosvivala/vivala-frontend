import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('Newsletter', theme => ({
    gridContainer: {
        margin: 0,
    },
    input: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    button: {
        marginTop: 10
    }
}));

class Newsletter extends Component {
    state = {
        name: '',
        email: '',
    };

    render() {
        const { classes, text, placeholderName } = this.props;
        const container = {
            container: true,
            item: true,
            gutter: 0,
            xs: 12,
            sm: 9,
            align: "center",
            justify: "center",
            direction: window.screen.width < 768 ? 'column' : 'row'
        }
        return (
            <div className="container padding">
                <Grid container className={classes.gridContainer} justify="center" align="center">
                    <Grid container item xs={12} sm={3} align="center" justify="center">
                        <Typography type="subheading">{text}</Typography>
                    </Grid>
                    <Grid {...container}>
                        <TextField
                            id="name"
                            label={placeholderName}
                            className={classes.input}
                            required
                            value={this.state.name}
                            onChange={event => this.setState({ name: event.target.value })}
                            marginForm
                        />
                        <TextField
                            id="email"
                            label="E-mail"
                            className={classes.input}
                            required
                            value={this.state.email}
                            onChange={event => this.setState({ email: event.target.value })}
                            marginForm
                        />
                        <Button raised className={classes.button}>Enviar</Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}


Newsletter.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    placeholderName: PropTypes.string.isRequired
};

export default withStyles(styleSheet)(Newsletter);

