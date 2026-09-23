import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import type { RootState, AppDispatch } from '../store';
import { loginSuccess, loginFailure } from '../store/authSlice';
import './Auth.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { error } = useSelector((state: RootState) => state.auth);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    if (email === 'test@test.ru' && password === 'test') {
      dispatch(loginSuccess({ id: 1, email, name: 'Тестовый пользователь' }));
      navigate('/');
    } else {
      dispatch(loginFailure('Неверный email или пароль'));
    }
  };

  return (
    <div className="auth">
      <div className="auth__card">
        <h2 className="auth__title">Вход</h2>

        {error && <div className="auth__error">{error}</div>}

        <form className="auth__form" onSubmit={handleSubmit}>
          <div className="auth__field">
            <label className="auth__label" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="test@test.ru"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="auth__field">
            <label className="auth__label" htmlFor="password">Пароль</label>
            <input
              id="password"
              type="password"
              placeholder="••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="auth__submit" type="submit">
            Войти
          </button>
        </form>

        <p className="auth__footer">
          Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;