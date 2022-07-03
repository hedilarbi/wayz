import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import Sidebar from "./Sidebar";

function Navbar() {
  const router = useRouter();
  const [isToggled, setIsToggled] = useState(false);

  const home = useRef();
  const about = useRef();
  const services = useRef();
  const artists = useRef();
  const navbar = useRef();

  const mouseEnterHandler = (el) => {
    gsap.to(el.current, {
      duration: 0.3,
      letterSpacing: "0.4rem",
      color: "#bb444b",
      ease: "power2.out",
    });
  };

  const mouseLeaveHandler = (el) => {
    gsap.to(el.current, {
      duration: 0.3,
      letterSpacing: "0.2rem",
      color: "#FFFFFF",
      ease: "power2.out",
    });
  };

  const handleScroll = () => {
    const { pageYOffset } = window;
    if (pageYOffset > window.innerHeight) {
      navbar.current.style.background = "black";
    } else {
      navbar.current.style.background = "transparent";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={styles.header} ref={navbar}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <ul className={styles.ul}>
              <li
                className={styles.li}
                ref={home}
                onMouseEnter={() => mouseEnterHandler(home)}
                onMouseLeave={() => mouseLeaveHandler(home)}
              >
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li
                className={styles.li}
                ref={services}
                onMouseEnter={() => mouseEnterHandler(services)}
                onMouseLeave={() => mouseLeaveHandler(services)}
              >
                <Link href="/services/artists">
                  <a>Artists</a>
                </Link>
              </li>
              <li
                className={styles.li}
                ref={artists}
                onMouseEnter={() => mouseEnterHandler(artists)}
                onMouseLeave={() => mouseLeaveHandler(artists)}
              >
                <Link href="/services/agencies">
                  <a>Agencies</a>
                </Link>
              </li>
              <li
                className={styles.li}
                ref={about}
                onMouseEnter={() => mouseEnterHandler(about)}
                onMouseLeave={() => mouseLeaveHandler(about)}
              >
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.hamburger} onClick={() => setIsToggled(true)}>
            <AiOutlineMenu />
          </div>
        </div>
      </header>
      <Sidebar isToggled={isToggled} setIsToggled={setIsToggled} />
    </>
  );
}

export default Navbar;
