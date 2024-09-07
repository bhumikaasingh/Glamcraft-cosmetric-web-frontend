import React, { useEffect, useState } from "react";
import { loginUserApi } from "../../../api/Api";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export default function Login1() {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/login');
    }
  }, [navigate]);

  const validation = () => {
    let isValid = true;
    setEmailError('');
    setPasswordError('');

    if (loginEmail === '' || !loginEmail.includes('@')) {
      setEmailError('Email is empty or invalid');
      isValid = false;
    }
    if (loginPassword.trim() === '') {
      setPasswordError('Password is empty');
      isValid = false;
    }

    return isValid;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validation()) {
      return;
    }

    const data = {
      email: loginEmail,
      password: loginPassword
    };

    loginUserApi(data).then((res) => {
      if (res.data.success === false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);

        localStorage.setItem('token', res.data.token);
        navigate('/');

        const convertedData = JSON.stringify(res.data.userData);
        localStorage.setItem('user', convertedData);
      }
    });
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-6 image-container p-4">
          <img
            src="assets/images/login.jpg"
            className="rounded img-fluid"
            alt="Login"
          />
        </div>

        <div className="col-md-6 p-4">
          <h2>Welcome to <span className="text text-primary font-bold">Glam Craft</span></h2>
          <h3 className="mt-1 mb-2 text-center text-3xl m-8 font-bold ">Login</h3>
          <form className="mt-3" onSubmit={handleLogin}>
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="loginEmail">
                Email
              </label>
              <input
                type="email"
                id="loginEmail"
                onChange={(e) => setLoginEmail(e.target.value)}
                className="form-control"
                placeholder="Enter Email"
              />
              {emailError && (
                <small className="text text-danger">{emailError}</small>
              )}
            </div>
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="loginPassword">
                Password
              </label>
              <input
                type="password"
                id="loginPassword"
                onChange={(e) => setLoginPassword(e.target.value)}
                className="form-control"
                placeholder="Enter Password"
              />
              {passwordError && (
                <small className="text text-danger">{passwordError}</small>
              )}
            </div>
            <br />
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary w-50"
              >
                Login
              </button>
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
              Create your account.{" "}
              <Link to="/register">
                Register
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
