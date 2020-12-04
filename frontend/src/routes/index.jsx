import React from "react";
import { Switch, Route } from "react-router-dom";

// import pages
import Dashboard from "../pages/Dashboard/Dashboard";
import StudentsList from "../pages/Students/StudentsList";
import StudentsRegister from "../pages/Students/StudentsRegister";
import PartnersList from "../pages/Partners/PartnersList";
import PartnersRegister from "../pages/Partners/PartnersRegister";

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
        data-test="component-studentsList"
        exact
        path={routes.students.path}
        component={() => (
          <DefaultLayout>
            <StudentsList />
          </DefaultLayout>
        )}
      />

      <Route
        data-test="component-studentsRegister"
        exact
        path={routes.studentsRegister.path}
        component={() => (
          <DefaultLayout>
            <StudentsRegister />
          </DefaultLayout>
        )}
      />

      <Route
        data-test="component-partnersList"
        exact
        path={routes.partners.path}
        component={() => (
          <DefaultLayout>
            <PartnersList />
          </DefaultLayout>
        )}
      />

      <Route
        data-test="component-partnersRegister"
        exact
        path={routes.partnersRegister.path}
        component={() => (
          <DefaultLayout>
            <PartnersRegister />
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
