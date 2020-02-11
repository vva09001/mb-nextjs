import React, { useEffect, useState } from "react";
import Head from "next/head";
import moment from "moment";
import { useRouter } from "next/router";
import ReactHtmlParser from "react-html-parser";
import { getNewByUri } from "../../services/news";

function New({ query }) {
  const [news, setNews] = useState({});
  const router = useRouter();
  useEffect(() => {
    const res = getNewByUri(router.query.slug);
    console.log(res)
     res.then(data => setNews(data.data));
    // console.log(res);
  }, [getNewByUri]);
  return (
    <React.Fragment>
      <Head>
        <title>{news.meta_title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container main_content">
        <h4>{news.title}</h4>
        <div style={{ display: "flex" }}>
          <p className="mr-4">Tác giả : {news.author_name}</p>
          <p className="mr-2">
            Ngày tạo :
            {moment(news.created_at)
              .endOf("day")
              .fromNow()}
          </p>
        </div>
        {console.log(news.description)}
        <div>{ReactHtmlParser(news.description)}</div>
      </div>
    </React.Fragment>
  );
}

New.getInitialProps = async ({ err, res, xhr, req }) => {
  let news = [];
  return { news };
};

export default New;
