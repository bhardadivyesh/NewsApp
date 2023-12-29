import { useNavigate } from "react-router";
import Navbar from "../Navbar/Navbar";
import News from "../News/News";
function Dashboard() {
  const navigate = useNavigate();
  function logOut() {
    localStorage.removeItem("isAuth");
    navigate("/sign-in");
  }
  function textEditor() {
    navigate("/textEditor");
  }
  return (
    <>
      <Navbar />
      <News perpageArticals={5} category="entertainment" />
      <div className="mt-32">
        <button type="submit" onClick={logOut} className="btn btn-info ">
          LogOut
        </button>
        <button type="submit" onClick={textEditor} className="btn btn-info">
          textEditor
        </button>
      </div>
    </>
  );
}
export default Dashboard;
