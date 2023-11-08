import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './common/Layout';
import Dashboard from './pages/Dashboard';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard />,
        },
        {
          path: '*',
          element: <Dashboard />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
