//jshint esversion:6
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import ExploreIcon from '@material-ui/icons/Explore';
import axios from 'axios';
import { useRef, useState } from 'react';

// My files
import './Register.scss';

function Register(props) {

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const [invalidUsername, setInvalidUsername] = useState(false);
    const [invalidDisplayname, setInvalidDisplayname] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);

    const usernameRef = useRef();
    const displaynameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    function setInvalidFalse() {
        setInvalidUsername(false);
        setInvalidDisplayname(false);
        setInvalidEmail(false);
        setInvalidPassword(false);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const user = usernameRef.current.value;
        const display = displaynameRef.current.value;
        const email = emailRef.current.value;
        const pw = passwordRef.current.value;

        if (user === "" || user === null) {
            setInvalidUsername(true);
            return;
        } else if (display === "" || display === null) {
            setInvalidDisplayname(true);
            return;
        } else if (email === "" || email === null) {
            setInvalidEmail(true);
            return;
        } else if (pw === "" || pw === null) {
            setInvalidPassword(true);
            return;
        }

        const newUser = {
            username: user,
            displayname: display,
            email: email,
            password: pw
        };

        try {
            setSuccess(false);
            setError(false);
            await axios.post("/users/register", newUser);
            setSuccess(true);
        } catch (err) {
            setError(true);
            console.log(err);
        }
    }

    return (
        <div>

            {!(props.tooManyUsers) ?
                <div className="register-container">
                    <div className="logo">
                        <ExploreIcon fontSize="large" />
                    </div>

                    <CancelIcon className="cancel" onClick={() => props.onClose()} />

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
                            <span className="register-error">Please enter a username.</span>
                        }

                        <input
                            className="inputs"
                            type="text"
                            placeholder="Display Name"
                            ref={displaynameRef}
                            onClick={setInvalidFalse}
                            onChange={setInvalidFalse}
                        ></input>
                        {invalidDisplayname &&
                            <span className="register-error">Please enter a display name.</span>
                        }

                        <input
                            className="inputs"
                            type="email"
                            placeholder="Email"
                            ref={emailRef}
                            onClick={setInvalidFalse}
                            onChange={setInvalidFalse}
                        ></input>
                        {invalidEmail &&
                            <span className="register-error">Please enter an email.</span>
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
                            <span className="register-error">Please enter a password.</span>
                        }

                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            style={{
                                color: "white",
                                width: "100%",
                                backgroundColor: '#FF4848',
                                margin: "15px auto 5px"
                            }}
                        >
                            REGISTER
                        </Button>
                        {success &&
                            <span className="register-success">Registered successfully!</span>
                        }
                        {error &&
                            <span className="register-error">Failed to register.</span>
                        }
                    </form>
                </div>
                :
                <div className="register-container-too-many-users">
                    <CancelIcon className="cancel" onClick={() => props.onClose()} />
                    <span>Sorry, there are too many users! We currently only allow a finite number of users. Please contact the creator of the website.</span>
                </div>
            }
        </div >
    );
}

export default Register;
