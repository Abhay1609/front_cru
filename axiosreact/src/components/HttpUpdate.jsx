import React, { useState } from 'react'
import axios from 'axios'
import  './post.css'
export default function HttpUpdate() {
  const [id, createId] = useState('')
  const [name, createUser] = useState('')
  const [roll, createRoll] = useState('')
  const [city, createCity] = useState('')
  const onSubmit = async (e) => {
    // e.preventDefault()
    const post = { name: name,roll:roll, city:city , id:id }
    try {
      const res = await axios.put('http://13.235.142.31:8000/student', post)
      console.log(res.data)
    } catch (e) {
      alert(e)
    }
  }
  return (
    <div className="container mt-2">
      
      <form onSubmit={onSubmit}>
        <div className="box">
            <div className='line'>
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            onChange={(event) => {
              createUser(event.target.value)
            }}
            value={name}
          />
          </div>
          <div className='line'>
        <input
            type="number"
            placeholder="Id"
            className="form-control"
            onChange={(event) => {
              createId(event.target.value)
            }}
            value={id}
          />
          </div>
          <div className='line'>
         <input
            type="number"
            placeholder="Roll"
            className="form-control"
            onChange={(event) => {
              createRoll(event.target.value)
            }}
            value={roll}
          />
          </div>
          <div className='line'>
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
        </div>
        <button type="submit" className="btn btn-danger">
          Create
        </button>
      </form>
    </div>
  );
}