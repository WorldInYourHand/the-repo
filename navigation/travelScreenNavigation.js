  
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import FirstDestinations from "../screens/travelScreens/FirstDestinations";

const TravelScreenNavigator = createStackNavigator(
  {
    FirstDestinations: {
      screen: FirstDestinations,
      navigationOptions: {
        header: null,
      }
    },
  },
  {
    initialRouteName: "FirstDestinations"
  }
);

export default createAppContainer(TravelScreenNavigator);