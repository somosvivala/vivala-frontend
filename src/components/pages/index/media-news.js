import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import {Image} from 'cloudinary-react';

const styleSheet = createStyleSheet('MediaNews', theme => ({
    bg: {
        backgroundColor: '#DCDCDC',
        padding: '20px 0'
    },
    item: {
        display: 'flex',
        justifyContent: 'center'
    },
    slider: {
        width: '90%',
        margin: '20px auto'
    },
    text: {
        margin: '0 0 20px 20px',
        fontWeight: 'bold',
        textAlign: window.screen.width < 900 ? 'center' : 'left'
    }
}));

class MediaNews extends Component {
    render() {
        const { classes, text } = this.props;
        const settings = {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 768, settings: { slidesToShow: 2 } },
                { breakpoint: 480, settings: { slidesToShow: 1 } },
            ],
            adaptativeHeight: true,
            autoplay: true,
            autoplaySpeed: 2500,
            speed: 1500
        }
        return (
            <div className={classes.bg}>
                <div className="container padding">
                    <Typography type="title" gutterBottom className={classes.text}>{text}</Typography>
                    <Slider {...settings} className={classes.slider}>
                        <div>
                            <a className={classes.item} rel="noopener noreferrer" target="_blank" href="https://catracalivre.com.br/geral/agenda/indicacao/startup-conecta-pessoas-que-tem-interesse-de-viajar-e-realizar-voluntariado-no-brasil/">
                                <Image
                                    cloudName="vivala"
                                    publicId="catracalivre-icone_ilcoly.png"
                                    height={40}
                                    crop="scale" alt="Logo Catraca Livre"
                                    className={classes.img}
                                />
                            </a>
                        </div>
                        <div>
                            <a className={classes.item} rel="noopener noreferrer" target="_blank" href="http://projetodraft.com/viagens-com-voluntariado-essa-e-a-proposta-da-vivala-para-se-destacar-no-mercado-do-turismo-de-experiencia/">
                                <Image
                                    cloudName="vivala"
                                    publicId="draft-icone_eqejjv"
                                    height={40}
                                    crop="scale" alt="Logo Projeto Draft.png"
                                    className={classes.img}
                                />
                            </a>
                        </div>
                        <div>
                            <a className={classes.item} rel="noopener noreferrer" target="_blank" href="https://www.freetheessence.com.br/unplug/inspire-se/vivala-viajar-voluntariado/">
                                <Image
                                    cloudName="vivala"
                                    publicId="freetheessence-icone_artmgm"
                                    height={40}
                                    crop="scale" alt="Logo Free The Esseence.png"
                                    className={classes.img}
                                />
                            </a>
                        </div>
                        <div>
                            <a className={classes.item} rel="noopener noreferrer" target="_blank" href="https://conteudo.startse.com.br/startups/julia_miozzo/trabalho-voluntrio-para-viajar-startup-conecta-usurios-a-oportunidades/">
                                <Image
                                    cloudName="vivala"
                                    publicId="startse-icone_qnheqy.png"
                                    height={40}
                                    crop="scale" alt="Logo StartSe"
                                    className={classes.img}
                                />
                            </a>
                        </div>
                        <div>
                            <a className={classes.item} rel="noopener noreferrer" target="_blank" href="http://www.fiesp.com.br/mobile/noticia/?id=216115">
                                <Image
                                    cloudName="vivala"
                                    publicId="fiesp-icone_oiocia"
                                    height={40}
                                    crop="scale" alt="Logo FIESP"
                                    className={classes.img}
                                />
                            </a>
                        </div>
                        <div>
                            <a className={classes.item} rel="noopener noreferrer" target="_blank" href="http://www1.folha.uol.com.br/turismo/2015/12/1717605-jovens-criam-rede-social-que-liga-turistas-a-projetos-sociais-pelo-brasil.shtml">
                                <Image
                                    cloudName="vivala"
                                    publicId="infomoney-icone_jguhcs"
                                    height={40}
                                    crop="scale" alt="Logo Infomoney"
                                    className={classes.img}
                                />
                            </a>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}

MediaNews.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    items: PropTypes.object,
};

export default withStyles(styleSheet)(MediaNews);
