import React,{useState} from 'react'
import './Home.scss'
import Row from './Row'
const Home = () => {
  // const [upcomingMovies,setUpcomingMovies]=useState([]);
  // const [nowPlayingMovies,setNowPlayingMovies]=useState([]);
  // const [popularMovies,setPopularMovies]=useState([]);
  // const [topRatedMovies,setTopRatedMovies]=useState([]);
  return (
    <section className='home '>
    <div className="banner"></div>
    <Row  title={"Upcoming "} />
    <Row  title={"Popular"} />
    <Row  title={"Top Rated"} />
    <Row  title={"Now Playing"}/>
    </section>
  )
}
export default Home
