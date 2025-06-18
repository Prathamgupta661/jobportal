import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'
import { useFormik } from 'formik'
import { SignUpSchema } from '@/schemas/Signup'

const Signup = () => {

    const [input, setInput] = useState();
    const [apiError, setApiError] = useState("");

    const {handleBlur,handleChange,handleSubmit,touched,errors,values, setFieldValue}= useFormik({
        initialValues: {
            fullname: "",
            email: "",
            phoneNumber: "",
            password: "",
            role: "",
            file: ""
        },
        validationSchema:SignUpSchema,
        onSubmit: (values) => {
            submitHandler(values);
        },
    })

    const {loading,user} = useSelector(store=>store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = async (values) => {
        setApiError(""); // Reset error
        const formData = new FormData();
        formData.append("fullname", values.fullname);
        formData.append("email", values.email);
        formData.append("phoneNumber", values.phoneNumber);
        formData.append("password", values.password);
        formData.append("role", values.role);
        if (values.file) {
            formData.append("file", values.file);
        }

        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: { 'Content-Type': "multipart/form-data" },
                withCredentials: true,
                timeout: 10000 // 10 seconds timeout
            });
            if (res && res.data && res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            } else {
                setApiError("No response from server. Please try again later.");
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setApiError(error.response.data.message);
                toast.error(error.response.data.message);
            } else if (error.code === "ECONNABORTED") {
                setApiError("Request timed out. Please check your connection and try again.");
                toast.error("Request timed out. Please check your connection and try again.");
            } else {
                setApiError("No response from server. Please try again later.");
                toast.error("No response from server. Please try again later.");
            }
        } finally{
            dispatch(setLoading(false));
        }
    }

    useEffect(()=>{
        if(user){
            navigate("/");
        }
    },[user, navigate])

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center min-h-screen bg-gray-50 px-2 sm:px-4'>
                <form 
                    onSubmit={handleSubmit} 
                    className='w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-white border border-gray-200 rounded-md p-4 sm:p-8 my-10 shadow-md'
                >
                    <h1 className='font-bold text-2xl mb-5 text-center'>Sign Up</h1>
                    {apiError && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative text-center mb-2">
                            {apiError}
                        </div>
                    )}
                    <div className='my-2'>
                        <Label>Full Name</Label>
                        <Input
                            type="text"
                            value={values.fullname}
                            name="fullname"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="patel"
                            required
                        />
                        {touched.fullname && errors.fullname && (
                            <p className="text-red-500">{errors.fullname}</p>
                        )}
                    </div>
                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={values.email}
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="patel@gmail.com"
                            required
                        />
                        {touched.email && errors.email && (
                            <p className="text-red-500">{errors.email}</p>
                        )}
                    </div>
                    <div className='my-2'>
                        <Label>Phone Number</Label>
                        <Input
                            type="text"
                            value={values.phoneNumber}
                            name="phoneNumber"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="8080808080"
                            required
                        />
                        {touched.phoneNumber && errors.phoneNumber && (
                            <p className="text-red-500">{errors.phoneNumber}</p>
                        )}
                    </div>
                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            value={values.password}
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Your password"
                            required
                        />
                        {touched.password && errors.password && (
                            <p className="text-red-500">{errors.password}</p>
                        )}
                    </div>
                    <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
                        <RadioGroup className="flex flex-row items-center gap-4 my-2">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={values.role === 'student'}
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
                                    checked={values.role === 'recruiter'}
                                    onChange={handleChange}
                                    className="cursor-pointer"
                                    required
                                />
                                <Label htmlFor="r2">Recruiter</Label>
                            </div>
                        </RadioGroup>
                        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2'>
                            <Label>Profile</Label>
                            <Input
                                accept="image/*"
                                type="file"
                                name="file"
                                onChange={e => setFieldValue("file", e.currentTarget.files[0])}
                                className="cursor-pointer"
                            />
                        </div>
                    </div>
                    {
                        loading ? 
                        <Button className="w-full my-4" disabled> 
                            <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait 
                        </Button> 
                        : 
                        <Button type="submit" className="w-full my-4">Signup</Button>
                    }
                    <span className='text-sm block text-center'>Already have an account? <Link to="/login" className='text-blue-600'>Login</Link></span>
                </form>
            </div>
        </div>
    )
}
export default Signup;