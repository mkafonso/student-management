import React, { useState } from "react";
import { Link } from "react-router-dom";

// import styles
import { LoginForm } from "./styles";

// import services
import { signInWithGoogle } from "../../services/firebase/firebase.utils";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginForm = (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <LoginForm onSubmit={handleLoginForm}>
      <h2>BASE DE DADOS</h2>

      <div className="form-group">
        <input
          value={email}
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Link to="/">
        <button className="login-btn">Entrar</button>
      </Link>
      <br />
      <Link to="#">
        <button onClick={signInWithGoogle} className="login-btn">
          Google
        </button>
      </Link>

      <br />

      <span>
        Não tem conta?
        <Link to="/login-usuario">Faça o cadastro aqui</Link>
      </span>
    </LoginForm>
  );
};

export default SignIn;
