import React, { useContext, useEffect } from "react";
import { useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../contextProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";
function Login() {

const [disable,setDisable]=useState(true)

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"
  console.log(from)
  
const { SignIn } = useContext(AuthContext);

  const handleLogin = event => {
      
      event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
      console.log(email, password)


      SignIn(email, password).then((res) => {
        // Signed in
        const user = res.user;
        console.log(user)
        toast.success("Successfully Logged In");
         navigate(from, { replace: true });
        // ...
      })
     .catch((error) => {
      console.error(error);
      toast.error("Login failed. Please check your credentials.");
    });
  }
  




  useEffect(() => {
     loadCaptchaEnginge(6); 
  }, [])
  
  const handleValidateCaptcha = (event) => {
    
    const user_captcha_value = event.target.form.captcha.value;
    console.log(user_captcha_value);
      if (validateCaptcha(user_captcha_value)) {
        setDisable(false);
      } else {
        setDisable(true);
      }
}
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 md:w-1/2 max-w-sm  shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="type the captcha above "
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  disabled={disable}
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center my-4">
              <small>New Here?</small>
              <Link to="/signup" className="text-blue-400">
                Create a new account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
