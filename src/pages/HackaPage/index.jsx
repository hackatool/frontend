import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import add from "../../assets/add.png";
import arrow from "../../assets/Arrow.svg";

export default class HackaPage extends Component {
    render() {
        return (
            <div>
                {/* TODO: make navbar a component */}
                <nav>
                    <Link to="/">
                        <img src={arrow} alt="back" />
                    </Link>

                    <h1>Hackathons</h1>
                    <img src={add} alt="add" />
                </nav>

                <div className="card list">
                    <div className="empty">
                        <span>Nenhum encontrado</span>
                    </div>
                </div>

            </div>
        )
    }
}
