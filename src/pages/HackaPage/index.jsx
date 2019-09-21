import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class HackaPage extends Component {
    render() {
        return (
            <div>
                {/* TODO: make navbar a component */}
                <nav>
                    <Link to="/">
                        <img src="Arrow.svg" alt="back" />
                    </Link>

                    <h1>Hackathons</h1>
                    <img src="add.png" alt="add" />
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
