import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../redux/authActions';


const Auth = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginMode) {
      dispatch(loginUser(formData));
    } else {
      dispatch(registerUser(formData));
    }
  };

  const toggleMode = () => {
    setIsLoginMode((prev) => !prev);
  };

  return (
    <div className="auth-container">
      <h2>{isLoginMode ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submit-button">
          {isLoginMode ? 'Login' : 'Register'}
        </button>
      </form>
      <button onClick={toggleMode} className="toggle-button">
        Switch to {isLoginMode ? 'Register' : 'Login'}
      </button>
    </div>
  );
};

export default Auth;
