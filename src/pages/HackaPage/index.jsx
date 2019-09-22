import React, { Component } from 'react'
import NavBar from '../../components/NavBar'


export default class HackaPage extends Component {
    render() {
        return (
            <div>
                {/* WIP: make navbar a component */}

                <NavBar></NavBar>

                <div className="card list2">
                    <div className="empty">
                        <span>Nenhum encontrado</span>
                    </div>
                </div>

            </div>
        )
    }
}
