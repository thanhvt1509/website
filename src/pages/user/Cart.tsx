import React from "react";

const Cart = () => {
  return (
    <div className="max-w-[600px] mx-auto mb-24 mt-8">
      <div className="flex items-baseline mb-8">
        <div>
          <i className="fas fa-chevron-left"></i>
          <a href="" className="leading-6 ml-2 text-[#D70018]">
            Trở về
          </a>
        </div>
        <span className="text-lg leading-7 text-center mx-auto text-[#D70018]">
          Giỏ hàng
        </span>
      </div>
      <div className="relative mb-9">
        <div className="p-[10px] shadow-lg rounded-xl flex">
          <i className="absolute top-0 text-2xl cursor-pointer right-3 fas fa-times"></i>
          <img src="samsungA73.png" alt="" className="w-[193px] h-[193px]" />
          <div>
            <h4 className="text-[#0E2431] leading-[22px] text-[15px]">
              Samsung Galaxy S22 - Đen
            </h4>
            <div className="flex items-center mb-3 gap-x-2">
              <span className="text-[15px] leading-[22px] text-[#D70018]">
                16.090.000 ₫
              </span>
              <span className="text-sm leading-[22px] text-[#777777]">
                21.990.000 ₫
              </span>
              <div className="px-1 bg-[#D70018] rounded-md max-w-[67px] text-center">
                <span className="text-xs text-white leading-[18px]">
                  Giảm 27%
                </span>
              </div>
            </div>
            <div className="flex items-center mb-3 gap-x-2">
              <span>Chọn số lượng:</span>
              <div>
                <label htmlFor="Quantity" className="sr-only">
                  {" "}
                  Quantity{" "}
                </label>

                <div className="flex items-center border border-gray-200 rounded">
                  <button
                    type="button"
                    className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                  >
                    &minus;
                  </button>

                  <span>
                    <input
                      type="number"
                      id="Quantity"
                      value="1"
                      className="h-10 w-16 border-y-0 border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </span>

                  <button
                    type="button"
                    className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#F6F6F6] rounded-xl p-3 ">
              <h4 className="text-[#383D41]">- Chương trình khuyến mại:</h4>
              <p className="text-[15px] mb-1">
                Dịch vụ phòng chờ hạng thương gia tại sân bay
              </p>
              <p className="text-[15px]">
                Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing
                MP3, Phúc Long, Galaxy Play)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[#0E2431] leading-6">Tổng tiền tạm tính:</span>
          <span className="text-[#D70018] leading-6">17.820.000 ₫</span>
        </div>
        <button className="leading-6 text-white uppercase mb-3 bg-[#D70018] w-full py-[18px] rounded-md hover:bg-[#DC3545] transition-all">
          Tiến hành đặt hàng
        </button>
        <button className="leading-6 text-[#DC3545] border border-[#DC3545] uppercase bg-white w-full py-[18px] rounded-md transition-all">
          Chọn thêm sản phẩm khác
        </button>
      </div>
    </div>
  );
};

export default Cart;
