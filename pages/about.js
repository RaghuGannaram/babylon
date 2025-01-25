import React from "react";
import styles from "../styles/about.module.css";

function About() {
    return (
        <main className={styles.aboutContainer}>
            <section className={styles.headerSection}>
                <h1 className={styles.title}>About Babylon</h1>
                <p className={styles.subtitle}>
                    Your gateway to timeless tales and eternal frames.
                </p>
            </section>

            <section className={styles.contentSection}>
                <h2>Our Mission</h2>
                <p>
                    At Babylon, we aim to bring the world of movies to your fingertips. Whether you are a casual viewer
                    or a die-hard film enthusiast, Babylon offers a treasure trove of movie knowledge, from classic
                    cinema to the latest blockbusters. Dive into an ever-growing collection of films, discover
                    fascinating trivia, and enrich your movie-watching experience.
                </p>
            </section>

            <section className={styles.contentSection}>
                <h2>What We Offer</h2>
                <ul>
                    <li>
                        <strong>Comprehensive Database:</strong> Access detailed information about movies, directors,
                        actors, genres, and more.
                    </li>
                    <li>
                        <strong>Discover Hidden Gems:</strong> Find underrated and lesser-known movies that deserve
                        your attention.
                    </li>
                    <li>
                        <strong>Ratings and Reviews:</strong> View aggregated ratings and user reviews to decide your
                        next watch.
                    </li>
                    <li>
                        <strong>Movie News:</strong> Stay updated with the latest happenings in the film industry.
                    </li>
                </ul>
            </section>

            <section className={styles.contentSection}>
                <h2>Our Story</h2>
                <p>
                    Inspired by the ancient city of Babylon, a hub of knowledge and culture, we envisioned a platform
                    that celebrates the art of storytelling through cinema. With a passion for films and the goal of
                    making movie knowledge accessible to everyone, Babylon was born as a tribute to the world of
                    movies.
                </p>
            </section>

            <section className={styles.contentSection}>
                <h2>Join the Community</h2>
                <p>
                    Babylon is more than just a database—it is a community of movie lovers. Share your reviews, discuss
                    your favorite films, and connect with like-minded individuals. Together, let us celebrate the magic
                    of cinema.
                </p>
            </section>

            <section className={styles.contentSection}>
                <h2>Get in Touch</h2>
                <p>
                    Have questions, feedback, or suggestions? Wed love to hear from you! Reach out to us at{" "}
                    <a href="mailto:support@babylon.com" className={styles.link}>
                        support@babylon.com
                    </a>.
                </p>
            </section>
        </main>
    );
}

export default About;
