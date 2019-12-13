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
            <Grid gutter={0} container align="flex-start" justify="space-around">
                <Grid gutter={0} container xs={direction === 'column' ? 12 : 3} item className="mb-4">
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
                            <Link to="/corporativo">Corporativo</Link>
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
                                <a href="https://api.whatsapp.com/send?phone=5511982041821"><img src={wppIcon} alt="icone whatsapp" width="18" height="18"/>  (11) 98204-1821 </a> <br/>
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
                <Grid gutter={0} container xs={direction === 'column' ? 12 : 3} item direction="column" className="container-selo-braztoa">
                    <Grid item xs={12} className="text-right">
                        <img src="https://res.cloudinary.com/vivala/image/upload/v1576196336/9664-selos-vencedor-pbs-agencias-320_tzsicq.jpg" title="A vivalá foi vencedora do prémio braztoa de sustentabilidade em 2019" alt="A vivalá foi vencedora do prémio braztoa de sustentabilidade em 2019" width="200" />
                    </Grid>
                </Grid>

            </Grid>
        );
    }
}

MenuItems.propTypes = {
    direction: PropTypes.string.isRequired,
    showContact: PropTypes.bool.isRequired,
};

export default MenuItems;
