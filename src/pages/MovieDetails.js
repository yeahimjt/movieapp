import { useParams } from "react-router-dom";
import { useGetMovieByIDQuery, useGetMoviesBySimilarQuery } from "../redux/services/tmdbAPI";
import { AiFillStar } from "react-icons/ai";
import YouTube from "react-youtube";

import {MovieCard} from '../components/index'

const MovieDetails = () => {
    const {movieid} = useParams()
    const {data:moviedata, isFetching, error} = useGetMovieByIDQuery(movieid)
    const {data:similardata, isFetching: similarFetching, error:similarError} = useGetMoviesBySimilarQuery(movieid);

    let partialData = similardata?.results?.slice(0,12)
    const displayTrailer = () => {
        const trailer =  moviedata?.videos.results.find(video => video.name.includes('Official Trailer'))
        console.log(trailer)
        return (<div className="lgg:flex flex-[0.5] mb-0 justify-start items-center  lgg:visible hidden"><YouTube videoId={trailer.key}/></div>)
    }
    console.log(moviedata)
    if (isFetching) return <h1>Loading</h1> ;
    if (error) return <h1>Error</h1>
    return (
        <>
        
        <div className="flex flex-col justify-evenly 3xl:justify-center 3xl:flex-row m-4 sm:m-24 gap-6">
        {moviedata?.videos ? displayTrailer() : null }
            <div className="flex max-w-[700px] bg-gray-100 p-4">
                <div className="bg-dark ">
                    <div className="flex flex-col justify-center items-center ">
                        <img className="md:h-[400px] w-[300px] flex   p-4" src={`https://image.tmdb.org/t/p/w200/${moviedata?.poster_path}`} alt="movie poster"/>
                        <div className="flex flex-col  gap-6 w-full m-2">
                            <div className="flex  gap-6">
                                <div className="text-2xl flex-col">
                                    <h1>{moviedata?.title}</h1>
                                    {moviedata?.genres.map((genre)=><div key={genre.name} className="text-sm px-2">{genre.name}</div>)}
                                </div>
                                <div className="flex items-start gap-1 mt-2">
                                    <AiFillStar className="text-yellow-300 mt-1"/>
                                    <p>{Math.round(moviedata?.vote_average)}</p>
                                </div> 
                            </div>
                            <div className="w-full">
                                <p className="text-sm">Released {moviedata?.release_date}</p>
                                <div className="flex w-full gap-4">
                                <p className="text-sm text-left">Budget <i className="text-green-900">${moviedata?.budget}</i></p>
                                <p className="text-sm text-center">Revenue <i className="text-green-900">{moviedata?.revenue === 0 ? `not found` : `$${moviedata?.revenue}`}</i></p>
                                </div>
                                <p className="w-full mt-2 text-1xl font-medium">{moviedata?.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex relative flex-col w-full">
                <p className="text-center text-2xl p-4 py-0">Similiar Movies</p>
                <div className="flex w-full flex-wrap gap-6 justify-center items-center mt-4">

                    {partialData?.map((item,i) => {return (

                        <MovieCard key={item.id} data={partialData} movie={item} i={i} />
                    
                    )})}
                </div>
            </div>
        </>
    )
}

export default MovieDetails