import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Slider from 'react-slick';

const styleSheet = createStyleSheet('AgentsList', theme => ({
    bg: {
        backgroundColor: theme.default.color
    },
    subheading: {
        textTransform: 'uppercase'
    },
    slider: {
        width: '90%',
        margin: '20px auto'
    },
    item: {
        backgroundColor: 'white',
        padding: 20,
        margin: 10,
        textAlign: 'center',
        height: 150,
    },
    img: {
        margin: '10px auto'
    },
}));

class AgentsList extends Component {
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
                    <Typography type="headline" align="center" className={classes.subheading} gutterBottom>
                        Agentes
                    </Typography>
                    <Typography type="body1" align="center" gutterBottom>
                        Conheça algumas pessoas do nosso time de agentes
                    </Typography>

                    <Slider {...settings} className={classes.slider}>
                        <div>
                            <div className={classes.item}>
                                <img src={""} width="80" height="80" className={classes.img} />
                                <Typography type="body1">Luiza Celidonio</Typography>
                                <Typography type="body1">São Paulo, São Paulo</Typography>
                            </div>
                        </div>
                        <div>
                            <div className={classes.item}>
                                <img src={""} width="80" height="80" className={classes.img} />
                                <Typography type="body1">Maria Fernanda Padovan</Typography>
                                <Typography type="body1">Santa de Parnaíba, São Paulo</Typography>
                            </div>
                        </div>
                        <div>
                            <div className={classes.item}>
                                <img src={""} width="80" height="80" className={classes.img} />
                                <Typography type="body1">Cristiane Schuh</Typography>
                                <Typography type="body1">Dois Irmãos, Rio Grande do Sul</Typography>
                            </div>
                        </div>
                    </Slider>

                    <div style={{ textAlign: 'center' }}>
                        <Button raised color="primary" href="/agentes/seja-um-agente">Seja um Agente Vivalá!</Button>
                    </div>
                </div>
            </div>
        );
    }
}

AgentsList.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(AgentsList);