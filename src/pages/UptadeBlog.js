import { Avatar, TextField,Box} from '@mui/material';
import blok from "../assets/blok.png";
import { useState} from "react";

import {useNavigate, useParams } from 'react-router-dom';
import { useFetch,editBlog } from '../helpers/functions';



const UptadeBlog = () => {
  const {info}= useFetch()
  
  const navigate = useNavigate();
  const {id} = useParams()
  const getUserInfo =info?.filter((user)=> user.id === id)
  
  const getInfo= getUserInfo ? getUserInfo[0] : { title: "", content: "", imageUrl: "" };
  const [newBlog ,setNewBlog] =useState({
      userEmail:getInfo.user,
      title:getInfo.title,
      imageUrl:getInfo.imageUrl,
      content:getInfo.content,
      date:getInfo.date,
      id:id
  });
  console.log(getInfo);
  const uptadeHandler=()=>{
    editBlog(newBlog)
    navigate("/")
  }
  
  return (
    <Box>
    
    <div className='blogform'>
         <Avatar
          alt="avatar_img"
          src={blok}
          sx={{ width: 150, height: 150 }}
          className="avatar"
        />
        <h1> ──── UPDATE ──── </h1>
  <form >
      <div className='blogform-field'>
      <TextField 
      name="title"
      defaultValue={getInfo?.title}
       onChange={(e)=>setNewBlog({...newBlog,title:e.target.value})}
       multiline
      //   id="outlined-basic"
        label="Title"
      //  variant="outlined" 
      id="outlined-multiline-static"
       />

      <TextField 
      defaultValue={getInfo?.imageUrl}
        name="imageUrl"
        // id="outlined-basic" 
        id="outlined-multiline-static"
        label="Image Url"
        onChange={(e)=>setNewBlog({...newBlog,imageUrl:e.target.value})}
        multiline />

      <TextField
      defaultValue={getInfo?.content}
       name="content"
       id="outlined-multiline-static"
       label="Content"
       onChange={(e)=>setNewBlog({...newBlog,content:e.target.value})}
       multiline
       rows={8}
        />
      </div>
      <button className='btn btn-primary mt-5' onClick={uptadeHandler}>SUBMİT</button>
      </form>
    </div>
    
    </Box>
  
  )
}

export default UptadeBlog