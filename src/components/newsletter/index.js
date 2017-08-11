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
                    <Message type={error ? 'error' : 'success'} title="Newsletter" />
                </div>
            </div>
        }

        return (
            <Grid gutter={0} container>
                <div className="container padding-2x">
                    <Grid gutter={16} container justify="center" align="center">
                        <Grid gutter={0} container item xs={12} sm={3}>
                            <Typography type="subheading" color="inherit">{text}</Typography>
                        </Grid>
                        <Grid gutter={16} container item xs={12} sm={9}>
                            <NewsletterForm onSubmit={this.handleSubmit}/>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
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

