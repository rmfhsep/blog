import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Utterances from "./Utterances";

const name = "Jung-Hoon Kim";
export const siteTitle = "hoonys blog";

export default function Layout({ children, home}) {
 const [theme, setTheme] = useState(() =>
   typeof window !== "undefined"
     ? localStorage.getItem("theme") === "dark"
       ? "dark"
       : "light"
     : "light"
 );

 const handleClick = () => {
   if (typeof window !== "undefined") {
     const theme = localStorage.getItem("theme");
     if (theme === "dark") {
       localStorage.setItem("theme", "light");
       setTheme("light");
     } else {
       localStorage.setItem("theme", "dark");
       setTheme("dark");
     }
   }
 };

 useEffect(() => {
   if (theme === "dark") {
     document.querySelector("body").classList.add("dark");
   } else {
     document.querySelector("body").classList.remove("dark");
   }
 }, [theme]);

  console.log("레이아웃", theme)
  return (
    <div
      className="bg-gray-800 text-gray-200 flex justify-center min-h-screen"
      style={{ minWidth: "300px" }}
    >
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        {/* <button className="w-12 px-2" onClick={handleClick}>
          {theme === "dark" ? (
            <img src="/light-mode.svg" alt="light" />
          ) : (
            <img src="/dark-mode.svg" alt="dark" />
          )}
        </button> */}
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt=""
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt=""
                />
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInherit}>
                  {name}
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <>
            <Utterances />
            <div className={styles.backToHome}>
              <Link href="/" className="text-slate-300">
                ← Back to home
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
