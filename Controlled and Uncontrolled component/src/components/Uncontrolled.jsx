import React, { useRef } from 'react'

export default function Uncontrolled() {
    const inputRef = useRef()
    const handleClick = () => {
        console.log(inputRef.current.value);
    }
    return (
        <>
            <h1>UnControlled Components</h1>
            <input type="text" ref={inputRef} /> <br /><br />
            <button onClick={handleClick}>Click Here</button>
        </>
    )
}