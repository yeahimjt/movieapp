import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const APIKEY = '0f9f8855532224b19b99d206ca76c34d'
export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3',
    }),
    endpoints: (builder) => ({
        getDiscoverMovies: builder.query({ query: () => '/discover/movie?api_key=0f9f8855532224b19b99d206ca76c34d'}),
        getMoviesBySimilar: builder.query({ query: ( movieid ) => `/movie/${movieid}/similar?api_key=0f9f8855532224b19b99d206ca76c34d&page=1`}),
        getTopMovies: builder.query({ query: () => `/trending/all/day?api_key=0f9f8855532224b19b99d206ca76c34d`}),
        getMovieByID: builder.query({ query: ( movieid ) => `/movie/${movieid}?api_key=0f9f8855532224b19b99d206ca76c34d&append_to_response=videos`}),
        getTVByID: builder.query({ query: ( tvid ) => `/tv/${tvid}?api_key=0f9f8855532224b19b99d206ca76c34d`}),
        getMovieGenres: builder.query({ query: () => '/genre/movie/list?api_key=0f9f8855532224b19b99d206ca76c34d'}),
        getTvGenres: builder.query({ query: () => '/genre/tv/list?api_key=0f9f8855532224b19b99d206ca76c34d'}),
    }),
});

export const {
    useGetDiscoverMoviesQuery,
    useGetMoviesBySimilarQuery,
    useGetTopMoviesQuery,
    useGetMovieByIDQuery,
    useGetTVByIDQuery,
    useGetMovieGenresQuery,
    useGetTvGenresQuery,
} = tmdbApi;