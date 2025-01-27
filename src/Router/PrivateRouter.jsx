import { useContext } from "react"
import { AuthContext } from "../contextProvider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";
import LoadingComponent from "../Page/Home/Shared/Loading/Loading";


export default function PrivateRouter({children}) {
    const location=useLocation()
    const { user, loading } = useContext(AuthContext);

    if (loading) {
    return <LoadingComponent/>
}
  if (user) {
    return children;
  }
    return <Navigate to="/login" state={{from:location}} replace/>;
}
