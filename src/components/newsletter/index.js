import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import NewsletterForm from './form';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import Message from '../messages';
import { storeNewsletter } from '../../actions/newsletter';

const styleSheet = createStyleSheet('NewsletterIndex', theme => ({
    gridContainer: {
        margin: 0,
    }
}));

class NewsletterIndex extends Component {
    handleSubmit = (values) => {
        this.props.storeNewsletter(values);
    }

    render() {
        const { classes, requesting, error, success, text } = this.props;

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
                    <Message type={error ? 'error' : 'success'} title="Newsletter" />
                </div>
            </div>
        }

        return (
            <div className="container padding-2x">
                <Grid container className={classes.gridContainer} justify="center" align="center">
                    <Grid container item xs={12} sm={3} align="center" justify="center">
                        <Typography type="subheading">{text}</Typography>
                    </Grid>
                    <Grid container item xs={12} sm={9} align="center" justify="center">
                        <NewsletterForm onSubmit={this.handleSubmit}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}


NewsletterIndex.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
    return {
        requesting: state.newsletter.requesting,
        error: state.newsletter.error,
        success: state.newsletter.success
    }
}

export default connect(mapStateToProps, {storeNewsletter})(withStyles(styleSheet)(NewsletterIndex));

