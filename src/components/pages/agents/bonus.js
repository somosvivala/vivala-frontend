import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import AgentsContact from './contact';
import Slider from 'react-slick';
import {Image} from 'cloudinary-react';
import {PrevArrow, NextArrow} from '../../arrows';

class AgentsBonus extends Component {
    render() {
        const { classes } = this.props;

        var numofSlides = 5;
        if ( window.screen.width < 420 ) {
            numofSlides = 1;
        } else if ( window.screen.width < 769 ) {
            numofSlides = 2;
        } else if ( window.screen.width < 1441 ) {
            numofSlides = 3;
        }

        const settings = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: numofSlides,
            slidesToScroll: 1,
            adaptativeHeight: true,
            arrows: true,
            prevArrow: <PrevArrow orange />,
            nextArrow: <NextArrow orange />,
        }

        return (
            <div className="bonus">
                <div className="container padding">
                    <Typography type="title" align="center" className="section-title" gutterBottom>
                        Benefícios
                    </Typography>
                    <Typography type="body1" align="center" className="section-subtitle" gutterBottom>
                        Exclusivos para agentes de viagens Vivalá
                    </Typography>

                    <div className="the-slider-container">
                        <Slider {...settings} className="the-slider">
                            <div>
                                <div className="slider-item">
                                    <div className="item-meta">
                                        <Typography type="subheading" className="title">
                                            Treinamento
                                        </Typography>
                                        <div className="img-container">
                                            <Image
                                                cloudName="vivala"
                                                publicId="agentes_treinamento_2.png"
                                                width={120}
                                                height={120}
                                                crop="fit" alt="Ícone - Treinamento"
                                                className=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="slider-item">
                                    <div className="item-meta">
                                        <Typography type="subheading" className="title">
                                            Melhores valores de mercado
                                        </Typography>
                                        <div className="img-container">
                                            <Image
                                                cloudName="vivala"
                                                publicId="agentes_icone_2.png"
                                                width={120}
                                                height={120}
                                                crop="fit" alt="Ícone - Melhor Valor"
                                                className=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="slider-item">
                                    <div className="item-meta">
                                        <Typography type="subheading" className="title">
                                            Material de divulgação diário
                                        </Typography>
                                        <div className="img-container">
                                            <Image
                                                cloudName="vivala"
                                                publicId="agentes_icone_6.png"
                                                width={120}
                                                height={120}
                                                crop="scale" alt="Ícone - Melhor Controle"
                                                className=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="slider-item">
                                    <div className="item-meta">
                                        <div className="item-meta">
                                            <Typography type="subheading" className="title">
                                                Suporte para vendas e pós vendas
                                            </Typography>
                                            <div className="img-container">
                                                <Image
                                                    cloudName="vivala"
                                                    publicId="agentes_icone_3.png"
                                                    width={120}
                                                    height={120}
                                                    crop="fit" alt="Ícone - Melhor Controle"
                                                    className=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="slider-item">
                                    <div className="item-meta">
                                        <Typography type="subheading" className="title">
                                            Operação global para mais de 160 países
                                        </Typography>
                                        <div className="img-container">
                                            <Image
                                                cloudName="vivala"
                                                publicId="agentes_operacao_global_2.png"
                                                width={120}
                                                height={120}
                                                crop="fit" alt="Ícone - Operação Global"
                                                className=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="slider-item">
                                    <div className="item-meta">
                                        <Typography type="subheading" className="title">
                                            Controle de comissões
                                        </Typography>
                                        <div className="img-container">
                                            <Image
                                                cloudName="vivala"
                                                publicId="agentes_controle_comissoes.png"
                                                width={120}
                                                height={120}
                                                crop="fit" alt="Ícone - Controle de comissões"
                                                className=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>

                    <AgentsContact />
                </div>
            </div>
        );
    }
}

AgentsBonus.propTypes = {
    classes: PropTypes.object.isRequired
};

export default AgentsBonus;
