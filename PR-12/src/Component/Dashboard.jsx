import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { db, auth } from '../../firebaseConfig'
import { collection, deleteDoc, doc, getDoc, updateDoc, getDocs, addDoc } from 'firebase/firestore'

export default function Dashboard() {
    const [user, setUser] = useState(null)
    const [record, setRecord] = useState([])

    const [task, setTask] = useState("")
    const [priority, setPriority] = useState("")
    const [editIndex, setEditIndex] = useState(null)

    useEffect(() => {
        let sub = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                console.log(currentUser)
            }
        })
    }, [])

    useEffect(() => {
        if (user) {
            fetchUser()
            fetchData()
        }
    }, [user])

    const fetchUser = () => {
        console.log(user)
        getDoc(doc(db, "users", user.uid))
            .then(data => {
                console.log(data.data())
            })
    }

    const fetchData = async () => {
        let allData = await getDocs(collection(db, "Todos"))
        let newData = allData.docs.map((data) => ({ docId: data.id, ...data.data() }))
        console.log(newData)
        setRecord(newData)
    }

    const handleTask = async () => {
        let obj = { uid: user.uid, task, priority };

        if (editIndex === null) {
            const addData = await addDoc(collection(db, "Todos"), obj);
            setRecord([...record, { docId: addData.id, ...obj }]);  // Include docId in state update
        } else {
            await updateDoc(doc(db, "Todos", editIndex), obj);  // Await the update operation
            fetchData();  // Fetch updated data
        }

        setTask('');
        setPriority('');
        setEditIndex(null);
    };


    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "Todos", id))
        setRecord(record.filter(item => item.docId !== id))
    }


    const handleEdit = (id) => {
        let singleData = record.find(item => item.docId === id)
        if (singleData) {
            setTask(singleData.task); // Set the task to edit
            setPriority(singleData.priority); // Set the priority to edit
            setEditIndex(id); // Set the docId of the task being edited
        }
    }

    return (
        <>

            <div className="signup-container">
                <h2>Task Manager</h2>
                <input type="text" className="task-field" placeholder="Enter Task" value={task} onChange={(e) => setTask(e.target.value)} /><br /><br />
                <input type="text" className="priority-field" placeholder="Enter Priority" value={priority} onChange={(e) => setPriority(e.target.value)} /><br /><br />
                <button className="task-btn" onClick={handleTask}>
                    {editIndex === null ? "Add Task" : "Update Task"}
                </button>
            </div>
            <br />
            <table className="task-container">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Priority</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record &&
                        record.map((item, idx) => (
                            item.uid === user.uid ? (
                                <tr key={idx}>
                                    <td>{item.task}</td>
                                    <td>{item.priority}</td>
                                    <td className='cbutton'>
                                        <button className="edit-btn" onClick={() => handleEdit(item.docId)}>Edit</button>
                                        <button className="delete-btn" onClick={() => handleDelete(item.docId)}>Delete</button>
                                    </td>
                                </tr>
                            ) : null
                        ))
                    }
                </tbody>
            </table>


        </>
    )
}
