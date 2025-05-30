import { useState } from "react";
export default function Register() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="register-container">
      <div className="form-box">
        <h2>{isLogin ? "Giriş" : "Qeydiyyat"}</h2>
        <form>
          {!isLogin && (
            <div className="input-group">
              <label>Ad Soyad</label>
              <input type="text" placeholder="Adınızı daxil edin" required />
            </div>
          )}
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Email daxil edin" required />
          </div>
          <div className="input-group">
            <label>Şifrə</label>
            <input type="password" placeholder="Şifrənizi daxil edin" required />
          </div>

          <button type="submit" className="submit-button">
            {isLogin ? "Daxil ol" : "Qeydiyyatdan keç"}
          </button>
        </form>

        <p className="toggle-text">
          {isLogin ? "Hesabınız yoxdur?" : "Artıq hesabınız var?"}{" "}
          <button className="toggle-button" onClick={toggleForm}>
            {isLogin ? "Qeydiyyatdan keç" : "Daxil ol"}
          </button>
        </p>
      </div>
    </div>
  );
}
