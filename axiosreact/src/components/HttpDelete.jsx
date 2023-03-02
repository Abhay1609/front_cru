import React, { useState } from 'react'
import axios from 'axios'
export default function HttpDelete() {
  const [id, createId] = useState('')
  const URI = 'http://127.0.0.1:8000/student'

  const onSubmit = async (e) => {
        e.preventDefault() 
        const headers = { 
            'Authorization': 'Bearer my-token',
            'My-Custom-Header': 'foobar'
        };
    


        
    
    try {
      const res = await axios.delete(`${URI}/${id}`)
   
      console.log(res.data)
    //   createId(null)
    } catch (e) {
      alert(e)
    }
  }
//   const onSubmit = async (e) => {
//     try {
//       const res = await axios.delete('http://127.0.0.1:8000/student',1)
//       console.log('Item successfully deleted.')
//     } catch (error) {
//       alert(error)
//     }
//   }
  return (
    <div className="container mt-2">
      <h2>React HTTP Post DElete Request Example</h2>
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
  );
}