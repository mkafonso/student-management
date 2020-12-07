import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";

// import screens
import HomeScreen from "../screens/HomeScreen";
import MessageScreen from "../screens/MessageScreen";
import FeedScreen from "../screens/FeedScreen";
import GradesScreen from "../screens/GradesScreen";
import ProfileScreen from "../screens/ProfileScreen";

export default MainStackScreens = () => {
  const MainStack = createBottomTabNavigator();

  const tabBarOptions = {
    showLabel: false,
    style: {
      backgroundColor: "#4D4D4D",
      paddingBottom: 12,
    },
  };

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused }) => {
      let iconName = "home";

      switch (route.name) {
        case "Home":
          iconName = "home";
          break;

        case "Messages":
          iconName = "chat";
          break;

        case "Grades":
          iconName = "grade";
          break;

        case "Profile":
          iconName = "person";
          break;

        default:
          iconName = "home";
      }

      if (route.name === "Feed") {
        return (
          <Icon
            name="add-circle"
            size={50}
            color="#F7B61F"
            style={{
              shadowColor: "#F7B61F",
              shadowOffset: { width: 0, height: 10 },
              shadowRadius: 10,
              shadowOpacity: 0.3,
            }}
          />
        );
      }

      return (
        <Icon
          name={iconName}
          size={28}
          color={focused ? "#f1f6f9" : "#666666"}
        />
      );
    },
  });

  return (
    <MainStack.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={screenOptions}
    >
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Messages" component={MessageScreen} />
      <MainStack.Screen name="Feed" component={FeedScreen} />
      <MainStack.Screen name="Grades" component={GradesScreen} />
      <MainStack.Screen name="Profile" component={ProfileScreen} />
    </MainStack.Navigator>
  );
};
