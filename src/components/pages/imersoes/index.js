import React, {Component} from 'react';
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
        const { items, fetching, error } = this.props;

        if (error) {
            return <BadRequestError />;
        }

        if (fetching) {
            return <LoadingInfinite />;
        }

        document.title = "Imersao | Vivalá"

        return (
            <div className="content-wrapper">
                <div className="servicos-page container">
                    <ImersaoHeader />
                    <div className="frase-impacto">
                        <Typography className="frase-impacto-title">
                            Viva o melhor de paraísos brasileiros nas datas que quiser!
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
        items: state.imersoes.items
    }
}

export default connect(mapStateToProps, {requestImersoes})(ImersaoIndex);
