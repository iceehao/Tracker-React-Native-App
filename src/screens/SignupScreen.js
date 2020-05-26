import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <KeyboardAvoidingView>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <ScrollView>
        <View style={styles.container}>
          <AuthForm
            headerText="Sign Up for Tracker"
            errorMessage={state.errorMessage}
            submitButtonText="Sign Up"
            onSubmit={signup}
          />
          <NavLink
            routeName="Signin"
            text="Already have an account? Sign in instead!"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // so our screen expands al lthe way to the bottom
    justifyContent: "center",
    marginBottom: 200, // gets ride of extra space on the bottom
  },
  title: {
    textAlign: "center",
  },
});

export default SignupScreen;
