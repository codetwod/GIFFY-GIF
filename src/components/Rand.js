import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from './Spinner';
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const Rand = () => {
    const [gif,setGif]=useState('');
    const [loader,setLoader]=useState(false);
    async function fetchData()
    {
    setLoader(true);
    console.log("inside fetch data");
    const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const output=await axios.get(url);
    const response=output.data.data.images.downsized_large.url;
    setGif(response);
    setLoader(false);
    console.log(response);    
    }
    useEffect(()=>{fetchData();},[])
    function randomHandler()
    {   
        fetchData();
    }
    return (
        <div className="w-[600px]   mx-auto border-2 border-emerald-600 rounded-xl bg-sky-900 flex flex-col items-center">
        <h1 className="text-emerald-100  mt-3 text-lg text-center underline underline-offset-3">Random GIF</h1>
        {
            loader?(<Spinner/>):( <img src={gif} width={450} height={450} className='mt-4'/>)
        }
        <button onClick={randomHandler} className="px-[35%]  rounded-md mt-4 mb-3  py-2 bg-teal-200">Genrate</button>
     </div>
    );
};

export default Rand;