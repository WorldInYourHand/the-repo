import { createAppContainer } from "react-navigation";
import Home from "../screens/mainScreens/HomeScreen";
import Explore from "../screens/mainScreens/ExploreScreen";
import Travel from "../screens/mainScreens/TravelScreen";
import Profile from "../screens/mainScreens/ProfileScreen";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import * as colors from "../constants/Colors";
const MainTopNavigaion = createMaterialTopTabNavigator(
  {
    Home: Home,
    Explore: Explore,
    Travel: Travel,
    Profile: Profile
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 13,
        paddingTop: 40
      },
      tabStyle: {
        height: 80,
        paddingBottom: 20
      },
      activeTintColor: colors.default.blue,
      inactiveTintColor: colors.default.lightGray,
      style: {
        backgroundColor: "white",
        borderBottomEndRadius: 15,
        borderBottomLeftRadius: 15,
        position: "absolute",
        top: 0,
        width: "100%"
      },
      indicatorStyle: {
        backgroundColor: "#1a8cc9",
        top: 75
      }
    }
  }
);

export default createAppContainer(MainTopNavigaion);
