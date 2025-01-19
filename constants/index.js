export const BASE_URL = "https://moviesdatabase.p.rapidapi.com";

export const HOST = "moviesdatabase.p.rapidapi.com";

export const API_ENDPOINTS = {
    CLASSIFICATIONS: {
        LISTS: `${BASE_URL}/titles/utils/lists`,
        TITLE_TYPES: `${BASE_URL}/titles/utils/titleTypes`,
        GENRES: `${BASE_URL}/titles/utils/genres`,
    },
    TITLES: {
        ALL: `${BASE_URL}/titles?year=:year&page=:page`, // Dynamic year and page
        BY_ID: `${BASE_URL}/titles/:id`,
        BY_IDS: `${BASE_URL}/titles/x/titles-by-ids?idsList=:ids`,
        AKA: `${BASE_URL}/titles/:id/aka`,
        RATINGS: `${BASE_URL}/titles/:id/ratings`,
        SEASONS: `${BASE_URL}/titles/seasons/:id`,
        EPISODES: `${BASE_URL}/titles/series/:id/:season`,
        EPISODE_BY_ID: `${BASE_URL}/titles/episode/:id`,
        UPCOMING: `${BASE_URL}/titles/x/upcoming`,
    },
    SEARCH: {
        BY_KEYWORD: `${BASE_URL}/titles/search/keyword/:keyword`,
        BY_TITLE: `${BASE_URL}/titles/search/title/:title`,
        BY_AKAS: `${BASE_URL}/titles/search/akas/:aka`,
    },
    ACTORS: {
        ALL: `${BASE_URL}/actors`,
        BY_ID: `${BASE_URL}/actors/:id`,
        RANDOM: `${BASE_URL}/actors/random`,
    },
    LISTS: {
        TOP_BOX_OFFICE: `${BASE_URL}/titles?list=top_boxoffice_200`,
        TOP_RATED: `${BASE_URL}/titles?list=top_rated_250`,
        MOST_POPULAR_MOVIES: `${BASE_URL}/titles?list=most_pop_movies`,
        MOST_POPULAR_SERIES: `${BASE_URL}/titles?list=most_pop_series`,
    },
};
