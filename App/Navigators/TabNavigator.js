import { createBottomTabNavigator } from "react-navigation";
import DashboardScreen from "App/Containers/Dashboard/DashboardScreen";

const routes = {
  Home: { screen: DashboardScreen },
  Profile: { screen: DashboardScreen },
  Search: { screen: DashboardScreen },
  Notification: { screen: DashboardScreen }
};

const configs = {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {}
  }),

  tabBarOptions: {
    showIcon: false,
    showLabel: true,
    style: {
      backgroundColor: "#EEEEEE"
    }, // Style object for the tab bar.
    labelStyle: {
      color: "#000000",
      fontSize: 14
    }, // Style object for the tab label.

    activeBackgroundColor: "#DDDDDD" // Background color of the active tab.
  }
};

export default createBottomTabNavigator(routes, configs);
