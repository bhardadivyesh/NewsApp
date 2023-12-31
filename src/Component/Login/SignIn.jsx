import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  function handleInput(e) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  function successLogin() {
    toast("Login Successfully", {
      style: {
        background: "green",
        color: "white",
      },
    });
  }
  function failLogin() {
    toast("Invalid Email and Password", {
      style: {
        background: "red",
        color: "white",
      },
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    let loginData = JSON.parse(localStorage.getItem("userData")) ?? [];
    for (let i of loginData) {
     if (i.email == data.email && i.password == data.password)
     {
      successLogin()
      navigate("/otp")
     }
     else
     {
      failLogin()
     }
    }
  }
  function redirectRegistered(e){
    e.preventDefault();
    navigate("/register")
  }

  return (
    <>
        <h1 className="text-4xl font-extrabold">SignIn Form</h1>

        <div className="w-full max-w-xs">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleInput}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Email"
                type="email"
                name="email"
                value={data.email}
                onInput={handleInput}
                placeholder="Enter Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                value={data.password}
                onInput={handleInput}
                placeholder="Enter Password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="subnit"
                onClick={handleSubmit}
              >
                Sign In
              </button>
            </div>
        <button type="submit" onClick={redirectRegistered}>Sign Up</button>
          </form>
        </div>
      <ToastContainer />
    </>
  );
}
export default Login;
