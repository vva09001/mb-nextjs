import React, { useEffect } from "react";
import { useRouter } from "next/router";

function GetDataByUri() {
  const router = useRouter();
  useEffect(() => {
    router.push(`/news/${router.query.slug}`);
  }, []);

  return <div></div>;
}

export default GetDataByUri;
