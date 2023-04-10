import React from "react";
import BreadCrumb from "../../components/layout/user/BreadCrumb";
import ProductDetail from "../../components/layout/user/ProductDetail";

const DetailProduct = () => {
  return (
    <div className="">
      <div>
        <BreadCrumb></BreadCrumb>
      </div>
      <div>
        <ProductDetail></ProductDetail>
      </div>
    </div>
  );
};

export default DetailProduct;
