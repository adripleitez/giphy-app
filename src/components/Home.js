import React, { useEffect, useState } from "react";
import { GiphyFetch } from '@giphy/js-fetch-api'
import { APIKEY } from "../utils/api";
import "../styles/index.css";
import Gif from "./Gif";
import Pagination from "./Pagination";

const gf = new GiphyFetch(APIKEY);

const Home = () =>{
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [gifsPerPage] = useState(15);

  // Fetching array of gifs
  useEffect(() => {
    const gifs = async () => {
      try {
        const res = await gf.trending({limit: 80});
        setResults(res.data);
      } catch (error) {
        console.error(`trending`, error);
      }
    }

    gifs();
  }, []);

  // Get current gifs (15 items)
  const indexOfLastPost = currentPage * gifsPerPage;
  const indexOfFirstPost = indexOfLastPost - gifsPerPage;
  const currentGifs = results.slice(indexOfFirstPost, indexOfLastPost);

  const getGifs = () => {
    return currentGifs.map(g => {
      return (
        <Gif
          id ={g.id} 
          key = {g.id}
          url = {g.images.fixed_height.url} 
          title = {g.title} 
          />
      );
    });
  };

  // Set pagination
  const paginate = page => setCurrentPage(page);

  // On search event
  const handleSubmit = async () => {
    try {
      if(search){
        const res = await gf.search(search.toLocaleLowerCase(), { sort: 'relevant', limit: 80 });
        setResults(res.data);
      }
    } catch (error) {
      console.error(`Searching`, error);
    }
  };

  return (
    <>
      <div>
      <input
        type="text"
        placeholder="Search a gif here..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
      <button onClick={handleSubmit} type="submit">
        Search
      </button>

      <Pagination
        gifsPerPage = {gifsPerPage}
        totalGifs = {results.length}
        paginate = {paginate}
      />

      <div className="grid grid-cols-5 gap-1">{getGifs()}</div>
      </div>
    </>
  );
}

export default Home;
