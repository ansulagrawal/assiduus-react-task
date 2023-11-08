import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <h1 className="text-9xl text-red-500">404</h1>
        <p className="text-2xl text-gray-800">Page not found</p>
        <p className="text-gray-600">The page you are looking for does not exist.</p>
        <Link to="/dashboard" className="text-blue-500 hover:text-blue-300 flex justify-center">
          Go to front page →
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
