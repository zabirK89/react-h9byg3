import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProfile } from '../Redux/Action/Loginaction';
import { useNavigate } from "react-router-dom";
import { LOGOUT_SUCCESS } from "../Redux/Type/logintype";
import { AppBar, Button, CardMedia, Toolbar, Typography } from "@mui/material";
export default function ActionAreaCard() {
  const id = useSelector((state) => state.auth.id) || 1;
  console.log('id===', id);
  const dispatch = useDispatch();
  const [profile, setprofile] = useState({});
  const users = useSelector((state) => state.users);
  const navigate=useNavigate()
  useEffect(() => {
    async function _GET_PROFILE() {
      try {
        const data = await dispatch(getProfile(id));
        setprofile(data);
        // console.log("data==>",data);
      } catch (error) {
        console.log(error);
      }
    }
    _GET_PROFILE();
  }, []);
  const onLogout = (evt) => {
    localStorage.clear();
    dispatch({ type: LOGOUT_SUCCESS });
    navigate("/login");
  };
  function AllProfile(){
navigate("/allprofile")
  }
  return (
    <>
     <AppBar position="static" >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           My Profile
          </Typography>
          <Button color="inherit" onClick={AllProfile}>
          All Profile
          </Button>
          <Button color="inherit" onClick={onLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <br/>
      {profile.data && (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={profile.data.avatar}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {profile.data.first_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {profile.data.email}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </>
  );
}
