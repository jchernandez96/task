import { useState } from 'react'
import './App.css'

function App() {

  const [tarea, setTarea] = useState("");
  const [responsable, setResponsable] = useState("");
  const [fecha, setFecha] = useState("");
  const [datos, setDatos] = useState([]);

  let agregarDatos = () => {
    let dat = { "tarea": tarea, "responsable": responsable, "fecha": fecha, "Estado":"Pendiente", "Borrar":""};
    setDatos([...datos, dat]);
  }

  let borrarDato = (i) => {
    let nuevoDatos = datos.filter((v, index) => index !== i);
    setDatos(nuevoDatos);
  }

  return (
    <>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-md-3 mb-3'>
            <label>Nombre Tarea</label>
            <input
              type="text"
              className='form-control'
              value={tarea}
              onChange={(e) => setTarea(e.target.value)}
              placeholder='Tarea a Realizar'
            />
          </div>
          <div className='col-md-3 mb-3'>
            <label>Responsable</label>
            <input
              type="text"
              className='form-control'
              value={responsable}
              onChange={(e) => setResponsable(e.target.value)}
              placeholder='Quien Realiza'
            />
          </div>
          <div className='col-md-3 mb-3'>
            <label>Fecha</label>
            <input
              type="date"
              className='form-control'
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          <div className='col-md-3 d-flex align-items-end mb-3'>
            <button
              onClick={agregarDatos}
              className='btn btn-success w-100'
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
      <div className='container'>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>Tarea</th>
              <th>Responsable</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Acciones</th>
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
                  <td><button className='btn btn-danger btn-sm' onClick={() => borrarDato(i)}>Borrar</button></td>
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