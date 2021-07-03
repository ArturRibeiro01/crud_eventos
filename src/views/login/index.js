import React, { useState } from "react";
import "./login.css";

import firebase from "../../config/firebase";
import "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();

  function logar() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then((resultado) => {
        setMsgTipo("sucesso");
      })
      .catch((erro) => {
        setMsgTipo("Deu Ruim");
      });
  }

  return (
    <div className="login-content d-flex align-itens-center">
      <form className="form-signin mx-auto">
        <div className="text-center mb-4">
          {/* <img
            className="mb-4"
            src=""
            alt="foto do sistema"
            width="72"
            height="72"
          /> */}
          <h1 className="h3 mb-3 login-title">Login</h1>
        </div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="inputEmail"
          className="form-control my-2"
          placeholder="Email"
        />
        <input
          onChange={(e) => setSenha(e.target.value)}
          type="password"
          id="inputPassword"
          className="form-control my-2"
          placeholder="Senha"
          required
        />
        <button
          onClick={logar}
          className="btn btn-lg btn-block btn-login"
          type="button"
        >
          Entrar
        </button>

        <div className="msg-login text-white text-center my-5">
          {msgTipo === "sucesso" && (
            <>
              <span className="sussess-message">WOW! Você está conectado</span>
              <span>&#128526;</span>
            </>
          )}
          {msgTipo === "Deu Ruim" && (
            <>
              <span>🔒 </span>
              <span className="error-message">
                Acesso Negado! Verifique seu usuário e senha
              </span>
              <span> &#128549;</span>
            </>
          )}
        </div>

        <div className="opcoes-login mt-5 text-center">
          <a href="www.globo.com.br" target="_blank">
            Quero me cadastrar
          </a>
          <span>&#9749;</span>
          <a href="www.netflix.com.br" target="_blank">
            Esquecí minha senha
          </a>
        </div>
        <div className="Copyrights">
          <p className="mt-5 ">Desenvolvido por Artur Ribeiro - 07/2021</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
