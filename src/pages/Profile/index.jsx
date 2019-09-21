import React, { Component } from 'react'
import { Link } from "react-router-dom"

import './style.scss';

export default class Profile extends Component {
    render() {
        return (
            <div className='page'>
                <nav>
                    <Link to="/">
                        <img src="Arrow.svg" alt="back" />
                    </Link>

                    <h1>Profile</h1>
                    <img src="add.png" alt="add" />
                </nav>

                <div className="card full_profile">
                    eh fogo, nem acabei ainda

                    <div className="details"></div>
                    <div className="languages"></div>
                    <div className="prizes"></div>
                </div>

            </div>
        )
    }
}
