import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import {Link} from 'react-router-dom';
import Button from 'material-ui/Button';

class AssociadoSection extends Component
{
    render() {
        return (
            <div className="associado-container">
                <Typography type="title" color="inherit" className="seje-um-associado-frase">
                    Seja um associado do <strong>Fundo Social</strong> de Investimento e ajude pequenos empreendedores em comunidades carentes a prosperarem em seus negócios
                </Typography>
                {/* <Button variant="raised" className="seje-um-associado-btn" component={Link} to="/"> */}
                <Button className="seje-um-associado-btn" component={Link} to="/instituto/sobre">
                    Saiba mais
                </Button>
            </div>
        );
    }
}

export default AssociadoSection;
