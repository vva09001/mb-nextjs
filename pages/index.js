import React, { useState, useEffect } from "react";
import Head from "next/head";
import { map } from "lodash";
import { useRouter } from "next/router";
import ReactHtmlParser from "react-html-parser";
import { getHomepageService } from "../services/home";

function Home() {
  const router = useRouter();
  const [list, setList] = useState([]);

  const getHome = async () => {
    const res = await getHomepageService();
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
