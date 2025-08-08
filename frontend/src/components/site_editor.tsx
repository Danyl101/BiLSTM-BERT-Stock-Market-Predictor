import React from "react";

interface Siteseditorprop{
  site:string[];
  setsites:React.Dispatch<React.SetStateAction<string[]>>;
}
function SiteEditor({site, setsites }:Siteseditorprop) {
  const updatesite = (index: number, newValue:string) => {
    const updated = [...site];
    updated[index] = newValue;
    setsites(updated);
  };

  const addKeyword = () => setsites([...site, ""]);
  const removeKeyword = (index:number) => setsites(site.filter((_, i) => i !== index));

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold">Websites Filter (goodlist)</h2>
      {site.map((kw, i) => (
        <div key={i} className="flex mb-2">
          <input
            type="text"
            value={kw}
            onChange={(e) => updatesite(i, e.target.value)}
            className="border p-1 flex-1"
          />
          <button onClick={() => removeKeyword(i)} className="ml-2 text-red-500">X</button>
        </div>
      ))}
      <button onClick={addKeyword} className="mt-2 p-1 bg-green-500 text-white">Add Keyword</button>
    </div>
  );
}

export default SiteEditor;
