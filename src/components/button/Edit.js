import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";

export default function Edit(props) {
  const [open, setOpen] = React.useState(false);
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
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="btn btn-success" onClick={handleClickOpen}>
        Edit
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <div>
            <form onSubmit={mysubmit}>
              <h1 className="text-center  bg-light  p-2 rounded-2  mb-4 headerr">
                Edit
              </h1>

              <TextField
                label="title"
                name="title"
                onChange={myhandler}
                className="w-100 mt-3"
                variant="outlined"
                value={props.title}
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
                value="change"
              />
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
