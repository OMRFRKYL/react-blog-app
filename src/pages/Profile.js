
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {useContext} from "react";
import { AuthContext } from '../contexts/AuthContext';

const Profile = ()=> {

    const {currentUser} = useContext(AuthContext);

  return (
    <Card sx={{ maxWidth: 345, display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"3rem auto" }}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Display Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {currentUser.displayName === null ? "Not Found": currentUser.displayName}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Email Address
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {currentUser.email}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Profile;