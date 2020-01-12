import React from "react";
import { Route } from "react-router-dom";
import ArticleList from "./containers/ArticleListView";
import ArticleDetail from "./containers/ArticleDetailView";
import Login from "./containers/Login";
import Signup from "./containers/Signup";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={ArticleList} />
    <Route path="/articles/articleId" component={ArticleDetail} />
    <Route path="/login/" component={Login} />
    <Route path="/signup/" component={Signup} />
  </div>
);

export default BaseRouter;
