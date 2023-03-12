import { useGetTVByIDQuery, useGetTVBySimilarQuery } from "../redux/services/tmdbAPI";
import { useParams } from "react-router-dom";
import React from 'react'
import YouTube from "react-youtube";
import {AiFillStar} from 'react-icons/ai'
import { TVCard } from "../components";

const TVDetails = () => {
    const {tvid} = useParams()
    let filter = "tv"
    const {data, isFetching, error} = useGetTVByIDQuery(tvid);
    const {data:similardata, isFetching:similarIsFetching, error:similarError} = useGetTVBySimilarQuery(tvid);
    if (isFetching) return 
    if (error) return 

    let partialData = similardata?.results?.slice(0,12)
    console.log(partialData)

    const displayTrailer = () => {
        const trailer =  data?.videos.results.find(video => video.name.includes('Official Trailer'))
        if (trailer) {
            return (<div className="lgg:flex flex-[0.5] mb-0 justify-start items-center  lgg:visible hidden"><YouTube videoId={trailer?.key}/></div>)
        }
        return null
    }

  return (
    <>
        <div className="flex flex-col justify-evenly 3xl:justify-center 3xl:flex-row m-4 mb-8 sm:m-24 gap-6"> 
        {data?.videos ? displayTrailer() : null }
            <div className="flex max-w-[700px] bg-gray-100 p-4">
                <div className="bg-dark ">
                    <div className="flex flex-col justify-center items-center ">
                        {data?.poster_path ? <img className="md:h-[400px] w-[300px] flex   p-4" src={`https://image.tmdb.org/t/p/w200/${data?.poster_path}`} alt="movie poster"/> : <p>Not found</p>}
                        <div className="flex flex-col  gap-6 w-full m-2">
                            <div className="flex  gap-6">
                                <div className="text-2xl flex-col">
                                    <h1>{data?.name} / {data?.original_name}</h1>
                                    {data?.genres.map((genre)=><div key={genre.name} className="text-sm px-2">{genre.name}</div>)}
                                </div>
                                <div className="flex items-start gap-1 mt-2">
                                    <AiFillStar className="text-yellow-300 mt-1"/>
                                    <p>{Math.round(data?.vote_average)}</p>
                                </div> 
                            </div>
                            <div className="w-full">
                                <p className="text-sm">First Aired {data?.first_air_date}</p>
                                <div className="flex w-full gap-4">
                                {data?.budget && <p className="text-sm text-left">Budget <i className="text-green-900">${data?.budget}</i></p>}
                                {data?.revenue && <p className="text-sm text-center">Revenue <i className="text-green-900">{data?.revenue === 0 ? `not found` : `$${data?.revenue}`}</i></p>}
                                </div>

                                <p className="w-full mt-2 text-1xl font-medium">{data?.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex relative flex-col w-full mb-16">
                <p className="text-center text-2xl p-4 py-0">Similiar Tv Shows</p>
                {similardata?.results.length === 0 ?
                <p className="text-center text-sm text-red-500 p-4">No Similar Movies Found</p>
                :
                <div className="flex w-full flex-wrap gap-6 justify-center items-center mt-4">

                    {partialData?.map((item,i) => {return (

                        <TVCard key={i} data={partialData} tv={item} i={i} />
                    )})}
                </div>
                }
            </div>
        </>
  )
}

export default TVDetails