import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends React.Component {
  loginWithFacebook() {
    // Function implementation goes here
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon.Button
          name="facebook"
          backgroundColor="#3b5998"
          onPress={this.loginWithFacebook}
        >
          Login with Facebook
        </Icon.Button>
          <br/>
        <Icon.Button name="github" backgroundColor="#000">
          <Text style={{ fontFamily: 'Arial', fontSize: 15, color: 'white' }}>
            Login with GitHub
          </Text>
        </Icon.Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
