import { useNavigate } from "react-router";
function Dashboard() {
  const navigate = useNavigate();
 
  function textEditor() {
    navigate("/textEditor");
  }
  return (
    <>    
      {/* <News perpageArticals={5} category="entertainment" /> */}
      <div className="mt-32">
        <button type="submit" onClick={textEditor} className="btn btn-info">
          textEditor
        </button>
      </div>
    </>
  );
}
export default Dashboard;
