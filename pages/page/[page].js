import React, { useState, useEffect } from "react";
import Head from "next/head";
import { map } from "lodash";
import ReactHtmlParser from "react-html-parser";
import { getPageService } from "../../services/home";
import { getNewByUri } from "../../services/news";
import { useRouter } from "next/router";
import { getAllMenu, getMenuItemById } from "../../services/menu";

function Home() {
  const [list, setList] = useState([]);
  const router = useRouter();
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

  const nestChild = items => {
    return map(items, item => (
      <li className="active" key={item.id}>
        <a href={`${item.slugPages}`}>{item.name}</a>
        <ul>{nestChild(item.children)}</ul>
      </li>
    ));
  };
  const getHome = async () => {
    console.log(router.query.page);
    const res = await getPageService(router.query.page);
    const news = await getNewByUri(router.query.page);
    if (res && res.status === 200) {
      setList(res.data);
    }
    if (news && news.status === 200) {
      router.push(`/news/${router.query.page}`);
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
    getMenu();
  }, []);

  return (
    <div>
      <Head>
        <title>{list.meta_title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="cssmenu">
        <ul>{nestChild(menuTop)}</ul>
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
