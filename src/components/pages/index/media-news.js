import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import {Image} from 'cloudinary-react';

const styleSheet = createStyleSheet('MediaNews', theme => ({
    bg: {
        backgroundColor: '#e1e1e1'
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
    },
    fixFree: {
        marginTop: 60
    },
    fixedDraft: {
        marginTop: 20
    }
}));

class MediaNews extends Component {
    render() {
        const { classes, text } = this.props;
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 768, settings: { slidesToShow: 2 } },
                { breakpoint: 480, settings: { slidesToShow: 1 } },
            ],
            adaptativeHeight: true,
            autplay: true,
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
                                    publicId="logo-catracalivre_c9bijc.png"
                                    width={200}
                                    height={200}
                                    crop="scale" alt="Logo Catraca Livre"
                                    className={classes.img}
                                />
                            </a>
                        </div>
                        <div>
                            <a className={classes.item} rel="noopener noreferrer" target="_blank" href="http://projetodraft.com/viagens-com-voluntariado-essa-e-a-proposta-da-vivala-para-se-destacar-no-mercado-do-turismo-de-experiencia/">
                                <Image
                                    cloudName="vivala"
                                    publicId="projeto-draft_v1jezy"
                                    width={200}
                                    height={150}
                                    crop="scale" alt="Logo Projeto Draft"
                                    className={classes.fixDraft}
                                />
                            </a>
                        </div>
                        <div>
                            <a className={classes.item} rel="noopener noreferrer" target="_blank" href="https://www.freetheessence.com.br/unplug/inspire-se/vivala-viajar-voluntariado/">
                                <Image
                                    cloudName="vivala"
                                    publicId="free-the-essence-footer-logo_2x_ijwzl4.png"
                                    width={220}
                                    height={60}
                                    crop="scale" alt="Logo Free The Esseence"
                                    style={{ marginTop: 60 }}
                                    className={classes.fixFree}
                                />
                            </a>
                        </div>
                        <div>
                            <a className={classes.item} rel="noopener noreferrer" target="_blank" href="https://conteudo.startse.com.br/startups/julia_miozzo/trabalho-voluntrio-para-viajar-startup-conecta-usurios-a-oportunidades/">
                                <Image
                                    cloudName="vivala"
                                    publicId="logo-startse_rrocmn.png"
                                    width={200}
                                    height={200}
                                    crop="scale" alt="Logo StartSe"
                                    className={classes.img}
                                />
                            </a>
                        </div>
                        <div>
                            <a className={classes.item} rel="noopener noreferrer" target="_blank" href="http://www.fiesp.com.br/mobile/noticia/?id=216115">
                                <Image
                                    cloudName="vivala"
                                    publicId="logo-fiesp_jzbcmw.png"
                                    width={200}
                                    height={200}
                                    crop="scale" alt="Logo FIESP"
                                    className={classes.img}
                                />
                            </a>
                        </div>
                        <div>
                            <a className={classes.item} rel="noopener noreferrer" target="_blank" href="http://www1.folha.uol.com.br/turismo/2015/12/1717605-jovens-criam-rede-social-que-liga-turistas-a-projetos-sociais-pelo-brasil.shtml">
                                <Image
                                    cloudName="vivala"
                                    publicId="logo-infomoney_wlyjbp.png"
                                    width={200}
                                    height={200}
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
