import { Outlet } from 'react-router-dom';
import NavBar from './pages/navbar';

export default function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
