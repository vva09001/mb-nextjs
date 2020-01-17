import React, { useState, useEffect } from "react";
import Head from "next/head";
import { map } from "lodash";
import ReactHtmlParser from "react-html-parser";
import { getPageService } from "../services/home";
import { getPage } from "../services/page";

function Home() {
  const [list, setList] = useState([]);
  const [listPage, setListPage] = useState([]);

  const getHome = async () => {
    const res = await getPageService("homepage");
    if (res && res.status === 200) {
      setList(res.data);
    }
  };

  const page = async () => {
    const res = await getPage();
    if (res && res.status === 200) {
      setListPage(res.data);
    }
  };

  useEffect(() => {
    getHome();
    page();
  }, []);

  return (
    <div>
      <Head>
        <title>{list.meta_title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="navbar">
        {map(listPage, data => (
          <a href={`/page/${data.slug}`}>{data.name}</a>
        ))}
      </div>
      <div className="container mt-2">
        {map(list.pageBlocks, (values, index) => {
          return <div key={index}>{ReactHtmlParser(values.contentHtml)}</div>;
        })}
      </div>
    </div>
  );
}

// Home.getInitialProps = async ctx => {
//   let list = [];
//   let res = await getHomepageService();
//   console.log(res);
//   // list = res.data;
//   return { list };
// };

export default Home;
