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
                        <h1>Turismo Sustentável no Brasil</h1>
                        <h2 className="subtitulo-principal">Black Month: Expedições com até R$700 de desconto</h2>
                    </div>
                </div>
                <div className="inner-wrapper clearfix">
                    <Link to="/volunturismo">
                        <div className={this.state.classBig} id="volunturismo" style={{ backgroundImage: `url(${fotoVolunturismo})` }}>
                            <div className="meta-content">
                                <Typography className="title">Agenda 2021</Typography>
                                <Typography className="subtitle">Expedições com profundo contato com a natureza, população local e voluntariado.</Typography>
                            </div>
                        </div>
                    </Link>
                    <a href="https://experiencias.vivala.com.br/rionegrojaneiro21">
                        <div className={this.state.classNormal} id="ecoturismo" style={{ backgroundImage: `url(${fotoEcoturismo})` }}>
                            <div className="meta-content">
                                <Typography className="title">AMAZÔNIA - RIO NEGRO</Typography>
                                <Typography className="subtitle-home-servicos">Janeiro 2021 - Até 20% off</Typography>
                            </div>
                        </div>
                    </a>
                    <a href="https://experiencias.vivala.com.br/carnaval-tapajos-2021">
                        <div className={this.state.classNormal} id="imersoes" style={{ backgroundImage: `url(${fotoImersoes})` }}>
                            <div className="meta-content">
                                <Typography className="title">AMAZÔNIA - RIO TAPAJÓS</Typography>
                                <Typography className="subtitle-home-servicos">Carnaval 2021 - Até 20% off</Typography>
                            </div>
                        </div>
                    </a>
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
