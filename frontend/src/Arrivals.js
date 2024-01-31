import React from 'react'
import Data from './data.json'

const d = new Date();
let date=d.toString()
function Arrivals() {
  return (

    <div>
    <div><h3>{date}</h3></div>

    <div><table>
      <thead>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      </thead>
      <tbody>
        {Data.map((d,i)=>(
          <tr key={i}>
            <td>{d.ID}</td>
            <td>{d.Name}</td>
            <td>{d.Email}</td>
          </tr>
        ))}
      </tbody>
    </table></div>

    </div>
    
  )
}
export default Arrivals;