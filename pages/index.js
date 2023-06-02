import Head from "next/head";
import { useState , useEffect} from "react";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/Date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
    const [theme, setTheme] = useState(() =>
      typeof window !== "undefined"
        ? localStorage.getItem("theme") === "dark"
          ? "dark"
          : "light"
        : null
    );


     useEffect(() => {
        setTheme(localStorage.getItem("theme"));
     }, [theme]);

  console.log(theme);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section
        className={utilStyles.headingMd}
        style={{ marginBottom: "20px" }}
      >
        <p className="mb-2">
          안녕하세요. <br />
          웹을 통해 편한 세상을 만드는 김정훈입니다.
        </p>
        <div className="flex justify-between flex-col md:flex-row">
          <p className="text-slate-300">✉️ rmfhsep@gmail.com</p>
          <p className="text-slate-300">🐱 https://github.com/rmfhsep</p>
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>ALL POSTS</h2>
        <hr className="bg-indigo-500 w-40 mt-4 mb-6 border-0" style={{height:"1px"}}></hr>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => {
            return (
              <li className={utilStyles.listItem} key={id}>
                <Link
                  href={`/posts/${id}`}
                  className="no-underline font-bold"
                  style={{color: "#eeeeee"}}
                >
                  {title}
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}
