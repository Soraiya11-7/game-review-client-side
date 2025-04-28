import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className=" bg-gray-50 dark:bg-gray-950  container w-full mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;