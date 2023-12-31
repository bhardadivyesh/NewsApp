import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
function RegistrationForm() {
  let navigation = useNavigate();
  let checkStatus = 0;
  const [data, setData] = useState({
    fName: "",
    lName: "",
    password: "",
    email: "",
  });
  function successLogin() {
    toast("Registration Successfully", {
      style: {
        background: "green",
        color: "white",
      },
    });
  }
  function emptyFields() {
    toast.warning("Fill all fields properly", {
      style: {
        background: "red",
        color: "white",
      },
    });
  }
  function failLogin() {
    toast.warning("Email already Registered", {
      style: {
        background: "red",
        color: "white",
      },
    });
  }
  function handleInput(e) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

    function handleSubmit(e) {
      e.preventDefault();
      let lData = JSON.parse(localStorage.getItem("userData")) ?? [];
      for (let d of lData) {
        if (d.email == data.email) {
          checkStatus = 1;
          break;
        }
      }
      if (checkStatus == 1) {
        failLogin();
      } else if (
        data.fName == "" ||
        data.lName == "" ||
        data.email == "" ||
        data.password == ""
      ) {
        emptyFields();
      } else {
        lData.push({
          fName: data.fName,
          lName: data.lName,
          password: data.password,
          email: data.email,
        });
        localStorage.setItem("userData", JSON.stringify(lData));
        setData({ fName: "", lName: "", password: "", email: "" });
        successLogin();
        navigation("/Sign-In");
      }
    }
  function redirectSignIn(e){
    e.preventDefault();
    navigation("/sign-in")
  }
  return (
    <>
      <h1 className="text-4xl font-extrabold">Registration Form</h1>
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="fName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              FirstName
              <input
                type="text"
                name="fName"
                value={data.fName}
                placeholder="Enter name"
                onInput={handleInput}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
          <div className="mb-6">
            <label
              htmlFor="lName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              LastName
              <input
                type="text"
                name="lName"
                value={data.lName}
                placeholder="Enter name"
                onInput={handleInput}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
          <div className="mb-6">
            <label
              htmlFor="lName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              password
              <input
                type="text"
                name="password"
                value={data.password}
                placeholder="Enter password"
                onInput={handleInput}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="lName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
              <input
                type="email"
                name="email"
                value={data.email}
                placeholder="Enter email"
                onInput={handleInput}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
          <div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </div>
          <button type="submit" onClick={redirectSignIn}>Sign In</button>
        </form>
      </div>
      <ToastContainer
       limit={1}
       
       />
    </>
  );
}
export default RegistrationForm;
