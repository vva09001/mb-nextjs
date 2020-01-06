import request from "../utils/request";

const getNewService = () => {
  return request({
    url: "/news/isActive",
    method: "GET"
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};

const getNewByUri = uri => {
  return request({
    url: `/news/url/${uri}`,
    method: "GET"
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};

export { getNewService, getNewByUri };
