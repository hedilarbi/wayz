import styles from "./Footer.module.css";
import Link from "next/link";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <img src="/logo.svg" alt="logo" />
      </div>
      <div className={styles.middle}>
        <h4>Explore</h4>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>

          <li>
            <Link href="/services/artists">
              <a>Artists</a>
            </Link>
          </li>
          <li>
            <Link href="/services/agencies">
              <a>Agencies</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <h4>Social</h4>
        <ul>
          <li>
            <a href="">
              <AiFillInstagram /> <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href="">
              <AiFillFacebook /> <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="">
              <AiFillTwitterCircle /> <span>Twitter</span>
            </a>
          </li>
          <li>
            <a href="">
              <AiFillLinkedin /> <span>Linkedin</span>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.contact}>
        <h4>Contact</h4>
        <ul>
          <li>
            <GoLocation /> <span>Cite de la santé Bizerte 7000</span>
          </li>
          <li>
            <AiFillPhone /> <span>78945612</span>
          </li>
          <li>
            <AiFillMail />
            <span>contact@wayz.com</span>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
