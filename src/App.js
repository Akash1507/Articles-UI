import React from "react";
import "antd/dist/antd.css";
import CustomLayout from "./containers/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
function App() {
  return (
    <Router>
      <div className="App">
        <CustomLayout>
          <BaseRouter />
        </CustomLayout>
      </div>
    </Router>
  );
}

export default App;
