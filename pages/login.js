import AppLayout from "../components/layout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

import { ToastContainer, toast } from 'react-toastify';


const LoginPage = () => {
  const router = useRouter();

  const ValidationSchema = Yup.object({
    email: Yup.string().required("ป้อนอีเมลด้วย").email("รูปแบบไม่ถูกต้อง"),
    password: Yup.string()
      .required("ป้อนรหัสผ่านด้วย")
      .min(3, "รหัสผ่านอย่างน้อย 3 ตัวขึ้นไป"),
  }).required("ป้อนข้อมูลให้ครบ");

  const { register,handleSubmit,formState: { errors },} = useForm({
    resolver: yupResolver(ValidationSchema),
    mode: "all",
  });

  const onSubmit = async (data) => {
    const { email, password } = data;
    const result = await signIn('credentials', { redirect: false, email, password });
    if(result.error){
        toast.error(result.error);
    }else{
        toast.success("เข้าระบบสำเร็จ");
        setTimeout(function() {
            router.replace("/dashboard");
        }, 3000);
    }
    // console.log(result);
    return false;
  }



  return (
    <div>
    <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Login!</h1>
                    </div>
                    <form className="user" onSubmit={handleSubmit(onSubmit)} noValidate>
                      <div className="form-group">
                        <input
                          {...register("email")}
                          type="email"
                          className={`form-control form-control-user ${errors.email ? 'is-invalid': ''}`}
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                        />
                        <div className="invalid-feedback">
                          {errors.email?.message}
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          {...register("password")}
                          type="password"
                          className={`form-control form-control-user ${errors.password ? 'is-invalid': ''}`}
                          id="exampleInputPassword"
                          placeholder="Password"
                        />
                        <div className="invalid-feedback">
                          {errors.password?.message}
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <button
                        className="btn btn-primary btn-user btn-block"
                      >
                        Login
                      </button>
                      <hr />
                      <a
                        href="index.html"
                        className="btn btn-google btn-user btn-block"
                      >
                        <i className="fab fa-google fa-fw" /> Login with Google
                      </a>
                      <a
                        href="index.html"
                        className="btn btn-facebook btn-user btn-block"
                      >
                        <i className="fab fa-facebook-f fa-fw" /> Login with
                        Facebook
                      </a>
                    </form>
                    <hr />
                    <div className="text-center">
                      <a className="small" href="forgot-password.html">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="small" href="register.html">
                        Create an Account!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LoginPage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export default LoginPage;
