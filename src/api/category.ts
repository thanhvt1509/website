import instence from ".";
import { ICategory } from "../interfaces/category"

const token = JSON.parse(localStorage.getItem("user")!)?.accessToken;


export const getCategory = () => {
  return instence.get("/categories");
};
export const getOneCategory = (id: string) => {
  return instence.get(`/categories/${id}`);
};
export const addCategory = (category: ICategory) => {
  return instence.post(`/categories`, category, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
export const updateCategory = (id: string, category: ICategory) => {
  return instence.put(`/categories/${id}`, category, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
export const deleteCategory = (id: string) => {
  return instence.delete(`/categories/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
