import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import CorporativeContact from './contact';
import Slider from 'react-slick';

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
        backgroundColor: theme.default.color,
        padding: 20,
        margin: 10,
        textAlign: 'center',
    },
    img: {
        margin: '10px auto'
    },
}));

class CorporativeBonus extends Component {
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
                        Vantagens oferecidas para nossos clientes corporativos
                    </Typography>

                    <Slider {...settings} className={classes.slider}>
                        <div>
                            <div className={classes.item}>
                                <Typography type="subheading">Reduza Custos</Typography>
                                <img src={""} width="80" height="80" className={classes.img} />
                                <Typography>Os melhores preços do mercado</Typography>
                            </div>
                        </div>
                        <div>
                            <div className={classes.item}>
                                <Typography type="subheading">Economize Tempo</Typography>
                                <img src={""} width="80" height="80" className={classes.img} />
                                <Typography>Seja atendido de forma ágil e personalizada</Typography>
                            </div>
                        </div>
                        <div>
                            <div className={classes.item}>
                                <Typography type="subheading">Melhore o controle</Typography>
                                <img src={""} width="80" height="80" className={classes.img} />
                                <Typography>Receba relatórios mensais com seus gastos</Typography>
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