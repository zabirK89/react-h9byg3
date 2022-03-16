import { Fetching_Api } from '../middlewares';
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../Type/logintype';
// import {useNavigate} from "react-router"
// let navigate =useNavigate()

export const userLogin = (body) => async (dispatch) => {
  try {
    const data = await dispatch({
      type: Fetching_Api,
      [Fetching_Api]: { url: `/login`, method: 'POST', body },
    });
    console.log('datat===', data);
    dispatch({
      type: LOGIN_SUCCESS,
      body: { ...data },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => ({
  type: LOGOUT_SUCCESS,
});

export const RegisterLogin = (body, navigate) => async (dispatch) => {
  try {
    const data = await dispatch({
      type: Fetching_Api,
      [Fetching_Api]: { url: `/register`, method: 'POST', body },
    });
    console.log('datat===', data);
    dispatch({
      type: LOGIN_SUCCESS,
      body: { ...data },
    });
    // navigate('/admin');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProfile = (id) => async (dispatch) => {
  try {
    const data = await dispatch({
      type: Fetching_Api,
      [Fetching_Api]: { url: `/users/${id}`, method: 'GET' },
    });
    console.log('datat===', data);
    // dispatch({
    //   type: LOGIN_SUCCESS,
    //   body: { ...data },
    // });

    return data;
  } catch (error) {
    console.log(error);
  }
};
