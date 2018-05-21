import React, { Component } from 'react';
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
        return (
            <div className="items">
                { this.renderListItems() }
            </div>
        );
    }
}

export default ServicosItems;
