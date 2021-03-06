import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import {connect} from 'react-redux';
import {requestImersoes} from '../../../actions/imersao';
import ImersaoHeader from "./header";
import ServicosItems from '../../servicos-items';
import BadRequestError from '../../errors/404';
import LoadingInfinite from '../../loadings/infinite';
import Typography from "material-ui/Typography";

class ImersaoIndex extends Component {
    componentWillMount() {
        this.props.requestImersoes();
    }

    render() {
        const { video, items, fetching, error } = this.props;

        if (error) {
            return <BadRequestError />;
        }

        if (fetching) {
            return <LoadingInfinite />;
        }

        document.title = "Imersao | Vivalá"

        return (
            <div className="content-wrapper">
                <Helmet>
                    <title>Imersões</title>
                    <meta name="theme-color" content="#ED6D2C" />
                    <meta name="description" content="Viva o Melhor de Paraísos Brasileiros nas Datas que Quiser!" />

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
                    <ImersaoHeader videoId={video} />
                    <div className="frase-impacto">
                        <Typography className="frase-impacto-title">
                            Escolha seu destino, vá sozinho ou com alguns amigos e tenha um contato profundo com a natureza no Brasil 
                        </Typography>
                    </div>
                    <div className="servicos-items container">
                        { items.length > 0 && <ServicosItems items={items} key="imersoes-items" /> }
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        fetching: state.imersoes.fetching,
        error: state.imersoes.error,
        items: state.imersoes.items,
        video: state.imersoes.video
    }
}

export default connect(mapStateToProps, {requestImersoes})(ImersaoIndex);
