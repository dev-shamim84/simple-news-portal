import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 h-screen">
      <header className="container mx-auto px-4 py-2">
        <Navbar></Navbar>
      </header>
      <main className="container mx-auto px-4 py-2">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
