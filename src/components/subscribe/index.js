import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import SubscribeButton from "./button";
import SubscribeForm from "./form";
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';
import Message from '../messages';
import { storeSubscription } from '../../actions/subscribe';

const styleSheet = createStyleSheet('ExpeditionsHeader', theme => ({
    bg: {
        backgroundColor: theme.defaultDarken.color,
        padding: 30
    },
    title: {
        color: theme.vivala.color,
        textTransform: 'uppercase'
    }
}));

class SubscribeIndex extends Component {
    state = {
        open: false
    }

    handleClick = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleSubmit = (values) => {
        const { record } = this.props;

        this.props.storeSubscription({values, record});
    }

    render() {
        const { classes, requesting, error, success } = this.props;
        const { open } = this.state;

        if (requesting) {
            return <div className={classes.bg}>
                <div className="container">
                    <CircularProgress color="primary" size={50} />
                </div>
            </div>
        }

        if (error || success) {
            return <div className={classes.bg}>
                <div className="container">
                    <Message type={error ? 'error' : 'success'} title="Expedições" heading="Inscrição efetuada com sucesso!" subheading="Obrigado pelas informações. Em breve entraremos em contato para confirmação e próximos passos." />
                </div>
            </div>
        }

        return (
            <div className={classes.bg}>
                <div className="container">
                    { open ?
                        <div>
                            <Typography type="title" align="center" className={classes.title}>Inscrição</Typography>
                            <SubscribeForm onSubmit={this.handleSubmit} />
                        </div>
                        :
                        <SubscribeButton click={this.handleClick} />
                    }
                </div>
            </div>
        );
    }
}

PropTypes.required = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    record: PropTypes.objectOf({
        type: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired,
}

function mapStateToProps(state) {
    return {
        requesting: state.subscribe.requesting,
        error: state.subscribe.error,
        success: state.subscribe.success
    }
}

export default connect(mapStateToProps, {storeSubscription})(withStyles(styleSheet)(SubscribeIndex));
