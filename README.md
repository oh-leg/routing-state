# React SPA с роутингом и Redux

Учебный проект на React + TypeScript + Vite. Демонстрирует роутинг через React Router, управление состоянием через Redux Toolkit и защиту приватных маршрутов через HOC.

## Демо

https://oh-leg.github.io/routing-state

## Функциональность

- Роутинг — страницы Login, Register, HomePage, 404
- Redux Toolkit — глобальное состояние аутентификации
- Защита маршрутов — HOC PrivateRoute пускает только авторизованных
- Формы входа и регистрации — с валидацией и обработкой ошибок

## Технологии

- React
- TypeScript
- Vite
- React Router DOM
- Redux Toolkit
- React Redux

## Структура проекта

```
src/
├── components/
│   ├── Layout.tsx
│   ├── Layout.css
│   └── PrivateRoute.tsx
├── pages/
│   ├── HomePage.tsx
│   ├── HomePage.css
│   ├── Login.tsx
│   ├── Register.tsx
│   ├── Auth.css
│   ├── NotFound.tsx
│   └── NotFound.css
├── store/
│   ├── index.ts
│   └── authSlice.ts
├── styles/
│   └── global.css
├── App.tsx
└── main.tsx
```

## Архитектура

### Роутинг

```
/           → Layout + HomePage (через PrivateRoute)
/login      → Layout + Login
/register   → Layout + Register
/*          → Layout + NotFound
```

Layout — родительский маршрут, содержит Outlet. Шапка не перерисовывается при переходах.

### Redux Store

Store разбит на slices. Сейчас один — auth:

```
{
  auth: {
    user: User | null,
    isAuthenticated: boolean,
    error: string | null
  }
}
```

```
Actions:
- loginSuccess(user) — успешный вход
- loginFailure(error) — ошибка входа
- registerSuccess(user) — успешная регистрация
- logout() — выход
```

### HOC PrivateRoute

Классический HOC-паттерн: принимает компонент, проверяет isAuthenticated, возвращает либо компонент, либо редирект на /login.

Зачем: убирает дублирование проверки авторизации из каждой защищённой страницы.

## Тестовые данные для входа

Email: test@test.ru
Пароль: test

## Запуск локально

```
git clone https://github.com/oh-leg/routing-state.git
cd routing-state
npm install
npm run dev
```

Открыть http://localhost:5173

## Как работает авторизация

1. Пользователь заходит на / — PrivateRoute проверяет isAuthenticated
2. Если false — редирект на /login
3. Пользователь вводит данные, нажимает «Войти»
4. dispatch(loginSuccess(user)) обновляет Redux state
5. navigate('/') переводит на главную
6. PrivateRoute видит isAuthenticated = true и пускает
7. При выходе dispatch(logout()) сбрасывает state