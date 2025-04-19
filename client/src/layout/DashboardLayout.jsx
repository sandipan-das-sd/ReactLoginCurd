import { Outlet } from 'react-router-dom';
import Header from '../components/header.jsx'
// import Sidebar if needed

export default function DashboardLayout() {
  return (
    <div>
      <Header />
      {/* <Sidebar /> */}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
