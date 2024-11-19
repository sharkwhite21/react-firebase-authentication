import React, { useState } from 'react';
import useFirebase from '../Firebase/context';
import { doCreateUserWithEmailAndPassword } from '../Firebase/firebase';
import { Link, useNavigate } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

function SignUpForm() {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const { auth } = useFirebase();
  const navigate = useNavigate();
  const { username, email, passwordOne, passwordTwo, error } = formData;

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // Validar si las contraseñas coinciden
    if (passwordOne !== passwordTwo) {
      setFormData((prevData) => ({
        ...prevData,
        error: { message: 'Las contraseñas no coinciden.' },
      }));
      return;
    }

    try {
      // Llamada al método de creación de usuario
      const authUser = await doCreateUserWithEmailAndPassword(auth, email, passwordOne);

      // Si la creación es exitosa, reseteamos el estado del formulario
      setFormData(INITIAL_STATE);
      console.log('Usuario creado:', authUser);

      // Redirigir a la página de inicio
      navigate(ROUTES.HOME);
    } catch (error) {
      // Si ocurre un error, lo establecemos en el estado
      setFormData((prevData) => ({
        ...prevData,
        error,
      }));
      console.error('Error al crear usuario:', error);
    }
  };

  // Validar si el formulario es inválido
  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    username === '';

  return (
    <form onSubmit={onSubmit}>
      <input
        name="username"
        value={username}
        onChange={onChange}
        type="text"
        placeholder="Nombre completo"
      />
      <input
        name="email"
        value={email}
        onChange={onChange}
        type="text"
        placeholder="Correo electrónico"
      />
      <input
        name="passwordOne"
        value={passwordOne}
        onChange={onChange}
        type="password"
        placeholder="Contraseña"
      />
      <input
        name="passwordTwo"
        value={passwordTwo}
        onChange={onChange}
        type="password"
        placeholder="Confirma tu contraseña"
      />
      <button disabled={isInvalid} type="submit">
        Registrarse
      </button>

      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </form>
  );
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpForm;
export {SignUpLink};
