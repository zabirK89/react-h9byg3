import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { AppBar, Button, CardMedia, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGOUT_SUCCESS } from "../Redux/Type/logintype";

const AllProfile = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getAllUsers = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const result = await response.json();
      console.log(result.data);
      setUsers(result.data || []);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const onLogout = (evt) => {
    localStorage.clear();
    dispatch({ type: LOGOUT_SUCCESS });
    navigate("/login");
  };

  const onProfileClicked = (evt) => {
    navigate("/profile");
  };
  return (
    <>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            All Profiles
          </Typography>
          <Button color="inherit" onClick={onProfileClicked}>
            My Profile
          </Button>
          <Button color="inherit" onClick={onLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} sx={{ p: 4 }}>
        {users.map((user) => {
          return (
            <>
              <Grid item sm={6} xs={12} key={user.email}>
              <h3>{user.first_name}</h3>
                <Typography>{user.email}</Typography>
                <CardMedia
                  component="img"
                  image={user.avatar}
                  sx={{ width: 150, mb: 4 }}
                  alt="Paella dish"
                />
               
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default AllProfile;
