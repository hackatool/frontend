import React, { Component } from 'react'

import styles from './style.module.scss'

export default class BoxDialog extends Component {
    render() {
        return (
            <div className={styles.boxDialog}>

                <h2 className={styles.prompt}>
                    Hackathon Link
                </h2>

                <input type="url" name="url" id="link" className={styles.link} />
                {/* todo: trocar por form e input */}
                <button className={styles.saveButton}>
                   <span>Save</span>
                </button>

            </div>
        )
    }
}
