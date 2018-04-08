import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import List, { ListItem } from 'material-ui/List';

class HighlightSection extends Component
{
    render() {
        const { classes, text } = this.props;
        return (
            <div className="container frase-destaque">
                <Typography type="title" color="inherit" className="frase-destaque-text">
                    Transformando a realidade
                </Typography>
                <Typography type="title" color="inherit" className="frase-destaque-text">
                    de pessoas e comunidades
                </Typography>
            </div>
        );
    }
}

export default HighlightSection;
