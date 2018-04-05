import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import {Image} from 'cloudinary-react';
import PacotesCompletosIcon from '../../../assets/svg/icons/pacotes.svg';
import HoteisIcon from '../../../assets/svg/icons/hoteis.svg';
import VoosIcon from '../../../assets/svg/icons/voos.svg';
import FraseConhecaPng from '../../../assets/images/home/Frase-aviso-conheca.png';
import AviaozinhoPng from '../../../assets/images/home/airplane.png';

const styleSheet = createStyleSheet('ImageMessage', theme => ({
    gridContainerBack: {
        backgroundColor: '#F7F7F7',
        width: '100%',
    },
    gridContainer: {
        margin: 0,
        maxWidth: '100%'
    },
    gridItem: {
        right: 20,
        padding: '0 !important',
        position: 'absolute',
        fontSize: '20px !important',
        maxWidth: window.screen.width < 900 ? '160px' : 'default',
    },
    massageImage: {
        marginLeft: window.screen.width < 900 ? '-40px' : '',
        objectFit: 'cover',
        height: window.screen.width < 900 ? '190px' : '400px',
    }
}));

class CotacaoSection extends Component
{
    render() {
        const { classes, text } = this.props;
        return (
            <div className="container cotacoes">
                <div className="row box-frase">
                    <div className="frase-destaque">
                        <img src={FraseConhecaPng} alt="conheça mais de 160 países"/>
                        <img src={AviaozinhoPng} id="aviaozinho" alt="aviãozinho"/>
                    </div>
                </div>
                <div className="row box-container">
                    <div className="orange-box left">
                        <div className="box-header">
                            <a>Pesquise sua viagem sozinho</a>
                        </div>
                        <div className="box-content">
                            <ul>
                                <li>
                                    <img src={PacotesCompletosIcon} className="cotacao-icon" alt="ícone de pacotes"/>
                                    <span>Pacotes completos</span>
                                </li>
                                <li>
                                    <img src={HoteisIcon} className="cotacao-icon" alt="ícone de hotéis"/>
                                    <span>Hotéis</span>
                                </li>
                                <li>
                                    <img src={VoosIcon} className="cotacao-icon" alt="ícone de vôos"/>
                                    <span>Vôos</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="orange-box right">
                        <div className="box-header">
                            <a>Receba sua cotação em 24 horas</a>
                        </div>
                        <div className="box-content">
                            <p>E seja atendido <strong>de forma ágil, humanizada e gratuita</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CotacaoSection;
