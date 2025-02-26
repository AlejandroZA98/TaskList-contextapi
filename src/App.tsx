
import './App.css'
import TaskForm from './components/TaskForm'

function App() {
 

  return (
    <>
      <header className='bg-green-300 py-4 max-h-72'>
        <h1 className='text-2xl  text-center uppercase font-black'>Creacion de Actividades</h1>
      </header>
      <p className='text-gray-600 text-2xl text-center'>Asigna tareas de equipo</p>
      <div className='max-w-3xl mx-auto bg-white p-4 shadow-lg rounded-lg mt-4'>
        <TaskForm></TaskForm>
      </div>
    </>
  )
}

export default App
