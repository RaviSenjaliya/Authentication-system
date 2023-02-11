import React from "react";
import axios from "axios";
import { confirm } from "react-confirm-box";
import { useState } from "react";

export default function Delet(props) {
  const MyDelete = () => {
    alert("delete");
    // let data = localStorage.getItem("user");
    // let x = JSON.parse(data);
    // axios
    //   .delete(`http://localhost:4000/accounts?=${props.data.id}`, {
    //     headers: {
    //       Authorization: "Bearer " + x?.jwtToken,
    //     },
    //   })
    //   .then((e) => {});
  };
  return (
    <div>
      <button className="btn btn-danger" onClick={(e) => MyDelete(e)}>
        delet
      </button>
    </div>
  );
}
