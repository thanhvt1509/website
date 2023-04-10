import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../../../interfaces/product"
import { getById } from "../../../api/product";

const ProductDetail = () => {
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const { id } = useParams();
  const fetchProduct = async () => {
    if (id) {
      const { data: { data } } = await getById(id)
      console.log(data);

      setProduct(data);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div>
      <div className="mb-10 shadow-md">
        <div className="max-w-[1220px] mx-auto">
          <h1 className="text-[#0A263C] py-2 text-lg leading-[29px]">
            {product.name}
          </h1>
        </div>
      </div>
      <div className="max-w-[1220px] mx-auto flex gap-x-[52px] mb-[66px]">
        <div>
          <img
            src={product.images?.[0]}
            alt=""
            className="mb-[42px] w-[358px] h-[358px] mx-auto"
          />
          <div className="flex item-center gap-x-[10px]">
            <div className="border border-[#D70018] rounded-lg text-center p-[1px] max-w-[60px] leading-[8px]">
              <img src="../../stars.svg" alt="" className="mb-[0px] mx-auto" />
              <span className="text-[#666666] text-[10px]">
                Tính năng nổi bật
              </span>
            </div>
            <div className="border border-[#D1D5DB] rounded-lg p-[2px]">
              <img
                src={product.images?.[0]}
                alt=""
                className="w-[48px] h-[48px] object-cover"
              />
            </div>
            <div className="border border-[#D1D5DB] rounded-lg p-[2px]">
              <img
                src={product.images?.[0]}
                alt=""
                className="w-[48px] h-[48px] object-cover"
              />
            </div>
            <div className="border border-[#D1D5DB] rounded-lg p-[2px]">
              <img
                src={product.images?.[0]}
                alt=""
                className="w-[48px] h-[48px] object-cover"
              />
            </div>
            <div className="border border-[#D1D5DB] rounded-lg p-[2px]">
              <img
                src={product.images?.[0]}
                alt=""
                className="w-[48px] h-[48px] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-baseline gap-x-4 mb-[28px]">
            <h2 className="text-[#D70018] leading-[22px] text-2xl">
              {product.price} ₫
            </h2>
            <span className="text-sm leading-[22px] text-[#707070]">
              {product.original_price} ₫
            </span>
          </div>
          <p className="text-[#444444] mb-auto text-[15px] leading-[22px] max-w-[880px]">
            Mô tả ngắn: {product.description_short}
          </p>
          <div className="flex items-center mt-auto gap-x-5">
            <button className="min-w-[233px] py-3 bg-[#FF3945] hover:bg-red-600 transition-all text-white rounded-md">
              Mua ngay
            </button>
            <div className="p-3 bg-white border w-[48px] rounded-md border-[#D70018]">
              <a href="">
                <img src="../../cart.svg" alt="" />
              </a>
            </div>
            <span className="text-sm leading-6 max-w-[68px]">
              Thêm vào giỏ hàng
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-[1220px] mx-auto">
        <div className="bg-[#F2F2F2] mb-4 rounded-md px-[23px] py-3">
          <h1 className="text-[#D70018] text-lg leading-[25px] text-center mb-[7px]">
            ĐẶC ĐIỂM NỔI BẬT
          </h1>

          {/* <p className="text-[#444444] text-sm leading-[22px] mb-[5px]">
            Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm
            biến chính lên đến 108 MP
          </p>
          <p className="text-[#444444] text-sm leading-[22px] mb-[5px]">
            Thưởng thức không gian giải trí cực đỉnh - Màn hình lớn 6.7 inch, độ
            phân giải Full HD+, 120Hz mượt mà
          </p>
          <p className="text-[#444444] text-sm leading-[22px] mb-[5px]">
            Cấu hình Galaxy A73 5G được nâng cấp mạnh với chip Snapdragon 778G,
            RAM lên đến 8 GB
          </p>
          <p className="text-[#444444] text-sm leading-[22px] mb-[5px]">
            Chiến game thoải mái không lo gián đoạn - Viên pin lớn 5000 mAh, hỗ
            trợ sạc nhanh 25 W
          </p> */}
        </div>
        {/* <p className="text-[#444444] text-[15px] leading-[22px] mb-7">
          Năm 2022 hứa hẹn sẽ là một năm rất đáng trông đợi đối với những ai là
          fan của thương hiệu điện thoại Samsung. Mới đây, hãng sẽ tiếp tục cho
          ra mắt nhiều smartphone với sự cải tiến trong thiết kế và cấu hình,
          trong đó phải kể đến chiếc Samsung Galaxy A73 với nhiều cải tiến so
          với thế hệ trước. Vậy sản phẩm có gì nổi bật, giá bao nhiêu và liệu có
          nên mua không? Tìm hiểu ngay nhé!
        </p> */}
        <div>
          {/* <h2 className="text-[#0A263C] leading-[25px] text-[21px] mb-[7px]">
            Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp
          </h2>
          <p className="text-[15px] text-[#444444] leading-[22px] mb-[30px]">
            Điện thoại cao cấp nhất dòng Galaxy A series sở hữu nhiều nâng cấp
            đáng giá so với thế hệ trước, từ ngoại hình cho đến hiệu năng, đặc
            biệt là hệ thống camera. Sau đây là những đánh giá chi tiết về chiếc
          </p>
          <h3 className="text-[#0A263C] leading-[21px] text-lg mb-[8px]">
            Thiết kế sang trọng, màn hình Super AMOLED
          </h3>
          <p className="text-[15px] text-[#444444] leading-[22px] mb-[10px]">
            Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan
            tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo
            nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng
            và tinh tế.
          </p>
          <p className="text-[15px] text-[#444444] leading-[22px] mb-[10px]">
            Samsung Galaxy A73 được thiết kế gọn nhẹ với tiêu chí đáp ứng khả
            năng mang theo để tiện đi lại cho người dùng. Giờ đây, bạn có thể
            mang theo chiếc smartphone bên cạnh đến bất cứ đâu, bất cứ lúc nào.
          </p>
          <p className="text-[15px] text-[#444444] leading-[22px] mb-[26px]">
            Kích thước và trọng lượng của chiếc điện thoại rất vừa phải và dĩ
            nhiên sẽ không chiếm quá nhiều diện tích trong túi xách và có thể di
            chuyển dễ dàng.
          </p> */}
          <div
            className="mb-6"
            dangerouslySetInnerHTML={{ __html: product.description_long }}
          ></div>
        </div>
        <div className="text-center mb-[222px]">
          <button className="py-[6px] px-[133px] border border-black rounded-xl text-sm leading-[22px]">
            Xem thêm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
