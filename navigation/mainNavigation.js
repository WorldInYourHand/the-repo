import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Settings from "../screens/mainScreens/HomeScreen";

const MainTabNavigator = createStackNavigator(
  {
    Settings: {
      screen: Settings,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Settings"
  }
);

export default createAppContainer(MainTabNavigator);
