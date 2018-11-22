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
                        <h2><span className="viaje">Black Week Vivalá: 15% off para viagens em grupo</span></h2>
                    </div>
                </div>
                <div className="inner-wrapper clearfix">
                    <Link to="/volunturismo">
                        <div className={this.state.classBig} id="volunturismo" style={{ backgroundImage: `url(${fotoVolunturismo})` }}>
                            <div className="meta-content">
                                <Typography className="title">Volunturismo em grupo</Typography>
                                <Typography className="subtitle">Expedições em grupo de turismo e voluntariado em finais de semana e feriados</Typography>
                            </div>
                        </div>
                    </Link>
                    <Link to="/ecoturismo">
                        <div className={this.state.classNormal} id="ecoturismo" style={{ backgroundImage: `url(${fotoEcoturismo})` }}>
                            <div className="meta-content">
                                <Typography className="title">Ecoturismo em grupo</Typography>
                                <Typography className="subtitle-home-servicos">Experiências em grupo de profunda conexão com a natureza em finais de semana e feriados</Typography>
                            </div>
                        </div>
                    </Link>
                    <Link to="/imersoes">
                        <div className={this.state.classNormal} id="imersoes" style={{ backgroundImage: `url(${fotoImersoes})` }}>
                            <div className="meta-content">
                                <Typography className="title">Ecoturismo privado</Typography>
                                <Typography className="subtitle-home-servicos">Experiências individuais ou em pequenos grupos de profunda conexão com a natureza para ir quando quiser.</Typography>
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
