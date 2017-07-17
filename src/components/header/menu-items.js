import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

class MenuItems extends Component {
    render() {
        const {direction, showContact} = this.props;

        return (
            <Grid gutter={24} container align="flex-start" justify="space-around" direction={direction}>
                <Grid gutter={0} container xs={direction === 'column' ? 12 : 3} item direction="column">
                    <Typography type="subheading">
                        <a href="#">Saiba Mais</a>
                    </Typography>
                </Grid>
                <Grid gutter={0} container xs={direction === 'column' ? 12 : 3} item direction="column">
                    <Typography type="subheading" gutterBottom>
                        Vivalá
                    </Typography>
                    <Typography type="subheading" color="inherit">
                        <a href="#">Sobre</a>
                    </Typography>
                    <Typography type="subheading" color="inherit">
                        <a href="#">Busca</a>
                    </Typography>
                    <Typography type="subheading" color="inherit">
                        <a href="#">Agentes</a>
                    </Typography>
                    <Typography type="subheading" color="inherit">
                        <a href="#">Corporativo</a>
                    </Typography>
                </Grid>
                <Grid gutter={0} container xs={direction === 'column' ? 12 : 3} item direction="column">
                    <Typography type="subheading" color="accent" gutterBottom>
                        Instituto Vivalá
                    </Typography>
                    <Typography type="subheading" color="inherit">
                        <a href="#">Sobre</a>
                    </Typography>
                    <Typography type="subheading" color="inherit">
                        <a href="#">Expedições</a>
                    </Typography>
                    <Typography type="subheading" color="inherit">
                        <a href="#">Sustentável</a>
                    </Typography>
                    <Typography type="subheading" color="inherit">
                        <a href="#">Resultados</a>
                    </Typography>
                </Grid>
                { showContact &&
                    <Grid gutter={0} container xs={direction === 'column' ? 12 : 3} item direction="column">
                        <Typography type="subheading" gutterBottom>
                            Contato
                        </Typography>
                        <Typography type="body1">
                            contato@vivala.com.br <br/> 11 1235 1234 <br/> Seg a Sex das 9h as 18h
                        </Typography>
                        <Typography type="body1">
                            asdasd
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
