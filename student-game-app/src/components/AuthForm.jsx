import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import TextInputField from "./TextInputField";
import PasswordToggleFieldDemo from "./PasswordToggleFieldDemo";
import "./TextInputField.css";
import "./PasswordToggleFieldDemo.css";
import "./AuthForm.css";

function AuthForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      let userCredential;
      if (isLogin) {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
      } else {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
      }

      onLogin(userCredential.user);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        <TextInputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          name="email"
        />
        <PasswordToggleFieldDemo
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          required
          name="password"
        />
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Create Account" : "Back to Login"}
      </button>
    </div>
  );
}

export default AuthForm;
