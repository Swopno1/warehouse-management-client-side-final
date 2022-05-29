import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { H2 } from "../../components/design/Title/Title";
import auth from "../../firebase.init";

const Register = () => {
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const handleRegister = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: userName });
  };

  if (error || updatingError) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading || updating) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="container mx-auto">
      <H2>Please Sign In</H2>
      <form onSubmit={handleRegister} className="w-1/2 mx-auto">
        <input
          onBlur={(e) => setuserName(e.target.value)}
          className="w-full border rounded my-1 p-1"
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
        />
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
          value="Register"
        />
      </form>
    </div>
  );
};

export default Register;
