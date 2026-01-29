import "./login.css"

export default function Login() {
  return (
  <>
    <div className = "login-container">
      <div className = "login-boc">
        <form className = "login-form">
          <h2>Entrar</h2>
            <div className = "input-login">
              <input type="email" placeholder="Email" required/>
              <label>Email</label>

              <div className="input-login">
                <input type = "password" placeholder="Senha" required/>
                <label>Senha</label>
              </div>
              <button type = "submit">Entrar</button>
            </div>
        </form>
      </div>
    </div>
  </>
  )
}