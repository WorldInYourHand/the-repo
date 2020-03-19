import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ProfileInfo from "../screens/profileScreens/ProfileInfo";
import ChangeEmail from "../screens/profileScreens/ChangeEmail";
import ChangePassword from "../screens/profileScreens/ChangePassword";

const ProvileNavigator = createStackNavigator(
  {
    ProfileInfo: {
      screen: ProfileInfo,
      navigationOptions: {
        header: null
      }
    },
    ChangeEmail: {
      screen: ChangeEmail,
      navigationOptions: {
        header: null
      }
    },
    ChangePassword: {
      screen: ChangePassword,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "ProfileInfo"
  }
);

export default createAppContainer(ProvileNavigator);
