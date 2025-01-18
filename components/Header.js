import React from "react";
import styles from "../styles/header.module.css";

function header() {
    return <header>
        <div className={styles.container}>
            <h1 className={styles.heading}>Babylon</h1>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li>
                        <a className={styles.link} href="/">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className={styles.link} href="/search">
                            Search
                        </a>
                    </li>
                    <li>
                        <a className={styles.link} href="/about">
                            About
                        </a>
                    </li>
                    <li>
                        <a className={styles.link} href="/contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>;
}

export default header;
