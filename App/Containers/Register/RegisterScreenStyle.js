import { StyleSheet } from "react-native";
import Fonts from "App/Theme/Fonts";
import ApplicationStyles from "App/Theme/ApplicationStyles";

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    margin: 30,
    flex: 1,
    // justifyContent: "center"
  },
  input: {
    width: 350,
    height: 55,
    // backgroundColor: "#42A5F5",
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
  },
  button: {
    marginTop: 10
  },
  instructions: {
    ...Fonts.style.normal,
    textAlign: "center",
    marginBottom: 5,
    fontStyle: "italic"
  },
  loading: {
    ...Fonts.style.normal,
    textAlign: "center",
    marginBottom: 5
  },
  result: {
    ...Fonts.style.normal,
    textAlign: "center",
    marginBottom: 5
  },
  error: {
    ...Fonts.style.normal,
    textAlign: "center",
    marginBottom: 5,
    color: "red"
  },
  logoContainer: {
    width: "100%",
    height: 300,
    marginBottom: 25
  },
  logo: {
    width: "100%",
    height: "100%"
  }
});
