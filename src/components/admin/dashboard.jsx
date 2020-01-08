import React from "react";
import Posts from "./posts";
import Users from "./users";
import Sidebar from "./Sidebar";
import { Route, Switch, Redirect } from 'react-router-dom';

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Sidebar match={match} />
      <Switch>
        <Route path="/admin/posts" component={Posts} />
        <Route path="/admin/users" component={Users} />
      </Switch>

    </div >
  );
};

export default Dashboard;
