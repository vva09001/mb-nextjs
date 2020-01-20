import React, { useState, useEffect } from "react";
import Head from "next/head";
import { map } from "lodash";
import ReactHtmlParser from "react-html-parser";
import { getPageService } from "../services/home";
import { getPage } from "../services/page";
import { getAllMenu, getMenuItemById } from "../services/menu";

function Home() {
  const [list, setList] = useState([]);
  const [listPage, setListPage] = useState([]);
  const [menuTop, setMenuTop] = useState({});
  const [menuBottom, setMenuBottom] = useState({});
  const [menuSide, setMenuSide] = useState({});

  const nest = (items, id = null, link = "parentId") => {
    return items
      .filter(item => item[link] === id)
      .map(item => ({
        ...item,
        title: `${item.name}`,
        children: nest(
          items.sort((a, b) => a.position - b.position),
          item.id
        ),
        expanded: true
      }));
  };
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

  const getMenu = async () => {
    const res = await getAllMenu();
    if (res && res.status === 200) {
      map(res.data, async values => {
        if (values.position === "top") {
          const res1 = await getMenuItemById(values.id);
          if (res1 && res1.status === 200) {
            let menuTopData = nest(res1.data);
            setMenuTop(menuTopData);
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
      <nav className="menu">
        <ol>
          {map(menuTop, values => (
            <li className="menu-item">
              <a href="#0">{values.name}</a>
              <ol className="sub-menu">
                {map(values.children, valuess => (
                  <li className="menu-item">
                    <a href="#0">{valuess.name}</a>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </nav>
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

// Home.getInitialProps = async ctx => {
//   let list = [];
//   let res = await getHomepageService();
//   console.log(res);
//   // list = res.data;
//   return { list };
// };

export default Home;
