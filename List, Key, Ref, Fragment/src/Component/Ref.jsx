import React, { useRef } from 'react'

export default function Ref() {

    const inputRef = useRef();

    const Focus = () => {
        inputRef.current.focus()
    }

    return (
        <div>
            <h1>Refrence Example</h1>

            <input ref={inputRef} type="text" />

            <button onClick={Focus}>Focus Input</button>
        </div>
    )
}