import React, {Component} from 'react';
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Youtube from 'react-youtube';

class VolunturismoHeader extends Component {
    render() {
        const { videoId } = this.props;

        return (
            <Grid container className="servicos-header " gutter={0} align="center" justify="center">
                <Grid item xs={12} className="header-content">
                    <Typography type="headline" color="accent" className="section-title" gutterBottom>
                        Volunturismo
                    </Typography>
                    <Typography type="body1" className="section-subtitle">
                        Expedições <strong>em grupo</strong> de turismo e voluntariado <strong>em finais de semana e feriados</strong>                    </Typography>
                </Grid>

                <Grid className="video-wrapper" item xs={12}>
                    <Youtube videoId={videoId} opts={{ width: '100%', height: '100%' }}/>
                </Grid>
            </Grid>
        );
    }
}

export default VolunturismoHeader;
