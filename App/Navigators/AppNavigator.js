import { createAppContainer, createStackNavigator } from "react-navigation";
import DashboardScreen from "App/Containers/Dashboard/DashboardScreen";
import LoginScreen from "App/Containers/Login/LoginScreen";
import RegisterScreen from "App/Containers/Register/RegisterScreen";
import SplashScreen from "App/Containers/SplashScreen/SplashScreen";
import TabNavigator from "./TabNavigator";

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    SplashScreen: SplashScreen,
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    MainScreen: LoginScreen,
    RegisterScreen: RegisterScreen,
    DashboardScreen: TabNavigator,
  },
  {
    // By default the application will show the splash screen
    initialRouteName: "SplashScreen",
    // headerMode: "none"
  }
);

export default createAppContainer(StackNavigator);
