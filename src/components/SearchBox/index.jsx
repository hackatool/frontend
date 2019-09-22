import React, { Component } from 'react'

import './style.scss'
import send from "../../assets/send.png";

export default class SearchBox extends Component {
    render() {
        return (
            <div className="searchbox-container">
                <form action="#">
                    <input type="text" name="who" id="search-input" placeholder="Quem você procura?" />
                    <input type="image" src={send} alt="Pesquisar" />
                </form>

                <span onClick={this.props.onDismiss}>(back)</span>

            </div>
        )
    }
}
