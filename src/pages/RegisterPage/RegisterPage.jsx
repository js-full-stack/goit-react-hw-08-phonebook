import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

const RegisterPage = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeName = e => setName(e.target.value);
  const handleChangeEmail = e => setEmail(e.target.value);
  const handleChangePassword = e => setPassword(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    const payload = { name, email, password };
    dispatch(authOperations.register(payload));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Страница регистрации</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Имя
          <input type="text" name="name" value={name} onChange={handleChangeName} />
        </label>

        <label style={styles.label}>
          Почта
          <input type="email" name="email" value={email} onChange={handleChangeEmail} />
        </label>

        <label style={styles.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
          />
        </label>

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegisterPage;

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// const mapDispatchToProps = dispatch => ({
//   onRegister: data => dispatch(authOperations.register(data)),
// });

// export default connect(null, mapDispatchToProps)(RegisterPage);
