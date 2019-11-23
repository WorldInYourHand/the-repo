import { createAppContainer } from "react-navigation";
import Home from "../screens/mainScreens/HomeScreen";
import Explore from "../screens/mainScreens/ExploreScreen";
import Travel from "../screens/mainScreens/TravelScreen";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

const MainTopNavigaion = createMaterialTopTabNavigator(
  {
    Home: Home,
    Explore: Explore,
    Travel: Travel
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 16,
        paddingTop: 40
      },
      tabStyle: {
        height: 80
      },
      style: {
        backgroundColor: "gray"
      }
    }
  }
);

export default createAppContainer(MainTopNavigaion);
