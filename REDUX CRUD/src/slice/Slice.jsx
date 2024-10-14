import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name : "slice" , 
    initialState : {
        student : []
    },
    reducers : {
        adddata:(state , action)=>{
            state.student.push(action.payload)

        },
        deletedata:(state , action)=>{
            state.student = state.student.filter((item)=>{
                item.id != action.payload
            })
        }
    }
})


export const {adddata , deletedata} = slice.actions
export default slice.reducer