//REACT
import { useEffect } from 'react';
//REACT-ROUTER-DOM
import { useNavigate, Link } from 'react-router-dom';
//FORMIK & YUP
import { Formik, Form, Field, ErrorMessage, FormikHelpers, FormikProps } from 'formik';
import * as Yup from 'yup';
//REACT-LOADER-SPINNER
import { RotatingLines } from 'react-loader-spinner';
//ALERTS
import { errorAlert } from '../alerts';
//AWS-AMPLIFY
import { signIn } from 'aws-amplify/auth';
import { fetchAuthSession } from 'aws-amplify/auth';


interface FormValues {
    email: string;
    password: string;
}


export default function Login(): JSX.Element {
    const navigate = useNavigate();


    const initialValues: FormValues = {
        email: "",
        password: ""
    }


    const validationSchema = Yup.object().shape({
        email: Yup
            .string()
            .email('Must be a valid email')
            .required('Email is required'),
        password: Yup
            .string()
            .required('Password is required')
    });


    const onSubmit = async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
        setSubmitting(true);

        try {
            await signIn({
                username: values.email,
                password: values.password
            });
            console.log('successfully login');
            const session = await getCurrentSession();
            if (typeof window !== 'undefined') {
                localStorage.setItem("accessToken", JSON.stringify(session?.accessToken));
            }
            navigate("/");
        }
        catch (error: any) {
            console.log('error login', error);
            errorAlert(error);
        }

        setSubmitting(false);
    }


    const accessToken = JSON.parse(localStorage.getItem("accessToken") || 'null');


    useEffect(() => {
        if (accessToken) {
            navigate("/");
        }
    }, []);


    if (accessToken) return <></>;


    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <div className="mx-auto bg-white shadow-md rounded-md p-6">
                <div className="text-center font-bold text-3xl sm:text-5xl mb-6 text-black"> Login </div>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {({ isSubmitting }: FormikProps<FormValues>) => (
                        <Form autoComplete="off" className="bg-black shadow-md rounded-md p-3 sm:p-6 flex justify-center flex-col">
                            <div className="mb-2 sm:mb-4">
                                <label htmlFor="username" className="block text-white font-medium mb-1 sm:mb-2 text-xs sm:text-sm">
                                    Email
                                </label>
                                <Field
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="w-full px-2 py-1 sm:px-3 sm:py-2 rounded-md border border-gray-400 text-xs sm:text-sm text-black"
                                    placeholder="Enter your email"
                                    disabled={isSubmitting}
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-xs sm:text-sm mt-1" />
                            </div>
                            <div className="mb-2 sm:mb-4">
                                <label htmlFor="password" className="block text-white font-medium mb-1 sm:mb-2 text-xs sm:text-sm">
                                    Password
                                </label>
                                <Field
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="w-full px-2 py-1 sm:px-3 sm:py-2 rounded-md border border-gray-400 text-xs sm:text-sm text-black"
                                    placeholder="Enter your password"
                                    disabled={isSubmitting}
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-xs sm:text-sm mt-1" />
                            </div>
                            <button
                                type="submit"
                                className="bg-green-500 text-white font-medium py-1 px-2 sm:py-2 sm:px-4 rounded-md w-full flex items-center justify-center transition-all duration-200 hover:shadow-lg text-xs sm:text-sm mt-1"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? <RotatingLines visible={true} width="20" strokeWidth="3" animationDuration="0.75" strokeColor="#eee" /> : `Log in`}
                            </button>
                            <Link to="/signup" className="m-auto text-gray-300 text-xs sm:text-sm mt-4 sm:mt-6"> Don't have an account? </Link>
                            <Link to="/forgot-password" className="m-auto text-gray-300 text-xs sm:text-sm mt-0.5 sm:mt-1.5"> Forgot Password? </Link>
                        </Form>
                    )}
                </Formik>
                <button
                    className="bg-red-500 text-white font-medium py-1 px-2 sm:py-2 sm:px-4 rounded-md w-full flex items-center justify-center transition-all duration-200 hover:shadow-lg mt-4 sm:mt-5 text-xs sm:text-sm"
                    onClick={() => navigate("/")}
                >
                    Go back to Home
                </button>
            </div>
        </div>
    );
}


async function getCurrentSession() {
    try {
        const { accessToken, idToken, signInDetails } = (await fetchAuthSession()).tokens ?? {};
        return { accessToken, idToken, signInDetails };
    }
    catch (error: any) {
        console.log(error);
        errorAlert(error);
    }
}