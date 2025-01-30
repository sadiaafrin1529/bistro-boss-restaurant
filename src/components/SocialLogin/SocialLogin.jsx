import React from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function SocialLogin() {
  const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate =useNavigate()

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
        const userinfo = {
          name: result.user?.displayName,
          email: result.user?.email
        };
        axiosPublic.post("/users", userinfo)
            .then(res => {
                console.log(res.data)
                toast.success("Successfully Signed Up");
                navigate("/")
        })
    });
  };

  return (
    <div className="flex flex-col  items-center my-4">
      <div className="divider"></div>
      <div>
        <button onClick={handleGoogleSignIn} className="btn ">
          <FaGoogle />
          Google
        </button>
      </div>
    </div>
  );
}

export default SocialLogin;
