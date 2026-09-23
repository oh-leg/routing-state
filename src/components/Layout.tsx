import { Link, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import { logout } from '../store/authSlice';
import './Layout.css';

function Layout() {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="layout">
      <header className="layout__header">
        <Link to="/" className="layout__logo">
          Routing-state
        </Link>

        <nav className="layout__nav">
          {isAuthenticated ? (
            <div className="layout__user">
              <span className="layout__user-name">Привет, {user?.name}</span>
              <button
                className="layout__logout"
                onClick={() => dispatch(logout())}
              >
                Выйти
              </button>
            </div>
          ) : (
            <>
              <Link to="/login">Вход</Link>
              <Link to="/register">Регистрация</Link>
            </>
          )}
        </nav>
      </header>

      <main className="layout__main">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;