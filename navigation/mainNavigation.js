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
      activeTintColor: "#333",
      style: {
        backgroundColor: "gray",
        borderBottomEndRadius: 15,
        borderBottomLeftRadius: 15,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      },
      indicatorStyle: {
        backgroundColor: "blue",
        top: 82,
        width: "20%",
        marginHorizontal: "4%"
      }
    }
  }
);

export default createAppContainer(MainTopNavigaion);
