import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const AuthPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <section className="h-screen">
      {showLoginForm ? (
        <Login setShowLoginForm={setShowLoginForm} />
      ) : (
        <Signup setShowLoginForm={setShowLoginForm} />
      )}
    </section>
  );
};

export default AuthPage;
