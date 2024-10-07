import React from 'react';
import { Link } from 'react-router-dom';

export default function Home({ data }) {
  return (
    <div className="container">
      <nav className="navbar">
        <Link to="/" className="nav-link">Profile</Link>
        <Link to="/NewEntry" className="nav-link">Create Entry</Link>
        <Link to="/Update" className="nav-link">Update Entry</Link>
        <Link to="/Remove" className="nav-link">Remove Entry</Link>
      </nav>

      <h1 className="header">Student's Details</h1>

      <table className="student-table">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Location</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, Location, Age }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{Location}</td>
              <td>{Age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
