import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import {connect} from 'react-redux';
import {requestEcoturismos} from '../../../actions/ecoturismo';
import EcoturismoHeader from "./header";
import ServicosItems from '../../servicos-items';
import BadRequestError from '../../errors/404';
import LoadingInfinite from '../../loadings/infinite';
import Typography from "material-ui/Typography";

class EcoturismoIndex extends Component {
    componentWillMount() {
        this.props.requestEcoturismos();
    }

    render() {
        const { video, items, fetching, error } = this.props;

        if (error) {
            return <BadRequestError />;
        }

        if (fetching) {
            return <LoadingInfinite />;
        }

        document.title = "Ecoturismo | Vivalá"

        return (
            <div className="content-wrapper">
                <Helmet>
                    <title>Ecoturismo | Vivalá</title>
                    <meta name="theme-color" content="#ED6D2C" />
                    <meta name="description" content="Viagens com uma Profunda Conexão com a Natureza, que Incentiva a Busca por Bem Estar e a Formação de uma Consciência Sustentável em Relação ao Meio Ambiente. " />

                    <meta property="og:locale" content="pt_BR" />
                    <meta property="og:url" content={this.props.location.pathname} />
                    <meta property="og:title" content="Vivalá - Operadora de Volunturismo e Ecoturismo no Brasil e Agência Global de Viagens" />
                    <meta property="og:site_name" content="Vivalá" />
                    <meta property="og:description" content="Viaje pelo Brasil com roteiros de Turismo e Voluntariado, Experiências de Conexão com a Natureza e Lugares Incríveis para ir quando quiser." />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="https://res.cloudinary.com/vivala/image/upload/v1528403873/home_volunturismo_1527197447_vasb9e.jpg" />
                    <meta property="og:image:type" content="image/jpg" />
                    <meta property="og:image:width" content="1621" />
                    <meta property="og:image:height" content="788" />
                </Helmet>
                <div className="servicos-page container">
                    <EcoturismoHeader videoId={video} />
                    <div className="frase-impacto">
                        <Typography className="frase-impacto-title">
                            Encontre beleza e equilíbrio através do contato com a natureza no Brasil
                        </Typography>
                    </div>
                    <div className="servicos-items container">
                        { items.length > 0 && <ServicosItems items={items} key="ecoturismo-items" /> }
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        fetching: state.ecoturismo.fetching,
        error: state.ecoturismo.error,
        items: state.ecoturismo.items,
        video: state.ecoturismo.video
    }
}

export default connect(mapStateToProps, {requestEcoturismos})(EcoturismoIndex);
