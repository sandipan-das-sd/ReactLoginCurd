import { Outlet } from 'react-router-dom';
import Header from '../components/header';

export default function AuthLayout() {
  return (
    <div>
      <Header /> {/* Add Header here if it should be shown globally */}
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
}
