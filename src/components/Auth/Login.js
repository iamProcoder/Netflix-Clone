import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Register from './Register';
import Logonetflix from "../../assets/image/Logonetflix.png";
import loginBackgroung from "../../assets/image/loginBackgroung.jpg";

const Login = ({location}) => {
  const navigate = useNavigate();
  const locationState = location?.pathname || "/";
  const [signIn, setSignIn] = useState(false);

  return (
    <div
      className="relative h-full"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${loginBackgroung}")`,
        backgroundPosition: "center no-repeat",
        backgroundColor: "rgba(0,0,0, 0.4)",
      }}
    >
      <div className="">
        <img
          className="fixed left-0 top-5 w-40 pl-5 object-contain"
          src={Logonetflix}
          alt="Netflix Logo"
          onClick={() => navigate('/')}
        />
        <button
          onClick={() => setSignIn(true)}
          className="fixed right-5 top-5 py-3 px-5 text-white bg-red-600 font-semibold border-none cursor-pointer"
        >
          Sign In
        </button>
        <div className="w-full h-100vh z-index-1 bg-rgba-opacity bg-linear" />
      </div>
      <div className="flex flex-col justify-center items-center w-full z-index-1 p-5 text-white absolute mx-auto top-1/3 left-0 right-0">
        {signIn ? (
          <Register locationState={locationState} />
        ) : (
          <>
            <h1 className="font-semibold text-5xl mb-5">
              Unlimited films, TV programmes and more.
            </h1>
            <h2 className="font-medium text-3xl mb-5">
              Watch anywhere. Cancel at any time.
            </h2>
            <h3 className="font-normal text-2xl mb-5">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="h-80 m-5">
              <form>
                <input
                  type="email"
                  className="p-3 outline-0 border-none max-w-xl text-gray-700 font-medium"
                  placeholder="Email Address"
                />
                <button
                  onClick={() => setSignIn(true)}
                  className="px-4 py-4 text-xs text-white bg-red-600 font-bold border-none cursor-pointer"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login