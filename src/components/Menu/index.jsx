import React, { Component } from 'react'
import { Link } from "react-router-dom";

import {menuBlock} from "./style.module.scss";

export default class Menu extends Component {

    render() {
        return (
            <div>
                
                <div className={menuBlock}>
                    
                    <span onClick={this.props.onDismiss}>[back]</span>
                    <h1>Menu</h1>

                    <ul>
                        <li>Home</li>
                        <li> <Link to="/user">Profile</Link> </li>
                        <li> <Link to="/hackathons">Eventos</Link> </li>
                        <li> <Link to="/user">Projetos</Link> </li>
                        <li>Mais</li>
                        <li>Logout</li>
                    </ul>

                </div>
                {/* <div className="menuBackground">
                    e tá tudo escuro
                </div> */}

            </div>
        )
    }
}
