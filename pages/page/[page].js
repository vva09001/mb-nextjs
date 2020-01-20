import React, { useState, useEffect } from "react";
import Head from "next/head";
import { map } from "lodash";
import ReactHtmlParser from "react-html-parser";
import { getPageService } from "../../services/home";
import { getPage } from "../../services/page";
import { useRouter } from "next/router";
import { getAllMenu, getMenuItemById } from "../../services/menu";

function Home() {
  const [list, setList] = useState([]);
  const [listPage, setListPage] = useState([]);
  const router = useRouter();
  const [menuTop, setMenuTop] = useState({});
  const [menuBottom, setMenuBottom] = useState({});
  const [menuSide, setMenuSide] = useState({});

  const getHome = async () => {
    const res = await getPageService(router.query.page);
    console.log(router.query.page);
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

  const getMenu = async () => {
    const res = await getAllMenu();
    if (res && res.status === 200) {
      map(res.data, async values => {
        if (values.position === "top") {
          const res1 = await getMenuItemById(values.id);
          if (res1 && res1.status === 200) {
            setMenuTop(res1.data);
          }
        } else {
          if (values.position === "bottom") {
            const res2 = await getMenuItemById(values.id);
            if (res2 && res2.status === 200) {
              setMenuBottom(res2.data);
            }
          } else {
            if (values.position === "side") {
              const res3 = await getMenuItemById(values.id);
              if (res3 && res3.status === 200) {
                setMenuSide(res3.data);
              }
            }
          }
        }
      });
    }
  };

  useEffect(() => {
    getHome();
    page();
    getMenu();
  }, []);
  console.log(menuTop, menuBottom, menuSide);
  return (
    <div>
      <Head>
        <title>{list.meta_title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="navbar">
        {map(menuTop, data => (
          <a href={`/page/${data.slug}`} key={data.id}>
            {data.name}
          </a>
        ))}
      </div>
      <div className="container mt-2">
        {map(list.pageBlocks, (values, index) => {
          return <div key={index}>{ReactHtmlParser(values.contentHtml)}</div>;
        })}
      </div>
      <div className="navbarside">
        {map(menuSide, data => (
          <a href={`/page/${data.slug}`} key={data.id}>
            {data.name}
          </a>
        ))}
      </div>
      <div className="navbarbot">
        {map(menuBottom, data => (
          <a href={`/page/${data.slug}`} key={data.id}>
            {data.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Home;
