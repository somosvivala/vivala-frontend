import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import MenuItems from "../header/menu-items";

class Footer extends Component {
    render() {
        const footerMobile = (
            <div className="footer container padding">
                <Grid gutter={0} container align="flex-start" justify="center">
                    <Grid item xs={8}>
                        <Typography type="body1">
                            <a href="mailto:contato@vivala.com.br">contato@vivala.com.br</a>
                        </Typography>
                        <Typography type="body1">
                            <a href="tel:+551126452632">11 2645-2632</a>
                        </Typography>
                        <Typography type="body1">
                            Segunda à Sexta <br />9h às 18h
                        </Typography>
                    </Grid>

                    <Grid item xs={4}>
                        <Typography type="subheading" color="inherit" style={{ textAlign: 'right', fontWeight: 'bold' }}>Vivala <br />© 2018</Typography>
                    </Grid>
                </Grid>
            </div>
        );

        const footerDesktop = (
            <Grid gutter={0} container className="footer">
                <div className="container padding-2x">
                    <MenuItems direction={"row"} showContact={true}  />
                    <Grid container align="center" justify="center" style={{ marginTop: 40 }}>
                        <Typography type="subheading" color="inherit"><strong>© 2018 Vivalá</strong></Typography>
                    </Grid>
                </div>
            </Grid>
        );

        return window.screen.width < 900 ? footerMobile : footerDesktop;
    }
}

export default Footer;
