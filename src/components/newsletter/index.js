import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import NewsletterForm from './form';
import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress';
import Message from '../messages';
import { storeNewsletter } from '../../actions/newsletter';

class NewsletterIndex extends Component {
    handleSubmit = (values) => {
        this.props.storeNewsletter(values);
    }

    render() {
        const { requesting, error, success, text } = this.props;

        if (requesting) {
            return <div>
                <div className="container padding">
                    <CircularProgress color="primary" size={50} />
                </div>
            </div>
        }

        if (error || success) {
            return <div>
                <div className="container padding">
                    <Message type={error ? 'error' : 'success'} title="Newsletter" heading="Obrigado por se cadastrar!" subheading="Agora você começará a receber conteúdos exclusivos da Vivalá e do Instituto Vivalá." />
                </div>
            </div>
        }

        return (
            <div className="newsletter">
                <div className="container padding-2x">
                    <Typography type="subheading" color="inherit" className="newsletter-highlight-text">{text}</Typography>
                    <NewsletterForm onSubmit={this.handleSubmit}/>
                </div>
            </div>
        );
    }
}


NewsletterIndex.propTypes = {
    text: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
    return {
        requesting: state.newsletter.requesting,
        error: state.newsletter.error,
        success: state.newsletter.success
    }
}

export default connect(mapStateToProps, {storeNewsletter})(NewsletterIndex);
