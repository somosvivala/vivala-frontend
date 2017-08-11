import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AgentsList from './list';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('AgentsIndex', theme => ({
    bg: {
        backgroundColor: theme.default.color,
        textAlign: 'center'
    }
}));

class AgentsIndex extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <AgentsList />

                <div className={classes.bg}>
                    <div className="container padding">
                        <Typography type="body1" paragraph>
                            Quer uma proposta para sua viagem ágil, humanizada e gratuita?
                        </Typography>
                        <Button raised color="primary">
                            <Link to="/cotacao">
                                Receba sua cotação em até 24 horas
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

AgentsIndex.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(AgentsIndex);
