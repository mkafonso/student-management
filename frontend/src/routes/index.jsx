import React from "react";
import { Switch, Route } from "react-router-dom";

// import pages
import Dashboard from "../pages/Dashboard/Dashboard";
import StudentList from "../pages/Students/StudentList";

// import components
import DefaultLayout from "../components/Layouts/DefaultLayout/DefaultLayout";

// import libs
import routes from "../lib/routes";

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path={routes.root.path}
        component={() => (
          <DefaultLayout>
            <Dashboard />
          </DefaultLayout>
        )}
      />

      <Route
        exact
        path={routes.students.path}
        component={() => (
          <DefaultLayout>
            <StudentList />
          </DefaultLayout>
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
