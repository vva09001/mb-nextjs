import React from "react";
import Head from "next/head";
import { getHomepageService } from "../services/home";
import { map } from "lodash";
import ReactHtmlParser from "react-html-parser";

// const parser = new DomParser();

function Home({ list }) {
  return (
    <div>
      <Head>
        <title>{list.meta_title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mt-2">
        {map(list.pageBlocks, values => {
          return ReactHtmlParser(values.contentHtml);
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
