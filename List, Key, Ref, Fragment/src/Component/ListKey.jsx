import React from 'react'

export default function List() {
    const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

    return (
        <div>
            <h2>Fruit List</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    )
}