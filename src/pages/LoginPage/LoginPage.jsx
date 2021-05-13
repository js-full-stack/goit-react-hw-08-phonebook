import { useState } from 'react';
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

const LoginPage = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = e => setEmail(e.target.value);
  const handleChangePassword = e => setPassword(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    const payload = { email, password };
    dispatch(authOperations.logIn(payload));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Страница логина</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
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

        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// };
// export default connect(null, mapDispatchToProps)(LoginPage);
export default LoginPage;
