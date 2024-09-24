import React from 'react'

export default function LocalStorage() {

    localStorage.setItem("name","Prince")
    localStorage.setItem("Subject","React")

    let data = localStorage.getItem("name")
    console.log(data)

    localStorage.removeItem("name")


    let obj = {name : "Prince" , subject : "React"}

    localStorage.setItem("myObj",JSON.stringify(obj))

    let objData = JSON.parse(localStorage.getItem("myObj"))
    console.log(objData)
  return (
    <div>
        
    </div>
  )
}
