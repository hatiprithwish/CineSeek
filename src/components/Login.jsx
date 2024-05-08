import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useState } from "react";
import Toaster from "./Toaster";
import { useNavigate } from "react-router-dom";

const Login = ({ setShowLoginForm }) => {
  const [alertMessage, setAlertMessage] = useState("");
  const [alertStatus, setAlertStatus] = useState("");
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const userLoginFunction = async () => {
    // Form validation
    if (!userLogin.email || !userLogin.password) {
      setAlertMessage("All fields are required");
      setAlertStatus("danger");
      return;
    }

    try {
      setIsLoading(true);
      const getUser = await signInWithEmailAndPassword(
        auth,
        userLogin.email,
        userLogin.password
      );
      const user = getUser.user;
      localStorage.setItem("user", JSON.stringify(user));

      setAlertMessage("Logged in successfully");
      setAlertStatus("success");

      setTimeout(() => navigate("/"), 1000);
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
          Login
        </h2>
      </div>

      <div className="mb-3">
        <input
          type="email"
          placeholder="Email Address"
          value={userLogin.email}
          onChange={(e) => {
            setUserLogin((prevUserLogin) => ({
              ...prevUserLogin,
              email: e.target.value,
            }));
          }}
          className="bg-purple-50 border border-purple-200 px-2 py-2 w-96 rounded-md outline-none placeholder-purple-200"
        />
      </div>

      <div className="mb-5">
        <input
          type="password"
          placeholder="Password"
          value={userLogin.password}
          onChange={(e) => {
            setUserLogin((prevUserLogin) => ({
              ...prevUserLogin,
              password: e.target.value,
            }));
          }}
          className="bg-purple-50 border border-purple-200 px-2 py-2 w-96 rounded-md outline-none placeholder-purple-200"
        />
      </div>

      {/* Login Button  */}
      <div className="mb-5">
        <button
          type="button"
          onClick={userLoginFunction}
          className="bg-purple-500 hover:bg-purple-600 w-full text-white text-center py-2 font-bold rounded-md"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </div>

      {alertMessage && (
        <Toaster alertStatus={alertStatus} alertMessage={alertMessage} />
      )}

      <p className="text-black mt-8">
        Not a user?{" "}
        <button
          onClick={() => setShowLoginForm(false)}
          className=" text-purple-500 font-semibold hover:underline"
        >
          Sign up
        </button>
      </p>
    </div>
  );
};

export default Login;
