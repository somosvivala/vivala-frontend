import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import {connect} from 'react-redux';
import {requestVolunturismos} from '../../../actions/volunturismo';
import VolunturismoHeader from "./header";
import ServicosItems from '../../servicos-items';
import BadRequestError from '../../errors/404';
import LoadingInfinite from '../../loadings/infinite';
import Typography from "material-ui/Typography";

class VolunturismoIndex extends Component {
    componentWillMount() {
        this.props.requestVolunturismos();
    }

    render() {
        const { items, fetching, error } = this.props;

        if (error) {
            return <BadRequestError />;
        }

        if (fetching) {
            return <LoadingInfinite />;
        }

        document.title = "Volunturismo | Vivalá"

        return (
            <div className="content-wrapper">
                <Helmet>
                    <title>Volunturismo | Vivalá</title>
                    <meta name="theme-color" content="#ED6D2C" />
                    <meta name="description" content="Viagens para Conhecer e Interagir com a Natureza e Cultura Local, Realizando um Trabalho Voluntário que visa a Capacitação Profissional de Pequenos Empreendedores." />

                    <meta property="og:locale" content="pt_BR" />
                    <meta property="og:url" content={this.props.location.pathname} />
                    <meta property="og:title" content="Vivalá - Operadora de Volunturismo e Ecoturismo no Brasil e Agência Global de Viagens" />
                    <meta property="og:site_name" content="Vivalá" />
                    <meta property="og:description" content="Viaje pelo Brasil com roteiros de Turismo e Voluntariado, Experiências de Conexão com a Natureza e Lugares Incríveis para ir quando quiser." />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="https://res.cloudinary.com/vivala/image/upload/imagem_home_1524934756" />
                    <meta property="og:image:type" content="image/jpg" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                </Helmet>
                <div className="servicos-page container">
                    <VolunturismoHeader />
                    <div className="frase-impacto">
                        <Typography className="frase-impacto-title">
                            Faça voluntariado ajudando no desenvolvimento de microempreendedores brasileiros
                        </Typography>
                    </div>
                    <div className="servicos-items container">
                        { items.length > 0 && <ServicosItems items={items} key="volunturismo-items" /> }
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        fetching: state.volunturismo.fetching,
        error: state.volunturismo.error,
        items: state.volunturismo.items
    }
}

export default connect(mapStateToProps, {requestVolunturismos})(VolunturismoIndex);
