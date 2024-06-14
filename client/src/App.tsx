import { lazy } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import { useAuth } from './contexts/AuthProvider';
// import HomePage from './pages'
const HomePage = lazy(() => import('./pages'))

function App() {

  const ProtectedRoutes = () => {
    const { user } = useAuth();
    return user ? <Outlet /> : <Navigate to='/auth/login' />
    // return <Outlet />
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />
        {/* Protected Routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
