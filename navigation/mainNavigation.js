import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginWithSocial from "../screens/authScreens/loginWithSocial";

const MainTabNavigator = createStackNavigator(
  {
    LoginWithSocial: {
      screen: LoginWithSocial,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "LoginWithSocial"
  }
);

export default createAppContainer(MainTabNavigator);
