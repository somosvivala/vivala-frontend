import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Servicos extends Component {
    constructor(props) {
        super(props);

        var Big, Normal;

        if ( window.innerWidth > window.innerHeight ) {
            Big = 'item big width';
            Normal = 'item width';
        } else {
            Big = 'item big height';
            Normal = 'item height';
        }

        this.state = {
            classBig: Big,
            classNormal: Normal
        }
    }

    render() {
        const { fotoVolunturismo, fotoEcoturismo, fotoImersoes } = this.props;

        return (
            <div className="container servicos">
                <div className="row">
                    <div className="section-header">
                        <h2><span className="viaje">Viaje pelo Brasil</span> <span className="roteiros">com roteiros especiais</span></h2>
                    </div>
                </div>
                <div className="inner-wrapper clearfix">
                    <Link to="/volunturismo">
                        <div className={this.state.classBig} id="volunturismo" style={{ backgroundImage: `url(${fotoVolunturismo})` }}>
                            <div className="meta-content">
                                <Typography className="title">Volunturismo</Typography>
                                <Typography className="subtitle">Expedições de turismo e voluntariado</Typography>
                            </div>
                        </div>
                    </Link>
                    <Link to="/ecoturismo">
                        <div className={this.state.classNormal} id="ecoturismo" style={{ backgroundImage: `url(${fotoEcoturismo})` }}>
                            <div className="meta-content">
                                <Typography className="title">Ecoturismo</Typography>
                                <Typography className="subtitle">Experiências de profunda conexão com a natureza</Typography>
                            </div>
                        </div>
                    </Link>
                    <Link to="/imersoes">
                        <div className={this.state.classNormal} id="imersoes" style={{ backgroundImage: `url(${fotoImersoes})` }}>
                            <div className="meta-content">
                                <Typography className="title">Imersões</Typography>
                                <Typography className="subtitle">Escolha o destino preferido, a melhor data e viva experiências locais</Typography>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

Servicos.propTypes = {
    classes: PropTypes.object.isRequired,
    fotoVolunturismo: PropTypes.string,
    fotoEcoturismo: PropTypes.string,
    fotoImersoes: PropTypes.string,
};

export default Servicos;
