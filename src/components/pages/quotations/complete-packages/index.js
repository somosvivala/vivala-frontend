import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles';
import CompletePackagesHeader from './header';
import {LinearProgress} from 'material-ui/Progress';
import Typography from 'material-ui/Typography';
import FirstStep from './first-step';
import SecondStep from './second-step';
import ThirdStep from './third-step';
import FourthStep from './fourth-step';
import FifthStep from './fifth-step';
import SixthStep from './sixth-step';
import SeventhStep from './seventh-step';
import EigthStep from './eigth-step';
import NinthStep from './ninth-step';
import axios from '../../../../utils/axios';
import Message from '../../../messages';
import _ from 'lodash';

const styleSheet = createStyleSheet('CompletePackagesFirstStep', theme => ({
    bg: {
        backgroundColor: theme.default.color,
    },
    mobileStepper: {
        width: '100%',
        flexGrow: 1,
    },
}));

class CompletePackagesIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            saved: false,
            error: false
        }
    }

    componentDidUpdate() {
        window.scrollTo(0, 0)
    }

    nextPage = () => {
        this.setState({ page: parseInt(this.state.page, 10) + 1 })
    }

    previousPage = () => {
        this.setState({ page: parseInt(this.state.page, 10) - 1 })
    }

    handleSubmit = (values) => {
        axios.post('/cotacoes/pacote', _.omitBy(values, _.isNil))
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
                <div className="content-wrapper">
                    <div className={classes.bg}>
                        <div className="container padding">
                            <CompletePackagesHeader/>
                            <Typography type="subheading" align="right">{page} / 9</Typography>

                            <LinearProgress
                                color="primary"
                                mode="determinate"
                                value={page * 11.11}
                                valueBuffer={100}
                            />
                            <div style={{ marginTop: 30 }}>
                                <Message type={error ? 'error' : 'success'} title="Cotação - Pacotes Completos" heading="Formulário enviado com sucesso!" subheading="Em até 24 h entraremos em contato com as melhores soluções para sua experiência" />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="content-wrapper">
                <div className={classes.bg}>
                    <div className="container" style={{ padding: '40px 20px' }}>
                        <CompletePackagesHeader/>
                        <Typography type="subheading" align="right">{page} / 9</Typography>

                        <LinearProgress
                            color="primary"
                            mode="determinate"
                            value={page * 11.11}
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
                                onSubmit={this.nextPage}
                            />
                        }
                        { page === 8 &&
                            <EigthStep
                                previousPage={this.previousPage}
                                onSubmit={this.nextPage}
                            />
                        }
                        { page === 9 &&
                            <NinthStep
                                previousPage={this.previousPage}
                                onSubmit={this.handleSubmit}
                            />
                        }
                    </div>
                </div>
            </div>
        )
    }
}

CompletePackagesIndex.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(CompletePackagesIndex);
