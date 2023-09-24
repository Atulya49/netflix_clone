import React,{useEffect, useState} from 'react'
import Card from './Card'
import axios from 'axios';
const apiKey="811198f345689ff9a5d5d7fa8714851e";
const url="https://api.themoviedb.org/3";
const upcoming="upcoming"
const imgUrl="https://image.tmdb.org/t/p/original"
const nowPlaying="now_playing"
const popular="popular"
const topRated="top_rated"

const Row = (props) => {
    const [upcomingMovies,setUpcomingMovies]=useState([]);
    const [nowPlayingMovies,setNowPlayingMovies]=useState([]);
    const [popularMovies,setPopularMovies]=useState([]);
    const [topRatedMovies,setTopRatedMovies]=useState([]);
  useEffect(()=>{   
    const fetchUpcoming=async()=>{
      //destrucing to get data
      const {data:{results}}= await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      setUpcomingMovies(results); 
    };
    fetchUpcoming(); 
    console.log(upcomingMovies);
  },[])
  useEffect(()=>{   
    const fetchNowPlaying=async()=>{
      //destrucing to get data
      const {data:{results}}= await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      setNowPlayingMovies(results); 
    };
    fetchNowPlaying() 
  },[])
  useEffect(()=>{   
    const fetchTopRated=async()=>{
      //destrucing to get data
      const {data:{results}}= await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      setTopRatedMovies(results); 
    };
    fetchTopRated(); 
  },[])
  useEffect(()=>{   
    const fetchPopular=async()=>{
      //destrucing to get data
      const {data:{results}}= await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      setPopularMovies(results); 
    };
    fetchPopular(); 
  },[])

  const print =()=>{
    if(props.title==="Upcoming"){
     console.log("helllo");
    }
  }
  
  return (
    <div className='row'>
    <h2> {props.title} </h2>
    <div>
      {    
      print()
      }
    </div>

   {/* <div>
   { 
   upcomingMovies.map((item,index)=>     
        {return <Card key={index} img={`${imgUrl}/${item.poster_path}`}/>}
    )
    }
   </div> */}
</div>
  )
}
export default Row


// upcomingMovies.map((item,index)=>     
//         {return <Card key={index} img={`${imgUrl}/${item.poster_path}`}/>}
//             )