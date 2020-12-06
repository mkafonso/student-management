import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import pages
import Dashboard from "../pages/Dashboard/Dashboard";
import NotFound from "../pages/NotFound/NotFound";
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

// import services
import {
  auth,
  createUserProfileDocument,
} from "../services/firebase/firebase.utils";

// import actions
import { setCurrentUser } from "../reducers/user/user.actions";

const Routes = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const {
    user: { currentUser },
  } = state;

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          const user = {
            id: snapshot.id,
            ...snapshot.data(),
          };

          dispatch(setCurrentUser(user));
        });
      }
    });
  }, [dispatch]);

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
        render={() =>
          currentUser ? (
            <Redirect to="/" />
          ) : (
            <ExternalLayout>
              <SignIn />
            </ExternalLayout>
          )
        }
      />

      <Route
        exact
        path="/*"
        component={() => (
          <DefaultLayout>
            <NotFound />
          </DefaultLayout>
        )}
      />
    </Switch>
  );
};

export default Routes;
