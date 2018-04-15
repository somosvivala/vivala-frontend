import React, { Component } from 'react';
import Typography from 'material-ui/Typography';

class HighlightSection extends Component
{
    render() {
        return (
            <div className="container frase-destaque">
                <Typography type="title" color="inherit" className="frase-destaque-text">
                    Transformando a realidade de pessoas e comunidades
                </Typography>
            </div>
        );
    }
}

export default HighlightSection;
