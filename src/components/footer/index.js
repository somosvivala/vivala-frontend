import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import MenuItems from "../header/menu-items";
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
        const footerMobile = (
            <div className="container padding-2x">
                <Grid container align="center" justify="center" direction="column">
                    <Typography type="subheading">© 2017 Vivala</Typography>
                    <Typography type="body1">
                        <a href="mailto:contato@vivala.com.br">contato@vivala.com.br</a>
                    </Typography>
                    <Typography type="body1">
                        <a href="tel:+551126452632">11 2645-2632</a>
                    </Typography>
                </Grid>
            </div>
        );

        const footerDesktop = (
            <Grid gutter={0} container>
                <div className="container padding-2x">
                    <MenuItems direction={"row"} showContact={true}  />
                    <Grid container align="center" justify="center" style={{ marginTop: 40 }}>
                        <Typography type="subheading" color="inherit"><strong>© 2017 Vivalá</strong></Typography>
                    </Grid>
                </div>
            </Grid>
        );

        return window.screen.width < 900 ? footerMobile : footerDesktop;
    }
}

export default Footer;
