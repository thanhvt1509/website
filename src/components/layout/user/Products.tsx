import { Link } from "react-router-dom";
import { IProduct } from "../../../interfaces/product";

type Props = {
  data: IProduct;
};

const Product = ({ data }: Props) => {
  return (
    <Link
      to={`product/${data._id}`}
      className="flex flex-col p-5 mb-16 shadow-lg"
    >
      <img
        alt=""
        src={data?.images[0]}
        className="object-cover w-[200px] h-[200px] mx-auto mb-3"
      />
      <h3 className="mb-4 text-lg font-semibold">{data.name}</h3>
      <div className="mt-auto">
        <div className="flex mb-2 gap-x-4">
          <span className="text-[#D70018] text-lg font-medium leading-[18px]">
            {data.price} ₫
          </span>
          <del className="text-[#707070] leading-5">
            {data.original_price} ₫
          </del>
        </div>
        <div className="flex items-baseline gap-x-1">
          <div className="">
            <img src="star.png" alt="" className="inline shrink-0" />
            <img src="star.png" alt="" className="inline shrink-0" />
            <img src="star.png" alt="" className="inline shrink-0" />
            <img src="star.png" alt="" className="inline shrink-0" />
            <img src="star.png" alt="" className="inline shrink-0" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
