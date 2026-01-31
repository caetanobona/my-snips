import "./login.css"; 

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <form className="login-form">
          <h2 className="login-title">Entrar</h2>
          
          <div className="input-login">
            <input type="email" placeholder="Email" required />
            <label>Email</label>
          </div>

          <div className="input-login">
            <input type="password" placeholder="Senha" required />
            <label>Senha</label>
          </div>

          <button className="button-login" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}