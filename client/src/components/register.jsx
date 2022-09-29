import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Btn from './btn';
import singingValidationSchema from '../utils/signing';
import '../styles/auth.css';

function Register() {
  const [inputs, setInput] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setErr] = useState('');
  const navigation = useNavigate();
  const inputHandler = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setInput({ ...inputs, [name]: value });
  };
  const { email, name, password } = inputs;
  const onclick = () => {
    setErr('');
    singingValidationSchema
      .validate(inputs)
      .then(() =>
        fetch('/api/v1/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, name, password }),
        })
      )
      .then((data) => data.json())
      .then((result) => {
        toast(result);
        navigation('/login');
      })
      .catch((err) => {
        setErr(err.errors[0]);
      });
  };
  useEffect(() => {
    if (error) {
      toast(error);
    }
  }, [error]);
  return (
    <section className="container">
      <div className="authForm">
        <h1>REGISTER</h1>
        <input
          type="email"
          name="email"
          value={inputs.email}
          onInput={inputHandler}
          placeholder="Email Address"
        />
        <input
          type="text"
          name="name"
          value={inputs.name}
          onInput={inputHandler}
          placeholder="Name"
        />
        <input
          type="password"
          name="password"
          value={inputs.password}
          onInput={inputHandler}
          placeholder="password"
        />
        <input
          type="password"
          name="confirmPassword"
          value={inputs.confirmPassword}
          onInput={inputHandler}
          placeholder="Confirm Password"
        />

        <Btn click={onclick} Name="REGISTER" />
      </div>

      <p />
    </section>
  );
}

export default Register;
