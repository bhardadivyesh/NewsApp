import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Component/Dashboard/Dashboard";
import RegistrationForm from "./Component/Form/RegistrationForm";
import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute";
import SignIn from "./Component/Login/SignIn";
import ErrorComponent from "./Component/ErrorComponent/ErrorComponent";
import Otp from "./Component/Otp/Otp"
import RichTextEditor from "./Component/RichTextEditor/RichTextEditor";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/Sign-in"} />} />
          <Route
            path="/register"
            element={<ProtectedRoute Component={RegistrationForm} />}
          />
          <Route
            path="/sign-in"
            element={<ProtectedRoute Component={SignIn} />}
          />
          <Route
            path="/dashboard"
            element={<ProtectedRoute Component={Dashboard} />}
          />
          <Route
            path="/*"
            element={<ProtectedRoute Component={ErrorComponent} />}
          />
            <Route
            path="/Otp"
            element={<ProtectedRoute Component={Otp} />}
          />
            <Route
            path="/textEditor"
            element={<ProtectedRoute Component={RichTextEditor} />}
          />
         
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
