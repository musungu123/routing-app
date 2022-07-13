 import React, { useState } from 'react'
// import axios from "axios";
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import Services from './components/Services';
import Home from './components/Home';
import Blog from './components/Blog';
import Contacts from './components/Contacts';
import SignUp from './components/SignUp';
import Login from './components/Login';

 function App() {

  // const [content, setContent] = useState()
  // const [users, setUsers] = useState([])
  const [openModal, setOpenModal] = useState(false)

  //  useEffect(() => {
  //   getContent()
  // }, [])

  // useEffect(() => {
  //   getUsers()
  // }, [])

  // const getContent = async () => {
  //   const response = await axios.get('http://localhost:8000/');
  //   setContent(response.data);
  // }

  // const getUsers  = async () => {
  //   const response = await axios.get('http://localhost:8000/users')
  //   setUsers(response.data)
  // }

  // const listUsers = users.map(item => {
  //   return(
  //     <tbody key={item.id}>
  //       <tr>
  //         <td>{item.id}</td>
  //         <td>{item.username}</td>
  //         <td>{item.email}</td>
  //       </tr>
  //     </tbody>
  //   )
  // })

  return (
    <div className='container'>

<BrowserRouter>
      <Navigation  setOpenModal = {setOpenModal}/>
      {openModal && <SignUp closeModal = {setOpenModal}/>}
        <Routes>
          <Route  path='/' element={<Home />}/>
          <Route  path='/about' element={<About />} />
          <Route  path='/services' element={<Services />} />
          <Route  path='/blog' element={<Blog />} />
          <Route  path='/contacts' element={ <Contacts />} /> 
          <Route path='/signup' element={ <SignUp />} />
          <Route path='/login' element={ <Login /> } />
        </Routes>
      </BrowserRouter>

      <h1>Data</h1>
      {/* <p>{content}</p> */}

      <table>
          {/* {listUsers} */}
      </table>

    </div>
  )
}

export default App