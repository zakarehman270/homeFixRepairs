import React from "react";
import { Alert, Button } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../redux/api";
import LoadingButton from "../components/LoadingButton";
import { toast } from "react-toastify";
const SignUp = () => {
  const navigate = useNavigate();
  const [SignUp, ResponseData, error] = useSignUpMutation();
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    new Promise((resolve, reject) => {
      SignUp({
        first_name: data?.firstName,
        last_name: data?.lastName,
        phone: data?.phone,
        email: data.email,
        password: data?.password,
      }).unwrap()
        .then((responseData) => {
          resolve(responseData);
        })
        .catch((error) => {
          reject(error);
        });
    })
      .then((response) => {
        if(response?.message){
          toast.success(response?.message)
          navigate("/login");
        }
      })
      .catch((error) => {
        toast.error(error.data.error?.message);
      });
  };
  const password = watch("password");
  return (
    <div className="d-flex outerWrapperSignUpFom">
      <div className="w-50 bg-white">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container">
              <div className="row g-2 px-5">
                <div className="col-12  mt-3 mb-2">
                  <h2>Signup</h2>
                  <p>
                    Please provide all required information to register your
                    business width us
                  </p>
                </div>
                <div className="col-md-6">
                  <label className="FormLabel">
                    First Name<span className="text-danger">*</span>
                  </label>
                  <Controller
                    name="firstName"
                    control={control}
                    rules={{ required: "First name is required" }}
                    render={({ field }) => (
                      <input className="form-control " {...field} />
                    )}
                  />
                  {errors.firstName && (
                    <Alert key={"danger"} variant={"danger"}>
                      <span>{errors.firstName.message}</span>
                    </Alert>
                  )}
                </div>
                <div className="col-md-6">
                  <label className="FormLabel">
                    Last Name<span className="text-danger">*</span>
                  </label>
                  <Controller
                    name="lastName"
                    control={control}
                    rules={{ required: "Last name is required" }}
                    render={({ field }) => (
                      <input className="form-control " {...field} />
                    )}
                  />
                  {errors.lastName && (
                    <Alert key={"danger"} variant={"danger"}>
                      <span>{errors.lastName.message}</span>
                    </Alert>
                  )}
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
                    Phone<span className="text-danger">*</span>
                  </label>
                  <Controller
                    name="phone"
                    control={control}
                    rules={{
                      required: "Phone number is required",
                      pattern: {
                        value: /^\+?[1-9]\d{0,2}[\s\(\)\-\d]*$/,
                        message: "Please enter a valid phone number",
                      },
                    }}
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <input className="form-control" {...field} />
                        {error && (
                          <span className="text-danger">{error.message}</span>
                        )}
                      </>
                    )}
                  />
                </div>
                <div className="col-md-6">
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
                <div className="col-md-6">
                  <label className="FormLabel">
                    Confirm Password<span className="text-danger">*</span>
                  </label>
                  <Controller
                    name="confirmPassword"
                    control={control}
                    rules={{
                      required: "Confirm password is required",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    }}
                    render={({ field }) => (
                      <input
                        className="form-control "
                        {...field}
                        type="password"
                      />
                    )}
                  />
                  {errors.confirmPassword && (
                    <Alert key={"danger"} variant={"danger"}>
                      <span>{errors.confirmPassword.message}</span>
                    </Alert>
                  )}
                </div>
                <div className="mt-3 w-100">
                  {ResponseData?.isLoading ? (
                    <LoadingButton />
                  ) : (
                    <Button className="SubmitButton w-100" type="submit">
                      Register
                    </Button>
                  )}
                </div>

                <div className="mt-2">
                  <div className="d-flex justify-content-end gap-1">
                    <p className="AlreadyAccount">Already have an account? </p>
                    <Link to={"/login"}>Login</Link>
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

export default SignUp;
