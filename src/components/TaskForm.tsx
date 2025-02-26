import DatePicker from 'react-date-picker' 
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'
import { users } from "../data/users";
import { ChangeEvent, useState } from "react";
import { Task, Value } from "../types";
import { v4 as uuidv4 } from "uuid";
import { status_activity } from "../data/status_activity";
import { useTask } from '../hooks/useTask';
import ErrorMessage from './ErrorMessage'

export default function TaskForm() {
    const [task,setTask] = useState<Task>({
        id:uuidv4(),
        taskName:'',
        user:0,
        status:'',
        create_date:new Date(),
        finish_date:new Date(),
      });
    const [error,setError] = useState('');
    const {state,dispatch} = useTask();
    // Evento en inputs
    const handleChange=(e:ChangeEvent<HTMLInputElement>| ChangeEvent<HTMLSelectElement>)=>{
    const {name,value} = e.target;
    console.log(name,value);
    setTask({...task,[name]:value});
     }
     // Evento en fecha
    const handleChangeDate=(value:Value)=>{
    console.log(value)
    setTask({...task,finish_date:value})
    }
    //SUBMIT
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(Object.values(task).includes('')){
            setError('Todos los campos son obligatorios')
            return
        }
        else{
            dispatch({type:'add-task',payload:{task}})
            setTask({
                id:uuidv4(),
                taskName:'',
                user:0,
                status:'',
                create_date:new Date(),
                finish_date:new Date(),
            })
            setError('')
        }
    }

  return (
        <>
        <form onSubmit={handleSubmit} className='space-y-4'>
        <legend
            className='uppercase text-center text-2xl font-black border-b-4'>Nueva Actividad</legend>
                {error && <ErrorMessage>{error}</ErrorMessage>}

                <div className='flex flex-col  gap-2'>
                    <label htmlFor="taskName"
                    className='text-xl'>Actividad:</label>
                    <input type="text" id='taskName' placeholder='Añade nombre del gasto' 
                    className='bg-slate-200 p-2'
                    name='taskName' 
                    value={task.taskName}
                    onChange={handleChange}
                    />

                </div>

                <div className='flex flex-col  gap-2'>
                    <label htmlFor="category"
                    className='text-xl'>Usuario:</label>

                    <select 
                    id='user' 
                    className='bg-slate-200 p-2'
                    name='user'
                    value={task.user}
                    onChange={handleChange}

                    >
                        <option value="">--Seleccione--</option>
                        {
                            users.map((user)=>(
                                <option key={user.id} value={user.id}>{user.name}</option>
                            ))
                        }
                    </select>

                    

                     <label htmlFor="status"
                    className='text-xl'>Status:</label>
                    <select 
                    id='status' 
                    className='bg-slate-200 p-2'
                    name='status'
                    value={task.status}
                    onChange={handleChange}>
                        <option value="">--Seleccione--</option>
                        {
                            status_activity.map((user)=>(
                                <option key={user.id} value={user.id}>{user.name}</option>
                            ))
                        }
                    </select>
                    
                </div>

                <div className='flex flex-col  gap-2'>
                

                    <div className='flex flex-col mt-2 gap-2'>
                    <label htmlFor="amount"
                    className='text-xl'>Fecha de Terminacion:</label>
                    <DatePicker className='bg-slate-100 p-2 border-0' onChange={handleChangeDate} value={task.finish_date}></DatePicker>
                   
                    </div>

                </div>
            <input type="submit"
            className='bg-blue-600 cursor-pointer w-full mt-1 p-2 text-white uppercase
            font-bold rounded-lg' value="Guardar" />   

        </form>
        
        </>
  )
}
