// Bài 1
document.getElementById("sapXep").onclick = function () {
  var soThu1 = Number(document.getElementById("soThu1").value);
  var soThu2 = Number(document.getElementById("soThu2").value);
  var soThu3 = Number(document.getElementById("soThu3").value);
  if (
    Math.floor(soThu1) !== soThu1 ||
    Math.floor(soThu2) !== soThu2 ||
    Math.floor(soThu3) !== soThu3
  ) {
    alert("Chỉ được nhập số nguyên");
  } else if (soThu1 > soThu2) {
    if (soThu1 > soThu3) {
      if (soThu2 > soThu3) {
        var soNhoNhat = soThu3;
        var soTrungBinh = soThu2;
        var soLonNhat = soThu1;
      } else {
        var soNhoNhat = soThu2;
        var soTrungBinh = soThu3;
        var soLonNhat = soThu1;
      }
    } else {
      var soNhoNhat = soThu2;
      var soTrungBinh = soThu1;
      var soLonNhat = soThu3;
    }
  } else if (soThu1 < soThu3) {
    if (soThu2 > soThu3) {
      var soNhoNhat = soThu1;
      var soTrungBinh = soThu3;
      var soLonNhat = soThu2;
    } else {
      var soNhoNhat = soThu1;
      var soTrungBinh = soThu2;
      var soLonNhat = soThu3;
    }
  } else {
    var soNhoNhat = soThu3;
    var soTrungBinh = soThu1;
    var soLonNhat = soThu2;
  }

  document.getElementById(
    "soTangDan"
  ).innerHTML = `${soNhoNhat} < ${soTrungBinh} < ${soLonNhat}`;
};

// Bài 2

document.getElementById("guiLoiChao").onclick = function () {
  var idUser = document.getElementById("idUser").value;
  var user = "Không hợp lệ";
  switch (idUser) {
    case "B":
      user = "Xin chào Bố";
      break;
    case "M":
      user = "Xin chào Mẹ";
      break;
    case "A":
      user = "Xin chào Anh";
      break;
    case "E":
      user = "Xin chào Em gái";
      break;
    default:
      alert("Không hợp lệ");
  }
  document.getElementById("loiChao").innerHTML = user;
};

// Bài 3

document.getElementById("demChanLe").onclick = function () {
  var soThuNhat = Number(document.getElementById("soThuNhat").value);
  var soThuHai = Number(document.getElementById("soThuHai").value);
  var soThuBa = Number(document.getElementById("soThuBa").value);

  var demSoChan = 0;
  var demSoLe = 0;

  if (Math.floor(soThuNhat) !== soThuNhat) {
    alert("Số thứ 1 không phải là số nguyên");
  } else if (soThuNhat % 2 === 0) {
    demSoChan++;
  } else demSoLe++;

  if (Math.floor(soThuHai) !== soThuHai) {
    alert("Số thứ 2 không phải là số nguyên");
  } else if (soThuHai % 2 === 0) {
    demSoChan++;
  } else demSoLe++;

  if (Math.floor(soThuBa) !== soThuBa) {
    alert("Số thứ 3 không phải là số nguyên");
  } else if (soThuBa % 2 === 0) {
    demSoChan++;
  } else demSoLe++;

  document.getElementById("phanBietChanLe").innerHTML =
    "Có " + demSoChan + " số nguyên chẵn và " + demSoLe + " số nguyên lẻ";
};

// Bài 4

document.getElementById("xacDinh").onclick = function () {
  var canh1 = Number(document.getElementById("canh1").value);
  var canh2 = Number(document.getElementById("canh2").value);
  var canh3 = Number(document.getElementById("canh3").value);
  var loaiTamGiac = "Không xác định";
  if (canh1 <= 0 || canh2 <= 0 || canh3 <= 0) {
    alert("Cạnh của tam giác phải lớn hơn 0");
  } else if (canh1 === canh2 && canh1 === canh3) {
    var loaiTamGiac = "Tam giác đều";
  } else if (canh1 === canh2 || canh1 === canh3 || canh2 === canh3) {
    var loaiTamGiac = "Tam giác cân";
  } else if (
    canh1 * canh1 + canh2 * canh2 === canh3 * canh3 ||
    canh1 * canh1 + canh3 * canh3 === canh2 * canh2 ||
    canh2 * canh2 + canh3 * canh3 === canh1 * canh1
  ) {
    var loaiTamGiac = "Tam giác vuông";
  } else {
    var loaiTamGiac = "Tam giác thường";
  }

  document.getElementById("tamGiac").innerHTML = loaiTamGiac;
};
