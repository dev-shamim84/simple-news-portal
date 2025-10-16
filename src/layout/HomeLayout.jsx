import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelayout/LeftAside";
import RightAside from "../components/homelayout/RightAside";
const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="container px-4 mx-auto">
          <LatestNews></LatestNews>
        </section>
        <nav className="container px-4 mx-auto ">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className=" container px-4 mx-auto grid grid-cols-12 gap-5 my-4">
        <aside className=" col-span-12 md:col-span-3 lg:col-span-3 sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="main-nav col-span-12 md:col-span-6 lg:col-span-6">
          <Outlet />
        </section>
        <aside className="right-nav col-span-12 md:col-span-3 lg:col-span-3 sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
