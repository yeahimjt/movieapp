import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { APIKEY } from '../../assets/CONSTANTS';

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3',
    }),
    endpoints: (builder) => ({
        getDiscover: builder.query({query: ({filter, page}) => `/discover/${filter}?api_key=${APIKEY}&page=${page}`}),
        getDiscoverMovies: builder.query({ query: (page) => `/discover/movie?api_key=${APIKEY}&page=${page}`}),
        getDiscoverTV: builder.query({ query: () => `/discover/movie?api_key=${APIKEY}&language=en-US&page=1`}),

        getMoviesBySimilar: builder.query({ query: ( movieid ) => `/movie/${movieid}/similar?api_key=${APIKEY}&page=1`}),
        getTopMovies: builder.query({ query: () => `/trending/all/day?api_key=${APIKEY}`}),
        getMovieByID: builder.query({ query: ({ filter, movieid }) => `/${filter}/${movieid}?api_key=${APIKEY}&append_to_response=videos`}),
        getTVByID: builder.query({ query: ( tvid ) => `/tv/${tvid}?api_key=${APIKEY}&append_to_response=videos`}),
        getTVBySimilar: builder.query({ query: ( tvid ) => `/tv/${tvid}/similar?api_key=${APIKEY}&language=en-US&page=1`}),
        getMovieGenres: builder.query({ query: () => `/genre/movie/list?api_key=${APIKEY}`}),
        getTvGenres: builder.query({ query: () => `/genre/tv/list?api_key=${APIKEY}`}),
        getPopularPeople: builder.query({ query: () => `/person/popular?api_key=${APIKEY}&language=en-US&page=1`}),
        getPeopleById: builder.query({query: ( personid ) => `/person/${personid}?api_key=${APIKEY}&language=en-US`}),
        getPeopleKnownFor: builder.query({query: ( personid ) => `/person/${personid}/movie_credits?api_key=${APIKEY}&language=en-US`}),
    }),
});

export const {
    useGetDiscoverQuery,
    useGetDiscoverMoviesQuery,
    useGetMoviesBySimilarQuery,
    useGetTopMoviesQuery,
    useGetMovieByIDQuery,
    useGetTVByIDQuery,
    useGetTVBySimilarQuery,
    useGetMovieGenresQuery,
    useGetTvGenresQuery,
    useGetPopularPeopleQuery,
    useGetPeopleByIdQuery,
    useGetPeopleKnownForQuery,
} = tmdbApi;