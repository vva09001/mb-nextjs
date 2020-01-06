import React from "react";
import Head from "next/head";
import { map } from "lodash";
import NewItems from "../../components/news/Items";
import { getNewService } from "../../services/news";

function News({ list }) {
  return (
    <React.Fragment>
      <Head>
        <title>News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mt-2">
        <h1 className="text-center">Tin tức</h1>
        <div className="mb-4">
          <h4>Tin nổi bật</h4>
          {map(list, values => {
            if (values.is_sticky === 1) {
              return <NewItems data={values} key={values.newsId} />;
            }
          })}
        </div>
        <div>
          <h4>Tin gần đây</h4>
          {map(list, values => {
            if (values.is_sticky === 0) {
              return <NewItems data={values} key={values.newsId} />;
            }
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

News.getInitialProps = async ctx => {
  let list = [];
  let res = await getNewService();
  list = res.data;
  return { list };
};

export default News;
