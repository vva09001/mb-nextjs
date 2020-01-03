import request from "../utils/request";

const getHomepageService = () => {
  return request({
    url: "pages/name/homepage",
    method: "GET"
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};

export { getHomepageService };
