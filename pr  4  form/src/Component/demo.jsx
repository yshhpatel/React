// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

export default function Form() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [subjectErr, setSubjectErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      console.log("Name Required");
      setNameErr("*Name Required");
    } else {
      setNameErr("");
    }

    if (!subject) {
      console.log("Subject Required");
      setSubjectErr("*Subject Required");
    } else {
      setSubjectErr("");
    }

    if (!email) {
      console.log("Email Required");
      setEmailErr("*Email Required");
    } else if (!email.includes("@")) {
      setEmailErr("Email is Invalid");
    } else {
      setEmailErr("");
    }
  };

  return (
    <div>
      <h2>Dynamic Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
        <br />
        <span style={{ color: "red" }}>{nameErr}</span>
        <br />
        <input type="text" placeholder="Enter Subject" onChange={(e) => setSubject(e.target.value)}/>
        <br />
        <span style={{ color: "red" }}>{subjectErr}</span>
        <br />
        <input type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
        <br />
        <span style={{ color: "red" }}>{emailErr}</span>
        <br />
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select</option>
          <option value="electric">Electric</option>
          <option value="mechanic">Mechanic</option>
        </select>
        <br />
        <br />

        {category === "electric" && (
          <input type="number" placeholder="Enter warranty" />
        )}
        <br />
        {category === "mechanic" && (
          <input type="number" placeholder="Enter return Time" />
        )}
        <br />
        <button type="submit">Submit</button>
      </form>
      </div>
  );
  
}
