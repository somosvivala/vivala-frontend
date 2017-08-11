import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress';
import Message from '../../messages';
import { storeContact } from '../../../actions/contact';
import ContactForm from '../../contact';

const styleSheet = createStyleSheet('CorporativeContact', theme => ({
    button: {
        textAlign: 'center',
        width: window.screen.width < 900 ? '100%' : 'auto'
    }
}));

class CorporativeContact extends Component {
    state = {
        clicked: false,
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

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        });
    }

    handleSubmit = (values) => {
        this.props.storeContact(values, 'corporativo');
    }

    render() {
        const { classes } = this.props;
        const { clicked, requesting, error, success } = this.state;

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
                    <Message type={error ? 'error' : 'success'} title="Contato" />
                </div>
            </div>
        }

        const renderButton = (
            <Button onClick={this.handleClick} raised color="primary" className={classes.button}>
                Quero Saber Mais
            </Button>
        )

        return (
            <div className="container padding">
                { clicked ?
                    <ContactForm key="corporative-contact" type="corporative" onSubmit={this.handleSubmit} />
                    :
                    renderButton
                }
            </div>
        );
    }
}

CorporativeContact.propTypes = {
    classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        requesting: state.contact.requesting,
        error: state.contact.error,
        success: state.contact.success
    }
}

export default connect(mapStateToProps, {storeContact})(withStyles(styleSheet)(CorporativeContact));