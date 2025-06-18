import React, { useState, useEffect } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";
import {useFormik} from 'formik'
import { LoginSchema } from "@/schemas/login";



const Login = () => {

  const {handleSubmit,handleChange,handleBlur,values,errors,touched}=useFormik({
    initialValues:{
      email: "",
    password: "",
    role: "",
    },
    validationSchema: LoginSchema,

    onSubmit: (values) => {
      submitHandler(values);
    },
  });
  const { loading, user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const submitHandler = async (input) => {
    try {
      dispatch(setLoading(true));
      const res = await axios.post(
        `${USER_API_END_POINT}/login`,
        input,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-50 px-2 sm:px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-white border border-gray-200 rounded-md p-4 sm:p-8 my-10 shadow-md"
        >
          <h1 className="font-bold text-2xl mb-5 text-center">Login</h1>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={values.email}
              name="email"
              onChange={handleChange}
              placeholder="patel@gmail.com"
              onBlur={handleBlur}
              required
            />
            {touched.email && errors.email && (
            <p className="text-red-500">{errors.email}</p>
          )}
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              value={values.password}
              name="password"
              onChange={handleChange}
              placeholder="Your password"
              onblur={handleBlur}
            />
            {touched.password && errors.password && (
            <p className="text-red-500">{errors.password}</p>
          )}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <RadioGroup className="flex flex-row items-center gap-4 my-2">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={values.role === "student"}
                  onChange={handleChange}
                  className="cursor-pointer"
                  required
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={values.role === "recruiter"}
                  onChange={handleChange}
                  className="cursor-pointer"
                  required
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          {loading ? (
            <Button className="w-full my-4" disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
            </Button>
          ) : (
            <Button type="submit" className="w-full my-4">
              Login
            </Button>
          )}
          <span className="text-sm block text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600">
              Signup
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;