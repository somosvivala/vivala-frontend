import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import {Link} from 'react-router-dom';

const styleSheet = createStyleSheet('InstituteItem', theme => ({
    item: {
        backgroundColor: '#35c9ca',
        borderRadius: 2,
        margin: '0 8px',
        padding: '5px 20px',
        display: 'flex',
        flexDirection: 'column',    
        justifyContent: 'space-around',
        textAlign: 'left',
        height: 120,
        color: 'white'
    },
    tituloCardExpedicao: {
        fontWeight: 600
    },
    saibaMaisCardExpedicao: {
        fontWeight: 400,
        color: 'black',
    }
}));

class InstituteItem extends Component {
    render() {
        const { classes, title, subtitle, link } = this.props;
        return (
            <div className={classes.item}>
                <Link to={link}>
                    <Typography type="subheading" color="inherit" className={classes.tituloCardExpedicao}>
                        {title}
                    </Typography>
                    <Typography type="subheading" color="inherit" >
                        {subtitle}
                    </Typography>
                    <Typography type="body1" color="inherit" className={classes.saibaMaisCardExpedicao}>
                            Saiba Mais
                    </Typography>
                </Link>
            </div>
        );
    }
}

InstituteItem.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default withStyles(styleSheet)(InstituteItem);
