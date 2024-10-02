// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Home() {
    let data = '1'
    let location = useLocation()
  return (
    <>
      <h1 style={{ paddingLeft: "30px" }}>Home</h1>
      <h1 style={{ paddingLeft: "30px" }}>{location.state.name}</h1>
      <Link to={`/About`} style={{ fontSize: "20px", paddingLeft: "25px" }}>About</Link>
      <Link to={`/Contact/${data}`} style={{ fontSize: "20px", paddingLeft: "25px" }}>Contact</Link>
    </>
  );
}