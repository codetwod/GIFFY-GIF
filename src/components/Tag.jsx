import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from './Spinner';
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
export default function Tag()
{const [gif,setGif]=useState('');
const [tagName,setTagName]=useState('');
const [loader,setLoader]=useState(false);
async function fetchData()
{
setLoader(true);
console.log("inside fetch data");
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tagName}`;
const output=await axios.get(url);
const response=output.data.data.images.downsized_large.url;
setGif(response);
setLoader(false);
console.log(response);      
}
useEffect(()=>{fetchData();},[])
function taggedHandler()
{   
    fetchData();
}
function ipChangeHandler(event)
{ 
    setTagName(event.target.value);
}
    return(
    <div className="w-[600px]  mx-auto border-2 border-emerald-600 rounded-xl mt-20 bg-sky-900 flex flex-col items-center">
           <h1 className="text-emerald-1    00  text-lg text-center underline underline-offset-3">Random GIF</h1>
           {
            loader?(<Spinner/>):( <img src={gif} width={450} height={450} className='mt-4'/>)
            }
           <input
           type="text"
           className='px-[25%]  rounded-md text-center  py-2 mt-4 mb-4'
           onChange={ipChangeHandler}
           value={tagName}/> 
           <button onClick={taggedHandler} className="px-[35%]  rounded-md mb-4  py-2 bg-teal-200">Genrate</button>
        </div>
    )
}