import React, { useState } from 'react'
import axios from 'axios'
export default function HttpGET() {
  const [id, createId] = useState('')

  const onSubmit = async (e) => {
    // e.preventDefault()
    const post = { id:id }
    const [pists, setPist] = React.useState(null);
    try {
      const res = await axios.get('http://127.0.0.1:8000//student', post)
      setPist(response.data)
      
      console.log(res.data)
      
    } catch (e) {
      alert(e)
    }
  }
  return (
    <>
    <div className="container mt-2">
      
      <form onSubmit={onSubmit}>
        <div className="mb-2 mt-3">
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
        <button type="submit" className="btn btn-danger">
          Create
        </button>
     

      </form>
     
    </div>
     </>
  );
}