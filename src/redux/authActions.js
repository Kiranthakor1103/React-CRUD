import axios from 'axios';

// Action Types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

// Action Creators
const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

const registerSuccess = (token) => ({
  type: REGISTER_SUCCESS,
  payload: token,
});

const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});


export const loginUser = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', credentials);
      const { token } = response.data; 
      localStorage.setItem('token', token);
      dispatch(loginSuccess(token));
    } catch (error) {
      dispatch(loginFailure(error.response.data.message || 'Login failed'));
    }
  };
};


export const registerUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://dummyjson.com/auth/register', userData);
      const { token } = response.data; 
      localStorage.setItem('token', token); 
      dispatch(registerSuccess(token));
    } catch (error) {
      dispatch(registerFailure(error.response.data.message || 'Registration failed'));
    }
  };
};
