import Rand from "./components/Rand";
import Tag from "./components/Tag";
export default function App() {
  return <div className="w-full h-screen flex flex-col background overflow-x-hidden  px-10 py-2">
    <h1 className="text-white text-xl font-bold h-8 rounded-xl bg-sky-950 w-11/12 text-center my-[40px] mx-auto">Random GIFS</h1>
    <div className="flex flex-col">
       <Rand/>
       <Tag/> 
    </div>
  </div>;
}
