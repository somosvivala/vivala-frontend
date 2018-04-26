import React, {Component} from 'react';
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
