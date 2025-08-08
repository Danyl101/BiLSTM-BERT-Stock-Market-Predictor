import React from "react";

interface ListEditorProps{
  list:string[];
  setList: React.Dispatch<React.SetStateAction<string[]>>;
}
function ListEditor({ list , setList }:ListEditorProps) {
  const updateListItem = (index :number, newValue: string) => {
    const updated = [...list];
    updated[index] = newValue;
    setList(updated);
  };

  const addListItem = () => setList([...list, ""]);
  const removeListItem = (index: number) => setList(list.filter((_, i) => i !== index));

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold">Goodlist Filter (goodlist)</h2>
      {list.map((kw, i) => (
        <div key={i} className="flex mb-2">
          <input
            type="text"
            value={kw}
            onChange={(e) => updateListItem(i, e.target.value)}
            className="border p-1 flex-1"
          />
          <button onClick={() => removeListItem(i)} className="ml-2 text-red-500">X</button>
        </div>
      ))}
      <button onClick={addListItem} className="mt-2 p-1 bg-green-500 text-white">Add List Item</button>
    </div>
  );
}

export default ListEditor;
