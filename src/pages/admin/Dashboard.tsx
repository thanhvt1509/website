import { Link } from "react-router-dom";
// import SidebarMenu from "../components/SidebarMenu";
import { deleteProducts, getAll } from "../../api/product";
import { useEffect, useState } from "react";
import { IProduct } from "../../interfaces/product";
import { getCategory } from "../../api/category";

const Dashboard = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [category, setCategory] = useState<IProduct[]>([]);
  // console.log(category);

  // console.log(products);

  const fetchProducts = async () => {
    try {
      const { data } = await getAll();
      // console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchCategory = async () => {
    try {
      const { data } = await getCategory();
      // console.log(data);
      setCategory(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteProduct = (id: string | number) => {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm")) {
      deleteProducts(id);
      setProducts(products.filter(product => product._id != id))
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategory();
  }, []);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex flex-wrap items-center justify-between pb-4 bg-white dark:bg-gray-900">
        <div>
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>
        <Link to={"/admin/addProduct"}>
          <button className="p-3 font-medium text-white transition-all bg-indigo-500 rounded-md shadow-lg hover:bg-indigo-600 shadow-indigo-500/50">
            Add product
          </button>
        </Link>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Images
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Original Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {product.name}
              </th>
              <td className="px-6 py-4">
                <img src={product?.images[0]} className="w-28" alt="" />
              </td>
              <td className="px-6 py-4">
                {category.map((value) => {
                  return value._id == product.categoryId ? value.name : "";
                })}
              </td>
              <td className="px-6 py-4">{product.price} ₫</td>
              <td className="px-6 py-4">{product.original_price} ₫</td>
              <td className="px-6 py-4">
                <Link
                  to={`/admin/editProduct/${product._id}`}
                  className="px-4 py-2 font-medium text-white rounded-md bg-cyan-500 shadow-cyan-500/50"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDeleteProduct(product._id)}
                  className="px-3 py-[6.5px] ml-3 font-medium text-white bg-red-500 rounded-md shadow-red-500/50"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
