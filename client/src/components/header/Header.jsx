//jshint esversion:6
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ExploreIcon from '@material-ui/icons/Explore';
import Toolbar from '@material-ui/core/Toolbar';

// My files
import './Header.scss';

function Header(props) {

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

            <AppBar style={{ backgroundColor: '#111D5E', }}>
                <Toolbar>
                    <ExploreIcon />
                    <h1 className="title">trippin</h1>
                    {props.currentUser ?
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
                        :
                        <div className="login-btns">
                        <Button
                                size="large"
                                style={{
                                    height: "30px",
                                    color: "#9DDAC6",
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
                                    color: "#C2FFD9",
                                    borderRadius: "10px",
                                }}

                            onClick={handleRegister}
                            >
                                REGISTER
                            </Button>
                        </div>
                    }
                </Toolbar>
            </AppBar>
        </div >


    );
}

export default Header;
