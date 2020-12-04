import React from "react";
import { Switch, Route } from "react-router-dom";

// import pages
import Dashboard from "../pages/Dashboard/Dashboard";
import StudentList from "../pages/Students/StudentList";
import SignIn from "../pages/SignIn/SignIn";

// import components
import DefaultLayout from "../components/Layouts/DefaultLayout/DefaultLayout";
import ExternalLayout from "../components/Layouts/ExternalLayout/ExternalLayout";

// import libs
import routes from "../lib/routes";

const Routes = () => {
  return (
    <Switch>
      <Route
        data-test="component-dashboard"
        exact
        path={routes.root.path}
        component={() => (
          <DefaultLayout>
            <Dashboard />
          </DefaultLayout>
        )}
      />

      <Route
        data-test="component-studentList"
        exact
        path={routes.students.path}
        component={() => (
          <DefaultLayout>
            <StudentList />
          </DefaultLayout>
        )}
      />

      <Route
        data-test="component-signIn"
        exact
        path={routes.signIn.path}
        component={() => (
          <ExternalLayout>
            <SignIn />
          </ExternalLayout>
        )}
      />

      <Route
        exact
        path="/*"
        component={() => (
          <DefaultLayout>
            <h1>Not Found</h1>
          </DefaultLayout>
        )}
      />
    </Switch>
  );
};

export default Routes;
