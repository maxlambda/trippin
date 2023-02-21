//jshint esversion:6
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import ExploreIcon from '@material-ui/icons/Explore';
import axios from 'axios';
import { useRef, useState } from 'react';

// My files
import './Login.scss';

function Login(props) {

    const [error, setError] = useState(false);

    const [invalidUsername, setInvalidUsername] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);

    const usernameRef = useRef();
    const passwordRef = useRef();

    function setInvalidFalse() {
        setInvalidUsername(false);
        setInvalidPassword(false);
        setError(false);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const username = usernameRef.current.value.toLowerCase();
        const pw = passwordRef.current.value;

        if (username === "" || username === null) {
            setInvalidUsername(true);
            return;
        } else if (pw === "" || pw === null) {
            setInvalidPassword(true);
            return;
        }

        const currentUser = {
            username: username,
            password: pw
        };

        try {
            setError(false);
            const res = await axios.post("/users/login", currentUser);
                props.setLocalStorage({user: res.data.username, display: res.data.displayname});
                props.setCurrentUser({user: res.data.username, display: res.data.displayname});
                props.onClose();
            
        } catch (err) {
            setError(true);
            console.log(err);
        }
    }

    return (
        <div className="login-container">
            <div className="logo">
                <ExploreIcon fontSize="large"/>
            </div>

            <CancelIcon className="cancel" onClick={()=>props.onClose()}/>

            <h3 className="login-header"><span className="highlight">TRIPPIN</span></h3>

            <form onSubmit={handleSubmit}>
                <input
                    className="inputs"
                    type="text"
                    placeholder="Username"
                    ref={usernameRef}
                    onClick={setInvalidFalse}
                    onChange={setInvalidFalse}
                ></input>
                {invalidUsername &&
                    <span className="login-error">Please enter a username.</span>
                }

                <input
                    className="inputs"
                    type="password"
                    placeholder="Password"
                    ref={passwordRef}
                    onClick={setInvalidFalse}
                    onChange={setInvalidFalse}
                ></input>
                {invalidPassword &&
                    <span className="login-error">Please enter a password.</span>
                }

                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    style={{
                        color: "#3d3425",
                        width: "100%",
                        backgroundColor: '#EECF68',
                        margin: "15px auto 5px"
                    }}
                >
                    LOGIN
                </Button>
                {error &&
                    <span className="login-error">Invalid username/password combo.</span>
                }
            </form>
        </div >
    );
}

export default Login;
