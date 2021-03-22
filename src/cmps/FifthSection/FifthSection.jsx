
import React, { Component } from 'react'

import './FifthSection.scss'

class FifthSection extends Component {

    render() {
        return (
            <section className="fifth-section flex space-between align-center ">
                <div className="content flex space-between align-center container">
                    <h2>Ready to make a reservation?</h2>
                    <button>BOOK A TABLE</button>
                </div>
            </section>
        )

    }
}

export default FifthSection
