import React, { useState } from 'react'
import TableData from './TableData'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { userSubmit } from '../Redux/Action'
const Form = () => {
  const [userDetails, setUserDetails] = useState({ fname: "", lname: "", country: "", language: "", vehicle: [] })
  const [userData, setUserData] = useState([])
  const [editIndex, setEditIndex] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
  }

  const handleCheck = (e) => {
    const arr = [...userDetails.vehicle]
    if (e.target.checked) {
      arr.push(e.target.value)
    } else {
      const index = arr.indexOf(e.target.value)
      arr.splice(index, 1)
    }
    setUserDetails({ ...userDetails, vehicle: arr })
  }

  const handleSubmit = () => {
    const data = userData
    if (editIndex !== null) {
      data[editIndex] = userDetails
      setUserData(data)
      setEditIndex(null)
    } else {
      data.push(userDetails)

      setUserData([...data])
    }
    dispatch(userSubmit(data))
    handleReset()
  }

  const handleReset = () => {
    setUserDetails({ fname: "", lname: "", country: "", language: "", vehicle: [] })
  }

  const handleDelete = (index) => {
    const newArr = [...userData]
    newArr.splice(index, 1)
    setUserData(newArr)
  }
  const handleEdit = (index) => {
    const arr = userData
    setUserDetails(arr[index])
    setEditIndex(index)
  }
  const handleNavigat = () => {
    navigate("/table")
  }
  return (
    <div>
      <h3> Form</h3>
      <div className="container-fluid">
        <label for="fname">First Name</label>
        <input type="text" class="form-control" id="fname" onChange={(e) => handleChange(e)} value={userDetails.fname} name="fname" placeholder="Your name.." />

        <label for="lname">Last Name</label>
        <input type="text" class="form-control" id="lname" onChange={(e) => handleChange(e)} value={userDetails.lname} name="lname" placeholder="Your last name.." />

        <label for="country">Country</label>
        <select id="country" class="form-control" onChange={(e) => handleChange(e)} value={userDetails.country} name="country">
          <option value="">Select Country</option>
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

        <p>Please select your favorite Web language:</p>
        <input type="radio" id="html" name="language" value="HTML" checked={userDetails.language === "HTML"} onChange={(e) => handleChange(e)} />
        <label for="html">HTML</label><br />
        <input type="radio" id="css" name="language" value="CSS" checked={userDetails.language === "CSS"} onChange={(e) => handleChange(e)} />
        <label for="css">CSS</label><br />
        <input type="radio" id="javascript" name="language" value="JavaScript" checked={userDetails.language === "JavaScript"} onChange={(e) => handleChange(e)} />
        <label for="javascript">JavaScript</label>
        <br /><br />

        <p>Please select your Vehicle:</p>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked={userDetails.vehicle.includes("Bike")} onChange={(e) => handleCheck(e)} />
        <label for="vehicle1"> I have a bike</label><br />
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" checked={userDetails.vehicle.includes("Car")} onChange={(e) => handleCheck(e)} />
        <label for="vehicle2"> I have a car</label><br />
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" checked={userDetails.vehicle.includes("Boat")} onChange={(e) => handleCheck(e)} />
        <label for="vehicle3"> I have a boat</label><br /><br />

        <button type="button" onClick={() => handleSubmit()}>Sumbit</button>
        <button type="button" >Reset</button>
        <button type="button" style={{ marginLeft: 8 }} onClick={() => handleNavigat()}>Go to Table</button>
      </div>
    </div>
  )
}

export default Form
