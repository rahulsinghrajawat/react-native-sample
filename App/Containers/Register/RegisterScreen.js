import React from "react";
import { View, Button, TextInput, ToastAndroid } from "react-native";
import { connect } from "react-redux";
import UserActions from "App/Stores/User/Actions";
import NavigationService from "App/Services/NavigationService";
import Style from "./RegisterScreenStyle";

/**
 * This is an RegisterScreen of a container component.
 */

class RegisterScreen extends React.Component {
  componentDidMount() {}

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  onSignUp = () => {
    const { navigation } = this.props;
    navigation.goBack();
    ToastAndroid.show('User Register Successfully!', ToastAndroid.SHORT);
  }

  onGoBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
    ToastAndroid.show('Redirect to SignIn Screen!', ToastAndroid.SHORT);
  }

  render() {
    return (
      <View style={Style.container}>
        <View>
          <TextInput
            style={Style.input}
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={val => this.onChangeText("username", val)}
          />
          <TextInput
            style={Style.input}
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={val => this.onChangeText("password", val)}
          />
          <TextInput
            style={Style.input}
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={val => this.onChangeText("email", val)}
          />
          <TextInput
            style={Style.input}
            placeholder="Phone Number"
            autoCapitalize="none"
            onChangeText={val => this.onChangeText("phone_number", val)}
          />
          <View style={Style.button}>
          <Button title="Sign Up"  onPress={this.onSignUp} />
          </View>
          <View style={Style.button}>
          <Button title="Back To Login" style={Style.button} onPress={this.onGoBack} />
          </View>
        </View>
      </View>
    );
  }
}

RegisterScreen.propTypes = {};

// Component navigation options
RegisterScreen.navigationOptions = ({ navigation }) => ({
  title: "Register with us"
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(UserActions.fetchUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterScreen);
