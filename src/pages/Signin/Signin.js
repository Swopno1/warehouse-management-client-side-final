import React, { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  if (error || gError) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading || gLoading) {
    return <p>Loading...</p>;
  }
  if (user || gUser) {
    navigate(from, { replace: true });
  }

  return (
    <div className="container mx-auto">
      <h2>Please Sign In</h2>
      <form onSubmit={handleSignIn} className="w-1/2 mx-auto">
        <input
          onBlur={(e) => setEmail(e.target.value)}
          className="w-full border rounded my-1 p-1"
          type="text"
          name="email"
          id="email"
          placeholder="Enter Your Email"
        />
        <input
          onBlur={(e) => setpassword(e.target.value)}
          className="w-full border rounded my-1 p-1"
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
        />
        <input
          className="px-3 py-1 border shadow rounded bg-slate-900 text-white w-full"
          type="submit"
          value="Sign In"
        />
      </form>
      <div className="divider">OR</div>
      <form className="w-1/2 mx-auto">
        <input
          className="px-3 py-1 border shadow rounded bg-slate-900 text-white w-full"
          type="submit"
          value="Sign In With Google"
          onClick={() => signInWithGoogle()}
        />
      </form>
    </div>
  );
};

export default Signin;
