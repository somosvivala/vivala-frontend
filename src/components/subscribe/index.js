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
import Button from 'material-ui/Button'

const styleSheet = createStyleSheet('ExpeditionsHeader', theme => ({
    bg: {
        backgroundColor: theme.defaultDarken.color,
        padding: 30
    },
    title: {
        color: theme.vivala.color,
        textTransform: 'uppercase'
    },
    btnContainer: { display: 'flex' },
    btnMoreInfo: { flex: 1, width: 'auto' },
    btnSubscribe: { textAlign: 'center', flex: 1, width: 'auto', marginLeft: '2em' }
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
        const { classes, title, record: {pagSeguroUrl}, requesting, error, success, btnColor } = this.props;
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
                    <Message type={error ? 'error' : 'success'} title={ title ? title : "Expedições" } heading="Inscrição efetuada com sucesso!" subheading="Obrigado pelas informações. Em breve entraremos em contato para confirmação e próximos passos." />
                </div>
            </div>
        }

        return (
            <div className={classes.bg}>
                <div className="container">
                    { open ?
                        <div>
                            <Typography type="title" align="center" className={classes.title}>{title || 'Inscrição'}</Typography>
                            <SubscribeForm onSubmit={this.handleSubmit} />
                        </div>
                        :
                        <div className={classes.btnContainer}>
                          <SubscribeButton className={`${classes.btnMoreInfo} botao-saber-mais`} title="Quero saber mais..." click={this.handleClick} btnColor={btnColor} />
                          { pagSeguroUrl &&
                            <Button
                              color="accent"
                              raised
                              href={pagSeguroUrl}
                              target="_blank"
                              className={`${classes.btnSubscribe} botao-pagseguro`}
                            >
                                Quero me inscrever!
                            </Button>
                          }
                        </div>
                    }
                </div>
            </div>
        );
    }
}

SubscribeIndex.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    record: PropTypes.objectOf({
        type: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired,
    btnColor: PropTypes.string,
}

function mapStateToProps(state) {
    return {
        requesting: state.subscribe.requesting,
        error: state.subscribe.error,
        success: state.subscribe.success
    }
}

export default connect(mapStateToProps, {storeSubscription})(withStyles(styleSheet)(SubscribeIndex));
