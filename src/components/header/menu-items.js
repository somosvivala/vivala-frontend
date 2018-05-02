import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import {Link} from 'react-router-dom';

class MenuItems extends Component {
    render() {
        const {direction, showContact} = this.props;

        return (
            <Grid gutter={24} container align="flex-start" justify="space-around">
                <Grid gutter={0} container xs={direction === 'column' ? 12 : 3} item>
                    <Grid item xs={12}>
                        <Typography type="subheading">
                            <strong>Saiba Mais</strong>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid gutter={0} container xs={direction === 'column' ? 12 : 3} item>
                    <Grid item xs={12}>
                        <Typography type="subheading" gutterBottom>
                            <strong>Vivalá</strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography type="subheading" color="inherit">
                            <Link to="/sobre">Sobre</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography type="subheading" color="inherit">
                            <Link to="/volunturismo">Volunturismo</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography type="subheading" color="inherit">
                            <Link to="/ecoturismo">Ecoturismo</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography type="subheading" color="inherit">
                            <Link to="/imersoes">Imersões</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography type="subheading" color="inherit">
                            <Link to="/busque-sua-viagem">Busque Sua Viagem</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography type="subheading" color="inherit">
                            <Link to="/agentes">Seja um Agente</Link>
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
                            <strong>Instituto Vivalá</strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography type="subheading" color="inherit">
                            <Link to="/instituto/sobre">Sobre</Link>
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
                                <Link to="/contato"><strong>Contato</strong></Link>

                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography type="body1">
                                <a href="tel://+551126452632">11 2645-2632</a> <br/>
                                <a href="mailto:contato@vivala.com.br">contato@vivala.com.br</a> <br/>
                                Seg a Sexta das 9h às 18h
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
