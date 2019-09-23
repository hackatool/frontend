import React, { Component } from 'react'

import styles from './style.module.scss'

export default class BoxDialog extends Component {
    render() {
        return (
            <div className={styles.boxDialog}>

                <h2>
                    Link do negócio lá
                </h2>

                <input type="url" name="url" id="link" className={styles.link} />
                <button className="saveButton">
                    Salvar
                </button>

            </div>
        )
    }
}
