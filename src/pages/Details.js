import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useFetch,deleteBlog} from "../helpers/functions"
import {useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';

const Details = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const {info}= useFetch()

  const {currentUser} = useContext(AuthContext)
 
  const handleDelete=()=>{
    deleteBlog(id)
   navigate("/")
  }

  const getUserİnfo =info?.filter((user)=>user.id === id)

  const handleEdit=(id)=>{
    navigate(`/uptade/${id}`)

    
  }
  
  return (
    <div>
      {
        getUserİnfo?.map((item,index)=>(
         
          <Card sx={{ maxWidth: 345 }} key={index}>
            
        <CardMedia
        
        component="img"
        alt="green iguana"
        height="140"
        image={item.imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {item.title}
        </Typography>
        <Typography variant="body2" color="text.primary">
         {item.content}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {item.date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {item.user}
        </Typography>
      </CardContent>
      <CardActions>
        { currentUser.email === item.user ?(
           <div>
          <IconButton 
          onClick={handleDelete}
          aria-label="delete" 
          style={{color:"red",backgroundColor:"blue",border:"2px solid black",margin:"20px"}}>
              <DeleteIcon />
              <h5>Delete</h5>
          </IconButton>
            <IconButton
            onClick={()=>handleEdit(item.id)}
            aria-label="edit"
            style={{color:"blue",backgroundColor:"red",border:"2px solid black",margin:"20px"}}>
              <EditIcon />
              <h5>Edit</h5>
            </IconButton>
          </div>
          ):null
        }
      </CardActions>
      </Card>
        ))
      }
    </div>
  )
  
}

export default Details