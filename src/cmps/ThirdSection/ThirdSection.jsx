
import React, { Component } from 'react'

import './ThirdSection.scss'

import img from '../../assets/images/homepage/locally-sourced-desktop.jpg';

class ThirdSection extends Component {

    render() {
        return (
            <section className="third-section flex container  justify-center">
                <div className="content flex column align-center justify-center">
                    <h2>The most locally sourced food</h2>
                    <p>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
                </div>
                <div className="mask">
                    <img src={img} alt="img1"></img>
                </div>
                <div className="back-square"></div>
            </section>
        )

    }
}

export default ThirdSection
