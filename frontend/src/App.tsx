import React, { useState } from "react";
import { removefilter,removesite } from "api/typescript_api/remove_api";
import { addfilter, addsite } from "api/typescript_api/add_api";

function App() {
  const [list, setList] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const filteradd = async () => {
    try {
      const res = await addfilter([input]);
      console.log("Filter added API Response", res);
    } catch (err) {
      console.error("Filter add failed", err);
    }
  };

  const siteadd = async () => {
    try {
      const res = await addsite([input]);
      console.log("Site added API Response", res);
    } catch (err) {
      console.error("Site add failed", err);
    }
  };

  const filterremove = async()=>{
    try{
      const res=await removefilter([input]);
      console.log("Remove Filter API Response",res)
    }
    catch (err){
      console.log("Filter removal failed",err)
    }
  };

  const siteremove = async()=>{
    try{
      const res=await removesite([input]);
      console.log("Remove Filter API Response",res)
    }
    catch (err){
      console.log("Filter removal failed",err)
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🔧 Scraper Config Editor</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 mb-2 w-full"
        placeholder="Enter filter or site"
      />

      <div className="flex gap-2">
        <button
          onClick={filteradd}
          className="p-2 bg-green-600 text-white rounded"
        >
          Add Filter
        </button>

        <button
          onClick={siteadd}
          className="p-2 bg-blue-600 text-white rounded"
        >
          Add Site
        </button>

        <button 
        onClick={filterremove}
        className="p-2 bg-blue-600 text-white rounded"
        >
          Remove Filter
        </button>

        <button 
        onClick={siteremove}
        className="p-2 bg-blue-600 text-white rounded"
        >
          Remove Site
        </button>
      </div>
    </div>
  );
}

export default App;
