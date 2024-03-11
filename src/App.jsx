import React from "react";
import { ToastContainer } from "react-toast";

import Demo from "./Demo";
import "./styles.css";

const App = () => {
  return (
    <>
      <Demo />
      <ToastContainer delay={3000} />
    </>
  );
};

export default App;
