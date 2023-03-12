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
        getTop: builder.query({ query: ({filter,page}) => `/trending/${filter}/day?api_key=${APIKEY}&page=${page}`}),
        getMovieByID: builder.query({ query: ({ filter, movieid }) => `/${filter}/${movieid}?api_key=${APIKEY}&append_to_response=videos`}),
        getTVByID: builder.query({ query: ( tvid ) => `/tv/${tvid}?api_key=${APIKEY}&append_to_response=videos`}),
        getTVBySimilar: builder.query({ query: ( tvid ) => `/tv/${tvid}/similar?api_key=${APIKEY}&language=en-US&page=1`}),
        getMovieGenres: builder.query({ query: () => `/genre/movie/list?api_key=${APIKEY}`}),
        getTvGenres: builder.query({ query: () => `/genre/tv/list?api_key=${APIKEY}`}),
        getPeople: builder.query({ query: ({filter, page}) => `/person/${filter}?api_key=${APIKEY}&language=en-US&page=${page}`}),
        getPeopleById: builder.query({query: ( personid ) => `/person/${personid}?api_key=${APIKEY}&language=en-US`}),
        getPeopleKnownFor: builder.query({query: ({filter, personid }) => `/person/${personid}/${filter}?api_key=${APIKEY}&language=en-US`}),
        getSearchMulti: builder.query({query: ({filter, searchFor, page}) => `/search/${filter}?api_key=${APIKEY}&language=en-US&query=${searchFor}&page=${page}&include_adult=false`}),
        getMulti: builder.query({query: ({filter,page}) => `` })
    }),
});

export const {
    useGetDiscoverQuery,
    useGetDiscoverMoviesQuery,
    useGetMoviesBySimilarQuery,
    useGetTopQuery,
    useGetMovieByIDQuery,
    useGetTVByIDQuery,
    useGetTVBySimilarQuery,
    useGetMovieGenresQuery,
    useGetTvGenresQuery,
    useGetPeopleQuery,
    useGetPeopleByIdQuery,
    useGetPeopleKnownForQuery,
    useGetSearchMultiQuery,
    useGetMultiQuery,
} = tmdbApi;