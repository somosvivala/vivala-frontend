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
                    <Typography type="subheading">
                        <Link to="/contato">Saiba Mais</Link>
                    </Typography>
                </Grid>
                <Grid gutter={0} container xs={direction === 'column' ? 12 : 3} item direction="column">
                    <Typography type="subheading" gutterBottom>
                        Vivalá
                    </Typography>
                    <Typography type="subheading" color="inherit">
                        <Link to="/sobre">Sobre</Link>
                    </Typography>
                    <Typography type="subheading" color="inherit">
                        <Link to="/busque-sua-viagem">Busque Sua Viagem</Link>
                    </Typography>
                    <Typography type="subheading" color="inherit">
                        <Link to="/agentes">Agentes</Link>
                    </Typography>
                    <Typography type="subheading" color="inherit">
                        <Link to="/corporativo">Corporativo</Link>
                    </Typography>
                    <Typography type="subheading" color="inherit">
                        <Link to="/contato">Contato</Link>
                    </Typography>
                </Grid>
                <Grid gutter={0} container xs={direction === 'column' ? 12 : 3} item direction="column">
                    <Typography type="subheading" color="accent" gutterBottom>
                        Instituto Vivalá
                    </Typography>
                    <Typography type="subheading" color="inherit">
                        <Link to="/instituto/sobre">Sobre</Link>
                    </Typography>
                    <Typography type="subheading" color="inherit">
                        <Link to="/expedicoes">Expedições</Link>
                    </Typography>
                    <Typography type="subheading" color="inherit">
                        <Link to="/instituto">Instituto Sustentável</Link>
                    </Typography>
                    <Typography type="subheading" color="inherit">
                        <Link to="/instituto/resultados">Resultados</Link>
                    </Typography>
                </Grid>
                { showContact &&
                    <Grid gutter={0} container xs={direction === 'column' ? 12 : 3} item direction="column">
                        <Typography type="subheading" gutterBottom>
                            Contato
                        </Typography>
                        <Typography type="body1">
                            contato@vivala.com.br <br/> 11 2645-2632 <br/>
                        </Typography>
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
