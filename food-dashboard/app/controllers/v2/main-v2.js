import { Food } from "../../models/v1/model-v1.js";
import { getDataForm, showDataForm } from "../v1/controller-v1.js";
import { onSuccess, renderListFood } from "./controller-v2.js";
import { foodService } from "./service.js";

// gọi api lấy food list
const BASE_URL = "https://63b2c99f5901da0ab36dbaed.mockapi.io/food_es6";

//  async await luôn đi cùng nhau khi gọi api trong function
// let fetchData = async () => {
//   try {
//     let data = await axios({
//       url: BASE_URL,
//       method: "GET",
//     });
//   } catch (error) {
//     console.log("🚀 ~ error:", error);
//   }
// };
let fetchData = async () => {
  let res = await foodService.getList();
  let listFood = res.data.map((item) => {
    let { id, name, type, price, discount, status, img, desc } = item;
    return new Food(id, name, type, price, discount, status, img, desc);
  });
  // convert array object trở thành array food
  renderListFood(listFood.reverse());
  return listFood;
};
fetchData();

let result = await fetchData();
console.log("🚀 ~ result:", result);

window.deleteFood = (id) => {
  foodService.delete(id)
  .then(() => {
    console.log("Xóa thành công");
    fetchData();
    onSuccess("Thành công");
  })
  .catch((err) => {
    onSuccess(err)
  });
};

const CON_MON = "1";
const CHAY = "loai1";

window.addFood = () => {
  let data = getDataForm();
  let payload = {...data,
     status: data.status == CON_MON ? true : false,
     type: data.type == CHAY ? true : false};
  foodService.create(payload)
  .then(() => {
    fetchData();
    onSuccess("Thêm thành công");
    $("#exampleModal").modal("hide");
  })
  .catch((err) =>{
    console.log(err);
  })
}

let hienThiData = (data) =>{
  let { id, name, type, price, discount, status, img, desc } = data;
  document.getElementById("foodID").value = id;
  document.getElementById("tenMon").value = name;
  document.getElementById("loai").value = type ? CHAY : "loai2";
  document.getElementById("giaMon").value = price;
  document.getElementById("khuyenMai").value = discount;
  document.getElementById("tinhTrang").value = status ? CON_MON : "0";
  document.getElementById("hinhMon").value = img;
  document.getElementById("moTa").value = desc;
}

window.edit = (id) =>{
  axios({
    url: `${BASE_URL}/${id}`,
    method: "GET",
  })
  .then((res) =>{
    hienThiData(res.data);
    document.getElementById("foodID").disabled = true;
    console.log(res.data);
    $("#exampleModal").modal("show");
  })
  .catch((err) => {
    console.log("Error fetching data:", err);
  });
}

window.updateFood = () => {
  // Lấy dữ liệu từ form
  let data = getDataForm();

  // Đảm bảo các giá trị `CON_MON` và `CHAY` đã được định nghĩa
  let payload = {
    ...data,
    status: data.status == CON_MON ? true : false,
    type: data.type == CHAY ? true : false,
  };

  // Gửi yêu cầu cập nhật tới API
  foodService.update(payload)
    .then(() => {
      fetchData();  // Cập nhật danh sách sau khi sửa
      onSuccess("Cập nhật thành công");
      $("#exampleModal").modal("hide");  // Ẩn modal sau khi thành công
    })
    .catch((err) => {
      console.log("🚀 ~ error:", err);
      onSuccess("Cập nhật thất bại: " + err.message);
    });
};

window.resetForm = () => {
  document.getElementById("foodForm").reset();
  document.getElementById("foodID").disabled = false;

}

$(document).ready(function () {

  $('#exampleModal').on('hide.bs.modal', function () {
  resetForm();

  });
});		  


