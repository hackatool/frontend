import React, { Component } from 'react'
import NavBar from '../../components/NavBar'

import { list, empty } from './style.module.scss';

export default class HackaPage extends Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>

                {/* POG bom e bonito */}
                <div className={['card', list ].join(' ')}>
                    <div className={empty}>
                        <span>Nenhum encontrado</span>
                    </div>
                </div>

            </div>
        )
    }
}
