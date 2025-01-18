import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/home.module.css";
import Footer from "../components/footer";

function Home(props) {
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
                <h1> Welcome to Babylon </h1>

                <section className={styles.container}>
                    {/* {props.movies.map((movie) => (
                        <div key={movie.imdbID} className={styles.card}>
                            <Image src={movie.Poster} alt={movie.Title} width={300} height={450} />
                            <h2>{movie.Title}</h2>
                            <p>{movie.Year}</p>
                            <Link href={`/movies/${movie.imdbID}`}>
                                <a className={styles.link}>Read More</a>
                            </Link>
                        </div>
                    ))} */}
                </section>
            </main>

            <Footer />
        </>
    );
}

export default Home;

export async function getStaticProps() {
    const apiKey = process.env.RAPIDAPI_KEY;

    const response = await fetch("https://moviesdatabase.p.rapidapi.com/titles", {
        method: "GET",
        headers: {
            "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
            "x-rapidapi-key": apiKey,
        },
    });
    const data = await response.json();

    console.log("zetex", data);

    return {
        props: {
            movies: data,
        },
    };
}


