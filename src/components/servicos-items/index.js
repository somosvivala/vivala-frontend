import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ServicosItem from './list-item';

class ServicosItems extends Component {
    renderListItems = () => {
        return this.props.items.map((item, key) => {
            return <div className="item col-md-6 col-sm-12" key={`item-${key}`}>
                <ServicosItem item={item} />
            </div>
        })
    }

    render() {
        const { items } = this.props;

        return (
            <div className="items">
                { this.renderListItems() }
            </div>
        );
    }
}

ServicosItems.propTypes = {
    items: PropTypes.array.isRequired
};

export default ServicosItems;
