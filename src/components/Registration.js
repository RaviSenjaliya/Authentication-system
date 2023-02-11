import React from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import "./Registration.css";
import Nav from "./Nav";

const Registration = () => {
  const [Data, setData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: true,
  });

  const myhandler = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };
  const mysubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/accounts/register", Data)
      .then((e) => {
        console.log(e.data);
        toast("successfully...");
      })
      .catch(() => {
        toast("Something wrong...");
      });
  };
  return (
    <div>
      <Nav />
      <div className="midd toop mt-5 p-4 ">
        <form onSubmit={mysubmit}>
          <h1 className="text-center  bg-light  p-2 rounded-2  mb-4 headerr">
            Registration
          </h1>

          <TextField
            label="title"
            name="title"
            onChange={myhandler}
            className="w-100 mt-3"
            variant="outlined"
          />
          <TextField
            label="firstName"
            name="firstName"
            onChange={myhandler}
            className="w-100 mt-3"
            variant="outlined"
          />
          <TextField
            label="lastName"
            name="lastName"
            onChange={myhandler}
            className="w-100 mt-3"
            variant="outlined"
          />
          <TextField
            label="email"
            name="email"
            onChange={myhandler}
            className="w-100 mt-3"
            variant="outlined"
          />
          <TextField
            label="password"
            name="password"
            onChange={myhandler}
            className="w-100 mt-3"
            variant="outlined"
          />
          <TextField
            label="confirmPassword"
            name="confirmPassword"
            onChange={myhandler}
            className="w-100 mt-3"
            variant="outlined"
          />

          <input
            type="submit"
            className="btn btn-danger mt-4  form-control"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Registration;
