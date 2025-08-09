import React, { useState } from "react";
import { removefilter,removesite } from "api/typescript_api/remove_api";
import { addfilter, addsite } from "api/typescript_api/add_api";
import { extract_run,scrape_run} from "api/typescript_api/programs_run";

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
      console.log("Remove Site API Response",res)
    }
    catch (err){
      console.log("Filter removal failed",err)
    }
  };

 return (
    <main className="max-w-xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-semibold mb-6 text-center">🛠 Scraper Control Panel</h1>

      <input
        type="text"
        className="w-full p-3 border border-gray-300 rounded mb-5 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter filter or site"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={status.loading}
      />

      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          onClick={filteradd}
          disabled={status.loading || !input.trim()}
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700 disabled:bg-green-300"
        >
          Add Filter
        </button>
        <button
          onClick={siteadd}
          disabled={status.loading || !input.trim()}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
        >
          Add Site
        </button>
        <button
          onClick={filterremove}
          disabled={status.loading || !input.trim()}
          className="bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 disabled:bg-yellow-300"
        >
          Remove Filter
        </button>
        <button
          onClick={siteremove}
          disabled={status.loading || !input.trim()}
          className="bg-red-600 text-white py-2 rounded hover:bg-red-700 disabled:bg-red-300"
        >
          Remove Site
        </button>
      </div>

      <div className="flex justify-center gap-6 mb-6">
        <button
          onClick={scrape_run}
          disabled={status.loading}
          className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:bg-indigo-300"
        >
          Run Scrape
        </button>
        <button
          onClick={extract_run}
          disabled={status.loading}
          className="px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:bg-purple-300"
        >
          Run Extract
        </button>
      </div>

      {status.loading && (
        <p className="text-center text-gray-500 mb-2 animate-pulse">⏳ Processing...</p>
      )}
      {status.success === true && (
        <p className="text-center text-green-600 mb-2">{status.message}</p>
      )}
      {status.success === false && (
        <p className="text-center text-red-600 mb-2">{status.message}</p>
      )}
    </main>
  );
}
export default App;
