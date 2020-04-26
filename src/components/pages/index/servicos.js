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
                        <h1>Volunturismo no Brasil</h1>
                        <h2 className="subtitulo-principal">Descontos  de R$ 145 até R$ 690 nas expedições de setembro a novembro de 2020</h2>
                    </div>
                </div>
                <div className="inner-wrapper clearfix">
                    <Link to="/volunturismo">
                        <div className={this.state.classBig} id="volunturismo" style={{ backgroundImage: `url(${fotoVolunturismo})` }}>
                            <div className="meta-content">
                                <Typography className="title">Volunturismo no Brasil - Agenda 2020</Typography>
                                <Typography className="subtitle">Expedições de base comunitária e voluntariado em feriados </Typography>
                            </div>
                        </div>
                    </Link>
                    <a href="https://experiencias.vivala.com.br/virada20-21">
                        <div className={this.state.classNormal} id="ecoturismo" style={{ backgroundImage: `url(${fotoEcoturismo})` }}>
                            <div className="meta-content">
                                <Typography className="title">Amazônia - Rio Negro</Typography>
                                <Typography className="subtitle-home-servicos">Ano Novo - 2020/2021 - 20% OFF</Typography>
                            </div>
                        </div>
                    </a>
                    <a href="https://experiencias.vivala.com.br/viradatapajos2021">
                        <div className={this.state.classNormal} id="imersoes" style={{ backgroundImage: `url(${fotoImersoes})` }}>
                            <div className="meta-content">
                                <Typography className="title">Amazônia - Rio Tapajós</Typography>
                                <Typography className="subtitle-home-servicos">Ano Novo - 2020/2021 - 20% OFF</Typography>
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
