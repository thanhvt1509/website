import * as Yup from "yup";

export const addSchema = Yup.object({
  name: Yup.string().required("Trường name là bắt buộc"),
  price: Yup.number()
    .min(1, "Giá phải lớn hơn 0")
    .required("Trường giá là bắt buộc"),
  original_price: Yup.number()
    .min(1, "Giá gốc phải lớn hơn 0")
    .required("Trường giá gốc là bắt buộc"),
  description_short: Yup.string().required("Trường mô tả ngắn là bắt buộc"),
  description_long: Yup.string().required("Trường mô tả dài là bắt buộc"),
  description_special: Yup.string().required(
    "Trường mô tả đặc biệt là bắt buộc"
  ),
  images: Yup.string().required("Trường ảnh là bắt buộc"),
  categoryId: Yup.string().required("Trường loại là bắt buộc"),
});

export type addForm = Yup.InferType<typeof addSchema>;

export const updateSchema = Yup.object({
  name: Yup.string().required("Trường name là bắt buộc"),
  price: Yup.number()
    .min(1, "Giá phải lớn hơn 0")
    .required("Trường giá là bắt buộc"),
  original_price: Yup.number()
    .min(1, "Giá gốc phải lớn hơn 0")
    .required("Trường giá gốc là bắt buộc"),
  description_short: Yup.string().required("Trường mô tả ngắn là bắt buộc"),
  description_long: Yup.string().required("Trường mô tả dài là bắt buộc"),
  description_special: Yup.string().required(
    "Trường mô tả đặc biệt là bắt buộc"
  ),
});

export type updateForm = Yup.InferType<typeof updateSchema>;
