import React, { useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";
import db, { auth } from '../../firebase';
import {ShowMessage, MessageContainer} from '../../helpers'


const Register = ({locationState}) => {

  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const signUp = (e) => {
    e.preventDefault();

    if (!validationInput(emailRef, passRef)) return false;

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passRef.current.value
    )
    .then(({user}) => {      
      db.collection('Subscribies')
        .add({
              planId: 'U2Oz1NCeYzhfNTzdB3aW',
              userId: user.uid
            });
    })
    .catch((err) => ShowMessage('error', err?.message));

  }
  const signIn = (e) => {
    e.preventDefault();
    if (!validationInput(emailRef, passRef)) return false;

    auth.signInWithEmailAndPassword(
      emailRef.current.value, 
      passRef.current.value
    )
    .then(() => {
      navigate(locationState);
    })
    .catch(err => ShowMessage('error', err?.message));
  }

  const validationInput = (email, password) => {
    let isValid = true;
    if (!email.current.value && email.current.value === '') {
      setEmailError(true);
      isValid = false;
    }
    else setEmailError(false);

    if (!password.current.value && password.current.value === '') {
      setPasswordError(true);
      isValid = false;
    }
    else setPasswordError(false);
    
    return isValid;
  }
  
  return (
    <div className="max-w-sm p-16 max-xs:p-12 mx-auto bg-rgba-opacity-08">
      <form className="flex flex-col items-center">
        <h1 className="font-semibold text-3xl mb-5">Sign In</h1>
        <input
          className={`outline-0 h-10 mb-4 px-3 py-1 text-gray-700 font-medium w-60 ${
            emailError && "border-2 border-solid border-red-800 bg-red-200"
          }`}
          type="email"
          placeholder={`${emailError ? "email required!" : "email"}`}
          ref={emailRef}
        />
        <input
          className={`outline-0 h-10 mb-4 px-3 py-1 text-gray-700 font-medium w-60 ${
            passwordError && "border-2 border-solid border-red-800 bg-red-200"
          }`}
          type="password"
          placeholder={`${passwordError ? "password required!" : "password"}`}
          ref={passRef}
        />
        <button
          className="px-4 py-3 text-xs w-60 text-white bg-red-600 font-bold border-none cursor-pointer"
          type="submit"
          onClick={signIn}
        >
          Sign In
        </button>

        <h4 className="font-semibold text-xs mt-5 text-left">
          <span className="text-gray-400 mr-1">New to Netflix? </span>
          <span
            className="hover:underline hover:cursor-pointer"
            onClick={signUp}
          >
            Sign Up now.
          </span>
        </h4>
      </form>
      <MessageContainer />
    </div>
  );
};

export default Register