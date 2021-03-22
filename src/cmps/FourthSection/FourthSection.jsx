
import React, { Component } from 'react'

import './FourthSection.scss'
import img from '../../assets/images/homepage/family-gathering-desktop.jpg'

class FourthSection extends Component {

    render() {
        return (
            <section className="fourth-section flex justify-center container">
                <div className="mask">
                    <img src={img} alt="img"></img>
                </div>
                <div className="content flex column justify-center">
                    <h2>Family Gathering</h2>
                    <p>We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</p>
                    <button>BOOK A TABLE</button>
                    <div className="events-list">
                        <p>FAMILY GATHERING</p>
                        <p>SPECIAL EVENTS</p>
                        <p>SOCIAL EVENTS</p>
                    </div>
                </div>
                <div className="back-square"></div>
            </section>
        )

    }
}

export default FourthSection
