import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Slider from 'react-slick';
import {Image} from 'cloudinary-react';
import {Link} from 'react-router-dom';
import {requestAgents} from '../../../actions/agents';
import BadRequestError from '../../errors/404';
import LoadingInfinite from '../../loadings/infinite';

const styleSheet = createStyleSheet('AgentsList', theme => ({
    bg: {
        backgroundColor: theme.default.color
    },
    subheading: {
        textTransform: 'uppercase',
        textAlign: window.screen.width < 900 ? 'center' : 'left',
        fontWeight: 700,
        marginTop: '2rem'
    },
    slider: {
        margin: '20px auto',
        width: '90%'
    },
    item: {
        textAlign: 'center',
        width: '100%',
        overflow: 'hidden'
    },
    subTitle: {
        textAlign: window.screen.width < 900 ? 'center' : 'left',
        maxWidth: window.screen.width < 900 ? '60%' : '100%',
        margin: '0 auto 3rem auto'
    },
    align: {
        textAlign: window.screen.width < 900 ? 'center' : 'left',
    },
    button: {
        width: window.screen.width < 900 ? '100%' : '33%',
        textTransform: 'none',
        fontWeight: 700,
        paddingLeft: 0,
        paddingRight: 0,
        fontSize: window.screen.width < 900 ? '15px' : '17px'
    },
    alignCenter: {
        textAlign: 'center',
        textTransform: 'none',
        fontWeight:600,
        marginTop: 40
    },
    img: {
        margin: '0 auto',
        marginBottom: 10,
        height: 180,
        objectFit: 'contain'
    },
    textoCardAgente: {
        textAlign: 'left',
        marginLeft: '5%',
        width: '90%'
    }
}));

class AgentsList extends Component {
    componentWillMount() {
        this.props.requestAgents();
    }

    renderItems = () => {
        const {agents, classes} = this.props;
        return agents.map((agent, key) => {
            return (
                <div  key={`agente-${key}`}>
                    <div className={classes.item}>
                        <Image
                            cloudName="vivala"
                            publicId={agent.foto}
                            height={180}
                            crop="scale" alt={agent.nome}
                            className={classes.img}
                        />
                        <Typography className={classes.textoCardAgente} type="body1">{agent.nome}</Typography>
                        <Typography className={classes.textoCardAgente} type="body1">{agent.local}</Typography>
                    </div>
                </div>
            )
        })
    }


    render() {
        const { classes, agents, fetching, error, fetched } = this.props;
        const settings = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 7000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 480, settings: { slidesToShow: 1 } },
            ],
            adaptativeHeight: true
        }

        if (fetching) {
            return <LoadingInfinite />;
        }

        if (fetched && error) {
            return <BadRequestError />;
        }

        return (
            <div className={classes.bg}>
                <div className="container padding">
                    <Typography type="headline" align="center" className={classes.subheading} gutterBottom>
                        Agentes
                    </Typography>
                    <Typography type="body1" align="center" gutterBottom className={classes.subTitle}>
                        Conheça algumas pessoas do nosso time de agentes
                    </Typography>


                    { agents.length > 0  &&
                        <Slider {...settings} className={classes.slider}>
                            {this.renderItems()}
                        </Slider>
                    }

                    <div className={classes.alignCenter}>
                        <Link to="/agentes/seja-um-agente">
                            <Button raised color="primary" className={classes.button}>
                                Seja um Agente Vivalá!
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

AgentsList.propTypes = {
    classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        agents: state.agents.all,
        fetching: state.agents.fetching,
        error: state.agents.error,
        fetched: state.agents.fetched
    }
}

export default connect(mapStateToProps, {requestAgents})(withStyles(styleSheet)(AgentsList));
