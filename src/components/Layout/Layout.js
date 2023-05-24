import Nav from "../Nav/Nav";
import "./Layout.css";
import Logo from "./Logo/Logo";
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";
import Drawer from "../Drawer/Drawer";
import NavToggle from "../NavToggle/NavToggle";
import { useState } from "react";
import Footer from "../Footer/Footer";
import Search from "../Search/Search";
import CategoryList from "../CategoryList/CategoryList";

export default function Layout(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <div className="Layout">
      <header>
        <Logo />
        <Nav />
        <NavToggle callback={toggleDrawer} />
        <Drawer open={drawerOpen} toggle={toggleDrawer} />
        <Search />
        <div className="CartLink-Auth">
          <CartLink />
        </div>
        <Auth />
      </header>
      <div className="Layout-container">
        <aside className="Layout-aside">
          <CategoryList className="categories" />
        </aside>
        <main className="Layout-main">{props.children}</main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
