
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center text-gray-700 text-xl font-medium">
        <Link 
        to="/" 
        className="absolute top-6 right-6 text-blue-600 hover:underline text-lg font-medium"
      >
        Home
      </Link>
        Page could not be found. Please try again. Click <Link className= 'underline text-blue-600' to="/">here</Link> to try again.
      </div>
    </div>
  );
};

export default NotFound;