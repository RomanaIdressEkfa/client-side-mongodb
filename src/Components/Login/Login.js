import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import logo from '../../Images/img.jpg'
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../Loading/Loading";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, error2] =
    useSendPasswordResetEmail(auth);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [user2] = useAuthState(auth);

  if (loading || loading1) {
    return <Loading />;
  }
  if (user || user1) {
    toast("Login Successful", { type: "success" });
  }

  if (error || error1) {
    toast(error1 || error.message, { type: "error" });
  }

  if (user || user1 || user2) {

    fetch("https://murmuring-beyond-23434.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify({
        email: user?.email || user1?.email || user2?.email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("accessToken", data?.token);
        console.log(data.token);
      });
    toast.success("Login Successful");
    navigate(from, { replace: true });
  }
  return (
    <div className="text-center login">
      <h2 className="or-border m-auto mb-5">Login </h2>
      <input
        onBlur={(e) => setEmail(e.target.value)}
        className="login-forms"
        type="email"
        name="Email"
        id=""
        placeholder="Enter your Email"
      />
      <br />
      <input
        onBlur={(e) => setPassword(e.target.value)}
        className="login-forms"
        type="password"
        name="Password"
        id=""
        placeholder="Enter your Password"
      />
      <p className="mt-3">
        You haven't an account ? <Link to="/signup">Create a account</Link>
      </p>
      <button
        className="button-reset"
        onClick={async () => {
          await sendPasswordResetEmail(email);
          toast("Sent email");
        }}
      >
        Reset password
      </button>
      <br />
      <input
        onClick={() => signInWithEmailAndPassword(email, password)}
        type="submit"
        value="Login"
      />
      <ToastContainer />
      <br />
      <p className="or-border m-auto mt-4 mb-3">Or</p>
      <img onClick={() => signInWithGoogle()} src={logo} alt="" className="google" />
    </div>
  );
};

export default Login;
