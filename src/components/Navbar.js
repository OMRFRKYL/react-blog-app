import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import cw from "../assets/cw.jpeg"
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../helpers/firebase';

const Navbar =()=>{
  const currentUser = false

  // const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout=()=>{
    logOut();
    navigate("/");

  }
  
  return (
    <Box sx={{ flexGrow: 1 }}>
    
      <AppBar position="static">
        <Toolbar>
          <Link to={"/"}>
       <img src={cw} alt="" style={{width:"25px"}}/>
         </Link>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} className="a" >
            ──── <span>{"<OMRFRKYL/>"}</span> Blog ────
          </Typography>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                { currentUser?
                (
                <div>
                  <MenuItem onClick={()=>navigate("/login")}>Login</MenuItem>
                  <MenuItem onClick={()=>navigate("/register")}>Register</MenuItem>
                </div>)
              :(
                <div>
                <MenuItem onClick={()=>navigate("/profil")}>Profil</MenuItem>
                <MenuItem onClick={()=>navigate("/newblog")} >New</MenuItem>
                <MenuItem  onClick={handleLogout}>Logout</MenuItem>
                </div> )}
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default Navbar;