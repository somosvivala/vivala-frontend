import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import AgentsContact from './contact';
import Slider from 'react-slick';

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
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 480, settings: { slidesToShow: 1 } },
            ]
        }

        return (
            <div className={classes.bg}>
                <div className="container padding">
                    <Typography type="subheading" align="center" className={classes.subheading} gutterBottom>
                        Benefícios
                    </Typography>
                    <Typography type="body1" align="center" gutterBottom>
                        Exlusivos para agentes vivalá
                    </Typography>

                    <Slider {...settings} className={classes.slider}>
                        <div>
                            <div className={classes.item}>
                                <Typography type="subheading">Treinamento</Typography>
                                <img src={""} width="80" height="80" className={classes.img} />
                            </div>
                        </div>
                        <div>
                            <div className={classes.item}>
                                <Typography type="subheading">Melhores valores de mercado</Typography>
                                <img src={""} width="80" height="80" className={classes.img} />
                            </div>
                        </div>
                        <div>
                            <div className={classes.item}>
                                <Typography type="subheading">Melhore o controle</Typography>
                                <img src={""} width="80" height="80" className={classes.img} />
                            </div>
                        </div>
                        <div>
                            <div className={classes.item}>
                                <Typography type="subheading">Material de divulgação diário</Typography>
                                <img src={""} width="80" height="80" className={classes.img} />
                            </div>
                        </div>
                        <div>
                            <div className={classes.item}>
                                <Typography type="subheading">Suporte para vendas e pós vendas</Typography>
                                <img src={""} width="80" height="80" className={classes.img} />
                            </div>
                        </div>
                        <div>
                            <div className={classes.item}>
                                <Typography type="subheading">Operação global para mais de 160 países</Typography>
                                <img src={""} width="80" height="80" className={classes.img} />
                            </div>
                        </div>
                        <div>
                            <div className={classes.item}>
                                <Typography type="subheading">Controle de comissões</Typography>
                                <img src={""} width="80" height="80" className={classes.img} />
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