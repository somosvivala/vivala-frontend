import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import AgentsContact from './contact';
import Slider from 'react-slick';
import {Image} from 'cloudinary-react';

const styleSheet = createStyleSheet('AgentsBonus', theme => ({
    bg: {
        backgroundColor: '#dddddd'
    },
    subheading: {
        textTransform: 'uppercase'
    },
    cardSubheading: {
        lineHeight: '16px',
        fontSize: '16px',
        fontWeight: 'bold'
    },
    slider: {
        width: '90%',
        margin: '20px auto'
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#eceaeb',
        padding: 20,
        margin: 8,
        textAlign: 'center',
        height: 150,
    },
    img: {
        margin: 'auto',
        objectFit: 'contain',
        maxHeight: '100px'
    },
}));

class AgentsBonus extends Component {
    render() {
        const { classes } = this.props;
        const settings = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            adaptativeHeight: true,
            variableWidth: true
        }

        return (
            <div className={classes.bg}>
                <div className="container padding">
                    <Typography type="title" align="center" className={classes.subheading} gutterBottom>
                        Benefícios
                    </Typography>
                    <Typography type="body1" align="center" gutterBottom>
                        Exlusivos para agentes de viagens Vivalá
                    </Typography>

                    <div className="agentes-slider-container">
                    <Slider {...settings} className={classes.slider}>
                        <div>
                            <div className={classes.item}>
                                <Typography type="subheading" className={classes.cardSubheading}>
                                    Treinamento
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
                                <Typography type="subheading" className={classes.cardSubheading}>
                                    Melhores valores de mercado
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
                                <Typography type="subheading" className={classes.cardSubheading}>
                                    Material de divulgação diário
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
                                <Typography type="subheading" className={classes.cardSubheading}>
                                    Suporte para vendas e pós vendas
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
                                <Typography type="subheading" className={classes.cardSubheading}>
                                    Operação global para mais de 160 países
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
                                <Typography type="subheading" className={classes.cardSubheading}>
                                    Controle de comissões
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

export default withStyles(styleSheet)(AgentsBonus);
