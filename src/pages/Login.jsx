import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-container">
      <h1>Iniciar Sesión en EasyAds</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>¿Olvidaste tu contraseña? <a href="/recover">Recupérala aquí</a></p>
      <p>¿No tienes una cuenta? <a href="/register">Regístrate</a></p>
    </div>
  );
}

export default Login;
