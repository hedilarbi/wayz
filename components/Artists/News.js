import styles from "./News.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
function News() {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef();
  const video1 = useRef();
  const video2 = useRef();
  const video3 = useRef();
  const video4 = useRef();

  function videoPlay(video) {
    video.current.play();
  }

  function videoStop(video) {
    video.current.pause();
    let currentTime = 0;

    currentTime = video.current.currentTime;
    video.current.load();
  }
  return (
    <section className={styles.news} id="news">
      <div className={styles.title}>
        <h2>Latest News</h2>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.mainPhone}>
        <div className={styles.new}>
          <img src="/mk.jpg" alt="" />
          <h2 className={styles.thumbTitle}>
            MK ft MC BechBech New Album Release
          </h2>
        </div>
        <div className={styles.new}>
          <img src="/mk.jpg" alt="" />
          <h2 className={styles.thumbTitle}>
            MK ft MC BechBech New Album Release
          </h2>
        </div>
        <div className={styles.new}>
          <img src="/mk.jpg" alt="" />
          <h2 className={styles.thumbTitle}>
            MK ft MC BechBech New Album Release
          </h2>
        </div>
        <div className={styles.new}>
          <img src="/mk.jpg" alt="" />
          <h2 className={styles.thumbTitle}>
            MK ft MC BechBech New Album Release
          </h2>
        </div>
      </div>

      <div className={styles.main} ref={main}>
        <div className={styles.first}>
          <video
            src="/11.mp4"
            poster="/2.jpg"
            ref={video1}
            onMouseEnter={() => videoPlay(video1)}
            muted="muted"
            onMouseLeave={() => videoStop(video1)}
          ></video>
          <h2 className={styles.thumbTitle}>Black - bel wefi</h2>
        </div>
        <div className={styles.secondary}>
          <div className={styles.second}>
            <video
              src="/22.mp4"
              poster="/mk.jpg"
              ref={video2}
              onMouseEnter={() => videoPlay(video2)}
              muted="muted"
              onMouseLeave={() => videoStop(video2)}
            ></video>
            <h2 className={styles.thumbTitle}>
              Unknown 7k x Badkid - V12 Unknown ft Yakuza New Album Release
            </h2>
          </div>
          <div className={styles.third}>
            <div className={styles.three}>
              <video
                src="/33.mp4"
                poster="/1.jpg"
                ref={video3}
                onMouseEnter={() => videoPlay(video3)}
                muted="muted"
                onMouseLeave={() => videoStop(video3)}
              ></video>
              <h2 className={styles.thumbTitle}>DA NINJA x SIXBOI - ICON</h2>
            </div>
            <div className={styles.three}>
              <video
                src="/44.mp4"
                poster="/3.jpg"
                ref={video4}
                onMouseEnter={() => videoPlay(video4)}
                muted="muted"
                onMouseLeave={() => videoStop(video4)}
              ></video>
              <h2 className={styles.thumbTitle}>
                MK ft MC BechBech New Album Release
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
