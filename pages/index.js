import React from "react";
import Head from "next/head";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="hero">
      <h1 className="title" style={{ textAlign: "center" }}>
        Welcome to Next.js!
      </h1>
    </div>
  </div>
);

export default Home;
