import React from "react";
import { Text, View, Button, ToastAndroid } from "react-native";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import NavigationService from "App/Services/NavigationService";
import Style from "./DashboardScreenStyle";

/**
 * This is an DashboardScreen of a container component.
 */

class DashboardScreen extends React.Component {
  componentDidMount() {}

  onLogout() {
    NavigationService.navigateAndReset("MainScreen");
    ToastAndroid.show("User Logout Successfully!", ToastAndroid.SHORT);
  }

  render() {
    return (
      <View style={Style.container}>
        <View>
          <Text style={Style.text}>Welcome to React World</Text>
          <View style={Style.button}>
            <Button title="Logout" onPress={this.onLogout} />
          </View>
        </View>
      </View>
    );
  }
}

DashboardScreen.propTypes = {};

// Component navigation options
DashboardScreen.navigationOptions = ({ navigation }) => ({});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardScreen);
