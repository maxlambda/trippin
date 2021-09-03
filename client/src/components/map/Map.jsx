//jshint esversion:6

import { useEffect, useState } from 'react';
import ReactMapGL, { FlyToInterpolator, Marker, Popup } from 'react-map-gl';
import axios from 'axios';
import { format } from 'timeago.js';

// My files
import Header from "../header/Header.jsx";
import Login from "../login/Login.jsx";
import Register from "../register/Register.jsx";
import './Map.scss';

// Material-UI
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';
import ErrorIcon from '@material-ui/icons/Error';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import RoomIcon from '@material-ui/icons/Room';
import StarIcon from '@material-ui/icons/Star';
import Zoom from '@material-ui/core/Zoom';

let temporaryPinId = null;

function Map() {
  const localStorage = window.localStorage;
  const [currentUser, setCurrentUser] = useState(localStorage.getItem("user"));
  const [tooManyUsers, setTooManyUsers] = useState(false);

  const [pins, setPins] = useState([]);
  const [tooManyPins, setTooManyPins] = useState(false);
  const [currentPinId, setCurrentPinId] = useState(null);
  const [addingPin, setAddingPin] = useState(false);
  const [deletingPin, setDeletingPin] = useState(false);

  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const [newPlace, setNewPlace] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [rating, setRating] = useState(0);

  const [invalidTitle, setInvalidTitle] = useState(false);
  const [invalidDesc, setInvalidDesc] = useState(false);
  const [invalidRating, setInvalidRating] = useState(false);

  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 36.64920667168877,
    longitude: -21.007683545740246,
    zoom: 2
  });

  // Opens the popup for the clicked pin, centering the screen on that pin.
  function handleMarkerClick(pinId, lat, long) {
    setCurrentPinId(pinId);
    setDeletingPin(false);
    setViewport({ ...viewport, latitude: lat, longitude: long });
  }

  // Set addingPin === true. Additionally, remember which pin
  // the user has opened just in case they cancel.
  function handleAddPinButtonClick() {
    let userPinCounter = 0;
    pins.forEach(pin => {
      if (pin.displayname === currentUser) userPinCounter++;
    });

    // Prevent the user from having over 5 pins.
    if (userPinCounter > 4) {
      setTooManyPins(true);
      setTimeout(() => setTooManyPins(false), 5000);
    } else {
      temporaryPinId = currentPinId;
      setAddingPin(true);
    }

    setCurrentPinId(null);
  }

  // Set addingPin === false. Additionally, open the popup of the
  // remembered pin before pressing +ADD PIN, if any.
  function handleCancelButtonClick() {
    setAddingPin(false);
    setNewPlace(null);
    setCurrentPinId(temporaryPinId);
  }

  // Triggered when a user double clicks somewhere while adding a pin.
  function handleAddPinClick(event) {

    setInvalidTitle(false);
    setInvalidDesc(false);
    setInvalidRating(false);

    if (!addingPin) {
      setCurrentPinId(null);
      return;
    }

    const [long, lat] = event.lngLat;

    setNewPlace({
      lat,
      long
    });
  }

  // Adds a new pin.
  async function handleSubmit(event) {

    event.preventDefault();

    if (title === "" || title === null) {
      setInvalidTitle(true);
      return;
    } else if (desc === "" || desc === null) {
      setInvalidDesc(true);
      return;
    } else if (rating < 1 || rating > 5 || rating === null) {
      setInvalidRating(true);
      return;
    }

    const newPin = {
      displayname: currentUser,
      title,
      desc,
      rating,
      lat: newPlace.lat,
      long: newPlace.long
    };

    try {
      const res = await axios.post("/pins", newPin);
      setPins([...pins, res.data]);
      setNewPlace(null);
    } catch (err) {
      console.log(err);
    }

    setAddingPin(false);
    setTitle(null);
    setDesc(null);
    setRating(null);
    setDeletingPin(false);
  }

  function setLocalStorage(user) {
    localStorage.setItem("user", user);
  }
  function handleLogout() {
    localStorage.removeItem("user");
    setCurrentUser(null);
  }

  async function handleDeletePinYesClick(pinId) {
    const newPin = { _id: pinId };

    try {
      await axios.post("/pins/delete", newPin);
      const newPins = pins.filter(pin => pin._id !== pinId);
      setPins(newPins);

    } catch (err) {
      console.log(err);
    }

    setCurrentPinId(null);
  }

  useEffect(() => {
    const getPins = async () => {
      try {
        const res = await axios.get("/pins");
        setPins(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    const getUsers = async () => {
      try {
        const res = await axios.get("/users");
        if (res.data.length > 49) {
          setTooManyUsers(true);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getPins();
    getUsers();

  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
        transitionDuration={10}
        transitionInterpolator={new FlyToInterpolator()}
        doubleClickZoom={false}
        onDblClick={handleAddPinClick}
      >

        <Header
          currentUser={currentUser}
          localStorage={localStorage}
          onLogout={handleLogout}
          onRegister={() => {
            setShowRegister(!showRegister);
            setShowLogin(false);
          }}
          onLogin={() => {
            setShowRegister(false);
            setShowLogin(!showLogin);
          }}
        />

        {showLogin &&
          <Zoom in={true}>
            <Login
              currenUser={currentUser}
              localStorage={localStorage}
              setCurrentUser={setCurrentUser}
              setLocalStorage={(user) => { setLocalStorage(user) }}
              onClose={() => setShowLogin(false)} />
          </Zoom>
        }

        {showRegister &&
          <Zoom in={true}>
            <Register currentUser={currentUser} onClose={() => setShowRegister(false)} tooManyUsers={tooManyUsers}/>
          </Zoom>
        }

        {addingPin && newPlace !== null &&
          <Marker
            latitude={newPlace.lat}
            longitude={newPlace.long}
            offsetLeft={-20}
            offsetTop={-40}
          >
            <Zoom in={true} >
              <RoomIcon
                style={{
                  fontSize: "40px",
                  color: "#FF4848"
                }}
              />
            </Zoom>
          </Marker>
        }

        {pins.map(pin => (

          <div key={pin._id}>

            <div style={{ zIndex: "0", position: "fixed" }}>
              <Marker
                latitude={pin.lat}
                longitude={pin.long}
                offsetLeft={-20}
                offsetTop={-40}
              >
                <Zoom in={!addingPin && !showRegister && !showLogin ? true : false} >
                  <RoomIcon
                    style={{
                      fontSize: "40px",
                      color: currentPinId === pin._id ? "#FF4848" : pin.displayname === currentUser ? "#111D5E" : "#7B8B94",
                      cursor: "pointer"
                    }}
                    onClick={() => (
                      currentPinId === null ? handleMarkerClick(pin._id, pin.lat, pin.long) : (currentPinId === pin._id ? setCurrentPinId(null) : handleMarkerClick(pin._id, pin.lat, pin.long))
                    )}
                  />
                </Zoom>
              </Marker>
            </div>

            {currentPinId === pin._id && !showRegister && !showLogin &&

              <div className="popup">

                <Zoom in={true}>
                  <Popup
                    latitude={pin.lat}
                    longitude={pin.long}
                    offsetLeft={20}
                    closeButton={true}
                    closeOnClick={false}
                    onClose={() => setCurrentPinId(null)}
                    anchor="left" >

                    <div className="card">
                      <h4 className="title">{pin.title}</h4>
                      <label>Review:</label>
                      <p className="desc">{pin.desc}</p>
                      <label>Rating:</label>
                      <div className="stars" >
                        {Array(pin.rating).fill(<StarIcon className="star" />)}
                      </div>
                      <label>Information:</label>
                      <span className="username">Created by <b>{pin.displayname}</b></span>
                      <span className="createdDate">{format(pin.createdAt)}</span>

                      {pin.displayname === currentUser && !deletingPin &&
                        <Button
                          variant="contained"
                          color="secondary"
                          size="large"
                          startIcon={<DeleteIcon />}
                          style={{
                            width: "100%",
                            backgroundColor: '#7B8B94',
                            margin: "15px auto 5px"
                          }}
                          classes={{ label: 'pin-button' }}
                          onClick={() => setDeletingPin(true)}
                        >
                          DELETE PIN
                        </Button>
                      }

                      {pin.displayname === currentUser && deletingPin && (currentPinId !== null) &&
                        <div>
                          <p className="deleting-pin">Are you sure you want to delete this pin?</p>
                          <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            startIcon={<CheckIcon />}
                            style={{
                              width: "45%",
                              backgroundColor: '#FF4848',
                              margin: "15px auto 5px"
                            }}
                            classes={{ label: 'pin-button' }}
                            onClick={() => handleDeletePinYesClick(pin._id)}
                          >
                            YES
                          </Button>
                          <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            startIcon={<ClearIcon />}
                            style={{
                              position: "absolute",
                              right: "10px",
                              width: "45%",
                              backgroundColor: '#7B8B94',
                              margin: "15px auto 5px"
                            }}
                            classes={{ label: 'pin-button' }}
                            onClick={() => setDeletingPin(false)}
                          >
                            NO
                          </Button>
                        </div>
                      }
                    </div>
                  </Popup>
                </Zoom>

              </div>
            }
          </div>
        ))}

        {newPlace && addingPin &&
          <Zoom in={true}>
            <Popup
              latitude={newPlace.lat}
              longitude={newPlace.long}
              offsetLeft={20}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setNewPlace(null)}
              anchor="left" >

              <div>

                <form onSubmit={handleSubmit}>

                  <label>Place name</label>
                  <input
                    placeholder="Enter a title..."
                    onClick={() => setInvalidTitle(false)}
                    onChange={(event) => setTitle(event.target.value)}
                  ></input>
                  {invalidTitle &&
                    <Zoom in={true}>
                      <div className="error">

                        <ErrorIcon
                          size="small"
                          style={{ color: "#7B8B94" }}
                        ></ErrorIcon>
                        <p>Please enter a place name.</p>

                      </div>
                    </Zoom>
                  }

                  <label>Review</label>
                  <textarea
                    placeholder="Tell us about this place..."
                    onClick={() => setInvalidDesc(false)}
                    onChange={(event) => setDesc(event.target.value)}
                  ></textarea>
                  {invalidDesc &&
                    <Zoom in={true}>
                      <div className="error">

                        <ErrorIcon
                          size="small"
                          style={{ color: "#7B8B94" }}
                        ></ErrorIcon>
                        <p>Please enter a description.</p>

                      </div>
                    </Zoom>
                  }

                  <label>Rating</label>
                  <select onClick={() => setInvalidRating(false)} onChange={(event) => setRating(event.target.value)}>
                    <option value="" selected disabled hidden>Choose rating...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  {invalidRating &&
                    <Zoom in={true}>
                      <div className="error">

                        <ErrorIcon
                          size="small"
                          style={{ color: "#7B8B94" }}
                        ></ErrorIcon>
                        <p>Please enter a rating.</p>

                      </div>
                    </Zoom>
                  }

                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="large"
                    startIcon={<AddIcon />}
                    style={{
                      width: "100%",
                      backgroundColor: '#FF4848',
                      margin: "15px auto 5px"
                    }}
                    classes={{ label: 'pin-button' }}
                    onClick={handleAddPinButtonClick}
                  >
                    ADD PIN
                  </Button>

                </form>

              </div>
            </Popup>
          </Zoom>
        }

        <Zoom in={addingPin ? true : false} >

          <div className="add-pin-text">
            <Paper
              elevation={2}
              style={{
                position: "absolute",
                fontSize: "23px",
                top: "40px",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#FF4848",
                padding: "15px 30px",
                margin: "15px"
              }}>
              Double-click anywhere to add a pin.
            </Paper>
          </div>

        </Zoom>

        <Zoom in={tooManyPins ? true : false} >

          <div className="add-pin-text">
            <Paper
              elevation={2}
              style={{
                position: "absolute",
                fontSize: "23px",
                top: "40px",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#FF4848",
                padding: "15px 30px",
                margin: "15px"
              }}>
              You have too many pins! Users can only have 5 pins at a time.
            </Paper>
          </div>

        </Zoom>

        <Zoom in={!addingPin && currentUser !== "" && currentUser !== null ? true : false} >
          <Fab
            style={{
              backgroundColor: tooManyPins ? '#7B8B94' : '#FF4848',
              position: 'absolute',
              left: '10px',
              bottom: '40px'
            }}
            size="small"
            onClick={handleAddPinButtonClick}
          >
            <AddIcon></AddIcon>
          </Fab>
        </Zoom>

        <Zoom in={addingPin ? true : false} >
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{
              backgroundColor: '#7B8B94',
              position: 'absolute',
              left: '10px',
              bottom: '40px'
            }}
            classes={{ label: 'pin-button' }}
            onClick={handleCancelButtonClick}
          >
            CANCEL
          </Button>
        </Zoom>

      </ReactMapGL>
    </div >
  );
}

export default Map;
