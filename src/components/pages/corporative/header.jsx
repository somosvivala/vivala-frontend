import React, {Component} from 'react';
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Youtube from 'react-youtube';

class CorporativoHeader extends Component {
    render() {
        return (
            <div className="servicos-page container">
                <Grid container className="servicos-header " gutter={0} align="center" justify="center">
                    <Grid item xs={12} className="header-content">
                        <Typography type="headline" color="accent" className="section-title" gutterBottom>
                            Volunturismo para organizações
                        </Typography>
                        <Typography type="body1" className="section-subtitle">
                            Vivências de turismo de base comunitária e voluntariado no Brasil
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default CorporativoHeader;
