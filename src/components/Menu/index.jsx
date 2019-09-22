import React, { Component } from 'react'

import {menuBlock} from "./style.module.scss";

export default class Menu extends Component {
    render() {
        return (
            <div>
                
                <div className={menuBlock}>
                    habemus menu
                </div>
                {/* <div className="menuBackground">
                    e tá tudo escuro
                </div> */}

            </div>
        )
    }
}
