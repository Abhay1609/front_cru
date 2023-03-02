import React from 'react'
import axios from 'axios'
import HttpPost from './components/HttpPost'
import HttpUpdate from './components/HttpUpdate'
import HttpDelete from './components/HttpDelete'
import HttpGET from './components/HttpGet'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get('http://13.235.142.31:8000/student').then((response) => {
     
      setPost(response.data);
      
    });
  }, []);

  if (!post) return 
  null;

  

  return (
    <div id ='app'>
      <h3>For Creating New Data</h3>
      <HttpPost />
      <h3>Updating Existing data using its Id</h3>
      < HttpUpdate />
      <h3>Read Data</h3>
      <ul>
      <li><span className='roll'>ID</span><span className='roll'>Roll</span><span className='name'>Name</span><span className='city'>City</span></li>
      </ul>
     

      <ul>
      {post.map(pos => (
        <li><span className='roll'>{pos.id}</span><span className='roll'>{pos.roll}</span><span className='name'>{pos.name}</span><span className='city'>{pos.city}</span></li>
        ))}
      
    </ul>
 

      
      
  

      

 
    </div>
    
  );
  // return (
 
       
  //   <div className="App">
  //     <HttpPost />
  //   </div>
  // )
}
