
import React, { Component, Fragment } from 'react'

import './SecondSection.scss'
import img from '../../assets/images/homepage/enjoyable-place-desktop.jpg'

class SecondSection extends Component {

    render() {
        return (
            <section className="second-section flex justify-center container">
                <div className="mask">
                    <img src={img} alt="img1"></img>
                </div>
                <div className="content flex column align-center justify-center">
                    <h2>Enjoyable place for all the family</h2>
                    <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
                </div>
                <div className="back-square"></div>
            </section>
        )

    }
}

export default SecondSection
