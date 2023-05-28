import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/Date";
import utilStyles from "../../styles/utils.module.css";
import { useRouter } from "next/router";
import { MDXRemote } from "next-mdx-remote";
import CodeBlock from "../../components/CodeBlock";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: true,

    // fallback true 로 하면
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
const Button = ({children}) => {
  return (
    <button className="bg-black dark:bg-white dark:text-teal-700 text-lg text-pink-200 rounded-lg" onClick={() => alert(`thank to ${children}`)}>{children}</button>
  )
}
const components = { Button, CodeBlock };

export default function Post({ postData }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <br />
        {postData.contentHtml && (
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        )}
        {postData.mdxSource && (
          <MDXRemote {...postData.mdxSource} components={components} />
        )}
      </article>

    </Layout>
  );
}
