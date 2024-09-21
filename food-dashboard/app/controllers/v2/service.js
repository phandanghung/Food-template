const BASE_URL = "https://63b2c99f5901da0ab36dbaed.mockapi.io/food_es6";

export let foodService = {
  getList: () => {
    return axios({
      url: BASE_URL,
      method: "GET",
    });
  },
  create: () => {
    return axios({
      url: BASE_URL,
      method: "POST",
    });
  },
  update: (data) => {
    return axios({
      url: `${BASE_URL}/${data.id}`,
      method: "PUT",
      data: data,
    });
  },
  delete: (id) => {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "DELETE",
    });
  },
};
