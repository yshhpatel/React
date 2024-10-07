import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Edit({ data, setData }) {
  const navigation = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [Location, setLocation] = useState("");
  const [Age, setAge] = useState("");


  const handleEditData = () => {
    let newData = data.map((item) => {
      if (item.id === Number(id)) {
        return { ...item, name, Location, Age };
      } else {
        return item;
      }
    });

    setData(newData);
    navigation("/");
  };

  return (
    <div className="container">
      <nav className="navbar">
        <Link to={"/"} className="nav-link">Dashboard</Link>
        <Link to={"/NewEntry"} className="nav-link">Create Entry</Link>
        <Link to={"/Update"} className="nav-link">Update Entry</Link>
        <Link to={"/Remove"} className="nav-link">Remove Entry</Link>
      </nav>
      <h1 className="header">Update Student Info</h1>
      <form className="form">
        <label>Roll No</label>
        <div className="input-group">
          <input type="text" className="form-input" placeholder="Enter Roll No" onChange={(e) => setId(e.target.value)} />
        </div>
        <label>Name</label>
        <input type="text" value={name} className="form-input" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
        <label>Location</label>
        <input type="text" value={Location} className="form-input" placeholder="Enter Location" onChange={(e) => setLocation(e.target.value)} />
        <label>Age</label>
        <input type="text" value={Age} className="form-input" placeholder="Enter Age" onChange={(e) => setAge(e.target.value)} />
        <button onClick={handleEditData} className="btn">Update Info</button>
      </form>
    </div>
  );
}
