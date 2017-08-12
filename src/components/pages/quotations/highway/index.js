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
import axios from '../../../../utils/axios';
import Message from '../../../messages';

const styleSheet = createStyleSheet('HighwayIndex', theme => ({
    bg: {
        backgroundColor: theme.default.color,
    },
    mobileStepper: {
        width: '100%',
        flexGrow: 1,
    },
}));

class HighwayIndex extends Component {
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
        axios.post('/cotacoes/rodoviario', values)
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
                        <Typography type="subheading" align="right">{page} / 5</Typography>

                        <LinearProgress
                            color="primary"
                            mode="determinate"
                            value={page * 20}
                            valueBuffer={100}
                        />
                        <div style={{ marginTop: 30 }}>
                            <Message type={error ? 'error' : 'success'} title="Contato" />
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className={classes.bg}>
                <div className="container padding-2x">
                    <LodgingHeader/>
                    <Typography type="subheading" align="right">{page} / 5</Typography>

                    <LinearProgress
                        color="primary"
                        mode="determinate"
                        value={page * 20}
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
                            onSubmit={this.handleSubmit}
                        />
                    }
                </div>
            </div>
        )
    }
}

HighwayIndex.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(HighwayIndex);
