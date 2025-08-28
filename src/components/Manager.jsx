import React, { useState, useEffect, use } from 'react';
import fetchword from '../api/dict';



const Manager = () => {

  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const handlechange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = async () => {
    console.log("API response:", data);

    try {
      const result = await fetchword(input);
      console.log(result);
      setData(result);
      setError("");
      setInput("");
    } catch (err) {
      setError("No results found");
      setData(null);
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center gap-4 w-full min-h-[88vh] p-10">

      <div className="bg-amber-100 rounded-full p-4"><p className="text-amber-900 pl-10 pr-10 text-2xl text-center">Your Portable Dictionary!</p></div>

      <input onChange={handlechange} value={input} placeholder="Enter a Word" className="bg-amber-50 pl-10 pr-10 min-w-[88vw] items-center rounded-full border border-black-500 w-1/3 p-4 py-1 " type="text" name="word" id="word" />
      <button onClick={handleSearch} className="bg-blue-600 text-white px-2 py-1 rounded">Search Meaning</button>

      {/* data */}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {data && (
        <div className=" flex flex-col  m-4 bg-amber-100 p-4">
          <h2 className="text-xl font-bold">{data[0].word}</h2>
          <p><span className='text-xl text-amber-800'>Meaning: </span><ul>{data[0].meanings.map(item=>(item.definitions.map(i=>(<li>{i.definition}</li>))))}</ul></p>
          <p ><span className='text-xl text-amber-800'>Synonyms: </span><ul>{data[0].meanings.map(item=>(item.synonyms.map(i=>(<li>{i}</li>))))}</ul></p>
          <p ><span className='text-xl text-amber-800'>Example: </span><ul>{data[0].meanings.map(item=>(item.definitions.map(i=>(<li>{i.example}</li>))))}</ul></p>
        </div>
      )}

    </div>
  )



}
export default Manager;