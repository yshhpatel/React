import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Delete({ data, setData }) {

  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [Location, setLocation] = useState("");
  const [performance, setPerformance] = useState("");


  const deleteData = () => {
    let newold = data.filter((item) => item.id !== JSON.parse(id));
    setData(newold);
    navigate("/");
  };

  return (
    <div className="container">
      <nav className="navbar">
        <Link to={"/"} className="nav-link">Dashboard</Link>
        <Link to={"/NewEntry"} className="nav-link">Create Entry</Link>
        <Link to={"/Update"} className="nav-link">Update Entry</Link>
        <Link to={"/Remove"} className="nav-link">Remove Entry</Link>
      </nav>
      <h1 className="header">Remove Student</h1>
      <form className="form">
        <label>Roll No</label>
        <div className="input-group">
          <input type="text" className="form-input" placeholder="Enter Roll No" onChange={(e) => setId(e.target.value)} />
        </div>
        <label>Name</label>
        <input type="text" value={name} className="form-input" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
        <label>Location</label>
        <input type="text" value={Location} className="form-input" placeholder="Enter Location" onChange={(e) => setLocation(e.target.value)} />
        <label>Performance</label>
        <input type="text" value={performance} className="form-input" placeholder="Enter Performance" onChange={(e) => setPerformance(e.target.value)} />
        <button className="btn btn-danger" onClick={deleteData}>Remove</button>
      </form>
    </div>
  );
}
