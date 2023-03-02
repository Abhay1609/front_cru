import React, { useState } from 'react'
import axios from 'axios'
export default function HttpPost() {
  const [name, createUser] = useState('')
  const [roll, createRoll] = useState('')
  const [city, createCity] = useState('')
  const onSubmit = async (e) => {
    e.preventDefault()
    const post = { name: name,roll:roll , city:city }
    try {
      const res = await axios.post('http://127.0.0.1:8000/student', post)
      console.log(res.data)
    } catch (e) {
      alert(e)
    }
  }
  return (
    <div className="container mt-2">
      <h2>React HTTP Post Request Example</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-2 mt-3">
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            onChange={(event) => {
              createUser(event.target.value)
            }}
            value={name}
          />
          <input
            type="number"
            placeholder="roll"
            className="form-control"
            onChange={(event) => {
              createRoll(event.target.value)
            }}
            value={roll}
          />
          <input
            type="text"
            placeholder="city"
            className="form-control"
            onChange={(event) => {
              createCity(event.target.value)
            }}
            value={city}
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Create
        </button>
      </form>
    </div>
  )
}