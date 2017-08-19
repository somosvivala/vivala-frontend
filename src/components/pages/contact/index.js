import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import ContactForm from '../../contact';
import { storeContact } from '../../../actions/contact';
import { CircularProgress } from 'material-ui/Progress';
import Message from '../../messages';

const styleSheet = createStyleSheet('ContactIndex', theme => ({
    bg: {
        backgroundColor: theme.default.color
    }
}));

class ContactIndex extends Component {
    state = {
        requesting: false,
        error: false,
        success: false
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.success === true) {
            this.setState({
                success: nextProps.success
            })
        }
        if (nextProps.error === true) {
            this.setState({
                error: nextProps.error
            })
        }
        if (nextProps.requesting === true) {
            this.setState({
                requesting: nextProps.requesting
            })
        }
    }

    handleSubmit = (values) => {
        this.props.storeContact(values, 'geral');
    }

    render() {
        const { classes } = this.props;
        const { requesting, error, success } = this.state;

        if (requesting) {
            return <div className={classes.bg}>
                <div className="container padding">
                    <CircularProgress color="primary" size={50} />
                </div>
            </div>
        }

        if (error || success) {
            return <div className={classes.bg}>
                <div className="container padding">
                    <Message type={error ? 'error' : 'success'} title="Contato" heading="Recebemos seu contato!" subheading="Obrigado pelas informações. Retornaremos o mais breve possível." />
                </div>
            </div>
        }

        return (
            <div className={classes.bg}>
                <div className="container padding">
                    <Grid gutter={24} container>
                        <Grid xs={12} item >
                            <Typography type="headline">
                                Contato
                            </Typography>
                        </Grid>
                        <Grid xs={12} item >
                            <Typography type="title" color="inherit" gutterBottom>
                                <a href="tel://+551126452632"><strong>11 2645-2632</strong></a>
                            </Typography>
                            <Typography type="title" color="inherit" paragraph>
                                <a href="mailto:contato@vivala.com.br">contato@vivala.com.br</a>
                            </Typography>
                        </Grid>

                        <Grid xs={12} item >
                            <Typography type="subheading">
                                Ou se preferir, preencha o formulário abaixo:
                            </Typography>
                        </Grid>

                        <Grid xs={12} item >
                            <ContactForm type="common" onSubmit={this.handleSubmit} />
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

ContactIndex.propTypes = {
    classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        requesting: state.contact.requesting,
        error: state.contact.error,
        success: state.contact.success
    }
}

export default connect(mapStateToProps, {storeContact})(withStyles(styleSheet)(ContactIndex));