
import React, { Component } from 'react'

import './ItemList.scss'
import ItemPreview from '../ItemPreview/ItemPreview'

import img1 from '../../assets/images/homepage/menu-items/menu-item1.jpg'
import img2 from '../../assets/images/homepage/menu-items/menu-item2.jpg'
import img3 from '../../assets/images/homepage/menu-items/menu-item3.jpg'

class ItemList extends Component {

    state = {
        items: [
            {
                title: 'Seared Salmon Fillet',
                desc: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
                imgUrl: img1
            },
            {
                title: 'Rosemary Filet Mignon',
                desc: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
                imgUrl: img2
            },
            {
                title: 'Summer Fruit Chocolate Mousse',
                desc: 'Creamy mousse combined with summer fruits and dark chocolate shavings.',
                imgUrl: img3
            }

        ]
    }

    render() {
        const { items } = this.state
        return (
            <ul className="item-list clean-list">
                {items.map((item) => {
                    return (
                        <ItemPreview key={item.title} item={item}></ItemPreview>
                    )
                })}
            </ul>
        )

    }
}

export default ItemList
