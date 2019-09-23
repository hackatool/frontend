import React, { Component } from 'react'
import NavBar from '../../components/NavBar'

import { list, empty } from './style.module.scss';
import BoxDialog from '../../components/BoxDialog';

export default class HackaPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showAddBox: false,
        };
    }

    handleAdd = () => {
        const data = prompt('[PLACEHOLDER]: Insira o Link do evento');
        console.log(data);
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(event);
    }
    

    render() {
        return (
            <div>
                <NavBar
                    title="Hackathons"
                    onAdd={this.handleAdd}
                />

               <BoxDialog></BoxDialog>

                {/* POG bom e bonito */}
                <div className={['card', list].join(' ')}>
                    <div className={empty}>
                        <span>Nenhum encontrado</span>
                    </div>
                </div>

            </div>
        )
    }
}
