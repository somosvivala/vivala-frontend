import React, {Component} from 'react';
import AgentsList from './list';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

class AgentsIndex extends Component {
    render() {
        return (
            <div>
                <AgentsList />

                <div style={{ backgroundColor: '#efefef', textAlign: 'center'}}>
                    <div className="container padding">
                        <Typography type="body1" paragraph>
                            Quer uma proposta para sua viagem ágil, humanizada e gratuita?
                        </Typography>
                        <Button raised color="primary" href="#">
                            Receba sua cotação em até 24 horas
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AgentsIndex;
