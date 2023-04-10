import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";

import { signup } from "../api/auth";
import { SignupForm, signupSchema } from "../models/user";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: yupResolver(signupSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: SignupForm) => {
    try {
      const response = await signup(data);
      console.log(response);
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <form
        action=""
        className="flex items-center justify-between p-[55px] bg-white rounded-2xl shadow-xl min-w-[800px] min-h-[570px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <div className="mb-4">
            <label htmlFor="" className="block mb-2 text-lg text-[#444]">
              Name
            </label>
            <input
              {...register("name")}
              type="text"
              className="px-3 py-2 border border-gray-200 rounded-md outline-none min-w-[410px]"
            />
            <p className="text-xs text-red-500">
              {errors.name && errors.name.message}
            </p>
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block mb-2 text-lg text-[#444]">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              className="px-3 py-2 border border-gray-200 rounded-md outline-none min-w-[410px]"
            />
            <p className="text-xs text-red-500">
              {errors.email && errors.email.message}
            </p>
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block mb-2 text-lg text-[#444]">
              Số điện thoại
            </label>
            <input
              {...register("phoneNumber")}
              type="number"
              className="px-3 py-2 border border-gray-200 rounded-md outline-none min-w-[410px]"
            />
            <p className="text-xs text-red-500">
              {errors.phoneNumber && errors.phoneNumber.message}
            </p>
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block mb-2 text-lg text-[#444]">
              Mật khẩu
            </label>
            <input
              {...register("password")}
              type="password"
              className="px-3 py-2 border border-gray-200 rounded-md outline-none min-w-[410px]"
            />
            <p className="text-xs text-red-500">
              {errors.password && errors.password.message}
            </p>
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block mb-2 text-lg text-[#444]">
              Xác nhận lại mật khẩu
            </label>
            <input
              {...register("confirmPassword")}
              type="password"
              className="px-3 py-2 border border-gray-200 rounded-md outline-none min-w-[410px]"
            />
            <p className="text-xs text-red-500">
              {errors.confirmPassword && errors.confirmPassword.message}
            </p>
          </div>
          <button className="min-w-[410px] bg-[#FF424E] text-white rounded-md py-3 mb-[24px]">
            Đăng ký
          </button>
          <p className="mb-6 text-center">
            Bạn đã có tài khoản?{" "}
            <Link to="/signin" className="text-blue-900 underline">
              Đăng nhập
            </Link>
          </p>
          <div>
            <p className="text-lg leading-4 text-[#444] text-center mb-4">
              Hoặc đăng ký bằng
            </p>
            <div className="flex items-center justify-center gap-x-5">
              <Link to="">
                <img src="fb.png" alt="" />
              </Link>
              <Link to="">
                <img src="google.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img src="logo.png" className="w-[185px] h-[162px]" alt="" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
