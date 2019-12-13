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
                        Experiências únicas de troca, aprendizado e impacto social através do Volunturismo
                    </Typography>

                    <div className="the-slider-container">
                        <Slider {...settings} className="the-slider">
                            <div>
                                <div className="slider-item">
                                    <div className="item-meta">
                                        <Typography type="subheading" className="title">
                                            Aprendizado através da experiência
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
                                        <Typography type="body1">Construções de novas habilidades com a mão na massa</Typography>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="slider-item">
                                    <div className="item-meta">
                                        <Typography type="subheading" className="title">
                                            Projetos personalizados
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
                                        <Typography type="body1">Expedições que se adequam a missão de sua organização</Typography>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="slider-item">
                                    <div className="item-meta">
                                        <Typography type="subheading" className="title">
                                            Acompanhamento Vivalá
                                        </Typography>
                                        <div className="img-container">
                                            <Image
                                                cloudName="vivala"
                                                publicId="corporativo_icone_1.png"
                                                width={120}
                                                height={120}
                                                crop="fit" alt="Ícone - Acompanhamento Vivalá"
                                                className=""
                                            />
                                        </div>
                                        <Typography type="body1">Líderes de projeto sempre presentes na coordenação e facilitação do voluntariado</Typography>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="slider-item">
                                    <div className="item-meta">
                                        <Typography type="subheading" className="title">
                                            Impacto social profundo
                                        </Typography>
                                        <div className="img-container">
                                            <Image
                                                cloudName="vivala"
                                                publicId="corporativo_icone_5.png"
                                                width={120}
                                                height={120}
                                                crop="fit" alt="Ícone - Impacto Social Profundo"
                                                className=""
                                            />
                                        </div>
                                        <Typography type="body1">Injeção de capital e capacitação profissional para quem mais precisa</Typography>
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
