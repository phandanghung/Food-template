export let renderListFood = (foodArr) =>{
    let content = "";
    foodArr.forEach(item =>{
        let {id,name,type,price,discount,status,calculatePrice} = item;
        content +=  `
            <tr>
                <th>${id}</th>
                <th>${name}</th>
                <th>${type ? "chay" : "Mặn"}</th>
                <th>${price}</th>
                <th>${discount}</th>
                <th>${calculatePrice() || 0}</th>
                <th>${status ? "Còn" : "Hết"}</th>
                <th><button onclick="edit(${id})" class="btn-success">sửa</button>
                    <button onclick="deleteFood(${id})" class="btn-danger">xóa</button>
                </th>
            </tr>
        `
    })
    document.getElementById("tbodyFood").innerHTML = content;
}

export let onSuccess= (message) => {
    Toastify({
        text: message,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}