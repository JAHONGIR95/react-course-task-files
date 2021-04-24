import React from 'react'
import { Link } from 'react-router-dom'

import styles from './HeaderNavbar.module.scss'

function HeaderNavbar() {
    return (
        <div className={styles.navbar}>
            <Link to="" className={styles.navLink}>Объявления</Link>
            <Link to="" className={styles.navLink}>Магазины</Link>
            <Link to="" className={styles.navLink}>Для бизнеса</Link>
            <Link to="" className={styles.navLink}>Помощь</Link>
        </div>
    )
}

export default HeaderNavbar
