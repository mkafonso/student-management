import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppStackScreens from "./src/stacks/AppStackScreens";

// import context
import { UserProvider } from "./src/context/UserContext";

export default App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <AppStackScreens />
      </NavigationContainer>
    </UserProvider>
  );
};
