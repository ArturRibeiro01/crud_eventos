import React, { useState } from "react";
import firebase from "../../config/firebase";
import "firebase/auth";

import "./usuario-novo.css";

const NovoUsuario = () => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();
  const [msg, setMsg] = useState();

  function Cadastrar() {
    setMsgTipo(null);

    if (!email || !senha) {
      setMsgTipo("erro");
      setMsg("Informe e-mail e senha para efetuar o cadastro");
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then((resultado) => {
        setMsgTipo("sucesso");
      })
      .catch((erro) => {
        alert(erro);
      });
  }

  return (
    <div className="form-cadastro">
      <form className="text-center form-login mx-auto mt-5">
        <h1 className="h3 mb-3 text-black font-weight-bold">Cadastro</h1>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control my-2"
          placeholder="Email"
        />
        <input
          onChange={(e) => setSenha(e.target.value)}
          type="password"
          className="form-control my-2"
          placeholder="Senha"
        />
        <button
          onClick={Cadastrar}
          type="button"
          className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro"
        >
          Cadastrar
        </button>

        <div className="msg-login text-black text-center my-5">
          {msgTipo === "sucesso" && (
            <>
              <span className="sussess-message">
                Usuário cadastrado com sucesso
              </span>
              <span>&#128526;</span>
            </>
          )}
          {msgTipo === "erro" && (
            <>
              <span>🔒 </span>
              <span className="error-message">{msg}</span>
              <span> &#128549;</span>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default NovoUsuario;
