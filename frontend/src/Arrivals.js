import React, { useState } from 'react'
import Data from './data.json'
import 'bootstrap/dist/css/bootstrap.css'
import './Arrivals.css'

const d = new Date();
let date=d.toString()

function Arrivals() {

  const [currentPage, setCurrentPage] = useState(1)
  const recordPerPage = 5
  const lastIndex = currentPage * recordPerPage
  const firstIndex = lastIndex - recordPerPage
  const records = Data.slice(firstIndex, lastIndex)
  const npage = Math.ceil(Data.length / recordPerPage)
  const numbers = []
  for(let i=1; i <=  npage; i++)
  {
    numbers.push(i)
  }

  return (

    <div>
    <div>
    <h2>Arrivals</h2>
    <p>{date}</p>
    </div>

    
  <div className = "Container">
    <table className='table table-bordered'>
      <thead>
      <th>Name</th>
      <th>Room Type</th>
      <th>Check-IN</th>
      <th>Check-Out</th>
      <th>Length Of Stay</th>
      <th>Confirmation Number</th>
      <th></th>
      </thead>
      <tbody>
        {records.map((d,i) => (
          <tr key = {i}>
            <td>{d.Name}</td>
            <td>{d.RT}</td>
            <td>{d.CI}</td>
            <td>{d.CO}</td>
            <td>{d.LOS}</td>
            <td>{d.CN}</td>
            <td><button>Check-In</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    
    </div>
    <nav >
      <ul className='pagination'>
        <li className='page-item'>
          <button className='page-link' onClick={prevPage}>Prev</button>
        </li>
        {
          numbers.map((n,i)=>(
            <li className='page-item' >
              <button className='page-link' onClick={() => setCurrentPage(n)} key = {i}>{n}</button>
            </li>
          ))
        }
        <li className='page-item'>
          <button  className='page-link' onClick={nextPage}>Next</button>
        </li>
      </ul>
    </nav>
    </div>
    
  )
  function prevPage(){
    if(currentPage !== 1)
    {
      setCurrentPage(currentPage -1)
    }
  }
  function nextPage(){
    if(currentPage !== npage)
    {
      setCurrentPage(currentPage + 1)
    }
  } 
}
export default Arrivals;