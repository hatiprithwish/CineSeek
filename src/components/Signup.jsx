import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useState } from "react";
import Toaster from "./Toaster";

const Signup = ({ setShowLoginForm }) => {
  const [alertMessage, setAlertMessage] = useState("");
  const [alertStatus, setAlertStatus] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
  });

  const userSignupFunction = async () => {
    // Form validation
    if (!userSignup.name || !userSignup.email || !userSignup.password) {
      setAlertMessage("All fields are required");
      setAlertStatus("danger");
      return;
    }

    try {
      setIsLoading(true);
      const createUser = await createUserWithEmailAndPassword(
        auth,
        userSignup.email,
        userSignup.password
      );
      const user = createUser.user;

      setAlertMessage("Signed up successfully");
      setAlertStatus("success");

      setTimeout(() => setShowLoginForm(true), 1000);
    } catch (error) {
      setAlertMessage(`${error.message}`);
      setAlertStatus("danger");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-fit mx-auto bg-purple-50 px-8 py-6 border border-purple-100 rounded-xl shadow-md">
      <div className="mb-5">
        <h2 className="text-center text-2xl font-bold text-purple-500 ">
          Signup
        </h2>
      </div>

      {/* Input One  */}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Full Name"
          value={userSignup.name}
          onChange={(e) => {
            setUserSignup((prevUserSignup) => ({
              ...prevUserSignup,
              name: e.target.value,
            }));
          }}
          className="bg-purple-50 border border-purple-200 px-2 py-2 w-96 rounded-md outline-none placeholder-purple-200"
        />
      </div>

      {/* Input Two  */}
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email Address"
          value={userSignup.email}
          onChange={(e) => {
            setUserSignup((prevUserSignup) => ({
              ...prevUserSignup,
              email: e.target.value,
            }));
          }}
          className="bg-purple-50 border border-purple-200 px-2 py-2 w-96 rounded-md outline-none placeholder-purple-200"
        />
      </div>

      {/* Input Three  */}
      <div className="mb-5">
        <input
          type="password"
          placeholder="Password"
          value={userSignup.password}
          onChange={(e) => {
            setUserSignup((prevUserSignup) => ({
              ...prevUserSignup,
              password: e.target.value,
            }));
          }}
          className="bg-purple-50 border border-purple-200 px-2 py-2 w-96 rounded-md outline-none placeholder-purple-200"
        />
      </div>

      {/* Signup Button  */}
      <div className="mb-5">
        <button
          type="button"
          onClick={userSignupFunction}
          className="bg-purple-500 hover:bg-purple-600 w-full text-white text-center py-2 font-bold rounded-md"
        >
          {isLoading ? "Signing up..." : "Signup"}
        </button>
      </div>

      {alertMessage && (
        <Toaster alertStatus={alertStatus} alertMessage={alertMessage} />
      )}

      <p className="text-black mt-8">
        Have an account?{" "}
        <button
          onClick={() => setShowLoginForm(true)}
          className=" text-purple-500 font-semibold hover:underline"
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default Signup;
