
import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  Animated,
  ActivityIndicator
} from 'react-native';
import MapView from 'react-native-maps';
import styles from './standardstyles';

function removeTags(input) {
    return input.replace(/<(?:.|\n)*?>/gm, '').replace(/^\s*[\r\n]/gm, '');
}

var NextMeeting = React.createClass({
    getInitialState () {
        return {
            loading: true,
            meeting: { 
                name: '', 
                description: '',
                time: '',
                headcount: 0,
                how_to_find_us: 'We are in the first office on the first floor',
                venue: {
                    country: '',
                    localized_country_name: "USA",
                    city: '',
                    address_1: '',
                    name: '',
                    lon: -81.531815,
                    id: 19194672,
                    state: '',
                    lat: 30.246962
                }
            },
            region: {
                latitude: 30.246962,
                longitude: -81.531815,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }
        };
    },
    componentWillMount: function() {
        fetch('https://www.jaxnode.com/v1/api/meeting')
            .then(response => {
                return response.json();
            })
            .then(json => {
                var tempRegion = {
                    latitude: json.meeting.venue.lat,
                    longitude: json.meeting.venue.lon,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                };
                this.setState(Object.assign({}, this.state, { meeting: json.meeting }, {region: tempRegion }));
                if (this.map !== null && this.map !== undefined) {
                    this.map.animateToRegion(tempRegion);
                }
            }).catch(err => {
                alert('An error occured loading the Map');
            }).finally(() => {
                this.setState(Object.assign({}, this.state, { loading: false }));
            });
    },
    render: function() {
        return (
            
                <ScrollView
                    ref={(scrollView) => { _scrollView = scrollView; }}
                    automaticallyAdjustContentInsets={false}
                    onScroll={() => { console.log('onScroll!'); }}
                    scrollEventThrottle={200}
                    style={{ flex: 1 }}
                    >
                    <MapView
                        style={mapStyles.map}
                        ref={ref => { this.map = ref; }}
                        initialRegion={this.state.region}
                        onRegionChange={this.onRegionChange}>
                        <MapView.Marker.Animated
                            coordinate={this.state.region}
                            title={this.state.meeting.venue.name}
                            description={this.state.meeting.how_to_find_us}
                        />
                    </MapView>
                    <Text style={styles.welcome}>
                        {this.state.meeting.name}
                    </Text>
                    <Text style={styles.description}>
                        {removeTags(this.state.meeting.description)}
                    </Text>
                    <Text style={styles.generalText}>
                        When: {this.state.meeting.time}
                    </Text>
                    <Text style={styles.generalText}>
                        {this.state.meeting.venue.address_1}
                    </Text>
                    <Text style={styles.generalText}>
                        {this.state.meeting.venue.city}, {this.state.meeting.venue.state}
                    </Text>
                    <ActivityIndicator
                        animating={this.state.loading}
                        style={[styles.centering, {height: 80}]}
                        size="large" />
                </ScrollView>
                
            
        );
    }
});

const mapStyles = StyleSheet.create({
  map: {
    position: 'relative',
    top: 0,		
    left: 0,		
    right: 0,		
    bottom: 0,
    height: 250,		   
    	   
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
    centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  }
});

export default NextMeeting;
