import { createSlice } from "@reduxjs/toolkit";
export const count = createSlice({
    name: "count",
    initialState: {
        Taskmanager: []
},
reducers :{
    AddData:(state,action)=>{
    state.Taskmanager.push(action.payload)
    },
    DeleteData:(state,action)=>{
    let data = state.Taskmanager.filter((e)=>e.id != action.payload)
    state.Taskmanager=data
    },
    UpdateData:(state,action)=>{
    state.Taskmanager.map((e)=>{
        if(e.id == action.payload.id){
            e.name = action.payload.name
            e.age = action.payload.age
            e.email = action.payload.email
            e.num = action.payload.num
            e.task = action.payload.task
    }else{
        e
    }
    })
    }
}
})

export const {AddData,UpdateData,DeleteData} = count.actions
export default count.reducer;