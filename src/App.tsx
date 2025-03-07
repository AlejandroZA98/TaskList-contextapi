
import './App.css'
import Filtering from './components/Filtering'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
 

  return (
    <>
      <header className='bg-blue-300 py-4 max-h-72'>
        <h1 className='text-2xl  text-center uppercase font-black'>Creacion de Actividades</h1>
      </header>
      <p className='text-gray-600 text-2xl text-center'>Asigna tareas de equipo</p>
      <div className='max-w-3xl mx-auto bg-white p-4 shadow-lg rounded-lg mt-4'>
        <TaskForm></TaskForm>
      </div>
      <div className='max-w-3xl mx-auto bg-white p-4 shadow-lg rounded-lg mt-4'>

      <Filtering></Filtering>
      </div>
      <div className='max-w-3xl mx-auto bg-white p-4 shadow-lg rounded-lg mt-4'> 
      <TaskList></TaskList>

      </div>
    </>
  )
}

export default App
