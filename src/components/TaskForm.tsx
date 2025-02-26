
export default function TaskForm() {
  return (
        <>
        <form action="">
        <div className='flex flex-col  gap-2'>
                    <label htmlFor="expenseName"
                    className='text-xl'>Nombre Gasto:</label>
                    <input type="text" id='expenseName' placeholder='Añade nombre del gasto' 
                    className='bg-slate-200 p-2'
                    name='expenseName' />

                </div>
                <div className='flex flex-col  gap-2'>
                    <label htmlFor="amount"
                    className='text-xl'>Cantidad:</label>
                    <input type="number" id='amount' placeholder='Añade la cantidad del gasto' 
                    className='bg-slate-200 p-2'
                    name='amount' />

                </div>
                

        </form>
        
        </>
  )
}
