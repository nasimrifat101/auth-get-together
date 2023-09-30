/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    //
    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
        e.target.reset();
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });

    };
    const handleGoogleSignIn = () =>{
      signInWithGoogle()
      .then(res =>{
          console.log(res.user)
      })
      .catch(error =>{
          confirm.log(error)
      })
    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card w-96 flex-shrink-0 max-w-md shadow-2xl bg-transparent bg-base-100">
            <div className="card-body">
              {/* form */}
              <form onSubmit={handleLogin} action="">
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
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <div className="flex">
                <p>New here?</p>
                <span>
                  <Link
                    to="/register"
                    className="btn-link text-green-600 font-semibold"
                  >
                    Register
                  </Link>
                </span>
              </div>
              <button onClick={handleGoogleSignIn} className="btn btn-ghost">Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
