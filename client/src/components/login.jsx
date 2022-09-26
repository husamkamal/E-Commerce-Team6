import Btn from './btn';
import '../styles/auth.css';
import { useState } from 'react';

const Login = () => {
  const regxValidation = {
    email: '^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$',
    pasword: /[^a-zA-Z0-9 ]/,
  };
  const [inputs, setInput] = useState({
    email: '',
    password: '',
  });
  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...inputs, [name]: value });
  };
  const clicked = (_) => {};
  return (
    <section className="container">
      <div className="authForm">
        <h1>SIGN IN</h1>
        <input
          type="email"
          name="email"
          value={inputs.email}
          onInput={inputHandler}
          placeholder="Email Address"
        />
        <input
          type="password"
          name="password"
          value={inputs.password}
          onInput={inputHandler}
          placeholder="password"
        />
        <label>
          <input
            type="checkbox"
            style={{ width: 'auto', display: 'inline', margin: '10px auto' }}
          />
          &nbsp; Remember Me
        </label>
        <Btn click={clicked} Name="LOGIN" />
      </div>

      <p></p>
    </section>
  );
};

export default Login;
