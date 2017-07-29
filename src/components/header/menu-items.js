import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import {Link} from 'react-router-dom';

class MenuItems extends Component {
    render() {
        const {direction, showContact} = this.props;

        return (
            <Grid gutter={24} container align="flex-start" justify="space-around" direction={direction}>
                <Grid gutter={0} container xs={direction === 'column' ? 12 : 3} item direction="column">
                    <Grid item xs={12}>
                        <Typography type="subheading">
                            <Link to="/contato">Saiba Mais</Link>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid gutter={0} container xs={direction === 'column' ? 12 : 3} item direction="column">
                    <Grid item xs={12}>
                        <Typography type="subheading" gutterBottom>
                            Vivalá
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography type="subheading" color="inherit">
                            <Link to="/sobre">Sobre</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography type="subheading" color="inherit">
                            <Link to="/busque-sua-viagem">Busque Sua Viagem</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography type="subheading" color="inherit">
                            <Link to="/agentes">Agentes</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography type="subheading" color="inherit">
                            <Link to="/corporativo">Corporativo</Link>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid gutter={0} container xs={direction === 'column' ? 12 : 3} item direction="column">
                    <Grid item xs={12}>
                        <Typography type="subheading" color="accent" gutterBottom>
                            Instituto Vivalá
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography type="subheading" color="inherit">
                            <Link to="/instituto/sobre">Sobre</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography type="subheading" color="inherit">
                            <Link to="/expedicoes">Expedições</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography type="subheading" color="inherit">
                            <Link to="/instituto">Instituto Sustentável</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography type="subheading" color="inherit">
                            <Link to="/instituto/resultados">Resultados</Link>
                        </Typography>
                    </Grid>
                </Grid>
                { showContact &&
                    <Grid gutter={0} container xs={direction === 'column' ? 12 : 3} item direction="column">
                        <Grid item xs={12}>
                            <Typography type="subheading" gutterBottom>
                                Contato
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography type="body1">
                                <a href="mailto:contato@vivala.com.br">contato@vivala.com.br</a> <br/>
                                <a href="tel://+551126452632"><strong>11 2645-2632</strong></a> <br/>
                                Segunda a Sexta das 9h às 18h
                            </Typography>
                        </Grid>
                    </Grid>
                }
            </Grid>
        );
    }
}

MenuItems.propTypes = {
    direction: PropTypes.string.isRequired,
    showContact: PropTypes.bool.isRequired,
};

export default MenuItems;
