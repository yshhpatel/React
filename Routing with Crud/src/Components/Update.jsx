import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Update({ data, setData }) {
  const navigate = useNavigate();
  const [getId, setGetId] = useState("");
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const handleGetId = () => {
    const foundData = data.find((item) => item.id === JSON.parse(getId));
    if (foundData) {
      setName(foundData.name);
      setColor(foundData.color);
    } else {
      alert("Item not found");
    }
  };

  const handleUpdate = () => {
    const updatedData = data.map((item) =>
      item.id === JSON.parse(getId) ? { ...item, name, color } : item
    )
    setData(updatedData);
    navigate("/");
  };

  return (
    <div>
      <input type="text" placeholder="Enter ID" onChange={(e) => setGetId(e.target.value)} />
      <button onClick={handleGetId}>Find</button>

      <input type="text" placeholder="Enter new name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Enter new color" value={color} onChange={(e) => setColor(e.target.value)} />
      <button onClick={handleUpdate}>Submit</button>
    </div>
  );
}
