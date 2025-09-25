import { useState } from 'react'
import './App.css'

function App() {

  const [tarea, setTarea] = useState("");
  const [responsable, setResponsable] = useState("");
  const [fecha, setFecha] = useState("");
  const [datos, setDatos] = useState([]);

  let agregarDatos = () => {
    let dat = { "tarea": tarea, "responsable": responsable, "fecha": fecha, "Estado":"Pendiente"};
    setDatos([...datos, dat]);
  }

  return (
    <>
      <div className='container m-2'>
        <label className='col-md-3'>Nombre Tarea
          <input type="text" className='form-control' value={tarea} onChange={(e) => setTarea(e.target.value)} placeholder='Tarea a Realizar' />
        </label>
        <label className='col-md-3'>Responsable
          <input type="text" className='form-control' value={responsable} onChange={(e) => setResponsable(e.target.value)} placeholder='Quien Realiza' />
        </label>
        <label className='col-md-3'>Fecha
          <input type="date" className='form-control' value={fecha} onChange={(e) => setFecha(e.target.value)} placeholder='Fecha a Realizar' />
        </label>
        <label className='col-md-3'>
          <input type="button" value="Agregar" onClick={()=>{agregarDatos()}} className='btn btn-success' />
        </label>
      </div>
      <div className='container'>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>Tarea</th>
              <th>Responsable</th>
              <th>Fecha</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {
              datos.map((v, i)=>{
                return  <tr key={i}>
                  <td>{v.tarea}</td>
                  <td>{v.responsable}</td>
                  <td>{v.fecha}</td>
                  <td>{v.Estado}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
