import styles from "../styles/footer.module.css";

const getCurrentYear = () => {
    const date = new Date();

    return date.getFullYear();
};

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.section}>
                    <h3 className={styles.heading}>About Babylon</h3>
                    <p className={styles.text}>
                        Babylon is your gateway to the cinematic universe, preserving timeless tales and offering
                        detailed insights into movies from every era.
                    </p>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.heading}>Quick Links</h3>
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
                </div>

                <div className={styles.section}>
                    <h3 className={styles.heading}>Follow Us</h3>
                    <ul className={styles.list}>
                        <li>
                            <a className={styles.link} href="https://facebook.com">
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a className={styles.link} href="https://twitter.com">
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a className={styles.link} href="https://instagram.com">
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>&copy; {getCurrentYear()} Babylon. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
