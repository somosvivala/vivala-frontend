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
                    Seja um associado do <strong>fundo social</strong> de investimento e ajude o <strong>Instituto Vivalá</strong> a <strong>aumentar seu impacto</strong>
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
