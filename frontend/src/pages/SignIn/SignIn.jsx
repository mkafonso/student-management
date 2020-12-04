import React, { useState } from "react";
import { Link } from "react-router-dom";

// import styles
import { LoginForm } from "./styles";

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
      <span>Não tem conta? Faça o cadastro aqui</span>
    </LoginForm>
  );
};

export default SignIn;
