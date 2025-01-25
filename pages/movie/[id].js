import React from "react";
import CustomImage from "../../components/CustomImage";
import { FaStar, FaCalendarAlt, FaChartLine, FaInfoCircle } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
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
        <main className={styles.mainContainer}>
            <div className={styles.imageContainer}>
                <CustomImage
                    src={movie.primaryImage.url}
                    alt={movie.primaryImage.caption.plainText}
                    width={300}
                    height={450}
                    styles={{ borderRadius: "10px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
                />
                <p className={styles.caption}>{movie.primaryImage.caption.plainText}</p>
            </div>

            <div className={styles.detailsContainer}>
                <h1 className={styles.title}>{movie.titleText}</h1>

                <div className={styles.row}>
                    <span className={styles.label}>
                        <MdOutlineCategory /> Genres:
                    </span>
                    <span>{movie.genres.map((genre) => genre.text).join(", ")}</span>
                </div>

                <div className={styles.row}>
                    <span className={styles.label}>
                        <FaStar /> Rating:
                    </span>
                    <span>
                        {movie.ratingsSummary.aggregateRating || "N/A"} ({movie.ratingsSummary.voteCount} votes)
                    </span>
                </div>

                <div className={styles.row}>
                    <span className={styles.label}>
                        <FaCalendarAlt /> Release Date:
                    </span>
                    <span>
                        {movie.releaseDate.day}/{movie.releaseDate.month}/{movie.releaseDate.year}
                    </span>
                </div>

                <div className={styles.row}>
                    <span className={styles.label}>
                        <FaChartLine /> Current Rank:
                    </span>
                    <span>
                        #{movie.meterRanking.currentRank || "N/A"}{" "}
                        <span className={styles.rankChange}>
                            {movie.meterRanking.rankChange.changeDirection === "UP" ? `▲` : `▼`}{" "}
                            {movie.meterRanking.rankChange.difference || 0}
                        </span>
                    </span>
                </div>

                <div className={styles.row}>
                    <span className={styles.label}>
                        <FaInfoCircle /> Plot:
                    </span>
                    <p>{movie.plot.plotText.plainText}</p>
                </div>
            </div>
        </main>
    );
}

export default Movie;

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: "tt0076759" } },
            { params: { id: "tt0083866" } },
            { params: { id: "tt0107290" } },
            { params: { id: "tt0109830" } },
            { params: { id: "tt0110357" } },
            { params: { id: "tt0116629" } },
            { params: { id: "tt0119567" } },
            { params: { id: "tt0119654" } },
            { params: { id: "tt0121766" } },
            { params: { id: "tt0121765" } },
            { params: { id: "tt0120338" } },
            { params: { id: "tt0120915" } },
            { params: { id: "tt0120591" } },
            { params: { id: "tt0120737" } },
            { params: { id: "tt0145487" } },
            { params: { id: "tt0167404" } },
            { params: { id: "tt0167260" } },
            { params: { id: "tt0167261" } },
            { params: { id: "tt0198781" } },
            { params: { id: "tt0234215" } },
            { params: { id: "tt0241527" } },
            { params: { id: "tt0266543" } },
            { params: { id: "tt0295297" } },
            { params: { id: "tt0298148" } },
            { params: { id: "tt0304141" } },
            { params: { id: "tt0316654" } },
            { params: { id: "tt0317705" } },
            { params: { id: "tt0325980" } },
            { params: { id: "tt0330373" } },
            { params: { id: "tt0335345" } },
            { params: { id: "tt0360717" } },
            { params: { id: "tt0363771" } },
            { params: { id: "tt0367882" } },
            { params: { id: "tt0369610" } },
            { params: { id: "tt0371746" } },
            { params: { id: "tt0373889" } },
            { params: { id: "tt0381061" } },
            { params: { id: "tt0382625" } },
            { params: { id: "tt0382932" } },
            { params: { id: "tt0383574" } },
            { params: { id: "tt0398286" } },
            { params: { id: "tt0407304" } },
            { params: { id: "tt0413300" } },
            { params: { id: "tt0413267" } },
            { params: { id: "tt0417741" } },
            { params: { id: "tt0435761" } },
            { params: { id: "tt0438097" } },
            { params: { id: "tt0441773" } },
            { params: { id: "tt0448157" } },
        ],
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

        const data = await response.json();
        const results = data.results || {};

        const sanitizedMovie = {
            titleText: results.titleText?.text || "Unknown Title",
            genres: results.genres?.genres || [],
            ratingsSummary: {
                aggregateRating: results.ratingsSummary?.aggregateRating || null,
                voteCount: results.ratingsSummary?.voteCount || 0,
            },
            primaryImage: {
                url: results.primaryImage?.url || "/images/hanging-plant.png",
                caption: {
                    plainText: results.primaryImage?.caption?.plainText || "No caption available",
                },
            },
            releaseDate: {
                day: results.releaseDate?.day || null,
                month: results.releaseDate?.month || null,
                year: results.releaseDate?.year || null,
            },
            plot: {
                plotText: {
                    plainText: results.plot?.plotText?.plainText || "Plot details not available.",
                },
            },
            meterRanking: {
                currentRank: results.meterRanking?.currentRank || null,
                rankChange: results.meterRanking?.rankChange || {
                    changeDirection: "UP",
                    difference: 0,
                },
            },
        };

        return {
            props: {
                movie: sanitizedMovie,
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
