import { act } from "react";
import { Task } from "../types";

export type TaskActions=
{type:'add-task',payload:{task:Task}}
|{type:'delete-task',payload:{id:Task['id']}}
|{type:'select-task',payload:{id:Task['id']}}
|{type:'update-task',payload:{task:Task}}
export type TaskState={
    tasks:Task[],
    editId:string
}
export const initialState:TaskState={
    tasks:[],
    editId:''
}

export const taskReducer=(state:TaskState=initialState,action:TaskActions)=>{
if(action.type==='add-task'){
    return {...state,tasks:[...state.tasks,action.payload.task]}
}

if(action.type==='delete-task'){
    return {...state,tasks:state.tasks.filter(task=>task.id!==action.payload.id)}
}
if (action.type==='select-task'){
    return{...state,editId:action.payload.id}
}
if (action.type==='update-task'){
    console.log("Editando",action.payload.task)
    return{...state,
        tasks:state.tasks.map(task=>task.id===action.payload.task.id?action.payload.task:task),
        editId:''
    
    }
}
return state;
}