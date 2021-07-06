import './login.css'

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Kenyasocial</h3>
                    <span className="loginDesc">Connect with friends anywhere on Kenyasocial.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginbtn">log in</button>
                        <span className="loginForgot">Forgot password?</span>
                        <button className="loginRegisterBtn">Create a new account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
