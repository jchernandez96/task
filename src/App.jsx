import { useState } from 'react'
import './App.css'

function App() {

  const [tarea, setTarea] = useState("");
  const [Responsable, setResponsable] = useState("");
  const [fecha, setFecha] = useState("");
  const [datos, setDatos] = useState([]);

  let agregarDatos = () => {
    let dat = { "tarea": tarea, "responsable": Responsable, "fecha": fecha };
    setDatos([...datos, dat]);
  }

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
        <label className='col-md-3'>Agregar
          <input type="button" value="Agregar" onClick={agregarDatos} className='btn btn-success' />
        </label>
      </div>
      <div className='container'>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>Tarea</th>
              <th>Responsable</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {
              datos.map((dato) => (
                <tr>
                  <td>{dato.tarea}</td>
                  <td>{dato.responsable}</td>
                  <td>{dato.fecha}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
