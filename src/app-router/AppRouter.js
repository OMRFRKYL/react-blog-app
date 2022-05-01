import React from 'react'
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Details from "../pages/Details";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Navbar from '../components/Navbar';
import NotFound from '../pages/NotFound';
import UptadeBlog from "../pages/UptadeBlog";




const AppRouter = () => {
  return (
  <BrowserRouter>
  <Navbar/>

    <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/details/:id' element={<Details/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/newblog' element={<NewBlog/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/uptade/:id' element={<UptadeBlog/>} />
        <Route path='*'           element={<NotFound/>} />
    
    </Routes>

    </BrowserRouter>

  );
}

export default AppRouter