import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import CorporativeContact from './contact';
import Slider from 'react-slick';
import {Image} from 'cloudinary-react';
import {PrevArrow, NextArrow} from '../../arrows';

class CorporativeBonus extends Component {
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
                        Vantagens oferecidas para nossos <br/> clientes corporativos
                    </Typography>

                    <div className="the-slider-container">
                        <Slider {...settings} className="the-slider">
                            <div>
                                <div className="slider-item">
                                    <div className="item-meta">
                                        <Typography type="subheading" className="title">
                                            Reduza Custos
                                        </Typography>
                                        <div className="img-container">
                                            <Image
                                                cloudName="vivala"
                                                publicId="corporativo_icone_2.png"
                                                width={120}
                                                height={120}
                                                crop="fit" alt="Ícone - Reduza Custos"
                                                className=""
                                            />
                                        </div>
                                        <Typography type="body1">Os melhores preços do mercado</Typography>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="slider-item">
                                    <div className="item-meta">
                                        <Typography type="subheading" className="title">
                                            Economize Tempo
                                        </Typography>
                                        <div className="img-container">
                                            <Image
                                                cloudName="vivala"
                                                publicId="corporativo_icone_3.png"
                                                width={120}
                                                height={100}
                                                crop="scale" alt="Ícone - Economize Tempo"
                                                className=""
                                            />
                                        </div>
                                        <Typography type="body1">Seja atendido de forma ágil e personalizada</Typography>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="slider-item">
                                    <div className="item-meta">
                                        <Typography type="subheading" className="title">
                                            Campanhas de Incentivo
                                        </Typography>
                                        <div className="img-container">
                                            <Image
                                                cloudName="vivala"
                                                publicId="corporativo_icone_4.png"
                                                width={120}
                                                height={120}
                                                crop="fit" alt="Ícone - Campanhas de Incentivo"
                                                className=""
                                            />
                                        </div>
                                        <Typography type="body1">Realize campanhas atreladas as suas metas</Typography>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="slider-item">
                                    <div className="item-meta">
                                        <Typography type="subheading" className="title">
                                            Melhore o controle
                                        </Typography>
                                        <div className="img-container">
                                            <Image
                                                cloudName="vivala"
                                                publicId="corporativo_icone_1.png"
                                                width={120}
                                                height={120}
                                                crop="fit" alt="Ícone - Melhore o Controle"
                                                className=""
                                            />
                                        </div>
                                        <Typography type="body1">Receba relatórios mensais com seus gastos</Typography>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="slider-item">
                                    <div className="item-meta">
                                        <Typography type="subheading" className="title">
                                            Valorize seus funcionários
                                        </Typography>
                                        <div className="img-container">
                                            <Image
                                                cloudName="vivala"
                                                publicId="corporativo_icone_5.png"
                                                width={120}
                                                height={120}
                                                crop="fit" alt="Ícone - Valorize seus funcionários"
                                                className=""
                                            />
                                        </div>
                                        <Typography type="body1">Atendimento e descontos em sua viagem de lazer</Typography>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>

                    <CorporativeContact />
                </div>
            </div>
        );
    }
}

CorporativeBonus.propTypes = {
    classes: PropTypes.object.isRequired
};

export default CorporativeBonus;
