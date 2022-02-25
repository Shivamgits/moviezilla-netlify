import React,{useEffect, useState} from 'react'
import axios from 'axios'
import SingleContent from '../components/SingleContent';
import "../styles/Trending.css"
import CustomPagination from '../components/CustomPagination';
const Trending = () => {
  const [page,setPage] = useState(1)
  const [content,setContent] = useState([]);

  const fetchTrending = async () => {
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    )
  //  console.log(data)
    setContent(data.results)
  }
  useEffect(() => {
   fetchTrending();
    // eslint-disable-next-line
  }, [page])
  
  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {
          content && content.map((i) => (
            <SingleContent key = {i.id} id={i.id} poster={i.poster_path} title={i.title || i.name} date={i.first_air_date || i.release_date} media_type={i.media_type} vote_average={i.vote_average} /> 
          ))
        }
      </div>
      <CustomPagination setPage={setPage} />
        </div>
  )
}

export default Trending