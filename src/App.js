import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import ArticleList from "./containers/ArticleListView";
import CustomLayout from "./containers/Layout";
function App() {
  return (
    <div className="App">
      <CustomLayout>
        <ArticleList />
      </CustomLayout>
    </div>
  );
}

export default App;
