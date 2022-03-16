import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProfile } from '../Redux/Action/Loginaction';
export default function ActionAreaCard() {
  const id = useSelector((state) => state.auth.id) || 1;
  console.log('id===', id);
  const dispatch = useDispatch();
  const [profile, setprofile] = useState({});
  const users = useSelector((state) => state.users);
  useEffect(() => {
    async function _GET_PROFILE() {
      try {
        const data = await dispatch(getProfile(id));
        setprofile(data)
        // console.log("data==>",data);
      } catch (error) {
        console.log(error);
      }
    }
    _GET_PROFILE();
  }, []);
  return (
    <>
      {profile.data && (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {console.log(profile.data.id)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </>
  );
}
