import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import About from "./components/About.js";
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
      <Navbar
        logo="TextBuddy"
        aboutText="About TextBuddy"
        mode={mode}
        toggleMode={toggleMode}
        changeColor={changeColor}
        color={color}
      />
      <div className="container">
        <Alert alert={alert} />
        <TextForm
          heading="Enter the text to analyze"
          mode={mode}
          showAlert={showAlert}
          color = {color}
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
