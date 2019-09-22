import React, { Component } from 'react'

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
                        <li>Stuff</li>
                        <li>More stuff</li>
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
