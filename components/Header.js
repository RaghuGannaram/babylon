import React from "react";
import Link from "next/link";
import styles from "../styles/header.module.css";

function header() {
    return <header>
        <div className={styles.container}>
            <h1 className={styles.heading}>Babylon</h1>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li>
                        <Link className={styles.link} href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.link} href="/search">
                            Search
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.link} href="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.link} href="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>;
}

export default header;
