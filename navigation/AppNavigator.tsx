import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LogInOne from "../screens/login-screen-firebase";
import Register from "../screens/register-screen";

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LogInOne,
      navigationOptions: {
        header: null
      }
    },
    Regitster: {
      screen: Register,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(AppNavigator);
