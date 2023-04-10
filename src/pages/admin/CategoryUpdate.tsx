import { useEffect, useState } from "react"
import { ICategory, IProduct, IUser, addCategorySchema, addProductSchema, formAdd, updateSchema } from "../../models"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { addProduct } from "../../api/product"
import { useNavigate, useParams } from "react-router-dom"
import { addCategory, getCategory, getOneCategory, updateCategory } from "../../api/category"
const CategoryUpdate = ({ }) => {
    const [category, setCategory] = useState<ICategory>({} as ICategory)
    const { id } = useParams()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ICategory>({
        resolver: yupResolver(addCategorySchema),
        defaultValues: async () => {
            if (id) {
                return await fetchOneCategory(id)
            }
        }
    })
    const onSubmitForm = async (category: ICategory) => {

        try {
            if (id) {
                await updateCategory(id, category)
                navigate("/admin/category")
            }
        } catch (error) {
            console.log(error);
        }
        navigate("/admin/category")

    }
    const fetchOneCategory = async (id: string) => {
        if (id) {
            const { data: { category } } = await getOneCategory(id)
            setCategory(category)
            return category
        }
    }
    useEffect(() => {
    }, [])
    return <form onSubmit={handleSubmit(onSubmitForm)} className="grow p-5 bg-[#F1F3F4] flex">
        <div className="w-[40%]">
            <h1 className="text-2xl text-[#5F5E61] font-bold">Cập nhật thể loại</h1>
        </div>
        <div className="w-[60%]">
            <section className="bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="rounded-lg bg-transparent p-8 shadow-md lg:col-span-3 lg:p-12 w-[650px]">
                            <h1 className="text-2xl text-[#5F5E61] font-semibold mb-8">Thông tin thể loại</h1>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[12px]">Tên thể loại</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 border-1 p-3 text-sm bg-transparent"
                                        placeholder="Tên sản phẩm"
                                        {...register("name", { required: true })}
                                    />
                                    <p className="text-red-600">
                                        {errors.name && errors.name.message}
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <button
                                        className="inline-block w-full rounded-lg bg-yellow-600 px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Sửa thể loại
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    </form >
}

export default CategoryUpdate