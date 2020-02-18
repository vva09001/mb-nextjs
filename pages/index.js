import React, { useEffect } from "react";
import Head from "next/head";
import Card from "../components/card";
import Carousel from "../components/carousel";
import Scrollspy from "../components/scrollspy";
import MutileIcon from "../components/mutileIcon";
import ImgeRight from "../components/block_imege_right";
import ImageLeft from "../components/block_imege_left";
import Post from "../components/block_post";
import Layout from "../components/layout";
import { HomeActions } from "../store/actions";
import { map } from "lodash";
import ReactHtmlParser from "react-html-parser";
import { connect } from "react-redux";

function Home({ getHome, list }) {
  useEffect(() => {
    getHome("homepage");
  }, [getHome]);
  return (
    <Layout>
      <Head>
        <title>{list.meta_title}</title>
        <link
          rel="icon"
          href="https://www.mbbank.com.vn//images/icons/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <div className="main_content">
        <Carousel />
        <Scrollspy />
        {/* <div className="container mt-4">
          <div data-spy="scroll" data-target="#tab_scrollpy" data-offset="0">
            <Card />
            <MutileIcon />
            <ImgeRight />
            <ImageLeft />
            <h4 id="3" style={{ height: "500px" }}>
              Hồ sơ vay vốn
            </h4>
            <h4 id="4" style={{ height: "500px" }}>
              Phương án vay
            </h4>
            <Post />
          </div>
        </div> */}
        <div className="container">
          {map(list.pageBlocks, (values, index) => {
            return <div key={index}>{ReactHtmlParser(values.contentHtml)}</div>;
          })}
        </div>
      </div>
    </Layout>
  );
}

const mapStateToProp = state => {
  return {
    list: state.HomeReducer.homedata
  };
};

const mapDispatchToProps = {
  getHome: HomeActions.getHomeAction
};

export default connect(mapStateToProp, mapDispatchToProps)(Home);
