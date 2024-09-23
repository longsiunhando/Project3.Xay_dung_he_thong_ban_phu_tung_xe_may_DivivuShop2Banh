import React from 'react';

function Footer(props) {
  return (
    <div>
      <footer className="footer-area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 single-footer-widget">
              <h4>Trụ sở chính</h4>
              <ul>
                <li><a href="#"><i class="fa fa-map-marker-alt text-primary mr-3"></i>123 Đỗ Thế Diên, phường Nhân Hòa, thị xã Mỹ Hào, tỉnh Hưng Yên, Việt Nam</a></li>
                <li><a href="#"><i class="fa fa-envelope text-primary mr-3"></i>longchoinon@gmail.com</a></li>
                <li><a href="#"><i class="fa fa-phone-alt text-primary mr-3"></i>+84 981 076 110</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 single-footer-widget">
              <h4>QuickShop2Banh</h4>
              <div class="d-flex flex-column justify-content-start">
                  <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Trang chủ</a>
                  <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Thông tin sản phẩm</a>
                  <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Giỏ hàng</a>
                  <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Thông tin thanh toán</a>
                  <a class="text-secondary" href="#"><i class="fa fa-angle-right mr-2"></i>Liên hệ</a>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Tài khoản</h4>
              <div class="d-flex flex-column justify-content-start">
                  <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Thông tin tài khoản</a>
                  <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Chính sách bảo mật</a>
                  <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Đổi mật khẩu</a>
                  <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Xóa tài khoản</a>
                  <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Đổi thông tin thanh toán</a>
                  <a class="text-secondary" href="contact.html"><i class="fa fa-angle-right mr-2"></i>Liên hệ</a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 single-footer-widget">
              <h4>Bản tin</h4>

              <p><a href="https://www.techz.vn/178-1220-5-honda-sh-vua-giam-sau-gia-xe-honda-sh-mode-lai-bat-ngo-bien-dong-manh-trong-dau-thang-12-ylt520735.html">Honda SH vừa giảm sâu, giá xe Honda SH Mode lại bất ngờ biến động mạnh trong đầu tháng 12</a></p>
                        <form action="">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Email"/>
                                <div class="input-group-append">
                                    <button class="btn btn-primary">Đăng ký</button>
                                </div>
                            </div>
                        </form>
                        <h6 class="text-secondary text-uppercase mt-4 mb-3">Follow Us</h6>
                        <div class="d-flex">
                            <a class="btn btn-primary btn-square mr-2" href="#"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-primary btn-square mr-2" href="#"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-primary btn-square mr-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                            <a class="btn btn-primary btn-square" href="#"><i class="fab fa-instagram"></i></a>
                        </div>



            </div>

          </div>
          <div className="footer-bottom row align-items-center">
            <p className="footer-text m-0 col-lg-8 col-md-12">
              <a class="text-primary" href="#">Domain</a>. Đồ án chuyên ngành: Thiết kế Web. Được thiết kế bởi
                    
              <a class="text-primary" href="https://www.facebook.com/longxickloo">: LongNgaoOp</a>
            </p>

          </div>
        </div>
      </footer>

    </div>
  );
}

export default Footer;