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
                    Seja um <strong>associado</strong> ao fundo de <strong>investimento social</strong> e invista em <strong>microempreendedores brasileiros</strong>
                </Typography>
                {/* <Button variant="raised" className="seje-um-associado-btn" component={Link} to="/"> */}
                <Button className="seje-um-associado-btn" component={Link} to="/">
                    Saiba mais
                </Button>
            </div>
        );
    }
}

export default AssociadoSection;
