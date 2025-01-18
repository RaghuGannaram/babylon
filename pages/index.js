import { useState } from "react";
import Head from "next/head";
import styles from "../styles/home.module.css";
import CustomImage from "../components/CustomImage";
import { API_URL_LIST } from "../constants";

function Home(props) {
    const { movies: initialMovies } = props;
    const [movies, setMovies] = useState(initialMovies);

    return (
        <>
            <Head>
                <title>Babylon - Timeless Tales, Eternal Frames</title>
                <meta
                    name="description"
                    content="Babylon is a comprehensive movie database offering detailed information, timeless stories, and cinematic treasures from across the ages. Explore movies, discover hidden gems, and delve into the rich world of cinema."
                />
                <link rel="icon" href="/favicon.svg" />
            </Head>

            <main className={styles.main}>
                <section className={styles.banner}>
                    <h1 className={styles.title}>Welcome to Babylon.!</h1>
                    <p className={styles.description}>
                        Babylon is a comprehensive movie database offering detailed information, timeless stories, and
                        cinematic treasures from across the ages. Explore movies, discover hidden gems, and delve into
                        the rich world of cinema.
                    </p>
                </section>

                <section className={styles.container}>
                    {movies.map((movie) => {
                        return (
                            <div key={movie.id} className={styles.card}>
                                <CustomImage
                                    src={movie.primaryImage.url}
                                    alt={movie.primaryImage.caption.plainText}
                                    width={200}
                                    height={300}
                                    styles={{ borderRadius: "10px" }}
                                    handleError={() => {
                                        const updatedMovies = [
                                            ...movies.filter((prevMovie) => prevMovie.id !== movie.id),
                                        ];

                                        setMovies(updatedMovies);
                                    }}
                                />
                            </div>
                        );
                    })}
                </section>
            </main>
        </>
    );
}

export default Home;

export async function getStaticProps() {
    const apiKey = process.env.RAPIDAPI_KEY;
    const baseUrl = API_URL_LIST.topBoxOffice;

    const headers = {
        "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
        "x-rapidapi-key": apiKey,
    };

    const pageNumbers = [1, 2, 3, 4, 5];

    try {
        const responses = await Promise.all(
            pageNumbers.map((page) =>
                fetch(`${baseUrl}&page=${page}`, {
                    method: "GET",
                    headers,
                }).then((res) => res.json())
            )
        );

        const movies = responses.flatMap((response) => response.results || []).slice(0, 50);

        return {
            props: {
                movies,
            },
        };
    } catch (error) {
        console.error("Error fetching movies:", error);

        return {
            props: {
                movies: [],
            },
        };
    }
}
