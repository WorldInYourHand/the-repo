import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginWithSocial from "../screens/authScreens/loginWithSocial";
import LoginWithAcc from "../screens/authScreens/loginWithAcc";
import Register from "../screens/authScreens/register";
import ForgotenPassword from "../screens/authScreens/forgotenPassword";

const AuthNavigator = createStackNavigator(
  {
    LoginWithSocial: {
      screen: LoginWithSocial,
      navigationOptions: {
        header: null
      }
    },
    LoginWithAcc: {
      screen: LoginWithAcc,
      navigationOptions: {
        header: null
      }
    },
    RegisterScreen: {
      screen: Register,
      navigationOptions: {
        header: null
      }
    },
    ResetPassword: {
      screen: ForgotenPassword,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "LoginWithSocial"
  }
);

export default createAppContainer(AuthNavigator);
