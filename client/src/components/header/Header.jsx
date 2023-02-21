//jshint esversion:6
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ExploreIcon from "@material-ui/icons/Explore";
import Toolbar from "@material-ui/core/Toolbar";
import useWindowDimensions from "../../utilities/WindowDims.jsx";

// My files
import "./Header.scss";

function Header(props) {
  const { height, width } = useWindowDimensions();

  function handleLogout() {
    props.onLogout();
  }
  function handleLogin() {
    props.onLogin();
  }
  function handleRegister() {
    props.onRegister();
  }

  return (
    <div className="header">
      <AppBar style={{ backgroundColor: "#3d3425" }}>
        <Toolbar>
          <ExploreIcon />
          <h1 className={props.currentUser ? "title no-title" : "title"}>
            <span className="highlight">TRIPPIN</span>
          </h1>
          {props.currentUser.user != null && props.currentUser.user !== "" &&
            <div ref={props.geoRef} className="geocoder" />
          }
          {props.currentUser.user != null && props.currentUser.user !== "" && width > 485 && (
            <div className="logout-btn">
              <Button
                size="large"
                style={{
                  height: "30px",
                  color: "#C2FFD9",
                  borderRadius: "10px",
                }}
                onClick={handleLogout}
              >
                LOG OUT
              </Button>
            </div>
          )}
          {(props.currentUser.user == null || props.currentUser.user === "") && (
            <div className="login-btns">
              <Button
                size="large"
                style={{
                  height: "30px",
                  color: "#94c9d1",
                  borderRadius: "10px",
                }}
                onClick={handleLogin}
              >
                LOGIN
              </Button>
              <Button
                size="large"
                style={{
                  height: "30px",
                  color: "#94c9d1",
                  borderRadius: "10px",
                }}
                onClick={handleRegister}
              >
                REGISTER
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
