import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Btn from './btn';
import '../styles/auth.css';

function Login() {
  const [inputs, setInput] = useState({
    email: '',
    password: '',
  });
  const [error, setErr] = useState('');
  const loginValidationSchema = yup
    .object()
    .shape({
      email: yup
        .string()
        .email('this field must be an email')
        .required('The field is required')
        .trim(),
      password: yup
        .string()
        .min(8, 'must be more than 8 characters')
        .required('The field is required'),
    })
    .required();

  const inputHandler = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setInput({ ...inputs, [name]: value });
  };
  const onclick = () => {
    loginValidationSchema
      .validate(inputs)
      .then(() =>
        fetch('/api/v1/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputs),
        })
      )
      .then((data) => data.json())
      .then((result) => toast(result))
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
        <label htmlFor="acceptRoles">
          <input
            id="acceptRoles"
            type="checkbox"
            style={{ width: 'auto', display: 'inline', margin: '10px auto' }}
          />
          &nbsp; Remember Me
        </label>
        <Btn click={() => onclick()} Name="LOGIN" />
      </div>

      <p />
    </section>
  );
}

export default Login;
