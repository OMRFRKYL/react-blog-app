import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { AuthContext } from '../contexts/AuthContext';
import {useContext} from "react"
import { useNavigate } from 'react-router-dom';


const BlogCard = ({item,index}) => {

  console.log(item)
  const navigate = useNavigate()
  

  const {currentUser}= useContext(AuthContext) ;
  

  
  return (

    <Card className='cards'sx={{ maxWidth:350}} onClick={()=>currentUser ? navigate(`details/${item.id}`):navigate("/login")}>

       
         
          <CardMedia key={index}
            component="img"
            height="194"
            image={item.imageUrl}
            alt="Paella dish"
          />
          <CardContent>
        
          <Typography gutterBottom variant="h4" component="div">
            {item.title}
        </Typography>
            <Typography variant="body2" color="text.primary">
            {item.content}
            </Typography>
            <Typography gutterBottom variant="h8" component="div">
            {item.date}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
            {item.user}
        </Typography>
          </CardContent>

        {currentUser && (<CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>) }
        </Card>
  
  )
}

export default BlogCard