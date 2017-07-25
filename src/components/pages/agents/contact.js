import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress';
import Message from '../../messages';
import { storeContact } from '../../../actions/contact';
import ContactForm from '../../contact';

const styleSheet = createStyleSheet('AgentsContact', theme => ({
    button: {
        textAlign: 'center',
    }
}));

class AgentsContact extends Component {
    state = {
        clicked: false,
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        });
    }

    handleSubmit = (values) => {
        this.props.storeContact(values, 'agente');
    }

    render() {
        const { classes, requesting, error, success, } = this.props;
        const { clicked } = this.state;

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
            <div className={classes.button}>
                <Button raised color="primary" onClick={this.handleClick}>
                    Seja um agente!
                </Button>
            </div>
        )

        return (
            <div className="container padding">
                { clicked ?
                    <ContactForm key="agents-contact" type="agents" onSubmit={this.handleSubmit} />
                    :
                    renderButton
                }
            </div>
        );
    }
}

AgentsContact.propTypes = {
    classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        requesting: state.contact.requesting,
        error: state.contact.error,
        success: state.contact.success
    }
}

export default connect(mapStateToProps, {storeContact})(withStyles(styleSheet)(AgentsContact));