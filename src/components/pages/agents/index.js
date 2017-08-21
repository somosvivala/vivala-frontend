import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AgentsList from './list';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import FontAwesome from 'react-fontawesome';


const styleSheet = createStyleSheet('AgentsIndex', theme => ({
    bg: {
        backgroundColor: '#ddd',
        textAlign: 'center'
    },
    button: {
        marginTop: '1rem',
        width: window.screen.width < 900 ? '100%' : '33%',
        paddingLeft: 0,
        paddingRight: 0,
        fontWeight: 'bold',
        textTransform:'none',
        fontSize: window.screen.width < 900 ? '15px' : '17px'
    }
}));

class AgentsIndex extends Component {
    render() {
        const { classes } = this.props;
        const button = 'Receba sua cotacao em 24H';
        return (
            <div>
                <AgentsList />

                <div className={classes.bg}>
                    <div className="container padding-2x">
                        <Typography type="body1" paragraph>
                            Quer uma proposta para sua viagem ágil, humanizada e gratuita?
                        </Typography>
                        <Link to="/cotacao">
                            <Button raised color="primary" className={classes.button}>
                                {button}
                                <FontAwesome name='long-arrow-right' style={{ fontSize: 25, paddingLeft: 20 }} />
                            </Button>
                        </Link>
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
