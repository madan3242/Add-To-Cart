import "./Navbar.css";
import { Button, Navbar as AdminNavbar } from "react-bootstrap";
import { logout } from "../../redux/user/user.action";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <AdminNavbar style={{ padding: "0 1rem" }}>
        <AdminNavbar.Brand onClick={() => navigate("/")}>
          Add To Cart - Admin
        </AdminNavbar.Brand>

        <div
          style={{ display: "flex", placeItems: "center", padding: "0 15px" }}
        >
          {!isAuthenticated ? (
            <>
              <Button onClick={() => navigate("/login")} variant="null">
                Login / Signup
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="null"
                className="bg"
                onClick={() => dispatch(logout(navigate, setIsAuthenticated))}
              >
                Logout
              </Button>
            </>
          )}
        </div>
      </AdminNavbar>
    </>
  );
};

export default Navbar;
