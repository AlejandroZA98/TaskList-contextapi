import { users } from '../data/users';
import { formatDate } from '../helpers';
import { useTask } from '../hooks/useTask';
import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { Task } from '../types';
import { useMemo } from 'react';
import { status_activity } from '../data/status_activity';

export default function TaskList() {
    const {state,dispatch} = useTask();
    console.log(state.tasks)
    function getUser(TaskUserId: Task['user']){
        const userName= users.filter(user=>user.id === +TaskUserId)
        return userName[0].name
    }
    function getStatus(TaskUserId: Task['status']){
        console.log(TaskUserId)
        const statusId= status_activity.filter(status=>status.id === +TaskUserId)
        console.log(statusId[0].name)
        return statusId[0].name
    }
  return (
    <>
    <div>
        {state.tasks.map((task)=>(
            <div key={task.id} className='mt-2 shadow-2xl border-gray-200  gap-3 items-center flex justify-between'>
                <div className=' relative'>
                    <p className='text-2xl font-bold bg-blue-500'>{task.taskName}</p>
                    <p className='text-2xl font-bold text-slate-500 mb-2'>Responsable: {getUser(task.user)} </p>
                    
                    <span>                
                        <p className='font-black'>Fecha de inicio: <span className='text-green-600'>{formatDate(task.finish_date!.toString())}</span>
                        </p>
                    </span>
                    <br/>
                    <p className='font-black'>Fecha de terminacion: <span className='text-red-500'>{formatDate(task.finish_date!.toString())}</span></p>
                    <br />
                    <small className='font-black text-red-400'>Status: {getStatus(task.status)}</small>
                    
                </div>
                <div className='flex gap-5 items-center'>
                        <button>
                       <PencilSquareIcon className='h-8 w-8 text-gray-800' onClick={()=>dispatch({type:'select-task',payload:{id:task.id}})}/>
                        </button>
                        <button>
                       <XCircleIcon className='h-8 w-8 text-red-500' onClick={()=>dispatch({type:'delete-task',payload:{id:task.id}})}/>
                        </button> 
                </div>
              
                
             </div>
             
        ))
        

        }
    </div>
    </>

)
}
