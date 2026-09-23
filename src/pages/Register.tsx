import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import type { AppDispatch } from '../store';
import { registerSuccess } from '../store/authSlice';
import './Auth.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    dispatch(registerSuccess({ id: Date.now(), email, name }));
    navigate('/');
  };

  return (
    <div className="auth">
      <div className="auth__card">
        <h2 className="auth__title">Регистрация</h2>

        <form className="auth__form" onSubmit={handleSubmit}>
          <div className="auth__field">
            <label className="auth__label" htmlFor="name">Имя</label>
            <input
              id="name"
              type="text"
              placeholder="Иван Иванов"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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
            Зарегистрироваться
          </button>
        </form>

        <p className="auth__footer">
          Уже есть аккаунт? <Link to="/login">Войти</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;