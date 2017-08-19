import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles';
import LodgingHeader from './header';
import {LinearProgress} from 'material-ui/Progress';
import Typography from 'material-ui/Typography';
import FirstStep from './first-step';
import SecondStep from './second-step';
import ThirdStep from './third-step';
import FourthStep from './fourth-step';
import FifthStep from './fifth-step';
import SixthStep from './sixth-step';
import SeventhStep from './seventh-step';
import axios from '../../../../utils/axios';
import Message from '../../../messages';

const styleSheet = createStyleSheet('LodgingFirstStep', theme => ({
    bg: {
        backgroundColor: theme.default.color,
    },
    mobileStepper: {
        width: '100%',
        flexGrow: 1,
    },
    fixMargin: {
        marginTop: 30
    }
}));

class LodgingIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            saved: false,
            error: false
        }
    }
    nextPage = () => {
        this.setState({ page: parseInt(this.state.page, 10) + 1 })
    }

    previousPage = () => {
        this.setState({ page: parseInt(this.state.page, 10) - 1 })
    }

    handleSubmit = (values) => {
        axios.post('/cotacoes/hospedagem', values)
            .then(response => {
                this.setState({
                    saved: true,
                    error: false
                });
            })
            .catch(err => {
                this.setState({
                    saved: true,
                    error: true
                })
            });
    }

    render() {
        const { classes } = this.props;
        const { page, saved, error } = this.state;

        if (saved) {
            return (
                <div className={classes.bg}>
                    <div className="container padding">
                        <LodgingHeader/>
                        <Typography type="subheading" align="right">{page} / 7</Typography>

                        <LinearProgress
                            color="primary"
                            mode="determinate"
                            value={page * 14.279}
                            valueBuffer={100}
                        />
                        <div className={classes.fixMargin}>
                            <Message type={error ? 'error' : 'success'} title="Cotação - Hospedagem" heading="Formulário enviado com sucesso!" subheading="Obrigado pelas informações. Em breve entraremos em contato para confirmação e próximos passos." />
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className={classes.bg}>
                <div className="container" style={{ padding: '40px 20px' }}>
                    <LodgingHeader/>
                    <Typography type="subheading" align="right">{page} / 7</Typography>

                    <LinearProgress
                        color="primary"
                        mode="determinate"
                        value={page * 14.279}
                        valueBuffer={100}
                    />
                    { page === 1 && <FirstStep onSubmit={this.nextPage} /> }
                    { page === 2 &&
                        <SecondStep
                            previousPage={this.previousPage}
                            onSubmit={this.nextPage}
                        />
                    }
                    { page === 3 &&
                        <ThirdStep
                            previousPage={this.previousPage}
                            onSubmit={this.nextPage}
                        />
                    }
                    { page === 4 &&
                        <FourthStep
                            previousPage={this.previousPage}
                            onSubmit={this.nextPage}
                        />
                    }
                    { page === 5 &&
                        <FifthStep
                            previousPage={this.previousPage}
                            onSubmit={this.nextPage}
                        />
                    }
                    { page === 6 &&
                        <SixthStep
                            previousPage={this.previousPage}
                            onSubmit={this.nextPage}
                        />
                    }
                    { page === 7 &&
                        <SeventhStep
                            previousPage={this.previousPage}
                            onSubmit={this.handleSubmit}
                        />
                    }
                </div>
            </div>
        )
    }
}

LodgingIndex.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(LodgingIndex);
