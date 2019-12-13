import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import List, { ListItem } from 'material-ui/List';
import Icon from 'material-ui/Icon';
import {Image} from 'cloudinary-react';

class CorporativeFeatures extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="container padding-2x lista-wrapper">
                <List className="corporativo-lista">
                    <ListItem className="corporativo-itens">

                        <Image
                            cloudName="vivala"
                            publicId="Corporativo-03_sn6t7w.png"
                            width={100}
                            crop="scale" alt="Ícone - Check Vivalá"
                            className="list-check-icon"
                        />

                        <div>
                            <Typography type="bold" color="inherit" className="corporativo-item-title">
                                Envolva sua faculdade
                            </Typography>
                            <Typography type="subheading" color="inherit" className="corporativo-item-text">
                                Programas para graduação e pós graduação
                            </Typography>
                        </div>
                    </ListItem>
                    <ListItem className="corporativo-itens">

                        <Image
                            cloudName="vivala"
                            publicId="Corporativo-03_sn6t7w.png"
                            width={100}
                            crop="scale" alt="Ícone - Check Vivalá"
                            className="list-check-icon"
                        />

                        <div>
                            <Typography type="bold" color="inherit" className="corporativo-item-title">
                                Envolva seu colégio
                            </Typography>
                            <Typography type="subheading" color="inherit" className="corporativo-item-text">
                                Programas para ensino médio e formatura de volunturismo   
                            </Typography>
                        </div>
                    </ListItem>
                    <ListItem className="corporativo-itens">

                        <Image
                            cloudName="vivala"
                            publicId="Corporativo-03_sn6t7w.png"
                            width={100}
                            crop="scale" alt="Ícone - Check Vivalá"
                            className="list-check-icon"
                        />

                        <div>
                            <Typography type="bold" color="inherit" className="corporativo-item-title">
                                Envolva sua empresa
                            </Typography>
                            <Typography type="subheading" color="inherit" className="corporativo-item-text">
                                Programas corporativos
                            </Typography>
                        </div>
                    </ListItem>
                </List>
            </div>
        );
    }
}

CorporativeFeatures.propTypes = {
    classes: PropTypes.object.isRequired
};

export default CorporativeFeatures;
