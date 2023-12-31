import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
import Dashboard from "./Component/Dashboard/Dashboard";
import RegistrationForm from "./Component/Form/RegistrationForm";
import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute";
import SignIn from "./Component/Login/SignIn";
import ErrorComponent from "./Component/ErrorComponent/ErrorComponent";
import Otp from "./Component/Otp/Otp"
import RichTextEditor from "./Component/RichTextEditor/RichTextEditor";
import News from "./Component/News/News";
// import ImportArray from "./Component/ImportArray/ImportArray";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/Sign-in"} />} />
          <Route exact path="/home" element={<News key="general" perpageArticals={5} category="general"   />} />
          {/* <Route exact path="/home" element={<ImportArray />}/> */}

          <Route exact path="/business" element={<News key="business" perpageArticals={5} category="business"   />} />
          <Route exact path="/entertainment" element={<News key="entertainment" perpageArticals={5} category="entertainment"   />} />
          <Route exact path="/health" element={<News key="health" perpageArticals={5} category="health"   />} />
          <Route exact path="/science" element={<News key="science" perpageArticals={5} category="science"  />} />
          <Route exact path="/sports" element={<News key="sports" perpageArticals={5} category="sports"   />} />
          <Route exact path="/technology" element={<News key="technology" perpageArticals={5} category="technology"   />} />
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
