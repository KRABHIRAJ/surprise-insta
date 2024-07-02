import { Outlet } from "react-router-dom";
const Layout = () => {
     
    return(
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Outlet />
      </div>
    )
}

export default Layout;