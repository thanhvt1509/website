import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { SignupForm } from "../../../models/user";
const UserLayout = () => {
  const [user, setUser] = useState<SignupForm>({} as SignupForm)

  const navigate = useNavigate()
  const logout = () => {
    alert("Dang xuat thanh cong")
    localStorage.clear()
  }
  const routeAdmin = () => {
    if (user.role !== "admin") {
      alert("Ban khong co quyen vao admin")
      return
    }
    navigate("/admin")
  }
  useEffect(() => {
    const getData = localStorage.getItem("user")
    if (getData) {
      const dataObject = JSON.parse(getData)
      setUser(dataObject)
    }
  }, [])
  return (
    <div>
      {/* Header */}
      <header className="py-1 bg-[#D70018]">
        <div className="container flex items-center gap-[115px] mx-auto max-w-[1220px]">
          <Link to="/">
            <img className="flex-shrink-0 rounded-md" src="/logo.png" alt="" />
          </Link>
          <div className="w-full px-3 bg-white rounded-md">
            <i className="cursor-pointer fa-solid fa-magnifying-glass"></i>
            <input
              className="flex-shrink-0 px-3 py-1 border-none rounded-md outline-none focus:ring-transparent"
              type="text"
              placeholder="Tìm kiếm"
            />
          </div>
          <div className="flex items-center text-white gap-x-8">
            <div>
              <p className="leading-[14px] text-xs max-w-[75px] whitespace-nowrap">
                Gọi mua hàng
              </p>
              <p className="leading-[14px] text-xs">1800.2097</p>
            </div>
            <div className="flex items-center gap-x-2">
              <i className="fal fa-map-marker-alt"></i>
              <Link to="" className="leading-[14px] text-xs min-w-[54px]">
                Cửa hàng gần bạn
              </Link>
            </div>
            <div className="flex items-center gap-x-2">
              <i className="fal fa-shipping-fast"></i>
              <Link to="" className="leading-[14px] text-xs min-w-[54px]">
                Tra cứu đơn hàng
              </Link>
            </div>
            <div className="flex items-center gap-x-2">
              <i className="fal fa-cart-plus"></i>
              <Link to="/cart" className="leading-[14px] text-xs">
                Giỏ hàng
              </Link>
            </div>
          </div>
          {/* <Link to={"signin"} className="flex items-center gap-x-3">
            <i className="text-2xl text-white fa-regular fa-circle-user"></i>
            <span className="text-white whitespace-nowrap">Đăng nhập</span>
          </Link> */}
          {/* {user.name ? <div className='text-[#ffffff] ml-[100px] flex items-center'>
            <img onClick={() => routeAdmin()} src="https://img.icons8.com/carbon-copy/256/user.png" className='w-[32px] bg-[#ffffff] rounded-[50%] mr-4 cursor-pointer' alt="" />
            {user.name}
            <button className='ml-[20px] bg-[#000] py-2 px-4' onClick={() => logout()}><a href='/'>Đăng xuất</a></button></div> : <Link to="/signin" className='ml-[100px] bg-[#fff] py-2 px-4'>Đăng nhập</Link>} */}
          {user.name ? <div className='text-[#ffffff] ml-[100px] flex items-center'>
            <img onClick={() => routeAdmin()} src="https://img.icons8.com/carbon-copy/256/user.png" className='w-[32px] bg-[#ffffff] rounded-[50%] mr-4 cursor-pointer' alt="" />
            {user.name}
            <button className='ml-[20px] bg-[#000] ' onClick={() => logout()}><a href='/'>Đăng xuất</a></button></div> : <Link to="/signin" className='ml-[100px] bg-[#fff] py-2 px-4'>Đăng nhập</Link>}
        </div>
      </header>
      {/* Content */}
      <Outlet />
      <footer className="container px-[215px] mx-auto">
        <div className="flex items-stretch justify-between mb-[74px]">
          <div>
            <ul className="mb-2">
              <li className="leading-[22px] block mb-2 text-[#444444]">
                Tìm cửa hàng
              </li>
              <li>
                <a
                  href=""
                  className="leading-[22px] block text-[#444444] text-xs"
                >
                  Tìm cửa hàng gần nhất
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="leading-[22px] block text-[#444444] text-xs"
                >
                  Mua hàng từ xa
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="leading-[22px] block  text-[#FF0000] text-xs whitespace-nowrap"
                >
                  Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href=""
                  className="leading-[22px] block mb-[15px] text-[#444444]"
                >
                  Phương thức thanh toán
                </a>
              </li>
              <li className="flex items-center gap-x-4">
                <a href="">
                  <img src="citi.png" alt="" className="" />
                </a>
                <a href="">
                  <img src="moca.png" alt="" className="" />
                </a>
                <a href="">
                  <img src="kredivo.png" alt="" className="" />
                </a>
                <a href="">
                  <img src="vnpay.png" alt="" className="" />
                </a>
                <a href="">
                  <img src="vpbank.png" alt="" className="" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="mb-[15px]">
              <li>
                <a href="" className="block text-xs leading-[22px]">
                  Gọi mua hàng: 1800.2044 (8h00 - 22h00)
                </a>
              </li>
              <li>
                <a href="" className="block text-xs leading-[22px]">
                  Gọi khiếu nại: 1800.2063 (8h00 - 21h30)
                </a>
              </li>
              <li>
                <a href="" className="block text-xs leading-[22px]">
                  Gọi bảo hành: 1800.2064 (8h00 - 21h00)
                </a>
              </li>
            </ul>
            <ul className="mb-[18px]">
              <li className="leading-[22px] block text-[#444444]">
                Đối tác dịch vụ bảo hành
              </li>
              <li className="leading-[22px] text-xs block text-[#444444]">
                <a href="">Điện Thoại - Máy tính</a>
              </li>
            </ul>
            <ul>
              <li className="leading-[22px] block mb-[5px] text-[#444444]">
                Trung tâm bảo hành uỷ quyền Apple
              </li>
              <li className="">
                <a href="">
                  <img src="contact.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a
                  href=""
                  className="block text-xs text-[#444444] leading-[22px]"
                >
                  Mua hàng và thanh toán Online
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="block text-xs text-[#444444] leading-[22px]"
                >
                  Mua hàng trả góp Online
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="block text-xs text-[#444444] leading-[22px]"
                >
                  Tra thông tin đơn hàng
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="block text-xs text-[#444444] leading-[22px]"
                >
                  Tra điểm Smember
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="block text-xs text-[#444444] leading-[22px]"
                >
                  Tra thông tin bảo hành
                </a>
              </li>
              <li>
                <a href="" className="block text-xs  leading-[22px]">
                  Tra cứu hoá đơn VAT điện tử
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="block text-xs text-[#444444] leading-[22px]"
                >
                  Trung tâm bảo hành chính hãng
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="block text-xs text-[#444444] leading-[22px]"
                >
                  Quy định về việc sao lưu dữ liệu
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="block text-xs text-[#D70018] leading-[22px]"
                >
                  Dịch vụ bảo hành điện thoại
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a
                  href=""
                  className="block text-xs text-[#444444] leading-[22px]"
                >
                  Quy chế hoạt động
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="block text-xs text-[#444444] leading-[22px]"
                >
                  Chính sách Bảo hành
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="block text-xs text-[#444444] leading-[22px]"
                >
                  Liên hệ hợp tác kinh doanh
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="block text-xs text-[#444444] leading-[22px]"
                >
                  Khách hàng doanh nghiệp (B2B)
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="block text-xs text-[#D70018] leading-[22px]"
                >
                  Ưu đãi thanh toán
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="block text-xs text-[#444444] leading-[22px]"
                >
                  Tuyển dụng
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#f8f8f8] flex items-stretch justify-between px-5">
          <div className="max-w-[290px] text-[#444444]">
            <a href="" className="text-[10px] leading-5">
              Điện thoại iPhone 13 -
            </a>
            <a href="" className="text-[10px] leading-5">
              Điện thoại iPhone 12 -
            </a>
            <a href="" className="text-[10px] leading-5">
              Điện thoại iPhone 11 -
            </a>
            <a href="" className="text-[10px] leading-5">
              Điện thoại iPhone 13 Pro Max -
            </a>
            <a href="" className="text-[10px] leading-5">
              Điện thoại iPhone 11 Pro Max
            </a>
            <a href="" className="text-[10px] leading-5">
              iPhone cũ giá rẻ -
            </a>
            <a href="" className="text-[10px] leading-5">
              iPhone 13 cũ -
            </a>
            <a href="" className="text-[10px] leading-5">
              iPhone 12 cũ -
            </a>
            <a href="" className="text-[10px] leading-5">
              iPhone 11 cũ
            </a>
          </div>
          <div className="max-w-[320px] text-[#444444]">
            <a href="" className="text-[10px] leading-5">
              Điện thoại iPhone -
            </a>
            <a href="" className="text-[10px] leading-5">
              Điện thoại Samsung -
            </a>
            <a href="" className="text-[10px] leading-5">
              Điện thoại Samsung A -
            </a>
            <a href="" className="text-[10px] leading-5">
              Điện thoại OPPO -
            </a>
            <a href="" className="text-[10px] leading-5">
              Điện thoại Xiaomi -
            </a>
            <a href="" className="text-[10px] leading-5">
              Điện thoại Vivo -
            </a>
            <a href="" className="text-[10px] leading-5">
              Điện thoại Nokia -
            </a>
            <a href="" className="text-[10px] leading-5">
              Samsung Fold 3 -
            </a>
            <a href="" className="text-[10px] leading-5">
              Samsung S22 -
            </a>
            <a href="" className="text-[10px] leading-5">
              Samsung A73 -
            </a>
            <a href="" className="text-[10px] leading-5">
              Samsung A53
            </a>
          </div>
          <div className="max-w-[270px] text-[#444444]">
            <a href="" className="text-[10px] leading-5">
              Laptop -
            </a>
            <a href="" className="text-[10px] leading-5">
              Laptop HP -
            </a>
            <a href="" className="text-[10px] leading-5">
              Laptop Dell -
            </a>
            <a href="" className="text-[10px] leading-5">
              Laptop Acer -
            </a>
            <a href="" className="text-[10px] leading-5">
              Microsoft Surface -
            </a>
            <a href="" className="text-[10px] leading-5">
              Laptop Lenovo -
            </a>
            <a href="" className="text-[10px] leading-5">
              Laptop Asus -
            </a>
            <a href="" className="text-[10px] leading-5">
              Máy tính để bàn -
            </a>
            <a href="" className="text-[10px] leading-5">
              Màn hình máy tính -
            </a>
            <a href="" className="text-[10px] leading-5">
              Camera -
            </a>
            <a href="" className="text-[10px] leading-5">
              Camera hành trình
            </a>
          </div>
        </div>
        <p className="bg-[#f8f8f8] text-[10px] leading-5 mt-4 text-[#00000080]">
          Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD:
          0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ: 350-352
          Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam.
          Điện thoại: 028.7108.9666.
        </p>
      </footer>
    </div>
  );
};

export default UserLayout;
