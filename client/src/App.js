import Navbar from "./components/Navbar.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TextForm from "./components/TextForm.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About.js";
// import Sidebar from "./components/Sidebar.js";
import React, { useState } from "react";
import Alert from "./components/Alert.js";
// import { radio } from "@material-tailwind/react";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode enabled or not
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState("rgb(31 33 33)");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  //to change the color of darkmode according to radio button
  const changeColor = () => {
    if (mode === "dark") {
      const radioBtn = document.querySelectorAll(
        'input[name="flexRadioDefault"]'
      );
      for (const radio of radioBtn) {
        if (radio.checked) {
          document.body.style.backgroundColor = `${radio.style.backgroundColor}`;
          const radioColor = `${radio.style.backgroundColor}`;
          setColor(radioColor);
        }
      }
    }
  };
  //
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      //Dynamically adding title
      // setInterval(() => {
      //   document.title = "Alert!!!";
      // }, 1000);
      // setInterval(() => {
      //   document.title = "Text Buddy - Home";
      // }, 2000);
      const radioBtn = document.querySelectorAll(
        'input[name="flexRadioDefault"]'
      );
      // console.log(radioBtn);
      for (const radio of radioBtn) {
        if (radio.checked) {
          document.body.style.backgroundColor = `${radio.style.backgroundColor}`;
          const radioColor = `${radio.style.backgroundColor}`;
          setColor(radioColor);
        }
      }

      showAlert("! Dark Mode has been enabled ", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("! Light Mode has been enabled ", "success");
    }
  };
  return (
    <>
      {/*Here logo and aboutText are the props given to the component navbar as an arguments */}
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true}} >
      {/* {{ v7_startTransition: true, v7_relativeSplatPath: true}} This is the new feature of router v6 transitioning to v7*/}
        <Navbar
          logo="TextBuddy"
          aboutText="About TextBuddy"
          mode={mode}
          toggleMode={toggleMode}
          changeColor={changeColor}
          color={color}
        />
        <div className="container">
          <Alert alert = {alert}/>
          <Routes>
            <Route exact path="/about" element = {<About color={color} mode={mode}/>} >
            </Route>
            <Route exact path="/" element = {
              <TextForm
                heading="Enter the text to analyze"
                mode={mode}
                showAlert={showAlert}
                color={color}
              />} > 
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
