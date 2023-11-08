import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './common/Layout';
import Dashboard from './pages/Dashboard';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'accounts', element: <Dashboard /> },
        { path: 'payroll', element: <Dashboard /> },
        { path: 'reports', element: <Dashboard /> },
        { path: 'advisor', element: <Dashboard /> },
        { path: 'contacts', element: <Dashboard /> },
      ],
    },
    { path: '*', element: <NotFoundPage /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
