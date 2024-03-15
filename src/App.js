import React, { useState } from "react";
import "./App.css";
import DarkMode from "./Component/DarkMode";
import Navbar from "./Component/Navbar";
import Textarea from "./Component/Textarea";
import Alert from "./Component/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [darkText, setdarkText] = useState("light");
  const [text, setText] = useState("Turn on Dark mode");
  const [alert, setalert] = useState(null);
  let showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };
  let toggle = () => {
    if (darkText === "light") {
      setdarkText("dark");
      setText("Turn off Dark mode");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark mode is enabled", "success");
    } else {
      setdarkText("light");
      setText("Turn on Dark mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar mode={darkText} toggle={toggle} text={text} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <Textarea
                  title="Enter your paragraph below"
                  mode={darkText}
                  showAlert={showAlert}
                />
              }
            />
            <Route path="/DarkMode" element={<DarkMode />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
