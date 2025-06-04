import { useContext } from "react";
import { AuthProvider } from "./Provider";


const Login = () => {
    const {user,setUser} = useContext(AuthProvider);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    fetch('https://doingflow.vercel.app/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password: pass }),

    })
    .then(res=>res.json())
    .then(data=>{
        setUser(data);
    })
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              
            </p>
          </div>
          <div className="card bg-gray-800 w-full max-w-sm shrink-0 shadow-2xl rounded-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Email"
                  name="email"
                //   onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Password"
                  name='pass'
                  required
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
