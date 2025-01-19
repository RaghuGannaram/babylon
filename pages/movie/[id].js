import React from "react";
import CustomImage from "../../components/CustomImage";
import { HOST, API_ENDPOINTS } from "../../constants";
import { generateURL } from "../../utils";
import styles from "../../styles/movie.module.css";
import { useRouter } from "next/router";

function Movie(props) {
    const { movie } = props;
    const router = useRouter();

    if (router.isFallback) {
        return (
            <div className={styles.loading}>
                <p>Loading movie details...</p>
            </div>
        );
    }

    if (!movie || Object.keys(movie).length === 0) {
        return (
            <div className={styles.error}>
                <p>Unable to fetch movie details. Please try again later.</p>
            </div>
        );
    }

    return (
        <main>
            <div className={styles.imageContainer}>
                <CustomImage
                    src={movie.primaryImage.url}
                    alt={movie.primaryImage.caption.plainText || "Movie Image"}
                    width={300}
                    height={450}
                    styles={{ borderRadius: "10px" }}
                />
                <p className={styles.caption}>{movie.primaryImage.caption.plainText}</p>
            </div>

            <div className={styles.details}>
                <div className={styles.row}>
                    <span className={styles.label}>Type:</span>
                    <span>{movie.titleType.text}</span>
                </div>

                <div className={styles.row}>
                    <span className={styles.label}>Genres:</span>
                    <span>{movie.genres.genres.map((genre) => genre.text).join(", ")}</span>
                </div>

                <div className={styles.row}>
                    <span className={styles.label}>Rating:</span>
                    <span>
                        {movie.ratingsSummary.aggregateRating} ({movie.ratingsSummary.voteCount} votes)
                    </span>
                </div>

                <div className={styles.row}>
                    <span className={styles.label}>Release Date:</span>
                    <span>{`${movie.releaseDate.day}/${movie.releaseDate.month}/${movie.releaseDate.year}`}</span>
                </div>

                <div className={styles.row}>
                    <span className={styles.label}>Current Rank:</span>
                    <span>
                        #{movie.meterRanking.currentRank}{" "}
                        <span className={styles.rankChange}>
                            {movie.meterRanking.rankChange.changeDirection === "UP" ? `▲` : `▼`}{" "}
                            {movie.meterRanking.rankChange.difference}
                        </span>
                    </span>
                </div>

                <div className={styles.row}>
                    <span className={styles.label}>Plot:</span>
                    <p>{movie.plot.plotText.plainText}</p>
                </div>
            </div>
        </main>
    );
}

export default Movie;

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true,
    };
}

export async function getStaticProps(context) {
    const { id } = context.params;

    const apiKey = process.env.RAPIDAPI_KEY;
    const url = generateURL(API_ENDPOINTS.TITLES.BY_ID, { id }, { info: "base_info" });

    const headers = {
        "x-rapidapi-host": HOST,
        "x-rapidapi-key": apiKey,
    };

    try {
        const response = await fetch(url, {
            method: "GET",
            headers,
        });

        const { results } = await response.json();

        return {
            props: {
                movie: results,
            },
        };
    } catch (error) {
        console.error("Error fetching movie details:", error);

        return {
            props: {
                movie: null,
            },
        };
    }
}
