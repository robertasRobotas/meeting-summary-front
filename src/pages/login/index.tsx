import React, { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:8080/logIn", {
        email: email,
        password: password,
      });

      console.log("response", response.data);
      localStorage.setItem("meetingSummaryToken", response.data.jwt);
      localStorage.setItem("meetingSummaryUserId", response.data.userId);

      router.push("/allgroups");
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div>
      <h1 className={styles.title}>Meeting Summary</h1>
      <h3 className={styles.title}>Login</h3>

      <div className={styles.form}>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
        />

        <input
          // type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
        />
        <button onClick={login} className={styles.button}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
