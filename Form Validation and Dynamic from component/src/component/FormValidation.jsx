import React, { useState } from 'react'

export default function Form() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [nameerr, setNameErr] = useState("")
    const [emailerr, setEmailErr] = useState("")
    const [subjecterr, setSubjectErr] = useState("")
    const [categary, setCatagery] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            console.log("name validation..")
            setNameErr("(Enter Valid Name..)")
        }
        else {
            setNameErr("")
        }
        if (!email) {
            console.log("email validation..")
            setEmailErr("(Enter Valid Email..)")
        }
        else if (!email.includes('@')) {
            console.log("email validation(@)..")
            setEmailErr("(Enter Valid Email(@)..)")
        }
        else if (!email.includes('.com')) {
            console.log("email validation(.com)..")
            setEmailErr("(Enter Valid Email(.com)..)")
        }
        else if (!/^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/.test(name)) {
            console.log("email validation(/[\w-\.]+@([\w-]+\.)+[/)")
            setEmailErr("(Enter Valid Email(/[\w-\.]+@([\w-]+\.)+)")

        }
        else {
            setEmailErr("")
        }
        if (!subject) {
            console.log("subject validation..")
            setSubjectErr("(Enter Valid Subject..)")
        }
        else {
            setSubjectErr("")
        }

    }
    return (
        <div>
            <center> 
                 <h1>Form</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>Enter your name:</label>
                    <input type="text" onChange={(e) => setName(e.target.value)}></input><br />
                    <span>{nameerr}</span>
                    <br /><br />
                    <label>Enter your email:</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)}></input><br />
                    <span>{emailerr}</span>
                    <br /><br />
                    <label>Enter your subject:</label>
                    <input type="text" onChange={(e) => setSubject(e.target.value)}></input><br />
                    <span>{subjecterr}</span>
                    <br /><br />
                    <select onChange={(e) => setCatagery(e.target.value)}>
                        <option value="">Category</option>
                        <option value="IT">IT</option>
                        <option value="MANAGMENT">GAMER</option>

                    </select>
                    {
                        categary == "IT" && <input type='text' placeholder='Enter your IT question:'></input>
                    }
                    {
                        categary == "MANAGMENT" && <input type='text' placeholder='Enter your MANAGEMENT question:'></input>
                    } <br /><br />
                    <button type='submit' >Submit</button>
                </form>
            </center>
        </div>
    )
}