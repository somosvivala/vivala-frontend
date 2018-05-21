import React, {Component} from 'react';
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Youtube from 'react-youtube';

class AgentsHeader extends Component {
    render() {
        return (
            <Grid container className="agentes-header container" gutter={0} align="center" justify="center">
                <Grid item xs={12} className="header-content">
                    <Typography type="headline" color="accent" className="section-title" gutterBottom>
                        Agentes
                    </Typography>
                    <Typography type="body1" className="section-subtitle">
                        Conheça algumas pessoas do nosso time de agentes
                    </Typography>
                </Grid>

                <Grid className="video-wrapper" item xs={12}>
                    <Youtube videoId="kaIRH4Uh7nw" opts={{ width: '100%', height: '100%' }}/>
                </Grid>
            </Grid>
        );
    }
}

export default AgentsHeader;
