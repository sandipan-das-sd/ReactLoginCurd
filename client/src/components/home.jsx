import { useNavigate } from 'react-router-dom';
import Header from './header';
export function Home() {
  const navigate = useNavigate();

  return (
    <><Header />
    
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
          <h1 className="text-2xl font-semibold mb-6">Please login to continue</h1>
          <button
              onClick={() => navigate('/login')}
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-200 text-lg font-medium"
          >
              Go to Login
          </button>
      </div></>
  );
}
