import styles from "./navbar.module.css";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

function Sidebar({ setIstoggled, isToggled, sidebar }) {
  return (
    <div className={styles.sidebar} ref={sidebar}>
      <div className={styles.close} onClick={() => setIstoggled(!isToggled)}>
        <AiOutlineClose />
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href="/artists">
              <a>Artists</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
