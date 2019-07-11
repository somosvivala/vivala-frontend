import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import {Link} from 'react-router-dom';
import wppIcon from '../../assets/svg/whatsapp.svg'
import mailIcon from '../../assets/svg/envelope-regular.svg'

class MenuItems extends Component {
    render() {
        const {direction, showContact} = this.props;

        return (
            <Grid gutter={24} container align="flex-start" justify="space-around">
                <Grid gutter={0} container xs={direction === 'column' ? 12 : 4} item>
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

                        <Grid item xs={12} className="mb-2">
                            <Typography type="body1">
                                Seg a Sexta das 9h às 18h
                            </Typography>
                        </Grid>

                        <Grid item xs={12} className="mb-2">
                            <Typography type="body1">
                                <a href="https://api.whatsapp.com/send?phone=5511982041821"><img src={wppIcon} alt="icone whatsapp" width="18" height="18"/>  (11) 982404-1821 </a> <br/>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className="mb-2">
                            <Typography type="body1">
                                <a href="https://api.whatsapp.com/send?phone=5511991316658"><img src={wppIcon} alt="icone whatsapp" width="18" height="18"/>  (11) 99131-6658 </a> <br/>
                            </Typography>
                        </Grid>
                    
                        <Grid item xs={12}>
                            <Typography type="body1">
                                <a href="mailto:contato@vivala.com.br"> <img src={mailIcon} alt="icone email" width="18" height="18"/>    contato@vivala.com.br</a> <br/>
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
