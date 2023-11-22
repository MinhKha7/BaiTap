// Bài 1
document.getElementById("ketQua").onclick = function () {
  var diemChuan = Number(document.getElementById("diemChuan").value);
  var diemMon1 = Number(document.getElementById("diemMon1").value);
  var diemMon2 = Number(document.getElementById("diemMon2").value);
  var diemMon3 = Number(document.getElementById("diemMon3").value);
  var diemKhuVuc = Number(document.getElementById("khuVuc").value);
  var diemDoiTuong = Number(document.getElementById("doiTuong").value);

  var diem3Mon = diemMon1 + diemMon2 + diemMon3;
  var diemUuTien = diemKhuVuc + diemDoiTuong;
  var diemTongKet = diem3Mon + diemUuTien;

  var dauRot = 0;

  function soDiemTongKet() {
    document.getElementById("diem3Mon").innerHTML = `Điểm 3 môn: ${diem3Mon}`;
    document.getElementById(
      "diemUuTien"
    ).innerHTML = `Điểm ưu tiên: ${diemUuTien}`;
    document.getElementById(
      "diemTongKet"
    ).innerHTML = `Điểm tổng kết: ${diemTongKet}`;
    document.getElementById("dauRot").innerHTML = `Kết quả: ${dauRot}`;
  }

  if (diemChuan <= 0) {
    alert("Điểm chuẩn phải lớn hơn 0");
  } else if ((diemMon1 < 0) | (diemMon2 < 0) | (diemMon3 < 0)) {
    alert("Điểm thi không thể nhỏ hơn 0");
    document.getElementById("diem3Mon").innerHTML = "";
    document.getElementById("diemUuTien").innerHTML = "";
    document.getElementById("diemTongKet").innerHTML = "";
    document.getElementById("dauRot").innerHTML = "";
  } else if (
    (diemTongKet >= diemChuan) &
    (diemMon1 !== 0) &
    (diemMon2 !== 0) &
    (diemMon3 !== 0)
  ) {
    dauRot = "Đậu";
    soDiemTongKet();
  } else {
    dauRot = "Rớt";
    soDiemTongKet();
  }
};

// Bài 2
document.getElementById("xuatHoaDon").onclick = function () {
  const Gia_Duoi_50Kw = 500;
  const Gia_51_100Kw = 650;
  const Gia_101_200Kw = 850;
  const Gia_201_350Kw = 1_100;
  const Gia_Tren_350Kw = 1_300;

  var tenKh = String(document.getElementById("tenKh").value);
  var soKw = Number(document.getElementById("soKw").value);
  function soTienDienPhaiTra() {
    document.getElementById(
      "tienDienPhaiTra"
    ).innerHTML = `Tiền điện của KH ${tenKh} tháng này là ${Intl.NumberFormat(
      "vn-VN"
    ).format(tienDienPhaiTra)} VNĐ`;
  }

  if (soKw < 0) {
    alert("Số điện tiêu thụ không thể nhỏ hơn 0");
  } else if (soKw <= 50) {
    tienDienPhaiTra = Gia_Duoi_50Kw * soKw;
    soTienDienPhaiTra();
  } else if (soKw > 50 && soKw <= 100) {
    tienDienPhaiTra = Gia_Duoi_50Kw * 50 + Gia_51_100Kw * (soKw - 50);
    soTienDienPhaiTra();
  } else if (soKw > 100 && soKw <= 200) {
    tienDienPhaiTra =
      Gia_Duoi_50Kw * 50 + Gia_51_100Kw * 50 + Gia_101_200Kw * (soKw - 100);
    soTienDienPhaiTra();
  } else if (soKw > 200 && soKw <= 350) {
    tienDienPhaiTra =
      Gia_Duoi_50Kw * 50 +
      Gia_51_100Kw * 50 +
      Gia_101_200Kw * 100 +
      Gia_201_350Kw * (soKw - 200);
    soTienDienPhaiTra();
  } else if (soKw > 350) {
    tienDienPhaiTra =
      Gia_Duoi_50Kw * 50 +
      Gia_51_100Kw * 50 +
      Gia_101_200Kw * 100 +
      Gia_201_350Kw * 150 +
      Gia_Tren_350Kw * (soKw - 350);
    soTienDienPhaiTra();
  }
};

// Bài 3

document.getElementById("tinhThue").onclick = function () {
  var hoTenKh = String(document.getElementById("hoTenKh").value);
  var tongThuNhapNam = Number(document.getElementById("tongThuNhapNam").value);
  var soNguoiPhuThuoc = Number(
    document.getElementById("soNguoiPhuThuoc").value
  );

  var thuNhapChiuThue = tongThuNhapNam - 4 - soNguoiPhuThuoc * 1.6;

  function soThuePhaiNop() {
    document.getElementById(
      "thuePhaiNop"
    ).innerHTML = `Số thuế Ông/Bà ${hoTenKh} phải nộp là: ${Intl.NumberFormat(
      "vn-VN"
    ).format(thuePhaiNop * 1_000_000)} VNĐ`;
  }

  if (soNguoiPhuThuoc < 0) {
    alert("Số người phụ thuộc không thể nhỏ hơn 0");
  } else if (tongThuNhapNam < 0) {
    alert("Số tổng thu nhập năm không thể nhỏ hơn 0");
  } else if (thuNhapChiuThue < 0) {
    thuePhaiNop = 0;
    soThuePhaiNop();
  } else if (thuNhapChiuThue <= 60) {
    thuePhaiNop = (thuNhapChiuThue * 5) / 100;
    soThuePhaiNop();
  } else if (thuNhapChiuThue > 60 && thuNhapChiuThue <= 120) {
    thuePhaiNop = (thuNhapChiuThue * 10) / 100;
    soThuePhaiNop();
  } else if (thuNhapChiuThue > 120 && thuNhapChiuThue <= 210) {
    thuePhaiNop = (thuNhapChiuThue * 15) / 100;
    soThuePhaiNop();
  } else if (thuNhapChiuThue > 210 && thuNhapChiuThue <= 384) {
    thuePhaiNop = (thuNhapChiuThue * 20) / 100;
    soThuePhaiNop();
  } else if (thuNhapChiuThue > 384 && thuNhapChiuThue <= 624) {
    thuePhaiNop = (thuNhapChiuThue * 25) / 100;
    soThuePhaiNop();
  } else if (thuNhapChiuThue > 624 && thuNhapChiuThue <= 960) {
    thuePhaiNop = (thuNhapChiuThue * 30) / 100;
    soThuePhaiNop();
  } else if (thuNhapChiuThue > 960) {
    thuePhaiNop = (thuNhapChiuThue * 35) / 100;
    soThuePhaiNop();
  }
};

// Bài 4
document.getElementById("doanhNghiep").onclick = function () {
  document.getElementById("soKetNoi").style.display = "block";
};

document.getElementById("nhaDan").onclick = function () {
  document.getElementById("soKetNoi").style.display = "none";
};

// Nhà dân
const ND_HD = 4.5;
const ND_CB = 20.5;
const ND_CC = 7.5;
// Doanh nghiệp
const DN_HD = 15;
const DN_CB_Duoi_10 = 75;
const DN_CB_Tren_10 = 5;
const DN_CC = 50;

document.getElementById("tinhTien").onclick = function () {
  var maKh = String(document.getElementById("maKh").value);
  var isND = document.getElementById("nhaDan").checked;
  var isDN = document.getElementById("doanhNghiep").checked;
  var soKetNoi = Number(document.getElementById("soKetNoi").value);
  var soKenhCaoCap = Number(document.getElementById("soKenhCaoCap").value);

  if (soKetNoi < 0) {
    alert("Số kết nối không thể nhỏ hơn 0");
  } else if (soKenhCaoCap < 0) {
    alert("Số kênh cao cấp không thể nhỏ hơn 0");
  } else {
    if (isND) {
      tongTien = ND_HD + ND_CB + ND_CC * soKenhCaoCap;
    }

    if (isDN) {
      if (soKetNoi <= 10) {
        tongTien = DN_HD + DN_CB_Duoi_10 + DN_CC * soKenhCaoCap;
      } else if (soKetNoi > 10) {
        tongTien =
          DN_HD +
          DN_CB_Duoi_10 +
          DN_CB_Tren_10 * (soKetNoi - 10) +
          DN_CC * soKenhCaoCap;
      }
    }

    document.getElementById(
      "tongTien"
    ).innerHTML = `Số tiền mà KH ${maKh} phải trả là ${tongTien}$`;
  }
};
