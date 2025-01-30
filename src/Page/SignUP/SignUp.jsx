import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contextProvider/AuthProvider";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

 function SignUp() {
  const { createUser, ProfileUpdate, logout } = useContext(AuthContext);

  const navigate = useNavigate();
  const axiosPublic= useAxiosPublic()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
   } = useForm();
   

  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password).then((result) => {
      // Signed up
      // console.log(result)
      const LoggesUser = result.user;
      // console.log(LoggesUser);
      ProfileUpdate(data.name, data.photoURL)
        .then(() => {
          console.log("user profile Update");
          const userInfo = {
            email: data?.email,
            name:data.name
          }

          axiosPublic.post("/users", userInfo)
            .then(res => {
              console.log(res.data)
              if (res.data.insertedId) {
                reset;
                toast.success("Successfully Signed Up");
                logout().then(() => {
                  // Sign-out successful.
                  navigate("/login");
                });
              }
            
          })

          
        })
        .catch((error) => {
          // console.error(error);
          toast.error(error);
        });

      // ...
    });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  {...register("photoURL", { required: true })}
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  // required
                />
                {errors.photoURL && (
                  <span className="text-red-600">photoURL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  // required
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  // required
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  // required
                />
                {errors.password?.type === "required" && (
                  <p role="alert" className="text-red-600">
                    password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p role="alert" className="text-red-600">
                    password must be 6 character
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center my-4">
              <small>Already Have an Account?</small>
              <Link to="/login" className="text-blue-400">
                Click here
              </Link>
            </p>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp