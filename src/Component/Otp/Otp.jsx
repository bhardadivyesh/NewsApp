import { useState } from "react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
export default function App() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  let otpNumber = parseInt(otp);
  function loginbtn() {
    if (otpNumber == 123456) {
      localStorage.setItem("isAuth", true);
      navigate("/dashboard");
    } else {
      toast("invalid otp");
    }
  }
  return (
    <>
      <div
        style={{
          alignItems: "center",
          paddingLeft: "600px",
          paddingTop: "300px",
        }}
      >
        <h1 className="text-2xl font-bold dark:text-white">Enter Otp</h1>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          separator={<span style={{ width: "20px" }}></span>}
          renderInput={(props) => <input {...props} />}
          isInputNum={true}
          shouldAutoFocus={true}
          inputStyle={{
            borderRadius: "8px",
            width: "54px",
            height: "20px",
            fontSize: "12px",
            color: "#000",
            fontWeight: "400",
            caretColor: "blue",
            padding: "20px 0",
            border: "1px solid black",
          }}
          focusStyle={{
            border: "1px solid #CFD3DB",
            outline: "none",
          }}
        />
        <button type="submit" onClick={loginbtn}   className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
          Login
        </button>
       
      </div>
    </>
  );
}
