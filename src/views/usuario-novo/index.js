import React, { useState } from "react";
import firebase from "../../config/firebase";
import "firebase/auth";

import "./usuario-novo.css";
import Navbar from "../../components/navbar";

const NovoUsuario = () => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();
  const [msg, setMsg] = useState();
  const [carregando, setCarregando] = useState();

  function Cadastrar() {
    setCarregando(1);

    setMsgTipo(null);

    if (!email || !senha) {
      setCarregando(0);
      setMsgTipo("erro");
      setMsg("Informe e-mail e senha para efetuar o cadastro");
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then((resultado) => {
        setCarregando(0);
        setMsgTipo("sucesso");
      })
      .catch((erro) => {
        setMsgTipo("erro");
        setCarregando(0);
        switch (erro.message) {
          case "Password should be at least 6 characters":
            setMsg("Sua senha precisa de ao menos 6 digitos");
            break;
          case "The email address is already in use by another account.":
            setMsg("Esse e-mail já está sendo usado.");
            break;
          case "The email address is badly formatted.":
            setMsg("Seu email não foi digitado em um padrão correto");
            break;
          default:
            setMsg("Não foi possivel cadastrar, tente novamente");
            break;
        }
      });
  }

  return (
    <>
      <Navbar />
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

          {carregando ? (
            <>
              <div class="spinner-border" role="status">
                <span class=""></span>
              </div>
            </>
          ) : (
            <button
              onClick={Cadastrar}
              type="button"
              className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro"
            >
              Cadastrar
            </button>
          )}

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
    </>
  );
};

export default NovoUsuario;
