import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
    console.log(user);
  };

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Registered User: {user.email}</p>
      </div>
    );
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
    </div>
  );
};

export default Signin;