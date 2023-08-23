import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from './Spinner';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const tagURL= `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tagName}`;
const randURL=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export default function UseGIF({tag}) {
    const [gif, setGif] = useState('');
    const [loader, setLoader] = useState(false);
    async function fetchData() {
        setLoader(true);
        console.log("inside fetch data");
        
        const output = await axios.get(tag?tagURL:randURL);
        const response = output.data.data.images.downsized_large.url;
        setGif(response);
        setLoader(false);
        console.log(response);
    }
    useEffect(() => { fetchData(); }, [])
    return(
        gif,loa
    )
    

}