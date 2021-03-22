
import React, { Component } from 'react'

import './AppHeader.scss'
import logo from '../../assets/images/logo.svg';

class AppHeader extends Component {

    render() {
        return (
            <section className="app-header">
                <img src={logo} alt="logo-img normBackground"></img>
                <h2>Exquisite dining since 1989</h2>
                <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
                <button>BOOK A TABLE</button>
            </section>

        )

    }
}

export default AppHeader
