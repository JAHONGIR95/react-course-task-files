import React from 'react'

import styles from './HeaderBottom.module.scss'

function HeaderBottom() {
    return (
        <div className={styles.headerBottom}>
            <form className={styles.headerForm}>
                <div className={styles.formArea}>
                    <div className={styles.formLeft}>
                        <select name="category">
                            <option value="Любая категория" selected>Любая категория</option>
                            <option value="Любая категория">A</option>
                            <option value="Любая категория">B</option>
                            <option value="Любая категория">C</option>
                        </select>
                        <input type="search" className={styles.headerSearch} placeholder="Что будем искать ?"/>
                    </div>
                    <div className={styles.formRight}>
                        <select name="region">
                            <option value="По всей Узбекистану" selected>По всей Узбекистану</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className={styles.submitButton}>Найти</button>
            </form>
            <div className={styles.adding}>
                <button className={styles.addingButton}></button>
                <p className={styles.addingText}>Добавить обьявления</p>
            </div>
        </div>
    )
}

export default HeaderBottom
