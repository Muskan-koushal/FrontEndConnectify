import React, { useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Api from "./WebApi";
import "../sign.css";

function SignIn() {
  const nameInput = useRef();
  const contactInput = useRef();
  const emailSignUpInput = useRef();
  const passwordSignUpInput = useRef();
  const emailSignInInput = useRef();
  const passwordSignInInput = useRef();

  const handleSignUp = async (e) => {
    try {
      let username = nameInput.current.value;
      let email = emailSignUpInput.current.value;
      let password = passwordSignUpInput.current.value;
      let contact = contactInput.current.value;
      let response = await axios.post(Api.signup,{username,email,password,contact,});
      console.log(response);
      toast.success("Sign up success! Please sign in.");
    } catch (error) {
      toast.error("Oops! Something went wrong.");
    }
  };

  const handleSignIn = async (e) => {
    try {
      let email = emailSignInInput.current.value;
      let password = passwordSignInInput.current.value;
      let response = await axios.post(Api.signin, { email, password });
      let user = response.data.user;
      delete user.password;
      sessionStorage.setItem("current-user", JSON.stringify(user));
      console.log(sessionStorage.getItem("current-user"));
      toast.success("Sign In success.");
    } catch (err) {
      toast.error("Error in Sign in");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form onSubmit={handleSignUp}>
            <label htmlFor="chk" aria-hidden="true">Sign up</label>
            <input ref={nameInput} type="text" placeholder="Enter Your Name" required />
            <input ref={emailSignUpInput} type="text" placeholder="Email Id" required />
            <input ref={passwordSignUpInput} type="password" placeholder="Password" required />
            <input ref={contactInput} type="text" placeholder="Contact No." required />
            <button type="submit">Sign up</button>
          </form>
        </div>
        <div className="login">
          <form onSubmit={handleSignIn}>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input ref={emailSignInInput} type="text" placeholder="Email" required />
            <input ref={passwordSignInInput} type="password" placeholder="Password" required />
            <button type="submit" className="btn btn-danger">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
