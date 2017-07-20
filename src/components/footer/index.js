import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import MenuItems from "../header/menu-items";

class Footer extends Component {
    render() {
        const footerMobile = (
            <div className="container padding-2x">
                <Grid container align="center" justify="center" direction="column">
                    <Typography type="subheading">2017 Vivala</Typography>
                    <Typography type="body1">contato@vivala.com.br</Typography>
                    <Typography type="body1">(11) 1234-1234</Typography>
                </Grid>
            </div>
        );

        const footerDesktop = (
            <div className="container padding-2x">
                <MenuItems direction={"row"} showContact={true}  />
                <Grid container align="center" justify="center" style={{ marginTop: 40 }}>
                    <Typography type="subheading">2017 Vivala</Typography>
                </Grid>
            </div>
        );

        return window.screen.width < 768 ? footerMobile : footerDesktop;
    }
}

export default Footer;