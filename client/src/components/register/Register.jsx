//jshint esversion:6
import Button from "@material-ui/core/Button";
import CancelIcon from "@material-ui/icons/Cancel";
import ExploreIcon from "@material-ui/icons/Explore";
import axios from "axios";
import { useRef, useState } from "react";

// My files
import "./Register.scss";

function Register(props) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [emptyUsername, setEmptyUsername] = useState(false);
  const [emptyDisplayname, setEmptyDisplayname] = useState(false);
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);
  const [invalidUsername, setInvalidUsername] = useState(false);
  const [invalidDisplayname, setInvalidDisplayname] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const usernameRef = useRef();
  const displaynameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  function setInvalidFalse() {
    setEmptyUsername(false);
    setEmptyDisplayname(false);
    setEmptyEmail(false);
    setEmptyPassword(false);
    setInvalidUsername(false);
    setInvalidDisplayname(false);
    setInvalidEmail(false);
    setInvalidPassword(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const user = usernameRef.current.value.toLowerCase();
    const display = displaynameRef.current.value;
    const email = emailRef.current.value;
    const pw = passwordRef.current.value;

    // Username validation
    if (user === "" || user === null) {
      setEmptyUsername(true);
      return;
    } else if (user.length < 3 || user.length > 18) {
      setInvalidUsername(true);
      return;
    }

    // Display name validaion
    if (display === "" || display === null) {
      setEmptyDisplayname(true);
      return;
    } else if (display.length > 18) {
      setInvalidDisplayname(true);
      return;
    }

    // Email validation
    if (email === "" || email === null) {
      setEmptyEmail(true);
      return;
    } else if (email.length > 75) {
      setInvalidEmail(true);
      return;
    }

    // Password validation
    if (pw === "" || pw === null) {
      setEmptyPassword(true);
      return;
    } else if (pw.length < 6 || display.length > 50) {
      setInvalidPassword(true);
      return;
    }

    const newUser = {
      username: user,
      displayname: display,
      email: email,
      password: pw,
    };

    try {
      setSuccess(false);
      setError(false);
      await axios.post("/users/register", newUser);
      setSuccess(true);
      usernameRef.current.value = "";
      displaynameRef.current.value = "";
      emailRef.current.value = "";
      passwordRef.current.value = "";
      setTimeout(() => {
        props.onClose();
        props.onRegisterComplete();
      }, 3000);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  }

  return (
    <div>
      {!props.tooManyUsers ? (
        <div className="register-container">
          <div className="logo">
            <ExploreIcon fontSize="large" />
          </div>

          <CancelIcon className="cancel" onClick={() => props.onClose()} />

          <h3 className="register-header">trippin</h3>
          <p className="register-info">
            Pin locations to a map. Submit reviews. See others' reviews.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              className="inputs"
              type="text"
              placeholder="Username"
              ref={usernameRef}
              onClick={setInvalidFalse}
              onChange={setInvalidFalse}
            ></input>
            {emptyUsername && (
              <span className="register-error">Please enter a username.</span>
            )}
            {invalidUsername && (
              <span className="register-error">
                Must be 3 to 18 characters long.
              </span>
            )}

            <input
              className="inputs"
              type="text"
              placeholder="Display Name"
              ref={displaynameRef}
              onClick={setInvalidFalse}
              onChange={setInvalidFalse}
            ></input>
            {emptyDisplayname && (
              <span className="register-error">
                Please enter a display name.
              </span>
            )}
            {invalidDisplayname && (
              <span className="register-error">
                Must be 1 to 18 characters long.
              </span>
            )}

            <input
              className="inputs"
              type="email"
              placeholder="Email"
              ref={emailRef}
              onClick={setInvalidFalse}
              onChange={setInvalidFalse}
            ></input>
            {emptyEmail && (
              <span className="register-error">Please enter an email.</span>
            )}
            {invalidEmail && (
              <span className="register-error">
                Email must not be greater than 75 characters.
              </span>
            )}

            <input
              className="inputs"
              type="password"
              placeholder="Password"
              ref={passwordRef}
              onClick={setInvalidFalse}
              onChange={setInvalidFalse}
            ></input>
            {emptyPassword && (
              <span className="register-error">Please enter a password.</span>
            )}
            {invalidPassword && (
              <span className="register-error">
                Must be 6 to 50 characters long.
              </span>
            )}

            {!success && (
              <Button
                type="submit"
                variant="contained"
                size="large"
                style={{
                  color: "white",
                  width: "100%",
                  backgroundColor: "#FF4848",
                  margin: "15px auto 5px",
                }}
              >
                REGISTER
              </Button>
            )}
            {success && (
              <span className="register-success">Registered successfully!</span>
            )}
            {error && (
              <span className="register-error">Failed to register.</span>
            )}
          </form>
        </div>
      ) : (
        <div className="register-container-too-many-users">
          <CancelIcon className="cancel" onClick={() => props.onClose()} />
          <span>
            Sorry, there are too many users! We currently only allow a finite
            number of users. Please contact the creator of the website.
          </span>
        </div>
      )}
    </div>
  );
}

export default Register;
