import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../layout";
import { map } from "lodash";
import ReactHtmlParser from "react-html-parser";
import { getPageService } from "../services/home";

function Home() {
  const [list, setList] = useState([]);

  const getHome = async () => {
    const res = await getPageService("homepage");
    if (res && res.status === 200) {
      setList(res.data);
    }
  };

  useEffect(() => {
    getHome();
  }, []);
  return (
    <div>
      <Head>
        <title>{list.meta_title}</title>
        <link
          rel="icon"
          href="https://www.mbbank.com.vn//images/icons/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <div className="container main_content">
        {map(list.pageBlocks, (values, index) => {
          return <div key={index}>{ReactHtmlParser(values.contentHtml)}</div>;
        })}
      </div>
    </div>
  );
}
export default Home;
