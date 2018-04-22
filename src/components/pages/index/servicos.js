import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import {Image} from 'cloudinary-react';
import {Link} from 'react-router-dom';

class Servicos extends Component {
   render() {
        return (
            <div className="container servicos">
                <div className="row">
                    <div className="section-header">
                        <h2><span className="viaje">Viaje pelo Brasil</span> <span className="roteiros">com roteiros especiais</span></h2>
                    </div>
                </div>
                <div className="inner-wrapper clearfix">
                    <Link to="/volunturismo">
                        <div className="item big volunturismo" id="volunturismo">
                            <div className="meta-content">
                                <Typography variant="title" className="title">Volunturismo</Typography>
                                <Typography variant="subheading" className="subtitle">Expedições de turismo e voluntariado</Typography>
                            </div>
                        </div>
                    </Link>
                    <Link to="/ecoturismo">
                        <div className="item ecoturismo" id="ecoturismo">
                            <div className="meta-content">
                                <Typography variant="title" className="title">Ecoturismo</Typography>
                                <Typography variant="subheading" className="subtitle">Experiências de conexão com a natureza</Typography>
                            </div>
                        </div>
                    </Link>
                    <Link to="/imersoes">
                        <div className="item imersoes" id="imersoes">
                            <div className="meta-content">
                                <Typography variant="title" className="title">Imersões</Typography>
                                <Typography variant="subheading" className="subtitle">Roteiros incríveis para ir quando quiser</Typography>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Servicos;
