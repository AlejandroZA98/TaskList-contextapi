import { Task } from "../types";

export type TaskActions=
{type:'add-task',payload:{task:Task}}
|{type:'delete-task',payload:{id:Task['id']}}
|{type:'select-task',payload:{id:Task['id']}}
|{type:'update-task',payload:{task:Task}}
|{type:'filter-task',payload:{filter:string}}

export type TaskState={
    tasks:Task[],
    editId:string,
    filterTask:string,
}
// const TasksLocalStorage=():Task[]=>{
//     const localStorageTasks=localStorage.getItem('tasks')
//     return localStorageTasks? JSON.parse(localStorageTasks):[]
// }
const TasksLocalStorage:Task[]= JSON.parse(localStorage.getItem('tasks')||'[]')
export const initialState:TaskState={
    tasks:TasksLocalStorage,
    editId:'',
    filterTask:''
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
    return{...state,
        tasks:state.tasks.map(task=>task.id===action.payload.task.id?action.payload.task:task),
        editId:''
    
    }
}
if (action.type==='filter-task'){
    return {
        ...state,
        filterTask:action.payload.filter
    }
}
return state;
}