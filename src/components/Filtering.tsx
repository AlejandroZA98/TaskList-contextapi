import { ChangeEvent, useState } from 'react'
import { useTask } from '../hooks/useTask'

export default function Filtering() {
  const {dispatch} = useTask();
  let [filter,setFilter]=useState('')

  const handleFilter=(e:ChangeEvent<HTMLInputElement>)=>{
    const data_to_filter=e.target.value;
    setFilter(filter=data_to_filter)
    dispatch({type: 'filter-task', payload: {filter}})
  }
  return (
    <>
   
        <div className=''>
            <div className='flex flex-col  gap-2'>
                        <label htmlFor="filterTask"
                        className='text-xl'>Busqueda:</label>
                        <input type="text" id='filterTask' placeholder='Añade nombre del gasto' 
                        className='bg-slate-200 p-2'
                        name='filterTask'
                        value={filter}
                        onChange={handleFilter}
                        />

            </div>
                                
                            
                                
        </div>
    </>
  )
}
