import { createContext,Dispatch, useReducer } from "react";
import { taskReducer,initialState, TaskState, TaskActions } from "../reducers/TaskReducer";
type TaskContextProps = {
    state:TaskState
    dispatch:Dispatch<TaskActions>
}
type TaskProviderProps = {
    children:React.ReactNode
}
export const TaskContext = createContext<TaskContextProps>({}as TaskContextProps)

export const TaskProvider = ({children}:TaskProviderProps)=>{
    const [state,dispatch]=useReducer(taskReducer,initialState)
    return(
        <TaskContext.Provider value={{state,dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}