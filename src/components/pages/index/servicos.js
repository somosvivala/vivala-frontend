import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import {Image} from 'cloudinary-react';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class Servicos extends Component {
   render() {
        const { classes, title, button } = this.props;

        return (
            // <Grid container gutter={0} className="container">
            //   <Grid item xs={12} className="section-header">
            //     <h2>{"Viaje pelo Brasil com roteiros especiais"/*this.props.title*/}</h2>
            //   </Grid>
            // </Grid>
            <div className="container servicos">
                <div className="row">
                    <div className="section-header">
                        <h2>Viaje pelo Brasil com roteiros especiais</h2>
                    </div>
                </div>
                <div className="inner-wrapper clearfix">
                    <a href="">
                        <div className="item big volunturismo" id="volunturismo">
                            <div className="meta-content">
                                <h3 className="title">Volunturismo</h3>
                                <p className="subtitle">Expedições de turismo e voluntariado</p>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="item ecoturismo" id="ecoturismo">
                            <div className="meta-content">
                                <h3 className="title">Ecoturismo</h3>
                                <p className="subtitle">Experiências de conexão com a natureza</p>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="item imersoes" id="imersoes">
                            <div className="meta-content">
                                <h3 className="title">Imersões</h3>
                                <p className="subtitle">Expedições de turismo e voluntariado</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Servicos;
