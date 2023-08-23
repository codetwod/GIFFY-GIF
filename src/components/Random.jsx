import { useEffect, useState } from "react";
import axios from 'axios';
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
export default function Random()
{   
    const [gif,setGif]=useState('');
    async function fetchData()
    {
    const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}` ;
    const op=await axios.get(url);
    console.log(op);
    }
    useEffect(()=>{fetchData()},[]);
    function randomHandler()
    {   
        
    }
    return(
        <div className="w-[600px] h-[350px] mx-auto border-2 border-emerald-600 rounded-xl bg-sky-900 flex flex-col items-center">
           <h1 className="text-emerald-100  text-lg text-center underline underline-offset-3">Random GIF</h1>
           <img src={gif}/>
           <button onClick={randomHandler} className="px-[35%]  rounded-md   py-2 bg-teal-200">Genrate</button>
        </div>
    )
}