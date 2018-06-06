import React, { Component } from 'react';
import Typography from 'material-ui/Typography';

class HighlightSection extends Component
{
    render() {
        return (
            <div className="container frase-destaque">
                <Typography type="title" color="inherit" className="frase-destaque-text">
                    Programas de capacitação profissional, mentoria e acesso à capital para microempreendedores brasileiros
                </Typography>
            </div>
        );
    }
}

export default HighlightSection;
