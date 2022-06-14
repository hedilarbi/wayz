import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useRef } from "react";
function Layout(props) {
  const [isToggled, setIstoggled] = useState(false);
  const sidebar = useRef();

  useEffect(() => {
    if (isToggled) {
      sidebar.current.style.transform = "translate(0)";
    } else {
      sidebar.current.style.transform = " translate(100%)";
    }
  }, [isToggled]);
  return (
    <main>
      <Sidebar
        setIstoggled={setIstoggled}
        sidebar={sidebar}
        isToggled={isToggled}
      />
      <Navbar isToggled={isToggled} setIstoggled={setIstoggled} />
      <div>{props.children}</div>
      <Footer />
    </main>
  );
}

export default Layout;
