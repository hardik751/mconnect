import { Outlet } from "react-router-dom";
import Navbar from "/components/Navbar";
import Hero from "/components/Hero";

function MainLayout() {
  return (
    <div>
      <Navbar />

      <Departments />
      <div style={{ display: "flex" }}>
        <div style={{ padding: "20px", width: "100%" }}>
          <Outlet />
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
