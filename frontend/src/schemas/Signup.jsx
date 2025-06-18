import * as Yup from 'yup';

export const SignUpSchema = Yup.object({
    fullname: Yup.string().min(2, 'Name must be at least 2 characters')
        .max(50, 'Name must be at most 50 characters')
        .required('Name is required').notOneOf(['admin', 'root','1','0','2','3','4','5','6','7','8',9], 'Enter a valid name'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(20, 'Password must be at most 20 characters')
        .required('Password is required'),
    
    phoneNumber: Yup.string()
        .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
        .required('Phone number is required'),

})