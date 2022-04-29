import { Avatar, TextField,Box} from '@mui/material';
import React from 'react';
import blok from "../assets/blok.png";
import {useContext} from "react";
import { BlogContext } from '../contexts/BlogContext';

const NewBlog = () => {

  const {info,setİnfo} = useContext(BlogContext)
  console.log(info)

  return (
    <Box>
      <form>
    <div className='blogform'>
         <Avatar
          alt="avatar_img"
          src={blok}
          sx={{ width: 150, height: 150 }}
          className="avatar"
        />
        <h1> ──── New Blog ──── </h1>
     
      <div className='blogform-field'>
      <TextField 
      name="title"
      value={info.title}
      onChange={(e)=>setİnfo({...info,title:e.target.value})}
      id="outlined-basic"
      label="Title"
      variant="outlined" />
      <TextField 
      value={info.imageUrl}
      name="imageUrl"
      id="outlined-basic" 
      label="Image Url"
      onChange={(e)=>setİnfo({...info,imageUrl:e.target.value})} 
      variant="outlined" />
      <TextField
      value={info.content}
       name="content"
       id="outlined-multiline-static"
       label="Content"
       onChange={(e)=>setİnfo({...info,content:e.target.value})}
       multiline
       rows={8}
        />
      </div>
      <button className='btn btn-primary'>SUBMİT</button>
    </div>
    </form>
    </Box>
  )
}

export default NewBlog;