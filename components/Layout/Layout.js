import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useRef } from "react";
function Layout(props) {
  return (
    <main>
      <Navbar />
      <div>{props.children}</div>
      <Footer />
    </main>
  );
}

export default Layout;
