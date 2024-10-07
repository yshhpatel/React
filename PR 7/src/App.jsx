import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Edit from './Components/Edit';
import Delete from './Components/Delete';
import Create from './Components/Create';

export default function App() {

  const [data, setData] = useState([
    { id: 1, name: "Yash", Location: "Rajkot", Age: "19" },
  ]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home data={data} />} />
          <Route path='/Update' element={<Edit data={data} setData={setData} />} />
          <Route path='/Remove' element={<Delete data={data} setData={setData} />} />
          <Route path='/NewEntry' element={<Create data={data} setData={setData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
