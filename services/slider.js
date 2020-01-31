import request from "../utils/request";

const getAllSlider = () => {
  return request({
    url: '/slider',
    method: "GET"
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};

export { getAllSlider };
