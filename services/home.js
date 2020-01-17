import request from "../utils/request";

const getPageService = name => {
  return request({
    url: `/pages/name/${name}`,
    method: "GET"
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};

export { getPageService };
