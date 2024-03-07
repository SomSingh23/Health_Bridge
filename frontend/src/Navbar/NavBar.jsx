import { Link } from "react-router-dom";
import "./navbar.css";
export default function Navbar({ isPatient, isDoctor, isLogout }) {
  return (
    <>
      <div className="navbar">
        <Link to="/">Home</Link>
        {isPatient && <Link to="/patient">Patient</Link>}
        {isDoctor && <Link to="/doctor">Doctor</Link>}
        {isPatient && <Link to="/ai_doctor">AI Doctor</Link>}
        <Link to="/chat_bot">AI Assistant</Link>

        {isLogout && (
          <Link style={{ color: "red" }} to="/logout">
            <b>Logout</b>
          </Link>
        )}
      </div>
    </>
  );
}
