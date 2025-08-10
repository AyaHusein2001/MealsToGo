import MapView, { UrlTile } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import { useState } from 'react';
import React from 'react';
var { width, height } = Dimensions.get('window');
export const MapScreen = () => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <MapView
  style={styles.mapcontainer}
  initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
>
  <UrlTile
    urlTemplate="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
    maximumZ={19}
  />
</MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapcontainer: {
    flex: 1,
    width: width,
    height: height,
  },
});
