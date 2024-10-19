import React from 'react'
import { useNavigate } from 'react-router-dom'

function TableData(props) {
  const navigate = useNavigate()
  const { array } = props;

  const handleNavigat = () => {
    navigate("/")
  }


  const handleEdit = (index) => {

  }

  const handleDelete = (index) => {

  }
  return (
    <div>
      <>
        <div className="container">
          <h2 className='mt-3'>Form Data</h2>
          <table className="table table-bordered mt-3">
            <thead>
              <tr>
                <th>Fisrt Name</th>
                <th>Last Name</th>
                <th>City</th>
                <th>Gender</th>
                <th>vehicle</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {array && array.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.fname}</td>
                    <td>{item.lname}</td>
                    <td>{item.country}</td>
                    <td>{item.language}</td>
                    <td>{item.vehicle}</td>
                    <td>
                      <button onClick={() => handleEdit(item, index)} className="btn btn-success">Edit</button>
                      <button onClick={() => handleDelete(index)} className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <button type="button" onClick={() => handleNavigat()} class="btn btn-primary mt-3">Go to Form</button>
        </div>
      </>
    </div>
  )
}

export default TableData
