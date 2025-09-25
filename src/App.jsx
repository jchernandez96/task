import { useState } from 'react'
import './App.css'

function App() {

  const [tarea, setTarea] = useState("");
  const [Responsable, setResponsable] = useState("");
  const [fecha, setFecha] = useState("");

  return (
    <>
      <div className='container m-2'>
        <label className='col-md-3'>Nombre Tarea
          <input type="text" className='form-control' value={tarea} onChange={(e) => setTarea(e.target.value)} placeholder='Tarea a Realizar' />
        </label>
        {<p>{tarea}</p>}
        <label className='col-md-3'>Responsable
          <input type="text" className='form-control' value={Responsable} onChange={(e) => setResponsable(e.target.value)} placeholder='Quien Realiza' />
        </label>
        {<p>{Responsable}</p>}
        <label className='col-md-3'>Fecha
          <input type="date" className='form-control' value={fecha} onChange={(e) => setFecha(e.target.value)} placeholder='Fecha a Realizar' />
        </label>
        {<p>{fecha}</p>}
      </div>
    </>
  )
}

export default App
