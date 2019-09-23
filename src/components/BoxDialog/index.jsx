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
                {/* todo: trocar por form e input */}
                <button className={styles.saveButton}>
                   <span>Salvar</span>
                </button>

            </div>
        )
    }
}
