import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import SearchButton from '../../search/button';

const styleSheet = createStyleSheet('QuotationsIndex', theme => ({
    bg: {
        backgroundColor: theme.default.color,
        textAlign: window.screen.width < 900 ? 'center' : 'left'
    },
    text: {
        textTransform: 'uppercase'
    },
    button: {
        width: '100%',
        color: 'white !important',
        marginTop: 30,
    }
}));

class QuotationsIndex extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className={classes.bg}>
                    <div className="container padding">
                        <Typography type="headline" paragraph className={classes.text}>
                            Monte sua viagem sozinho
                        </Typography>
                        <Button raised color="primary" rel="noopener noreferrer" target="_blank" href="https://www.e-agencias.com.br/vivala/home/packages" className={classes.button}>
                            <Typography className={classes.text} color="inherit">
                                Pacotes Completos
                            </Typography>
                        </Button>
                        <Button raised color="primary" rel="noopener noreferrer" target="_blank" href="https://www.e-agencias.com.br/vivala/home/hotels" className={classes.button}>
                            <Typography className={classes.text} color="inherit">
                                Hospedagens
                            </Typography>
                        </Button>
                        <Button raised color="primary" rel="noopener noreferrer" target="_blank" href="https://www.e-agencias.com.br/vivala/home/flights" className={classes.button}>
                            <Typography className={classes.text} color="inherit">
                                Voos
                            </Typography>
                        </Button>
                    </div>
                </div>

                <SearchButton darkBg />
            </div>
        );
    }
}

QuotationsIndex.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(QuotationsIndex);