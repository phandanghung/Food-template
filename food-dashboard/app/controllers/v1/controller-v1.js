export let getDataForm = () =>{
    let id = document.getElementById("foodID").value;
    let name = document.getElementById("tenMon").value;
    let type = document.getElementById("loai").value;
    let price = document.getElementById("giaMon").value;
    let discount = document.getElementById("khuyenMai").value;
    let status = document.getElementById("tinhTrang").value;
    let img = document.getElementById("hinhMon").value;
    let desc = document.getElementById("moTa").value;
    return {
        id,name,type, price,discount,status,img,desc,
    }

}
export let showDataForm = (data) =>{
    let {id,name,type, price,discount,status,img,desc} = data;
    document.getElementById('spMa').innerHTML = id;
    document.getElementById('spTenMon').innerHTML = name;
    document.getElementById('spLoaiMon').innerHTML = type == 
    "loai1" ? `<span>Chay</span>`: "Mặn";
    document.getElementById('spGia').innerHTML = price;
    document.getElementById('spKM').innerHTML = discount;
    document.getElementById('spGiaKM').innerHTML = data.calculatePrice();
    document.getElementById('spTT').innerHTML = status;
    document.getElementById('imgMonAn').src = img;
    document.getElementById('pMoTa').innerHTML = desc;
}