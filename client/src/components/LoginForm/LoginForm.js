import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/action";
// import { signInWithGoogle } from "../../services/auth";
function LoginForm() {
  const dispatch = useDispatch();

  const handleChange = () => {};
  const handleLogin = async () => {
    dispatch(login());
    // console.log("clicked");
    // try {
    //   await signInWithGoogle();
    // } catch (error) {
    //   console.log(error);
    // }

    // console.log("clicked2");
  };

  return (
    <div className="loginBox">
      <form className="loginForm">
        <label>email</label>
        <input />
        <label>password</label>
        <input />
        <button>Login</button>
      </form>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}

export default LoginForm;