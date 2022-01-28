import React, { useEffect, useState } from "react";
import Gif from '../components/Gif'
import { APIKEY } from "../utils/api";
import { GiphyFetch } from '@giphy/js-fetch-api'

const gf = new GiphyFetch(APIKEY);

const GifDetails = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const [result, setResults] = useState({}); 

    useEffect(() => {
        const gif = async () => {
          try {
            const res = await gf.gif(urlParams.get("id"))
            setResults(res.data);
          } catch (error) {
            console.error(`trending`, error);
          }
        }
    
        gif();
      });
    

    const title = result? result.title : ''

    return (
        <>
        <title>Giffy | {title}</title>
        <h3>{title}</h3>
        <Gif
          id ={result.id} 
          key = {result.id}
          title = {result.title}
          url = {result.images.fixed_height.url} 
          />
        </>
    );
}

export default GifDetails;