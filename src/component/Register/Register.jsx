import { Link } from "react-router-dom";
import imgLogin from "./../../assets/images/login/login.svg";
import useAuth from "../Hooks/useAuth";


const Register = () => {
  
  const { createUser, handleUpdateProfile } = useAuth()

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    console.log(name, email, password, photoURL);

    createUser(email, password)
    .then(res =>{
      console.log(res.user)
      handleUpdateProfile(name, photoURL)
    })
    .catch(err =>{
      console.error(err)
    })
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-12">
        <div className="w-1/2">
          <img src={imgLogin} alt="" />
        </div>
        <div className="card w-1/2 max-w-lg shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Register</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="url"
                placeholder="photoURL"
                name="PhotoURL"
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
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <p>
              Already have an account? Please{" "}
              <Link to="/login" className="text-orange-600 font-semibold">
                Login
              </Link>
            </p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
