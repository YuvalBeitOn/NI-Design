
import React, { Component } from 'react'

import './ItemPreview.scss'

class ItemPreview extends Component {

    render() {
        const {item} = this.props;
        return (
            <li className="item-preview flex align-center">
                <img className="item-img" src={item.imgUrl} alt="item-img" />
                <div className="content">
                    <h3 className="title">{item.title}</h3>
                    <p className="desc">{item.desc}</p>
                </div>
            </li>
        )

    }
}

export default ItemPreview
