import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';

class ServicosItem extends Component {
    render() {
        const { item } = this.props;

        return (
            <a target="_blank" href={item.link_destino}>
                <div className="inner-item" style={{ backgroundImage: `url(${item.foto_link})` }}>
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
