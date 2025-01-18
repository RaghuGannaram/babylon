import Link from "next/link";
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
                </div>

                <div className={styles.section}>
                    <h3 className={styles.heading}>Follow Us</h3>
                    <ul className={styles.list}>
                        <li>
                            <Link className={styles.link} href="https://facebook.com" target="_blank">
                                Facebook
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.link} href="https://twitter.com" target="_blank">
                                Twitter
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.link} href="https://instagram.com" target="_blank">
                                Instagram
                            </Link>
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
