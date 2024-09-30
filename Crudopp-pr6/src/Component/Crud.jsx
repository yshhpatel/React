import React, { useEffect, useState } from 'react'


export default function Crud() {

    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [city, setCity] = useState("");
    const [record, setRecord] = useState(null);
    const [editindex, setEditIndex] = useState(null);
    const [status, setStatus] = useState("pending");


    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("Student")) || [];
        setRecord(data);
    }, [record]);

    const handleAdd = () => {
        let user = { id: record.length + 1, name, subject, city, status: "Pending" };
        let oldRecord = JSON.parse(localStorage.getItem("Student")) || [];

        if (editindex) {
            let updatedRecord = oldRecord.map((item) => {
                if (item.id === editindex) {
                    item.name = name;
                    item.city = city;
                    item.subject = subject;
                    return item;
                }
                return item;
            });
            localStorage.setItem("Student", JSON.stringify(updatedRecord));
            setRecord(updatedRecord);
            setEditIndex(null);
        } else {
            oldRecord.push(user);
            setRecord(oldRecord);
            localStorage.setItem("Student", JSON.stringify(oldRecord));
        }

        setName("");
        setSubject("");
        setCity("");
    };

    const handleDelete = (id) => {
        let deleteData = record.filter((item) => item.id !== id);
        setRecord(deleteData);
        localStorage.setItem("Student", JSON.stringify(deleteData));
    };

    const handleEdit = (id) => {
        let singleData = record.find((item) => item.id === id);
        setName(singleData.name);
        setSubject(singleData.subject);
        setCity(singleData.city);
        setEditIndex(id);
    };

    const handleComplete = (id) => {
        let updatedRecord = record.find((item) => item.id == id)
        if (updatedRecord.id) {
            setStatus('done')
        }
        localStorage.setItem("Student", JSON.stringify(data));
    };
    

    return (
        <div>
            <h1>CRUD OPERATION</h1>

            <input
                type="text"
                value={name}
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                value={subject}
                placeholder="Enter Subject"
                onChange={(e) => setSubject(e.target.value)}
            />
            <input
                type="text"
                value={city}
                placeholder="Enter City"
                onChange={(e) => setCity(e.target.value)}
            />

            <center>
                <button onClick={handleAdd}>
                    {editindex ? "Update" : "Add"}
                </button>
            </center>

            <table border="2" width="51%">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>subject</th>
                        <th>city</th>
                        <th>status</th> { }
                        <th colSpan={3}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {record
                        ? record.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.subject}</td>
                                    <td>{e.city}</td>
                                    <td>{status}</td> { }
                                    <td>
                                        <button onClick={() => handleEdit(e.id)}>Edit</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(e.id)}>Delete</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleComplete(e.id)}>
                                            complete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                        : ""}
                </tbody>
            </table>
        </div>
    );
}
