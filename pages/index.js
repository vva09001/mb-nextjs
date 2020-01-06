import React from "react";
import Head from "next/head";
import { map } from "lodash";
import { useRouter } from "next/router";
import ReactHtmlParser from "react-html-parser";
import { getHomepageService } from "../services/home";

function Home({ list }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{list.meta_title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mt-2">
        {map(list.pageBlocks, (values, index) => {
          return (
            <div key={index} onClick={() => router.push("/news")}>
              {ReactHtmlParser(values.contentHtml)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

Home.getInitialProps = async ctx => {
  let list = null;
  let res = await getHomepageService();
  list = res.data;
  return { list };
};

export default Home;
