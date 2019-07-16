import React from "react";
import { Text, View, Button, TextInput, ToastAndroid } from "react-native";
import { connect } from "react-redux";
import Style from "./LoginScreenStyle";

/**
 * This is an LoginScreen of a container component.
 */

class LoginScreen extends React.Component {
  componentDidMount() { }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  onSignIn = () => {
    const { navigation } = this.props;
    navigation.navigate("DashboardScreen");
    ToastAndroid.show('User LoggedIn Successfully!', ToastAndroid.SHORT);
  }

  onNavToSignup = () => {
    const { navigation } = this.props;
    navigation.navigate("RegisterScreen");
    ToastAndroid.show('Redirect to Signup Screen!', ToastAndroid.SHORT);
  }

  render() {
    return (
      <View style={Style.container}>
        <View>
          <Text style={Style.text}>Welcome to React Login</Text>
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
          <View style={Style.button}>
          <Button title="Sign In" onPress={this.onSignIn} />
          </View>
          <View style={Style.button}>
          <Button title="Create an Account" onPress={this.onNavToSignup} />
          </View>
        </View>
      </View>
    );
  }
}

LoginScreen.propTypes = {
};

const mapStateToProps = state => ({
});

// Component navigation options
LoginScreen.navigationOptions = ({ navigation }) => ({
  header: null
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
