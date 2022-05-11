import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../Images/img.jpg'
import "./SignUp.css";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../Loading/Loading";
const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth, {
    sendEmailVerification: true,
  });

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [user2] = useAuthState(auth);
  if (user2) {
    navigate(from, { replace: true });
  }
  if (loading || loading1) {
    return <Loading />

  }
  if (user || user1) {
    toast("Sign Up Successful", { type: "success" });
  }

  if (error) {
    toast(error1 || error.message, { type: "error" });
  }
  if (loading || loading1) {
    <Loading />
  }


  return (
    <div className="sign-up">
      <div className="text-center login">
        <h2 className="or-border m-auto mb-5"> Sign Up </h2>
        <input
          className="login-forms"
          type="email"

          name="Email"
          id=""
          placeholder="Email"
          onBlur={(e) => setEmail(e.target.value)}

        />
        <br />
        <input
          className="login-forms"
          type="password"

          name="Password"
          id=""
          placeholder="Password"
          onBlur={(e) => setPassword(e.target.value)}
        />
        <ToastContainer />
        <p className="mt-3">
          You haven an account ? <Link to="/login">Login </Link>
        </p>
        <input
          onClick={() => createUserWithEmailAndPassword(email, password)}
          type="submit"
          value="Sign Up"
        />
        <br />
        <p className="or-border m-auto mt-4 mb-3">Or</p>
        <img onClick={() => signInWithGoogle()} src={logo} alt="" className="google" />
      </div>
    </div>
  );
};

export default SignUp;
