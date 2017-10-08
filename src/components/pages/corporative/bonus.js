import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import CorporativeContact from './contact';
import Slider from 'react-slick';
import {Image} from 'cloudinary-react';

const styleSheet = createStyleSheet('CorporativeBonus', theme => ({
    bg: {
        backgroundColor: '#dddddd'
    },
    subheading: {
        textTransform: 'uppercase',
        fontSize: '1.3rem'
    },
    cardSubheading: {
        lineHeight: '16px',
        fontSize: '16px',
        fontWeight: 'bold'
    },
    slider: {
        width: '90%',
        maxWidth: 560,
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
        height: 170,
    },
    img: {
        margin: 'auto',
        objectFit: 'contain',
        maxHeight: '80px'
    },
}));

class CorporativeBonus extends Component {
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
                        Vantagens oferecidas para nossos <br/> clientes corporativos
                    </Typography>

                    <div className="corporativo-slider-container">
                        <Slider {...settings} className={classes.slider}>
                            <div>
                                <div className={classes.item}>
                                    <Typography type="subheading" className={classes.cardSubheading}>
                                        Reduza Custos
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
                                    <Typography type="subheading" className={classes.cardSubheading}>
                                        Economize Tempo
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
                                    <Typography type="subheading" className={classes.cardSubheading}>
                                        Campanhas de Incentivo
                                    </Typography>
                                    <Image
                                        cloudName="vivala"
                                        publicId="corporativo_icone_4.png"
                                        width={120}
                                        height={120}
                                        crop="fit" alt="Ícone - Campanhas de Incentivo"
                                        className={classes.img}
                                    />
                                    <Typography type="body1">Realize campanhas atreladas as suas metas</Typography>
                                </div>
                            </div>
                            <div>
                                <div className={classes.item}>
                                    <Typography type="subheading" className={classes.cardSubheading}>
                                        Melhore o controle
                                    </Typography>
                                    <Image
                                        cloudName="vivala"
                                        publicId="corporativo_icone_1.png"
                                        width={120}
                                        height={120}
                                        crop="fit" alt="Ícone - Melhore o Controle"
                                        className={classes.img}
                                    />
                                    <Typography type="body1">Receba relatórios mensais com seus gastos</Typography>
                                </div>
                            </div>
                            <div>
                                <div className={classes.item}>
                                    <Typography type="subheading" className={classes.cardSubheading}>
                                        Valorize seus funcionários
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

export default withStyles(styleSheet)(CorporativeBonus);
