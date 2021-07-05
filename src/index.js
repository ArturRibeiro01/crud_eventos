import React from "react";
import ReactDOM from "react-dom";
// import Login from "../src/views/login/index";
import NovoUsuario from "../src/views/usuario-novo/index";

ReactDOM.render(
  <React.StrictMode>
    <NovoUsuario />
    {/* <Login /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
