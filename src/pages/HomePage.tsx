import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import './HomePage.css';

function HomePage() {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="home">
      <div className="home__hero">
        <h1 className="home__title">
          Добро пожаловать,{' '}
          <span className="home__title-accent">{user?.name || 'гость'}</span>
        </h1>
        <p className="home__subtitle">
          Это главная страница защищённого приложения
        </p>
      </div>

      <div className="home__cards">
        <div className="home__card">
          <h3 className="home__card-title">Роутинг</h3>
          <p className="home__card-text">
            React Router защищает приватные страницы через HOC PrivateRoute
          </p>
        </div>
        <div className="home__card">
          <h3 className="home__card-title">Redux</h3>
          <p className="home__card-text">
            Состояние аутентификации хранится в глобальном store
          </p>
        </div>
        <div className="home__card">
          <h3 className="home__card-title">TypeScript</h3>
          <p className="home__card-text">
            Все props и state типизированы для безопасности
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;