import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation 

    navigate("/account"); //redirect on submit
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Login</h2>

        <input
          style={styles.input}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button} type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Courier New",
  },
  form: {
    padding: "2rem",
    borderRadius: "12px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  title: {
    color: "chartreuse",
    textAlign: "center",
  },
  input: {
    padding: "0.8rem",
    borderRadius: "8px",
    border: "1px solid #333",
    background: "#2a2a2a",
    color: "white",
    fontSize: "1rem",
  },
  button: {
    padding: "0.8rem",
    borderRadius: "8px",
    border: "none",
    background: "black",
    color:"chartreuse",
    fontSize: "1rem",
    cursor: "pointer",
  },
};
