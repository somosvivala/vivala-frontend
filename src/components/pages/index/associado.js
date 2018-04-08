import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import List, { ListItem } from 'material-ui/List';
import {Image} from 'cloudinary-react';
import {Link} from 'react-router-dom';
import Button from 'material-ui/Button';

class AssociadoSection extends Component
{
    render() {
        const { classes, text } = this.props;
        return (
            <div className="associado-container">
                <Typography type="title" color="inherit" className="seje-um-associado-frase">
                    Seja um <strong>associado</strong> ao fundo de <strong>investimento social</strong> e invista em <strong>microempreendedores brasileiros</strong>
                </Typography>
                {/* <Button variant="raised" className="seje-um-associado-btn" component={Link} to="/"> */}
                <Button variant="raised" className="seje-um-associado-btn" component={Link} to="/">
                    Saiba mais
                </Button>
            </div>
        );
    }
}

export default AssociadoSection;
