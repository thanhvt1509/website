import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getAll, getById, updateProduct } from "../../api/product";
import { useParams, useNavigate, Link } from "react-router-dom";
import { updateForm, updateSchema } from "../../models/product";
import { ICategory } from "../../interfaces/category";
import { IProduct } from "../../interfaces/product";
import { getCategory } from "../../api/category";

const Edit = () => {
  const [category, setCategory] = useState<ICategory[]>([]);
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  console.log(product);

  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<updateForm>({
    resolver: yupResolver(updateSchema),
    defaultValues: async () => {
      if (id) {
        return await fetchProductById(id);
      }
    },
  });
  // const fetchProduct = async (id) => {
  //   try {
  //     const { data } = await getById(id);
  //     // console.log(data);
  //     setProduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const fetchCategory = async () => {
    try {
      const { data } = await getCategory();
      setCategory(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCategory();
  }, []);
  const onHandleSubmit = async (data: updateForm) => {
    try {
      if (id) {
        const response = await updateProduct(id, data);
        console.log(response);
        navigate("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchProductById = async (id: string | number) => {
    const {
      data: { data: product },
    } = await getById(id);
    setProduct(product);
    return product;
  };
  useEffect(() => {
    if (id) {
      fetchProductById(id);
    }
  }, []);
  return (
    <div className="flex">
      <div className="w-full p-7">
        <h1 className="leading-[30px] mb-4 text-xl text-[#5F5E61] font-semibold">
          Cập nhật Sản phẩm
        </h1>
        <form action="" className="" onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="flex gap-x-[35px]">
            <div>
              <div className="flex items-center justify-center w-[500px] mb-5">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 rounded-lg shadow-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <img src={product?.images} className="w-[150px]" alt="" />
                    <p className="mt-3 text-gray-400">Sửa ảnh</p>
                  </div>
                  <input
                    {...register("images")}
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                  />
                  <p className="text-xs text-red-500">
                    {errors.images && errors.images.message}
                  </p>
                </label>
              </div>
              <textarea
                {...register("description_short")}
                className="w-full h-24 shadow-md rounded-md outline-none p-4 text-[13px] text-[#5A6169] resize-none border-none"
                placeholder="Mô tả ngắn..."
              ></textarea>
              <p className="text-xs text-red-500">
                {errors.description_short && errors.description_short.message}
              </p>
            </div>
            <div className="w-full">
              <h1 className="text-[#3D5170] font-medium mb-4 px-4 shadow-md leading-6 pb-4">
                Thông tin sản phẩm
              </h1>
              <div className="mb-4">
                <label
                  htmlFor=""
                  className="text-[13px] leading-5 text-[#5A6169] block mb-2"
                >
                  Tên sản phẩm
                </label>
                <input
                  {...register("name")}
                  type="text"
                  className="px-3 py-2 w-full text-sm text-[#444444] leading-5 border border-gray-200 rounded-md outline-none"
                />
                <p className="text-xs text-red-500">
                  {errors.name && errors.name.message}
                </p>
              </div>
              <div className="flex gap-x-2">
                <div className="w-2/4 mb-4">
                  <label
                    htmlFor=""
                    className="text-[13px] leading-5 text-[#5A6169] block mb-2"
                  >
                    Giá gốc
                  </label>
                  <input
                    {...register("original_price")}
                    type="number"
                    className="px-3 py-2 w-full text-sm text-[#444444] leading-5 border border-gray-200 rounded-md outline-none"
                  />
                  <p className="text-xs text-red-500">
                    {errors.original_price && errors.original_price.message}
                  </p>
                </div>
                <div className="w-2/4 mb-4">
                  <label
                    htmlFor=""
                    className="text-[13px] leading-5 text-[#5A6169] block mb-2"
                  >
                    Giá khuyến mãi
                  </label>
                  <input
                    {...register("price")}
                    type="number"
                    className="px-3 py-2 w-full text-sm text-[#444444] leading-5 border border-gray-200 rounded-md outline-none"
                  />
                  <p className="text-xs text-red-500">
                    {errors.price && errors.price.message}
                  </p>
                </div>
              </div>
              <div className="flex gap-x-2">
                <div className="w-2/4 mb-4">
                  <label
                    htmlFor=""
                    className="text-[13px] leading-5 text-[#5A6169] block mb-2"
                  >
                    Danh mục
                  </label>
                  <select
                    className="w-full p-2 text-sm bg-transparent border-gray-200 rounded-md border-1"
                    {...register("categoryId")}
                    value={product?.categoryId?._id}
                  >
                    {category &&
                      category.map((cate) => (
                        <option key={cate._id} value={cate?._id}>
                          {cate.name}
                        </option>
                      ))}
                  </select>
                  <p className="text-xs text-red-500">
                    {errors.categoryId && errors.categoryId.message}
                  </p>
                </div>
                <div className="w-2/4 mb-4">
                  <label
                    htmlFor=""
                    className="text-[13px] leading-5 text-[#5A6169] block mb-2"
                  >
                    Thương hiệu
                  </label>
                  <input
                    {...register("brand")}
                    type="text"
                    className="px-3 py-2 w-full text-sm text-[#444444] leading-5 border border-gray-200 rounded-md outline-none"
                  />
                  <p className="text-xs text-red-500">
                    {errors.brand && errors.brand.message}
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor=""
                  className="text-[13px] leading-5 text-[#5A6169] block mb-2"
                >
                  Đặc điểm nổi bật
                </label>
                <textarea
                  {...register("description_special")}
                  className="p-3 w-full text-sm text-[#444444] resize-none h-32 leading-5 border border-gray-200 rounded-md outline-none"
                />
                <p className="text-xs text-red-500">
                  {errors.description_special &&
                    errors.description_special.message}
                </p>
              </div>
              <div className="mb-4">
                <label
                  htmlFor=""
                  className="text-[13px] leading-5 text-[#5A6169] block mb-2"
                >
                  Mô tả dài
                </label>
                <textarea
                  {...register("description_long")}
                  className="p-3 w-full text-sm text-[#444444] resize-none h-32 leading-5 border border-gray-200 rounded-md outline-none"
                />
                <p className="text-xs text-red-500">
                  {errors.description_long && errors.description_long.message}
                </p>
              </div>
              <button className="bg-[#00B0D7] hover:bg-[#007BFF] transition-all text-white text-xs leading-[14px] px-[13px] py-[10px] rounded-md">
                Sửa lại
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;