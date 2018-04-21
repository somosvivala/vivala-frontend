import React, {Component} from 'react';
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
        const { items, fetching, error } = this.props;

        if (error) {
            return <BadRequestError />;
        }

        if (fetching) {
            return <LoadingInfinite />;
        }

        return (
            <div className="content-wrapper">
                <div className="servicos-page container">
                    <EcoturismoHeader />
                    <div className="frase-impacto">
                        <Typography className="frase-impacto-title">
                            Pensei em add uma frase chamativa aqui, talvez explicando um pouco do serviço
                        </Typography>
                    </div>
                    <div className="servicos-items container">
                        { /* items.length > 0 && <ServicosItems servicos={items} key="ecoturismo-items" /> */ }
                        <ServicosItems items={items} key="ecoturismo-items" />
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
        items: state.ecoturismo.items
    }
}

export default connect(mapStateToProps, {requestEcoturismos})(EcoturismoIndex);
