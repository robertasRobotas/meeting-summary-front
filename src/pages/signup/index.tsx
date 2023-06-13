import React, { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const SignUpPage = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccsess, setSuccess] = useState(false);

  const createUser = async () => {
    const response = await axios.post("http://localhost:8080/user", {
      name: name,
      surname: surname,
      email: email,
      password: password,
    });

    console.log("response", response);

    if (response.status === 200) {
      setSuccess(true);

      setTimeout(() => {
        // setSuccess(false);
        router.push("/login");
      }, 2000);
    }
  };

  return (
    <>
      <h1 className={styles.title}>Meeting Summary</h1>

      <div className={styles.form}>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Name"
        />

        <input
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
          placeholder="Surname"
        />

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

        <button onClick={createUser} className={styles.button}>
          Create Account
        </button>

        {isSuccsess && <div>User was created successfully</div>}
      </div>
    </>
  );
};

export default SignUpPage;
