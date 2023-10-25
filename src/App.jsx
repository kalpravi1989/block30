import { useState } from 'react'
import './App.css'
import DisplayPost from './components/getPost'
import Login from './components/login'
import Register from './components/register'
import CreatePost from './components/createPost'
import HeaderLink from './components/navBar'
import Profile from './components/profile'
import {Routes,Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
function App() {
  const COHORT_NAME='2306-FTB-MT-WEB-PT';
  const baseUrl=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

  
  const [token,setToken]=useState(null);

  return (
    <>
       <header>
       <div id="container">
          <HeaderLink token={token}/>
        </div>
        </header>
        <Routes>
          <Route path='/register' element={<Register url={baseUrl} token={token} setToken={setToken}/>} />
          <Route path='/login' element={<Login url={baseUrl} token={token} setToken={setToken}/>} />
          <Route path='/' element={<DisplayPost url={baseUrl} token={token} setToken={setToken}/>}/>
          <Route path='/createPost' element={<CreatePost url={baseUrl} token={token} setToken={setToken}/>}/>
          <Route path='/profile' element={<Profile url={baseUrl} token={token}/>}/>
        </Routes>

      
    </>
  )
}

export default App
