import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__code">404</div>
      <p className="not-found__text">Страница не найдена</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}

export default NotFound;