import * as Yup from 'yup';

export const LoginSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(20, 'Password must be at most 20 characters')
        .required('Password is required'),
})