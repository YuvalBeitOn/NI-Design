
import React, { Component } from 'react'

import './PixcelPerfect.scss'
import ItemList from '../ItemList/ItemList'
class PixcelPerfect extends Component {
    render() {
        return (
            <section className="pixcel-perfect-container">
                <section className="pixcel-perfect flex justify-center container">
                    <div className="left-side">
                        <h2>A few highlights from our menu</h2>
                        <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
                    </div>
                    <div className="right-side">
                        <ItemList></ItemList>
                    </div>
                </section>
            </section>
        )

    }
}

export default PixcelPerfect
