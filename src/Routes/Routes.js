import React from "react";

// Routes
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

// components
import Signin from "../Components/Auth/Signin";
import Dashboard from "../Screens/Dashboard/Dashboard";
import Clients from "../Screens/Clients/Clients";
import ClientDetails from "../Screens/Clients/Details/ClientDetails";
import Constructors from "../Screens/Constructors/Constructors";
import ConstructorDetails from "../Screens/Constructors/Details/ConstructorDetails";
import AssignProject from "../Screens/Constructors/Details/AssignProject/AssignProject";
import Administration from "../Screens/Administration/Administration";
import AdministrationDetails from "../Screens/Administration/Details/AdministrationDetails";
import Notifications from "../Screens/Notifications/Notifications";
import Projects from "../Screens/Projects/Projects";
import ProjectDetails from "../Screens/Projects/Details/Details";
import DocumentDetails from "../Screens/Projects/Details/DocumentDetails/DocumentDetails";
import VideoDetails from "../Screens/Projects/Details/VideosDetails/VideoDetails";
import PlanDetails from "../Screens/Projects/Details/PlanDetails/PlanDetails";
import FileDetails from "../Screens/Projects/Details/FileDetails/FileDetails";

const Routes = ({ isAuthenticated }) => {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/" component={Signin} exact={true} />
        <PublicRoute path="/signin" component={Signin} exact={true} />
        <PrivateRoute path="/dashboard" component={Dashboard} exact={true} />
        <PrivateRoute path="/clients" component={Clients} exact={true} />
        <PrivateRoute
          path="/clients/:userId"
          component={ClientDetails}
          exact={true}
        />
        <PrivateRoute
          path="/constructors"
          component={Constructors}
          exact={true}
        />
        <PrivateRoute
          path="/constructors/:userId"
          component={ConstructorDetails}
          exact={true}
        />
        <PrivateRoute
          path="/assignProject"
          component={AssignProject}
          exact={true}
        />
        <PrivateRoute
          path="/administration"
          component={Administration}
          exact={true}
        />
        <PrivateRoute
          path="/administration/:adminId"
          component={AdministrationDetails}
          exact={true}
        />
        <PrivateRoute
          path="/notifications"
          component={Notifications}
          exact={true}
        />
        <PrivateRoute path="/projects" component={Projects} exact={true} />
        <PrivateRoute
          path="/projects/:clientId/:projectId"
          component={ProjectDetails}
          exact={true}
        />
        <PrivateRoute
          path="/project/:clientId/:projectId/documents"
          component={DocumentDetails}
          exact={true}
        />
        <PrivateRoute
          path="/project/:clientId/:projectId/videos"
          component={VideoDetails}
          exact={true}
        />
        <PrivateRoute
          path="/project/:clientId/:projectId/plans"
          component={PlanDetails}
          exact={true}
        />
        <PrivateRoute
          path="/project/:clientId/:projectId/files"
          component={FileDetails}
          exact={true}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
