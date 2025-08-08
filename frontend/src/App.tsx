import React, { useState } from "react";
import { addfilter, addsite } from "api/scraper_api";

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
      </div>
    </div>
  );
}

export default App;
