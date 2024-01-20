import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../Feature/Action/AuthAction";

const Login = () => {
const dispatch =useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value 
        const password = e.target.password.value 
      try {
          dispatch(loginUser({email,password}))
      }
      catch (error) {
        console.log(error)
      }
    }

    return (
        <div className="card shrink-0 w-96 mx-auto shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
            </form>
            <Link to={"/signUp"}>SignUp</Link>
      </div>
    );
};

export default Login;