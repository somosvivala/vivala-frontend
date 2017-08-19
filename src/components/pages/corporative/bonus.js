import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import CorporativeContact from './contact';
import Slider from 'react-slick';
import {Image} from 'cloudinary-react';

const styleSheet = createStyleSheet('CorporativeBonus', theme => ({
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
        justifyContent: 'space-between',
        backgroundColor: theme.default.color,
        padding: 20,
        margin: 10,
        textAlign: 'center',
        height: 200,
    },
    img: {
        margin: 'auto'
    },
}));

class CorporativeBonus extends Component {
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
                        Vantagens oferecidas para nossos <br/> clientes corporativos
                    </Typography>

                    <Slider {...settings} className={classes.slider}>
                        <div>
                            <div className={classes.item}>
                                <Typography type="subheading">
                                    <strong>Teste Primeiro</strong>
                                </Typography>
                                <Image
                                    cloudName="vivala"
                                    publicId="corporativo_icone_1.png"
                                    width={120}
                                    height={120}
                                    crop="fit" alt="Ícone - Teste Primeiro"
                                    className={classes.img}
                                />
                                <Typography type="body1">Faça um mês de teste sem contrato</Typography>
                            </div>
                        </div>
                        <div>
                            <div className={classes.item}>
                                <Typography type="subheading">
                                    <strong>Reduza Custos</strong>
                                </Typography>
                                <Image
                                    cloudName="vivala"
                                    publicId="corporativo_icone_2.png"
                                    width={120}
                                    height={120}
                                    crop="fit" alt="Ícone - Reduza Custos"
                                    className={classes.img}
                                />
                                <Typography type="body1">Os melhores preços do mercado</Typography>
                            </div>
                        </div>
                        <div>
                            <div className={classes.item}>
                                <Typography type="subheading">
                                    <strong>Economize Tempo</strong>
                                </Typography>
                                <Image
                                    cloudName="vivala"
                                    publicId="corporativo_icone_3.png"
                                    width={120}
                                    height={100}
                                    crop="scale" alt="Ícone - Economize Tempo"
                                    className={classes.img}
                                />
                                <Typography type="body1">Seja atendido de forma ágil e personalizada</Typography>
                            </div>
                        </div>
                        <div>
                            <div className={classes.item}>
                                <Typography type="subheading">
                                    <strong>Melhore o controle</strong>
                                </Typography>
                                <Image
                                    cloudName="vivala"
                                    publicId="corporativo_icone_4.png"
                                    width={120}
                                    height={120}
                                    crop="fit" alt="Ícone - Melhore o Controle"
                                    className={classes.img}
                                />
                                <Typography type="body1">Receba relatórios mensais com seus ganhos</Typography>
                            </div>
                        </div>
                        <div>
                            <div className={classes.item}>
                                <Typography type="subheading">
                                    <strong>Valorize seus funcionários</strong>
                                </Typography>
                                <Image
                                    cloudName="vivala"
                                    publicId="corporativo_icone_5.png"
                                    width={120}
                                    height={120}
                                    crop="fit" alt="Ícone - Valorize seus funcionários"
                                    className={classes.img}
                                />
                                <Typography type="body1">Atendimento e descontos em sua viagem de lazer</Typography>
                            </div>
                        </div>
                    </Slider>

                    <CorporativeContact />
                </div>
            </div>
        );
    }
}

CorporativeBonus.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(CorporativeBonus);