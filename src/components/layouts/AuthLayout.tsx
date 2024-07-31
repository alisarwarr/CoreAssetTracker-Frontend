//REACT-ROUTER-DOM
import { Outlet } from "react-router-dom";
//AMPLIFY
import ConfigureAmplifyClientSide from '../../aws-exports';


export default function AuthLayout(): JSX.Element {
    return (
        <>
            <ConfigureAmplifyClientSide />
            <Outlet />
        </>
    )
}