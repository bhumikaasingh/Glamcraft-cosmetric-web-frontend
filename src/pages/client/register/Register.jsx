import React, { useState, useEffect } from "react";
import { registerUserApi } from "../../../api/Api";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // State for errors
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    }
  }, 
  [navigate]);

  // Validation function
  const validate = () => {
    let isValid = true;
    setFirstNameError('');
    setLastNameError('');
    setEmailError('');
    setPasswordError('');

    if (firstName.trim() === '') {
      setFirstNameError('Please enter first name');
      isValid = false;
    }
    if (lastName.trim() === '') {
      setLastNameError('Please enter last name');
      isValid = false;
    }
    if (email.trim() === '') {
      setEmailError('Please enter email');
      isValid = false;
    }
    if (password.trim() === '') {
      setPasswordError('Please enter password');
      isValid = false;
    }

    return isValid;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const data = {
      firstName,
      lastName,
      email,
      password
    };

    registerUserApi(data).then((res) => {
      if (res.data.success === false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);
        navigate('/');
      }
    });
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-6 p-4">
          <h2>Welcome to <span className="text text-primary font-bold">Glam Craft</span></h2>
          <h3 className="mt-1 mb-2 text-center text-3xl m-8 font-bold">Register</h3>
          <form className="mt-3" onSubmit={handleSubmit}>
            <div className="form-outline mb-2">
              <label>First Name</label>
              <input
                type="text"
                className='form-control'
                placeholder="Enter your first name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              {firstNameError && <p className="text-danger">{firstNameError}</p>}
            </div>
            <div className="form-outline mb-2">
              <label className="mt-2">Last Name</label>
              <input
                type="text"
                className='form-control'
                placeholder="Enter your last name"
                onChange={(e) => setLastName(e.target.value)}
              />
              {lastNameError && <p className="text-danger">{lastNameError}</p>}
            </div>
            <div className="form-outline mb-2">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <small className="text text-danger">{emailError}</small>}
            </div>
            <div className="form-outline mb-2">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <small className="text text-danger">{passwordError}</small>}
            </div>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-primary w-50">Register</button>
            </div>
          </form>

          <div className="text-center mt-4">
            <div className="flex items-center justify-center">
              <img
                height={30}
                width={30}
                src="assets/images/google.png"
                alt="Google"
                className="mt-3"
              />
              <img
                height={40}
                width={40}
                src="assets/images/instagram.png"
                alt="Instagram"
                className="mt-3"
              />
              <img
                height={30}
                width={30}
                src="assets/images/facebook.png"
                alt="Facebook"
                className="mt-3"
              />
            </div>
            <h4 className="mt-3">
              If you already have an account.{" "}
              <Link to="/login">Login</Link>
            </h4>
          </div>
        </div>
        <div className="col-md-6 image-container p-4">
          <img
            src="assets/images/register.avif"
            className="rounded img-fluid"
            alt="Register"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
