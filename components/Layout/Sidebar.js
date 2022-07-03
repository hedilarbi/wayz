import React from "react";
import styles from "./Sidebar.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";
const Sidebar = (props) => {
  const router = useRouter();
  const { setIsToggled, isToggled } = props;
  return (
    <div
      className={
        isToggled ? `${styles.sidebar} ${styles.open}` : `${styles.sidebar}`
      }
    >
      <div className={styles.close}>
        <div className={styles.close_btn} onClick={() => setIsToggled(false)}>
          <AiOutlineClose />
        </div>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li onClick={() => setIsToggled(false)}>
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          <li onClick={() => setIsToggled(false)}>
            <Link href="/services/artists">
              <a>Artists</a>
            </Link>
          </li>
          <li onClick={() => setIsToggled(false)}>
            <Link href="/services/agencies">
              <a>Agencies</a>
            </Link>
          </li>
          <li onClick={() => setIsToggled(false)}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.social}>
        <div className={styles.icons}>
          <BsFacebook />
        </div>
        <div className={styles.icons}>
          <BsInstagram />
        </div>
        <div className={styles.icons}>
          <BsLinkedin />
        </div>
        <div className={styles.icons}>
          <BsTwitter />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
