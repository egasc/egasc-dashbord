// import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, {  useEffect, useState } from "react";
// import { AuthContext } from "../../contexts/myContext";
import "./loggin.css";
import logo from "../../assets/EGASC.png";
import { auth } from "../../firebase/Config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Useform } from "../../Useform";
import Loding from "../Mianloding/Loding";

function Loggin() {
  let [form, setForm] = Useform({
    username: "",
    password: "",
  });
  
  // const { setLoggedin } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // functions----
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, form.username, form.password);
    } catch (e) {
      setLoading(false);
      setError("Wrong Email Or Password");
      console.log(e);
    }
  };
  useEffect(() => {
    return () => {
      setLoading(false);
    };
  },[]);
  return (
    <>
      {loading && <Loding />}
      <div className="d-flex login-form-bg">
        <div className="login-form">
          <hgroup>
            <h1>EGASC</h1>
            <h3>Login To Dashbord</h3>
          </hgroup>
          <form>
            <div className="group">
              <input type="text" name="username" className={form.username && "used"} onChange={setForm} />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Username</label>
            </div>
            <div className="group">
              <input type="email" name="password" className={form.password && "used"} onChange={setForm} />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Password</label>
            </div>
            <button
              type="button"
              className="button buttonBlue"
              onClick={handleLogin}
            >
              LogIn
              <div className="ripples buttonRipples">
                <span className="ripplesCircle"></span>
              </div>
            </button>
            {error && (
              <p
                style={{ color: "red", margin: "0 auto", textAlign: "center" }}
              >
                {error}
              </p>
            )}
          </form>
          <footer>
            <img src={logo} alt="" />
            <p>EGASC Malideeb</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Loggin;
