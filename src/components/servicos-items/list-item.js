import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';

class ServicosItem extends Component {
    constructor(props) {
        super(props);

        var Big, Normal;

        if ( window.innerWidth > window.innerHeight ) {
            Normal = 'inner-item width';
        } else {
            Normal = 'inner-item height';
        }

        this.state = {
            classNormal: Normal
        }
    }

    render() {
        const { item } = this.props;

        return (
            <a target="_blank" href={item.link_destino}>
                <div className={this.state.classNormal} style={{ backgroundImage: `url(${item.foto_link})` }}>
                    <div className="item-content">
                        <Typography className="item-title">{item.titulo}</Typography>
                    </div>
                </div>
            </a>
        );
    }
}

ServicosItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        titulo: PropTypes.string,
        descricao: PropTypes.string,
        foto: PropTypes.string
    }).isRequired
};

export default ServicosItem;
