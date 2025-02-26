import { Task } from "../types";

export type TaskActions=
{type:'add-task',payload:{task:Task}}

export type TaskState={
    tasks:Task[],

}
export const initialState:TaskState={
    tasks:[]
}

export const taskReducer=(state:TaskState=initialState,action:TaskActions)=>{
if(action.type==='add-task'){
    return {...state,tasks:[...state.tasks,action.payload.task]}
}
return state;
}