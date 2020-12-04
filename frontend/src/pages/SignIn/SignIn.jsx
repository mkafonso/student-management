import React, { useState } from "react";

// import styles
import { LoginForm } from "./styles";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginForm = (e) => {
    e.preventDefault();
    console.log(email, password);
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
      <button>Entrar</button>
    </LoginForm>
  );
};

export default SignIn;
