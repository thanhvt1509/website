import { useEffect, useState } from "react"
import { ICategory, IProduct, IUser } from "../../models"
import { deleteProducts, getAll } from "../../api/product"
import { Link, useNavigate } from "react-router-dom"
import { deleteCategory, getCategory, getOneCategory } from "../../api/category"
const CategoryFetch = () => {
    const [category, setCategory] = useState<ICategory[]>([])
    const navigate = useNavigate();

    const fetchCategory = async () => {
        const { data } = await getCategory();
        setCategory(data)
    }
    const removeCategory = async (id: string) => {
        const isConfirm = confirm('Are you sure you want to remove');
        if (isConfirm) {
            await deleteCategory(id)
            setCategory(category.filter(category => category._id != id))
            // console.log(id);

            alert('Xoa thanh cong');
            // navigate(-1)
        } ``
    }
    useEffect(() => {
        fetchCategory()
    }, [])
    return <div className="h-full grow pl-5 py-5 bg-[#F1F3F4]">
        <Link to="/admin">Trở về</Link>
        <div className="flex justify-between w-full">
            <h1 className="text-2xl text-[#5F5E61] font-bold">Category</h1>
            <Link to={`/admin/addCategory`}><svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-14 text-[#00B0D7] mt-8 mr-8 cursor-pointer" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 176v160M336 256H176" /></svg></Link>
        </div>
        <div className="flex">
            <h3 className="text-lg text-[#5F5E61] font-semibold">Bộ lọc</h3>
            <div className="flex flex-col ml-10">
                <p className="text-sm mb-2">Danh mục sản phẩm</p>
                <select className="w-[352px] border-1 border-[#ccc] p-2" defaultValue="">
                    <option value="">All</option>
                    {category && category.map((cate, index) =>
                        <option key={index} value={cate._id} className="p-2">{cate.name}</option>
                    )}
                </select>
            </div>
        </div>
        <div className="overflow-x-auto mt-4">
            <table className="min-w-full divide-y-2 divide-gray-300 text-sm">
                <thead>
                    <tr>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            #
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Tên sản phẩm
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            colSpan={2}>
                            Thao tác
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                    {category.map((category, index) =>
                        <tr key={index}>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {index + 1}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{category.name}</td>

                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[65px]"><button onClick={() => removeCategory(category._id)} className="py-2 px-3 bg-red-400">xóa</button></td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[65px]"><button className="py-2 px-3 bg-yellow-300"><Link to={`/admin/editCategory/${category._id}`}>Sửa</Link></button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>


    </div>
}

export default CategoryFetch