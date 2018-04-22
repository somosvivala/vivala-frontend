import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import List, { ListItem } from 'material-ui/List';
import {Link} from 'react-router-dom';
import PacotesCompletosIcon from '../../../assets/svg/icons/pacotes.svg';
import HoteisIcon from '../../../assets/svg/icons/hoteis.svg';
import VoosIcon from '../../../assets/svg/icons/voos.svg';
import AviaozinhoPng from '../../../assets/images/home/airplane.png';

class CotacaoSection extends Component
{
    render() {
        return (
            <div className="container cotacoes">
                <div className="row box-frase">
                    <div className="frase-destaque">
                        {/*<img src={FraseConhecaPng} alt="conheça mais de 160 países"/>*/}
                        <Typography type="title" color="inherit" className="frase-destaque-text"><span className="conheca">Conheça</span> <span className="plus">+</span> de <span className="number">160</span> países</Typography>
                        <img src={AviaozinhoPng} id="aviaozinho" alt="aviãozinho"/>
                    </div>
                </div>
                <div className="row box-container">
                    <div className="orange-box left">
                        <div className="box-header">
                            <a>Pesquise sua viagem sozinho</a>
                        </div>
                        <div className="box-content">
                            <List className="do-it-yourself">
                                <ListItem button component="a" rel="noopener noreferrer" target="_blank" href="https://www.e-agencias.com.br/vivala/home/packages" className="diy-item">
                                    <img src={PacotesCompletosIcon} className="diy-item-icon" alt="ícone de pacotes"/>
                                    <Typography type="subheading" color="inherit" className="diy-item-text">Pacotes completos</Typography>
                                </ListItem>
                                <ListItem button component="a" rel="noopener noreferrer" target="_blank" href="https://www.e-agencias.com.br/vivala/home/hotels" className="diy-item">
                                    <img src={HoteisIcon} className="diy-item-icon" alt="ícone de hotéis"/>
                                    <Typography type="subheading" color="inherit" className="diy-item-text">Hotéis</Typography>
                                </ListItem>
                                <ListItem button component="a" rel="noopener noreferrer" target="_blank" href="https://www.e-agencias.com.br/vivala/home/flights" className="diy-item">
                                    <img src={VoosIcon} className="diy-item-icon" alt="ícone de vôos"/>
                                    <Typography type="subheading" color="inherit" className="diy-item-text">Vôos</Typography>
                                </ListItem>
                            </List>
                        </div>
                    </div>
                    <div className="optional-ou">
                        <Typography type="body2" color="inherit" className="optional-ou-text">Ou</Typography>
                    </div>
                    <div className="orange-box right">
                        <div className="box-header has-link">
                            <Link to="/cotacao">
                                Receba sua cotação em 24 horas
                            </Link>
                        </div>
                        <div className="box-content">
                            <List className="let-others-do-it-for-you">
                                <ListItem button component="a" rel="noopener noreferrer" target="_blank" href="https://www.e-agencias.com.br/vivala/home/packages" className="lodify-item">
                                    <Link to="/cotacao">
                                        <Typography type="subheading" color="inherit" className="lodify-item-text">E seja atendido <strong>de forma ágil,<br /> humanizada e gratuita</strong></Typography>
                                    </Link>
                                </ListItem>
                            </List>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CotacaoSection;
