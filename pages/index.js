import React, { useEffect } from "react";
import Head from "next/head";
import Scrollspy from "../components/scrollspy";
import Layout from "../components/layout";
import { Carousel } from "react-responsive-carousel";
import { HomeActions } from "../store/actions";
import { map, isEmpty } from "lodash";
import ReactHtmlParser from "react-html-parser";
import { connect } from "react-redux";

function Home({ getHome, list, silder }) {
  useEffect(() => {
    getHome("homepage");
  }, [getHome]);

  const renderText = item => {
    switch (item.options) {
      case "0":
        return item.callToActionText;
      case "1":
        return item.caption1;
      case "2":
        return item.caption2;
      case "3":
        return item.caption3;

      default:
        return item.callToActionText;
    }
  };
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
        {!isEmpty(silder) && (
          <Carousel
            showThumbs={false}
            autoPlay={silder.autoPlay === 1 ? true : false}
            interval={
              silder.autoPlaySpeed === undefined ? 3000 : silder.autoPlaySpeed
            }
            showArrows={silder.arrows === 1 ? true : false}
            showStatus={false}
            infiniteLoop={true}
            emulateTouch
          >
            {map(silder.sliderSlides, (item, index) => (
              <div key={index}>
                <img src={item.image} alt="icon" />
                <a href={item.callToActionUrl} className="legend">
                  {renderText(item)}
                </a>
              </div>
            ))}
          </Carousel>
        )}

        <Scrollspy />
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
    list: state.HomeReducer.homedata,
    silder: state.HomeReducer.silder
  };
};

const mapDispatchToProps = {
  getHome: HomeActions.getHomeAction
};

export default connect(mapStateToProp, mapDispatchToProps)(Home);
