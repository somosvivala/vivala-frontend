import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import AgentsContact from './contact';
import Slider from 'react-slick';
import {Image} from 'cloudinary-react';

const styleSheet = createStyleSheet('AgentsBonus', theme => ({
    bg: {
        backgroundColor: theme.defaultDarken.color
    },
    subheading: {
        textTransform: 'uppercase'
    },
    slider: {
        width: '90%',
        margin: '20px auto'
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.default.color,
        padding: 20,
        margin: 10,
        textAlign: 'center',
        height: 150,
    },
    img: {
        marginTop: 'auto'
    },
}));

class AgentsBonus extends Component {
    render() {
        const { classes } = this.props;
        const settings = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 480, settings: { slidesToShow: 1 } },
            ],
            adaptativeHeight: true
        }

        return (
            <div className={classes.bg}>
                <div className="container padding">
                    <Typography type="title" align="center" className={classes.subheading} gutterBottom>
                        Benefícios
                    </Typography>
                    <Typography type="body1" align="center" gutterBottom>
                        Exlusivos para agentes vivalá
                    </Typography>

                    <Slider {...settings} className={classes.slider}>
                        <div>
                            <div className={classes.item}>
                                <Typography type="subheading">
                                    <strong>Treinamento</strong>
                                </Typography>
                                <Image
                                    cloudName="vivala"
                                    publicId="agentes_icone_1.png"
                                    width={120}
                                    height={120}
                                    crop="fit" alt="Ícone - Treinamento"
                                    className={classes.img}
                                />
                            </div>
                        </div>
                        <div>
                            <div className={classes.item}>
                                <Typography type="subheading">
                                    <strong>Melhores valores de mercado</strong>
                                </Typography>
                                <Image
                                    cloudName="vivala"
                                    publicId="agentes_icone_2.png"
                                    width={120}
                                    height={120}
                                    crop="fit" alt="Ícone - Melhor Valor"
                                    className={classes.img}
                                />
                            </div>
                        </div>
                        <div>
                            <div className={classes.item}>
                                <Typography type="subheading">
                                    <strong>Material de divulgação diário</strong>
                                </Typography>
                                <Image
                                    cloudName="vivala"
                                    publicId="agentes_icone_6.png"
                                    width={120}
                                    height={120}
                                    crop="scale" alt="Ícone - Melhor Controle"
                                    className={classes.img}
                                />
                            </div>
                        </div>
                        <div>
                            <div className={classes.item}>
                                <Typography type="subheading">
                                    <strong>Suporte para vendas e pós vendas</strong>
                                </Typography>
                                <Image
                                    cloudName="vivala"
                                    publicId="agentes_icone_3.png"
                                    width={120}
                                    height={120}
                                    crop="fit" alt="Ícone - Melhor Controle"
                                    className={classes.img}
                                />
                            </div>
                        </div>
                        <div>
                            <div className={classes.item}>
                                <Typography type="subheading">
                                    <strong>Operação global para mais de 160 países</strong>
                                </Typography>
                                <Image
                                    cloudName="vivala"
                                    publicId="agentes_icone_4.png"
                                    width={120}
                                    height={120}
                                    crop="fit" alt="Ícone - Operação Global"
                                    className={classes.img}
                                />
                            </div>
                        </div>
                        <div>
                            <div className={classes.item}>
                                <Typography type="subheading">
                                    <strong>Controle de comissões</strong>
                                </Typography>
                                <Image
                                    cloudName="vivala"
                                    publicId="agentes_icone_5.png"
                                    width={120}
                                    height={120}
                                    crop="fit" alt="Ícone - Controle de comissões"
                                    className={classes.img}
                                />
                            </div>
                        </div>
                    </Slider>

                    <AgentsContact />
                </div>
            </div>
        );
    }
}

AgentsBonus.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(AgentsBonus);