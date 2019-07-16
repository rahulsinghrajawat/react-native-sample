import { StyleSheet } from "react-native";
import Fonts from "App/Theme/Fonts";
import ApplicationStyles from "App/Theme/ApplicationStyles";

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    margin: 30,
    flex: 1,
    justifyContent: "center"
  },
  input: {
    width: 350,
    height: 55,
    marginTop: 5,
    marginBottom: 5,
    padding: 8,
    color: "black",
    borderRadius: 4,
    fontSize: 18,
    fontWeight: "500",
    borderColor: "gray",
    borderWidth: 1
  },
  title: {
    ...Fonts.style.h1,
    textAlign: "center",
    marginBottom: 10
  },
  text: {
    ...Fonts.style.normal,
    textAlign: "center",
    marginBottom: 5
  }
});
