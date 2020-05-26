import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import TrackForm from "../components/TrackForm";

import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );

  const [err] = useLocation(isFocused || recording, callback);

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <SafeAreaView forceInset={{ top: "always" }}>
          <Text h2>Create a Track</Text>
          <Map />

          {err ? <Text>Please enable location services </Text> : null}
          <TrackForm />
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
