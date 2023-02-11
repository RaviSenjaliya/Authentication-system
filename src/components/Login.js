import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import { useState } from "react";
import TextField from "@mui/material/TextField";
import "./Registration.css";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import Home from "./home";

const Login = () => {
  // const [row, setrow] = useState([]);
  // const [col, setcol] = useState([
  //   { field: "created", filter: "agNumberColumnFilter" },
  //   { field: "id", filter: "agNumberColumnFilter" },
  //   { field: "email", filter: true, sortable: true },
  //   { field: "title", filter: true, sortable: true },
  //   { field: "firstName", filter: true, sortable: true },
  //   { field: "lastName", filter: true, sortable: true },
  // ]);
  const [Data, setData] = useState({
    email: "",
    password: "",
  });
  const myhandler = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  const mynav = useNavigate();

  // const Datadisplay = (e) => {
  //   e.preventDefault();

  //   let data = localStorage.getItem("user");
  //   let x = JSON.parse(data);

  //   axios
  //     .get("http://localhost:4000/accounts", {
  //       headers: {
  //         Authorization: "Bearer " + x?.jwtToken,
  //       },
  //     })
  //     .then((y) => {
  //       console.log(y.data);
  //       setrow(y.data); //<<<-------------
  //       <Home logData={setrow(y.data)} />;
  //     })
  //     .catch((y) => {
  //       console.log(y);
  //     });
  // };
  const mysub = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/accounts/authenticate", Data)
      .then((y) => {
        console.log(y);
        localStorage.setItem("user", JSON.stringify(y.data));
        toast("login successfully");
        mynav("/home");
      })
      .catch((y) => {
        toast("404");
      });
  };
  return (
    <div>
      <Nav />
      <div className="midd toop mt-5 p-4">
        <form onSubmit={mysub}>
          <h1 className="text-center  bg-light  p-2 rounded-2  mb-4 headerr">
            Log-In
          </h1>

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

          <input
            type="submit"
            className="btn btn-danger mt-4  form-control"
            value="Submit"
          />
          {/* <button
            className="btn btn-danger mt-4  form-control"
            onClick={Datadisplay}
          >
            Show-Data
          </button> */}
        </form>
      </div>
      {/* <div
        className="ag-theme-alpine midd top mt-5 p-4 "
        style={{ width: 800, height: 400 }}
      >
        <AgGridReact rowData={row} columnDefs={col} />
      </div> */}
    </div>
  );
};

export default Login;
