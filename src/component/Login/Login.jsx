import { Link, useLocation, useNavigate } from 'react-router-dom';
import imgLogin from './../../assets/images/login/login.svg';
import useAuth from '../Hooks/useAuth';
const Login = () => {
    
    const { loginWithEmail } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)

    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginWithEmail(email, password)
        .then(res =>{
          const loggedInUser = res.user;
          console.log(loggedInUser)
            if(loggedInUser){
              navigate(location?.state ? location?.state : '/')
            }
          })
        .catch(err=>{
          console.error(err)
        })
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-12">
        <div className="w-1/2">
          <img src={imgLogin} alt="" />
        </div>
        <div className="card w-1/2 max-w-lg shadow-2xl bg-base-100">
        <h1 className="text-5xl font-bold text-center">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name='email'
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
                name='password'
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <p>New here? Please <Link to='/register' className='text-orange-600 font-semibold'>Register</Link></p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
