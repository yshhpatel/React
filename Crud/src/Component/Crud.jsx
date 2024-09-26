import React, { useEffect, useState } from 'react'
export default function Crud() {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [city, setCity] = useState("");
    const [record, setRecord] = useState([]);
    const [editindex, setEditIndex] = useState(null);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("Student")) || [];
        setRecord(data)
    }, [record])

    const handleAdd = () => {
        let user = { id: Date.now(), name, subject, city }
        let oldRecord = JSON.parse(localStorage.getItem("Student")) || []
        if(editindex){
            let singleData = record.find((item) => item.id == editindex);
            singleData.id = editindex
            singleData.name = name
            singleData.subject = subject
            singleData.city = city
            localStorage.setItem("student", JSON.stringify(record))
            setEditIndex(null)
        }else{
            oldRecord.push(user)
            setRecord(oldRecord)
            localStorage.setItem("student",JSON.stringify(oldRecord))
        }

        setName("");
        setSubject("");
        setCity("");

    }
    // localStorage.clear(record);

    const handleEdit = (id) => {
        let singleData = record.find((item) => item.id == id);
        setName(singleData.name);
        setSubject(singleData.subject);
        setCity(singleData.city);
        setEditIndex(id);
    }
    const handleDelete = (id) => {
        let deleteData = record.filter((item) => item.id != id);
        setRecord(deleteData)
        localStorage.setItem("Student", JSON.stringify(deleteData));
    }


    return (
        <div>
            <h1>CRUD OPERATION</h1>

            <input type="text" value={name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
            <input type="text" value={subject} placeholder='Enter Subject' onChange={(e) => setSubject(e.target.value)} />
            <input type="text" value={city} placeholder='Enter City' onChange={(e) => setCity(e.target.value)} />

            <center>
                <button onClick={handleAdd}>
                    {
                        editindex ? "update" : "add"
                    }
                </button>
            </center>

            <table border='2' width='51%'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>subject</th>
                        <th>city</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record ?
                            record.map((e, i) => {
                                return <tr key={i}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.subject}</td>
                                    <td>{e.city}</td>
                                    <td><button onClick={() => handleEdit(e.id)}>Edit</button></td>
                                    <td><button onClick={() => handleDelete(e.id)}>Delete</button></td>
                                </tr>
                            })
                            :
                            ""
                    }

                </tbody>
            </table>
        </div>
    )
}
