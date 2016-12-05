
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import MapView from 'react-native-maps';

export default class MeetingMap extends React.Component {
    render() {
        return (
            <MapView
                style={styles.map}
                initialRegion={{
                latitude: 37.746962,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421}}>
                <MapView.Marker
                    coordinate={{ 
                        latitude: 30.246962,
                        longitude: -81.531815 }}
                    title='JaxNode'
                    description='This is my description'
                     />
            </MapView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    position: 'absolute',
    top: 0,		
    left: 0,		
    right: 0,		
    bottom: 0,
    height: 300,		   
    width: 400,		   
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});
