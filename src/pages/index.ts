//REACT
import { FC, lazy } from "react";


//Layout
export const Home: FC = lazy(() => import("./home"));
//AuthLayout
export const Login: FC = lazy(() => import("./login"));
export const Signup: FC = lazy(() => import("./signup"));
export const ForgotPassword: FC = lazy(() => import("./forgot-password"));