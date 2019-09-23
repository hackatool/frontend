import React, { Component } from 'react'
import NavBar from '../../components/NavBar'

import { list, empty } from './style.module.scss';
import BoxDialog from '../../components/BoxDialog';

export default class HackaPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showAddBox: false,
            hackathonsList: [],
        };
    }

    handleAdd = () => {
        const data = prompt('Insira o Link do evento');
        console.log(data);

        if (data) this.setState({ hackathonsList: [...this.state.hackathonsList, data] })

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

                {this.state.showAddBox && <BoxDialog />}


                <div className={['card', list].join(' ')}>
                    <ul>
                        {
                            this.state.hackathonsList.length === 0 ?
                                <div className={empty}>
                                    <span>Nenhum encontrado</span>
                                </div>

                                :

                                this.state.hackathonsList.map(item => {
                                    return <li key={item}>{item}</li>
                                })
                        }
                    </ul>




                </div>

            </div>
        )
    }
}
