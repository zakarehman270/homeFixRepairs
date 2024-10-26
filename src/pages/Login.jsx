import React from "react";
import { Alert, Button } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data", data);
  };

  const password = watch("password");
  return (
    <div className="d-flex outerWrapperSignUpFom">
      <div className="w-50 bg-white">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container">
              <div className="row g-2 px-5">
                <div className="col-12  mt-5 mb-2">
                  <h2 className="text-center">Welcome to</h2>
                  <h2 className="text-color text-center">HomeFixRepairs</h2>
                  <h2 className="mt-3">Login</h2>
                  <p>See you growth and get consulting support!</p>
                </div>
                <div className="col-md-12">
                  <label className="FormLabel">
                    Email<span className="text-danger">*</span>
                  </label>
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Invalid email address",
                      },
                    }}
                    render={({ field }) => (
                      <input className="form-control " {...field} />
                    )}
                  />
                  {errors.email && (
                    <Alert key={"danger"} variant={"danger"}>
                      <span>{errors.email.message}</span>
                    </Alert>
                  )}
                </div>
                <div className="col-md-12">
                  <label className="FormLabel">
                    Password<span className="text-danger">*</span>
                  </label>
                  <Controller
                    name="password"
                    control={control}
                    rules={{ required: "Password is required" }}
                    render={({ field }) => (
                      <input
                        className="form-control "
                        {...field}
                        type="password"
                      />
                    )}
                  />
                  {errors.password && (
                    <Alert key={"danger"} variant={"danger"}>
                      <span>{errors.password.message}</span>
                    </Alert>
                  )}
                </div>
                <div className="mt-3 w-100">
                  <Button className="SubmitButton w-100" type="submit">
                    Login
                  </Button>
                </div>
                <div className="mt-4">
                  <div className="d-flex justify-content-end gap-1">
                    <p className="AlreadyAccount">Not Register yet? </p>
                    <Link to={"/sign-up"}>Create Account</Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-50">
        <img
          src="/assets/images/handymanLogin.jpg"
          className="w-100 h-100"
          alt=""
        />
      </div>
    </div>
  );
};
export default Login;
