import { lazy } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import { useAuth } from './contexts/AuthProvider';
import NotFound from './pages/not-found';
import DashboardLayout from './layouts/dashboard-layout';
import DashBoardIndex from './pages/dashboard';
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
        {/* Dashboard */}
        <Route element={<DashboardLayout />}>
          <Route path='/dashboard' element={<DashBoardIndex />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
