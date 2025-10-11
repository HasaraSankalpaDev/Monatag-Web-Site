"use client";
import { useEffect, useState } from "react";
import styles from "./globals.css";

export default function HomePage() {
  const [seconds, setSeconds] = useState(2);
  const redirectUrl = "https://otieu.com/4/10026126"; // final redirect

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      window.location.href = redirectUrl;
    }
  }, [seconds]);

  return (
    <div className={styles.container}>
      <h1>🔥 Watch the Full Video Now! 🔥</h1>
      <p>
        You will be redirected automatically in{" "}
        <span style={{ color: "#ffcc00", fontWeight: "bold" }}>{seconds}</span>{" "}
        seconds.
        <br />
        Or click the button below to continue instantly.
      </p>

      <a
        href="https://otieu.com/4/10026126"
        target="_blank"
        className={"ctaButton"}
      >
        ▶ Watch Full Video
      </a>
    </div>
  );
}
