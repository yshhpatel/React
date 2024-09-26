import React, { useEffect, useState } from 'react'
export default function Curd() {
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
        if (editindex) {
            let singledata = record.find((item) => item.id == editindex);
            singledata.id = editindex
            singledata.name = name
            singledata.subject = subject
            singledata.city = city
            localStorage.setItem("Student", JSON.stringify(record))
            setEditIndex(null)
        }
        else {
            oldRecord.push(user)
            setRecord(oldRecord)
            localStorage.setItem("Student", JSON.stringify(oldRecord))
        }

        setName("");
        setSubject("");
        setCity("");
    }

    const handleEdit = (id) => {
        let singleData = record.find((item) => item.id == id);
        setName(singleData.name);
        setSubject(singleData.subject);
        setCity(singleData.city);
        setEditIndex(id);
    }

    const handleDelete = (id) => {
        let deleteData = record.filter((item) => item.id == id);
        setRecord(deleteData)
        localStorage.setItem("Student", JSON.stringify(deleteData));
    }

    // localStorage.clear(record);

    return (
        <div>
            <h1>Curd Operator</h1>

            <input type="text" value={name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
            <input type="text" value={subject} placeholder='Enter Subject' onChange={(e) => setSubject(e.target.value)} />
            <input type="text" value={city} placeholder='Enter City' onChange={(e) => setCity(e.target.value)} />

            <button onClick={handleAdd}>
                {
                    editindex ? "Update" : "Add"
                }
            </button>

            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Subject</td>
                        <td>City</td>
                        <td colSpan={2}>Action</td>
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
                                    <td onClick={() => handleEdit(e.id)}>Edit</td>
                                    <td onClick={() => handleDelete(e.id)}>Delete</td>
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
