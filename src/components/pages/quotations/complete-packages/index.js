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
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.state = {
            page: 5
        }
    }
    nextPage() {
        this.setState({ page: this.state.page + 1 })
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 })
    }

    handleSubmit = (values) => {
        console.log(values);
    }

    render() {
        const { classes } = this.props;
        const { page } = this.state;
        return (

            <div className={classes.bg}>
                <div className="container padding-2x">
                    <CompletePackagesHeader/>
                    <Typography type="subheading" align="right" color="primary">{page} / 9</Typography>
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
        )
    }
}

CompletePackagesIndex.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(CompletePackagesIndex);