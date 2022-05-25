import { Avatar, TextField,Box} from '@mui/material';
import  blok from "../assets/blok.png";
import {useContext} from "react";
import { BlogContext } from '../contexts/BlogContext';
import {AddUser} from "../helpers/functions"
import {useNavigate } from 'react-router-dom';
import { AuthContext } from "../contexts/AuthContext";



const NewBlog = () => {


  const {info,setİnfo} = useContext(BlogContext);
  const {currentUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange=(e)=>{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;

    e.preventDefault();
    setİnfo({
      ...info,
      [e.target.name]: e.target.value,
      user: currentUser.email,
      date: today,
    });
  };
 


  
  const handleFormSubmit=(e)=>{
    e.preventDefault();
    AddUser(info);
    navigate("/");
    setİnfo({[e.target.name]:""});
  };

  return (
    <Box>
    
    <div className='blogform'>
         <Avatar
          alt="avatar_img"
          src={blok}
          sx={{ width: 150, height: 150 }}
          className="avatar"
        />
        <h1> ──── NEW BLOG ──── </h1>
  <form onSubmit={handleFormSubmit}>
      <div className='blogform-field'>
      <TextField 
      name="title"
      value={info.title}
      onChange={handleChange}
      id="outlined-basic"
      label="Title"
      variant="outlined" />

      <TextField 
      value={info.imageUrl}
      name="imageUrl"
      id="outlined-basic" 
      label="Image Url"
      onChange={handleChange}
      variant="outlined" />

      <TextField
      value={info.content}
       name="content"
       id="outlined-multiline-static"
       label="Content"
       onChange={handleChange}
       multiline
       rows={8}
        />
      </div>
      <button className='btn btn-primary'>SUBMİT</button>
      </form>
    </div>
    
    </Box>
  )
}

export default NewBlog;